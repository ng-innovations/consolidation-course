# 2026-05-26 — Layer 1 polish: lessons 1.4, 1.5, 1.7

Three lesson revisions in one handoff. No glossary additions required — every term used resolves to an existing entry.

---

## Lesson 1.4 — Key outputs

### Diagnosis

The lesson is largely sound but two problems run through it:

1. **Textbook scaffolding under the sample tables.** Each table is followed by a paragraph narrating the bookkeeping — *"Revenue of $5M (credit) minus expenses of $4.5M (debit) leaves $500K... debit Income Summary to clear it out, credit Retained earnings..."* — and the cash flow table is followed by the T-account paragraph we already named as the canonical example of "narrating a visual device in prose." Debit/Credit columns stay (you want them visible early), but the narration around them goes. The job of these tables is to show what each report looks like — not to teach the underlying journal-entry mechanics, which is Layer 2 work.

2. **Course-y framing at the bottom.** *"The next lesson walks through that consolidation workflow at a high level; Layer 2 covers each step in detail and finishes with one lesson per consolidated report (2.11–2.14)."* The lesson-nav at the bottom already links to 1.5. The narration is bloat.

Other small things: the lead paragraph for the "four primary reports" section is overlong and refers to "Layer 2" — trim. The summary's third bullet ends with "The next lesson covers the workflow that gets there" — drop the second clause.

### Changes to apply

Replace `lessons/layer1/1-4-key-outputs.html` entirely with the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Key outputs — Consolidation Course</title>
<link rel="stylesheet" href="../../css/main.css">
</head>
<body>
<div class="app">
  <nav class="nav" id="nav" data-active="1-4-key-outputs.html" data-root="../../"></nav>
  <main class="main">
    <article class="content">
      <header class="content-header">
        <div class="content-eyebrow">Layer 1 — Lesson 4</div>
        <h1>Key outputs</h1>
      </header>

<p>The output of <span class="term" data-term="consolidation">consolidation</span> is a set of <span class="term" data-term="financial-statements">financial statements</span> for the <span class="term" data-term="group">group</span> &mdash; the same four standard reports any company produces, just covering the parent and all its subs as if they were one business. This lesson explains what each of those four reports actually is.</p>

<h2>The four primary reports</h2>

<p>The sample tables under each heading below show a simple non-consolidated version of each report &mdash; a single fictional small coffee chain, no subsidiaries &mdash; so the shape of each report is clear before consolidation mechanics are layered on. The tables show explicit Debit and Credit columns so the underlying <span class="term" data-term="debit-credit">debit and credit</span> nature of every line is visible; published financial statements normally use signed amounts in a single column instead.</p>

<h3>Balance sheet</h3>

<p>A <span class="term" data-term="balance-sheet">balance sheet</span> is a snapshot of what a company owns and owes at one moment in time &mdash; usually the last day of the <span class="term" data-term="fiscal-period">fiscal period</span>. It answers the question: <em>if we froze the company today, what is its financial position?</em></p>

<p>It has three sections:</p>

<ul>
  <li><strong><span class="term" data-term="assets">Assets</span></strong> &mdash; everything the company owns or is owed (cash, inventory, equipment, receivables).</li>
  <li><strong><span class="term" data-term="liabilities">Liabilities</span></strong> &mdash; everything the company owes to outside parties (loans, payables, accrued expenses).</li>
  <li><strong><span class="term" data-term="equity">Equity</span></strong> &mdash; what's left for owners after subtracting liabilities from assets.</li>
</ul>

<p>Assets always equal liabilities plus equity. That equation is the bedrock of double-entry bookkeeping.</p>

<table>
  <thead>
    <tr><th>Cedar Coffee Co. &mdash; balance sheet, Dec 31</th><th>Debit</th><th>Credit</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Assets</strong></td><td></td><td></td></tr>
    <tr><td style="padding-left: 24px;">Cash</td><td style="text-align: right;">$800,000</td><td></td></tr>
    <tr><td style="padding-left: 24px;">Inventory (beans, milk, supplies)</td><td style="text-align: right;">$200,000</td><td></td></tr>
    <tr><td style="padding-left: 24px;">Equipment, net of depreciation</td><td style="text-align: right;">$1,500,000</td><td></td></tr>
    <tr><td><strong>Liabilities</strong></td><td></td><td></td></tr>
    <tr><td style="padding-left: 24px;">Accounts payable</td><td></td><td style="text-align: right;">$300,000</td></tr>
    <tr><td style="padding-left: 24px;">Loan</td><td></td><td style="text-align: right;">$700,000</td></tr>
    <tr><td><strong>Equity</strong></td><td></td><td></td></tr>
    <tr><td style="padding-left: 24px;">Common stock</td><td></td><td style="text-align: right;">$200,000</td></tr>
    <tr><td style="padding-left: 24px;">Retained earnings</td><td></td><td style="text-align: right;">$1,300,000</td></tr>
    <tr><td><strong>Totals</strong></td><td style="text-align: right;"><strong>$2,500,000</strong></td><td style="text-align: right;"><strong>$2,500,000</strong></td></tr>
  </tbody>
