import { GOSPEL, PRAYER, STATIONS, withPack, type Length, type Station } from "@/game/content";
import be from "@/game/locales/be";
import de from "@/game/locales/de";
import en from "@/game/locales/en";
import es from "@/game/locales/es";
import fr from "@/game/locales/fr";
import it from "@/game/locales/it";
import pl from "@/game/locales/pl";
import pt from "@/game/locales/pt";
import ruUi from "@/game/locales/ru";
import uk from "@/game/locales/uk";
import { LANGS, SPEECH_LANG, isLang, type Lang, type LangPack, type UiPack } from "@/game/i18n/types";

const packs: Partial<Record<Lang, LangPack>> = {
  be,
  uk,
  it,
  en,
  fr,
  de,
  es,
  pt,
  pl,
};

export function installPack(lang: Lang, pack: LangPack) {
  packs[lang] = pack;
}

export function readLang(): Lang {
  try {
    const saved = localStorage.getItem("yasli-lang");
    if (saved && isLang(saved)) return saved;
  } catch {
    /* private mode */
  }
  const list = typeof navigator === "undefined" ? [] : navigator.languages?.length ? navigator.languages : [navigator.language];
  for (const tag of list) {
    const base = tag.toLowerCase().split("-")[0] ?? "";
    if (isLang(base)) return base;
  }
  return "en";
}

export function storeLang(lang: Lang) {
  try {
    localStorage.setItem("yasli-lang", lang);
  } catch {
    /* ignore */
  }
}

export function speechOf(lang: Lang): string {
  return SPEECH_LANG[lang];
}

export function uiOf(lang: Lang): UiPack {
  return packOf(lang).ui;
}

export function gospelOf(lang: Lang): string {
  return lang === "ru" ? GOSPEL : (packs[lang]?.gospel ?? en.gospel);
}

export function prayerOf(lang: Lang): string {
  return lang === "ru" ? PRAYER : (packs[lang]?.prayer ?? en.prayer);
}

export function stationsOf(length: Length, lang: Lang): Station[] {
  const text = lang === "ru" ? undefined : (packs[lang] ?? en).stations;
  return STATIONS.filter((station) => length === "evening" || station.short).map((station) =>
    withPack(station, text?.[station.id]),
  );
}

export function defaultNamePool(): string[] {
  const names = [ruUi.defaultChild, ruUi.defaultAdult, en.ui.defaultChild, en.ui.defaultAdult];
  for (const pack of Object.values(packs)) {
    if (!pack) continue;
    names.push(pack.ui.defaultChild, pack.ui.defaultAdult);
  }
  return names;
}

function packOf(lang: Lang): LangPack {
  if (lang === "ru") {
    return { ui: ruUi, gospel: GOSPEL, prayer: PRAYER, stations: {} };
  }
  return packs[lang] ?? en;
}

export { LANGS };
export type { Lang, UiPack };
