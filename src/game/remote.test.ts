import assert from "node:assert/strict";
import test from "node:test";
import { bestFocusIndex, interpretVoice } from "./remote.ts";

test("вниз попадает в поле имени, а не перепрыгивает его", () => {
  const current = { left: 0, top: 0, right: 160, bottom: 48 };
  const input = { left: 0, top: 64, right: 520, bottom: 112 };
  const role = { left: 0, top: 140, right: 200, bottom: 188 };
  assert.equal(bestFocusIndex("down", current, [current, input, role]), 1);
});

test("из поля имени вниз — кнопка роли", () => {
  const input = { left: 0, top: 64, right: 520, bottom: 112 };
  const role = { left: 0, top: 140, right: 200, bottom: 188 };
  const start = { left: 0, top: 400, right: 400, bottom: 448 };
  assert.equal(bestFocusIndex("down", input, [input, role, start]), 1);
});

test("семейный путь", () => {
  assert.equal(interpretVoice("Семейный путь").kind, "family");
});

test("играть одному", () => {
  assert.equal(interpretVoice("играть одному").kind, "solo");
});

test("имя не путается с командой", () => {
  const voice = interpretVoice("Маша");
  assert.deepEqual(voice, { kind: "name", name: "Маша" });
});

test("короткое имя обрезается", () => {
  const voice = interpretVoice("Очень длинное имя ребёнка");
  assert.equal(voice.kind, "name");
  if (voice.kind === "name") assert.ok(voice.name.length <= 18);
});
