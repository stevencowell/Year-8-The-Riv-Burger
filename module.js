(() => {
  const moduleId = Number(document.body.dataset.module);
  const data = COURSE_MODULES.find(item => item.id === moduleId);
  if (!data) return;
  const prefix = '../';
  document.title = `Module ${data.id}: ${data.title} | The Riv Burger`;
  const header = document.querySelector('[data-module-header]');
  header.innerHTML = `<p class="eyebrow">Module ${data.id} of ${COURSE_MODULES.length}</p><h1>${data.title}</h1><p class="lede">${data.subtitle}</p>`;
  const contents = document.querySelector('[data-contents]');
  contents.innerHTML = data.sections.map((s, i) => `<li><a href="#section-${i + 1}">${s.title}</a></li>`).join('') + '<li><a href="#knowledge-check">Knowledge check</a></li><li><a href="#make-evidence">Make evidence</a></li>';
  const theory = document.querySelector('[data-theory]');
  theory.innerHTML = data.sections.map((section, i) => `<section class="theory-block" id="section-${i + 1}"><h2>${section.title}</h2>${section.html}</section>`).join('');
  const check = document.querySelector('[data-check]');
  check.innerHTML = data.questions.map((item, qi) => `<fieldset class="question" data-question="${qi}"><legend>${qi + 1}. ${item.q}</legend>${item.options.map((option, oi) => `<label class="option"><input type="radio" name="q${qi}" value="${oi}"> <span>${option}</span></label>`).join('')}<p class="feedback" aria-live="polite"></p></fieldset>`).join('') + '<button type="button" data-mark>Check my answers</button>';
  const evidence = document.querySelector('[data-evidence]');
  evidence.innerHTML = data.prompts.map(prompt => `<div class="evidence-card"><label for="${prompt.id}">${prompt.label}</label><textarea id="${prompt.id}" data-save-key="rivburger:${prompt.id}" placeholder="Write your response here…"></textarea><p class="save-status" id="status-${prompt.id}" aria-live="polite"></p></div>`).join('');

  check.querySelector('[data-mark]').addEventListener('click', () => {
    data.questions.forEach((item, qi) => {
      const fieldset = check.querySelector(`[data-question="${qi}"]`);
      const selected = fieldset.querySelector('input:checked');
      const feedback = fieldset.querySelector('.feedback');
      if (!selected) { feedback.className = 'feedback try'; feedback.textContent = 'Choose an answer, then check again.'; return; }
      if (Number(selected.value) === item.answer) { feedback.className = 'feedback good'; feedback.textContent = 'Correct — keep going.'; }
      else { feedback.className = 'feedback try'; feedback.textContent = `Not yet. Review: ${item.review}.`; }
    });
    localStorage.setItem(`rivburger:module:${moduleId}:check`, new Date().toISOString());
    updateProgress();
  });

  evidence.querySelectorAll('[data-save-key]').forEach(area => {
    area.value = localStorage.getItem(area.dataset.saveKey) || '';
    let timer;
    area.addEventListener('input', () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        localStorage.setItem(area.dataset.saveKey, area.value);
        const status = document.getElementById(`status-${area.id}`);
        status.textContent = 'Saved on this device';
        setTimeout(() => { status.textContent = ''; }, 1800);
        updateProgress();
      }, 250);
    });
  });

  const previous = document.querySelector('[data-previous]');
  const next = document.querySelector('[data-next]');
  if (moduleId === 1) { previous.href = prefix + 'index.html'; previous.textContent = '← Course home'; }
  else { previous.href = `module-${String(moduleId - 1).padStart(2, '0')}.html`; previous.textContent = `← Module ${moduleId - 1}`; }
  if (moduleId === COURSE_MODULES.length) { next.href = prefix + 'folio.html'; next.textContent = 'Open My folio →'; }
  else { next.href = `module-${String(moduleId + 1).padStart(2, '0')}.html`; next.textContent = `Module ${moduleId + 1} →`; }

  function updateProgress() {
    const complete = data.prompts.filter(p => (localStorage.getItem(`rivburger:${p.id}`) || '').trim().length >= 20).length;
    const checked = Boolean(localStorage.getItem(`rivburger:module:${moduleId}:check`));
    const pct = Math.round(((complete + (checked ? 1 : 0)) / (data.prompts.length + 1)) * 100);
    document.querySelector('[data-progress]').style.width = `${pct}%`;
    document.querySelector('[data-progress-text]').textContent = `${pct}% of this module's evidence steps completed on this device`;
  }
  updateProgress();
})();
