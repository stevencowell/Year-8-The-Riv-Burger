(() => {
  const container = document.querySelector('[data-folio]');
  container.innerHTML = COURSE_MODULES.map(module => `<article class="card"><p class="eyebrow">Module ${module.id}</p><h3>${module.title}</h3>${module.prompts.map(prompt => `<div class="evidence-card"><label for="folio-${prompt.id}">${prompt.label}</label><textarea id="folio-${prompt.id}" data-save-key="rivburger:${prompt.id}" placeholder="No response saved yet."></textarea></div>`).join('')}<a href="modules/module-${String(module.id).padStart(2,'0')}.html#make-evidence">Return to Module ${module.id} →</a></article>`).join('');
  const saveAreas = document.querySelectorAll('[data-save-key]');
  saveAreas.forEach(area => {
    area.value = localStorage.getItem(area.dataset.saveKey) || '';
    area.addEventListener('input', () => localStorage.setItem(area.dataset.saveKey, area.value));
  });
  document.querySelectorAll('[data-folio-meta]').forEach(field => {
    const key = `rivburger:folio:${field.dataset.folioMeta}`;
    field.value = localStorage.getItem(key) || '';
    field.addEventListener('input', () => {
      localStorage.setItem(key, field.value);
      document.querySelector('[data-meta-status]').textContent = 'Saved on this device';
    });
  });
  function payload() {
    const values = {};
    Object.keys(localStorage).filter(k => k.startsWith('rivburger:')).forEach(k => { values[k] = localStorage.getItem(k); });
    return {course:'The Riv Burger', version:1, exportedAt:new Date().toISOString(), values};
  }
  document.querySelector('[data-download]').addEventListener('click', () => {
    const blob = new Blob([JSON.stringify(payload(), null, 2)], {type:'application/json'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `riv-burger-folio-${new Date().toISOString().slice(0,10)}.json`;
    link.click();
    URL.revokeObjectURL(link.href);
    document.querySelector('[data-file-status]').textContent = 'Backup downloaded.';
  });
  document.querySelector('#restore-file').addEventListener('change', async event => {
    const file = event.target.files[0]; if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (data.course !== 'The Riv Burger' || !data.values) throw new Error('Not a Riv Burger backup');
      Object.entries(data.values).forEach(([key, value]) => { if (key.startsWith('rivburger:')) localStorage.setItem(key, String(value)); });
      location.reload();
    } catch {
      document.querySelector('[data-file-status]').textContent = 'That file could not be restored. Choose a Riv Burger JSON backup.';
    }
  });
  document.querySelector('[data-print]').addEventListener('click', () => window.print());
})();
