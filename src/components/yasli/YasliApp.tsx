import { createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, BookOpen, Mic, Plus, Star, Users, Volume2, VolumeX, X } from "lucide-react";
import { playTone, syncMusic, unlockAudio } from "@/game/audio";
import { quizFor, type Choice, type Length, type Quiz, type Role, type Station } from "@/game/content";
import {
  LANGS,
  defaultNamePool,
  gospelOf,
  prayerOf,
  readLang,
  speechOf,
  stationsOf,
  storeLang,
  uiOf,
  type Lang,
  type UiPack,
} from "@/game/i18n";
import { LANG_LABEL } from "@/game/i18n/types";
import { emptySave, loadSave, writeSave, type Save } from "@/game/storage";
import { media } from "@/game/media";
import { canListen, exitApp, installRemote, listenForName, pressLabeled, setSpeechLang, type Voice } from "@/game/remote";
import { APP_AUTHOR, APP_EMAIL, APP_NAME, APP_VERSION } from "@/game/version";

const UiContext = createContext<{ ui: UiPack; gospel: string; prayer: string }>({
  ui: uiOf("ru"),
  gospel: "",
  prayer: "",
});

function useUi() {
  return useContext(UiContext).ui;
}

function useBundle() {
  return useContext(UiContext);
}

function fill(template: string, vars: Record<string, string | number>) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => String(vars[key] ?? ""));
}

type Screen = "home" | "how" | "setup" | "handoff" | "play" | "done";

type Player = {
  id: string;
  name: string;
  role: Role;
  stars: number;
};

type Run = {
  length: Length;
  players: Player[];
  stations: Station[];
  index: number;
  turn: number;
  seed: number;
  earned: boolean[];
  familyStars: number;
  phase: "ask" | "told";
  picked: string | null;
};

function newPlayer(role: Role, name: string): Player {
  return { id: Math.random().toString(36).slice(2, 9), name, role, stars: 0 };
}

function pairFor(lang: Lang): Player[] {
  const ui = uiOf(lang);
  return [newPlayer("child", ui.defaultChild), newPlayer("adult", ui.defaultAdult)];
}

function shuffle(choices: Choice[], seed: number): Choice[] {
  const items = [...choices];
  let state = seed % 2147483646 || 1;
  for (let i = items.length - 1; i > 0; i -= 1) {
    state = (state * 16807) % 2147483647;
    const j = state % (i + 1);
    const swap = items[i];
    items[i] = items[j]!;
    items[j] = swap!;
  }
  return items;
}

function totalStars(run: Run): number {
  return run.players.reduce((sum, player) => sum + player.stars, 0) + run.familyStars;
}