</table>

<p>Total assets equal total liabilities plus equity. That is what "the balance sheet balances" means in practice. The two equity lines have their own glossary entries: <span class="term" data-term="common-stock">common stock</span> and <span class="term" data-term="retained-earnings">retained earnings</span>.</p>

<h3>Income statement</h3>

<p>An <span class="term" data-term="income-statement">income statement</span> (also called a P&amp;L, or statement of profit and loss) shows revenue, expenses, and the resulting profit over a period &mdash; typically a month, quarter, or year. It answers: <em>how much did the company earn during this period, and from doing what?</em></p>

<p>Its skeleton:</p>

<ul>
  <li><span class="term" data-term="revenue">Revenue</span></li>
  <li><span class="term" data-term="cogs">Cost of goods sold</span></li>
  <li>Gross profit</li>
  <li>Operating expenses</li>
  <li>Operating income</li>
  <li>Other income/expense, interest, taxes</li>
  <li>Net income (the bottom line)</li>
</ul>

<p>While the balance sheet is a point-in-time snapshot, the income statement covers a span of time.</p>

<table>
  <thead>
    <tr><th>Cedar Coffee Co. &mdash; income statement, year ended Dec 31</th><th>Debit</th><th>Credit</th></tr>
  </thead>
  <tbody>
    <tr><td>Revenue</td><td></td><td style="text-align: right;">$5,000,000</td></tr>
    <tr><td>Cost of goods sold</td><td style="text-align: right;">$2,000,000</td><td></td></tr>
    <tr><td>Operating expenses, including $300,000 depreciation</td><td style="text-align: right;">$2,500,000</td><td></td></tr>
    <tr><td><strong>Net income</strong> &mdash; closed to retained earnings at year-end</td><td style="text-align: right;"><strong>$500,000</strong></td><td></td></tr>
    <tr><td><strong>Totals</strong></td><td style="text-align: right;"><strong>$5,000,000</strong></td><td style="text-align: right;"><strong>$5,000,000</strong></td></tr>
  </tbody>
</table>

<h3>Cash flow statement</h3>

<p>A <span class="term" data-term="cash-flow-statement">cash flow statement</span> shows where cash came from and where it went during the period. It answers: <em>did this company actually generate cash, and what did it spend cash on?</em></p>

<p>Cash flows are organized into three categories:</p>

<ul>
  <li><strong>Operating activities</strong> &mdash; cash from running the business (sales, paying suppliers, paying employees).</li>
  <li><strong>Investing activities</strong> &mdash; cash spent on or received from long-term assets (buying equipment, acquiring another company).</li>
  <li><strong>Financing activities</strong> &mdash; cash from or paid to capital providers (taking out a loan, paying dividends, issuing stock).</li>
</ul>

<p>The cash flow statement matters because profit on the income statement is not the same as cash in the bank. A company can be profitable on paper and still run out of cash.</p>

<table>
  <thead>
    <tr><th>Cedar Coffee Co. &mdash; cash flow, year ended Dec 31</th><th>Debit (cash inflow)</th><th>Credit (cash outflow)</th></tr>
  </thead>
  <tbody>
    <tr><td>Opening cash balance (Jan 1)</td><td style="text-align: right;">$700,000</td><td></td></tr>
    <tr><td><strong>Operating activities</strong></td><td></td><td></td></tr>
    <tr><td style="padding-left: 24px;">Net income</td><td style="text-align: right;">$500,000</td><td></td></tr>
    <tr><td style="padding-left: 24px;">Add: depreciation (non-cash add-back)</td><td style="text-align: right;">$300,000</td><td></td></tr>
    <tr><td><strong>Investing activities</strong></td><td></td><td></td></tr>
    <tr><td style="padding-left: 24px;">Capital expenditures (new espresso machines, store buildout)</td><td></td><td style="text-align: right;">$500,000</td></tr>
    <tr><td><strong>Financing activities</strong></td><td></td><td></td></tr>
    <tr><td style="padding-left: 24px;">Dividends paid</td><td></td><td style="text-align: right;">$200,000</td></tr>
    <tr><td><strong>Closing cash balance (Dec 31)</strong> &mdash; carried forward to next period</td><td></td><td style="text-align: right;"><strong>$800,000</strong></td></tr>
    <tr><td><strong>Totals</strong></td><td style="text-align: right;"><strong>$1,500,000</strong></td><td style="text-align: right;"><strong>$1,500,000</strong></td></tr>
  </tbody>
</table>

<h3>Statement of changes in equity</h3>

<p>The statement of changes in equity (often called the <em>equity rollforward</em>) shows how the equity section of the balance sheet moved from the beginning of the period to the end. It answers: <em>how did owners' stake in the company change during the period?</em></p>

<p>It accounts for every movement: opening balance, plus profit for the period, plus or minus owner activities (dividends paid, shares issued, shares bought back), plus or minus certain gains and losses that bypass the income statement, equals closing balance.</p>

<p>This report ties the three other reports together &mdash; net income from the income statement lands here, and the closing balance lines up with equity on the balance sheet.</p>

