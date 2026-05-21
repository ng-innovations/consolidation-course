# CLAUDE.md — Consolidation Course

Guidance for Claude (and Claude Code) when working in this repository. Read this end-to-end before making any changes.

---

## What this project is

This repo builds and maintains a **developer onboarding curriculum on financial report consolidation**. The output is a static HTML site — no build step, no server, no compilation. Open `index.html` in a browser and it works. The site teaches consolidation concepts to developers and analysts working on a separate consolidation web application.

The site is published via GitHub Pages at `https://ng-innovations.github.io/consolidation-course/`.

The user's consolidation pipeline is documented in `Consolidation_Process.xlsx` (in the repo or supplied as context). The curriculum aligns with that pipeline but is not strictly bound to its step order.

---

## The audience

- **Primary:** software developers building the consolidation app
- **Secondary:** financial analysts on the team
- **Assumed knowledge:** basic bookkeeping familiarity (knows what a balance sheet is, knows debits/credits exist), no prior consolidation experience
- **Not assumed:** no CPA-level vocabulary, no exposure to GAAP/IFRS-specific terminology

---

## Structure

The course has three layers:

- **Layer 1 — Purpose & Concepts** (7 lessons): what consolidation is, why it exists, the high-level workflow. Concept-first; no app-pipeline order forced.
- **Layer 2 — Mechanics** (13 lessons): the accounting logic of each pipeline step. Taught in **pedagogical order**, but each lesson tags the app's pipeline step(s) it covers (e.g. "Pipeline: C.8, C.10"). Some concepts span multiple pipeline steps and are kept as one lesson for clarity.
- **Layer 3 — Hands-on in Excel** (planned): follows the app's pipeline order **exactly**, 1:1 with pipeline steps. Builds a working consolidation from a single sample dataset.

The app's pipeline phases are: **A. Setup → B. Ingest → C. Consolidate → D. Close**. When unsure which pipeline step a concept maps to, ask before guessing. Lesson 1.4 frames these phases as one opinionated way to organize the work — not as universal accounting truth — so be careful not to over-anchor lessons to the four-phase framing.

---

## Data states (shared vocabulary)

The app uses these named states for data as it moves through the pipeline. Lessons refer to them by name:

**Local → Translated → Standardized → Eliminated → Ownership-Adjusted → Top**

Each Layer 2 lesson that performs a state transition should call it out explicitly (e.g. "After this step, data moves from Standardized to Eliminated").

---

## Writing rules

1. **Concise, plain language.** No unnecessary big words. Short sentences when possible. Aim for the level of a well-written tech blog post, not an accounting textbook.

2. **Every term gets a glossary entry.** Not just fancy accounting terms — anything a non-accountant developer might not know: debit/credit, journal entry, trial balance, GAAP, COGS, AR, AP, etc. If you're tempted to use a term in a lesson, check `js/glossary-data.js` first. If it's missing, add it before publishing.

3. **Every acronym goes in the glossary** with both the full expansion and an explanation. GAAP, IFRS, NCI, CTA, COA, AR, AP, COGS, P&L, JV, REIT, FX, VIE, GL, TB, OCI, APIC, IC, JE, XBRL.

4. **No term used before it's introduced — wrap only the first occurrence per lesson.** Glossary entries can cross-reference each other freely. Wrapping is done with `<span class="term" data-term="key">term</span>`.
    - In each lesson body, wrap **only the first appearance** of a given glossary term. Subsequent occurrences in that same lesson stay as plain text — wrapping all of them creates visual noise without adding value, since one clickable instance per lesson is enough to reach the definition.
    - Each lesson resets its own first-occurrence tracking. A term appearing in lesson 1.2 and lesson 1.3 gets wrapped once in each — they're independent.
    - In all lessons, do **not** wrap glossary terms inside: headings (`h1`–`h4`), SVG `<text>` elements, the page `<title>`, attribute values, the prev/next `lesson-nav` block, or company chips. Don't double-wrap text already inside a `.term` span.

