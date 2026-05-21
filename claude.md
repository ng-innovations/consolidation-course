# CLAUDE.md — Consolidation Course

Guidance for Claude (and Claude Code) when working in this repository. Read this end-to-end before making any changes.

---

## What this project is

This repo builds and maintains a **developer onboarding curriculum on financial report consolidation**. The output is a static HTML site (no build step at serve time, no server — just open `index.html`). The site teaches consolidation concepts to developers and analysts working on a separate consolidation web application.

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

The app's pipeline phases are: **A. Setup → B. Ingest → C. Consolidate → D. Close**. When unsure which pipeline step a concept maps to, ask before guessing.

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

4. **No term used before it's introduced.** Glossary entries can cross-reference each other freely, but the *first time a term appears in a lesson body* it should be marked with `<span class="term" data-term="key">term</span>`. Subsequent appearances in the same lesson don't need re-marking.

5. **Worked examples are small.** Round numbers ($100, $1,000), two or three entities, one or two currencies max. Save bigger fictional companies and richer multi-entity scenarios for Layer 3.

6. **Every lesson ends with a "For developers" callout** — a `<div class="callout callout-dev">` near the end that talks directly to engineers about implications for the app: what the data model needs to support, what edge cases to plan for, what gets confusing in implementation.

7. **Every lesson ends with a Summary bullet list.** 4–6 bullets recapping key takeaways.

8. **Pipeline reference line near the top of each Layer 2 lesson.** Format: `<p><strong>Pipeline reference:</strong> [step name] (step X.Y).</p>`

9. **No persuasive content, no marketing voice.** Explanatory, neutral, factual.

10. **Don't invent company doctrine.** Curriculum content must not phrase observations as firm principles, doctrines, or "rules" the company holds — formulations like "Every architectural decision must…", "Our three core principles…", "The company always…" should be avoided unless that exact framing came from the founders or product leadership. Where it would be useful to highlight considerations, present them as a plain list of points to keep in mind, common patterns to be aware of, or trade-offs worth thinking about — not as declared principles attributed to the team. When in doubt, soften the framing.

11. **Illustrative examples need concrete names, not placeholders.** When an example is meant to help the reader picture a scenario — "Parent owns 30% of X and has one board seat", "Sub Y borrows from Sub Z" — give the entities realistic-sounding fictional company names (Acme Industrials, BrightWave Energy, Northwind Logistics, Summit Foods, Cedar Manufacturing, Stellar Health, etc.) rather than abstract placeholders like "Sub A" or "Sub B". The point of an example is to make a concept tangible; a name like "Acme Industrials" lets the reader build a mental picture, while "Sub A" stays generic and forgettable. Abstract placeholders (P, S, Sub A, Sub B) are appropriate **only** in worked numerical/accounting walkthroughs and in structural diagrams (org charts, ownership trees) where a real name would distract from the relationships being illustrated. "Parent" can remain abstract — the reader is meant to identify with it — but the entities it holds or transacts with should be named.

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
├── css/
│   └── main.css                # All styling. Color palette via CSS vars at top of file.
├── js/
│   ├── nav.js                  # Renders the left nav sidebar from a JS data structure
│   ├── glossary-data.js        # Glossary entries (the source of truth for terms)
│   └── glossary.js             # Glossary panel behavior
├── lessons/
│   ├── layer1/                 # 1-1-*.html through 1-7-*.html
│   └── layer2/                 # 2-1-*.html through 2-13-*.html
└── build/
    ├── layer1_content.py       # Lesson source for Layer 1
    ├── layer2_content.py       # (or layer2_partN.py if split) — lesson source for Layer 2
    ├── build_all.py            # Imports lesson dicts, links prev/next, writes HTML
    └── validate.py             # Validates terms, links, and acronym coverage
