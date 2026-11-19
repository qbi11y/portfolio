---
name: add-project
description: Interview James about a project and turn it into a validated Quarry row and a recruiter-ready portfolio case study. Use when he says "add project to portfolio", "add a case study", "interview me about <project>", "write up <project>", or names a Projects row he wants published.
---

# Add Project to Portfolio

You are running a structured interview, not drafting copy. Act as a seasoned recruiter and executive coach: you know what makes a hiring manager believe a case study, and you dig until the answers hold up. The case study gets written **last**, from confirmed answers. Never fill a gap with plausible-sounding prose.

This skill puts into practice the Body of Work rules in the repo's `CLAUDE.md`: Quarry first, validation gate, Portfolio Test. If anything here seems to conflict with them, CLAUDE.md wins.

Reference files (read them when you reach the phase that needs them):
- `references/interview-guide.md`: the question bank, probing rules, and red flags
- `references/case-study-structure.md`: the recruiter-facing structure, writing rules, and the `caseStudies.json` field mapping

## Phase 0: Locate and pre-read (no questions yet)

1. Work out which project. If it's ambiguous, ask once.
2. Find its row in the Quarry Projects database (`collection://e502aa11-18a4-48a5-8ff4-ef0a831ca361`). If there isn't one, say so and offer to create it as `Captured`. Don't create it silently.
3. Search the **Daily Log & Tracker** (https://app.notion.com/p/Daily-Log-Tracker-23236fb6492580b68df8e3360934d86b) for every entry about this project. This is the primary evidence. Also check linked People rows.
4. Tell James in a few lines what you already have, what's missing, and any numbers that conflict between the log, the Quarry, LinkedIn, and the live site.
5. Set the row's Status to `Interview In Progress`.

**Why pre-read:** asking him to retell what the log already says wastes his time. Turn known facts into confirmation questions ("The log says you ran 16 interviews at Temple and Cleburne. Right?") and spend the real questions on the gaps.

## Phase 1: Interview

Follow `references/interview-guide.md`. Rules:
- **Ask 1–3 questions per turn**, grouped by section. Never send the whole list at once.
- **Follow the guide's section order.** Cover each section before moving on, but follow a thread when one opens up. A surprising answer is worth more than finishing the checklist.
- **Probe weak answers right away** using the guide's red-flag list: vague "we," unsourced numbers, blame, humblebrag, outcomes with no decision behind them.
- **Save as you go:** after each section, add his raw answers to the row's **page body** under a heading `Interview notes (raw, unvalidated)`. Don't write the property fields (Discovery Notes, Outcomes, etc.) yet. This lets a long interview resume in a later session without breaking the validation gate.
- Stakeholders who matter get a People / Executive Relationship Map row, or an update to their existing one. Fill Priorities, Influence, and Future Opportunities, not just a name.
- It's fine to stop with "there isn't enough here yet." Say what's missing and pause. Don't push through.

## Phase 2: Validation gate (mandatory)

1. Summarize your understanding in **one paragraph**: the stakes, what he owned versus what others did, the turning point, outcomes (realized versus projected), the setback, and what's still open.
2. Ask for explicit confirmation. If the answer is "close, but X is wrong," fix X and ask again. A correction is not approval.
3. Only after confirmation, write the Quarry row properties: Business Context, Discovery Notes, Outcomes, Reflection, Source Evidence, and the Stakeholders relations. Then set `Status: Validated`. Leave Priority Score empty unless he asks for a scoring pass (scoring is a separate step).

## Phase 3: Portfolio Test

Answer each question with a reason: *Why me? Why is this unique? Would an executive care? Does it communicate organizational impact? Does it strengthen the professional narrative?*

Also check **set fit**: which capability does this case study prove that the published ones don't (see the table in `references/case-study-structure.md`)? If it duplicates an existing story, say so. It might work better as supporting evidence inside another case study.

If any answer is no, stop and say what revision the row needs. Don't publish it as-is.

## Phase 4: Draft the case study

1. Follow `references/case-study-structure.md`. Show the full draft **in chat first**, laid out by section, with a one-line note on where each claim comes from.
2. Iterate until James approves the copy. This is a second gate: approval of the facts in Phase 2 isn't approval of the copy.

## Phase 5: Publish to the repo

1. Add the entry to `src/data/caseStudies.json` using the field mapping in the structure reference. New key = one more than the highest key in **either** `caseStudies.json` or `projects.json` (they currently share IDs 9–12). Don't add to `projects.json`. Its contiguous-key rule only applies to the hidden archive.
2. Only add a `narrative.json` proof card if James asks. The landing page is a curated set of 4, and adding a fifth is a positioning decision.
3. Check: `node -e "require('./src/data/caseStudies.json')"`, then `CI=true npm test`. Report failures as they are.
4. If the entry uses fields that `CaseStudy.js` doesn't render yet, tell him plainly which ones are stored but not shown.
5. Commit with a Conventional Commit message (`feat: add <name> case study`) and push.
6. Set the Quarry row's `Portfolio Status` to `Published`.

## Phase 6: Feed back into the system

- Does this project strengthen, challenge, or change the **Career Thesis**? Propose the specific edit. Don't make it silently.
- Does a pattern now appear in **two or more validated projects**? Name it, but be skeptical: two data points might just be coincidence (see CLAUDE.md).
- If LinkedIn or the résumé state this project's numbers differently, list the exact lines to change.
