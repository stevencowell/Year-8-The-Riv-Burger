(() => {
  const fields = [...document.querySelectorAll('[data-activity-key]')];
  function fieldLabel(field) {
    if (field.id) {
      const explicit = document.querySelector(`label[for="${field.id}"]`);
      if (explicit) return explicit.textContent.trim();
    }
    const cell = field.closest('td');
    const row = field.closest('tr');
    const table = field.closest('table');
    if (cell && row && table) {
      const column = [...row.children].indexOf(cell);
      const heading = table.querySelectorAll('th')[column]?.textContent.trim() || 'Response';
      const rowName = row.querySelector('td:first-child')?.textContent.trim();
      return rowName && rowName !== field.value ? `${rowName} — ${heading}` : heading;
    }
    return 'Written response';
  }
  fields.forEach(field => {
    const key = `rivburger:activity:${field.dataset.activityKey}`;
    localStorage.setItem(`rivburger:activity-meta:${field.dataset.activityKey}`, fieldLabel(field));
    field.value = localStorage.getItem(key) || '';
    field.addEventListener('input', () => { localStorage.setItem(key, field.value); update(); });
  });
  function update() {
    let started = 0;
    document.querySelectorAll('.activity-card').forEach(card => {
      if ([...card.querySelectorAll('[data-activity-key]')].some(f => f.value.trim().length >= 20)) started++;
    });
    document.querySelector('[data-activity-count]').textContent = `${started}/10`;
    document.querySelector('[data-activity-progress]').style.width = `${started * 10}%`;
  }
  const target = location.hash && document.querySelector(location.hash);
  if (target?.tagName === 'DETAILS') { target.open = true; setTimeout(() => target.scrollIntoView({block:'start'}), 80); }
  document.querySelector('[data-print-activities]').addEventListener('click', () => window.print());
  update();
})();
