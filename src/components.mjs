const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<span aria-hidden="true">↗</span>';

export function interactiveHero(data) {
  return `<section class="immersive-hero shell" aria-labelledby="hero-name">
    <div class="hero-intro"><p class="eyebrow availability"><span class="status-dot"></span>OPEN TO JUNIOR & TRAINEE ROLES</p>
      <p class="hero-kicker">FULL-STACK DEVELOPER · KARACHI, PAKISTAN</p>
      <h1 id="hero-name">Atta<br><span class="hero-name-line"><em>Muhammad</em><span class="name-period">.</span></span></h1>
      <p class="hero-statement">Web & mobile applications.<br><span>Made to be experienced.</span></p>
      <p class="hero-description">${escape(data.intro)}<br> Explore what I’m building, and the journey behind it.</p>
      <div class="hero-cta"><a class="button button-dark" href="#work">Explore my work <span aria-hidden="true">↓</span></a><a class="text-link" href="/journey/">My journey ${arrow}</a></div>
      <div class="hero-footnote"><span class="mini-orbit" aria-hidden="true">✳</span><p>Developer by practice.<br><strong>Always a student of the craft.</strong></p></div>
    </div>
    <div class="build-lab" aria-label="Interactive project showcase">
      <div class="lab-heading"><span><span class="lab-dot"></span> THE BUILD SPACE</span><span class="lab-edition">SELECTED WORK / 2026</span></div>
      <div class="hero-world" id="hero-world"><div class="world-grid" aria-hidden="true"></div>
        <div class="world-poster" aria-hidden="true"><div class="poster-window"><div class="poster-toolbar"><i></i><i></i><i></i><span>commecs-ai-assistant</span></div><img src="/assets/commecs.jpg" alt="" aria-hidden="true" width="1200" height="880" fetchpriority="high"></div><div class="poster-phone"><img src="/assets/technova-mobile.jpg" alt="" aria-hidden="true" width="390" height="844"></div></div>
        <canvas id="hero-canvas" tabindex="0" role="img" aria-label="Rotatable 3D project preview. Use the left and right arrow keys to rotate, or choose a project below." hidden></canvas>
        <span class="world-coordinate coordinate-top" aria-hidden="true">WEB / MOBILE / AI</span><span class="world-coordinate coordinate-bottom" aria-hidden="true">BUILD · UNDERSTAND · IMPROVE</span>
        <div class="world-controls" hidden><span class="drag-hint"><span aria-hidden="true">⤢</span> Drag to explore</span><div><button type="button" data-world-spread aria-pressed="false">Separate layers</button><button type="button" data-world-rotate="-1" aria-label="Rotate project preview left">←</button><button type="button" data-world-rotate="1" aria-label="Rotate project preview right">→</button><button type="button" data-world-reset aria-label="Reset project preview rotation">Reset</button></div></div>
      </div>
      <div class="lab-project"><div><span class="lab-project-index" id="lab-index">01 / 04</span><h2 id="lab-title">Commecs AI Assistant</h2><p id="lab-stack">React · TypeScript · RAG</p></div><a id="lab-project-link" href="/projects/commecs-ai-assistant/" aria-label="Explore Commecs AI Assistant">${arrow}</a></div>
      <div class="lab-selector" aria-label="Choose a featured project">${data.projects.map((p,i)=>`<a href="/projects/${p.slug}/" data-scene-project="${p.slug}"${i===0?' aria-current="true"':''}><span>${p.number}</span>${p.slug==='commecs-ai-assistant'?'Commecs AI':escape(p.name)}</a>`).join('')}</div>
      <p class="lab-accessible-status sr-only" id="scene-status" aria-live="polite"></p>
    </div>
    <div class="hero-bottomline"><p><span class="status-dot"></span>AVAILABLE FOR MY NEXT CHAPTER</p><a href="#work">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a><p>WEB & CROSS-PLATFORM MOBILE</p></div>
  </section><div class="craft-strip"><div class="shell"><span>INTERFACES WITH INTENTION</span><b aria-hidden="true">✳</b><span>REACT & NODE.JS</span><b aria-hidden="true">✳</b><span>FLUTTER & FIREBASE</span><b aria-hidden="true">✳</b><span>PYTHON & FLASK</span></div></div>`;
}

