export type Voice =
  | { kind: "back" }
  | { kind: "home" }
  | { kind: "family" }
  | { kind: "solo" }
  | { kind: "how" }
  | { kind: "short" }
  | { kind: "evening" }
  | { kind: "next" }
  | { kind: "name"; name: string };

type YasliNative = {
  listen?: () => void;
  exitApp?: () => void;
  form?: () => string;
};

function native(): YasliNative | null {
  if (typeof window === "undefined") return null;
  const bridge = (window as unknown as { YasliNative?: YasliNative }).YasliNative;
  return bridge ?? null;
}

export function isTv(): boolean {
  if (typeof navigator === "undefined") return false;
  if (/YasliTV/i.test(navigator.userAgent)) return true;
  return native()?.form?.() === "tv";
}

export function canListen(): boolean {
  if (typeof window === "undefined") return false;
  if (typeof native()?.listen === "function") return true;
  const web = window as unknown as {
    SpeechRecognition?: unknown;
    webkitSpeechRecognition?: unknown;
  };
  return Boolean(web.SpeechRecognition || web.webkitSpeechRecognition);
}

let speechLang = "ru-RU";

export function setSpeechLang(code: string) {
  speechLang = code;
}

export function listenForName(onName: (name: string) => void): void {
  const bridge = native();
  if (typeof bridge?.listen === "function") {
    (window as unknown as { yasliHeard?: (text: string) => void }).yasliHeard = (text: string) => {
      onName(cleanName(text));
    };
    bridge.listen();
    return;
  }
  const web = window as unknown as {
    SpeechRecognition?: new () => SpeechRec;
    webkitSpeechRecognition?: new () => SpeechRec;
  };
  const Rec = web.SpeechRecognition || web.webkitSpeechRecognition;
  if (!Rec) return;
  const rec = new Rec();
  rec.lang = speechLang;
  rec.interimResults = false;
  rec.maxAlternatives = 1;
  rec.onresult = (event) => {
    const said = event.results[0]?.[0]?.transcript ?? "";
    onName(cleanName(said));
  };
  rec.start();
}

type SpeechRec = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null;
  start: () => void;
};

export function exitApp(): void {
  native()?.exitApp?.();
}

export function cleanName(raw: string): string {
  return raw.trim().replace(/\s+/g, " ").slice(0, 18);
}