export function YasliApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [length, setLength] = useState<Length>("short");
  const [lang, setLang] = useState<Lang>(readLang);
  const [langOpen, setLangOpen] = useState(false);
  const [draft, setDraft] = useState<Player[]>(() => pairFor(readLang()));
  const [run, setRun] = useState<Run | null>(null);
  const [save, setSave] = useState<Save>(emptySave);
  const [confirmLeave, setConfirmLeave] = useState(false);
  const [nameError, setNameError] = useState(false);
  const screenRef = useRef(screen);
  const confirmRef = useRef(confirmLeave);
  screenRef.current = screen;
  confirmRef.current = confirmLeave;

  const actions = useRef({
    openFamily: () => undefined as void,
    openSolo: () => undefined as void,
    how: () => undefined as void,
    home: () => undefined as void,
    back: () => undefined as void,
    length: (_length: Length) => undefined as void,
    name: (_name: string) => undefined as void,
  });

  const voiceRef = useRef<(voice: Voice) => void>(() => undefined);

  useEffect(() => {
    setSave(loadSave());
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    setSpeechLang(speechOf(lang));
  }, [lang]);

  useEffect(() => {
    syncMusic(save.muted);
    const start = () => syncMusic(save.muted);
    window.addEventListener("pointerdown", start);
    window.addEventListener("keydown", start);
    return () => {
      window.removeEventListener("pointerdown", start);
      window.removeEventListener("keydown", start);
    };
  }, [save.muted]);

  useEffect(() => {
    return installRemote(
      (voice) => voiceRef.current(voice),
      () => actions.current.back(),
    );
  }, []);

  function applyVoice(voice: Voice) {
    if (voice.kind === "family") actions.current.openFamily();
    else if (voice.kind === "solo") actions.current.openSolo();
    else if (voice.kind === "how") actions.current.how();
    else if (voice.kind === "home") actions.current.home();
    else if (voice.kind === "back") actions.current.back();
    else if (voice.kind === "short") actions.current.length("short");
    else if (voice.kind === "evening") actions.current.length("evening");
    else if (voice.kind === "next") {
      const labels = uiOf(lang);
      pressAction(labels);
    } else if (voice.kind === "name" && voice.name) {
      const said = voice.name.trim();
      const exact = said.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      if (said.length >= 3 && pressLabeled(new RegExp(`^\\s*${exact}\\s*$`, "i"))) return;
      window.dispatchEvent(new CustomEvent("yasli-name", { detail: voice.name }));
    }
  }
  voiceRef.current = applyVoice;

  function pressAction(labels: ReturnType<typeof uiOf>) {
    const bits = [labels.next, labels.toManger, labels.ready, labels.togetherReady, labels.start, labels.again, labels.weSaid].map(
      (label) => label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
    );
    pressLabeled(new RegExp(bits.join("|"), "i"));
  }

  function persist(next: Save) {
    setSave(next);
    writeSave(next);
  }

  function toggleMute() {
    const muted = !save.muted;
    persist({ ...save, muted });
    syncMusic(muted);
  }

  function chooseLang(next: Lang) {
    setLang(next);
    storeLang(next);
    setLangOpen(false);
    const known = new Set(defaultNamePool());
    const nextUi = uiOf(next);
    setDraft((players) =>
      players.map((player) =>
        known.has(player.name)
          ? { ...player, name: player.role === "child" ? nextUi.defaultChild : nextUi.defaultAdult }
          : player,
      ),
    );
    setRun((current) => {
      if (!current) return current;
      const fresh = new Map(stationsOf(current.length, next).map((station) => [station.id, station]));
      return { ...current, stations: current.stations.map((station) => fresh.get(station.id) ?? station) };
    });
  }

  function begin(players: Player[], path: Length) {
    const cleaned = players.map((player) => ({
      ...player,
      name: player.name.trim(),
      stars: 0,
    }));
    if (cleaned.some((player) => player.name.length === 0)) {
      setNameError(true);
      return;
    }
    unlockAudio();
    const stations = stationsOf(path, lang);
    const next: Run = {
      length: path,
      players: cleaned,
      stations,
      index: 0,
      turn: 0,
      seed: Date.now() % 100000,
      earned: stations.map(() => false),
      familyStars: 0,
      phase: "ask",
      picked: null,
    };
    setRun(next);
    setConfirmLeave(false);
    setNameError(false);
    setScreen(cleaned.length > 1 ? "handoff" : "play");
  }

  function openSetup(mode: "family" | "solo") {
    setLength("short");
    setNameError(false);
    setDraft(mode === "family" ? pairFor(lang) : [newPlayer("child", uiOf(lang).defaultChild)]);
    setScreen("setup");
  }

  function leaveHome() {
    setRun(null);
    setConfirmLeave(false);
    setScreen("home");
  }

  function goBack() {
    if (confirmRef.current) {
      setConfirmLeave(false);
      return;
    }
    if (langOpen) {
      setLangOpen(false);
      return;
    }
    const where = screenRef.current;
    if (where === "play") {
      setConfirmLeave(true);
      return;
    }
    if (where === "home") {
      exitApp();
      return;
    }
    setRun(null);
    setConfirmLeave(false);
    setScreen("home");
  }

  actions.current = {
    openFamily: () => openSetup("family"),
    openSolo: () => openSetup("solo"),
    how: () => setScreen("how"),
    home: leaveHome,
    back: goBack,
    length: setLength,
    name: () => undefined,
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const modal = document.querySelector("[data-modal]");
      if (modal) {
        modal.querySelector<HTMLElement>("button")?.focus();
        return;
      }
      if (document.documentElement.dataset.form !== "tv") return;
      const active = document.activeElement;
      if (active instanceof HTMLElement && active !== document.body) return;
      document.querySelector<HTMLElement>("section button:not(:disabled)")?.focus();
    }, 40);
    return () => window.clearTimeout(timer);
  }, [screen, run?.index, run?.phase, confirmLeave, langOpen]);

  const station = run?.stations[run.index];
  const player = run ? run.players[run.turn] : undefined;

  function choose(id: string, quiz: Quiz) {
    if (!run || run.phase !== "ask" || !player) return;
    const correct = id === quiz.answerId;
    const players = run.players.map((item, index) =>
      index === run.turn && correct ? { ...item, stars: item.stars + 1 } : item,
    );
    const earned = run.earned.slice();
    if (correct) earned[run.index] = true;
    setRun({ ...run, players, earned, phase: "told", picked: id });
    playTone(correct ? "yes" : "no", save.muted);
    if (navigator.vibrate) navigator.vibrate(correct ? [10, 40, 14] : 16);
  }

  function finishTogether() {
    if (!run || run.phase !== "ask" || !station?.together) return;
    const earned = run.earned.slice();
    earned[run.index] = true;
    setRun({
      ...run,
      earned,
      familyStars: run.familyStars + 1,
      phase: "told",
      picked: "together",
    });
    playTone("yes", save.muted);
  }

  function advance() {
    if (!run) return;
    const last = run.index >= run.stations.length - 1;
    if (last) {
      const score = totalStars(run);
      const nextSave: Save = {
        ...save,
        played: save.played + 1,
        bestShort: run.length === "short" ? Math.max(save.bestShort, score) : save.bestShort,
        bestEvening: run.length === "evening" ? Math.max(save.bestEvening, score) : save.bestEvening,
      };
      persist(nextSave);
      setScreen("done");
      return;
    }
    const index = run.index + 1;
    const turn = (run.turn + 1) % run.players.length;
    const nextRun: Run = { ...run, index, turn, phase: "ask", picked: null };
    setRun(nextRun);
    const upcoming = run.stations[index];
    if (!upcoming) return;
    setScreen(run.players.length > 1 ? "handoff" : "play");
  }

  const ui = uiOf(lang);

  return (
    <UiContext.Provider value={{ ui, gospel: gospelOf(lang), prayer: prayerOf(lang) }}>
    <div className="relative h-dvh overflow-hidden bg-night text-ink">
      <div className="chrome-fab">
        <button className="icon-btn text-xs font-semibold" aria-label={ui.language} onClick={() => setLangOpen(true)}>
          {lang.toUpperCase()}
        </button>
        <button className="icon-btn" aria-label={save.muted ? ui.unmute : ui.mute} onClick={toggleMute}>
          {save.muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </button>
      </div>
      {langOpen ? (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-night/80 p-4" data-modal role="dialog" aria-modal="true" aria-label={ui.language}>
          <div className="grid w-full max-w-md grid-cols-2 gap-2 rounded-card bg-night-2 p-4">
            {LANGS.map((code) => (
              <button key={code} className={code === lang ? "btn btn-gold" : "btn btn-line"} onClick={() => chooseLang(code)}>
                {LANG_LABEL[code]}
              </button>
            ))}
          </div>
        </div>
      ) : null}
      {screen === "home" ? (
        <Home
          save={save}
          onFamily={() => openSetup("family")}
          onSolo={() => openSetup("solo")}
          onHow={() => setScreen("how")}
        />
      ) : null}
      {screen === "how" ? <How onBack={() => setScreen("home")} /> : null}
      {screen === "setup" ? (
        <Setup
          draft={draft}
          length={length}
          nameError={nameError}
          onLength={setLength}
          onChange={setDraft}
          onBack={() => setScreen("home")}
          onStart={() => begin(draft, length)}
        />
      ) : null}
      {screen === "handoff" && run && station && player ? (
        <Handoff
          station={station}
          player={player}
          index={run.index}
          total={run.stations.length}
          together={Boolean(station.together)}
          onOpen={() => {
            unlockAudio();
            setScreen("play");
          }}
        />
      ) : null}
      {screen === "play" && run && station && player ? (
        <Play
          run={run}
          station={station}
          player={player}
          confirmLeave={confirmLeave}
          onAskLeave={() => setConfirmLeave(true)}
          onStay={() => setConfirmLeave(false)}
          onLeave={leaveHome}
          onChoose={choose}
          onTogether={finishTogether}
          onNext={advance}
        />
      ) : null}
      {screen === "done" && run ? (
        <Done
          run={run}
          onAgain={() => begin(run.players, run.length)}
          onHome={leaveHome}
        />
      ) : null}
    </div>
    </UiContext.Provider>
  );
}

