(() => {
  const moduleId = Number(document.body.dataset.module);
  const data = COURSE_MODULES.find(item => item.id === moduleId);
  if (!data) return;
  const visuals = {
    1: [{after:0, src:'design-cycle.png', alt:'Five-stage Riv Burger design cycle from investigate to evaluate', caption:'Use the design cycle to move from the situation and brief to an evidence-based evaluation.'}],
    2: [{after:1, src:'contamination-path.png', alt:'Cross-contamination path from raw food through hands, tools or surfaces to ready-to-eat food', caption:'Separation, washing and sanitising break the contamination path.'}],
    3: [{after:0, src:'safe-workstation.png', alt:'Organised food technology workstation with separated ingredients, apron, utensils and chopping board', caption:'Mise en place creates a calm, visible and efficient workstation before cooking begins.'}],
    4: [{after:0, src:'burger-system.png', alt:'Functional burger layers showing the job of the bun, fresh ingredients, sauce and filling', caption:'A burger works as a system: each layer affects stability, texture, moisture and ease of eating.'}],
    5: [{after:0, src:'food-journey.png', alt:'Ingredient journey from primary production through processing, transport and preparation to service', caption:'Trace each ingredient through the food system before making local or sustainability claims.'}],
    6: [{after:0, src:'design-options.png', alt:'Four burger concept frames prompting meaningful changes to filling, herb, structure and flavour', caption:'Four concepts should explore genuinely different responses—not redraw the same burger.'}],
    7: [{after:0, src:'plant-needs.png', alt:'Diagram showing light, water, air, soil, nutrients and root space supporting a healthy herb plant', caption:'Plant needs interact. Too much or too little of one factor can limit growth.'},{after:1, src:'school-herb-garden.png', alt:'Healthy herbs growing in a raised school garden bed beside a watering can and hand trowel', caption:'Identify, harvest and wash school-grown herbs only under teacher direction.'}],
    8: [{after:1, src:'production-plan.png', alt:'Workplan timeline from setup through preparation, cooking, assembly, recording and cleaning', caption:'A useful workplan protects time for the entire practical lesson, including evidence and cleaning.'}],
    9: [{after:1, src:'photo-guide.png', alt:'Burger photography guide showing clean framing, visible layers and honest evidence', caption:'Good evidence makes the real product easy to judge without misleading food styling.'}],
    10:[{after:0, src:'evaluation-loop.png', alt:'Evaluation loop connecting criterion, evidence, judgement and a specific improvement', caption:'Evaluation uses evidence to make a judgement and identify a precise improvement.'}]
  };
  const activityLabels = ['Brief and criteria studio','Safety scenario lab','Practical readiness checklist','Burger deconstruction lab','Ingredient journey investigation','Four-concept design studio','Herb and garden investigation','Production planner','Production evidence log','Evaluation builder'];
  const prefix = '../';
  document.title = `Module ${data.id}: ${data.title} | The Riv Burger`;
  const header = document.querySelector('[data-module-header]');
  header.innerHTML = `<p class="eyebrow">Module ${data.id} of ${COURSE_MODULES.length}</p><h1>${data.title}</h1><p class="lede">${data.subtitle}</p>`;
  const contents = document.querySelector('[data-contents]');
  contents.innerHTML = data.sections.map((s, i) => `<li><a href="#section-${i + 1}">${s.title}</a></li>`).join('') + '<li><a href="#knowledge-check">Knowledge check</a></li><li><a href="#make-evidence">Make evidence</a></li>';
  const theory = document.querySelector('[data-theory]');
  theory.innerHTML = data.sections.map((section, i) => {
    const figures = (visuals[moduleId] || []).filter(v => v.after === i).map(v => `<figure class="teaching-visual"><a href="../assets/${v.src}" target="_blank" rel="noopener"><img src="../assets/${v.src}" alt="${v.alt}" loading="lazy"></a><figcaption>${v.caption} <a href="../assets/${v.src}" target="_blank" rel="noopener">Open larger</a></figcaption></figure>`).join('');
    return `<section class="theory-block" id="section-${i + 1}"><h2>${section.title}</h2>${section.html}</section>${figures}`;
  }).join('');
  const aside = document.querySelector('.module-aside');
  aside.insertAdjacentHTML('beforeend', `<hr><h3>Project activity</h3><p>${activityLabels[moduleId - 1]}</p><a class="button secondary compact" href="../activities.html#activity-${moduleId}">Open activity</a><button class="button secondary compact" type="button" data-print-module>Print / Save PDF</button>`);
  aside.querySelector('[data-print-module]').addEventListener('click', () => window.print());
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
