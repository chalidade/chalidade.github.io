// Hero chibi: hover waves, click/tap/Enter plays the intro. Bundled to chibi/chibi.js
// (see _motion/README.md). Timing comes only from timeline.json, keying only from
// compile.json — both are written by the oil-motion compiler, never edited by hand.
import timeline from "./timeline.json";
import { runtime } from "./compile.json";
import {
  createSegmentPlayer,
  type SegmentPlayer,
  type TimelineSegment,
} from "./lib/interactive-motion";
import {
  createChromaVideoRenderer,
  type ChromaKeyingParameters,
} from "./lib/chroma-video-renderer";

const stage = document.querySelector<HTMLElement>("[data-chibi]");
if (stage) mount(stage);

function mount(stage: HTMLElement) {
  const poster = stage.querySelector<HTMLImageElement>("img")!;
  const canvas = stage.querySelector<HTMLCanvasElement>("canvas")!;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) return; // the static poster is the reduced-motion state

  const base = new URL(stage.dataset.chibi || "chibi/", document.baseURI);
  const small = matchMedia("(max-width: 720px)").matches;
  const video = document.createElement("video");
  video.muted = true;
  video.playsInline = true;
  video.preload = "auto";
  video.setAttribute("aria-hidden", "true");
  video.src = new URL(small ? "chibi-mobile.mp4" : "chibi-desktop.mp4", base).href;

  let player: SegmentPlayer | undefined;
  let renderer: ReturnType<typeof createChromaVideoRenderer>;
  try {
    renderer = createChromaVideoRenderer({
      video,
      canvas,
      frameCount: timeline.frameCount,
      fps: timeline.fps,
      keying: runtime.keying as ChromaKeyingParameters,
    });
  } catch {
    return; // no WebGL: keep the poster, never show the green master
  }

  const fail = () => {
    player?.destroy();
    renderer.destroy();
    stage.classList.remove("is-live");
  };
  video.addEventListener("error", fail, { once: true });
  video.addEventListener("loadeddata", () => stage.classList.add("is-live"), { once: true });

  // The three states are all rest poses (frames 0, 92, 211), so re-seating the
  // player on another rest state is an invisible jump — that is how it loops.
  const seat = (state: "rest" | "waved") => {
    player?.destroy();
    player = createSegmentPlayer({
      video,
      segments: timeline.segments as TimelineSegment[],
      states: timeline.states,
      frameDuration: timeline.frameDuration,
      initialState: state,
      onStateChange: (i) => {
        renderer.stopLive();
        stage.dataset.state = timeline.states[i].id;
      },
      onError: fail,
    });
  };
  seat("rest");
  const p = () => player!;

  const go = (state: "rest" | "waved" | "introduced") => {
    renderer.startLive();
    p().goTo(state);
  };
  const busy = () => p().getState().playing;
  const at = () => p().getState().currentStateId;
  const target = () => p().getState().targetStateId;

  const wave = () => {
    if (busy()) return;
    if (at() !== "rest") seat("rest");
    go("waved");
  };
  const intro = () => {
    if (busy() && target() === "introduced") return;
    if (!busy() && at() !== "waved") seat("waved");
    go("introduced"); // mid-wave this retargets and runs straight on
  };

  stage.addEventListener("pointerenter", (e) => {
    if (e.pointerType === "mouse") wave();
  });
  stage.addEventListener("pointerleave", (e) => {
    // leaving mid-wave pulls the hand back down from where it is
    if (e.pointerType === "mouse" && busy() && target() === "waved") go("rest");
  });
  stage.addEventListener("click", intro);
  stage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      intro();
    }
  });

  // Say hi once, the first time the hero is on screen.
  let greeted = false;
  const io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) {
      if (busy()) p().cancel();
      renderer.stopLive();
      return;
    }
    if (greeted) return;
    greeted = true;
    const start = () => setTimeout(wave, 700);
    if (video.readyState >= 2) start();
    else video.addEventListener("loadeddata", start, { once: true });
  }, { threshold: 0.4 });
  io.observe(stage);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden && busy()) {
      p().cancel();
      renderer.stopLive();
    }
  });
}