function Home({
  save,
  onFamily,
  onSolo,
  onHow,
}: {
  save: Save;
  onFamily: () => void;
  onSolo: () => void;
  onHow: () => void;
}) {
  const hasScore = save.played > 0;
  const ui = useUi();
  return (
    <section className="home-screen relative h-dvh overflow-hidden">
      <img
        src={media("/art/bethlehem.jpg")}
        alt=""
        className="hero-drift absolute inset-0 h-full w-full object-cover"
      />
      <div className="scrim absolute inset-0" />
      <div className="home-panel safe-x safe-b safe-t relative z-10 mx-auto flex h-dvh w-full max-w-lg flex-col justify-end gap-4 pb-6">
        <p className="home-kicker kicker">{ui.kicker}</p>
        <div className="home-lead">
          <h1 className="font-display text-7xl leading-none font-medium text-ink">{ui.appTitle}</h1>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-straw">{ui.lead}</p>
        </div>
        <div className="home-actions flex flex-col gap-3">
          <button className="btn btn-gold" onClick={onFamily}>
            <Users className="size-5" aria-hidden="true" />
            {ui.family}
          </button>
          <button className="btn btn-line" onClick={onSolo}>
            {ui.solo}
          </button>
          <button className="btn btn-ghost" onClick={onHow}>
            <BookOpen className="size-4" aria-hidden="true" />
            {ui.how}
          </button>
        </div>
        {hasScore ? (
          <p className="home-note text-sm text-straw">
            {fill(ui.best, { short: save.bestShort, evening: save.bestEvening, played: save.played })}
          </p>
        ) : (
          <p className="home-note text-sm text-straw">{ui.note}</p>
        )}
        <p className="home-meta text-xs leading-relaxed text-straw">
          <span className="tabular-nums tracking-widest text-gold">{APP_VERSION}</span>
          {" · "}
          {fill(ui.author, { name: APP_AUTHOR })}
        </p>
      </div>
    </section>
  );
}

