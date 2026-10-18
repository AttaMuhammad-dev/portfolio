const systemStories={
  web:{category:'MERN / FULL-STACK WEB',title:'From the first click\nto the stored record.',description:'In Shape Up, the React interface connects to Express services and MongoDB for personal fitness records. My web projects also include Python and Flask.',layers:[['React','Interface & application state'],['Express','Requests & application logic'],['MongoDB','Personal records']],slug:'shape-up',name:'Shape Up'},
  mobile:{category:'FLUTTER / CROSS-PLATFORM APPLICATIONS',title:'One application.\nDifferent screens.',description:'TechNova brings catalog browsing, comparison and a shopping cart together in Flutter, with Firebase services behind the interface. The browser demo makes the project easy to explore.',layers:[['Flutter','Application & shared interface'],['Firebase Authentication','Customer sign-in'],['Firestore','Catalog & customer records']],slug:'technova',name:'TechNova'},
  ai:{category:'AI / RETRIEVAL-AUGMENTED GENERATION',title:'Information,\nwith its sources in reach.',description:'Commecs AI Assistant connects public college material with Gemini and retrieval to support multilingual questions. Its case study records provider dependencies and current verification.',layers:[['Public sources','College material & documents'],['Gemini & retrieval','Context for a question'],['Linked answers','Responses with source cards']],slug:'commecs-ai-assistant',name:'Commecs AI Assistant'}
};

