# 2026-05-26 — Lesson 1.6 tightening + glossary update + 2.2 splice

## Diagnosis

Three problems in the current `1-6-source-data.html`:

1. **The big trial balance sample is hidden in the glossary entry** for `trial-balance` instead of in the lesson body. Readers shouldn't have to click into a glossary popup to see what the central object of the lesson actually looks like. Show-don't-explain: the sample table belongs in the lesson, right above "Why trial balance, not transaction-level."

2. **The lesson keeps going past where Layer 1's job ends.** Three sections — "Handling intercompany account balances" (Approach A vs B + SVG), "When trial balance isn't enough," and "Granularity versus effort" — are mechanics. Layer 1 is supposed to introduce concepts and prime the reader for Layer 2, not start teaching how IC counterparty encodings work or what supplementary schedules exist for unrealized profit. The IC-encoding content (both approaches + the SVG) moves to 2.2 Trial balance collection, where it actually belongs. The other two sections drop — they're already covered downstream in 2.6 and 2.9 and don't add anything Layer 1 needs.

3. **Course-y framing in the opening** ("The previous lessons described what comes out of consolidation; this one describes what goes in") and **a Layer-1 developer callout that's just a re-summary** of the lesson body. Both go.

After the changes, 1.6 is: opening → Trial balance (with sample) → Why trial balance, not transaction-level → What needs to be identifiable → Summary. Tight, focused, primes the reader for Layer 2.

---

## Changes to apply

There are three file edits and one new STYLE_NOTES.md entry.

### 1. Replace `lessons/layer1/1-6-source-data.html` entirely

Replace the full file contents with this:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Source data — Consolidation Course</title>
<link rel="stylesheet" href="../../css/main.css">
</head>
<body>
<div class="app">
  <nav class="nav" id="nav" data-active="1-6-source-data.html" data-root="../../"></nav>
  <main class="main">
    <article class="content">
      <header class="content-header">
        <div class="content-eyebrow">Layer 1 — Lesson 6</div>
        <h1>Source data</h1>
      </header>

<p>Before any of the workflow can run, the <span class="term" data-term="consolidation">consolidation</span> engine has to be fed something. The short answer: a <span class="term" data-term="trial-balance">trial balance</span> per entity per period, with enough identifying information to support the work that follows.</p>

<h2>Trial balance</h2>

<p>A trial balance is a list of every account in an entity's <span class="term" data-term="gl">general ledger</span> with its current balance. If the bookkeeping is correct, total debits equal total credits.</p>

<div class="example-box">
  <strong>Sample TB &mdash; Acme Industrials, year-end (USD):</strong>
  <table class="tb-mock">
    <thead>
      <tr><th>Code</th><th>Account</th><th class="num">Debit</th><th class="num">Credit</th></tr>
    </thead>
    <tbody>
      <tr class="section"><td colspan="4">Assets</td></tr>
      <tr><td>1010</td><td>Cash &amp; equivalents</td><td class="num">125,000</td><td></td></tr>
      <tr><td>1015</td><td>Petty cash</td><td class="num">1,500</td><td></td></tr>
      <tr><td>1100</td><td>Accounts receivable</td><td class="num">180,000</td><td></td></tr>
      <tr><td>1105</td><td>Allowance for doubtful A/R</td><td></td><td class="num">8,000</td></tr>
      <tr><td>1200</td><td>Inventory</td><td class="num">220,000</td><td></td></tr>
      <tr><td>1300</td><td>Prepaid expenses</td><td class="num">12,000</td><td></td></tr>
      <tr><td>1500</td><td>Property, plant &amp; equipment</td><td class="num">850,000</td><td></td></tr>
      <tr><td>1505</td><td>Accumulated depreciation</td><td></td><td class="num">310,000</td></tr>
      <tr><td>1700</td><td>Goodwill</td><td class="num">75,000</td><td></td></tr>
      <tr><td>1800</td><td>Investment in subsidiaries</td><td class="num">40,000</td><td></td></tr>

      <tr class="section"><td colspan="4">Liabilities</td></tr>
      <tr><td>2010</td><td>Accounts payable</td><td></td><td class="num">95,000</td></tr>
      <tr><td>2020</td><td>Accrued expenses</td><td></td><td class="num">28,000</td></tr>
      <tr><td>2030</td><td>Income tax payable</td><td></td><td class="num">22,000</td></tr>
      <tr><td>2100</td><td>Short-term debt</td><td></td><td class="num">60,000</td></tr>
      <tr><td>2500</td><td>Long-term debt</td><td></td><td class="num">250,000</td></tr>
      <tr><td>2600</td><td>Deferred revenue</td><td></td><td class="num">15,000</td></tr>

      <tr class="section"><td colspan="4">Equity</td></tr>
      <tr><td>3010</td><td>Share capital</td><td></td><td class="num">100,000</td></tr>
      <tr><td>3020</td><td>Additional paid-in capital</td><td></td><td class="num">50,000</td></tr>
      <tr><td>3500</td><td>Retained earnings (opening)</td><td></td><td class="num">427,000</td></tr>

      <tr class="section"><td colspan="4">Revenue</td></tr>
      <tr><td>4010</td><td>Sales revenue</td><td></td><td class="num">1,200,000</td></tr>
      <tr><td>4020</td><td>Service revenue</td><td></td><td class="num">180,000</td></tr>
      <tr><td>4900</td><td>Other income</td><td></td><td class="num">8,000</td></tr>

      <tr class="section"><td colspan="4">Expenses</td></tr>
      <tr><td>5010</td><td>Cost of goods sold</td><td class="num">720,000</td><td></td></tr>
      <tr><td>6010</td><td>Salaries &amp; wages</td><td class="num">290,000</td><td></td></tr>
      <tr><td>6020</td><td>Rent expense</td><td class="num">60,000</td><td></td></tr>
      <tr><td>6030</td><td>Utilities expense</td><td class="num">18,000</td><td></td></tr>
      <tr><td>6040</td><td>Office supplies</td><td class="num">6,500</td><td></td></tr>
      <tr><td>6050</td><td>Marketing expense</td><td class="num">42,000</td><td></td></tr>
      <tr><td>6090</td><td>Depreciation expense</td><td class="num">55,000</td><td></td></tr>
      <tr><td>7010</td><td>Interest expense</td><td class="num">22,000</td><td></td></tr>
      <tr><td>7100</td><td>Income tax expense</td><td class="num">36,000</td><td></td></tr>

      <tr class="total"><th colspan="2" style="text-align:right;">Total</th><th class="num">2,753,000</th><th class="num">2,753,000</th></tr>
    </tbody>
  </table>
