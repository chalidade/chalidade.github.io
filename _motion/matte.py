"""White-background matte for the chibi video.

Background = pixels connected to the frame border through near-white (d<=T_BG).
Contact shadow = neutral light pixels below SHADOW_Y connected to that background;
they become black at partial alpha so the shadow works on light and dark pages.
Everything else is the figure (alpha 1), so the enclosed white shirt survives.
"""
import sys, glob, os, time
import numpy as np
from PIL import Image, ImageFilter

BG = 253.0
T_BG = 6          # max distance from white that still counts as background
SHADOW_Y = 1080   # shadow candidates only below this row (feet)
GAP_Y = 990       # below the hands: enclosed light-grey pockets (between the legs) are background too
EDGE = 24.0       # softness ramp for edge alpha, in distance-from-white units

def reconstruct(seed, mask):
    r = seed & mask
    while True:
        g = r.copy()
        g[1:] |= r[:-1]; g[:-1] |= r[1:]; g[:, 1:] |= r[:, :-1]; g[:, :-1] |= r[:, 1:]
        g &= mask
        if (g == r).all() if g.sum() == r.sum() else False:
            return g
        r = g

def dilate(m, k):
    im = Image.fromarray(m.astype(np.uint8) * 255).filter(ImageFilter.MaxFilter(k))
    return np.asarray(im) > 127

def matte(rgb):
    c = rgb.astype(np.float32)
    mn = c.min(2); mx = c.max(2)
    d = np.clip(BG - mn, 0, 255)
    border = np.zeros(d.shape, bool)
    border[0] = border[-1] = True; border[:, 0] = border[:, -1] = True
    bg = reconstruct(border, d <= T_BG)
    yy = np.arange(d.shape[0])[:, None]
    neutral = (mx - mn) <= 10
    shadow_cand = neutral & (mn >= 140) & (yy >= SHADOW_Y)
    shadow = reconstruct(bg, bg | shadow_cand) & ~bg
    shadow |= neutral & (mn >= 165) & (yy >= GAP_Y) & ~bg

    alpha = np.ones(d.shape, np.float32)
    alpha[bg] = 0
    # soft rim: pixels just inside the figure next to background
    rim = dilate(bg, 5) & ~bg & ~shadow
    a_rim = np.clip((d - T_BG) / EDGE, 0, 1)
    alpha[rim] = np.maximum(a_rim[rim], 0.0)
    # shadow: darkness relative to background becomes alpha of black
    a_sh = np.clip((BG - mn) / BG * 2.2, 0, 0.55)
    alpha[shadow] = a_sh[shadow]

    out = np.empty(c.shape, np.float32)
    a3 = alpha[..., None]
    safe = np.maximum(a3, 1e-3)
    out[:] = np.clip((c - (1 - a3) * BG) / safe, 0, 255)  # un-mix from white
    out[shadow] = 0
    return np.dstack([out, alpha * 255]).astype(np.uint8)

if __name__ == "__main__":
    src, dst = sys.argv[1], sys.argv[2]
    os.makedirs(dst, exist_ok=True)
    files = sorted(glob.glob(os.path.join(src, "f*.png")))
    sel = sys.argv[3:]  # optional frame names
    if sel: files = [os.path.join(src, s) for s in sel]
    for f in files:
        t = time.time()
        rgba = matte(np.asarray(Image.open(f).convert("RGB")))
        Image.fromarray(rgba, "RGBA").save(os.path.join(dst, os.path.basename(f)))
    print("done", len(files), "last %.2fs" % (time.time() - t))