5. **Worked examples are small.** Round numbers ($100, $1,000), two or three entities, one or two currencies max. Save bigger fictional companies and richer multi-entity scenarios for Layer 3.

6. **Most lessons end with a "For developers" callout** — a `<div class="callout callout-dev">` near the end that talks directly to engineers about implications for the app: what the data model needs to support, what edge cases to plan for, what gets confusing in implementation. Skip the callout when a lesson doesn't have meaningful app-implementation implications, or when the body has already said everything a dev would need. Forced or generic callouts dilute the ones that do matter.

7. **Every lesson ends with a Summary bullet list.** 4–6 bullets recapping key takeaways.

8. **Pipeline reference line near the top of each Layer 2 lesson.** Format: `<p><strong>Pipeline reference:</strong> [step name] (step X.Y).</p>`

9. **No persuasive content, no marketing voice.** Explanatory, neutral, factual.

10. **Don't invent company doctrine.** Curriculum content must not phrase observations as firm principles, doctrines, or "rules" the company holds — formulations like "Every architectural decision must…", "Our three core principles…", "The company always…" should be avoided unless that exact framing came from the founders or product leadership. Where it would be useful to highlight considerations, present them as a plain list of points to keep in mind, common patterns to be aware of, or trade-offs worth thinking about — not as declared principles attributed to the team. When in doubt, soften the framing.

11. **Distinguish accounting requirements from implementation choices.** Lessons teach accounting work that has to happen regardless of tooling — the math and the order it must run in. How software organizes that work (phases, pipelines, steps) is one opinionated choice among many. Keep the two separate in the prose: state the accounting requirement plainly, then if useful, point out how this app structures it (typically inside the `callout-dev`). Don't present app structure as if it were the accounting itself.

12. **Illustrative examples need concrete names, not placeholders.** When an example is meant to help the reader picture a scenario — "Parent owns 30% of X and has one board seat", "Sub Y borrows from Sub Z" — give the entities realistic-sounding fictional company names (Acme Industrials, BrightWave Energy, Northwind Logistics, Summit Foods, Cedar Manufacturing, Stellar Health, etc.) rather than abstract placeholders like "Sub A" or "Sub B". The point of an example is to make a concept tangible; a name like "Acme Industrials" lets the reader build a mental picture, while "Sub A" stays generic and forgettable. Abstract placeholders (P, S, Sub A, Sub B) are appropriate **only** in worked numerical/accounting walkthroughs and in structural diagrams (org charts, ownership trees) where a real name would distract from the relationships being illustrated. "Parent" can remain abstract — the reader is meant to identify with it — but the entities it holds or transacts with should be named.

13. **No accountant jargon without a glossary link — even inside glossary entries.** A definition is the wrong place to quietly introduce another undefined accounting term. Watch in particular for accountant-specific verbs and noun phrases that read naturally to a finance person but are opaque to a developer: "write-down", "write it back up", "carrying amount", "obsolescence", "amortize", "accrete", "recognize through earnings", "topside adjustment", "haircut", etc. For each one, either (a) replace it with a plain-English equivalent — "reduce the recorded value", "raise the value again", "value on the books", "becoming outdated", "spread cost over time", "build up over time" — or (b) keep the precise term but wrap it as a glossary link to its own entry. The reader should be able to read any glossary entry without bouncing through three more before they understand the first.

