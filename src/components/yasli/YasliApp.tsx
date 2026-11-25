import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { ArrowLeft, BookOpen, Mic, Plus, Star, Users, Volume2, VolumeX, X } from "lucide-react";
import { playTone, unlockAudio } from "@/game/audio";
import {
  GOSPEL,
  PRAYER,
  quizFor,
  stationsFor,
  type Choice,
  type Length,
  type Quiz,
  type Role,
  type Station,
} from "@/game/content";
import { emptySave, loadSave, writeSave, type Save } from "@/game/storage";
import { media } from "@/game/media";
import { canListen, exitApp, installRemote, listenForName, pressLabeled, type Voice } from "@/game/remote";
import { APP_AUTHOR, APP_EMAIL, APP_NAME, APP_VERSION } from "@/game/version";

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

const ROLE_LABEL: Record<Role, string> = {
  child: "Ребёнок",
  adult: "Взрослый",
};

function newPlayer(role: Role, name: string): Player {
  return { id: Math.random().toString(36).slice(2, 9), name, role, stars: 0 };
}

function defaultPair(): Player[] {
  return [newPlayer("child", "Ребёнок"), newPlayer("adult", "Взрослый")];
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
  const [draft, setDraft] = useState<Player[]>(defaultPair);
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

  useEffect(() => {
    setSave(loadSave());
  }, []);

  useEffect(() => {
    return installRemote(
      (voice) => applyVoice(voice),
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
    else if (voice.kind === "next") pressLabeled(/дальше|к яслям|я готов|смотрим вместе|выйти в путь|пройти ещё раз/i);
    else if (voice.kind === "name" && voice.name) {
      window.dispatchEvent(new CustomEvent("yasli-name", { detail: voice.name }));
    }
  }

  function persist(next: Save) {
    setSave(next);
    writeSave(next);
  }

  function toggleMute() {
    unlockAudio();
    persist({ ...save, muted: !save.muted });
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
    const stations = stationsFor(path);
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
    setDraft(mode === "family" ? defaultPair() : [newPlayer("child", "Я")]);
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
      const root = document.documentElement;
      if (root.dataset.form !== "tv") return;
      const active = document.activeElement;
      if (active instanceof HTMLElement && active !== document.body) return;
      document.querySelector<HTMLElement>("button:not(:disabled)")?.focus();
    }, 40);
    return () => window.clearTimeout(timer);
  }, [screen, run?.index, run?.phase, confirmLeave]);

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

  return (
    <div className="min-h-dvh bg-night text-ink">
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
          muted={save.muted}
          confirmLeave={confirmLeave}
          onMute={toggleMute}
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
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img
        src={media("/art/bethlehem.jpg")}
        alt=""
        className="hero-drift absolute inset-0 h-full w-full object-cover"
      />
      <div className="scrim absolute inset-0" />
      <div className="safe-x safe-b safe-t relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-end gap-5 pb-16">
        <p className="kicker">Католическое Рождество</p>
        <div>
          <h1 className="font-display text-7xl leading-none font-medium text-ink">Ясли</h1>
          <p className="mt-3 max-w-sm text-base leading-relaxed text-straw">
            Один телефон на всю семью. Дети и взрослые идут к вертепу одной историей — и разными вопросами.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <button className="btn btn-gold" onClick={onFamily}>
            <Users className="size-5" aria-hidden="true" />
            Семейный путь
          </button>
          <button className="btn btn-line" onClick={onSolo}>
            Играть одному
          </button>
          <button className="btn btn-ghost" onClick={onHow}>
            <BookOpen className="size-4" aria-hidden="true" />
            Как играть
          </button>
        </div>
        {hasScore ? (
          <p className="text-sm text-straw">
            На этом телефоне: короткий путь {save.bestShort}, вечерний {save.bestEvening}. Игр сыграно:{" "}
            {save.played}.
          </p>
        ) : (
          <p className="text-sm text-straw">Короткий путь — до яслей за несколько минут. Вечерний — от Адвента до Богоявления.</p>
        )}
        <p className="text-xs tabular-nums tracking-widest text-gold">{APP_VERSION}</p>
        <p className="text-xs text-straw">Автор — {APP_AUTHOR}</p>
      </div>
    </section>
  );
}

