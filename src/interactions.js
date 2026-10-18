const root = document.documentElement;
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let savedMotion;
try { savedMotion = localStorage.getItem('atta-motion'); } catch {}
let motion = savedMotion ? savedMotion === 'play' : !reducedMotion.matches;
const motionButton = document.querySelector('.motion-toggle');
function setMotion(enabled, remember = false) {
  motion = enabled;
  root.classList.toggle('motion-enabled', enabled);
  root.classList.toggle('motion-paused', !enabled);
  if(!enabled)document.getAnimations().forEach(animation=>animation.cancel());
  if (motionButton) {
    motionButton.setAttribute('aria-pressed', String(!enabled));
    motionButton.setAttribute('aria-label', enabled ? 'Pause decorative motion' : 'Enable decorative motion');
    motionButton.title = enabled ? 'Pause decorative motion' : 'Enable decorative motion';
    motionButton.querySelector('.motion-label').textContent = enabled ? 'Motion on' : 'Motion off';
  }
  if (remember) { savedMotion = enabled ? 'play' : 'pause'; try { localStorage.setItem('atta-motion', savedMotion); } catch {} }
  document.dispatchEvent(new CustomEvent('portfolio:motion', {detail: {enabled}}));
}
motionButton?.addEventListener('click', () => setMotion(!motion, true));
reducedMotion.addEventListener('change', event => { if (!savedMotion) setMotion(!event.matches); });

// Never hide content until an observer is available to reveal it again.
const revealTargets = [...document.querySelectorAll('.project-row,.section-head,.about-grid,.skill,.timeline>li,.now-section,.note-entry,.experience-detail')];
if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-revealed'); reveal.unobserve(entry.target);
    }
  }, {threshold:0.08,rootMargin:'0px 0px -12px 0px'});
  revealTargets.forEach((element,i) => {
    element.classList.add('reveal-candidate');
    element.style.setProperty('--reveal-delay',element.classList.contains('skill') ? `${i % 3 * 55}ms` : '0ms');
    reveal.observe(element);
  });
}
setMotion(motion);
import('/premium.js').then(({startExperience})=>startExperience({motion})).catch(()=>{});