<table>
  <thead>
    <tr><th>Cedar Coffee Co. &mdash; statement of changes in equity, year ended Dec 31</th><th>Debit (decreases equity)</th><th>Credit (increases equity)</th></tr>
  </thead>
  <tbody>
    <tr><td>Opening equity balance (Jan 1) &mdash; Common stock $200,000 + Retained earnings $1,000,000</td><td></td><td style="text-align: right;">$1,200,000</td></tr>
    <tr><td>Net income for the year (closed into retained earnings)</td><td></td><td style="text-align: right;">$500,000</td></tr>
    <tr><td>Dividends paid</td><td style="text-align: right;">$200,000</td><td></td></tr>
    <tr><td><strong>Closing equity balance (Dec 31)</strong> &mdash; Common stock $200,000 + Retained earnings $1,300,000, carried forward to next period</td><td style="text-align: right;"><strong>$1,500,000</strong></td><td></td></tr>
    <tr><td><strong>Totals</strong></td><td style="text-align: right;"><strong>$1,700,000</strong></td><td style="text-align: right;"><strong>$1,700,000</strong></td></tr>
  </tbody>
</table>

<p>The four samples above are internally consistent: net income of $500,000 appears on the income statement, on the cash flow's operating section, and as a row on the equity statement; closing cash of $800,000 matches the balance sheet's cash line; closing equity of $1,500,000 (Common stock $200,000 + Retained earnings $1,300,000) matches the balance sheet's equity section.</p>

<h2>How they fit together</h2>

<svg class="diagram" viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg">
  <text x="360" y="22" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">The four reports, and how they connect</text>

  <rect x="40" y="50" width="180" height="60" fill="#dbeafe" stroke="#1e40af" rx="4"/>
  <text x="130" y="74" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Income statement</text>
  <text x="130" y="92" font-size="11" fill="#1e293b" text-anchor="middle">activity over a period</text>

  <rect x="500" y="50" width="180" height="60" fill="#dbeafe" stroke="#1e40af" rx="4"/>
  <text x="590" y="74" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Balance sheet</text>
  <text x="590" y="92" font-size="11" fill="#1e293b" text-anchor="middle">snapshot at period end</text>

  <rect x="270" y="140" width="180" height="60" fill="#fef3c7" stroke="#f59e0b" rx="4"/>
  <text x="360" y="164" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">Statement of changes</text>
  <text x="360" y="182" font-size="12" font-weight="700" fill="#92400e" text-anchor="middle">in equity</text>

  <rect x="40" y="140" width="180" height="60" fill="#d1fae5" stroke="#059669" rx="4"/>
  <text x="130" y="164" font-size="12" font-weight="700" fill="#059669" text-anchor="middle">Cash flow statement</text>
  <text x="130" y="182" font-size="11" fill="#1e293b" text-anchor="middle">cash movement over period</text>

  <line x1="220" y1="80" x2="270" y2="155" stroke="#475569" stroke-width="1.5"/>
  <text x="240" y="125" font-size="10" fill="#475569">net income</text>

  <line x1="450" y1="170" x2="500" y2="100" stroke="#475569" stroke-width="1.5"/>
  <text x="470" y="135" font-size="10" fill="#475569">closing equity</text>

  <line x1="220" y1="170" x2="500" y2="100" stroke="#475569" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="360" y="225" font-size="10" fill="#475569" text-anchor="middle">Cash on the balance sheet matches closing cash on the cash flow statement.</text>
</svg>

<h2>The consolidated version</h2>

<p>These are the standard reports any company produces. When the company is a group with multiple subsidiaries, foreign currencies, or partial ownership, producing them takes several extra steps.</p>

<h2>Summary</h2>

<ul>
  <li>Four primary financial reports: the balance sheet (a snapshot), the income statement (a period's profit), the cash flow statement (a period's cash movement), and the statement of changes in equity (how equity moved).</li>
  <li>The four reports tie to each other: net income flows into equity; closing cash on the cash flow statement matches cash on the balance sheet; closing equity from the equity statement matches equity on the balance sheet.</li>
  <li>Consolidation produces these same four reports &mdash; just for the whole group rather than a single entity.</li>
</ul>

      <nav class="lesson-nav">
        <a href="1-3-cast-of-characters.html">&larr; 1.3 Ownership &amp; control</a>
        <div class="spacer"></div>
        <a href="1-5-workflow.html">1.5 The consolidation workflow &rarr;</a>
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

## Lesson 1.5 — The consolidation workflow

### Diagnosis

The lesson is mostly right. Specific problems:

1. **Step 1's second paragraph leaks Layer 2 mechanics.** The COA-mapping example ("Sub A's 1010 — Operating Cash and Sub B's C-100 — Cash on Hand") belongs in 2.1. Trim to a single sentence noting that mapping happens at ingest.

2. **Step 3 (Standardize)** has a course-y closer: *"Layer 2 covers when to use each."* Drop. The topside-entries paragraph also says too much for a Layer 1 step description; tighten to one sentence noting the dual injection point.

