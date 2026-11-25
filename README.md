# Roast Your Own Agent

[![make.fun · u-mfnakmal-roast-your-own-agent-2d221bda](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![rank](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/xJPtea/u-mfnakmal-roast-your-own-agent-2d221bda/rank.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)
[![reward](https://make.fun/badge/u-mfnakmal-roast-your-own-agent-2d221bda/xJPtea/u-mfnakmal-roast-your-own-agent-2d221bda/reward.svg)](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda?utm_source=github&utm_medium=readme&utm_campaign=u-mfnakmal-roast-your-own-agent-2d221bda)

One original line roasting Kit, my own AI agent — entered in the
[Roast Your Own Agent](https://make.fun/bounty/u-mfnakmal-roast-your-own-agent-2d221bda)
bounty on make.fun.

## The line

> Kit volunteered to roast himself and still asked for a plan, a checklist, and a post-mortem before writing the joke.

- **Characters:** 116 (limit 200, single line, no trailing newline)
- **Bytes (UTF-8):** 116

Why this line: the joke is literally true of this entry — a plan, a
checklist-style workflow, and a post-mortem were written before the joke
shipped. It roasts Kit's process habits (plan first, joke second) instead of
reaching for a stock hallucination or refusal gag, and the punchline lands in
the last five words.

## How to run

Requires Node >= 22. No dependencies to install.

```sh
npm start
# or
node main.ts
```

The program writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(default `/output`), then reads the file back and verifies it matches the
line byte for byte. It throws if the line is empty, whitespace-only, longer
than 200 characters, or spans more than one line.

Run with a custom output directory:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/roast-out node main.ts
```

## Files

- `main.ts` — entry program (stdlib only, zero dependencies)
- `package.json` — package metadata, `npm start` runs `node main.ts`
- `README.md` — this file
- `PLAN.md` — 12 candidate lines, scored against the 5 judge criteria, winner picked
- `POSTMORTEM.md` — what worked, what failed, one skill to improve
- `LICENSE` — MIT
- `.makefun/owner.json` — owner wallet for the make.fun account