14. **Multi-entity diagrams: distinct colors, full names, matching chips in text.** When a lesson includes a diagram with multiple *specific named* entities (an org chart, ownership tree, transaction-flow diagram, etc.):
    - **Distinct hues, not shades of one color.** Each entity gets a clearly different color — navy, teal, amber, purple, rose, etc. Identifying an entity at a glance matters more than aesthetic uniformity. Don't paint a five-entity org chart in five shades of blue.
    - **Full mockup company names, not letters.** Boxes show plausible fictional names ("Apex Holdings", "Cedar Capital", "Pioneer Foods") rather than single-letter placeholders ("P", "H", "Sub A"). Names should be internally consistent across the diagram and shouldn't collide with company names used elsewhere in the same lesson.
    - **Mirror the diagram colors in body text using chips.** When body text refers to an entity that appears in the diagram, wrap the name in `<span class="company-chip" style="background:#hex;">Name</span>`. The background hex must match the entity's fill color in the diagram. This carries the visual identity from the diagram into the prose so the reader doesn't have to re-decode names each time they appear.
    - **Generic role labels are exempt.** Diagrams that only show abstract roles ("Parent", "Investee", "Subsidiary") without naming a specific entity don't need this treatment — they illustrate a relationship type, not a specific scenario, and abstract labels are appropriate there.

---

## Lesson template

```html
<header class="content-header">
  <div class="content-eyebrow">Layer N — Lesson M · Pipeline: X.Y</div>
  <h1>Lesson title</h1>
</header>

<p>Opening paragraph — what this lesson is about and why it matters.</p>

<p><strong>Pipeline reference:</strong> ...</p>  <!-- Layer 2 only -->

<h2>Main section</h2>
<p>Body content with <span class="term" data-term="...">terms</span> marked up.</p>

<svg class="diagram" viewBox="0 0 680 240">...inline SVG...</svg>

<h2>More sections...</h2>

<h2>Why this matters for the software</h2>
<div class="callout callout-dev">
  <div class="callout-title">For developers</div>
  <p>...</p>
  <ul>...design implications...</ul>
</div>

<h2>Summary</h2>
<ul>
  <li>4–6 takeaway bullets</li>
</ul>
```

---

## Visual / formatting conventions

- **Inline SVG only.** No external image dependencies. SVGs use the existing CSS color palette (defined in `css/main.css`).
- **Tables** for any structured comparison (account hierarchies, journal entries, FX rate types).
- **Journal entries** in tables with three columns: Account / Debit / Credit. Amounts right-aligned.
- **Callout types available:**
  - `.callout` (default — informational, blue)
  - `.callout.callout-warn` (yellow — gotchas, caveats)
  - `.callout.callout-dev` (used for the "For developers" section)
- **No emojis in lesson content.**

---

## Repository layout

```
/
├── index.html                  # Homepage with all lesson links
├── .nojekyll                   # Tells GitHub Pages to skip Jekyll processing — do not delete
├── readme.md                   # Short pointer to this file
├── claude.md                   # This file
├── assets/                     # Static assets (images, etc.) — currently empty/unused
├── css/
│   └── main.css                # All styling. Color palette via CSS vars at top of file.
├── js/
│   ├── nav.js                  # Renders the left nav sidebar from a JS data structure
│   ├── glossary-data.js        # Glossary entries (the source of truth for terms)
│   ├── glossary.js             # Glossary panel behavior
│   └── progress.js             # Mark-complete / progress tracking
└── lessons/
    ├── layer1/                 # 1-1-*.html through 1-7-*.html
    └── layer2/                 # 2-1-*.html through 2-13-*.html
```

There is no `build/` directory and no generator. Lesson HTML files are the source of truth — edit them directly.

---

## File and code conventions

- Lesson HTML files live at `lessons/layer{N}/{N}-{M}-{slug}.html`. Edit them directly; there is no separate source to regenerate from.
- The navigation sidebar is rendered by `js/nav.js` — when adding or renaming lessons, update the entry there to match.
- The homepage `index.html` also lists every lesson; update it whenever the lesson list changes.
- Glossary entries live in `js/glossary-data.js` and are the source of truth for terms. Any `data-term="key"` in a lesson must point to a key that exists there.
- The `.nojekyll` file at the repo root is required for GitHub Pages to serve the HTML as-is. Do not delete it.

When a lesson is added, renamed, or reordered, three places need to agree:
- The lesson HTML file in `lessons/layer{N}/`
- The entry in `js/nav.js`
- The entry in `index.html`