export function startExperience({motion:initialMotion}) {
  let motion=initialMotion;
  document.documentElement.classList.add('experience-ready');
  document.addEventListener('portfolio:motion',event=>{
    motion=event.detail.enabled;
    if(!motion){
      halo.classList.remove('is-tracking');
      document.querySelectorAll('[style*="--magnet"]').forEach(element=>{element.style.removeProperty('--magnet-x');element.style.removeProperty('--magnet-y');});
      depthTargets.forEach(element=>{element.style.setProperty('--depth-angle','0deg');element.style.setProperty('--depth-y','0px');element.style.setProperty('--depth-scale','1');element.style.setProperty('--chapter-turn','0deg');});
    }
    updateDepth();
  });
  let navigating=false;
  document.addEventListener('click',event=>{
    const link=event.target.closest('a[href]');
    if(!motion||navigating||event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey||!link||link.target||link.hasAttribute('download'))return;
    const destination=new URL(link.href);
    if(destination.origin!==location.origin||destination.pathname===location.pathname)return;
    event.preventDefault();navigating=true;document.body.classList.add('route-leaving');
    setTimeout(()=>location.assign(destination.href),140);
  });
  addEventListener('pageshow',()=>{navigating=false;document.body.classList.remove('route-leaving');});

  document.querySelectorAll('.visual-depth>img,.case-image>img').forEach(img=>{
    const frame=document.createElement('div'),bar=document.createElement('div');frame.className='browser-frame';bar.className='browser-chrome';bar.setAttribute('aria-hidden','true');
    for(let i=0;i<3;i++)bar.append(document.createElement('i'));
    const address=document.createElement('span'),live=img.closest('.project-row')?.querySelector('.project-links a[target="_blank"]')??document.querySelector('.case-actions a[target="_blank"]');
    address.textContent=live?new URL(live.href).hostname:'Project preview';bar.append(address);img.before(frame);frame.append(bar,img);
  });

  // Preserve real heading text and semantics; wrappers only provide staggered motion.
  const headings=[...document.querySelectorAll('h1,h2')].filter(h=>!h.closest('dialog,.lab-project,.system-story'));
  for(const heading of headings){
    const walker=document.createTreeWalker(heading,NodeFilter.SHOW_TEXT),texts=[];
    while(walker.nextNode())if(walker.currentNode.textContent.trim()&&!walker.currentNode.parentElement.closest('[aria-hidden="true"]'))texts.push(walker.currentNode);
    let order=0;
    for(const node of texts){
      const fragment=document.createDocumentFragment();
      node.textContent.split(/(\s+)/).forEach(part=>{
        if(!part.trim()){fragment.append(document.createTextNode(part));return;}
        const mask=document.createElement('span'),word=document.createElement('span');mask.className='word-mask';word.className='heading-word';word.textContent=part;word.style.setProperty('--word-order',order++);mask.append(word);fragment.append(mask);
      });node.replaceWith(fragment);
    }
    heading.classList.add('kinetic-heading');
  }
  if('IntersectionObserver' in window){
    const headingObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('heading-visible');headingObserver.unobserve(entry.target);}}),{threshold:.12});headings.forEach(h=>headingObserver.observe(h));
  }else headings.forEach(h=>h.classList.add('heading-visible'));

  const strip=document.querySelector('.craft-strip>.shell');
  if(strip){const repeat=strip.cloneNode(true);repeat.removeAttribute('class');repeat.className='craft-repeat';repeat.setAttribute('aria-hidden','true');strip.classList.add('craft-original');const track=document.createElement('div');track.className='craft-track';strip.parentNode.insertBefore(track,strip);track.append(strip,repeat);}

  const finePointer=matchMedia('(hover:hover) and (pointer:fine)');
  const halo=document.createElement('div');halo.className='pointer-halo';halo.setAttribute('aria-hidden','true');document.body.append(halo);
  let pointerFrame;
  document.addEventListener('pointermove',event=>{
    if(!motion||!finePointer.matches||event.pointerType!=='mouse')return;
    const {clientX:x,clientY:y}=event;halo.classList.add('is-tracking');
    if(pointerFrame)cancelAnimationFrame(pointerFrame);
    pointerFrame=requestAnimationFrame(()=>{halo.style.setProperty('--pointer-x',`${x}px`);halo.style.setProperty('--pointer-y',`${y}px`);pointerFrame=undefined;});
  },{passive:true});
  document.documentElement.addEventListener('pointerleave',()=>halo.classList.remove('is-tracking'));
  document.querySelectorAll('.button,.nav-contact,.lab-project>a,.system-case-link').forEach(button=>{
    button.addEventListener('pointermove',event=>{if(!motion||!finePointer.matches)return;const box=button.getBoundingClientRect();button.style.setProperty('--magnet-x',`${(event.clientX-box.left-box.width/2)*.10}px`);button.style.setProperty('--magnet-y',`${(event.clientY-box.top-box.height/2)*.15}px`);});
    button.addEventListener('pointerleave',()=>{button.style.setProperty('--magnet-x','0px');button.style.setProperty('--magnet-y','0px');});
  });

  const ambient=[...document.querySelectorAll('.build-lab,.craft-strip,.chapter-sculpture,.contact-section')];
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('motion-in-view',entry.isIntersecting)),{rootMargin:'40px'});
    ambient.forEach(element=>observer.observe(element));
  }else ambient.forEach(element=>element.classList.add('motion-in-view'));
  const updateVisibility=()=>document.documentElement.classList.toggle('page-hidden',document.hidden);
  document.addEventListener('visibilitychange',updateVisibility);updateVisibility();

  const depthTargets=[...document.querySelectorAll('.project-stage,.case-image,.chapter-sculpture,.about-stamp')],inView=new Set();
  if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting?inView.add(e.target):inView.delete(e.target)),{rootMargin:'120px'});depthTargets.forEach(e=>observer.observe(e));}else depthTargets.forEach(e=>inView.add(e));
  let scrollFrame;
  function updateDepth(){
    scrollFrame=undefined;
    const compact=matchMedia('(max-width:780px), (pointer:coarse)').matches;
    const measurements=[...inView].map(element=>({element,box:element.getBoundingClientRect()}));
    measurements.forEach(({element,box})=>{
      const progress=Math.max(-1,Math.min(1,(box.top+box.height/2-innerHeight/2)/innerHeight));
      element.style.setProperty('--depth-angle',`${motion?progress*(compact?1.5:4):0}deg`);
      element.style.setProperty('--depth-y',`${motion?progress*(compact?4:12):0}px`);
      element.style.setProperty('--depth-scale',String(motion?1-Math.abs(progress)*(compact?.006:.018):1));
      element.style.setProperty('--chapter-turn',`${motion?progress*(compact?8:16):0}deg`);
    });
  }
  addEventListener('scroll',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateDepth);},{passive:true});
  addEventListener('resize',()=>{if(!scrollFrame)scrollFrame=requestAnimationFrame(updateDepth);},{passive:true});updateDepth();

  document.querySelectorAll('.case-image:not(.app-preview-case)').forEach(figure=>{
    figure.addEventListener('pointermove',event=>{if(!motion||!finePointer.matches)return;const box=figure.getBoundingClientRect();figure.style.setProperty('--case-yaw',`${(event.clientX-box.left-box.width/2)/box.width*5}deg`);});
    figure.addEventListener('pointerleave',()=>figure.style.setProperty('--case-yaw','0deg'));
  });

  const world=document.getElementById('system-world');
  if(world){
    const buttons=[...document.querySelectorAll('[data-system]')];
    buttons.forEach(button=>button.addEventListener('click',()=>{
      const mode=button.dataset.system,story=systemStories[mode];if(!story)return;
      buttons.forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
      document.getElementById('system-category').textContent=story.category;
      const title=document.getElementById('system-title');title.replaceChildren();story.title.split('\n').forEach((line,i)=>{if(i)title.append(document.createElement('br'));title.append(document.createTextNode(line));});
      document.getElementById('system-description').textContent=story.description;
      const layers=document.getElementById('system-layers');layers.replaceChildren(...story.layers.map(([name,description],i)=>{const li=document.createElement('li'),number=document.createElement('span'),text=document.createElement('div'),strong=document.createElement('strong'),small=document.createElement('small');number.textContent=`0${i+1}`;strong.textContent=name;small.textContent=description;text.append(strong,small);li.append(number,text);return li;}));
      const link=document.getElementById('system-case');link.href=`/projects/${story.slug}/`;link.replaceChildren(document.createTextNode(`Explore ${story.name} `));const arrow=document.createElement('span');arrow.setAttribute('aria-hidden','true');arrow.textContent='↗';link.append(arrow);
      world.dataset.mode=mode;world.dispatchEvent(new CustomEvent('portfolio:system',{detail:{mode}}));
      const storyElement=document.querySelector('.system-story');storyElement.getAnimations().forEach(a=>a.cancel());
      if(motion)storyElement.animate([{opacity:.35,transform:'translateY(7px)'},{opacity:1,transform:'none'}],{duration:360,easing:'cubic-bezier(.22,1,.36,1)'});
    }));
    let started=false;
    const start=()=>{if(started)return;started=true;import('/hero-3d.js').then(({initStackWorld})=>initStackWorld(world,{motion})).catch(()=>world.classList.add('has-static-preview'));};
    if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){start();observer.disconnect();}},{rootMargin:'250px'});observer.observe(world);}else start();
  }
}
