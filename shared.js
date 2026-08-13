(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }
  if (nav && ![...nav.querySelectorAll('a')].some(link => link.textContent.trim() === 'Busy Work')) {
    const busyWork = document.createElement('a');
    busyWork.href = location.pathname.includes('/modules/') ? '../busy-work.html' : 'busy-work.html';
    busyWork.textContent = 'Busy Work';
    busyWork.dataset.busyWorkLink = '';
    const activities = [...nav.querySelectorAll('a')].find(link => link.textContent.trim() === 'Activities');
    if (activities) activities.after(busyWork); else nav.append(busyWork);
  }
  document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
  const homeProgress = document.querySelector('[data-home-progress]');
  if (homeProgress) {
    const responses = Object.keys(localStorage).filter(k => /^rivburger:m\d+-/.test(k) && (localStorage.getItem(k)||'').trim().length >= 20).length;
    const checked = Object.keys(localStorage).filter(k => k.startsWith('rivburger:check:')).filter(k => { try { return JSON.parse(localStorage.getItem(k) || '{}').correct; } catch (_) { return false; } }).length;
    const activities = new Set(Object.keys(localStorage).filter(k => k.startsWith('rivburger:activity:') && (localStorage.getItem(k)||'').trim().length >= 20).map(k => k.match(/:a(\d+)-/)?.[1]).filter(Boolean)).size;
    const pct = Math.min(100, Math.round(((responses + checked + activities) / 340) * 100));
    homeProgress.textContent = `${pct}%`;
    document.querySelector('[data-home-progress-bar]').style.width = `${pct}%`;
  }
})();
