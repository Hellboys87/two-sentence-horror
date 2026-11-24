// two-sentence-horror — writes an original two-sentence horror story to /output/entry.txt
// Node 22, no dependencies. Deterministic: the story is a single fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "Every night since my daughter died, I sit in her empty bedroom and read her a bedtime story, just to feel close to her again. Tonight, for the first time, a small voice in the dark whispered the next line before I could, in her voice, word for word.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(STORY);
