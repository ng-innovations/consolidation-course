// Per-lesson completion: a Mark Complete button on the lesson page and a
// green check beside the lesson number in the sidebar. State is kept in
// localStorage keyed by lesson number ("1.1", "2.13", ...).
(function() {
  const STORAGE_PREFIX = 'lesson-complete:';

  function lessonNumFromFile(file) {
    if (!file) return null;
    const base = file.split('/').pop();
    const m = base.match(/^(\d+)-(\d+)-/);
    return m ? m[1] + '.' + m[2] : null;
  }

  function isComplete(num) {
    return localStorage.getItem(STORAGE_PREFIX + num) === 'true';
  }

  function setComplete(num, value) {
    if (value) {
      localStorage.setItem(STORAGE_PREFIX + num, 'true');
    } else {
      localStorage.removeItem(STORAGE_PREFIX + num);
    }
  }

  function decorateNav() {
    document.querySelectorAll('.nav-list li a').forEach(link => {
      const numEl = link.querySelector('.nav-num');
      const checkEl = link.querySelector('.nav-check');
      if (!numEl || !checkEl) return;
      const num = numEl.textContent.trim();
      checkEl.textContent = isComplete(num) ? '✓' : '';
    });
  }

  function injectButton() {
    const navEl = document.getElementById('nav');
    if (!navEl) return;
    const num = lessonNumFromFile(navEl.getAttribute('data-active') || '');
    if (!num) return;

    const article = document.querySelector('article.content');
    if (!article) return;

    const wrapper = document.createElement('div');
    wrapper.className = 'lesson-complete';
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lesson-complete-btn';
    wrapper.appendChild(btn);

    function update() {
      const done = isComplete(num);
      btn.textContent = done ? '✓ Mark Incomplete' : 'Mark Complete';
      btn.classList.toggle('is-complete', done);
    }

    btn.addEventListener('click', () => {
      setComplete(num, !isComplete(num));
      update();
      decorateNav();
    });

    update();
    const lessonNav = article.querySelector('.lesson-nav');
    if (lessonNav) {
      article.insertBefore(wrapper, lessonNav);
    } else {
      article.appendChild(wrapper);
    }
  }

  function init() {
    injectButton();
    decorateNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