</div>

<p>Accounts are conventionally grouped: assets and expenses normally carry debit balances; liabilities, equity, and revenue normally carry credit balances. The defining property is that the two columns add to the same total.</p>

<h2>Why trial balance, not transaction-level</h2>

<p>Every entity's general ledger contains every individual transaction posted during the period &mdash; thousands of payments, invoices, accruals, payroll runs, <span class="term" data-term="journal-entry">journal entries</span>. The trial balance is the summary: for each account, what's the ending balance? Consolidation works from the summary, not the underlying transactions.</p>

<p>There are good reasons for this:</p>

<ul>
  <li><strong>It's the standard unit of exchange.</strong> Every accounting system can produce a trial balance. Transaction-level exports vary wildly by system.</li>
  <li><strong>The math doesn't need transactions.</strong> Summing <span class="term" data-term="assets">assets</span> across entities, translating currencies, eliminating <span class="term" data-term="intercompany">intercompany</span> balances &mdash; all operate on account-level totals. Transaction detail is rarely necessary for the output.</li>
  <li><strong>It's far smaller.</strong> A trial balance might have a few hundred lines. The transactions behind it might be millions. Carrying that volume into a consolidation system would slow everything down without changing the result.</li>
  <li><strong>It crosses organizational boundaries cleanly.</strong> A <span class="term" data-term="subsidiary">subsidiary</span>'s controller is comfortable handing over a TB; handing over every transaction feels more invasive and raises confidentiality concerns.</li>
</ul>

<p>A trial balance is, in effect, a contract between the entity and the <span class="term" data-term="group">group</span>: "this is what my books look like at period end, and here's what they say." The group consumes that, not the raw activity beneath it.</p>

<h2>What needs to be identifiable</h2>

<p>For consolidation to work, every line of every trial balance has to carry enough metadata to answer some basic questions:</p>

<table>
  <thead>
    <tr><th>Question</th><th>Why it's needed</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Which account is this?</td>
      <td>So the line can be mapped to the group's <span class="term" data-term="coa">chart of accounts</span> and end up in the right place in the <span class="term" data-term="consolidated-statements">consolidated statements</span>.</td>
    </tr>
    <tr>
      <td>Which fiscal period?</td>
      <td>So <span class="term" data-term="opening-balance">opening balances</span> tie to last period's <span class="term" data-term="close">close</span>, and the line ends up in the right reporting period.</td>
    </tr>
    <tr>
      <td>What's the amount, and in what currency?</td>
      <td>The actual value, plus enough to drive translation to the group's <span class="term" data-term="presentation-currency">reporting currency</span>.</td>
    </tr>
    <tr>
      <td>Is this an intercompany line? If so, with which entity?</td>
      <td>So the IC matching and <span class="term" data-term="elimination">elimination</span> steps know which lines to pair up.</td>
    </tr>
  </tbody>
</table>

