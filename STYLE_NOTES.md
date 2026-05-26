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
