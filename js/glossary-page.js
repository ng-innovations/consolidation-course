// Monolith glossary page: renders every GLOSSARY entry on one page, grouped
// alphabetically, with an A–Z jump bar. Only included on reference/glossary.html.
(function() {
  function init() {
    if (typeof GLOSSARY === 'undefined') {
      setTimeout(init, 50);
      return;
    }
    const mount = document.getElementById('glossary-all');
    if (!mount) return;

    const entries = Object.keys(GLOSSARY).map(function(key) {
      const e = GLOSSARY[key];
      return { key: key, term: e.term || key, acronym: e.acronym || '', body: e.body || '' };
    });
    entries.sort(function(a, b) {
      return a.term.toLowerCase().localeCompare(b.term.toLowerCase());
    });

    // Group by first alphabetic character (digits/symbols bucket under "#").
    const groups = {};
    const order = [];
    entries.forEach(function(e) {
      let letter = e.term.trim().charAt(0).toUpperCase();
      if (!/[A-Z]/.test(letter)) letter = '#';
      if (!groups[letter]) { groups[letter] = []; order.push(letter); }
      groups[letter].push(e);
    });

    // A–Z jump bar.
    let az = '<nav class="glossary-az" aria-label="Jump to letter">';
    order.forEach(function(letter) {
      az += '<a href="#letter-' + letter + '">' + letter + '</a>';
    });
    az += '</nav>';

    let html = az;
    order.forEach(function(letter) {
      html += '<h2 class="glossary-letter" id="letter-' + letter + '">' + letter + '</h2>';
      groups[letter].forEach(function(e) {
        html += '<div class="glossary-page-entry" id="' + e.key + '">';
        html += '<h3>' + e.term;
        if (e.acronym) html += ' <span class="glossary-page-acronym">' + e.acronym + '</span>';
        html += '</h3>';
        html += e.body;
        html += '</div>';
      });
    });

    mount.innerHTML = html;
    mount.insertAdjacentHTML('beforeend',
      '<p class="glossary-count">' + entries.length + ' terms.</p>');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