3. **Step 5 (Eliminate)** ends with *"Eliminations are recorded as journal entries at the consolidation layer, not in the entities' local books..."* — that's mechanics. Cut.

4. **"Data states across the workflow"** has *"We use these state names throughout the course — especially in Layer 2, where each lesson calls out which states it operates on."* The second half is course-y. Trim.

5. **"Why the order matters"** restates dependencies the per-step text already established. Five bullets that recap five steps. Cut the section entirely — failure mode "restating ideas you just covered."

6. **Developer callout** is currently 2 paragraphs + 4 bullets + a closing paragraph. Trim hard to one sentence + 2 bullets (your call from the prior message).

7. **Summary** has a course-y trailer (*"Layer 2 covers the mechanics of each step in detail"*) and is 6 bullets, two of which restate things already in the first two. Tighten to 4.

### Changes to apply

Replace `lessons/layer1/1-5-workflow.html` entirely with the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>The consolidation workflow — Consolidation Course</title>
<link rel="stylesheet" href="../../css/main.css">
</head>
<body>
<div class="app">
  <nav class="nav" id="nav" data-active="1-5-workflow.html" data-root="../../"></nav>
  <main class="main">
    <article class="content">
      <header class="content-header">
        <div class="content-eyebrow">Layer 1 — Lesson 5</div>
        <h1>The consolidation workflow</h1>
      </header>

<p><span class="term" data-term="consolidation">Consolidation</span> is a sequence of accounting work. The work can be done in a spreadsheet, in code, by hand, or with the help of an LLM &mdash; but the logical order is the same regardless of the tool, because each step depends on the ones before it.</p>

<p>This lesson gives the bird's-eye view of that work.</p>

<svg class="diagram" viewBox="0 0 620 790" xmlns="http://www.w3.org/2000/svg">
  <text x="180" y="22" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">STEP</text>
  <text x="510" y="22" font-size="13" font-weight="700" fill="#1e293b" text-anchor="middle">DATA STATE AFTER</text>

  <!-- Step 1 -->
  <rect x="40" y="40" width="280" height="60" fill="#bcd5f0" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="64" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">1</text>
  <text x="180" y="84" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Entities produce reports</text>
  <text x="510" y="76" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Local</text>

  <!-- Arrow 1->2 -->
  <line x1="180" y1="100" x2="180" y2="125" stroke="#475569" stroke-width="1.5"/>
  <polygon points="180,130 175,120 185,120" fill="#475569"/>

  <!-- Step 2 -->
  <rect x="40" y="135" width="280" height="60" fill="#c9def4" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="159" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">2</text>
  <text x="180" y="179" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Translate to common currency</text>
  <text x="510" y="171" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Translated</text>

  <!-- Arrow 2->3 -->
  <line x1="180" y1="195" x2="180" y2="220" stroke="#475569" stroke-width="1.5"/>
  <polygon points="180,225 175,215 185,215" fill="#475569"/>

  <!-- Step 3 -->
  <rect x="40" y="230" width="280" height="60" fill="#d0e2f7" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="254" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">3</text>
  <text x="180" y="274" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Standardize</text>
  <text x="510" y="266" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Standardized</text>

  <!-- Arrow 3->4 -->
  <line x1="180" y1="290" x2="180" y2="315" stroke="#475569" stroke-width="1.5"/>
  <polygon points="180,320 175,310 185,310" fill="#475569"/>

  <!-- Step 4 -->
  <rect x="40" y="325" width="280" height="60" fill="#d6e7f9" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="349" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">4</text>
  <text x="180" y="369" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Combine books</text>
  <text x="510" y="361" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Combined</text>

  <!-- Arrow 4->5 -->
  <line x1="180" y1="385" x2="180" y2="410" stroke="#475569" stroke-width="1.5"/>
  <polygon points="180,415 175,405 185,405" fill="#475569"/>

  <!-- Step 5 -->
  <rect x="40" y="420" width="280" height="60" fill="#dfecfa" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="444" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">5</text>
  <text x="180" y="464" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Eliminate intra-group activity</text>
  <text x="510" y="456" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Eliminated</text>

  <!-- Arrow 5->6 -->
  <line x1="180" y1="480" x2="180" y2="505" stroke="#475569" stroke-width="1.5"/>
  <polygon points="180,510 175,500 185,500" fill="#475569"/>

  <!-- Step 6 -->
  <rect x="40" y="515" width="280" height="60" fill="#e7f0fb" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="539" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">6</text>
  <text x="180" y="559" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Apply ownership</text>
  <text x="510" y="551" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Ownership-Adjusted</text>

  <!-- Arrow 6->7 -->
  <line x1="180" y1="575" x2="180" y2="600" stroke="#475569" stroke-width="1.5"/>
  <polygon points="180,605 175,595 185,595" fill="#475569"/>

  <!-- Step 7 -->
  <rect x="40" y="610" width="280" height="60" fill="#eff4fc" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="634" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">7</text>
  <text x="180" y="654" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Apply group adjustments</text>
  <text x="510" y="646" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Top</text>

  <!-- Arrow 7->8 -->
  <line x1="180" y1="670" x2="180" y2="695" stroke="#475569" stroke-width="1.5"/>
  <polygon points="180,700 175,690 185,690" fill="#475569"/>

  <!-- Step 8 -->
  <rect x="40" y="705" width="280" height="60" fill="#f6f9fd" stroke="#1e3a8a" stroke-width="1.5" rx="6"/>
  <text x="180" y="729" text-anchor="middle" font-size="11" font-weight="700" fill="#1e3a8a">8</text>
  <text x="180" y="749" text-anchor="middle" font-size="14" font-weight="700" fill="#1e3a8a">Report and lock</text>
  <text x="510" y="741" text-anchor="middle" font-size="13" font-style="italic" fill="#475569">Top (frozen)</text>
