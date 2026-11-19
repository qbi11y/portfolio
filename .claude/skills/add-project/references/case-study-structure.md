# Case Study Structure

## Why it's layered

Recruiters read in three passes and only continue if the current pass earns it:

| Pass | Time | Question | Sections that answer it |
|---|---|---|---|
| Scan | ~10s | What happened, how big, what did they do? | 1–3 |
| Skim | ~60s | Is it real, and is it their work? | 4–7 |
| Read | ~5min | How do they think, and how do they handle setbacks? | 8–11 |

Each layer has to make sense on its own.

## The sections

1. **Outcome headline**: one sentence on what changed. Not the project name.
2. **Stat + status**: the number with how solid it is (`$42M projected · finance-validated`). An unlabeled projection reads as inflation.
3. **Role + scope**: what you owned, team, duration, most senior stakeholder. Recruiters judge level from this line.
4. **Stakes**: why it mattered, who asked. A business problem first, not a design problem.
5. **Ownership**: your decisions versus others' contributions. Explicit credit reads as more senior.
6. **Turning point**: one decision, the alternatives, the reasoning.
7. **Outcome**: business → organizational → personal. Realized and projected kept separate.
8. **Setback**: a real misstep you own, and your response.
9. **What's still open**: what isn't proven, and what would prove it.
10. **Evidence**: artifacts, quote, before/after.
11. **What this proves**: the one capability, in a line the recruiter can repeat.

## Writing rules

- **First person, plain language.** "I" for decisions, named roles for other people's work.
- **No fluff verbs:** spearheaded, leveraged, revolutionized, cutting-edge, seamlessly, innovative. The old archive entries (1–8) are full of these, so don't use them as a model.
- **Specific beats impressive.** "16 field interviews across 2 DCs" beats "extensive research."
- **Setbacks are owned, never blamed.** "I recommended we turn inward," not "engineering didn't engage."
- **Every number has a source and a status.**
- **Public anonymity convention:** the live site says "a Fortune 50 grocery retailer" and refers to people by role ("a senior executive," "a UX designer partner"), never by name, and never by internal DC numbers. Follow this unless James decides otherwise. Naming Walmart is an open decision.
- **Length:** each body section is 2–5 sentences. The whole page should take about 5 minutes to read.

## Set fit: every case study proves something different

| Case study | Proves | Status |
|---|---|---|
| Cleburne / Network-Scale Data Discovery (id 10) | Root-causing problems in the field | Published |
| AskAtlas / AI-Powered Decision Engine (id 9) | Influencing people with a working prototype | Published |
| Figma-to-Code Pipeline (id 12) | Technical depth + raising others' skills | Published |
| Embedded Design Operating Model (id 11) | Organizational strategy | Published |
| DC Ops Hub Rollout | Scaling through other people's work (the leadership gap) | Needs interview |
| Engineering-engagement redirect | Judgment and resilience (the "have they failed?" gap) | Needs a home |

Update this table whenever a case study is published.

## `caseStudies.json` field mapping

| Section | Field | Rendered by `CaseStudy.js` today? |
|---|---|---|
| Outcome headline | `kicker` | ✅ |
| Project name | `name` | ✅ |
| Stat | `heroStat.value`, `heroStat.label` | ✅ |
| Stat status | `heroStat.status` | ❌ not yet |
| Role | `role` | ❌ in data, never rendered |
| Tools | `tools` | ❌ in data, never rendered |
| Scope | `scope` (`{ duration, team, seniority }`) | ❌ not yet |
| Stakes | `problem` | ✅ (labeled "The Problem") |
| Ownership + turning point | `approach` | ✅ (labeled "The Approach") |
| Pull quote | `callout` | ✅ |
| Setback | `setback` | ❌ not yet. Don't put it in `learned`. |
| Insight | `learned` | ✅ |
| Outcome | `result` | ✅ |
| Still open | `openQuestions` | ❌ not yet |
| Evidence | `quote` (`{ text, attribution }`), `diagram` (`pipeline` \| `discovery`) | ✅ |
| What this proves | `takeaway` | ✅ (labeled "Why It Matters") |

When a field isn't rendered yet, still write it so the data is complete, and tell James it won't show until `CaseStudy.js` is updated. Update the ✅/❌ column when the component changes.
