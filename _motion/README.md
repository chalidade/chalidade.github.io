# Hero chibi (oil-motion)

Chibi di hero: diam saat idle, **hover** → melambai, **klik / tap / Enter** → perkenalan
(buka tangan, tunjuk diri, jempol). Saat hero pertama kali terlihat, ia menyapa sekali.
Folder ini berawalan `_`, jadi tidak ikut dipublikasikan Jekyll — yang tayang hanya `chibi/`.

## Isi

| File | Peran |
| --- | --- |
| `concept-contract.yaml` | apa yang diminta (subjek, interaksi, tujuan tampil) |
| `motion-brief.yaml` | rencana turunan: state, rentang frame, kebijakan gestur |
| `motion-budget.json` | hasil `motion_budget.py` → `chroma-video` + `segment-playback` |
| `timeline.json` | waktu state & segmen, ditulis compiler — **jangan diedit tangan** |
| `compile.json` | parameter keying runtime + laporan QA compiler |
| `matte.py` | buang background putih video sumber (flood fill dari tepi, jadi kemeja putih aman) |
| `chibi.ts` | entry runtime → dibundle ke `chibi/chibi.js` |
| `lib/` | salinan `interactive-motion.ts` dan `chroma-video-renderer.ts` dari skill oil-motion |

## Timeline

Satu video, tiga state yang semuanya pose diam: `rest` (frame 0) → `waved` (92) →
`introduced` (211). Karena ketiganya pose diam, player dipasang ulang di `rest`/`waved`
untuk mengulang — lompatannya tidak terlihat.

## Membuat ulang

Sumber: video Gemini 720×1280 24 fps (background putih). Butuh Python 3 + Pillow + numpy,
ffmpeg, dan skill oil-motion (`OM=~/.claude/skills/oil-motion`).

```bash
ffmpeg -i source.mp4 -vsync 0 frames/f%03d.png
python3 _motion/matte.py frames alpha $(cd frames; ls | head -212)   # frame 0..211
# komposit ke #00FF00, crop y 80..1280 (720×1200), lalu encode → green-master.mp4
python3 $OM/scripts/compile_scroll_video.py green-master.mp4 build \
  --background-owner page --budget-report _motion/motion-budget.json \
  --frame-policy native --timeline-output _motion/timeline.json \
  --initial-state-id rest --segment waved=0:92:93 --segment introduced=93:211:212 \
  --desktop-width 480 --mobile-width 360 --desktop-crf 22 --mobile-crf 24
# salin build/final/* → chibi/ (chibi-desktop.mp4, chibi-mobile.mp4, poster.webp)
npx esbuild@0.24.0 _motion/chibi.ts --bundle --format=iife --minify --target=es2020 --outfile=chibi/chibi.js
```

Jika WebGL atau video gagal, atau pengunjung memilih `prefers-reduced-motion`, yang tampil
`chibi/poster.webp` (pose diam transparan) — master hijau tidak pernah terlihat.