</svg>

<h2>1. Entities produce reports</h2>

<p>Each <span class="term" data-term="legal-entity">legal entity</span> in the <span class="term" data-term="group">group</span> closes its own books for the period and produces a <span class="term" data-term="trial-balance">trial balance</span> &mdash; in its local currency, using its own account codes, on its own schedule. This is normal single-entity accounting; nothing special about it for consolidation. At ingest each trial balance is mapped to the group's <span class="term" data-term="coa">chart of accounts</span>.</p>

<h2>2. Translate to common currency</h2>

<p>The trial balances arrive in different currencies. A French sub's books are in euros; a US group reports in dollars. Before the entities can be added together, each balance is translated at the appropriate <span class="term" data-term="fx">FX</span> rate.</p>

<h2>3. Standardize</h2>

<p>After translation, every entity's numbers are in the same currency and the same account structure. But there's still some preparation needed before the consolidation math (<span class="term" data-term="elimination">eliminations</span>, ownership) can run cleanly. Things like:</p>

<ul>
  <li><strong>Carry forward <span class="term" data-term="goodwill">goodwill</span> and acquisition baselines</strong> so the ownership step has what it needs.</li>
  <li><strong>Apply any pre-elimination adjustments</strong> that have to be reflected before <span class="term" data-term="intercompany">intercompany</span> matching runs.</li>
  <li><strong>Set up the reference data</strong> the next steps will use &mdash; entity <span class="term" data-term="ownership-percentage">ownership percentages</span>, intercompany pairings, elimination rules.</li>
</ul>

<p>Standardize is also the first of two points where <span class="term" data-term="topside">topside entries</span> can be posted. The second is step 7 (Apply group adjustments).</p>

<h2>4. Combine books</h2>

<p>This is the simplest step in the workflow: add the entities together. With every prepared trial balance using the same structure, the combined balance is a sum across entities, line by line.</p>

<p>The combined trial balance isn't yet a meaningful set of group results &mdash; it still contains all the internal activity between group companies, and it doesn't yet reflect who actually owns what. Those are the next two steps.</p>

<h2>5. Eliminate intra-group activity</h2>

<p>If Sub A sold $1,000 of goods to Sub B, the group as a whole didn't earn $1,000 &mdash; the money just moved from one pocket to another. Sub A's revenue and Sub B's expense both have to be removed. Same with the corresponding receivable and payable.</p>

<p>The common categories of intercompany activity that get eliminated:</p>

<ul>
  <li>Intercompany <span class="term" data-term="ar">AR</span> against intercompany <span class="term" data-term="ap">AP</span></li>
  <li>Intercompany revenue against the matching intercompany expense</li>
  <li>Intercompany loans</li>
  <li>Intercompany dividends</li>
  <li><span class="term" data-term="unrealized-profit">Unrealized profit</span> on intercompany <span class="term" data-term="inventory">inventory</span> still on hand at period end</li>
</ul>

<h2>6. Apply ownership</h2>

<p>This is the step that distinguishes consolidation from just adding companies together. The <span class="term" data-term="parent">parent</span> doesn't necessarily own 100% of every <span class="term" data-term="subsidiary">subsidiary</span>, and the parent's "Investment in Subsidiary" line represents the same economic stake as the sub's <span class="term" data-term="equity">equity</span> &mdash; one viewed from above, the other from below. Three things happen here:</p>

<ul>
  <li><strong>Eliminate the parent's investment against the sub's equity.</strong> If the parent paid more than the sub's <span class="term" data-term="book-value">book value</span> at acquisition, the difference becomes goodwill on the consolidated <span class="term" data-term="balance-sheet">balance sheet</span>.</li>
  <li><strong>Break out the outside shareholders' share</strong> as <span class="term" data-term="nci">non-controlling interest</span>, shown separately on both the balance sheet and the <span class="term" data-term="income-statement">income statement</span>.</li>
  <li><strong>Handle indirect ownership chains.</strong> If the parent owns 80% of Sub X, which owns 60% of Sub Y, the parent's effective ownership of Sub Y is 48% &mdash; and the ownership math has to reflect that.</li>
</ul>

<h2>7. Apply group adjustments</h2>

<p>With the mechanical work done, there's usually still a layer of judgement-driven adjustments to apply at the group level. These don't belong in any individual entity's books, but they have to be reflected in the consolidated reports. Common examples:</p>

