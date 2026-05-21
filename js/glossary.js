// Wait for both glossary data and DOM
(function() {
  function init() {
    if (typeof GLOSSARY === 'undefined') {
      setTimeout(init, 50);
      return;
    }
    setupGlossaryClicks();
    showInitialGlossary();
  }

  function setupGlossaryClicks() {
    const terms = document.querySelectorAll('.term');
    terms.forEach(t => {
      t.addEventListener('click', function(e) {
        e.preventDefault();
        const key = this.getAttribute('data-term');
        showGlossary(key);
      });
    });
  }

  function showInitialGlossary() {
    const panel = document.getElementById('glossary-panel');
    if (!panel) return;
    panel.innerHTML = `
      <div class="glossary-empty">
        <div class="glossary-empty-icon">📖</div>
        <div><strong>Glossary</strong></div>
        <div style="margin-top: 6px; font-size: 13px;">
          Click any <span style="color: var(--color-term); border-bottom: 1px dotted; padding: 0 2px;">highlighted term</span>
          in the lesson to see its definition here.
        </div>
      </div>
    `;
  }

  function showGlossary(key) {
    const panel = document.getElementById('glossary-panel');
    if (!panel) return;
    const entry = GLOSSARY[key];
    if (!entry) {
      panel.innerHTML = `<div class="glossary-empty"><div>Term not found: ${key}</div></div>`;
      return;
    }

    let html = `
      <button class="glossary-close" onclick="window.GlossaryAPI.clear()">← back</button>
      <div class="glossary-entry">
        <div class="glossary-term-header">Glossary</div>
        <div class="glossary-term">${entry.term}</div>
    `;
    if (entry.acronym) {
      html += `<div class="glossary-acronym">${entry.acronym}</div>`;
    }
    html += `<div class="glossary-body">${entry.body}</div></div>`;
    panel.innerHTML = html;
    panel.scrollTop = 0;
  }

  window.GlossaryAPI = {
    show: showGlossary,
    clear: showInitialGlossary
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
