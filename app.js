(() => {
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const icon = (name) => `<i data-lucide="${name}" aria-hidden="true"></i>`;
  const text = (value) => typeof value === 'string' ? value : value[language];
  const translated = (en, zh) => language === 'en' ? en : zh;
  let language = 'en';
  try { language = new URLSearchParams(location.search).get('lang') || localStorage.getItem('zhongmin-language') || 'en'; } catch {}
  if (!['en', 'zh'].includes(language)) language = 'en';
  let activeProject = null;
  let focusBeforeDialog = null;
  let hashBeforeProject = '#research';
  const dialog = $('#project-dialog');

  function drawIcons() { if (window.lucide) window.lucide.createIcons(); }
  function externalLink(link) { return `<a href="${escape(link.href)}" target="_blank" rel="noopener noreferrer">${icon(link.icon || 'arrow-up-right')}${escape(text(link.label))}</a>`; }
  function visual(project) {
    switch (project.visual) {
      case 'nabench': return `<div class="project-visual visual-nabench" aria-label="21 models, 47 assay datasets, 539,000 mutants"><div class="visual-label">NUCLEOTIDE FOUNDATION MODELS</div><div class="visual-title">NABench<span style="color:#879a77">.</span></div><div class="benchmark-columns"><div><strong>21</strong><span>${translated('models','模型')}</span></div><div><strong>47</strong><span>${translated('assays','测定数据集')}</span></div><div><strong>539k</strong><span>${translated('mutants','突变体')}</span></div></div></div>`;
      case 'vcworld': return `<div class="project-visual visual-vcworld" aria-hidden="true"><div class="visual-title">VCWorld</div><div class="mechanism-row"><div class="mechanism-node">${translated('Biological<br>knowledge','生物知识')}</div>${icon('plus')}<div class="mechanism-node">${translated('LLM<br>reasoning','LLM 推理')}</div>${icon('arrow-right')}<div class="mechanism-node">${translated('Cellular<br>response','细胞响应')}</div></div><div class="mechanism-note">VIRTUAL CELL · INTERPRETABILITY</div></div>`;
      case 'transformer': return `<div class="project-visual visual-transformer" aria-hidden="true"><div class="model-flow"><div class="model-tower">${'<span></span>'.repeat(5)}</div>${icon('arrow-right')}<div class="model-tower small">${'<span></span>'.repeat(3)}</div></div><div class="model-labels"><span>TEACHER</span><span>STUDENT</span></div><div class="visual-label">QWEN3 · KNOWLEDGE DISTILLATION</div></div>`;
      default: return `<div class="project-visual visual-orion" aria-hidden="true"><div><div class="visual-label">METAGENOMIC DATA</div><div class="visual-title">OrIon</div></div><div class="orion-flow"><div class="orion-data">${'<span></span>'.repeat(12)}</div><span class="orion-rule"></span>${icon('filter')}<span class="orion-rule"></span><div class="orion-data selected">${'<span></span>'.repeat(4)}</div></div><div class="visual-caption">${translated('High-throughput structured screening','高通量结构化筛选工作流')}</div></div>`;
    }
  }
  function renderProjects() {
    $('#project-list').innerHTML = window.PROJECTS.map((p) => `<article class="project" id="work-${p.id}">${visual(p)}<div class="project-content"><div class="project-meta"><span>${p.year}</span><span aria-hidden="true">/</span>${p.badgeHref ? `<a class="venue" href="${escape(p.badgeHref)}" target="_blank" rel="noopener noreferrer">${escape(text(p.badge))}</a>` : `<span class="venue">${escape(text(p.badge))}</span>`}</div><h3><a href="#project/${p.id}" data-project="${p.id}">${escape(p.name)}</a></h3><p class="project-subtitle">${escape(p.subtitle)}</p>${p.authors ? `<p class="project-authors">${p.authors.map(a => a === 'Zhongmin Li' ? '<strong>Zhongmin Li</strong>' : escape(a)).join(', ')}</p>` : ''}<p class="project-description">${escape(text(p.description))}</p><div class="project-links"><a href="#project/${p.id}" data-project="${p.id}">${translated('Project overview','项目介绍')}${icon('arrow-up-right')}</a>${p.links.map(externalLink).join('')}${p.bibtex ? `<button type="button" data-cite="${p.id}">${icon('quote')}BibTeX</button>` : ''}</div></div></article>`).join('');
  }
  function renderDialog(project, cite = false) {
    $('#dialog-content').innerHTML = `<p class="dialog-eyebrow">${escape(project.year)} / ${escape(text(project.badge))}</p><h2 class="dialog-title" id="dialog-title">${escape(project.name)}</h2><p class="dialog-subtitle">${escape(project.subtitle)}</p>${project.sections.map(section => `<section class="dialog-block"><h3>${escape(text(section.title))}</h3>${section.text ? `<p>${escape(text(section.text))}</p>` : `<ul>${text(section.items).map(item => `<li>${escape(item)}</li>`).join('')}</ul>`}</section>`).join('')}<div class="dialog-links">${project.links.map(externalLink).join('')}</div>${project.bibtex ? `<div class="dialog-block" id="citation"><h3>${translated('Citation','引用')}</h3><pre class="citation-text">${escape(project.bibtex)}</pre><button type="button" class="copy-citation">${icon('copy')}<span>${translated('Copy BibTeX','复制 BibTeX')}</span></button><p class="citation-status" aria-live="polite"></p></div>` : ''}`;
    drawIcons();
    if (cite) requestAnimationFrame(() => $('#citation')?.scrollIntoView({block: 'start'}));
  }
  function openProject(id, cite = false, updateURL = true) {
    const project = window.PROJECTS.find(p => p.id === id);
    if (!project) return;
    if (!dialog.open) {
      focusBeforeDialog = document.activeElement;
      if (!location.hash.startsWith('#project/')) hashBeforeProject = location.hash || '#research';
    }
    activeProject = project;
    renderDialog(project, cite);
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = 'hidden';
    if (updateURL && location.hash !== `#project/${id}`) history.pushState({}, '', `#project/${id}`);
  }
  function closeProject(updateURL = true) {
    if (dialog.open) dialog.close();
    activeProject = null;
    document.body.style.overflow = '';
    if (updateURL && location.hash.startsWith('#project/')) history.replaceState({}, '', hashBeforeProject);
    if (focusBeforeDialog?.isConnected) focusBeforeDialog.focus({preventScroll: true});
  }
  function syncHash() {
    if (location.hash.startsWith('#project/')) openProject(location.hash.slice(9), false, false);
    else if (dialog.open) closeProject(false);
  }
  function setLanguage(next) {
    language = next;
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.body.classList.toggle('zh', language === 'zh');
    document.querySelectorAll('[data-en][data-zh]').forEach(el => {el.textContent = el.dataset[language];});
    $('#language-toggle span').textContent = translated('中文','EN');
    $('#language-toggle').setAttribute('aria-label', translated('切换到中文','Switch to English'));
    $('#language-toggle').title = translated('切换到中文','Switch to English');
    $('#copy-email').setAttribute('aria-label', translated('Copy email address','复制邮箱地址'));
    $('#copy-email').title = translated('Copy email address','复制邮箱地址');
    $('#close-dialog').setAttribute('aria-label', translated('Close project','关闭项目介绍'));
    $('#close-dialog').title = translated('Close','关闭');
    $('#menu-toggle').setAttribute('aria-label', translated('Toggle navigation','展开或收起导航'));
    $('#menu-toggle').title = translated('Navigation','导航');
    document.title = translated('Zhongmin Li 李钟旻 | AI for Life Sciences','李钟旻 Zhongmin Li | 人工智能与生命科学');
    $('#copy-status').textContent = '';
    renderProjects();
    if (activeProject) renderDialog(activeProject);
    drawIcons();
    try { localStorage.setItem('zhongmin-language', language); } catch {}
  }
  async function copy(value) {
    if (navigator.clipboard?.writeText) {
      try {await navigator.clipboard.writeText(value); return true;} catch {}
    }
    const field = document.createElement('textarea');
    field.value = value; field.style.position = 'fixed'; field.style.opacity = '0';
    (dialog.open ? dialog : document.body).append(field);
    field.select();
    let copied = false;
    try {copied = document.execCommand('copy');} catch {}
    field.remove();
    return copied;
  }
  $('#language-toggle').addEventListener('click', () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
    const url = new URL(location.href); url.searchParams.set('lang', language);
    try {history.replaceState({}, '', url);} catch {}
  });
  $('#menu-toggle').addEventListener('click', () => {
    const isOpen = $('#menu-toggle').getAttribute('aria-expanded') === 'true';
    $('#menu-toggle').setAttribute('aria-expanded', String(!isOpen)); $('#mobile-nav').hidden = isOpen;
  });
  $('#mobile-nav').addEventListener('click', e => {if (e.target.closest('a')) {$('#mobile-nav').hidden = true; $('#menu-toggle').setAttribute('aria-expanded','false');}});
  document.addEventListener('click', e => {
    const projectLink = e.target.closest('[data-project]');
    if (projectLink) {e.preventDefault(); openProject(projectLink.dataset.project);}
    const citeLink = e.target.closest('[data-cite]');
    if (citeLink) openProject(citeLink.dataset.cite, true);
  });
  $('#close-dialog').addEventListener('click', () => closeProject());
  dialog.addEventListener('cancel', e => {e.preventDefault(); closeProject();});
  dialog.addEventListener('click', e => {if (e.target === dialog) {const b = dialog.getBoundingClientRect(); if (e.clientX < b.left || e.clientX > b.right || e.clientY < b.top || e.clientY > b.bottom) closeProject();}});
  dialog.addEventListener('click', async e => {
    const button = e.target.closest('.copy-citation');
    if (!button || !activeProject?.bibtex) return;
    const copied = await copy(activeProject.bibtex);
    $('.citation-status').textContent = copied ? translated('Citation copied.','引用已复制。') : translated('Please select the citation text to copy.','请选中上方引用文字进行复制。');
    button.focus({preventScroll: true});
  });
  $('#copy-email').addEventListener('click', async () => {
    const copied = await copy('lizhongmin2004@sjtu.edu.cn');
    $('#copy-status').textContent = copied ? translated('Email address copied.','邮箱地址已复制。') : translated('Please select the email address to copy.','请选中邮箱地址进行复制。');
    $('#copy-email').focus({preventScroll: true});
  });
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      document.querySelectorAll('.desktop-nav a').forEach(a => {const current = a.hash === `#${entry.target.id}`;a.classList.toggle('active',current);if(current)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
    }
  }, {rootMargin:'-15% 0px -60% 0px',threshold:0});
  ['about','research','experience'].forEach(id => observer.observe(document.getElementById(id)));
  window.addEventListener('hashchange', syncHash);
  setLanguage(language);
  syncHash();
})();
