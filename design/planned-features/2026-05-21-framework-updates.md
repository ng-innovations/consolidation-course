# Task: Update course framework for new layer structure

## Context

You are working on the Consolidation Course repo at `https://github.com/ng-innovations/consolidation-course`. Read `claude.md` at the repo root before starting — it contains the conventions for this project. The site is pure static HTML with no build step.

We are restructuring the course layers. Several files need to be updated consistently.

## New layer structure

The course now has five layers:

- **Layer 1 — Purpose & Concepts** (unchanged): 7 lessons covering what consolidation is, why, the workflow, key outputs, source data, and why Excel breaks.

- **Layer 2 — Consolidation Steps**: the existing 13 lessons covering the granular operations of consolidation. These will be updated later to include live Excel grids embedded in each lesson; for now, just keep the existing content. The Layer 2 description should mention that each lesson covers the operation with a worked example and (in time) a live spreadsheet grid showing the same operation.

- **Layer 3 — Advanced Concepts** (new, coming soon): edge cases and material that's too detailed for a first pass through Layer 2. Layer 2 lessons will cross-reference Layer 3 with phrases like "see Advanced Concepts 3.5 for more on step acquisitions." No content yet — placeholder only.

- **Layer 4 — Industry-Specific Handling** (new, coming soon): rarer edge cases specific to particular industries (REITs, PE fund-of-funds, insurance, banks). Someone could safely skip Layer 4 unless their work touches that industry. Placeholder only.

- **Layer 5 — Coming from Other Systems** (new, coming soon): mental-model translation for developers who've worked with other consolidation systems. Not competitive analysis or system tutorials — the framing is "if you've used NetSuite OneWorld / Oracle EPM / Workday Adaptive / SAP Group Reporting / Excel-based consolidation, here's how the concepts you already know map to ours, and where the workflows differ." Placeholder only.

**Important**: do not call Layer 5 "Existing Systems." That implied competitive analysis. The intent is migration mental models, not vendor study. Use "Coming from Other Systems" as the title.

## Files to update

### 1. `index.html`

Currently lists Layer 1 (7 lessons) and Layer 2 (13 lessons). Add three new sections after Layer 2 for Layers 3, 4, and 5. Each new section should have:

- A section heading matching the layer name
- A 1-2 sentence description matching the descriptions above
- Italicized "Coming soon" text where lesson lists would go

Match the existing visual structure of the Layer 1 and Layer 2 sections. Use the existing CSS classes (`home-layer`, etc.).

### 2. `js/nav.js`

The left sidebar nav is rendered from a data structure in this file. Add three new layer entries after Layer 2:

- Layer 3 — Advanced Concepts (no lessons yet, show "Coming soon" as a single non-clickable item)
- Layer 4 — Industry-Specific Handling (same)
- Layer 5 — Coming from Other Systems (same)

The existing nav already has placeholders for some of these — check current state and update titles/descriptions to match the new framing. Keep the same visual treatment as Layer 1 and Layer 2 (section headers in uppercase, item indentation, etc.).

### 3. `claude.md`

The "Structure" section near the top currently describes a three-layer course. Replace it with the five-layer structure described above. Be specific about:

- Each layer's purpose
- What goes in Layer 2 vs. Layer 3 (heuristic: Layer 2 covers what a first-pass reader needs to be functional; Layer 3 covers wrinkles you'd punt on a first read)
- What goes in Layer 3 vs. Layer 4 (heuristic: Layer 3 applies across industries; Layer 4 is specific to one)
- Layer 5's role as mental-model translation, NOT competitive analysis or system tutorials

Also update any other references throughout `claude.md` that assume three layers. Search for "Layer 3" and "Layer 4" and make sure existing references make sense in the new context.

## Conventions to follow

- Match the existing voice and formatting in the repo. Read a few existing lessons and `claude.md` before editing.
- Do not introduce new visual elements without a reason. Reuse existing CSS classes.
- After every change, open `index.html` in a browser and confirm the nav and homepage render correctly.
- Spot-check by clicking through to existing Layer 1 and Layer 2 lessons; the nav should still work.
- Commit when done with a single message describing the structural update. Push to main.

## Out of scope for this task

- Do NOT touch any existing lesson HTML files in `lessons/layer1/` or `lessons/layer2/`. Their content stays as is.
- Do NOT add any actual content for Layers 3, 4, or 5. Placeholders only.
- Do NOT install dependencies, add JavaScript libraries, or modify CSS beyond what's needed for the new nav sections.
- Do NOT change `.nojekyll` or any GitHub Pages configuration.

## Definition of done

- `index.html` shows all five layers, with Layers 3-5 marked "Coming soon"
- Left sidebar nav (rendered by `js/nav.js`) shows all five layer headers
- `claude.md` Structure section describes the five-layer model
- All existing Layer 1 and Layer 2 lesson links still work
- Changes committed and pushed