const filterBar = document.querySelector('.filter-bar');
const rows = [...document.querySelectorAll('.project-row')];
if (filterBar) {
  filterBar.hidden = false;
  const buttons = [...filterBar.querySelectorAll('button')];
  const matches = (category,key) => key === 'all' || key === 'web' && /web/i.test(category) || key === 'mobile' && /Flutter/.test(category) || key === 'python' && /Python/.test(category);
  buttons.forEach(button => button.addEventListener('click', () => {
    buttons.forEach(b => { b.classList.toggle('active',b === button); b.setAttribute('aria-pressed',String(b === button)); });
    let count = 0;
    rows.forEach(row => {
      row.hidden = !matches(row.dataset.category,button.dataset.filter);
      if (!row.hidden) {
        count++; row.classList.add('is-revealed');
        if(motion)row.animate([{opacity:.35,transform:'translateY(10px)'},{opacity:1,transform:'none'}],{duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
      }
    });
    document.getElementById('filter-status').textContent = `Showing ${count} project${count === 1 ? '' : 's'}.`;
    updateScroll();
  }));
  filterBar.addEventListener('keydown',event => {
    if (!['ArrowLeft','ArrowRight'].includes(event.key) || !buttons.includes(document.activeElement)) return;
    event.preventDefault();
    const next = buttons[(buttons.indexOf(document.activeElement) + (event.key === 'ArrowRight' ? 1 : -1) + buttons.length) % buttons.length];
    next.focus(); next.click();
  });
}
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click',() => a.closest('details').removeAttribute('open')));
const menu = document.querySelector('.mobile-nav');
menu?.addEventListener('keydown',event => { if (event.key === 'Escape') { menu.open = false; menu.querySelector('summary').focus(); } });
menu?.addEventListener('toggle',()=>menu.querySelector('summary').setAttribute('aria-label',menu.open?'Close navigation':'Open navigation'));
document.addEventListener('click',event=>{if(menu?.open&&!menu.contains(event.target))menu.open=false;});

// Native details remain usable without scripts; animation only changes the transition.
document.querySelectorAll('.skill-disclosure').forEach(details=>{
  const summary=details.querySelector('summary'),prompt=details.querySelector('.skill-prompt');
  let animation,wantsOpen=details.open;
  const cleanup=()=>{details.classList.remove('is-animating');details.removeAttribute('data-closing');details.style.removeProperty('height');};
  const updatePrompt=()=>{prompt.textContent=details.open?'Hide example':'See it in practice';};
  updatePrompt();details.addEventListener('toggle',updatePrompt);
  summary.addEventListener('click',event=>{
    if(!motion)return;
    event.preventDefault();
    const start=details.getBoundingClientRect().height;
    wantsOpen=animation?!wantsOpen:!details.open;
    animation?.cancel();cleanup();details.open=true;
    const style=getComputedStyle(details);
    const closed=summary.getBoundingClientRect().height+parseFloat(style.paddingTop)+parseFloat(style.paddingBottom)+parseFloat(style.borderTopWidth)+parseFloat(style.borderBottomWidth);
    const end=wantsOpen?details.getBoundingClientRect().height:closed;
    details.toggleAttribute('data-closing',!wantsOpen);details.classList.add('is-animating');
    animation=details.animate([{height:`${start}px`},{height:`${end}px`}],{duration:320,easing:'cubic-bezier(.22,1,.36,1)'});
    animation.onfinish=()=>{details.open=wantsOpen;animation=null;cleanup();updatePrompt();};
  });
  document.addEventListener('portfolio:motion',()=>{if(animation){animation.cancel();animation=null;details.open=wantsOpen;cleanup();updatePrompt();}});
});

const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
rows.forEach(row => {
  const stage = row.querySelector('.project-stage');
  stage?.addEventListener('pointermove',event => {
    if (!motion || !finePointer.matches) return;
    const rect = stage.getBoundingClientRect();
    stage.style.setProperty('--tilt-x',`${-(event.clientY - rect.top - rect.height / 2) / rect.height * 7}deg`);
    stage.style.setProperty('--tilt-y',`${(event.clientX - rect.left - rect.width / 2) / rect.width * 9}deg`);
  });
  stage?.addEventListener('pointerleave',() => { stage.style.setProperty('--tilt-x','0deg'); stage.style.setProperty('--tilt-y','0deg'); });
});

const readingLine = document.createElement('div');
readingLine.className = 'reading-line'; readingLine.setAttribute('aria-hidden','true'); document.body.prepend(readingLine);
const backToTop = document.createElement('button');
backToTop.className = 'to-top'; backToTop.type = 'button'; backToTop.textContent = '↑'; backToTop.setAttribute('aria-label','Back to top'); document.body.append(backToTop);
backToTop.addEventListener('click',() => window.scrollTo({top:0,behavior:motion ? 'smooth' : 'instant'}));
const header = document.querySelector('.site-header');
const visibleRows = new Set();
if ('IntersectionObserver' in window) {
  const rowObserver = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting ? visibleRows.add(e.target) : visibleRows.delete(e.target)),{rootMargin:'100px'});
  rows.forEach(row => rowObserver.observe(row));
}
const sections = [...document.querySelectorAll('.desktop-nav a,.case-toc a')].map(link => {
  const url = new URL(link.href);
  return url.pathname === location.pathname && url.hash ? {link,section:document.querySelector(url.hash)} : null;
}).filter(item => item?.section);
let scrollFrame;
function updateScroll() {
  scrollFrame = undefined;
  const height = root.scrollHeight - innerHeight;
  readingLine.style.transform = `scaleX(${height > 0 ? scrollY / height : 0})`;
  header?.classList.toggle('is-scrolled',scrollY > 20);
  const topVisible = scrollY > 850;
  backToTop.classList.toggle('is-visible',topVisible); backToTop.tabIndex = topVisible ? 0 : -1;
  let current;
  sections.forEach(item => { if (item.section.getBoundingClientRect().top <= innerHeight * .35) current = item; });
  sections.forEach(item => item.link.classList.toggle('is-active',item === current));
  if (motion && finePointer.matches) visibleRows.forEach(row => {
    if (row.hidden) return;
    const rect = row.getBoundingClientRect();
    const value = Math.max(-1,Math.min(1,(rect.top + rect.height / 2 - innerHeight / 2) / innerHeight));
    row.style.setProperty('--scroll-tilt',`${value * -4}deg`);
  });
  document.querySelectorAll('.timeline>li').forEach(li => {
    const rect = li.getBoundingClientRect();
    li.classList.toggle('is-current',rect.top < innerHeight * .65 && rect.bottom > innerHeight * .25);
  });
}
addEventListener('scroll',() => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); },{passive:true});
addEventListener('resize',() => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); },{passive:true});
updateScroll();

