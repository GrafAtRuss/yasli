const KEY = "yasli-save-v1";

export type Save = {
  version: 1;
  bestShort: number;
  bestEvening: number;
  played: number;
  muted: boolean;
};

export function emptySave(): Save {
  return { version: 1, bestShort: 0, bestEvening: 0, played: 0, muted: false };
}

export function loadSave(): Save {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return emptySave();
    const parsed = JSON.parse(raw) as Partial<Save>;
    if (parsed.version !== 1) return emptySave();
    return {
      version: 1,
      bestShort: finite(parsed.bestShort),
      bestEvening: finite(parsed.bestEvening),
      played: finite(parsed.played),
      muted: Boolean(parsed.muted),
    };
  } catch {
    return emptySave();
  }
}

export function writeSave(save: Save) {
  localStorage.setItem(KEY, JSON.stringify(save));
}

function finite(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}