export function connectedSystems() {
  return `<section class="systems-section" id="systems" aria-labelledby="systems-title"><div class="systems-glow" aria-hidden="true"></div><div class="shell"><div class="systems-heading"><div><p class="eyebrow">BEYOND THE SURFACE</p><h2 id="systems-title">Different screens.<br><em>Connected thinking.</em></h2></div><p>An interface is one part of the story.<br>Explore how the pieces come together in my projects.</p></div><div class="systems-layout"><div class="systems-visual"><div class="system-world" id="system-world"><div class="system-fallback" aria-hidden="true"><span>Interface</span><i>↔</i><span>Services</span><i>↔</i><span>Data</span></div><canvas id="system-canvas" aria-label="Illustrative 3D architecture: React interface, Express services and MongoDB data" role="img" hidden></canvas><span class="system-coordinate" aria-hidden="true">INTERFACE / SERVICES / DATA</span><span class="system-orbit-label" aria-hidden="true">THE PIECES, CONNECTED</span></div><p class="system-visual-note"><span class="status-dot"></span>Illustrative architecture · Built from my project stacks</p></div><div class="systems-copy"><div class="system-switcher" role="group" aria-label="Explore a development focus"><button type="button" data-system="web" aria-pressed="true">01 <span>Web</span></button><button type="button" data-system="mobile" aria-pressed="false">02 <span>Mobile</span></button><button type="button" data-system="ai" aria-pressed="false">03 <span>AI & retrieval</span></button></div><div class="system-story" aria-live="polite"><p class="eyebrow" id="system-category">MERN / FULL-STACK WEB</p><h3 id="system-title">From the first click<br>to the stored record.</h3><p id="system-description">In Shape Up, the React interface connects to Express services and MongoDB for personal fitness records. My web projects also include Python and Flask.</p><ol id="system-layers"><li><span>01</span><div><strong>React</strong><small>Interface & application state</small></div></li><li><span>02</span><div><strong>Express</strong><small>Requests & application logic</small></div></li><li><span>03</span><div><strong>MongoDB</strong><small>Personal records</small></div></li></ol><a class="system-case-link" id="system-case" href="/projects/shape-up/">Explore Shape Up <span aria-hidden="true">↗</span></a></div></div></div></div></section>`;
}

export function chapterSculpture() {
  return `<div class="chapter-sculpture" aria-hidden="true"><div class="sculpture-ring ring-one"></div><div class="sculpture-ring ring-two"></div><div class="sculpture-ring ring-three"></div><div class="sculpture-core"><span>am</span></div><i class="sculpture-satellite"></i></div>`;
}

export function interactiveProjectRow(p, media, helpers) {
  const {external,tags,projectCount}=helpers;
  return `<article class="project-row" data-category="${escape(p.category)}" data-slug="${p.slug}">
    <div class="project-stage"><a class="project-visual ${p.accent}${p.slug==='technova'?' app-preview':''}" href="/projects/${p.slug}/" aria-label="Read ${p.name} case study"><div class="visual-top"><span>${p.name}</span><span>${p.number} / ${projectCount}</span></div><div class="visual-depth">${media}</div><span class="visual-open" aria-hidden="true">↗</span></a><button class="quick-look" type="button" data-project="${p.slug}" hidden>Quick look <span aria-hidden="true">⤢</span></button></div>
    <div class="project-copy"><p class="eyebrow">${escape(p.category)} <span>/ ${p.year}</span></p><div class="project-heading"><span class="project-big-number" aria-hidden="true">${p.number}</span><h3><a href="/projects/${p.slug}/">${p.name}</a></h3></div><p class="project-tagline">${escape(p.tagline)}</p><p>${escape(p.summary)}</p>${tags(p)}<div class="project-links"><a class="button button-dark" href="/projects/${p.slug}/">The full story <span aria-hidden="true">→</span></a>${external(p.live,'Live demo')}${p.androidApk?`<a class="text-link" href="/projects/${p.slug}/#install">Android APK ↓</a>`:''}</div><p class="project-status"><span></span>${escape(p.statusDetail)}</p></div>
  </article>`;
}

