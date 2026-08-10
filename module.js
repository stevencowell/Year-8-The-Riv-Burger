(() => {
  const moduleId = Number(document.body.dataset.module);
  const data = COURSE_MODULES.find(item => item.id === moduleId);
  if (!data) return;

  const visuals = {
    1: [
      {after:0, src:'design-cycle.png', alt:'Five-stage Riv Burger design cycle from investigate to evaluate', caption:'Use the design cycle to move from the situation and brief to an evidence-based evaluation.'},
      {after:1, src:'module-01-design-planning-photo.png', alt:'Colour photograph of four burger concept sketches and a design-planning sheet on a classroom table', caption:'Early planning should make differences between concepts visible before one direction is selected.'}
    ],
    2: [
      {after:0, src:'module-02-food-safety-photo.png', alt:'Colour photograph of a clean food-technology workstation with raw and ready-to-eat ingredients separated', caption:'Visible separation, clean equipment and an orderly bench help break contamination pathways.'},
      {after:1, src:'contamination-path.png', alt:'Cross-contamination path from raw food through hands, tools or surfaces to ready-to-eat food', caption:'Separation, washing and sanitising break the contamination path.'}
    ],
    3: [
      {after:0, src:'safe-workstation.png', alt:'Organised food technology workstation with separated ingredients, apron, utensils and chopping board', caption:'Mise en place creates a calm, visible and efficient workstation before cooking begins.'}
    ],
    4: [
      {after:0, src:'burger-system.png', alt:'Functional burger layers showing the job of the bun, fresh ingredients, sauce and filling', caption:'A burger works as a system: each layer affects stability, texture, moisture and ease of eating.'},
      {after:1, src:'module-04-burger-layers-photo.png', alt:'Colour photograph of an achievable classroom-made burger with clearly visible balanced layers', caption:'Visible, proportionate layers can create sensory contrast without sacrificing stability.'}
    ],
    5: [
      {after:0, src:'food-journey.png', alt:'Ingredient journey from primary production through processing, transport and preparation to service', caption:'Trace each ingredient through the food system before making origin or sustainability claims.'},
      {after:1, src:'module-05-local-ingredients-photo.png', alt:'Colour photograph of candidate burger ingredients arranged for origin and season research', caption:'Candidate ingredients must be traced before they can be described as local or seasonal.'}
    ],
    6: [
      {after:0, src:'module-06-design-options-photo.png', alt:'Colour photograph of four visibly different annotated burger concept sketches', caption:'Genuine alternatives change meaningful features such as filling, structure, herb or flavour direction.'},
      {after:1, src:'design-options.png', alt:'Four burger concept frames prompting meaningful changes to filling, herb, structure and flavour', caption:'Annotations explain the decision or expected effect rather than merely naming a feature.'}
    ],
    7: [
      {after:0, src:'plant-needs.png', alt:'Diagram showing light, water, air, soil, nutrients and root space supporting a healthy herb plant', caption:'Plant needs interact. Too much or too little of one factor can limit growth.'},
      {after:1, src:'school-herb-garden.png', alt:'Healthy herbs growing in a raised school garden bed beside a watering can and hand trowel', caption:'Identify, harvest and wash school-grown herbs only under teacher direction.'}
    ],
    8: [
      {after:0, src:'module-08-production-planning-photo.png', alt:'Colour photograph of a recipe, measured ingredients and equipment organised for mise en place', caption:'A production-ready plan connects exact instructions to the resources needed for the practical.'},
      {after:2, src:'production-plan.png', alt:'Workplan timeline from setup through preparation, cooking, assembly, recording and cleaning', caption:'A useful workplan protects time for the entire practical lesson, including evidence and cleaning.'}
    ],
    9: [
      {after:1, src:'photo-guide.png', alt:'Burger photography guide showing clean framing, visible layers and honest evidence', caption:'Good evidence makes the real product easy to judge without misleading food styling.'},
      {after:2, src:'module-09-production-evidence-photo.png', alt:'Colour photograph of a student phone recording a finished burger on a clean workstation', caption:'Photograph the real product promptly and clearly; the image supports but does not replace evaluation.'}
    ],
    10: [
      {after:0, src:'evaluation-loop.png', alt:'Evaluation loop connecting criterion, evidence, judgement and a specific improvement', caption:'Evaluation uses evidence to make a judgement and identify a precise improvement.'},
      {after:2, src:'module-10-evaluation-photo.png', alt:'Colour photograph of an evaluation sheet beside a partly tasted burger and design notes', caption:'Specific observations from the real product support honest reflection and useful next-step improvements.'}
    ]
  };
  const activityLabels = ['Brief and criteria studio','Safety scenario lab','Practical readiness checklist','Burger deconstruction lab','Ingredient journey investigation','Four-concept design studio','Herb and garden investigation','Production planner','Production evidence log','Evaluation builder'];
  const presentationFiles = [
    'Riv-Burger-Module-01-the-challenge.pptx',
    'Riv-Burger-Module-02-safe-food-practices.pptx',
    'Riv-Burger-Module-03-tools-and-workflow.pptx',
    'Riv-Burger-Module-04-burger-anatomy.pptx',
    'Riv-Burger-Module-05-ingredients-and-agriculture.pptx',
    'Riv-Burger-Module-06-develop-your-design.pptx',
    'Riv-Burger-Module-07-garden-to-kitchen.pptx',
    'Riv-Burger-Module-08-plan-production.pptx',
    'Riv-Burger-Module-09-produce-and-present.pptx',
    'Riv-Burger-Module-10-evaluate-and-reflect.pptx'
  ];

  document.title = `Module ${data.id}: ${data.title} | The Riv Burger`;
  document.querySelector('[data-module-header]').innerHTML = `<p class="eyebrow">Module ${data.id} of ${COURSE_MODULES.length}</p><h1>${data.title}</h1><p class="lede">${data.subtitle}</p>`;
  document.querySelector('[data-contents]').innerHTML = data.sections.map((s, i) => `<li><a href="#section-${i + 1}">${s.title}</a></li>`).join('');

  const figureHtml = item => `<figure class="teaching-visual"><a href="../assets/${item.src}" target="_blank" rel="noopener"><img src="../assets/${item.src}" alt="${item.alt}" loading="lazy"></a><figcaption>${item.caption} <a href="../assets/${item.src}" target="_blank" rel="noopener">Open larger</a></figcaption></figure>`;
  const videoHtml = (video, sectionNumber) => `<aside class="video-learning" aria-labelledby="video-title-${sectionNumber}"><div class="video-copy"><p class="eyebrow">Watch and notice</p><h3 id="video-title-${sectionNumber}">${video.title}</h3><p>${video.purpose}</p><p class="watch-for"><strong>Watch for:</strong> ${video.watchFor}</p><p class="fine">${video.channel} · YouTube</p></div><div><div class="video-frame" data-video-frame><button type="button" class="video-launch" data-video-load="${video.id}" aria-label="Play ${video.title}"><img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy"><span class="video-play" aria-hidden="true">▶</span><span class="video-launch-label">Play video</span></button></div><p class="video-fallback"><a href="https://www.youtube.com/watch?v=${video.id}" target="_blank" rel="noopener">Open in YouTube ↗</a></p></div></aside>`;
  const presentationHtml = () => `<aside class="module-presentation" aria-labelledby="module-presentation-title"><div><p class="eyebrow">Module presentation</p><h2 id="module-presentation-title">Learn with the slides</h2><p>This teacher-style presentation explains the three sections in this module. You can use it independently to review the ideas, answer the checks and prepare your written responses.</p><p class="fine">PowerPoint file · 8 slides · includes teaching notes</p></div><a class="button tomato presentation-download" href="../resources/presentations/${presentationFiles[moduleId - 1]}" download>Download Module ${moduleId} PowerPoint</a></aside>`;
  const questionHtml = (item, qi, section) => {
    const saved = readJSON(`rivburger:check:${section.learningId}:${qi}`);
    return `<fieldset class="question" data-question="${qi}" data-review="${section.title}"><legend>${qi + 1}. ${item.q}</legend>${item.options.map((option, oi) => `<label class="option"><input type="radio" name="${section.learningId}-q${qi}" value="${oi}" ${saved.selected === oi ? 'checked' : ''}> <span>${option}</span></label>`).join('')}<button type="button" class="button secondary compact check-one" data-check-one>Check answer</button><p class="feedback ${saved.checked ? (saved.correct ? 'good' : 'try') : ''}" aria-live="polite">${saved.checked ? feedbackText(saved.correct, section.title) : ''}</p></fieldset>`;
  };
  const evidenceHtml = (section, index) => {
    const w = section.written;
    return `<section class="section-evidence" aria-labelledby="evidence-${section.learningId}"><p class="eyebrow">Written evidence ${moduleId}.${index + 1}</p><h3 id="evidence-${section.learningId}">${w.label}</h3><button type="button" class="button secondary response-help-toggle" data-response-help aria-expanded="false" aria-controls="guide-${w.id}">What is this asking?</button><div class="response-guide" id="guide-${w.id}" hidden><p><strong>In plain language:</strong> ${w.clarify}</p><ol>${w.steps.map(step => `<li>${step}</li>`).join('')}</ol><p><strong>Sentence starter:</strong> ${w.starter}</p><p><a href="#section-${index + 1}">Return to the precise relevant theory section: ${section.title}</a></p><details><summary>Appropriate response example</summary><p>${w.example}</p></details></div><label class="sr-only" for="${w.id}">${w.label}</label><textarea id="${w.id}" data-save-key="rivburger:${w.id}" placeholder="Write your response here…"></textarea><p class="save-status" id="status-${w.id}" aria-live="polite"></p></section>`;
  };

  document.querySelector('[data-theory]').innerHTML = presentationHtml() + data.sections.map((section, i) => {
    const figures = (visuals[moduleId] || []).filter(v => v.after === i).map(figureHtml).join('');
    const video = COURSE_VIDEOS[`${moduleId}.${i + 1}`];
    return `<section class="theory-block" id="section-${i + 1}"><h2>${section.title}</h2>${section.html}</section>${figures}${videoHtml(video, `${moduleId}-${i + 1}`)}<details class="section-learning" id="check-${section.learningId}"><summary><span>Learning activity ${moduleId}.${i + 1}</span><strong>10 questions + written response</strong></summary><div class="section-learning-body"><p>Answer all ten questions. Feedback returns you to this precise theory section when you need another look.</p><div data-section-check="${section.learningId}">${section.questions.map((item, qi) => questionHtml(item, qi, section)).join('')}</div>${evidenceHtml(section, i)}</div></details>`;
  }).join('');

  const oldCheck = document.getElementById('knowledge-check');
  const oldEvidence = document.getElementById('make-evidence');
  if (oldCheck) oldCheck.remove();
  if (oldEvidence) oldEvidence.remove();

  const aside = document.querySelector('.module-aside');
  aside.insertAdjacentHTML('beforeend', `<hr><h3>Project activity</h3><p>${activityLabels[moduleId - 1]}</p><a class="button secondary compact" href="../activities.html#activity-${moduleId}">Open activity</a><button class="button secondary compact" type="button" data-print-module>Print / Save PDF</button>`);
  aside.querySelector('[data-print-module]').addEventListener('click', () => window.print());

  document.querySelectorAll('[data-check-one]').forEach(button => {
    button.addEventListener('click', () => {
      const fieldset = button.closest('[data-question]');
      const sectionBox = button.closest('[data-section-check]');
      const section = data.sections.find(s => s.learningId === sectionBox.dataset.sectionCheck);
      const qi = Number(fieldset.dataset.question);
      const selected = fieldset.querySelector('input:checked');
      const feedback = fieldset.querySelector('.feedback');
      if (!selected) {
        feedback.className = 'feedback try';
        feedback.textContent = 'Choose an answer, then check again.';
        return;
      }
      const selectedIndex = Number(selected.value);
      const correct = selectedIndex === section.questions[qi].answer;
      localStorage.setItem(`rivburger:check:${section.learningId}:${qi}`, JSON.stringify({selected:selectedIndex, checked:true, correct}));
      feedback.className = `feedback ${correct ? 'good' : 'try'}`;
      feedback.innerHTML = correct ? 'Correct — keep going.' : `Not yet. Review <a href="#section-${data.sections.indexOf(section) + 1}">${section.title}</a>, then try again.`;
      updateProgress();
    });
  });

  document.querySelectorAll('[data-response-help]').forEach(button => {
    button.addEventListener('click', () => {
      const panel = document.getElementById(button.getAttribute('aria-controls'));
      const open = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!open));
      panel.hidden = open;
    });
  });

  document.querySelectorAll('[data-video-load]').forEach(button => {
    button.addEventListener('click', () => {
      const id = button.dataset.videoLoad;
      const frame = button.closest('[data-video-frame]');
      const title = button.getAttribute('aria-label').replace(/^Play /, '');
      frame.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0" title="${title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
      frame.querySelector('iframe').focus();
    });
  });

  document.querySelectorAll('[data-save-key]').forEach(area => {
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
  if (moduleId === 1) { previous.href = '../index.html'; previous.textContent = '← Course home'; }
  else { previous.href = `module-${String(moduleId - 1).padStart(2, '0')}.html`; previous.textContent = `← Module ${moduleId - 1}`; }
  if (moduleId === COURSE_MODULES.length) { next.href = '../folio.html'; next.textContent = 'Open My folio →'; }
  else { next.href = `module-${String(moduleId + 1).padStart(2, '0')}.html`; next.textContent = `Module ${moduleId + 1} →`; }

  function readJSON(key) {
    try { return JSON.parse(localStorage.getItem(key) || '{}'); }
    catch (_) { return {}; }
  }
  function feedbackText(correct, review) {
    return correct ? 'Correct — keep going.' : `Not yet. Review ${review}, then try again.`;
  }
  function updateProgress() {
    const responses = data.sections.filter(section => (localStorage.getItem(`rivburger:${section.written.id}`) || '').trim().length >= 20).length;
    const correct = data.sections.reduce((total, section) => total + section.questions.filter((_, qi) => readJSON(`rivburger:check:${section.learningId}:${qi}`).correct).length, 0);
    const total = data.sections.length * 11;
    const pct = Math.round(((responses + correct) / total) * 100);
    document.querySelector('[data-progress]').style.width = `${pct}%`;
    document.querySelector('[data-progress-text]').textContent = `${correct} of 30 questions correct and ${responses} of 3 written responses saved on this device`;
  }
  updateProgress();
})();