export function interpretVoice(raw: string): Voice {
  const text = raw.trim().toLowerCase().replace(/ё/g, "е");
  if (!text) return { kind: "name", name: "" };
  if (/(^|\s)(назад|вернись|back|indietro|retour|zurück|zuruck|atrás|atras|voltar|wstecz|назад|вярніся|назад)(\s|$)/.test(text)) return { kind: "back" };
  if (/на главную|домой|главн|home|inizio|accueil|startseite|inicio|início|inicio|początek|додому|дадому|на галоўную/.test(text)) return { kind: "home" };
  if (/как играть|правил|how to play|come si gioca|comment jouer|anleitung|cómo jugar|como jogar|jak grać|як грати|як гуляць/.test(text)) return { kind: "how" };
  if (/семейн|с семьей|с семьеи|вместе|family|famigl|famille|familie|familia|família|rodzin|сім|сем'ї|сямейн/.test(text)) return { kind: "family" };
  if (/одному|в одиночку|(^|\s)соло(\s|$)|(^|\s)solo(\s|$)|sozinho|(^|\s)allein(\s|$)|(^|\s)seul(\s|$)|samemu|самому|аднаму|одному/.test(text)) return { kind: "solo" };
  if (/коротк|каротк|(^|\s)short(\s|$)|(^|\s)breve(\s|$)|(^|\s)court(\s|$)|(^|\s)kurz(\s|$)|(^|\s)corto(\s|$)|(^|\s)curto(\s|$)|krótk|krotk/.test(text)) return { kind: "short" };
  if (/вечерн|evening|sera|soir|abend|tarde|noite|wieczór|вечорн|вячэрн/.test(text)) return { kind: "evening" };
  if (/дальше|следующ|к яслям|я готов|смотрим вместе|пройти ещ|next|avanti|suivant|weiter|siguiente|próximo|proximo|dalej|далі|далей/.test(text)) return { kind: "next" };
  return { kind: "name", name: cleanName(raw) };
}

type Dir = "left" | "right" | "up" | "down";

export type FocusBox = { left: number; top: number; right: number; bottom: number };

function rangesOverlap(a0: number, a1: number, b0: number, b1: number): boolean {
  return Math.min(a1, b1) - Math.max(a0, b0) > 4;
}

/** Ближний по ходу стрелки. Сначала тот, кто пересекается с текущим поперёк хода — иначе широкое поле имени пропускается. */
export function bestFocusIndex(dir: Dir, current: FocusBox, items: FocusBox[]): number {
  const vertical = dir === "up" || dir === "down";
  let best = -1;
  let bestScore = Infinity;
  for (let index = 0; index < items.length; index += 1) {
    const item = items[index];
    if (!item || item === current) continue;
    const ahead =
      dir === "down"
        ? item.top - current.bottom
        : dir === "up"
          ? current.top - item.bottom
          : dir === "right"
            ? item.left - current.right
            : current.left - item.right;
    if (ahead < -4) continue;
    const overlap = vertical
      ? rangesOverlap(current.left, current.right, item.left, item.right)
      : rangesOverlap(current.top, current.bottom, item.top, item.bottom);
    const sideways = vertical
      ? Math.abs((item.left + item.right) / 2 - (current.left + current.right) / 2)
      : Math.abs((item.top + item.bottom) / 2 - (current.top + current.bottom) / 2);
    const score = (overlap ? 0 : 100000) + Math.max(0, ahead) + sideways * 0.2;
    if (score < bestScore) {
      bestScore = score;
      best = index;
    }
  }
  return best;
}

function focusables(): HTMLElement[] {
  const modal = document.querySelector("[data-modal]");
  const root: ParentNode = modal ?? document;
  return Array.from(root.querySelectorAll<HTMLElement>("button:not(:disabled), input:not(:disabled), a[href]")).filter(
    (el) => {
      if (modal && !modal.contains(el)) return false;
      const box = el.getBoundingClientRect();
      return box.width > 0 && box.height > 0;
    },
  );
}

function boxOf(el: HTMLElement): FocusBox {
  const box = el.getBoundingClientRect();
  return { left: box.left, top: box.top, right: box.right, bottom: box.bottom };
}

export function moveFocus(dir: Dir): void {
  const items = focusables();
  if (items.length === 0) return;
  const current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
  if (!current || !items.includes(current)) {
    items[0]?.focus();
    return;
  }
  const index = bestFocusIndex(dir, boxOf(current), items.map(boxOf));
  const next = index >= 0 ? items[index] : document.querySelector("[data-modal]") ? items[(items.indexOf(current) + 1) % items.length] : null;
  if (!next || next === current) return;
  next.focus();
  next.scrollIntoView({ block: "nearest", inline: "nearest" });
}

export function pressLabeled(pattern: RegExp): boolean {
  const button = focusables().find((el) => el.tagName === "BUTTON" && pattern.test(el.textContent ?? ""));
  if (!(button instanceof HTMLButtonElement)) return false;
  button.click();
  return true;
}

export function installRemote(onVoice: (voice: Voice) => void, onBack: () => void): () => void {
  document.documentElement.dataset.form = isTv() ? "tv" : "phone";
  const win = window as unknown as {
    yasliVoice?: (text: string) => void;
    yasliOpen?: (screen: string) => void;
    yasliBack?: () => void;
  };
  win.yasliVoice = (text: string) => onVoice(interpretVoice(text));
  win.yasliOpen = (screen: string) => {
    if (screen === "family" || screen === "solo" || screen === "how" || screen === "home" || screen === "short" || screen === "evening") {
      onVoice({ kind: screen });
      return;
    }
    onVoice(interpretVoice(screen));
  };
  win.yasliBack = () => onBack();
  const onKey = (event: KeyboardEvent) => {
    if (!isTv()) return;
    const dir =
      event.key === "ArrowLeft" ? "left" : event.key === "ArrowRight" ? "right" : event.key === "ArrowUp" ? "up" : event.key === "ArrowDown" ? "down" : null;
    if (dir) {
      const active = document.activeElement;
      if (active instanceof HTMLInputElement && (dir === "left" || dir === "right")) return;
      event.preventDefault();
      moveFocus(dir);
      return;
    }
    if (event.key === "Escape" || event.key === "GoBack" || event.key === "BrowserBack") {
      event.preventDefault();
      onBack();
    }
  };
  window.addEventListener("keydown", onKey);
  return () => window.removeEventListener("keydown", onKey);
}