<ul>
  <li><strong>Accounting policy alignment.</strong> A sub depreciates equipment over 5 years; group policy is 7 years. A group-level adjustment reconciles the two without forcing the sub to change its local books.</li>
  <li><strong>Local <span class="term" data-term="gaap">GAAP</span> to group GAAP differences.</strong> A foreign sub reports under local rules; the group reports under US GAAP or <span class="term" data-term="ifrs">IFRS</span>. The conversion happens here.</li>
  <li><strong>Reclassifications.</strong> Presenting a balance under a different line for group-reporting purposes.</li>
  <li><strong>Audit adjustments.</strong> Corrections identified during review.</li>
  <li><strong>Late accruals or estimates.</strong> Items recognized at the group level after subs have already closed.</li>
</ul>

<p>These are typically posted as topside entries &mdash; the second of the two topside injection points mentioned in step 3. Because they bypass the controls in subsidiary systems, they're a high-scrutiny area in audit.</p>

<h2>8. Report and lock</h2>

<p>With all the math and adjustments done, the consolidated trial balance is used to produce the reporting outputs:</p>

<ul>
  <li>The four primary statements (balance sheet, income statement, <span class="term" data-term="cash-flow-statement">cash flow statement</span>, statement of changes in equity)</li>
  <li>Supporting schedules &mdash; intercompany matrix, flux analysis, <span class="term" data-term="segment">segment</span> breakdowns</li>
  <li>Disclosure notes for external reporting</li>
</ul>

<p>Once reviewed and approved, the period is locked. A <span class="term" data-term="snapshot">snapshot</span> captures the reported figures exactly as published so they can't drift later. The closing balances then <span class="term" data-term="carryforward">carry forward</span> as the <span class="term" data-term="opening-balance">opening balances</span> of the next period &mdash; and the cycle begins again.</p>

<h2>Data states across the workflow</h2>

<p>The labels on the right of the diagram name the state the data is in after each step. The state names are referenced wherever a step is being discussed:</p>

<p><span class="term" data-term="data-state-local">Local</span> &rarr; <span class="term" data-term="data-state-translated">Translated</span> &rarr; <span class="term" data-term="data-state-standardized">Standardized</span> &rarr; <span class="term" data-term="data-state-eliminated">Eliminated</span> &rarr; <span class="term" data-term="data-state-ownership">Ownership-Adjusted</span> &rarr; <span class="term" data-term="data-state-top">Top</span></p>

<h2>Why this matters for the software</h2>

<div class="callout callout-dev">
  <div class="callout-title">For developers</div>
  <p>The data states are persistence boundaries between steps &mdash; they're how the engine knows where to resume from when an upstream input changes.</p>
  <ul style="margin-top: 8px;">
    <li>Each step's output should be a reproducible function of its input &mdash; no hidden state.</li>
    <li>Re-running a step should be idempotent and survive replays of earlier steps without wiping deliberate human inputs (topside entries).</li>
  </ul>
</div>

<h2>Summary</h2>