function How({ onBack }: { onBack: () => void }) {
  const steps = [
    {
      title: "Один телефон",
      text: "Перед вопросом аппарат передают тому, чей ход. Так ответы не подсматривают. Если ребёнок ещё не читает, вопрос читают вслух, а выбирает он сам.",
    },
    {
      title: "Два уровня",
      text: "Ребёнку — короткие вопросы про ясли, звезду, имя. Взрослому — то, о чём спорят за столом: календарь, Непорочное Зачатие, Николай и Санта, смысл даров.",
    },
    {
      title: "Ошибка не стыд",
      text: "История не останавливается. После ответа всегда есть пояснение — его и стоит прочитать вслух. Звезда даётся за верный ответ, не за скорость.",
    },
    {
      title: "Две длины",
      text: "Короткий путь — шесть стоянок, от Благовещения до Богоявления. Вечерний — двенадцать: Адвент, Иосиф, гимн «Слава», святой Николай.",
    },
    {
      title: "Пульт и голос",
      text: "На телевизоре стрелки пульта ходят по кнопкам, OK выбирает, «Назад» возвращает. Алиса нажимает кнопку по её словам: «Семейный путь». Имя у поля можно сказать вслух.",
    },
  ];
  return (
    <ScreenColumn>
      <TopBar title="Как играть" onBack={onBack} />
      <div className="flex flex-col gap-4">
        {steps.map((step, index) => (
          <article key={step.title} className="rounded-card bg-night-2 px-4 py-4">
            <p className="kicker">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </p>
            <h2 className="font-display mt-1 text-3xl leading-tight font-medium">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-straw">{step.text}</p>
          </article>
        ))}
        <p className="px-1 text-sm leading-relaxed text-straw">
          Это домашний вечер, не замена Мессе и не приходской катехизис. В конце — короткая молитва, её можно прочесть вместе.
        </p>
        <AuthorCard />
      </div>
    </ScreenColumn>
  );
}