<p>The first three are usually obvious from the structure of the data: the account is the account code on the line, the period and currency are headers on the whole submission. The fourth &mdash; identifying the intercompany <span class="term" data-term="counterparty">counterparty</span> &mdash; varies most across entities, because it depends on how each sub's source system encodes that information.</p>

<h2>Summary</h2>

<ul>
  <li>Consolidation runs on trial balance data &mdash; account-level summaries per entity per period &mdash; not raw transactions.</li>
  <li>For each line of TB data, the engine needs to identify the account, period, amount, currency, and (for intercompany lines) the trading partner.</li>
  <li>How the intercompany counterparty is encoded varies by source system, and that variation drives a lot of the design of the ingest layer.</li>
</ul>

      <nav class="lesson-nav">
        <a href="1-5-workflow.html">&larr; 1.5 The consolidation workflow</a>
        <div class="spacer"></div>
        <a href="1-7-why-excel-breaks.html">1.7 Why Excel breaks at scale &rarr;</a>
      </nav>
    </article>
    <aside class="glossary" id="glossary-panel"></aside>
  </main>
</div>
<script src="../../js/glossary-data.js"></script>
<script src="../../js/nav.js"></script>
<script src="../../js/progress.js"></script>
<script src="../../js/glossary.js"></script>
</body>
</html>
```

---

### 2. Update the `trial-balance` glossary entry in `js/glossary-data.js`

The sample TB table is now in the lesson body, so the glossary entry no longer needs to duplicate it. Tighten the entry to a definition.

**Find the existing `'trial-balance'` entry** (it currently has the large sample table embedded in an `example-box`) **and replace its `body` value with:**

```javascript
  'trial-balance': {
    term: 'Trial Balance',
    acronym: 'TB',
    body: `
      <p>A list of every account in the <span class="term" data-term="gl">general ledger</span> with its current balance. If the bookkeeping is correct, total debits equal total credits.</p>
      <p>The trial balance is the standard input to consolidation. Each subsidiary submits its trial balance for the period, and the consolidation process combines them all.</p>
      <p>Accounts are conventionally grouped: assets and expenses normally carry debit balances; liabilities, equity, and revenue normally carry credit balances.</p>
    `
  },
```

Leave the rest of the file alone.

---

### 3. Splice the IC-encoding section into `lessons/layer2/2-2-trial-balance.html`

In 2.2, find the section that currently starts with `<h2>The role of dimensions</h2>`. Insert the new section **immediately before it** (so the order in 2.2 becomes: ...How TBs arrive → existing storage/sign sections → **new: How intercompany counterparty is identified** → The role of dimensions → Workflow gates...).

Paste this block verbatim above the existing `<h2>The role of dimensions</h2>`:

```html
<h2>How intercompany counterparty is identified</h2>

<p>Identifying the account, period, amount, and currency on a TB line is usually mechanical &mdash; that information falls out of the structure of the data itself. Identifying the intercompany counterparty is the part that varies, because subs encode it in their books in one of two ways. From the consolidation engine's perspective either is workable; the choice usually comes down to what each sub's source accounting system can produce.</p>

<h3>Approach A: account-encoded</h3>

<p>Have a separate account for each trading partner. The account code <em>is</em> the counterparty identifier. The engine can read the account and know who's on the other side.</p>

<h3>Approach B: dimensional</h3>

<p>Have one IC AR account and one IC <span class="term" data-term="ap">AP</span> account, and attach a "trading partner" tag (a dimension) to each line. The account stays single; the partner identification moves to a separate field on each line.</p>

<svg class="diagram" viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg">
  <!-- Approach A box -->
  <rect x="20" y="20" width="310" height="160" fill="#f8fafc" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="175" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">Approach A: account-encoded</text>

  <text x="35" y="72" font-size="11" font-family="monospace" fill="#1e293b">12100 — IC AR with Sub B    $4,000</text>
  <text x="35" y="90" font-size="11" font-family="monospace" fill="#1e293b">12101 — IC AR with Sub C    $2,500</text>
  <text x="35" y="108" font-size="11" font-family="monospace" fill="#1e293b">12102 — IC AR with Sub D    $1,200</text>

  <text x="35" y="148" font-size="11" fill="#475569" font-style="italic">Partner identified by which</text>
  <text x="35" y="164" font-size="11" fill="#475569" font-style="italic">account the balance is in.</text>

  <!-- Approach B box -->
  <rect x="350" y="20" width="310" height="160" fill="#f8fafc" stroke="#475569" stroke-width="1.5" rx="6"/>
  <text x="505" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#1e293b">Approach B: dimensional</text>

  <text x="365" y="72" font-size="11" font-family="monospace" fill="#1e293b">12100 — IC AR · Sub B    $4,000</text>
  <text x="365" y="90" font-size="11" font-family="monospace" fill="#1e293b">12100 — IC AR · Sub C    $2,500</text>
  <text x="365" y="108" font-size="11" font-family="monospace" fill="#1e293b">12100 — IC AR · Sub D    $1,200</text>

  <text x="365" y="148" font-size="11" fill="#475569" font-style="italic">Partner identified by a</text>
  <text x="365" y="164" font-size="11" fill="#475569" font-style="italic">separate tag on each line.</text>
