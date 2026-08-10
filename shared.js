(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const homeProgress = document.querySelector('[data-home-progress]');
  if (homeProgress) {
    const responses = Object.keys(localStorage).filter(k => /^rivburger:m\d+-/.test(k) && (localStorage.getItem(k)||'').trim().length >= 20).length;
    const checked = Array.from({length:10},(_,i) => localStorage.getItem(`rivburger:module:${i+1}:check`)).filter(Boolean).length;
    const activities = new Set(Object.keys(localStorage).filter(k => k.startsWith('rivburger:activity:') && (localStorage.getItem(k)||'').trim().length >= 20).map(k => k.match(/:a(\d+)-/)?.[1]).filter(Boolean)).size;
    const pct = Math.min(100, Math.round(((responses + checked + activities) / 40) * 100));
    homeProgress.textContent = `${pct}%`;
    document.querySelector('[data-home-progress-bar]').style.width = `${pct}%`;
  }
})();
