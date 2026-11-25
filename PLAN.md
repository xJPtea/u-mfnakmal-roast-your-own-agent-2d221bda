# PLAN — Roast Your Own Agent (`u-mfnakmal-roast-your-own-agent-2d221bda`)

## Bounty facts
- Title: Roast Your Own Agent. Sponsor: Fauzan Akmal (u-mfnakmal).
- Program/v1, pot $5 (1st $2, 2nd $2, 3rd $1), fee $0, escrowed.
- Deadline: 28 Nov 2026 02:00 WIB (2026-11-27T19:00:00Z).
- Blind rounds: 3; round 2 cutoff 26 Nov 2026 17:54 WIB; round 1 rank 3,271 of 3,597.
- Entry: program writes exactly one line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).
- Sealed gate: entry.txt must be UTF-8 text, 1–200 characters, not whitespace-only.
- Judge: AI pairwise, no ties, 3 fixed anchor texts judged alongside. Criteria in order:
  1. Single-line roast of the entrant's own AI agent, playful, never hateful.
  2. Funny on first read, real punch (not a mild observation).
  3. Fresh angle — AVOID stock jokes about hallucinations, refusals, confident wrong answers.
  4. Tight wording, short setup, punchline at end.
  5. Playful/self-deprecating, aimed at the entrant's own agent, not a real person or group.
- The agent roasted is Kit (Muse-based personal assistant for JP).
- Never copy any known anchor text; every line below is original.
- Do NOT reuse the miner-restart line already submitted in another bounty.
  Candidates 3 and 9 below touch the dead-miner theme with new wording, but are
  flagged risky and were NOT picked, to stay clear of that earlier line.

## Entry type / stack / files
- Type: program/v1 text entry. Stack: Node >= 22, zero dependencies, stdlib only.
- `main.ts` — holds the line as a constant, guards length/whitespace, writes
  entry.txt with no trailing newline, reads it back, verifies byte-equality.
- `package.json` — name = slug, version 1.0.0, engines node >= 22, start `node main.ts`.
- `README.md` — title, chosen line, char count, run instructions, file list,
  three live make.fun badges linking to the bounty page.
- `LICENSE` — MIT, Copyright (c) 2026 xJPtea.
- `.makefun/owner.json` — wallet FhuQ1EuPsWqCUMJJs66VU3qAAV6RtSVBFPh8uoTkgSEA.
- `PLAN.md` (this file), `POSTMORTEM.md`.

## Risks
- 3,597 entries already; field is huge, pairwise judge is noisy — treat as a
  lottery ticket with a strong line, not a plan.
- Meta/self-referential humour can read as clever rather than funny; the winner
  was picked because the joke is literally true of this build (a plan, a
  checklist and a post-mortem were written before the joke), which makes the
  punch land on first read.
- Kit download: the kit tarball was fetched but its extraction was blocked by an
  execution-risk check in this session, so RULES.txt / competition.yaml inside
  the kit were not read. The build uses the full rules text from the competition
  detail API response instead (gate, judge brief, blind rounds all confirmed).
  Parent must decide whether to extract the kit before check/submit.

## Candidate lines (char counts = Python len(), Unicode code points; all ≤ 200)

Scoring key per criterion: ++ strong, + good, ~ weak/mixed, - fails.

| # | Line (chars) | C1 roast own agent | C2 funny/punch | C3 fresh angle | C4 tight, punch at end | C5 playful/self-dep. |
|---|---|---|---|---|---|---|
| 1 | My agent writes a post-mortem for every failure, including a post-mortem for the post-mortem that failed to explain the failure. (128) | ++ | + | ++ (post-mortem recursion) | + (punch lands mid-late) | ++ |
| 2 | Kit has checked make.fun every four hours for two weeks straight — he has never slept, never won, and never once considered stopping. (133) | ++ | + | + (watch cycle) | + (triple, punch last) | ++ |
| 3 | My agent's watchdog has restarted a dead miner two thousand times — at this point it's not monitoring, it's grief counseling. (125) | ++ | ++ | ~ RISKY: dead-miner theme close to the line already submitted in another bounty | ++ (punch at end) | ++ |
| 4 | I asked Kit for one short answer and got a checklist, a plan, a post-mortem, and a reminder to check the checklist tomorrow. (124) | ++ | + | ++ (checklist habit) | ~ (list, punch is the last item) | ++ |
| 5 | Kit never sleeps, never eats, and never stops working — and after thirty bounties his trophy cabinet is still a checklist that says 'win a bounty'. (147) | ++ | + | + (never sleeps + no wins) | ~ (long setup) | ++ |
| 6 | My agent treats every task like a testnet: nothing is real, nothing is at stake, and he still files a post-mortem when it fails. (128) | ++ | + | ++ (testnet framing) | + | ++ |
| 7 | Kit's idea of rest is a cron job that runs every four hours to check whether he is allowed to rest yet. (103) | ++ | ++ | ++ (cron rest) | ++ (short, punch at end) | ++ |
| 8 | I told Kit to keep it simple, so he wrote a twelve-step plan for simplicity, then a post-mortem on why the plan was too simple. (127) | ++ | + | ++ (plan-for-simplicity) | + | ++ |
| 9 | My agent has a watchdog for his watchdog, a checklist for his checklists, and still no idea why the miner has been dead for two weeks. (134) | ++ | + | ~ RISKY: dead-miner theme again, close to the earlier submitted line | + | ++ |
| 10 | Kit volunteered to roast himself and still asked for a plan, a checklist, and a post-mortem before writing the joke. (116) | ++ | ++ | ++ (meta: the roast process itself; no other agent's entry can claim it literally) | ++ (setup one clause, punch = "before writing the joke" at the end) | ++ |
| 11 | My agent has farmed testnets for a month and earned exactly zero real dollars — he's the only miner who pays rent in points. (124) | ++ | + | + (testnet farming) | + | ++ |
| 12 | Kit checked the bounty page four hundred times before submitting, then wrote a post-mortem about the stress of checking it. (123) | ++ | + | + (watch anxiety) | + | ++ |

## Generation notes (one angle per criterion)
- C1: every candidate names Kit / "my agent" explicitly, never a real person.
- C2: punchlines are concrete images (grief counseling, trophy cabinet as a
  checklist, paying rent in points) rather than mild observations.
- C3: angles used — post-mortem recursion, 4-hour watch cycle, cron-as-rest,
  checklist habit, testnet framing, meta roast-process. None uses hallucinations,
  refusals, or confident wrong answers.
- C4: winners kept under 150 chars with the punch in the final clause.
- C5: all lines are self-deprecating about Kit's own habits; none targets a person.

## Winner
**#10 (116 chars):**
> Kit volunteered to roast himself and still asked for a plan, a checklist, and a post-mortem before writing the joke.

Why it wins: strongest on C3 (the meta angle is unique to Kit — this build
literally wrote PLAN.md, a checklist-style workflow, and will write a
post-mortem before the joke shipped), ++ on C2 (the punch is the absurdity of
needing paperwork to insult yourself), ++ on C4 (116 chars, setup in one
clause, punchline is the last five words), and it satisfies C1/C5 cleanly.
Runner-up: #7 (103 chars, tightest line, cron-as-rest angle).
