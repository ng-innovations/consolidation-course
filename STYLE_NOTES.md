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