export function skillCard(s,i) {
  const links=[['commecs-ai-assistant','Commecs AI Assistant'],['shape-up','Shape Up'],['technova','TechNova'],['edupredict','EduPredict'],['commecs-ai-assistant','Commecs AI Assistant'],['shape-up','Shape Up']];
  return `<details class="skill skill-disclosure"${i===0?' open':''}><summary><span class="skill-num">0${i+1}</span><h3>${escape(s.title)}</h3><p class="skill-tools">${escape(s.tools)}</p><span class="skill-open"><span class="skill-prompt">See it in practice</span><span class="skill-plus" aria-hidden="true">+</span></span></summary><div class="skill-detail"><p>${escape(s.evidence)}</p><a href="/projects/${links[i][0]}/">Explore ${links[i][1]} ${arrow}</a></div></details>`;
}

export function deviceControls(p) {
  if(p.slug!=='technova')return '';
  return `<div class="device-controls" data-device-controls hidden><div class="device-control-heading"><div><p class="eyebrow">EXPLORE THE FORM FACTORS</p><p>One Flutter project. Different ways to experience it.</p></div><button type="button" data-device-reset>Reset view <span aria-hidden="true">↺</span></button></div><div class="device-inputs"><label>Separate the devices <input type="range" min="0" max="100" value="0" step="1" data-device-spread aria-label="Device separation"></label><label>Rotate the view <input type="range" min="-22" max="22" value="0" step="1" data-device-yaw aria-label="Device preview rotation"></label></div><div class="device-focus" role="group" aria-label="Focus a device preview"><button type="button" data-device-focus="all" aria-pressed="true">All devices</button><button type="button" data-device-focus="0" aria-pressed="false">Android</button><button type="button" data-device-focus="1" aria-pressed="false">iOS browser</button><button type="button" data-device-focus="2" aria-pressed="false">Tablet browser</button></div><p class="small">Illustrative frames with browser captures. Original testing was on an Android emulator; native iOS testing is pending.</p></div>`;
}

export function projectDialog(projects) {
  const records=projects.map(({slug,name,number,category,summary,stack,features,live,source,image,androidApk})=>({slug,name,number,category,summary,stack,features,live,source,image,androidApk:!!androidApk}));
  return `<dialog class="project-dialog" id="project-dialog" aria-labelledby="quick-title"><div class="dialog-top"><span class="eyebrow">PROJECT QUICK LOOK</span><form method="dialog"><button class="dialog-close" aria-label="Close project preview">✕</button></form></div><div class="quick-layout"><div class="quick-media" id="quick-media"></div><div class="quick-copy"><p class="eyebrow" id="quick-category"></p><h2 id="quick-title"></h2><p id="quick-summary"></p><div class="tags" id="quick-tags"></div><ul id="quick-features"></ul><a class="button button-dark" id="quick-case" href="/#work">Read the case study <span aria-hidden="true">→</span></a><div class="quick-links"><a class="text-link" id="quick-live" target="_blank" rel="noopener noreferrer">Open live demo ↗</a><a class="text-link" id="quick-source" target="_blank" rel="noopener noreferrer">Source code ↗</a></div></div></div><div class="dialog-bottom"><span id="quick-count"></span><div><button type="button" id="quick-prev" aria-label="Previous project">←</button><button type="button" id="quick-next" aria-label="Next project">→</button></div></div></dialog><script id="project-data" type="application/json">${JSON.stringify(records).replace(/</g,'\\u003c')}</script>`;
}