---

## Standard workflow for edits

Follow this order. Do not skip steps.

1. **Read the existing material first.** Before changing any lesson, read the current version end-to-end. Don't re-derive what's already written. If glossary terms or pipeline tags are at issue, also open `js/glossary-data.js` and the relevant Layer 2 lesson pipeline tag for context.

2. **Edit the HTML directly.** Lesson files at `lessons/layer{N}/{N}-{M}-{slug}.html` are the source of truth. There is no build step.

3. **Update the glossary in the same change.** If introducing a new term, add it to `js/glossary-data.js` in the same commit. If repurposing an existing term, link to it — don't create a duplicate.

4. **Update nav and homepage when lessons change structurally.** Adding, renaming, or reordering a lesson means touching three places: the lesson HTML, `js/nav.js`, and `index.html`. All three must agree.

5. **Spot-check the rendered HTML.** Open `index.html` and the lesson(s) you changed in a browser. Confirm:
   - Styling and nav render
   - Glossary terms are clickable and resolve
   - Internal links navigate correctly
   - SVG diagrams display
   - No raw `data-term` references with missing glossary entries

6. **Commit with a clear message.** One logical change per commit when possible. Mention the lesson number(s) touched and the nature of the change ("Lesson 2.6: tighten intercompany matching example", "Add NCI acronym to glossary", etc.).

7. **Push.** GitHub Pages will redeploy automatically within a minute or two.

---

## Operating rules for revisions

1. **Preserve voice and conventions.** Match the existing tone, callout style, table formatting, and SVG style. The course should feel like one person wrote all of it. When in doubt, mimic a neighboring lesson.

2. **Check the glossary before introducing terms.** Open `js/glossary-data.js` first. If the term exists, link to it. If it doesn't, add it before publishing the lesson that uses it.

3. **Respect the layer boundaries.** Don't push Layer 3 (Excel hands-on) details into Layer 2. Don't push Layer 2 mechanics into Layer 1. If a Layer 1 lesson is starting to teach mechanics, that's a signal it belongs in Layer 2 instead.

4. **When in doubt about pipeline alignment, ask.** The user knows the app's pipeline best. If a revision touches which pipeline step a concept covers, confirm before changing the tag. Don't guess.

5. **For substantive structural changes** (adding lessons, reordering, renaming files), confirm the plan with the user before writing content. For tweaks to wording, examples, or callouts within an existing lesson, just make the change and show the diff.

6. **Spot-check after every change.** Open the rendered page, click the terms, follow the links, confirm the SVG renders. There's no automated validation — you are the validation.

7. **Keep `.nojekyll` in place.** Without it, GitHub Pages runs Jekyll over the repo, which mangles the HTML. If it goes missing, restore it immediately.

---

## Common pitfalls

- **Term used before it's marked up.** The first occurrence in a lesson body must be wrapped in `<span class="term" data-term="key">`. Easy to forget when copy-pasting paragraphs.
- **Acronym without a glossary entry.** Every acronym needs an entry with both expansion and explanation.
- **`data-term` key that doesn't exist in `glossary-data.js`.** The term link will silently fail to open anything. Spot-check by clicking.
- **Pipeline tag drift.** When a Layer 2 lesson's pipeline step changes (rare, but it happens), the eyebrow line, the "Pipeline reference" paragraph, and any cross-references all need to update together.
- **Forgetting to update three places.** Lesson list lives in: the lesson HTML itself, `js/nav.js`, and `index.html`. All three.
- **Skipping the manual spot-check.** Always open the rendered page after a change.
- **Conflating accounting with implementation.** Lessons teach the accounting; the app's four-phase pipeline is one opinionated way to organize it. Don't elevate the latter to the former.

---

## When you're not sure

Ask. Better to pause for one clarification than to publish a lesson that misuses a pipeline tag, repeats a glossary entry under a different key, or quietly turns an implementation choice into accounting doctrine.