function How({ onBack }: { onBack: () => void }) {
  const ui = useUi();
  return (
    <section className="how-screen safe-x safe-b mx-auto flex h-dvh w-full max-w-lg flex-col gap-3 overflow-hidden py-3">
      <TopBar title={ui.howTitle} onBack={onBack} />
      <div className="how-steps flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto">
        {ui.steps.map((step, index) => (
          <article key={step.title} className="rounded-card bg-night-2 px-4 py-4">
            <p className="kicker">{index + 1 < 10 ? `0${index + 1}` : index + 1}</p>
            <h2 className="font-display mt-1 text-3xl leading-tight font-medium">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-straw">{step.text}</p>
          </article>
        ))}
        <p className="px-1 text-sm leading-relaxed text-straw">{ui.howFoot}</p>
        <AuthorCard />
      </div>
    </section>
  );
}

function AuthorCard() {
  const ui = useUi();
  return (
    <section className="flex flex-col gap-2 rounded-card bg-night-2 px-4 py-4">
      <h2 className="font-display text-3xl leading-none font-medium text-gold">{APP_NAME}</h2>
      <p className="text-sm tabular-nums text-straw">{fill(ui.versionLabel, { version: APP_VERSION })}</p>
      <p className="text-sm text-ink">{fill(ui.author, { name: APP_AUTHOR })}</p>
      <a href={"mailto:" + APP_EMAIL} className="w-fit text-sm text-gold underline-offset-2">
        {APP_EMAIL}
      </a>
      <p className="text-sm text-straw">{ui.musicCredit}</p>
    </section>
  );
}

function NameField({
  playerId,
  label,
  value,
  onValue,
}: {
  playerId: string;
  label: string;
  value: string;
  onValue: (name: string) => void;
}) {
  const voice = canListen();
  const ui = useUi();
  useEffect(() => {
    const onName = (event: Event) => {
      const said = (event as CustomEvent<string>).detail;
      const active = document.activeElement;
      const target = active instanceof HTMLInputElement ? active.dataset.player : undefined;
      if (target && target !== playerId) return;
      if (!target && playerId) {
        const first = document.querySelector<HTMLInputElement>("input.field");
        if (first?.dataset.player !== playerId) return;
      }
      onValue(said);
    };
    window.addEventListener("yasli-name", onName);
    return () => window.removeEventListener("yasli-name", onName);
  }, [onValue, playerId]);

  return (
    <div className="flex items-center gap-2">
      <input
        className="field min-w-0 flex-1"
        data-player={playerId}
        value={value}
        maxLength={18}
        aria-label={label}
        onChange={(event) => onValue(event.target.value)}
      />
      {voice ? (
        <button
          className="icon-btn shrink-0"
          aria-label={ui.sayName}
          onClick={() => listenForName(onValue)}
        >
          <Mic className="size-4" />
        </button>
      ) : null}
    </div>
  );
}

