// Glossary panel: opens entries when a `.term` is clicked anywhere on the page
// (including inside the glossary panel itself, to support cross-references), and
// keeps a back stack so "← back" walks through the chain of viewed entries.
(function() {
  let backStack = [];
  let currentKey = null;

  function init() {
    if (typeof GLOSSARY === 'undefined') {
      setTimeout(init, 50);
      return;
    }
    setupGlossaryClicks();
    showInitialGlossary();
  }

  function setupGlossaryClicks() {
    document.addEventListener('click', function(e) {
      const term = e.target.closest('.term');
      if (!term) return;
      e.preventDefault();
      showGlossary(term.getAttribute('data-term'));
    });
  }

  function showInitialGlossary() {
    backStack = [];
    currentKey = null;
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

  function renderEntry(key) {
    const panel = document.getElementById('glossary-panel');
    if (!panel) return;
    const entry = GLOSSARY[key];
    if (!entry) {
      panel.innerHTML = `<div class="glossary-empty"><div>Term not found: ${key}</div></div>`;
      return;
    }

    let html = `
      <button class="glossary-close" onclick="window.GlossaryAPI.back()">← back</button>
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

  function showGlossary(key) {
    if (!key || key === currentKey) return;
    if (currentKey) backStack.push(currentKey);
    currentKey = key;
    renderEntry(key);
  }

  function goBack() {
    if (backStack.length === 0) {
      showInitialGlossary();
      return;
    }
    currentKey = backStack.pop();
    renderEntry(currentKey);
  }

  window.GlossaryAPI = {
    show: showGlossary,
    back: goBack,
    clear: showInitialGlossary
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