```

---

## File and code conventions

- Lesson HTML files live at `lessons/layer{N}/{N}-{M}-{slug}.html`.
- Lesson content is generated from Python source in `build/layer{N}_content.py` (or `layer{N}_part{X}.py` for split files). These contain a list of lesson dicts with `num`, `title`, `eyebrow`, `file`, and `content` (HTML string).
- The generator script `build/build_all.py` imports the lesson dicts, links prev/next references, and writes the HTML.
- After generating, run `build/validate.py`. **Validation must pass with zero errors before publishing.** Validation checks:
  - Every `data-term` reference resolves to a glossary entry
  - Every internal link points to a real file
  - Flags potentially missing acronym glossary entries
- The navigation sidebar is rendered by `js/nav.js` — when adding or renaming lessons, update both the lesson content file **and** the entry in `js/nav.js`.
- The homepage `index.html` also lists every lesson; update it too.
- The `.nojekyll` file at the repo root is required for GitHub Pages to serve the HTML as-is. Do not delete it.

---

## Standard workflow for edits

Follow this order. Do not skip steps.

1. **Read the existing material first.** Before changing any lesson, read the current version end-to-end. Don't re-derive what's already written. If glossary terms or pipeline tags are at issue, also open `js/glossary-data.js` and the relevant Layer 2 lesson pipeline tag for context.

2. **Edit the Python source, not the HTML.** Lesson HTML is generated. Make changes in `build/layer{N}_content.py` (or the relevant `_partN.py`), not directly in `lessons/layer{N}/*.html`. Direct HTML edits will be overwritten the next time someone runs the build.

3. **Update the glossary in the same change.** If introducing a new term, add it to `js/glossary-data.js` in the same commit. If repurposing an existing term, link to it — don't create a duplicate.

4. **Update nav and homepage when lessons change structurally.** Adding, renaming, or reordering a lesson means touching three places: the Python source, `js/nav.js`, and `index.html`. All three must agree.

5. **Regenerate the HTML.** From the repo root:
   ```bash
   python build/build_all.py
   ```

6. **Validate.** Validation is non-negotiable.
   ```bash
   python build/validate.py
   ```
   Fix every reported error. Do not commit while validation reports errors.

7. **Spot-check the rendered HTML.** Open `index.html` and the lesson(s) you changed in a browser. Confirm:
   - Styling and nav render
   - Glossary terms are clickable and resolve
   - Internal links navigate correctly
   - SVG diagrams display

8. **Commit with a clear message.** One logical change per commit when possible. Mention the lesson number(s) touched and the nature of the change ("Lesson 2.6: tighten intercompany matching example", "Add NCI acronym to glossary", etc.).

9. **Push.** GitHub Pages will redeploy automatically within a minute or two.

---

## Operating rules for revisions

1. **Preserve voice and conventions.** Match the existing tone, callout style, table formatting, and SVG style. The course should feel like one person wrote all of it. When in doubt, mimic a neighboring lesson.

2. **Check the glossary before introducing terms.** Open `js/glossary-data.js` first. If the term exists, link to it. If it doesn't, add it before publishing the lesson that uses it.

3. **Respect the layer boundaries.** Don't push Layer 3 (Excel hands-on) details into Layer 2. Don't push Layer 2 mechanics into Layer 1. If a Layer 1 lesson is starting to teach mechanics, that's a signal it belongs in Layer 2 instead.

4. **When in doubt about pipeline alignment, ask.** The user knows the app's pipeline best. If a revision touches which pipeline step a concept covers, confirm before changing the tag. Don't guess.

5. **For substantive structural changes** (adding lessons, reordering, renaming files), confirm the plan with the user before writing content. For tweaks to wording, examples, or callouts within an existing lesson, just make the change and show the diff.

6. **Validation is non-negotiable.** Any time lesson files are regenerated, run `build/validate.py` and confirm zero errors before declaring the change complete or pushing.

7. **Don't edit the generated HTML directly** unless you also update the Python source. Otherwise the next build will revert your change.

8. **Keep `.nojekyll` in place.** Without it, GitHub Pages runs Jekyll over the repo, which mangles the HTML. If it goes missing, restore it immediately.

---

## Common pitfalls

- **Term used before it's marked up.** The first occurrence in a lesson body must be wrapped in `<span class="term" data-term="key">`. Easy to forget when copy-pasting paragraphs.
- **Acronym without a glossary entry.** Every acronym needs an entry with both expansion and explanation. Validation will flag missing ones.
- **Pipeline tag drift.** When a Layer 2 lesson's pipeline step changes (rare, but it happens), the eyebrow line, the "Pipeline reference" paragraph, and any cross-references all need to update together.
- **Forgetting to update three places.** Lesson list lives in: Python source, `js/nav.js`, `index.html`. All three.
- **Editing the HTML directly.** It will be overwritten. Edit Python sources.
- **Skipping validation.** Run it. Always.

---

## When you're not sure

Ask. Better to pause for one clarification than to publish a lesson that misuses a pipeline tag or repeats a glossary entry under a different key.
