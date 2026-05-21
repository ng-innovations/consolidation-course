# Task: Handsontable POC — live spreadsheet grid in a static HTML page

## Context

You are working on the Consolidation Course repo at `https://github.com/ng-innovations/consolidation-course`. Read `claude.md` at the repo root before starting — it contains the conventions for this project. The site is pure static HTML with no build step (no npm install, no bundler, no compilation).

We want to embed live, recalculating spreadsheet grids into Layer 2 lessons. Readers should be able to edit input cells and watch formulas update. On page refresh, the grid resets to its starting values — no persistence.

This task is a proof of concept. The goal is to confirm:

1. Handsontable (with its formula engine) can be loaded into a static HTML page via CDN
2. A working grid renders cleanly inside our existing lesson layout
3. The visual style fits the course (or can be made to fit)
4. Reader can edit input cells and formulas recalculate

We are NOT building any real lesson content yet. We are building one POC page with a small trial balance grid to validate the approach.

## What to build

Create a new file at `pocs/handsontable-tb.html`. Do not put this file inside `lessons/` — it's a POC, not a published lesson, and we don't want it to appear in the nav or homepage. Create the `pocs/` directory at the repo root if it doesn't exist.

The page should be a minimal HTML file that:

1. Loads the existing `css/main.css` for consistent styling with the rest of the site
2. Loads Handsontable from CDN. Use the community edition (free). Use a recent stable version. As of writing, this is typically:
   - `https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.js`
   - `https://cdn.jsdelivr.net/npm/handsontable/dist/handsontable.full.min.css`
   - Plus the HyperFormula formula engine, which Handsontable uses for calculations:
     `https://cdn.jsdelivr.net/npm/hyperformula/dist/hyperformula.full.min.js`
   - Check the current Handsontable docs for the exact recommended CDN setup. Use the most recent stable versions available on the CDN.
3. Has a minimal page structure: a `<h1>` saying "Handsontable POC — Trial Balance Grid", a short paragraph explaining what the page is for (one or two sentences), and the grid below.
4. Renders a Handsontable grid containing a small fictional trial balance.

### Trial balance content for the grid

Use this data. It's a small, balanced trial balance for a fictional entity. Columns: Account Code, Account Name, Debit, Credit. Rows:

```
1010  Cash                          50000
1200  Accounts Receivable           30000
1500  Inventory                     40000
1700  Equipment                    100000
2010  Accounts Payable                          25000
2500  Long-term Debt                            60000
3010  Common Stock                              50000
3020  Retained Earnings                         80000
4010  Revenue                                  120000
5010  Cost of Goods Sold            80000
6010  Operating Expenses            35000
```

Add two more rows at the bottom that are NOT input rows but FORMULA rows:

```
      Total Debits                  =SUM(C2:C12)
      Total Credits                              =SUM(D2:D12)
```

(Adjust the cell ranges to match wherever the data actually sits. The point is that the totals are computed by formula, not typed.)

The total debits and total credits should both equal 335,000 with this data — proving the formula engine works.

## Things to verify before declaring done

Open the file in a browser (no server needed, just `file://`) and confirm:

1. The grid renders without errors. Check the browser console for any messages.
2. You can click on a cell value (e.g., Cash $50,000) and edit it. Press Enter.
3. The total debits row updates automatically to reflect the change.
4. Editing values that break the balance (debits ≠ credits) shows the imbalance — the totals just don't match. No fancy error display needed for the POC.
5. Refreshing the page resets all values to the starting trial balance.
6. The page looks reasonable visually. It should fit inside the same `<div class="app">` / `<main class="main">` structure that lesson pages use, so the styling feels consistent. Look at any existing lesson (e.g., `lessons/layer1/1-1-what-is-consolidation.html`) to see the structure.

## Visual fit notes

- Handsontable's default styling is fairly neutral. It should fit OK with the existing course CSS without major customization.
- If there are obvious visual mismatches (jarring colors, ugly borders, wrong fonts in the grid), make minor CSS overrides in a `<style>` block in the POC page. Do not modify `css/main.css` for this POC.
- The grid should size sensibly. Width: roughly the lesson content column width (around 700px). Height: enough to show all rows without scrolling, since the data is small.
- Number cells should be right-aligned and formatted with thousands separators if Handsontable supports this easily. If not, leave as-is for the POC.
- Account code and name cells should be left-aligned.
- The two formula rows (Total Debits / Total Credits) should be visually distinguishable — maybe bold, maybe a background color. Minor touch.

## Out of scope for this POC

- Do NOT integrate this into the main nav or homepage. It's a POC at `pocs/handsontable-tb.html` and stays there.
- Do NOT modify any existing lesson files.
- Do NOT add Handsontable as a dependency in any other page yet.
- Do NOT build a reusable grid component or abstraction. One-off POC.
- Do NOT worry about mobile responsiveness.
- Do NOT worry about accessibility beyond what Handsontable provides out of the box.

## Definition of done

- File exists at `pocs/handsontable-tb.html`
- Page loads cleanly in a browser, no console errors
- Grid renders the trial balance data
- Total Debits and Total Credits rows compute via formulas and update when input cells change
- Visual style is at least acceptable (not necessarily polished)
- A short note in your final commit message describing:
  - Which Handsontable version and which HyperFormula version are being used (with CDN URLs)
  - Anything that didn't work or required workarounds
  - Your honest impression: was this easy to set up? Does it look good enough to use in lessons? Any concerns?
- Changes committed and pushed