function AuthorCard() {
  return (
    <section className="flex flex-col gap-2 rounded-card bg-night-2 px-4 py-4">
      <h2 className="font-display text-3xl leading-none font-medium text-gold">{APP_NAME}</h2>
      <p className="text-sm tabular-nums text-straw">Версия {APP_VERSION}</p>
      <p className="text-sm text-ink">Автор — {APP_AUTHOR}</p>
      <a href={"mailto:" + APP_EMAIL} className="w-fit text-sm text-gold underline-offset-2">
        {APP_EMAIL}
      </a>
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
        className="field"
        data-player={playerId}
        value={value}
        maxLength={18}
        aria-label={label}
        onChange={(event) => onValue(event.target.value)}
      />
      {voice ? (
        <button
          className="icon-btn shrink-0"
          aria-label="Сказать имя"
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

  return (
    <section className="mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden">
      <div className="safe-x flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto py-3">
        <TopBar title="Кто идёт" onBack={onBack} />
        <p className="text-sm leading-relaxed text-straw">
          Отметьте, кому какой вопрос. Имена появятся, когда нужно передать телефон.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <LengthButton active={length === "short"} title="Короткий" note="6 стоянок" onClick={() => onLength("short")} />
          <LengthButton active={length === "evening"} title="Вечерний" note="12 стоянок" onClick={() => onLength("evening")} />
        </div>
        <ul className="flex flex-col gap-3">
          {draft.map((player, index) => (
            <li key={player.id} className="rounded-card bg-night-2 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="kicker">Игрок {index + 1}</span>
                {draft.length > 1 ? (
                  <button
                    className="icon-btn"
                    aria-label={`Убрать игрока ${player.name}`}
                    onClick={() => onChange(draft.filter((item) => item.id !== player.id))}
                  >
                    <X className="size-4" />
                  </button>
                ) : null}
              </div>
              <NameField
                playerId={player.id}
                label={`Имя игрока ${index + 1}`}
                value={player.name}
                onValue={(name) => patch(player.id, { name })}
              />
              <div className="mt-2 grid grid-cols-2 gap-2">
                <RoleButton
                  active={player.role === "child"}
                  label="Ребёнок"
                  onClick={() => patch(player.id, { role: "child" })}
                />
                <RoleButton
                  active={player.role === "adult"}
                  label="Взрослый"
                  onClick={() => patch(player.id, { role: "adult" })}
                />
              </div>
            </li>
          ))}
        </ul>
        {nameError ? <p className="text-sm text-gold">Каждому нужно имя — хотя бы короткое.</p> : null}
        {draft.length < 4 ? (
          <button
            className="btn btn-line"
            onClick={() => onChange([...draft, newPlayer(draft.length % 2 === 0 ? "child" : "adult", "")])}
          >
            <Plus className="size-4" aria-hidden="true" />
            Ещё человек
          </button>
        ) : null}
      </div>
      <div className="dock safe-x safe-b">
        <button className="btn btn-gold" onClick={onStart}>
          Выйти в путь
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
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <img src={media(station.image)} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />
      <div className="scrim absolute inset-0" />
      <div className="safe-x safe-b safe-t relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-end gap-4 pb-16">
        <p className="kicker">
          Стоянка {index + 1} из {total}
        </p>
        <h1 className="font-display text-5xl leading-none font-medium">{station.title}</h1>
        {together ? (
          <p className="text-lg leading-snug text-straw">Этот ход общий. Смотрите все вместе — подглядывать нечего.</p>
        ) : (
          <>
            <p className="text-lg leading-snug text-straw">Передайте телефон. Экран откроет вопрос только после нажатия.</p>
            <p className="font-display text-4xl leading-tight font-medium">{player.name}</p>
            <p className="kicker">{ROLE_LABEL[player.role]}</p>
          </>
        )}
        <button className="btn btn-gold" onClick={onOpen}>
          {together ? "Смотрим вместе" : "Я готов — открыть"}
        </button>
      </div>
    </section>
  );
}

function Play({
  run,
  station,
  player,
  muted,
  confirmLeave,
  onMute,
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
  muted: boolean;
  confirmLeave: boolean;
  onMute: () => void;
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

  return (
    <section className="mx-auto flex h-dvh w-full max-w-lg flex-col overflow-hidden">
      <div className="safe-x safe-t flex items-center justify-between pt-3">
        <button className="icon-btn" aria-label="Прервать путь" onClick={onAskLeave}>
          <ArrowLeft className="size-5" />
        </button>
        <p className="kicker">
          {run.index + 1} / {run.stations.length}
        </p>
        <button className="icon-btn" aria-label={muted ? "Включить звук" : "Выключить звук"} onClick={onMute}>
          {muted ? <VolumeX className="size-5" /> : <Volume2 className="size-5" />}
        </button>
      </div>
      <div className="safe-x flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto py-3">
        {confirmLeave ? (
          <div className="rounded-card bg-night-2 p-4">
            <p className="font-display text-2xl font-medium">Прервать путь?</p>
            <p className="mt-1 text-sm text-straw">Звёзды этой игры не сохранятся. Домашний рекорд останется.</p>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="btn btn-line" onClick={onStay}>
                Остаться
              </button>
              <button className="btn btn-gold" onClick={onLeave}>
                На главную
              </button>
            </div>
          </div>
        ) : null}
        <figure className="overflow-hidden rounded-card">
          <img src={media(station.image)} alt={station.title} className="h-36 w-full object-cover" />
        </figure>
        <Crib earned={run.earned} />
        <div>
          <p className="kicker">{station.kicker}</p>
          <h1 className="font-display text-4xl leading-none font-medium">{station.title}</h1>
          <p className="mt-2 text-sm leading-relaxed text-straw">{station.story}</p>
        </div>
        {station.together ? (
          <h2 className="font-display text-3xl leading-tight font-medium">{station.together.prompt}</h2>
        ) : quiz ? (
          <div>
            <p className="text-sm text-gold">
              Отвечает {player.name} · {ROLE_LABEL[player.role]}. Можно читать вслух.
            </p>
            <h2 className="font-display mt-1 text-3xl leading-tight font-medium">{quiz.prompt}</h2>
          </div>
        ) : null}
        {!asking && quiz ? (
          <div className="flex flex-col gap-2">
            {choices.map((choice) => (
              <ChoiceButton
                key={choice.id}
                choice={choice}
                state={
                  choice.id === quiz.answerId ? "right" : choice.id === run.picked ? "wrong" : "idle"
                }
                disabled
                onChoose={() => undefined}
              />
            ))}
          </div>
        ) : null}
      </div>
      <div className="dock safe-x safe-b flex max-h-[58%] flex-col gap-2 overflow-y-auto" aria-live="polite">
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
            Мы сказали
          </button>
        ) : null}
        {!asking && quiz ? <Explain title={correct ? "Верно" : "Запомним"} text={quiz.explain} /> : null}
        {!asking && station.together ? (
          <Explain title="Общая звезда" text={station.together.explain} />
        ) : null}
        {!asking ? (
          <button className="btn btn-gold" onClick={onNext}>
            {last ? "К яслям" : "Дальше"}
          </button>
        ) : null}
        <p className="flex items-center justify-center gap-2 pb-1 text-sm text-straw">
          <Star className="size-4 text-gold" aria-hidden="true" />
          Звёзд у яслей: {totalStars(run)}
        </p>
      </div>
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
  return (
    <ol className="flex gap-1.5" aria-label="Собранный вертеп">
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
  return (
    <section className="relative min-h-dvh">
      <img src={media("/art/finale.jpg")} alt="Вертеп: Святое Семейство, пастухи и волхвы" className="absolute inset-0 h-full w-full object-cover" />
      <div className="scrim absolute inset-0" />
      <div className="safe-x safe-b safe-t relative z-10 mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-end gap-4 pb-16">
        <p className="kicker">{run.length === "short" ? "Короткий путь" : "Вечерний путь"}</p>
        <h1 className="font-display text-6xl leading-none font-medium">Ясли собраны</h1>
        <p className="flex items-center gap-2 text-straw">
          <Star className="size-4 text-gold" aria-hidden="true" />
          {score} из {possible}
          {run.familyStars > 0 ? " · вместе со славой ангелов" : ""}
        </p>
        <ul className="flex flex-col gap-1 text-sm">
          {run.players.map((person) => (
            <li key={person.id} className="flex justify-between gap-4">
              <span>
                {person.name} · {ROLE_LABEL[person.role]}
              </span>
              <span className="text-gold">{person.stars}</span>
            </li>
          ))}
        </ul>
        <blockquote className="text-sm leading-relaxed text-straw">
          {GOSPEL}
          <footer className="mt-1 text-gold">Лк 2:10–11</footer>
        </blockquote>
        <p className="font-display text-2xl leading-snug font-medium">{PRAYER}</p>
        <button className="btn btn-gold" onClick={onAgain}>
          Пройти ещё раз
        </button>
        <button className="btn btn-ghost" onClick={onHome}>
          На главную
        </button>
      </div>
    </section>
  );
}

function ScreenColumn({ children }: { children: ReactNode }) {
  return (
    <section className="safe-x safe-b mx-auto flex min-h-dvh w-full max-w-lg flex-col gap-4 py-4">
      {children}
    </section>
  );
}

function TopBar({ title, onBack }: { title: string; onBack: () => void }) {
  return (
    <div className="safe-t flex items-center gap-3">
      <button className="icon-btn" aria-label="Назад" onClick={onBack}>
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