</svg>

<p>What drives which approach a sub uses is mostly the capability of its source accounting system. Smaller companies running simpler systems (QuickBooks and the like) tend toward Approach A &mdash; separate accounts &mdash; because that's what's natively exportable. Larger entities on full ERPs (NetSuite, SAP, Oracle, Workday) typically support dimensions natively and lean toward Approach B.</p>

<p>The ingest layer of the engine needs to accept either encoding and normalize them into a single internal representation, so downstream steps (matching, elimination) don't have to care which approach the sub used.</p>
```

That last paragraph is new — it's the implementation point that justifies covering both approaches in a Layer 2 lesson rather than just describing them. Leaving it in 2.2 strengthens the lesson's connection to actual engine work.

---

### 4. Append to `STYLE_NOTES.md`

If `STYLE_NOTES.md` does not yet exist at the repo root, create it. Append this entry to the bottom:

```markdown
## 2026-05-26 — Lesson 1.6 source data: pushed mechanics down to Layer 2

**What changed:** Removed three sections from 1.6 — "Handling intercompany account balances" (Approach A vs B + SVG), "When trial balance isn't enough" (IC matching disputes, unrealized profit on inventory), and "Granularity versus effort." Moved the IC-encoding content (both approaches + SVG) into 2.2 Trial balance collection, where it fits the "how source data actually arrives" focus. Dropped the other two — already covered downstream in 2.6 and 2.9. Also moved the big trial balance sample table out of the `trial-balance` glossary entry and into the lesson body, and dropped the developer callout.

**Why it was wrong:**
- The IC-encoding section was teaching mechanics (how a sub encodes counterparty data in its books). Layer 1's job is to introduce the concepts the reader needs, not to start covering mechanics that Layer 2 lessons will cover in their proper context.
- The sample TB belonged in the lesson body, not behind a glossary click. Show-don't-explain: the central object of the lesson should be visible without a popup.
- The developer callout was a re-summary of the lesson body. Layer 1 callouts are only justified when there's a genuine implementation point that doesn't fall out of the prose. A re-summary is bloat.

**Rules this reinforces:**
- Layer 1 introduces and defines; it does not start covering mechanics. If a section is starting to explain *how* something works rather than *what* it is, it belongs in Layer 2.
- Show, don't explain — and "show" beats "show via glossary popup." If a worked example or mock-up is core to the lesson, put it in the body.
- Layer 1 developer callouts are optional, not required. Drop them when they would just re-summarize the prose. A callout earns its place only when it surfaces a real implementation consequence that the body doesn't already establish.
```

---

## Instructions for Claude Code

Apply the four changes above verbatim:

1. Replace `lessons/layer1/1-6-source-data.html` with the HTML in section 1.
2. In `js/glossary-data.js`, locate the existing `'trial-balance'` entry and replace its `body` value with the tightened version in section 2. Do not touch any other glossary entry.
3. In `lessons/layer2/2-2-trial-balance.html`, insert the new `<h2>How intercompany counterparty is identified</h2>` block from section 3 immediately before the existing `<h2>The role of dimensions</h2>` heading.
4. Append the section 4 entry to `STYLE_NOTES.md` at the repo root, creating the file if it doesn't exist.

**Do not rewrite any prose.** Do not "improve" wording, restructure paragraphs, change punctuation, or rename terms. Paste the content as written.

After applying the changes, open `index.html`, `lessons/layer1/1-6-source-data.html`, and `lessons/layer2/2-2-trial-balance.html` in a browser to confirm:
- All `data-term` references in the new content resolve to existing glossary entries.
- The TB sample table in 1.6 renders with the same styling it had inside the glossary panel (the `tb-mock` CSS classes are reused — no new CSS needed).
- The IC-encoding SVG in 2.2 renders correctly.
- The lesson-nav links at the bottom of 1.6 still point to 1.5 and 1.7.

Commit message suggestion:
```
Lesson 1.6: trim to concepts-only; move IC encoding to 2.2; trial balance sample to lesson body

- Removed IC-encoding sections, "When TB isn't enough," and "Granularity vs effort"
  from 1.6 (Layer 1 should introduce, not teach mechanics).
- Moved Approach A / Approach B + SVG into 2.2 Trial balance collection.
- Moved sample TB table from trial-balance glossary entry into 1.6 body.
- Removed Layer 1 developer callout (was a re-summary of body).
- Added STYLE_NOTES.md entry recording the pattern.
```