<ul>
  <li>Consolidation is a sequence of eight steps: entities produce reports, translate to common currency, standardize, combine, eliminate intra-group activity, apply ownership, apply group adjustments, and report &amp; lock.</li>
  <li>The order isn't optional &mdash; each step depends on the previous ones.</li>
  <li>Between steps, the data sits in named states: Local, Translated, Standardized, Eliminated, Ownership-Adjusted, Top.</li>
  <li>Topside entries can be posted at two distinct points &mdash; step 3 (which flows through eliminations and ownership) and step 7 (which doesn't).</li>
</ul>

      <nav class="lesson-nav">
        <a href="1-4-key-outputs.html">&larr; 1.4 Key outputs</a>
        <div class="spacer"></div>
        <a href="1-6-source-data.html">1.6 Source data &rarr;</a>
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

## Lesson 1.7 — Why Excel breaks at scale

### Diagnosis

1.7 is in good shape. One marketing-flavored sentence to neutralize, one transition line to fix, and a few small term-wrapping issues to confirm. No structural changes.

1. **Marketing-flavored line.** *"Every consolidation software product on the market exists because of these breaking points. Understanding them is understanding what the product we're building has to solve."* This is fine in spirit but reads like marketing voice. Rewrite to neutral.

2. **Transition out of the trajectory section.** The line *"This is the trajectory consolidation software is designed to interrupt"* is the same flavor. Replace with a neutral lead-in to the next section.

3. **Term-wrapping check:** the existing lesson wraps `intercompany` in section 4 but the term has already been used (untagged) in the lead and earlier in the lesson. Tightened version below makes the first mention the wrapped one.

No other changes. Sample table flow, the 6-gap structure, the "breaking point isn't a hard line" trigger list, and the summary are all good as-is.

### Changes to apply

Replace `lessons/layer1/1-7-why-excel-breaks.html` entirely with the following:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Why Excel breaks at scale — Consolidation Course</title>
<link rel="stylesheet" href="../../css/main.css">
</head>
<body>
<div class="app">
  <nav class="nav" id="nav" data-active="1-7-why-excel-breaks.html" data-root="../../"></nav>
  <main class="main">
    <article class="content">
      <header class="content-header">
        <div class="content-eyebrow">Layer 1 — Lesson 7</div>
        <h1>Why Excel breaks at scale</h1>
      </header>

<p>Many companies start out doing <span class="term" data-term="consolidation">consolidation</span> in Excel. For a small <span class="term" data-term="group">group</span> &mdash; say, two or three <span class="term" data-term="subsidiary">subsidiaries</span>, one currency, simple ownership &mdash; Excel works fine. It's flexible, everyone knows how to use it, and the formulas are easy to write.</p>

<p>But as the group grows, Excel-based consolidation breaks in predictable ways. The gaps below are what dedicated consolidation systems are built to address.</p>

<h2>How a typical Excel consolidation grows</h2>

<p>Year 1: one workbook. A tab per subsidiary, a <span class="term" data-term="mapping">mapping</span> tab, an <span class="term" data-term="elimination">eliminations</span> tab, an output tab. A finance person spends two days each month assembling it.</p>

<p>Year 3: the company acquired three more subsidiaries, opened a European office, and entered a <span class="term" data-term="joint-venture">joint venture</span>. Now the workbook has 30 tabs. The two-day <span class="term" data-term="close">close</span> has become a five-day close. One spreadsheet wizard knows where all the formulas point.</p>

<p>Year 5: the company has 25 subsidiaries across 12 countries. There are now several workbooks linked together. The close takes 10 working days. The spreadsheet wizard has left the company. The new controller spends evenings tracing why one number changed.</p>

<p>Each growing pain in that arc maps to a specific limitation of the spreadsheet.</p>

<h2>What Excel lacks</h2>

<h3>1. Stable formula references</h3>

<p>Excel formulas point at cell addresses. When someone inserts a row, deletes a column, sorts a sheet, or renames a tab, those references can shift to the wrong place &mdash; sometimes loudly (with a #REF! error), sometimes silently (the formula still calculates, but on the wrong cells).</p>

<p>Silent breakage is the dangerous kind. The consolidated numbers might be off by thousands or millions, and no one notices until the auditor finds it.</p>

<h3>2. An audit trail</h3>

<p>Excel records the current state of every cell &mdash; but not who changed it, when, or what it used to be. If someone overrode a number on Tuesday and then changed it again on Thursday, there's no trace.</p>

<p>The closest Excel gets to an <span class="term" data-term="audit-trail">audit trail</span> is "track changes" &mdash; but it's not designed for the volume or complexity of consolidation, and it can be turned off.</p>

<p>For a public company subject to <span class="term" data-term="sec">SEC</span> reporting, this is a serious compliance gap. <span class="term" data-term="sox">Sarbanes-Oxley</span> requires demonstrable internal controls over financial reporting.</p>

<h3>3. Version control</h3>

<p>If two people open the same workbook from a shared drive, the last one to save wins &mdash; and the other person's changes are gone. "ConsolidationFinal_v3_REAL.xlsx" sitting next to "ConsolidationFinal_v3_REAL_FINAL.xlsx" is a familiar sight.</p>

<h3>4. Automated intercompany matching</h3>

<p>In Excel, <span class="term" data-term="intercompany">intercompany</span> matching is typically done by pasting both subs' IC balances into a sheet and eyeballing whether they match. With 5 subs, that's 10 pairs to check. With 25 subs, it's 300 pairs &mdash; impossible to do by hand.</p>

<p>Even with formulas to flag mismatches, the resolution work (figuring out <em>why</em> a balance doesn't match) is still manual: pulling backup documentation from each side, comparing transaction lists, reconciling timing differences.</p>

<h3>5. Built-in FX handling</h3>

<p>Manual currency translation in Excel involves applying different rate types to different account categories, computing <span class="term" data-term="cta">CTA</span> as a balancing item, and re-applying rates whenever the rates themselves change.</p>

<p>It's doable for one or two foreign subs. It becomes a maintenance burden for many, and every time a controller adjusts a rate after the fact, every dependent number has to be recomputed by hand.</p>

<h3>6. A structure that outlives the original builder</h3>

<p>The "spreadsheet wizard" problem. Over years, a workbook accumulates conventions, hacks, hidden tabs, and undocumented formulas that only the person who built it understands. When that person leaves, the workbook becomes a liability instead of an asset.</p>

<p>This isn't a technical problem &mdash; it's an organizational one. But it's the most common reason companies finally commit to a real consolidation system.</p>

<h2>The Excel breaking point isn't a hard line</h2>

<p>A two-entity group with one currency and no intercompany activity might never need a system. Many small businesses consolidate in Excel forever and have no problems.</p>

<p>The breaking point is when one or more of these is true:</p>

<ul>
  <li>5+ subsidiaries</li>
  <li>2+ currencies</li>
  <li>Material intercompany activity</li>
  <li>Public reporting requirements</li>
  <li>Acquisition or divestiture activity</li>
  <li>More than one person involved in the close</li>
  <li>A monthly close that takes more than a few days</li>
</ul>

<h2>Summary</h2>

<ul>
  <li>Excel works for small consolidations but breaks predictably as groups grow.</li>
  <li>The gaps include unstable formula references, no audit trail, no version control, no concurrency, manual intercompany matching, awkward <span class="term" data-term="fx">FX</span> handling, and concentration of knowledge in one builder.</li>
  <li>Each gap corresponds to a capability that consolidation software is designed to provide.</li>
</ul>

      <nav class="lesson-nav">
        <a href="1-6-source-data.html">&larr; 1.6 Source data</a>
        <div class="spacer"></div>
        <a href="../layer2/2-1-coa-mapping.html">2.1 Chart of accounts &amp; mapping &rarr;</a>
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

## Append to `STYLE_NOTES.md`

```markdown
## 2026-05-26 — Layer 1 polish (1.4, 1.5, 1.7)

**What changed:**
- 1.4: removed all post-table narration of journal-entry mechanics ("$5M credit minus $4.5M debit...", "debit Income Summary to clear it...") and the T-account paragraph after the cash flow table. Kept Debit/Credit columns on sample tables (intentional decision — better to surface debit/credit conventions early). Removed course-y closer naming forward lessons by number.
- 1.5: trimmed step 1 paragraph 2 (COA-mapping example was leaking 2.1 material); trimmed topside-entries paragraph in step 3; cut the journal-entry-mechanics sentence from step 5; cut "Why the order matters" entirely (recapped what the per-step text already said); trimmed developer callout from ~150 words to one sentence + two bullets; tightened the summary.
- 1.7: rewrote two marketing-flavored sentences ("Every consolidation software product on the market exists..." and "This is the trajectory consolidation software is designed to interrupt") to neutral; fixed term-wrapping so first appearances are the tagged ones.

**Why it was wrong:**
- *1.4 narration*: tables already showed the numbers; the post-table prose re-stated them in bookkeeping language ("$5M credit minus...") that doesn't help a non-accountant reader understand what the report is. The T-account paragraph specifically narrated a visual device — exactly the failure mode the project instructions call out.
- *1.5 "Why the order matters"*: five bullets restating dependencies already established in the per-step descriptions. Restating ideas the reader just covered is bloat regardless of how the recap is framed.
- *1.5 developer callout (original)*: two paragraphs of preamble + four bullets + closing paragraph for what amounts to "data states are persistence boundaries; steps should be idempotent." The bulk was scaffolding around two real points.
- *1.7 marketing voice*: "exists because of these breaking points" / "the product we're building has to solve" / "the trajectory consolidation software is designed to interrupt" — three sentences within five paragraphs that all carry product-pitch flavor in an otherwise neutral lesson.

**Rules this reinforces:**
- Tables show; prose around them should not re-state the table's contents in different words.
- Layer 1 step descriptions describe; they do not start teaching mechanics (journal-entry posting, account-code mapping examples, sign conventions). Mechanics belong in Layer 2.
- A summary section that recaps a sequence of preceding step descriptions is almost always redundant. The per-step text is itself the summary; a second pass is bloat.
- Layer 1 developer callouts, when included, surface a single real implementation point — not a list of generic engineering principles. If the callout's bullets read as obvious to anyone who'd qualify to work on the engine, the callout is bloat.
- Keep voice neutral and explanatory. Sentences that read like marketing copy ("the product we're building has to solve," "designed to interrupt") get rewritten even when the underlying point is correct.
```

---

## Instructions for Claude Code

Apply the changes verbatim:

1. Replace `lessons/layer1/1-4-key-outputs.html` with the HTML in the 1.4 section.
2. Replace `lessons/layer1/1-5-workflow.html` with the HTML in the 1.5 section.
3. Replace `lessons/layer1/1-7-why-excel-breaks.html` with the HTML in the 1.7 section.
4. Append the entry above to `STYLE_NOTES.md` at the repo root (create the file if it doesn't exist).

**Do not rewrite any prose.** Do not "improve" wording, restructure paragraphs, add bullets, change punctuation, or rename terms. Paste the content as written.

After applying, open `lessons/layer1/1-4-key-outputs.html`, `lessons/layer1/1-5-workflow.html`, and `lessons/layer1/1-7-why-excel-breaks.html` in a browser to confirm:
- All `data-term` references resolve to existing glossary entries (no new entries should be needed; flag if any term is missing).
- The 1.5 workflow SVG renders identically to before (it was preserved unchanged).
- The 1.4 "how they fit together" SVG renders identically to before (preserved unchanged).
- Lesson-nav links at the bottom of each lesson still point to the correct prev/next.

Commit message suggestion:
```
Layer 1 polish: tighten 1.4, 1.5, 1.7

- 1.4: drop post-table journal-entry narration and T-account paragraph; keep
  Debit/Credit columns on sample tables (intentional); drop course-y closer.
- 1.5: trim step 1 mapping example; trim step 3 topside paragraph; drop
  JE-mechanics sentence in step 5; remove "Why the order matters" (redundant);
  trim developer callout hard; tighten summary.
- 1.7: rewrite marketing-flavored sentences to neutral voice; fix term-wrap
  ordering for intercompany.
- Added STYLE_NOTES.md entry recording the patterns.
```
