// Navigation injector. Path prefix is determined by the data-root attribute on the nav element.
(function() {
  const NAV = {
    layers: [
      {
        label: 'Layer 1 — Purpose & Concepts',
        lessons: [
          { num: '1.1', title: 'What is financial consolidation?', file: 'lessons/layer1/1-1-what-is-consolidation.html' },
          { num: '1.2', title: 'Why companies consolidate', file: 'lessons/layer1/1-2-why-consolidate.html' },
          { num: '1.3', title: 'The cast of characters', file: 'lessons/layer1/1-3-cast-of-characters.html' },
          { num: '1.4', title: 'The consolidation workflow', file: 'lessons/layer1/1-4-workflow.html' },
          { num: '1.5', title: 'Key outputs', file: 'lessons/layer1/1-5-key-outputs.html' },
          { num: '1.6', title: 'Why Excel breaks', file: 'lessons/layer1/1-6-why-excel-breaks.html' },
          { num: '1.7', title: 'Data states through the pipeline', file: 'lessons/layer1/1-7-data-states.html' }
        ]
      },
      {
        label: 'Layer 2 — Mechanics',
        lessons: [
          { num: '2.1', title: 'Chart of accounts & mapping', file: 'lessons/layer2/2-1-coa-mapping.html' },
          { num: '2.2', title: 'Trial balance collection', file: 'lessons/layer2/2-2-trial-balance.html' },
          { num: '2.3', title: 'Carryforward & opening balances', file: 'lessons/layer2/2-3-carryforward.html' },
          { num: '2.4', title: 'Currency translation & CTA', file: 'lessons/layer2/2-4-currency-translation.html' },
          { num: '2.5', title: 'Ownership & consolidation methods', file: 'lessons/layer2/2-5-ownership.html' },
          { num: '2.6', title: 'Intercompany eliminations', file: 'lessons/layer2/2-6-intercompany.html' },
          { num: '2.7', title: 'Investment elimination & goodwill', file: 'lessons/layer2/2-7-investment-elimination.html' },
          { num: '2.8', title: 'Non-controlling interest', file: 'lessons/layer2/2-8-nci.html' },
          { num: '2.9', title: 'Unrealized profit elimination', file: 'lessons/layer2/2-9-unrealized-profit.html' },
          { num: '2.10', title: 'Equity rollforward & RE', file: 'lessons/layer2/2-10-equity-rollforward.html' },
          { num: '2.11', title: 'Adjustments & topside entries', file: 'lessons/layer2/2-11-topside-entries.html' },
          { num: '2.12', title: 'Cash flow consolidation', file: 'lessons/layer2/2-12-cash-flow.html' },
          { num: '2.13', title: 'Reporting & disclosures', file: 'lessons/layer2/2-13-reporting-disclosures.html' }
        ]
      }
    ]
  };

  function build(activeFile, root) {
    let html = `
      <div class="nav-title">Consolidation Course</div>
      <div class="nav-subtitle">Developer onboarding curriculum</div>
      <div class="nav-layer">
        <div class="nav-layer-header"><a href="${root}index.html" style="color: inherit; text-decoration: none;">← Home</a></div>
      </div>
    `;

    NAV.layers.forEach(layer => {
      html += `<div class="nav-layer"><div class="nav-layer-header">${layer.label}</div><ul class="nav-list">`;
      layer.lessons.forEach(lesson => {
        const isActive = activeFile && lesson.file.endsWith(activeFile);
        html += `<li><a href="${root}${lesson.file}" class="${isActive ? 'active' : ''}">
          <span class="nav-check"></span><span class="nav-num">${lesson.num}</span>${lesson.title}
        </a></li>`;
      });
      html += '</ul></div>';
    });

    return html;
  }

  function inject() {
    const navEl = document.getElementById('nav');
    if (!navEl) return;
    const activeFile = navEl.getAttribute('data-active') || '';
    const root = navEl.getAttribute('data-root') || '';
    navEl.innerHTML = build(activeFile, root);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
