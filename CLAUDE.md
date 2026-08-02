# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

A personal portfolio site (Create React App, deployed to `qbi11y.github.io/portfolio` via GitHub Pages). It is the **publishing layer only** — the last stop for career content, not where that content originates. See "Body of Work system" below before adding or editing any case study content.

## Commands

```bash
npm install          # install dependencies
npm start            # dev server (react-scripts start)
npm run build         # production build to /build
npm test              # jest via react-scripts, runs in watch mode by default
CI=true npm test       # single non-interactive run (use this, not the watch-mode default)
npm test -- Home.test  # run a single test file (matches by filename substring)
npm run deploy         # build + publish /build to the gh-pages branch (gh-pages package)
```

There is no standalone lint script. ESLint runs as part of `start`/`build` via the `eslintConfig` block in `package.json` (`extends: react-app, react-app/jest`).

CI (`.github/workflows`) builds on push to `main` and deploys via `JamesIves/github-pages-deploy-action`. It's pinned to Node 15.x — bumping this is safe and overdue, but do it deliberately, not as a drive-by change.

## Architecture

### Content-as-data model

Case studies are **not** individual components or pages. They're entries in `src/data/projects.json`, rendered generically by `Home` → `Project` → `Section` → `Thumbnail`/`Image`/`Video`. To add or edit a case study, edit the JSON — don't create new components or routes.

`src/data/content.json` holds the personal bio/positioning statement and contact info. `src/data/patents.json` holds patent references.

**Gotcha:** `projects.json` keys must be sequential integer strings starting at `"1"` with no gaps. `Home.js` iterates via `Object.keys(projects).map((_, index) => projects[index + 1])` and `Project.js` looks up `projects[id]` directly from the route param (`/portfolio/project/:id`). Both assume positional, contiguous numeric keys — inserting or removing an entry means renumbering everything after it, and the `"active": true` flag (not key removal) is how an entry gets hidden from the Home list without breaking that numbering.

### Section content schema

Each section's `content[0].text` uses a `\`-delimited, then `:`-delimited mini-format (e.g. `"Role: Design Lead\Tools: Sketch"`) that `Section.js`'s `formatString()` parses into bold-label / value pairs. `callout` (a pull-quote-style stat line), `thumbnails` (small preview images shown inline), and `media` (the full image/video gallery, each item with `type`, `url`, `caption`, optional `orient`) are optional keys on that same `content[0]` object — not separate sections.

### Media layout heuristic

`Project.js` picks the Bulma column class for a media grid from the *count* of items in that section's `media` array (odd count → thirds, even → halves, multiple-of-3 or 5+ → thirds), not from an explicit layout field. Adding/removing a media item can silently change the whole section's grid — check the rendered layout after editing media arrays, don't just trust the data.

### Styling

Bulma (`bulma/css/bulma.min.css`) plus component-scoped `.scss` files (`_home.scss`, `_project.scss`, `_section.scss`, `_odometer.scss`), imported directly and compiled by `react-scripts` via the `sass` devDependency. `Odometer` is a hand-built component (not the `odometer` npm package) used for the animated header text on Home.

## Body of Work system (read before touching content)

This repo does not contain the source material for case studies, resume copy, or the bio in `content.json`. That source of truth lives in Notion, in **The Career Quarry**:

- Career Thesis (narrative + resume/LinkedIn draft copy): https://app.notion.com/p/3b036fb64925815cacc1c05f7a2abda8
- Projects database (one row per initiative — Business Context, Discovery, Outcomes, Reflection, Tier, Priority Score, Status): https://app.notion.com/p/f83431c4ba34400f8239b4c0c1bd8fea
- People / Executive Relationship Map: https://app.notion.com/p/9e5936ddb3514f109c97f59014ed3154
- Frameworks & IP (reusable methodologies, e.g. the Operational Innovation Pipeline): https://app.notion.com/p/3b036fb649258112a4e8ea29b0e7f37f
- Hub page: https://app.notion.com/p/3b036fb64925807387b3dd250ccad09a

### Moving a Projects row from Captured to Validated

A row does not move past `Captured` by being written up — it moves by being **interviewed**. Before touching Discovery Notes, Outcomes, Reflection, or Stakeholders on a row, ask questions; don't draft prose and ask for edits to it. Cover, in roughly this order:

- **Business Context** — why did it exist, what problem was being solved, why did it matter, who requested it?
- **Stakeholders** — who was involved (execs, peers, frontline), why they cared, what they specifically decided, your relationship with them. Each stakeholder worth naming gets (or updates) a row in the People / Executive Relationship Map, not just a mention in prose.
- **Discovery** — what surprised you, what assumptions changed, what did others miss, what pattern emerged?
- **Outcomes** — business, organizational, technical, *and* learning outcomes. Don't stop at "shipped X."
- **Reflection** — what did this teach you, what larger philosophy emerged, does it reinforce or challenge the Career Thesis?

**Validation gate (mandatory, do not skip):** once you have enough to write, summarize your understanding back in one paragraph and get explicit confirmation before writing anything into the row or into `projects.json`. If the answer is "close but X is wrong," fix X and ask again — don't treat a correction as approval. Only write `Status: Validated` after that confirmation. See the "Cleburne Cube/Weight Discovery" row in the Projects database for a worked example of this end-to-end (interview answers → summary → correction → confirmed → written up).

Scoring (the `Priority Score` field, 0–50 across executive influence, business impact, strategic thinking, uniqueness, repeatability, IP potential, storytelling value, portfolio value, executive visibility, future leverage) is a separate pass from the interview — don't assign a score as a side effect of an interview unless asked to.

Rules that follow from all of this:

- **Don't invent case study content directly in this repo.** A Projects row is only safe to turn into a `projects.json` entry once its `Status` is `Validated` or `Published`.
- **The current 8 entries in `projects.json` predate this system** (IBM/Gravitant-era work plus personal side projects) and haven't been scored against the Quarry's Tier/Priority framework yet. Don't delete or deprioritize them without asking — that's a scoring decision, not a code decision.
- **`content.json`'s bio (`personal.tag`, `longStatement`, `shortStatement`) is stale job-seeker copy** ("Design Technologist" looking for a design/sales-enablement team) and doesn't reflect the Career Thesis being developed in the Quarry. Flag it rather than silently rewriting it — the Career Thesis page is still being validated project-by-project.
