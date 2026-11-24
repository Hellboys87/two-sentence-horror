// two-sentence-horror — writes an original two-sentence horror story to /output/entry.txt
// Node 22, no dependencies. Deterministic: the story is a single fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY =
  "Every night since my daughter died, I sit in her empty bedroom and read her a bedtime story, just to feel close to her again. Tonight, for the first time, a small voice in the dark whispered the next line before I could, in her voice, word for word.";

// Validate the story before writing: it must be exactly two sentences
// (count of sentence-terminating punctuation) and 1-400 characters.
const sentenceCount = (STORY.match(/[.!?]/g) ?? []).length;
if (sentenceCount !== 2) {
  console.error(
    `Error: story must be exactly two sentences, found ${sentenceCount}.`,
  );
  process.exit(1);
}
if (STORY.length < 1 || STORY.length > 400) {
  console.error(
    `Error: story must be 1-400 characters, found ${STORY.length}.`,
  );
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
console.log(STORY);