const dialog = document.getElementById('project-dialog');
const projectData = document.getElementById('project-data');
if (dialog && projectData && typeof dialog.showModal === 'function') {
  const projects = JSON.parse(projectData.textContent);
  let current = 0,invoker;
  const byId = id => document.getElementById(id);
  function renderProject(index) {
    current = (index + projects.length) % projects.length;
    const p = projects[current];
    byId('quick-category').textContent = `${p.number} / ${p.category}`;
    byId('quick-title').textContent = p.name;
    byId('quick-summary').textContent = p.summary;
    byId('quick-count').textContent = `${p.number} / ${String(projects.length).padStart(2,'0')}`;
    byId('quick-tags').replaceChildren(...p.stack.map(text => { const span = document.createElement('span'); span.textContent = text; return span; }));
    byId('quick-features').replaceChildren(...p.features.slice(0,4).map(text => { const li = document.createElement('li'); li.textContent = text; return li; }));
    byId('quick-case').href = `/projects/${p.slug}/`; byId('quick-live').href = p.live; byId('quick-source').href = p.source;
    const media = document.querySelector(`.project-row[data-slug="${p.slug}"] .visual-depth`);
    byId('quick-media').replaceChildren(...[...media.children].map(child => child.cloneNode(true)));
    dialog.scrollTop = 0;
    if(dialog.open&&motion){const layout=dialog.querySelector('.quick-layout');layout.getAnimations().forEach(a=>a.cancel());layout.animate([{opacity:.3,transform:'translateX(7px)'},{opacity:1,transform:'none'}],{duration:280,easing:'cubic-bezier(.22,1,.36,1)'});}
  }
  document.querySelectorAll('.quick-look').forEach(button => {
    button.hidden = false;
    button.addEventListener('click',() => {
      invoker = button; renderProject(projects.findIndex(p => p.slug === button.dataset.project));
      dialog.showModal(); root.classList.add('dialog-open');
    });
  });
  byId('quick-prev').addEventListener('click',() => renderProject(current - 1));
  byId('quick-next').addEventListener('click',() => renderProject(current + 1));
  dialog.addEventListener('close',() => { root.classList.remove('dialog-open'); invoker?.focus({preventScroll:true}); });
  dialog.addEventListener('click',event => {
    const rect = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
  });
  dialog.addEventListener('keydown',event => {
    if (!event.altKey && !event.ctrlKey && ['ArrowLeft','ArrowRight'].includes(event.key)) { event.preventDefault(); renderProject(current + (event.key === 'ArrowRight' ? 1 : -1)); }
  });
}

const deviceControls = document.querySelector('[data-device-controls]');
if (deviceControls) {
  const figure = document.querySelector('.app-preview-case');
  const spread = deviceControls.querySelector('[data-device-spread]');
  const yaw = deviceControls.querySelector('[data-device-yaw]');
  const focusButtons = [...deviceControls.querySelectorAll('[data-device-focus]')];
  deviceControls.hidden = false;
  const update = () => {
    figure.style.setProperty('--device-spread',Number(spread.value) / 100);figure.style.setProperty('--device-yaw',`${yaw.value}deg`);
    deviceControls.querySelector('[data-spread-output]').textContent=`${spread.value}%`;
    deviceControls.querySelector('[data-yaw-output]').textContent=`${yaw.value}°`;
  };
  spread.addEventListener('input',update); yaw.addEventListener('input',update);
  const focus = selected => {
    focusButtons.forEach(button => button.setAttribute('aria-pressed',String(button.dataset.deviceFocus === selected)));
    figure.querySelectorAll('.device-unit').forEach((device,index) => {
      device.classList.toggle('is-muted',selected !== 'all' && String(index) !== selected);
      device.classList.toggle('is-highlighted',String(index) === selected);
    });
  };
  focusButtons.forEach(button => button.addEventListener('click',() => focus(button.dataset.deviceFocus)));
  deviceControls.querySelector('[data-device-reset]').addEventListener('click',() => { spread.value = yaw.value = 0; update(); focus('all'); });
}

const world = document.getElementById('hero-world');
if (world) import('/hero-3d.js').then(({initProjectWorld}) => initProjectWorld(world,{motion})).catch(() => {
  // Keep the real screenshot poster and normal links if WebGL cannot start.
  world.classList.add('has-static-preview');
});
