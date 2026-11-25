import assert from "node:assert/strict";
import test from "node:test";
import { interpretVoice } from "./remote.ts";

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
