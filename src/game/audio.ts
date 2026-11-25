let ctx: AudioContext | null = null;

export function unlockAudio() {
  const Ctx =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return;
  if (!ctx) ctx = new Ctx();
  if (ctx.state === "suspended") void ctx.resume();
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
