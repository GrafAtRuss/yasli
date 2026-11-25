import { media } from "@/game/media";

let ctx: AudioContext | null = null;
let music: HTMLAudioElement | null = null;
let track = 0;
let wanted = true;

/** Общественное достояние: ВВС и армия США, фортепиано. Wikimedia Commons. */
const TRACKS = [
  media("/music/silent-nights.mp3"),
  media("/music/hark-the-herald.mp3"),
  media("/music/joy-to-the-world.mp3"),
];

export function unlockAudio() {
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  if (!ctx) ctx = new Ctx();
  if (ctx.state === "suspended") void ctx.resume();
}

function ensureMusic() {
  if (music || typeof Audio === "undefined") return;
  music = new Audio(TRACKS[0]);
  music.preload = "auto";
  music.volume = 0.55;
  music.addEventListener("ended", () => {
    track = (track + 1) % TRACKS.length;
    if (!music) return;
    music.src = TRACKS[track] ?? TRACKS[0];
    if (wanted) void music.play().catch(() => undefined);
  });
  music.addEventListener("error", () => {
    track = (track + 1) % TRACKS.length;
    if (!music || !wanted) return;
    const next = TRACKS[track];
    if (!next || music.src.endsWith(next)) return;
    music.src = next;
    void music.play().catch(() => undefined);
  });
}

export function syncMusic(muted: boolean) {
  unlockAudio();
  ensureMusic();
  wanted = !muted;
  if (!music) return;
  if (muted) {
    music.pause();
    return;
  }
  void music.play().catch(() => undefined);
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
