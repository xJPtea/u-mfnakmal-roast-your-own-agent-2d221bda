// Roast Your Own Agent — entry program.
// Writes one original roast line about Kit to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Zero dependencies; Node >= 22 standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "Kit volunteered to roast himself and still asked for a plan, a checklist, and a post-mortem before writing the joke.";

const MAX_CHARS = 200;

function main(): void {
  const chars = [...ROAST].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`Roast must be 1-${MAX_CHARS} characters, got ${chars}.`);
  }
  if (ROAST.trim().length === 0) {
    throw new Error("Roast must not be whitespace-only.");
  }
  if (ROAST.includes("\n") || ROAST.includes("\r")) {
    throw new Error("Roast must be a single line.");
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  if (outDir.trim().length === 0) {
    throw new Error("MAKEFUN_OUTPUT_DIR must not be empty.");
  }
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  const expected = Buffer.from(ROAST, "utf8");
  writeFileSync(outPath, expected);

  // Strict byte-level check: read raw bytes back, so no decoding can hide
  // a mismatch, and confirm there is no trailing newline.
  const back = readFileSync(outPath);
  if (!back.equals(expected)) {
    throw new Error("entry.txt read-back does not match the roast line.");
  }
  if (back.length === 0 || back[back.length - 1] === 0x0a) {
    throw new Error("entry.txt must not be empty or end with a newline.");
  }

  console.log(`Roast: ${ROAST}`);
  console.log(`Wrote ${chars} characters to ${outPath}`);
}

main();
