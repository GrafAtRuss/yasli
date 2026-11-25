let ctx: AudioContext | null = null;
let musicWanted = false;
let musicTimer = 0;
let musicAt = 0;
let musicStep = 0;

/** Тихая музыкальная шкатулка. Мелодия «Тихой ночи» — народное достояние. */
const CAROL: Array<[number, number]> = [
  [392, 1.5], [440, 0.5], [392, 1], [329.63, 2],
  [392, 1.5], [440, 0.5], [392, 1], [329.63, 2],
  [587.33, 2], [587.33, 1], [493.88, 3],
  [523.25, 2], [523.25, 1], [392, 3],
  [440, 2], [440, 1], [523.25, 1.5], [493.88, 0.5], [440, 1], [392, 1.5], [440, 0.5], [392, 1], [329.63, 2],
  [440, 2], [440, 1], [523.25, 1.5], [493.88, 0.5], [440, 1], [392, 1.5], [440, 0.5], [392, 1], [329.63, 3],
  [587.33, 2], [587.33, 1], [698.46, 1.5], [587.33, 0.5], [493.88, 1], [523.25, 2], [659.25, 1], [523.25, 3],
];

const BEAT = 0.52;

export function unlockAudio() {
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  if (!ctx) ctx = new Ctx();
  if (ctx.state === "suspended") void ctx.resume();
}

export function syncMusic(muted: boolean) {
  unlockAudio();
  musicWanted = !muted && Boolean(ctx);
  if (!musicWanted) {
    if (musicTimer) window.clearTimeout(musicTimer);
    musicTimer = 0;
    return;
  }
  if (!musicTimer) pumpMusic();
}

function pumpMusic() {
  if (!ctx || !musicWanted) {
    musicTimer = 0;
    return;
  }
  const horizon = ctx.currentTime + 1.4;
  if (musicAt < ctx.currentTime + 0.02) musicAt = ctx.currentTime + 0.08;
  while (musicAt < horizon) {
    const note = CAROL[musicStep % CAROL.length];
    const freq = note?.[0] ?? 0;
    const beats = note?.[1] ?? 1;
    const dur = beats * BEAT;
    if (freq > 0) bell(musicAt, freq, Math.min(1.7, dur + 0.35));
    musicAt += dur;
    musicStep = (musicStep + 1) % CAROL.length;
    if (musicStep === 0) musicAt += BEAT * 2;
  }
  musicTimer = window.setTimeout(pumpMusic, 350);
}

function bell(time: number, freq: number, dur: number) {
  if (!ctx) return;
  const master = ctx.createGain();
  master.connect(ctx.destination);
  master.gain.setValueAtTime(0.0001, time);
  master.gain.exponentialRampToValueAtTime(0.03, time + 0.02);
  master.gain.exponentialRampToValueAtTime(0.0001, time + dur);
  const fundamental = ctx.createOscillator();
  fundamental.type = "sine";
  fundamental.frequency.value = freq;
  fundamental.connect(master);
  const shimmer = ctx.createOscillator();
  const shimmerGain = ctx.createGain();
  shimmer.type = "triangle";
  shimmer.frequency.value = freq * 2;
  shimmerGain.gain.value = 0.18;
  shimmer.connect(shimmerGain);
  shimmerGain.connect(master);
  fundamental.start(time);
  shimmer.start(time);
  fundamental.stop(time + dur + 0.02);
  shimmer.stop(time + dur + 0.02);
}

export function playTone(kind: "yes" | "no", muted: boolean) {
  if (muted || !ctx) return;
  const now = ctx.currentTime;
  const notes = kind === "yes" ? [523.25, 659.25, 783.99] : [349.23, 311.13];
  notes.forEach((freq, i) => {
    const osc = ctx!.createOscillator();
    const gain = ctx!.createGain();
    osc.type = "sine";
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(ctx!.destination);
    const t = now + i * 0.11;
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.045, t + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.55);
    osc.start(t);
    osc.stop(t + 0.58);
  });
}