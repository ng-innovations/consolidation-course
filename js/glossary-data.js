// Glossary entries. Each key matches the data-term attribute used in lessons.
// Entries can include: term, acronym, body (HTML).
const GLOSSARY = {

  // ============ FOUNDATIONAL ACCOUNTING TERMS ============

  'legal-entity': {
    term: 'Legal Entity',
    body: `
      <p>A <strong>legal entity</strong> is a company, partnership, or other organization that the law recognizes as a separate "person" — it can own property, sign contracts, owe taxes, and be sued.</p>
      <p>Every legal entity keeps its own set of books. When a parent company owns several subsidiaries, each subsidiary is a legal entity with its own accounting records, even though the parent controls them all.</p>
      <div class="example-box">
        <strong>Example:</strong> "Acme Holdings Inc." is one legal entity. Its subsidiary "Acme Europe GmbH" is another. They are two different legal "people" in the eyes of the law, but for financial reporting they get combined.
      </div>
    `
  },

  'reporting-entity': {
    term: 'Reporting Entity',
    body: `
      <p>A <strong>reporting entity</strong> is the unit of organization for which we produce a financial report. It might be a single legal entity, or it might be a group of legal entities combined together.</p>
      <p>The whole point of consolidation is that the <em>reporting entity</em> (the whole group) is bigger than any single <em>legal entity</em> (one subsidiary).</p>
    `
  },

  'parent': {
    term: 'Parent Company',
    body: `
      <p>The company that controls one or more other companies. Control usually means owning more than 50% of the voting shares.</p>
      <p>The parent is the top of the group hierarchy. It's the entity that produces the consolidated financial statements.</p>
    `
  },

  'subsidiary': {
    term: 'Subsidiary',
    body: `
      <p>A company controlled by another company (the parent). "Controlled" typically means the parent owns more than 50% of the voting shares.</p>
      <p>A subsidiary keeps its own books as a separate <span class="term" data-term="legal-entity">legal entity</span>, but when the parent reports its financials, the subsidiary gets fully included in the consolidated numbers.</p>
      <div class="example-box">
        <strong>Example:</strong> If Acme Inc. owns 80% of Beta Corp, then Beta Corp is Acme's subsidiary. All of Beta's revenue, expenses, assets, and liabilities show up in Acme's consolidated reports.
      </div>
    `
  },

  'group': {
    term: 'Group',
    body: `
      <p>The <strong>group</strong> means the parent and all its subsidiaries treated together as one economic unit.</p>
      <p>From a legal standpoint, the group is several separate companies. From a reporting standpoint, the group is one thing — and the consolidated financial statements describe that one thing.</p>
    `
  },

  'gaap': {
    term: 'GAAP',
    acronym: 'Generally Accepted Accounting Principles',
    body: `
      <p>The accounting rulebook used in the United States. It's set by the <span class="term" data-term="fasb">FASB</span> (Financial Accounting Standards Board).</p>
      <p>GAAP tells companies how to recognize revenue, when to record expenses, how to value assets, and crucially for our purposes — how to consolidate financial statements.</p>
      <p>US public companies are required to follow GAAP. Most other countries use <span class="term" data-term="ifrs">IFRS</span> instead.</p>
    `
  },

  'ifrs': {
    term: 'IFRS',
    acronym: 'International Financial Reporting Standards',
    body: `
      <p>The accounting rulebook used in most of the world outside the US. Set by the <strong>IASB</strong> (International Accounting Standards Board).</p>
      <p>IFRS and <span class="term" data-term="gaap">GAAP</span> have a lot in common but differ in specific rules — for example, how to account for leases, inventory, and certain consolidation situations.</p>
      <p>Large multinational companies often need to produce statements under both frameworks.</p>
    `
  },

  'sec': {
    term: 'SEC',
    acronym: 'Securities and Exchange Commission',
    body: `
      <p>The US government agency that regulates publicly traded companies. The SEC requires public companies to file consolidated financial statements regularly (annually on Form 10-K, quarterly on Form 10-Q).</p>
      <p>One of the main drivers behind why consolidation has to be accurate: the SEC is one of the people reading the result.</p>
    `
  },

  'sox': {
    term: 'Sarbanes-Oxley Act',
    acronym: 'SOX',
    body: `
      <p>A US federal law passed in 2002, after the Enron and WorldCom accounting scandals, that tightened the rules around financial reporting at public companies.</p>
      <p>For consolidation, the parts that matter most:</p>
      <ul>
        <li>The CEO and CFO have to personally sign off on the consolidated financial statements and certify they are accurate. If the numbers are wrong, that's on them — personally.</li>
        <li>Companies have to document and test the internal controls behind those numbers. "We trust the spreadsheet" is not an acceptable answer.</li>
        <li>External auditors have to independently audit those controls, not just the final numbers.</li>
      </ul>
      <p>For software building the consolidation pipeline, SOX is why every calculation needs an <span class="term" data-term="audit-trail">audit trail</span>, every change needs to be attributable, and every period needs to be reproducible long after it closes.</p>
    `
  },

  'auditor': {
    term: 'Auditor',
    body: `
      <p>An independent accountant — usually from an outside firm — hired to examine a company's financial statements and confirm they are accurate, complete, and prepared in line with the relevant accounting rules (<span class="term" data-term="gaap">GAAP</span> or <span class="term" data-term="ifrs">IFRS</span>).</p>
      <p>The result of the work is an <strong>audit opinion</strong> attached to the statements. A "clean" (unqualified) opinion tells outside readers the numbers can be trusted; anything else is a warning sign.</p>
      <p>For consolidation, auditors check that:</p>
      <ul>
        <li>Each subsidiary's underlying numbers are accurate.</li>
        <li>The consolidation calculations — translation, elimination, ownership adjustments — were done correctly.</li>
        <li>The company can show <em>how</em> it got from subsidiary books to the consolidated total. This is why <span class="term" data-term="audit-trail">audit trails</span> matter.</li>
      </ul>
      <p>Public-company audits in the US are required by law and regulated under the <span class="term" data-term="sox">Sarbanes-Oxley Act</span>. The big audit firms (PwC, Deloitte, EY, KPMG — collectively the "Big Four") handle most of these engagements.</p>
    `
  },

  'financial-statements': {
    term: 'Financial Statements',
    body: `
      <p>The standard set of reports that summarize a company's finances. There are four main ones:</p>
      <ul>
        <li><strong>Balance Sheet</strong> — what the company owns and owes at a point in time</li>
        <li><strong>Income Statement</strong> — revenue, expenses, and profit over a period</li>
        <li><strong>Cash Flow Statement</strong> — how cash moved in and out over a period</li>
        <li><strong>Statement of Changes in Equity</strong> — how the equity section changed over a period</li>
      </ul>
      <p>Consolidation produces all four for the group as a whole.</p>
    `
  },

  'balance-sheet': {
    term: 'Balance Sheet',
    body: `
      <p>A snapshot of what a company owns and owes at a single point in time (usually the last day of a month, quarter, or year).</p>
      <p>It has three sections: <strong>Assets</strong> (what the company owns), <strong>Liabilities</strong> (what it owes), and <strong>Equity</strong> (the owners' stake). The fundamental equation:</p>
      <p style="text-align: center; font-family: var(--font-mono); padding: 8px; background: white; border: 1px solid var(--color-border); border-radius: 4px;">
        Assets = Liabilities + Equity
      </p>
      <p>This equation always holds. If the books don't balance, something is wrong.</p>
    `
  },

  'income-statement': {
    term: 'Income Statement',
    body: `
      <p>Also called the <strong>P&L</strong> (Profit and Loss statement). It shows revenue earned and expenses incurred over a period of time, ending with net income (profit) or net loss.</p>
      <p>While the <span class="term" data-term="balance-sheet">balance sheet</span> is a snapshot, the income statement is a movie — it covers a span like "Q1 2025" or "the year ended December 31, 2024."</p>
    `
  },

  'cash-flow-statement': {
    term: 'Cash Flow Statement',
    body: `
      <p>A report showing the actual cash that came in and went out during a period, broken into three categories:</p>
      <ul>
        <li><strong>Operating</strong> — cash from the main business</li>
        <li><strong>Investing</strong> — cash spent on or received from buying/selling long-term assets</li>
        <li><strong>Financing</strong> — cash from borrowing, repaying debt, issuing shares, paying dividends</li>
      </ul>
      <p>Profit and cash aren't the same. A company can be profitable but cash-poor, or vice versa. The cash flow statement bridges that gap.</p>
    `
  },

  'equity': {
    term: 'Equity',
    body: `
      <p>The owners' stake in a company — what would be left over for shareholders if all the assets were sold and all the debts paid off.</p>
      <p>Equity has several components, but the main ones are:</p>
      <ul>
        <li><strong>Share capital</strong> — the money owners originally put in</li>
        <li><strong>Retained earnings</strong> — accumulated profits the company has kept (not paid out as dividends)</li>
        <li><strong>Other comprehensive income</strong> — certain gains and losses that bypass the income statement</li>
      </ul>
    `
  },

  'retained-earnings': {
    term: 'Retained Earnings',
    acronym: 'RE',
    body: `
      <p>The total profits a company has earned over its life, minus any dividends paid out to shareholders. It's the "savings account" of accumulated profit on the <span class="term" data-term="balance-sheet">balance sheet</span>.</p>
      <div class="example-box">
        <strong>Example:</strong> A company earns $100 in profit this year. If it pays $30 in dividends and keeps $70, retained earnings goes up by $70.
      </div>
      <p>At the end of each period, net income (or loss) gets moved from the <span class="term" data-term="income-statement">income statement</span> into retained earnings. This is called the "P&L close" or "closing entry."</p>
    `
  },

  'oci': {
    term: 'Other Comprehensive Income',
    acronym: 'OCI',
    body: `
      <p>Certain gains and losses that, by accounting rules, don't go through net income but still belong in equity. The most common items in OCI are:</p>
      <ul>
        <li><strong>Foreign currency translation adjustments</strong> (CTA) — see <span class="term" data-term="cta">CTA</span></li>
        <li><strong>Unrealized gains/losses on certain investments</strong></li>
        <li><strong>Pension actuarial gains/losses</strong></li>
      </ul>
      <p>OCI exists because some changes in value are real but not yet realized — for instance, an exchange rate moves and changes the dollar value of a foreign subsidiary's net worth, but no actual transaction has happened. It would be misleading to put that in profit, so it goes in OCI.</p>
    `
  },

  'assets': {
    term: 'Assets',
    body: `
      <p>Things a company owns or has rights to that have economic value. Common asset categories:</p>
      <ul>
        <li><strong>Cash</strong> and <strong>cash equivalents</strong></li>
        <li><strong>Accounts receivable</strong> — money customers owe</li>
        <li><strong>Inventory</strong> — products held for sale</li>
        <li><strong>Property, plant, and equipment (PP&E)</strong> — buildings, machinery, etc.</li>
        <li><strong>Intangibles</strong> — patents, trademarks, goodwill</li>
      </ul>
      <p>Assets are split into <strong>current</strong> (will be used or converted to cash within a year) and <strong>non-current</strong> (longer term).</p>
    `
  },

  'liabilities': {
    term: 'Liabilities',
    body: `
      <p>Amounts a company owes to others. Common categories:</p>
      <ul>
        <li><strong>Accounts payable</strong> — bills owed to suppliers</li>
        <li><strong>Loans and debt</strong> — money borrowed from banks or bondholders</li>
        <li><strong>Accrued expenses</strong> — costs incurred but not yet paid</li>
        <li><strong>Taxes payable</strong></li>
      </ul>
      <p>Like assets, liabilities split into <strong>current</strong> (due within a year) and <strong>non-current</strong>.</p>
    `
  },

  'ar': {
    term: 'Accounts Receivable',
    acronym: 'AR',
    body: `
      <p>Money that customers owe the company for goods or services already delivered but not yet paid for. It's an <span class="term" data-term="assets">asset</span> on the <span class="term" data-term="balance-sheet">balance sheet</span>.</p>
      <div class="example-box">
        <strong>Example:</strong> You ship $10,000 of product to a customer with payment due in 30 days. Until they pay, that $10,000 sits in Accounts Receivable.
      </div>
    `
  },

  'ap': {
    term: 'Accounts Payable',
    acronym: 'AP',
    body: `
      <p>Money the company owes to suppliers for goods or services received but not yet paid for. It's a <span class="term" data-term="liabilities">liability</span> on the <span class="term" data-term="balance-sheet">balance sheet</span>.</p>
      <p>AR and AP are mirror images. If Company X sells to Company Y on credit, X has AR and Y has AP for the same amount.</p>
    `
  },

  'counterparty': {
    term: 'Counterparty',
    body: `
      <p>The other party in a transaction or contract. If your company sells goods to a customer, the customer is the counterparty on that sale; if you borrow money from a bank, the bank is the counterparty on that loan.</p>
      <p>In consolidation, the term is useful because it lets you classify a transaction by <em>who</em> the other side is:</p>
      <ul>
        <li>If the counterparty is another entity in the same <span class="term" data-term="group">group</span>, the transaction is <span class="term" data-term="intercompany">intercompany</span> and must be eliminated.</li>
        <li>If the counterparty is outside the group, the transaction stays in the consolidated results.</li>
      </ul>
      <p>"Counterparty risk" is the risk that the other party fails to pay or perform — and the group view is what tells you the total exposure to any one counterparty across all subsidiaries.</p>
    `
  },

  'cogs': {
    term: 'Cost of Goods Sold',
    acronym: 'COGS',
    body: `
      <p>The direct cost of producing the goods or services that were sold during a period. It's the largest expense category for most product companies.</p>
      <div class="example-box">
        <strong>Example:</strong> A retailer buys a shirt for $20 and sells it for $50. When they sell it, $50 goes into revenue and $20 goes into COGS. The $30 difference is gross profit.
      </div>
    `
  },

  'inventory': {
    term: 'Inventory',
    body: `
      <p>Goods a company holds for the purpose of selling them — either finished products, work-in-progress, or raw materials waiting to be turned into products.</p>
      <p>Inventory is an <span class="term" data-term="assets">asset</span> on the <span class="term" data-term="balance-sheet">balance sheet</span>. When sold, it moves out of inventory and the cost shows up as <span class="term" data-term="cogs">COGS</span> on the <span class="term" data-term="income-statement">income statement</span>.</p>
    `
  },

  'debit-credit': {
    term: 'Debit and Credit',
    body: `
      <p>The two sides of any accounting entry. Every transaction has equal debits and credits — that's how the books stay in balance.</p>
      <p>Whether something is recorded as a debit or credit depends on the account type:</p>
      <table style="font-size: 13px;">
        <tr><th>Account type</th><th>Debit means</th><th>Credit means</th></tr>
        <tr><td>Assets</td><td>Increase</td><td>Decrease</td></tr>
        <tr><td>Liabilities</td><td>Decrease</td><td>Increase</td></tr>
        <tr><td>Equity</td><td>Decrease</td><td>Increase</td></tr>
        <tr><td>Revenue</td><td>Decrease</td><td>Increase</td></tr>
        <tr><td>Expense</td><td>Increase</td><td>Decrease</td></tr>
      </table>
      <p>Just remember: every entry has at least one debit and one credit, and they must add up to the same total. "Debit" and "credit" don't mean good or bad — they're just left side and right side.</p>
    `
  },

  'journal-entry': {
    term: 'Journal Entry',
    acronym: 'JE',
    body: `
      <p>A record of a single transaction in the accounting system. Every journal entry has:</p>
      <ul>
        <li>A date</li>
        <li>One or more accounts being <span class="term" data-term="debit-credit">debited</span></li>
        <li>One or more accounts being <span class="term" data-term="debit-credit">credited</span></li>
        <li>Equal totals (debits = credits)</li>
        <li>Usually a description</li>
      </ul>
      <div class="example-box">
        <strong>Example:</strong> A customer pays a $1,000 invoice in cash.<br><br>
        DR Cash $1,000<br>
        CR Accounts Receivable $1,000
      </div>
      <p>In consolidation, we use journal entries to record all our adjustments — eliminations, FX adjustments, topside entries — they're all just JEs.</p>
    `
  },

  'gl': {
    term: 'General Ledger',
    acronym: 'GL',
    body: `
      <p>The master record of all accounting transactions for a company, organized by account. Every <span class="term" data-term="journal-entry">journal entry</span> ends up in the general ledger.</p>
      <p>When we "pull data from the GL" for consolidation, we're extracting all the account balances from a subsidiary's accounting system to feed into the consolidation process.</p>
    `
  },

  'trial-balance': {
    term: 'Trial Balance',
    acronym: 'TB',
    body: `
      <p>A list of every account in the <span class="term" data-term="gl">general ledger</span> with its current balance. If the bookkeeping is correct, total debits should equal total credits.</p>
      <p>The trial balance is the standard input to consolidation. Each subsidiary submits its trial balance for the period, and the consolidation process combines them all.</p>
      <p>Accounts are conventionally grouped: assets and expenses normally carry debit balances; liabilities, equity, and revenue normally carry credit balances.</p>
      <div class="example-box">
        <strong>Sample TB — Acme Industrials, year-end (USD):</strong>
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
      <p>Notice that debits equal credits — that's the defining property of a trial balance.</p>
    `
  },

  'coa': {
    term: 'Chart of Accounts',
    acronym: 'COA',
    body: `
      <p>The list of all accounts a company uses to record transactions. Each account has a number (or code) and a name.</p>
      <p>Different subsidiaries usually have different charts of accounts — especially if they were acquired separately, run different software, or operate in different countries. Consolidation has to <strong>map</strong> all those local charts to one unified <em>group chart of accounts</em>.</p>
      <div class="example-box">
        <strong>Example:</strong><br>
        Sub A might call it "1010 — Operating Cash"<br>
        Sub B might call it "10100 — Cash in Bank"<br>
        Both map to group account "1000 — Cash"
      </div>
    `
  },

  'fiscal-period': {
    term: 'Fiscal Period',
    body: `
      <p>The chunk of time that a financial report covers. The most common periods are:</p>
      <ul>
        <li><strong>Month</strong> — for internal management reporting</li>
        <li><strong>Quarter</strong> — for public company reporting</li>
        <li><strong>Year (fiscal year)</strong> — for annual reports and tax</li>
      </ul>
      <p>A company's <strong>fiscal year</strong> doesn't have to match the calendar year. Some companies have fiscal years ending June 30, January 31, etc. All subsidiaries in a group usually use the same fiscal calendar.</p>
    `
  },

  'close': {
    term: 'Close (the close)',
    body: `
      <p>"Closing the books" means finishing all the accounting work for a period — recording every transaction, reconciling accounts, making adjustments — and producing final financial statements.</p>
      <p>"The close" refers to the entire process and timeline. A typical close calendar:</p>
      <ul>
        <li><strong>Day 1–3:</strong> Subsidiaries finalize local books</li>
        <li><strong>Day 4–6:</strong> Submit trial balances to corporate</li>
        <li><strong>Day 7–10:</strong> Corporate runs consolidation, reviews, adjusts</li>
        <li><strong>Day 11–15:</strong> Final reports, executive review, lock</li>
      </ul>
      <p>"Fast close" is a constant goal — every day saved is a day sooner the company has information to act on.</p>
    `
  },

  // ============ CONSOLIDATION-SPECIFIC TERMS ============

  'consolidation': {
    term: 'Consolidation',
    body: `
      <p>The accounting process of combining the financial statements of a <span class="term" data-term="parent">parent company</span> and its <span class="term" data-term="subsidiary">subsidiaries</span> into a single set of statements that represents the whole <span class="term" data-term="group">group</span> as if it were one economic unit.</p>
      <p>The output: consolidated financial statements that show the group's combined assets, liabilities, revenue, and expenses — with all internal transactions between group companies removed.</p>
    `
  },

  'consolidated-statements': {
    term: 'Consolidated Financial Statements',
    body: `
      <p>The end product of the consolidation process: <span class="term" data-term="financial-statements">financial statements</span> for the whole group, not just one legal entity.</p>
      <p>Consolidated statements look exactly like single-company statements — balance sheet, income statement, cash flow, equity changes — but they describe the combined activity of the parent plus all subsidiaries, minus internal transactions.</p>
    `
  },

  'control': {
    term: 'Control',
    body: `
      <p>In consolidation accounting, "control" means having the power to direct the activities of another company. Under both <span class="term" data-term="gaap">GAAP</span> and <span class="term" data-term="ifrs">IFRS</span>, control is what triggers <em>full consolidation</em>.</p>
      <p>The most common form of control is owning more than 50% of voting shares, but there are other ways control can be established.</p>
      <p>If you control a company, you must consolidate it fully. If you have influence but not control, you use the <span class="term" data-term="equity-method">equity method</span> instead.</p>
    `
  },

  'true-and-fair': {
    term: 'True and Fair View',
    body: `
      <p>A core principle in financial reporting (especially under <span class="term" data-term="ifrs">IFRS</span>): the financial statements should give a "true and fair view" of the company's financial position.</p>
      <p>This is why consolidation exists. Looking at the parent's standalone books alone wouldn't be "true and fair" — it would hide all the activity happening in subsidiaries. You need the consolidated view to see the real economic picture.</p>
    `
  },

  'ownership-percentage': {
    term: 'Ownership Percentage',
    body: `
      <p>The portion of a subsidiary that the parent owns, usually expressed as the percentage of voting shares.</p>
      <p>Ownership percentage drives how the subsidiary is accounted for:</p>
      <table style="font-size: 13px;">
        <tr><th>Ownership %</th><th>Treatment</th></tr>
        <tr><td>More than 50%</td><td>Full consolidation</td></tr>
        <tr><td>20% to 50%</td><td>Equity method</td></tr>
        <tr><td>Less than 20%</td><td>Cost or fair value</td></tr>
      </table>
      <p>These thresholds are guidelines — actual treatment depends on whether the parent has <span class="term" data-term="control">control</span> or just influence.</p>
    `
  },

  'associate': {
    term: 'Associate',
    body: `
      <p>A company in which the investor has <em>significant influence</em> but not <span class="term" data-term="control">control</span> — typically a 20%–50% ownership stake.</p>
      <p><strong>Naming gotcha:</strong> "associate" refers to the <em>held</em> company (the investee), not the holder. The investor isn't called the associate; the company it has significant influence over is.</p>
      <svg class="glossary-svg" viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="20" width="240" height="50" fill="#f0f9ff" stroke="#0284c7" stroke-width="1.5" rx="4"/>
        <text x="160" y="42" text-anchor="middle" font-size="13" font-weight="700" fill="#0c4a6e">Investor company</text>
        <text x="160" y="58" text-anchor="middle" font-size="11" fill="#475569">(e.g., the parent)</text>

        <line x1="160" y1="72" x2="160" y2="132" stroke="#1e3a8a" stroke-width="1.5"/>
        <polygon points="160,138 154,128 166,128" fill="#1e3a8a"/>
        <text x="170" y="106" font-size="11" font-weight="600" fill="#1e3a8a">owns 20–50%</text>

        <rect x="40" y="140" width="240" height="55" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2" rx="4"/>
        <text x="160" y="162" text-anchor="middle" font-size="13" font-weight="700" fill="#1e3a8a">Investee</text>
        <text x="160" y="180" text-anchor="middle" font-size="12" font-weight="700" fill="#1d4ed8">= the "Associate"</text>
      </svg>
      <p>Associates are not fully consolidated. Instead, they're accounted for using the <span class="term" data-term="equity-method">equity method</span>: the investor records its share of the associate's profit each period, but doesn't combine all the line-by-line activity.</p>
    `
  },

  'joint-venture': {
    term: 'Joint Venture',
    acronym: 'JV',
    body: `
      <p>An arrangement where two or more parties jointly control a separate business. Typical setup: two companies each own 50% and share decision-making.</p>
      <p>Under <span class="term" data-term="ifrs">IFRS</span>, joint ventures are accounted for using the <span class="term" data-term="equity-method">equity method</span> (just like associates).</p>
      <p>Some older guidance allowed <span class="term" data-term="proportional-consolidation">proportional consolidation</span> — combining your share of each line — but this is rare today.</p>
    `
  },

  'nci': {
    term: 'Non-Controlling Interest',
    acronym: 'NCI (also called Minority Interest)',
    body: `
      <p>The portion of a subsidiary that the parent does <em>not</em> own. If the parent owns 80% of a subsidiary, the other 20% is the non-controlling interest.</p>
      <p>When we consolidate, we include <strong>100%</strong> of the subsidiary's assets, liabilities, revenue, and expenses — because the parent controls all of it. But we have to acknowledge that some of the equity and net income belongs to other shareholders. That's where NCI comes in.</p>
      <p>On the consolidated <span class="term" data-term="balance-sheet">balance sheet</span>, NCI is shown as a separate line within equity. On the <span class="term" data-term="income-statement">income statement</span>, the bottom is split into "Net income attributable to parent" and "Net income attributable to NCI."</p>
      <svg class="glossary-svg" viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg">
        <text x="160" y="20" text-anchor="middle" font-size="13" font-weight="700" fill="#1e3a8a">Subsidiary Equity = $1,000</text>
        <rect x="40" y="40" width="240" height="60" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.5"/>
        <rect x="40" y="40" width="192" height="60" fill="#3b82f6"/>
        <text x="136" y="75" text-anchor="middle" font-size="14" font-weight="600" fill="white">Parent share (80%) = $800</text>
        <text x="256" y="68" text-anchor="middle" font-size="11" font-weight="600" fill="#1e3a8a">NCI (20%)</text>
        <text x="256" y="82" text-anchor="middle" font-size="11" font-weight="600" fill="#1e3a8a">= $200</text>
        <text x="160" y="135" text-anchor="middle" font-size="11" fill="#374151">On the consolidated balance sheet:</text>
        <text x="160" y="153" text-anchor="middle" font-size="11" font-family="monospace" fill="#1f2937">Equity attributable to parent: $800</text>
        <text x="160" y="170" text-anchor="middle" font-size="11" font-family="monospace" fill="#1f2937">NCI: $200</text>
      </svg>
    `
  },

  'vie': {
    term: 'Variable Interest Entity',
    acronym: 'VIE',
    body: `
      <p>A <span class="term" data-term="gaap">US GAAP</span> concept: a legal entity where control doesn't come from owning voting shares but from other contractual or economic arrangements.</p>
      <p>Example: a special-purpose vehicle set up to hold certain assets, where one company effectively controls it through guarantees, lease agreements, or other rights — even without owning shares.</p>
      <p>If a company is the "primary beneficiary" of a VIE, it must consolidate it just like a regular subsidiary, even with 0% ownership.</p>
      <p>IFRS handles the same situations through a broader definition of <span class="term" data-term="control">control</span>.</p>
    `
  },

  'full-consolidation': {
    term: 'Full Consolidation',
    body: `
      <p>The treatment applied when the parent has <span class="term" data-term="control">control</span> over a subsidiary (typically more than 50% ownership).</p>
      <p>Under full consolidation:</p>
      <ul>
        <li>100% of the subsidiary's assets and liabilities are added to the group</li>
        <li>100% of the subsidiary's revenue and expenses are added</li>
        <li>The portion that doesn't belong to the parent is shown as <span class="term" data-term="nci">NCI</span></li>
        <li>The parent's investment in the subsidiary is eliminated against the subsidiary's equity</li>
        <li>All internal transactions between group companies are eliminated</li>
      </ul>
    `
  },

  'equity-method': {
    term: 'Equity Method',
    body: `
      <p>The accounting treatment used when the investor has <em>significant influence</em> but not control — typically a 20% to 50% stake in an <span class="term" data-term="associate">associate</span> or <span class="term" data-term="joint-venture">joint venture</span>.</p>
      <p>Under the equity method:</p>
      <ul>
        <li>The investment is recorded at cost initially</li>
        <li>Each period, the investor recognizes its share of the investee's profit (or loss) — this increases (or decreases) the investment's carrying value</li>
        <li>Dividends received reduce the investment's value (because they're a return of value already recognized)</li>
      </ul>
      <p>The investee's line-by-line numbers (revenue, expenses, etc.) are <strong>not</strong> combined into the investor's statements — only a single share-of-profit line shows up.</p>
    `
  },

  'cost-method': {
    term: 'Cost Method (Fair Value Method)',
    body: `
      <p>The treatment for small ownership stakes (typically under 20%) where the investor has no significant influence.</p>
      <p>The investment is recorded at cost and only adjusted when:</p>
      <ul>
        <li>Dividends are received (recorded as income)</li>
        <li>The investment is sold</li>
        <li>The value drops permanently (impairment)</li>
      </ul>
      <p>Under modern <span class="term" data-term="ifrs">IFRS</span> and <span class="term" data-term="gaap">GAAP</span>, most of these small investments are now marked to fair value at each reporting date instead.</p>
    `
  },

  'proportional-consolidation': {
    term: 'Proportional Consolidation',
    body: `
      <p>An older method of accounting for <span class="term" data-term="joint-venture">joint ventures</span>. The investor pulls its <em>share</em> of each line item — its share of cash, revenue, expense, and so on — into its own consolidated statements. So a 50/50 JV partner would pick up 50% of every line of the venture.</p>
      <p>It sits between the two other consolidation methods:</p>
      <ul>
        <li><span class="term" data-term="full-consolidation">Full consolidation</span> brings in 100% of each line, with the slice you don't own tracked separately as <span class="term" data-term="nci">non-controlling interest</span>.</li>
        <li>The <span class="term" data-term="equity-method">equity method</span> collapses your entire stake into a single line on the balance sheet and a single line on the income statement.</li>
        <li>Proportional consolidation sits in between: your % of every line, fully visible but scaled down.</li>
      </ul>
      <p>Modern <span class="term" data-term="ifrs">IFRS</span> (IFRS 11, effective 2013) eliminated proportional consolidation for joint ventures — all JVs now use the equity method. <span class="term" data-term="gaap">US GAAP</span> never broadly permitted it for general JVs either, although similar treatment still appears in narrow industries (e.g., undivided interests in oil-and-gas operations).</p>
      <p>You'll still see proportional consolidation mentioned in older statements and textbooks. For new consolidations, treat it as a historical footnote rather than something you'd build for.</p>
    `
  },

  'ma': {
    term: 'M&A',
    acronym: 'Mergers and Acquisitions',
    body: `
      <p>The catch-all term for deals where one company buys, sells, or combines with another. The "acquisition" half is the common case: one company (the <strong>acquirer</strong>) buys a controlling stake in another (the <strong>target</strong>) and the target becomes a <span class="term" data-term="subsidiary">subsidiary</span>. The "merger" half is two companies combining into one new legal entity, which is much rarer in practice.</p>
      <p>M&A is where consolidation gets interesting:</p>
      <ul>
        <li>The acquirer needs to combine the target into its group statements going forward.</li>
        <li>The price paid above the target's net asset value becomes <span class="term" data-term="goodwill">goodwill</span> on the consolidated balance sheet.</li>
        <li>If the acquirer didn't buy 100%, the leftover slice is tracked as <span class="term" data-term="nci">non-controlling interest</span>.</li>
      </ul>
      <p>Before a deal closes, both sides — and their advisors — pore over the target's consolidated statements to value the business and negotiate the price.</p>
    `
  },

  'goodwill': {
    term: 'Goodwill',
    body: `
      <p>The amount paid for a company above the fair value of its identifiable net assets. It's an intangible asset that represents things like brand value, customer relationships, workforce, and synergies — items that contribute to the price but aren't separately listed on the balance sheet.</p>
      <div class="example-box">
        <strong>Example:</strong> Parent buys 100% of Sub for $1,000. Sub's net assets (assets minus liabilities) are worth $800 at fair value. Goodwill = $1,000 − $800 = $200.
      </div>
      <p>Goodwill arises during business combinations. It's not amortized but is tested for impairment at least annually.</p>
    `
  },

  'fair-value': {
    term: 'Fair Value',
    body: `
      <p>The price you'd get if you sold an asset in an orderly transaction between willing parties at the measurement date. It's the market price, or a reasonable estimate of one.</p>
      <p>Fair value matters in consolidation because when one company acquires another, the acquired company's assets and liabilities get re-measured at fair value as part of the acquisition accounting — not kept at their old book values.</p>
    `
  },

  'depreciation': {
    term: 'Depreciation',
    body: `
      <p>The way an asset's cost is spread across the years it's used, rather than being expensed all at once when it's bought.</p>
      <div class="example-box">
        <strong>Example:</strong> A $50,000 truck expected to last 5 years gets expensed at $10,000 per year. Each year, $10,000 hits the income statement as "depreciation expense" and the truck's recorded value on the balance sheet drops by $10,000. After 3 years, the truck is at $20,000 on the books even though the cash was spent up front.
      </div>
      <p>The cumulative amount that's been depreciated so far is called <strong>accumulated depreciation</strong>. The idea is to match the cost of using an asset to the periods that benefit from it, instead of having one giant expense in the year of purchase.</p>
      <p>Land typically isn't depreciated (it doesn't wear out). Intangible assets get a parallel treatment called <em>amortization</em>.</p>
    `
  },

  'impairment': {
    term: 'Impairment',
    body: `
      <p>A one-off reduction in an asset's recorded value, made when something has happened that means the asset is no longer worth what it's currently shown as on the books. Triggered by specific events — damage, equipment becoming outdated, a subsidiary's earnings collapsing, a market downturn.</p>
      <p>Compared to <span class="term" data-term="depreciation">depreciation</span>:</p>
      <ul>
        <li>Depreciation is <em>scheduled</em> — a predictable amount each period over the asset's useful life.</li>
        <li>Impairment is <em>event-driven</em> — recognized when something specific has gone wrong and the recorded value no longer reflects reality.</li>
      </ul>
      <p>Under <span class="term" data-term="gaap">US GAAP</span>, once an asset has been impaired its recorded value generally can't be raised again later, even if conditions improve.</p>
    `
  },

  'book-value': {
    term: 'Book Value (Carrying Value)',
    body: `
      <p>The value of an asset (or company) as recorded on the books, after subtracting things like <span class="term" data-term="depreciation">depreciation</span> and <span class="term" data-term="impairment">impairment</span>.</p>
      <p>At the asset level this is more often called the <strong>carrying value</strong> (or <strong>carrying amount</strong>) — for example, "the carrying value of the investment in Acme Industrials is $5,000."</p>
      <p>Book value often differs from <span class="term" data-term="fair-value">fair value</span>. A building bought 20 years ago for $1 million might be on the books at $400,000 (after depreciation) but be worth $3 million today.</p>
    `
  },

  'intercompany': {
    term: 'Intercompany',
    acronym: 'IC',
    body: `
      <p>Transactions, balances, or relationships <em>between</em> companies in the same <span class="term" data-term="group">group</span>.</p>
      <p>Examples of intercompany activity:</p>
      <ul>
        <li>One subsidiary sells products to another subsidiary</li>
        <li>The parent lends money to a subsidiary</li>
        <li>A subsidiary pays dividends to the parent</li>
        <li>One subsidiary owes another subsidiary for shared services</li>
      </ul>
      <p>Within each company's own books, these look like normal transactions. But from the group's perspective, the group is just moving money between its own pockets — these can't be counted as group revenue or expenses. That's why we <span class="term" data-term="elimination">eliminate</span> them in consolidation.</p>
    `
  },

  'elimination': {
    term: 'Elimination',
    body: `
      <p>A consolidation adjustment that removes a transaction or balance that exists between group companies, so it doesn't show up in the consolidated statements.</p>
      <p>Common eliminations:</p>
      <ul>
        <li><span class="term" data-term="intercompany">Intercompany</span> AR vs. AP</li>
        <li>Intercompany revenue vs. expense</li>
        <li>Intercompany loans vs. loans payable</li>
        <li>Parent's investment vs. subsidiary's equity</li>
      </ul>
      <p>Eliminations are usually booked as journal entries at the consolidation level — not in any individual legal entity's books. That keeps the local books accurate while still producing a clean group view.</p>
    `
  },

  'topside': {
    term: 'Topside Entry',
    body: `
      <p>A <span class="term" data-term="journal-entry">journal entry</span> made at the consolidation level — "on top of" the subsidiary submissions — to record an adjustment that doesn't belong in any one subsidiary's books.</p>
      <p>Common reasons for topside entries:</p>
      <ul>
        <li>Group-level reclassifications</li>
        <li>Bridging differences between local GAAP and group GAAP</li>
        <li>Recording goodwill amortization or impairment</li>
        <li>Audit adjustments discovered during the close</li>
        <li>Eliminations themselves</li>
      </ul>
    `
  },

  'fx': {
    term: 'FX (Foreign Exchange)',
    body: `
      <p>Shorthand for foreign currency and exchange rates. When a group has subsidiaries operating in different currencies, FX matters at every step of consolidation.</p>
      <p>A <span class="term" data-term="subsidiary">subsidiary</span> in Germany keeps its books in euros. To roll it up to a US parent, all the euro numbers have to be <em>translated</em> to US dollars. The rules for how to do that — which exchange rate to use for which account — make up the FX translation process.</p>
    `
  },

  'functional-currency': {
    term: 'Functional Currency',
    body: `
      <p>The main currency of the economic environment a company operates in. It's usually the currency the company earns and spends in.</p>
      <p>A French subsidiary's functional currency is normally the euro. A Japanese subsidiary's is the yen.</p>
      <p>Functional currency is determined per <span class="term" data-term="legal-entity">legal entity</span> based on its operations — not by where the parent is located.</p>
    `
  },

  'presentation-currency': {
    term: 'Presentation Currency (Reporting Currency)',
    body: `
      <p>The currency the consolidated financial statements are presented in. For a US group, it's usually US dollars. For a German group, euros.</p>
      <p>Subsidiaries can have any <span class="term" data-term="functional-currency">functional currency</span> — but they all get translated into the presentation currency for the consolidated reports.</p>
    `
  },

  'cta': {
    term: 'Cumulative Translation Adjustment',
    acronym: 'CTA',
    body: `
      <p>The balancing item that arises when you translate a foreign subsidiary's books into the group's presentation currency.</p>
      <p>Here's why CTA exists: different line items get translated at different exchange rates. <span class="term" data-term="balance-sheet">Balance sheet</span> items (assets, liabilities) use the closing rate. <span class="term" data-term="income-statement">Income statement</span> items use the average rate. Equity uses historical rates.</p>
      <p>Since the rates don't match exactly, the translated numbers don't balance perfectly. The difference goes into CTA, which is reported within <span class="term" data-term="oci">OCI</span> / equity.</p>
      <div class="example-box">
        <strong>Conceptually:</strong> CTA captures the fact that exchange rates have moved, changing the dollar value of the foreign subsidiary even though nothing happened in the foreign business itself. It's a "real" effect, but not a profit/loss — so it sits in equity instead of the P&L.
      </div>
    `
  },

  'closing-rate': {
    term: 'Closing Rate',
    body: `
      <p>The exchange rate on the last day of the reporting period. Used to translate <span class="term" data-term="balance-sheet">balance sheet</span> items (assets and liabilities) when consolidating a foreign subsidiary.</p>
      <p>Also called the "spot rate at period end" or "period-end rate."</p>
    `
  },

  'average-rate': {
    term: 'Average Rate',
    body: `
      <p>The average exchange rate over a reporting period (often a simple average of daily rates, or a weighted average). Used to translate <span class="term" data-term="income-statement">income statement</span> items because revenue and expenses happen continuously, not just at period end.</p>
    `
  },

  'historical-rate': {
    term: 'Historical Rate',
    body: `
      <p>The exchange rate that was in effect at the time of a specific past transaction. Used to translate equity contributions (so a $100 investment doesn't change value just because the exchange rate moved).</p>
    `
  },

  'investment-elimination': {
    term: 'Investment Elimination',
    body: `
      <p>The consolidation entry that removes the parent's investment in a subsidiary against the subsidiary's equity.</p>
      <p>Why this is needed: on the parent's standalone books, there's an asset called "Investment in Subsidiary." On the subsidiary's books, there's equity (share capital + retained earnings). When you consolidate, you're saying "the group is one thing" — so the parent can't be both holding an investment <em>and</em> reporting the subsidiary's underlying assets and liabilities. You have to pick one. The investment line gets eliminated; the underlying assets and liabilities stay.</p>
      <p>If the parent paid more than the subsidiary's book equity, the excess becomes <span class="term" data-term="goodwill">goodwill</span>.</p>
    `
  },

  'unrealized-profit': {
    term: 'Unrealized Profit',
    body: `
      <p>Profit that has been recorded in one group company's books, but the underlying goods haven't actually been sold to an external party yet.</p>
      <div class="example-box">
        <strong>Example:</strong> Sub A makes a widget for $60 and sells it to Sub B for $100. Sub A recognizes $40 of profit. But Sub B still has the widget sitting in <span class="term" data-term="inventory">inventory</span> — it hasn't been sold to a customer. From the group's perspective, no profit has actually been earned; the widget just moved from one warehouse to another.
      </div>
      <p>That $40 of "profit" is <strong>unrealized</strong> — it has to be eliminated in consolidation until the widget is actually sold outside the group.</p>
    `
  },

  'opening-balance': {
    term: 'Opening Balance',
    body: `
      <p>The balance in an account at the start of a period — which is also the closing balance from the prior period.</p>
      <p>For <span class="term" data-term="balance-sheet">balance sheet</span> accounts, the opening balance carries forward from the prior period. For <span class="term" data-term="income-statement">income statement</span> accounts, the opening balance is always zero (revenue and expenses reset each period).</p>
      <p>Carryforward validation is a key step in consolidation: making sure this period's opening balances match last period's closing balances.</p>
    `
  },

  'reconciliation': {
    term: 'Reconciliation',
    body: `
      <p>The process of comparing two sets of records that should agree and explaining any differences.</p>
      <p>In consolidation, the most important reconciliation is the <strong>intercompany reconciliation</strong>: if Sub A says it's owed $1,000 by Sub B, then Sub B should say it owes Sub A $1,000. When they don't match, it has to be investigated and resolved.</p>
    `
  },

  'segment': {
    term: 'Segment',
    body: `
      <p>In the consolidation context, a "segment" is one of the dimensions used to classify a transaction — entity, department, location, product line, etc.</p>
      <p>A single transaction usually carries multiple segment values. For example: <em>Entity = Sub A, Department = Sales, Location = Berlin, Product = Widget-X</em>. Each segment becomes a way to slice and report the data later.</p>
    `
  },

  'mapping': {
    term: 'Mapping',
    body: `
      <p>The configuration that translates values from a subsidiary's local system into the group's standard values.</p>
      <p>The most common mapping is the <span class="term" data-term="coa">chart of accounts</span> mapping: "Sub A's account 1010 maps to group account 1000." But mapping also applies to other <span class="term" data-term="segment">segments</span> — departments, locations, etc.</p>
    `
  },

  'lock-period': {
    term: 'Lock (Period Lock)',
    body: `
      <p>Marking a closed period as "locked" so its data can no longer be changed. Once a period is locked, the consolidated statements for that period are final.</p>
      <p>Locking is critical for audit trail, regulatory filings, and avoiding "moving target" problems where someone updates a number after reports have been distributed. Most consolidation systems support an "authorized unlock" for special situations, with logging.</p>
    `
  },

  'snapshot': {
    term: 'Snapshot',
    body: `
      <p>A frozen copy of all the data for a period at the moment of <span class="term" data-term="lock-period">lock</span>. Even if underlying source data changes later, the snapshot preserves exactly what the consolidated reports were based on.</p>
      <p>This is essential for audit: an auditor needs to be able to see <em>exactly</em> what numbers were used to produce the financial statements that were filed.</p>
    `
  },

  'audit-trail': {
    term: 'Audit Trail',
    body: `
      <p>A complete record of every transaction, adjustment, and change — including who did it, when, and why.</p>
      <p>For consolidation specifically, an audit trail means being able to trace every number on a consolidated report back to its sources: this $100 of consolidated revenue came from $40 in Sub A, $80 in Sub B, minus $20 of intercompany elimination. Auditors will test this.</p>
    `
  },

  'fasb': {
    term: 'FASB',
    acronym: 'Financial Accounting Standards Board',
    body: `
      <p>The independent organization that sets <span class="term" data-term="gaap">US GAAP</span>. Their standards are called ASCs (Accounting Standards Codifications).</p>
    `
  },

  'iasb': {
    term: 'IASB',
    acronym: 'International Accounting Standards Board',
    body: `
      <p>The independent organization that sets <span class="term" data-term="ifrs">IFRS</span>. Their standards are called IFRSs and IASs.</p>
    `
  },

  'carryforward': {
    term: 'Carryforward',
    body: `
      <p>The process of rolling closing balances from one period into the opening balances of the next period.</p>
      <p>For <span class="term" data-term="balance-sheet">balance sheet</span> accounts: closing balance of Period N becomes opening balance of Period N+1.</p>
      <p>For <span class="term" data-term="income-statement">income statement</span> accounts: at year-end, the net total is closed into <span class="term" data-term="retained-earnings">retained earnings</span>, and the income statement accounts reset to zero for the new year.</p>
    `
  },

  // ============ PIPELINE / DATA STATE TERMS ============

  'data-state-local': {
    term: 'Local (data state)',
    body: `
      <p>The state of subsidiary data <em>before</em> any consolidation processing. Each subsidiary has submitted its trial balance in its own functional currency, using its own local chart of accounts.</p>
      <p>This is the raw input to consolidation. The data is real and balanced — it's just not yet in a form that can be combined across the group.</p>
    `
  },

  'data-state-translated': {
    term: 'Translated (data state)',
    body: `
      <p>The state of data <em>after</em> currency translation. All subsidiary balances have been converted from their <span class="term" data-term="functional-currency">functional currencies</span> to the group's <span class="term" data-term="presentation-currency">presentation currency</span>, and <span class="term" data-term="cta">CTA</span> has been computed.</p>
      <p>The data is still per-subsidiary at this point — no combining or elimination yet. But all the numbers are now in the same currency, so they <em>can</em> be added together meaningfully.</p>
    `
  },

  'data-state-standardized': {
    term: 'Standardized (data state)',
    body: `
      <p>The state after group-level adjustments have been applied. This includes <span class="term" data-term="topside">topside entries</span>, GAAP-to-IFRS bridges, fair value adjustments at acquisition, and goodwill recognition.</p>
      <p>The data now reflects the group's accounting policies — not just the sum of local books — but still hasn't had intercompany or ownership adjustments applied.</p>
    `
  },

  'data-state-eliminated': {
    term: 'Eliminated (data state)',
    body: `
      <p>The state after intercompany <span class="term" data-term="elimination">eliminations</span> have been applied. AR between group companies has been netted against AP, intercompany revenue against intercompany expense, intercompany loans removed, etc.</p>
      <p>The data now represents the group's transactions with the outside world only.</p>
    `
  },

  'data-state-ownership': {
    term: 'Ownership-Adjusted (data state)',
    body: `
      <p>The state after applying ownership math: investment elimination, <span class="term" data-term="nci">NCI</span> calculation, and allocation of net income between parent and NCI.</p>
      <p>At this point, the data fully reflects what belongs to the parent shareholders vs. what belongs to other shareholders.</p>
    `
  },

  'data-state-top': {
    term: 'Top (data state)',
    body: `
      <p>The final state of consolidated data, ready for reporting. All adjustments are complete; final group-level topside entries have been posted; the consolidated trial balance balances.</p>
      <p>This is what gets reported externally and frozen in the period <span class="term" data-term="snapshot">snapshot</span>.</p>
    `
  },

  'xbrl': {
    term: 'XBRL',
    acronym: 'eXtensible Business Reporting Language',
    body: `
      <p>A structured data format for financial reporting. Public companies in many jurisdictions are required to file financial statements in XBRL alongside human-readable PDFs.</p>
      <p>Each number in an XBRL-tagged report is associated with a standard taxonomy element (e.g., <code>us-gaap:Revenues</code>) so that regulators and analysts can compare numbers across companies programmatically.</p>
      <p>For a consolidation product, XBRL output is one of several export formats — typically generated from the same underlying data as the human-readable statements, with a mapping layer between internal account codes and the XBRL taxonomy.</p>
    `
  }

};
