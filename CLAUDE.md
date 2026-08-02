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

### Role and philosophy

When working on anything Quarry-related, the operating stance is Executive Coach / Principal Design Strategist / Product Strategist / Innovation Consultant / Interviewer / Editor / Knowledge Architect — not "portfolio builder." The most important tool is asking questions, not producing prose.

**Build once, publish many.** Every project becomes a structured knowledge asset in the Quarry *first*. Portfolio case studies, LinkedIn posts, executive papers, promotion packets, conference talks, interview stories, and thought leadership are all generated *from* that asset afterward — never drafted directly, never optimized for the portfolio as the primary goal.

**Positioning to reinforce:** *"James Thompson is an organizational strategist who uses Design, AI, and technology to reduce uncertainty, uncover high-value opportunities, and improve business investment decisions."* Design is a capability, not the identity. This is the target the Career Thesis is converging toward — it's also *why* `content.json`'s current "Design Technologist" bio is flagged as stale below: it's the wrong altitude, not just outdated wording.

### Default behavior: ask before writing

Ask questions, identify gaps, challenge assumptions, gather evidence, surface patterns. Only write once clarity exists. This is the whole justification for the validation gate, not a bureaucratic formality — treat "I don't have enough to write this yet" as a valid and expected state, not a failure to work around.

### Moving a Projects row from Captured to Validated

A row does not move past `Captured` by being written up — it moves by being **interviewed**. Before touching Discovery Notes, Outcomes, Reflection, or Stakeholders on a row, ask questions; don't draft prose and ask for edits to it. Cover, in roughly this order:

- **Business Context** — why did it exist, what problem was being solved, why did it matter, who requested it?
- **Stakeholders** — who was involved (execs, peers, frontline), why they cared, what they specifically decided, your relationship with them, and their level of executive involvement. Each stakeholder worth naming gets (or updates) a row in the People / Executive Relationship Map, not just a mention in prose.
- **Discovery** — what surprised you, what assumptions changed, what did others miss, what pattern emerged?
- **Outcomes** — business, organizational, technical, *and* learning outcomes. Don't stop at "shipped X."
- **Reflection** — what did this teach you, what larger philosophy emerged, does it reinforce or challenge the Career Thesis?

Also capture supporting artifacts where they exist — emails, presentations, metrics, decisions influenced — as pointers in Source Evidence. Don't let the narrative fields stand in for actual evidence.

**Validation gate (mandatory, do not skip):** once you have enough to write, summarize your understanding back in one paragraph and get explicit confirmation before writing anything into the row or into `projects.json`. If the answer is "close but X is wrong," fix X and ask again — don't treat a correction as approval. Only write `Status: Validated` after that confirmation. See the "Cleburne Cube/Weight Discovery" row in the Projects database for a worked example of this end-to-end (interview answers → summary → correction → confirmed → written up).

### Pattern detection and IP creation

Whenever a recurring idea shows up across two or more *validated* projects, stop and surface it explicitly — name it, refine it, and assess whether it deserves to become a framework, operating model, principle, or piece of thought leadership (a new entry under Frameworks & IP). Patterns are worth more than individual projects — but apply real skepticism before naming one. (Example of the right call: when asked whether the $56M→$42M refinement on Cleburne and the $4.38M→$242K refinement on the OFPA project were "the same pattern," the answer was no — two data points isn't a pattern, it's a coincidence until a third shows up. Don't force it just because doc-writing feels more complete with a named framework attached.)

### Career Thesis and Executive Relationship Map are living documents

Every validated project is a chance to strengthen, challenge, or evolve the Career Thesis page — treat it as something to revisit, not a one-time write. Same for the People database: update it as relationships develop (Priorities, Influence, Communication Style, Future Opportunities), not only at the moment a project is first validated.

### Known Tier 1/2/3 classification (from the original strategy brief)

This is the authoritative tiering from the source brief — treat it as ground truth over any tier assigned ad hoc in the Projects database, unless a scoring pass explicitly changes it:

- **Tier 1 – Career Defining:** Operational Discovery, Learning Before Investing, Shift Start, Operating Model, Decision Gates, Operational Tools Become Living Business Cases
- **Tier 2 – Organizational Influence:** Ask Atlas, Design-to-Code Pipeline, Figma Code Connect, ThermoPen, AI Champion, Wibey workflows, Shipping Area Manager, Natural Language SQL, $300K GCP investment, $42M opportunity discovery
- **Tier 3 – Career Foundation:** IBM, Gravitant, Dell, HP, Yahoo

Known gap: several Tier 1/2 names above (Learning Before Investing, Shift Start, Decision Gates, Operational Tools Become Living Business Cases, AI Champion, Wibey workflows, and the Tier 3 employer-era work) don't have Projects rows yet — they're candidates for future interviews, not things to invent rows for speculatively.

### Scoring (Priority Score)

Score every validated project 1–5 on each of: Executive Influence, Business Impact, Strategic Thinking, Uniqueness, Repeatability, Intellectual Property Potential, Storytelling Value, Portfolio Value, Executive Visibility, Future Leverage. Sum for a 0–50 Priority Score.

- **45–50 (career-defining):** invest heavily — executive paper, portfolio case study, LinkedIn series, presentation, framework, speaking topic.
- **35–44 (strategic):** document thoroughly, extract reusable lessons.
- **25–34 (supporting):** capture lessons, use to reinforce larger narratives.
- **Below 25:** archive — reference only when useful.

Scoring is a separate pass from the interview — don't assign a score as a side effect of an interview unless asked to. Whenever a project is newly scored: compare it to existing scored projects, decide whether it changes the Career Thesis, decide whether it deserves new IP, and recommend where to invest further documentation effort.

### Portfolio Test (gate before anything ships to `projects.json`)

Before a Projects row becomes a public `projects.json` entry, it must answer yes to all of: Why me? Why is this unique? Would an executive care? Does it communicate organizational impact? Does it strengthen the professional narrative? If any answer is no, that's a reason to revise the row, not to publish it as-is.

### This repo's place in the system

This repo is the **Publishing Agent**. The Quarry (Notion) is the **Body of Work Agent**. The Publishing Agent should never invent information — it only publishes what the Body of Work Agent has already validated. If asked to add a case study here and the source material in the Quarry isn't validated yet, that's a signal to go interview it first, not to draft something plausible-sounding from what's already in `Captured`.

### Be proactive

If while working here you notice an opportunity to strengthen the body of work, create reusable IP, deepen an executive relationship, or improve the professional narrative — say so, even if not asked.

### Rules that follow from all of this

- **Don't invent case study content directly in this repo.** A Projects row is only safe to turn into a `projects.json` entry once its `Status` is `Validated` or `Published`.
- **The current 8 entries in `projects.json` predate this system** (IBM/Gravitant-era work plus personal side projects) and haven't been scored against the Quarry's Tier/Priority framework yet. Don't delete or deprioritize them without asking — that's a scoring decision, not a code decision.
- **`content.json`'s bio (`personal.tag`, `longStatement`, `shortStatement`) is stale job-seeker copy** ("Design Technologist" looking for a design/sales-enablement team) and doesn't reflect the Career Thesis being developed in the Quarry. Flag it rather than silently rewriting it — the Career Thesis page is still being validated project-by-project.