function Setup({
  draft,
  length,
  nameError,
  onLength,
  onChange,
  onBack,
  onStart,
}: {
  draft: Player[];
  length: Length;
  nameError: boolean;
  onLength: (length: Length) => void;
  onChange: (players: Player[]) => void;
  onBack: () => void;
  onStart: () => void;
}) {
  function patch(id: string, next: Partial<Player>) {
    onChange(draft.map((player) => (player.id === id ? { ...player, ...next } : player)));
  }

  const ui = useUi();

  return (
    <section className="setup-screen mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden">
      <div className="safe-x safe-t pt-3">
        <TopBar title={ui.who} onBack={onBack} />
      </div>
      <div className="setup-body safe-x flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto py-3">
        <p className="setup-note text-sm leading-relaxed text-straw">{ui.whoNote}</p>
        <div className="setup-lengths grid grid-cols-2 gap-2">
          <LengthButton active={length === "short"} title={ui.short} note={ui.shortNote} onClick={() => onLength("short")} />
          <LengthButton active={length === "evening"} title={ui.evening} note={ui.eveningNote} onClick={() => onLength("evening")} />
        </div>
        <div className="setup-people flex min-h-0 flex-1 flex-col gap-3">
          <ul className="player-list flex flex-col gap-3">
            {draft.map((player, index) => (
              <li key={player.id} className="player-card rounded-card bg-night-2 p-3">
                <div className="player-head mb-2 flex items-center justify-between">
                  <span className="kicker">{fill(ui.player, { n: index + 1 })}</span>
                  {draft.length > 1 ? (
                    <button
                      className="icon-btn"
                      aria-label={fill(ui.removePlayer, { name: player.name })}
                      onClick={() => onChange(draft.filter((item) => item.id !== player.id))}
                    >
                      <X className="size-4" />
                    </button>
                  ) : null}
                </div>
                <NameField
                  playerId={player.id}
                  label={fill(ui.nameLabel, { n: index + 1 })}
                  value={player.name}
                  onValue={(name) => patch(player.id, { name })}
                />
                <div className="role-row mt-2 grid grid-cols-2 gap-2">
                  <RoleButton
                    active={player.role === "child"}
                    label={ui.child}
                    onClick={() => patch(player.id, { role: "child" })}
                  />
                  <RoleButton
                    active={player.role === "adult"}
                    label={ui.adult}
                    onClick={() => patch(player.id, { role: "adult" })}
                  />
                </div>
              </li>
            ))}
          </ul>
          {nameError ? <p className="setup-error text-sm text-gold">{ui.nameError}</p> : null}
          {draft.length < 4 ? (
            <button
              className="setup-add btn btn-line"
              onClick={() => onChange([...draft, newPlayer(draft.length % 2 === 0 ? "child" : "adult", "")])}
            >
              <Plus className="size-4" aria-hidden="true" />
              {ui.add}
            </button>
          ) : null}
        </div>
      </div>
      <div className="dock safe-x safe-b">
        <button className="btn btn-gold" onClick={onStart}>
          {ui.start}
        </button>
      </div>
    </section>
  );
}

