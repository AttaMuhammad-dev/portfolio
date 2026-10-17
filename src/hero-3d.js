import {Scene,PerspectiveCamera,WebGLRenderer,Group,Mesh,MeshStandardMaterial,MeshBasicMaterial,HemisphereLight,DirectionalLight,PointLight,PlaneGeometry,SphereGeometry,TorusGeometry,CanvasTexture,SRGBColorSpace,ACESFilmicToneMapping,MathUtils} from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

export async function initProjectWorld(world, options) {
  const canvas = world.querySelector('canvas');
  const renderer = new WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.65));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  const scene = new Scene();
  const camera = new PerspectiveCamera(34,1,.1,40);
  camera.position.set(0,.12,8.7);
  const assembly = new Group();
  scene.add(assembly);
  scene.add(new HemisphereLight(0xf6f3da,0x58795b,3));
  const key = new DirectionalLight(0xffffff,4.2); key.position.set(-3,5,5); scene.add(key);
  const rim = new DirectionalLight(0xc5e6a4,3.4); rim.position.set(4,2,-2); scene.add(rim);
  const fill = new PointLight(0xffe3b1,18,12); fill.position.set(2,-2,4); scene.add(fill);
  const green = new MeshStandardMaterial({color:0x254c3f,metalness:.48,roughness:.29});
  const edge = new MeshStandardMaterial({color:0x778b5d,metalness:.5,roughness:.38});
  const dark = new MeshStandardMaterial({color:0x142b24,metalness:.34,roughness:.33});
  const cream = new MeshStandardMaterial({color:0xdce5c7,metalness:.2,roughness:.49});
  const glow = new MeshStandardMaterial({color:0xb0c987,metalness:.35,roughness:.25});
  const rust = new MeshStandardMaterial({color:0xb37b50,metalness:.4,roughness:.38});
  const screenCache = new Map();
  const texture = async (url,w,h) => {
    const id = `${url}:${w}:${h}`;
    if (screenCache.has(id)) return screenCache.get(id);
    const promise = (async () => {
      const image = new Image(); image.src = url; await image.decode();
      const surface = document.createElement('canvas'); surface.width = w; surface.height = h;
      const context = surface.getContext('2d');
      context.fillStyle = '#11202c'; context.fillRect(0,0,w,h);
      const scale = Math.min(w / image.naturalWidth,h / image.naturalHeight);
      const width = image.naturalWidth * scale,height = image.naturalHeight * scale;
      context.drawImage(image,(w-width)/2,(h-height)/2,width,height);
      const map = new CanvasTexture(surface); map.colorSpace = SRGBColorSpace;
      map.anisotropy = Math.min(4,renderer.capabilities.getMaxAnisotropy());
      return map;
    })();
    screenCache.set(id,promise); return promise;
  };
  const box = (w,h,d,material,r=.08) => new Mesh(new RoundedBoxGeometry(w,h,d,3,r),material);
  const ball = (radius,material) => new Mesh(new SphereGeometry(radius,18,12),material);
  const plane = (w,h,map) => new Mesh(new PlaneGeometry(w,h),new MeshBasicMaterial({map,toneMapped:false}));
  const floating = [];
  const makeFloat = (object,phase) => { floating.push({object,phase,y:object.position.y}); return object; };
  function textTile(lines) {
    const surface = document.createElement('canvas'); surface.width=512; surface.height=320;
    const c = surface.getContext('2d'); c.fillStyle='#173c30'; c.fillRect(0,0,512,320);
    c.fillStyle='#adc58c'; c.font='18px Segoe UI, sans-serif'; c.fillText('BUILT WITH',42,54);
    c.fillStyle='#eff1df'; c.font='500 30px Segoe UI, sans-serif';
    lines.slice(0,3).forEach((line,i)=>c.fillText(line,42,113+i*56));
    const map = new CanvasTexture(surface); map.colorSpace=SRGBColorSpace;
    const tile = new Group(); tile.add(box(1.65,1.06,.09,green));
    const face = plane(1.53,.95,map); face.position.z=.05; tile.add(face); return tile;
  }
  async function webProject(p) {
    const group = new Group();
    const browser = new Group();
    browser.add(box(4.30,3.05,.20,green,.11));
    const map = await texture(`/assets/${p.image}`,1024,675);
    const display = plane(4.04,2.66,map); display.position.set(0,-.10,.106); browser.add(display);
    const toolbar = box(4.05,.16,.025,dark,.035); toolbar.position.set(0,1.31,.11); browser.add(toolbar);
    [rust,glow,cream].forEach((material,i)=>{const dot=ball(.024,material);dot.position.set(-1.85+i*.09,1.31,.14);browser.add(dot);});
    browser.position.set(-.30,.30,0); browser.rotation.z=-.035; group.add(browser);
    const back = box(4.47,3.18,.07,edge,.12); back.position.set(-.47,.48,-.31); back.rotation.z=.035; group.add(back);
    const back2 = box(4.55,3.22,.045,cream,.10); back2.position.set(-.59,.56,-.53); back2.rotation.z=.095; group.add(back2);
    const tile = textTile(p.stack); tile.position.set(1.55,-1.04,.68); tile.rotation.set(.06,-.1,.09); group.add(tile); makeFloat(tile,.6);
    const node = box(.49,.49,.42,glow,.09); node.position.set(-2.13,-1.28,.55); node.rotation.set(.45,.4,.2);group.add(node);makeFloat(node,2.1);
    return group;
  }
  async function phone(url,ios=false) {
    const group = new Group(); const w=1.24,h=2.69;
    group.add(box(w,h,.17,dark,ios?.13:.105));
    const metal=box(w+.035,h+.025,.055,edge,ios?.13:.105);metal.position.z=-.065;group.add(metal);
    const map=await texture(url,390,844);
    const display=plane(1.105,2.39,map);display.position.set(0,-.006,.092);group.add(display);
    const camera=ios?box(.29,.047,.013,dark,.018):ball(.019,dark);camera.position.set(0,1.18,.104);group.add(camera);
    const home=box(.29,.018,.01,cream,.008);home.position.set(0,-1.26,.094);group.add(home);
    return group;
  }
  async function mobileProject() {
    const group=new Group();
    const android=await phone('/assets/technova-mobile.jpg');android.position.set(-1.72,-.07,.35);android.rotation.set(.03,-.13,-.075);group.add(android);makeFloat(android,.5);
    const ios=await phone('/assets/technova-mobile.jpg',true);ios.position.set(-.21,-.23,.90);ios.rotation.set(-.02,.08,.045);group.add(ios);makeFloat(ios,1.9);
    const tablet=new Group();tablet.add(box(1.96,2.80,.13,green,.10));
    const tabletMap=await texture('/assets/technova-tablet.jpg',656,944);const tabletFace=plane(1.78,2.56,tabletMap);tabletFace.position.z=.071;tablet.add(tabletFace);
    const tabletCamera=ball(.013,dark);tabletCamera.position.set(0,1.33,.076);tablet.add(tabletCamera);
    tablet.position.set(1.50,.17,-.22);tablet.rotation.set(.02,-.16,.065);group.add(tablet);makeFloat(tablet,3.4);
    return group;
  }
  const orbit=new Group();
  const ring=new Mesh(new TorusGeometry(2.40,.008,8,120),new MeshStandardMaterial({color:0xa2b888,metalness:.4,roughness:.5,transparent:true,opacity:.60}));
  ring.rotation.set(.28,.85,-.40);ring.position.set(.10,.03,-.6);orbit.add(ring);
  const marker=ball(.061,rust);marker.position.set(-2.02,1.06,-.65);orbit.add(marker);
  assembly.add(orbit);
  const projects=JSON.parse(document.getElementById('project-data').textContent);
  const models=new Map();
  const modelFor=p=>{
    if(!models.has(p.slug))models.set(p.slug,(p.slug==='technova'?mobileProject():webProject(p)).then(group=>{group.visible=false;assembly.add(group);return group;}));
    return models.get(p.slug);
  };
  let motion=options.motion,visible=true,frame=0,previous=0,time=0;
  let targetYaw=0,targetPitch=0,yaw=0,pitch=0,pointerX=0,pointerY=0;
  let drag=null,activeSlug,selection=0,transition=1;
  const controls=world.querySelector('.world-controls');
  const links=[...document.querySelectorAll('[data-scene-project]')];
  const abort=new AbortController(); const signal=abort.signal;
  const request=()=>{if(!frame&&!document.hidden&&visible)frame=requestAnimationFrame(draw);};
  function resize(){const w=world.clientWidth,h=world.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();request();}
  function draw(timestamp){
    frame=0;if(document.hidden||!visible)return;
    const delta=Math.min((timestamp-(previous||timestamp))/1000,.05);previous=timestamp;
    if(motion)time+=delta;
    yaw=MathUtils.lerp(yaw,targetYaw,.10);pitch=MathUtils.lerp(pitch,targetPitch,.10);transition=MathUtils.lerp(transition,1,.10);
    assembly.rotation.set(-.055+pitch+(motion?pointerY*.025:0),-.22+yaw+(motion?pointerX*.045:0),-.035);
    assembly.position.y=(1-transition)*-.18;
    assembly.scale.setScalar(.96+transition*.04);
    floating.forEach(({object,phase,y})=>{if(object.parent?.visible)object.position.y=y+(motion?Math.sin(time*.62+phase)*.045:0);});
    renderer.render(scene,camera);canvas.dataset.rendered='true';
    if(motion||Math.abs(yaw-targetYaw)+Math.abs(pitch-targetPitch)>.001||transition<.999)request();
  }
  function updateCaption(p){
    document.getElementById('lab-title').textContent=p.name;
    document.getElementById('lab-stack').textContent=p.slug==='technova'?'Flutter · Firebase · Browser form-factor previews':p.stack.slice(0,3).join(' · ');
    document.getElementById('lab-index').textContent=`${p.number} / ${String(projects.length).padStart(2,'0')}`;
    const link=document.getElementById('lab-project-link');link.href=`/projects/${p.slug}/`;link.setAttribute('aria-label',`Explore ${p.name}`);
    links.forEach(link=>{if(link.dataset.sceneProject===p.slug)link.setAttribute('aria-current','true');else link.removeAttribute('aria-current');});
    world.querySelector('.coordinate-top').textContent=p.slug==='technova'?'BROWSER FORM-FACTOR PREVIEWS':'WEB / SERVICES / DATA';
    canvas.setAttribute('aria-label',`${p.name} in a rotatable 3D preview. Use the arrow keys to rotate or choose a project below.`);
  }
  async function select(slug,announce=true){
    const p=projects.find(p=>p.slug===slug);if(!p)return;
    const token=++selection;
    const group=await modelFor(p);if(token!==selection)return;
    for(const [key,promise] of models)promise.then(model=>{model.visible=key===slug;});
    group.visible=true;activeSlug=slug;world.dataset.sceneProject=slug;
    updateCaption(p);transition=motion?0:1;
    if(announce)document.getElementById('scene-status').textContent=`Previewing ${p.name}. ${p.slug==='technova'?'Device frames show browser previews; native iOS testing is pending.':'Use the explore link to read the project.'}`;
    request();
  }
  await select(projects[0].slug,false);
  resize();canvas.hidden=false;world.classList.add('is-ready');world.dataset.renderMode='webgl';controls.hidden=false;
  links.forEach(link=>link.addEventListener('click',event=>{event.preventDefault();select(link.dataset.sceneProject).catch(()=>{location.href=link.href;});},{signal}));
  const reset=()=>{targetYaw=targetPitch=pointerX=pointerY=0;request();};
  world.querySelectorAll('[data-world-rotate]').forEach(button=>button.addEventListener('click',()=>{targetYaw=MathUtils.clamp(targetYaw+Number(button.dataset.worldRotate)*.22,-.65,.65);request();},{signal}));
  world.querySelector('[data-world-reset]').addEventListener('click',reset,{signal});
  canvas.addEventListener('pointerdown',event=>{if(event.button!==0)return;drag={id:event.pointerId,x:event.clientX,y:event.clientY,yaw:targetYaw,pitch:targetPitch};canvas.setPointerCapture(event.pointerId);canvas.classList.add('is-dragging');},{signal});
  canvas.addEventListener('pointermove',event=>{
    const rect=canvas.getBoundingClientRect();
    if(drag&&event.pointerId===drag.id){targetYaw=MathUtils.clamp(drag.yaw+(event.clientX-drag.x)*.004,-.65,.65);targetPitch=MathUtils.clamp(drag.pitch+(event.clientY-drag.y)*.0025,-.23,.23);request();}
    else if(event.pointerType==='mouse'&&motion){pointerX=(event.clientX-rect.left)/rect.width-.5;pointerY=(event.clientY-rect.top)/rect.height-.5;request();}
  },{signal});
  const release=()=>{drag=null;canvas.classList.remove('is-dragging');};
  canvas.addEventListener('pointerup',release,{signal});canvas.addEventListener('pointercancel',release,{signal});
  canvas.addEventListener('pointerleave',()=>{pointerX=pointerY=0;request();},{signal});
  canvas.addEventListener('keydown',event=>{
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home'].includes(event.key))return;
    event.preventDefault();
    if(event.key==='Home')reset();
    else if(event.key==='ArrowLeft'||event.key==='ArrowRight')targetYaw=MathUtils.clamp(targetYaw+(event.key==='ArrowRight'?.18:-.18),-.65,.65);
    else targetPitch=MathUtils.clamp(targetPitch+(event.key==='ArrowDown'?.09:-.09),-.23,.23);
    request();
  },{signal});
  const observer=new ResizeObserver(resize);observer.observe(world);
  const visibility=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){previous=0;request();}else if(frame){cancelAnimationFrame(frame);frame=0;}},{threshold:0});visibility.observe(world);
  document.addEventListener('portfolio:motion',event=>{motion=event.detail.enabled;request();},{signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0;}else{previous=0;request();}},{signal});
  canvas.addEventListener('webglcontextlost',event=>{
    event.preventDefault();if(frame)cancelAnimationFrame(frame);frame=0;abort.abort();observer.disconnect();visibility.disconnect();
    canvas.hidden=true;controls.hidden=true;world.classList.remove('is-ready');world.dataset.renderMode='poster';updateCaption(projects[0]);
  },{once:true});
  // Warm the remaining small image textures after the first useful frame is visible.
  const warm=()=>projects.filter(p=>p.slug!==activeSlug).forEach(p=>modelFor(p).catch(()=>{}));
  if('requestIdleCallback' in window)requestIdleCallback(warm,{timeout:2200});else setTimeout(warm,1000);
  request();
}
