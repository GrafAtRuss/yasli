export const LANGS = ["ru", "be", "uk", "it", "en", "fr", "de", "es", "pt", "pl"] as const;

export type Lang = (typeof LANGS)[number];

export const LANG_LABEL: Record<Lang, string> = {
  ru: "Русский",
  be: "Беларуская",
  uk: "Українська",
  it: "Italiano",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  es: "Español",
  pt: "Português",
  pl: "Polski",
};

export const SPEECH_LANG: Record<Lang, string> = {
  ru: "ru-RU",
  be: "be-BY",
  uk: "uk-UA",
  it: "it-IT",
  en: "en-US",
  fr: "fr-FR",
  de: "de-DE",
  es: "es-ES",
  pt: "pt-PT",
  pl: "pl-PL",
};

export type QuizPack = {
  prompt: string;
  explain: string;
  a: string;
  b: string;
  c: string;
  d: string;
};

export type StationPack = {
  title: string;
  kicker: string;
  story: string;
  together?: { prompt: string; explain: string };
  child?: QuizPack;
  adult?: QuizPack;
};

export type UiPack = {
  kicker: string;
  appTitle: string;
  lead: string;
  family: string;
  solo: string;
  how: string;
  note: string;
  author: string;
  howTitle: string;
  steps: Array<{ title: string; text: string }>;
  howFoot: string;
  versionLabel: string;
  who: string;
  whoNote: string;
  short: string;
  shortNote: string;
  evening: string;
  eveningNote: string;
  player: string;
  removePlayer: string;
  nameLabel: string;
  child: string;
  adult: string;
  nameError: string;
  add: string;
  start: string;
  back: string;
  togetherNote: string;
  passPhone: string;
  ready: string;
  togetherReady: string;
  answers: string;
  readAloud: string;
  weSaid: string;
  right: string;
  wrong: string;
  remember: string;
  commonStar: string;
  next: string;
  toManger: string;
  stars: string;
  leaveTitle: string;
  leaveNote: string;
  stay: string;
  home: string;
  mute: string;
  unmute: string;
  sayName: string;
  shortPath: string;
  eveningPath: string;
  gathered: string;
  withAngels: string;
  again: string;
  gospelRef: string;
  best: string;
  language: string;
  musicCredit: string;
  defaultChild: string;
  defaultAdult: string;
};

export type LangPack = {
  ui: UiPack;
  gospel: string;
  prayer: string;
  stations: Record<string, StationPack>;
};

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value);
}