function Handoff({
  station,
  player,
  index,
  total,
  together,
  onOpen,
}: {
  station: Station;
  player: Player;
  index: number;
  total: number;
  together: boolean;
  onOpen: () => void;
}) {
  const ui = useUi();
  const role = player.role === "child" ? ui.child : ui.adult;
  return (
    <section className="handoff-screen relative h-dvh overflow-hidden">
      <img src={media(station.image)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="scrim absolute inset-0" />
      <div className="handoff-panel safe-x safe-b safe-t relative z-10 mx-auto flex h-dvh w-full max-w-lg flex-col justify-end gap-4 pb-8">
        <p className="kicker">
          {index + 1} / {total}
        </p>
        <h1 className="font-display text-5xl leading-none font-medium">{station.title}</h1>
        {together ? (
          <p className="text-lg leading-snug text-straw">{ui.togetherNote}</p>
        ) : (
          <>
            <p className="text-lg leading-snug text-straw">{ui.passPhone}</p>
            <p className="font-display text-4xl leading-tight font-medium">{player.name}</p>
            <p className="kicker">{role}</p>
          </>
        )}
        <button className="btn btn-gold" onClick={onOpen}>
          {together ? ui.togetherReady : ui.ready}
        </button>
      </div>
    </section>
  );
}

function Play({
  run,
  station,
  player,
  confirmLeave,
  onAskLeave,
  onStay,
  onLeave,
  onChoose,
  onTogether,
  onNext,
}: {
  run: Run;
  station: Station;
  player: Player;
  confirmLeave: boolean;
  onAskLeave: () => void;
  onStay: () => void;
  onLeave: () => void;
  onChoose: (id: string, quiz: Quiz) => void;
  onTogether: () => void;
  onNext: () => void;
}) {
  const quiz = station.together ? null : quizFor(station, player.role);
  const choices = useMemo(() => {
    if (!quiz) return [];
    return shuffle(quiz.choices, run.seed + run.index * 19 + (player.role === "child" ? 3 : 9));
  }, [quiz, run.seed, run.index, player.role]);
  const correct = quiz ? run.picked === quiz.answerId : run.picked === "together";
  const last = run.index === run.stations.length - 1;
  const asking = run.phase === "ask";
  const ui = useUi();
  const role = player.role === "child" ? ui.child : ui.adult;

  return (
    <section className="play-screen relative mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden">
      <div className="play-bar chrome-pad safe-x safe-t flex items-center justify-between pt-3" inert={confirmLeave}>
        <button className="icon-btn" aria-label={ui.leaveTitle} onClick={onAskLeave}>
          <ArrowLeft className="size-5" />
        </button>
        <p className="kicker">
          {run.index + 1} / {run.stations.length}
        </p>
        <span className="icon-spacer" aria-hidden="true" />
      </div>
      <div className="play-story safe-x flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto py-3" inert={confirmLeave}>
        <figure className="play-figure overflow-hidden rounded-card">
          <img src={media(station.image)} alt={station.title} className="play-photo w-full object-cover" />
        </figure>
        <Crib earned={run.earned} />
        <div className="story-copy">
          <p className="kicker">{station.kicker}</p>
          <h1 className="font-display text-4xl leading-none font-medium">{station.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-straw">{station.story}</p>
        </div>
      </div>
      <div className="dock safe-x safe-b flex max-h-[62%] flex-col gap-2 overflow-y-auto" aria-live="polite" inert={confirmLeave}>
        {quiz ? (
          <div>
            <p className="text-sm text-gold">
              {fill(ui.answers, { name: player.name, role })} {ui.readAloud}
            </p>
            <h2 className="font-display mt-1 text-2xl leading-tight font-medium">{quiz.prompt}</h2>
          </div>
        ) : station.together ? (
          <h2 className="font-display text-2xl leading-tight font-medium">{station.together.prompt}</h2>
        ) : null}
        {asking && quiz
          ? choices.map((choice) => (
              <ChoiceButton
                key={choice.id}
                choice={choice}
                state="idle"
                disabled={false}
                onChoose={() => onChoose(choice.id, quiz)}
              />
            ))
          : null}
        {asking && station.together ? (
          <button className="btn btn-gold" onClick={onTogether}>
            {ui.weSaid}
          </button>
        ) : null}
        {!asking && quiz ? (
          <p className="text-sm text-gold">
            {correct ? ui.right : ui.wrong}: {choices.find((choice) => choice.id === quiz.answerId)?.text}
          </p>
        ) : null}
        {!asking && quiz ? <Explain title={correct ? ui.right : ui.remember} text={quiz.explain} /> : null}
        {!asking && station.together ? (
          <Explain title={ui.commonStar} text={station.together.explain} />
        ) : null}
        {!asking ? (
          <button className="btn btn-gold" onClick={onNext}>
            {last ? ui.toManger : ui.next}
          </button>
        ) : null}
        <p className="flex items-center justify-center gap-2 pb-1 text-sm text-straw">
          <Star className="size-4 text-gold" aria-hidden="true" />
          {fill(ui.stars, { n: totalStars(run) })}
        </p>
      </div>
      {confirmLeave ? (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center bg-night/80 p-6"
          data-modal
          role="dialog"
          aria-modal="true"
          aria-label={ui.leaveTitle}
        >
          <div className="w-full max-w-md rounded-card bg-night-2 p-5">
            <p className="font-display text-center text-3xl font-medium">{ui.leaveTitle}</p>
            <p className="mt-2 text-center text-sm text-straw">{ui.leaveNote}</p>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button className="btn btn-line" onClick={onStay}>
                {ui.stay}
              </button>
              <button className="btn btn-gold" onClick={onLeave}>
                {ui.home}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}

function ChoiceButton({
  choice,
  state,
  disabled,
  onChoose,
}: {
  choice: Choice;
  state: "idle" | "right" | "wrong";
  disabled: boolean;
  onChoose: () => void;
}) {
  return (
    <button className="choice" data-state={state} disabled={disabled} onClick={onChoose}>
      {choice.text}
    </button>
  );
}

function Explain({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-card bg-pine px-4 py-4">
      <p className="kicker">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-ink">{text}</p>
    </div>
  );
}

function Crib({ earned }: { earned: boolean[] }) {
  const ui = useUi();
  return (
    <ol className="flex gap-1.5" aria-label={ui.gathered}>
      {earned.map((lit, index) => (
        <li
          key={index}
          className={lit ? "h-1.5 flex-1 rounded-full bg-gold" : "h-1.5 flex-1 rounded-full bg-night-2"}
        />
      ))}
    </ol>
  );
}

function Done({ run, onAgain, onHome }: { run: Run; onAgain: () => void; onHome: () => void }) {
  const score = totalStars(run);
  const possible = run.stations.length;
  const ui = useUi();
  const { gospel, prayer } = useBundle();
  return (
    <section className="done-screen relative h-dvh overflow-hidden">
      <img src={media("/art/finale.jpg")} alt={ui.gathered} className="absolute inset-0 h-full w-full object-cover" />
      <div className="scrim absolute inset-0" />
      <div className="done-panel safe-x safe-b safe-t relative z-10 mx-auto flex h-dvh w-full max-w-lg flex-col justify-end gap-3 overflow-y-auto pb-6">
        <div className="done-lead flex flex-col gap-3">
          <p className="kicker">{run.length === "short" ? ui.shortPath : ui.eveningPath}</p>
          <h1 className="font-display text-6xl leading-none font-medium">{ui.gathered}</h1>
          <p className="flex items-center gap-2 text-straw">
            <Star className="size-4 text-gold" aria-hidden="true" />
            {score} / {possible}
            {run.familyStars > 0 ? ` · ${ui.withAngels}` : ""}
          </p>
          <ul className="flex flex-col gap-1 text-sm">
            {run.players.map((person) => (
              <li key={person.id} className="flex justify-between gap-4">
                <span>
                  {person.name} · {person.role === "child" ? ui.child : ui.adult}
                </span>
                <span className="text-gold">{person.stars}</span>
              </li>
            ))}
          </ul>
        </div>
        <blockquote className="text-sm leading-relaxed text-straw">
          {gospel}
          <footer className="mt-1 text-gold">{ui.gospelRef}</footer>
        </blockquote>
        <p className="font-display text-2xl leading-snug font-medium">{prayer}</p>
        <div className="done-actions flex flex-col gap-2">
          <button className="btn btn-gold" onClick={onAgain}>
            {ui.again}
          </button>
          <button className="btn btn-ghost" onClick={onHome}>
            {ui.home}
          </button>
        </div>
      </div>
    </section>
  );
}

function TopBar({ title, onBack }: { title: string; onBack: () => void }) {
  const ui = useUi();
  return (
    <div className="chrome-pad safe-t flex items-center gap-3">
      <button className="icon-btn" aria-label={ui.back} onClick={onBack}>
        <ArrowLeft className="size-5" />
      </button>
      <h1 className="font-display text-3xl leading-none font-medium">{title}</h1>
    </div>
  );
}

function LengthButton({
  active,
  title,
  note,
  onClick,
}: {
  active: boolean;
  title: string;
  note: string;
  onClick: () => void;
}) {
  return (
    <button
      className={active ? "rounded-card bg-gold px-3 py-3 text-left text-night" : "rounded-card bg-night-2 px-3 py-3 text-left"}
      onClick={onClick}
      aria-pressed={active}
    >
      <span className="block font-medium">{title}</span>
      <span className={active ? "block text-sm text-night" : "block text-sm text-straw"}>{note}</span>
    </button>
  );
}

function RoleButton({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      className={active ? "btn btn-gold" : "btn btn-line"}
      aria-pressed={active}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
