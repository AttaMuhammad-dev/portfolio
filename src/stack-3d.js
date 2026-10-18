import {Scene,PerspectiveCamera,WebGLRenderer,Group,Mesh,MeshStandardMaterial,MeshBasicMaterial,HemisphereLight,DirectionalLight,PlaneGeometry,SphereGeometry,TorusGeometry,TubeGeometry,CatmullRomCurve3,Vector3,CanvasTexture,SRGBColorSpace,ACESFilmicToneMapping,MathUtils} from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import {damp,sceneQuality,animateSurface} from './scene-motion.js';

const stacks={
  web:[['React','INTERFACE'],['Express','SERVICES'],['MongoDB','DATA']],
  mobile:[['Flutter','INTERFACE'],['Firebase Auth','IDENTITY'],['Firestore','DATA']],
  ai:[['Public sources','KNOWLEDGE'],['Gemini','RETRIEVAL + AI'],['Linked answers','RESPONSES']]
};

export function initStackWorld(world,{motion:initialMotion}) {
  const canvas=world.querySelector('canvas');
  let quality=sceneQuality();
  const renderer=new WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'low-power'});
  renderer.setPixelRatio(quality.pixelRatio);renderer.outputColorSpace=SRGBColorSpace;world.dataset.quality=quality.compact?'compact':'full';
  renderer.toneMapping=ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
  const scene=new Scene(),camera=new PerspectiveCamera(34,1,.1,35),assembly=new Group();
  camera.position.set(0,.25,9);scene.add(assembly);
  scene.add(new HemisphereLight(0xf4f7d6,0x143c31,3));
  const key=new DirectionalLight(0xffffff,4);key.position.set(-4,5,6);scene.add(key);
  const rim=new DirectionalLight(0xb1d790,4.5);rim.position.set(4,1,2);scene.add(rim);
  const metal=new MeshStandardMaterial({color:0x456d52,metalness:.62,roughness:.25});
  const pale=new MeshStandardMaterial({color:0xb4c988,metalness:.58,roughness:.28});
  const glow=new MeshBasicMaterial({color:0xd9e8a9});
  const lineMaterial=new MeshStandardMaterial({color:0x799a65,metalness:.5,roughness:.35,transparent:true,opacity:.6});
  const nodes=[],textures=new Map();
  function label(title,caption,index){
    const id=title+caption;if(textures.has(id))return textures.get(id);
    const sheet=document.createElement('canvas');sheet.width=768;sheet.height=510;
    const c=sheet.getContext('2d');
    const g=c.createLinearGradient(0,0,768,510);g.addColorStop(0,'#2f5947');g.addColorStop(1,'#15392f');c.fillStyle=g;c.fillRect(0,0,768,510);
    c.strokeStyle='#a4c180';c.lineWidth=2;c.strokeRect(27,27,714,456);
    c.fillStyle='#b1c68b';c.font='22px Segoe UI, sans-serif';c.fillText(`0${index+1}  /  ${caption}`,60,83);
    c.strokeStyle='#9ab978';c.lineWidth=3;c.beginPath();c.arc(108,184,38,0,Math.PI*2);c.stroke();
    c.font='32px Georgia, serif';c.textAlign='center';c.fillText(['↗','↔','◎'][index],108,195);c.textAlign='left';
    c.fillStyle='#f0f2de';c.font=`500 ${title.length>12?'45':'52'}px Segoe UI, sans-serif`;c.fillText(title,60,320);
    c.fillStyle='#a4bd8c';c.font='19px Segoe UI, sans-serif';c.fillText(['What people experience','Where requests connect','What the app remembers'][index],60,378);
    const texture=new CanvasTexture(sheet);texture.colorSpace=SRGBColorSpace;textures.set(id,texture);return texture;
  }
  const locations=[[-2.23,.16,.03],[0,-.23,.65],[2.23,.23,-.16]];
  locations.forEach((position,index)=>{
    const node=new Group();node.position.set(...position);node.rotation.set(-.14,index===1?0:index===0?.14:-.14,index===0?-.07:index===2?.07:0);
    node.add(new Mesh(new RoundedBoxGeometry(1.96,1.43,.20,3,.10),metal));
    const face=new Mesh(new PlaneGeometry(1.82,1.25),new MeshBasicMaterial({map:label(...stacks.web[index],index),toneMapped:false}));face.position.z=.106;node.add(face);
    for(let layer=1;layer<=2;layer++){
      const back=new Mesh(new RoundedBoxGeometry(2.04,1.49,.04,2,.08),layer===1?pale:metal);back.position.set(-.06*layer,.08*layer,-.20*layer);back.rotation.z=.04*layer;node.add(back);
    }
    const pedestal=new Mesh(new TorusGeometry(.50,.018,8,60),pale);pedestal.rotation.x=1.21;pedestal.position.set(0,-1.17,-.06);node.add(pedestal);
    assembly.add(node);nodes.push({node,face,base:node.position.clone(),index});
  });
  const flows=[];
  for(let index=0;index<2;index++){
    const a=new Vector3(...locations[index]),b=new Vector3(...locations[index+1]);
    const curve=new CatmullRomCurve3([a.clone().add(new Vector3(.66,.18,.15)),a.clone().lerp(b,.5).add(new Vector3(0,1.2,.18)),b.clone().add(new Vector3(-.66,.20,.15))]);
    const tube=new Mesh(new TubeGeometry(curve,54,.012,6,false),lineMaterial);assembly.add(tube);
    for(let n=0;n<3;n++){const dot=new Mesh(new SphereGeometry(n===0?.048:.027,12,8),glow);assembly.add(dot);flows.push({dot,curve,offset:n*.31+index*.15});}
  }
  const orbit=new Mesh(new TorusGeometry(3.55,.008,6,140),lineMaterial);orbit.rotation.set(1.05,.25,.13);orbit.position.set(0,-.70,-.45);assembly.add(orbit);
  const compass=new Group();
  for(let i=0;i<7;i++){const dot=new Mesh(new SphereGeometry(.018,8,6),pale);const angle=i/7*Math.PI*2;dot.position.set(Math.cos(angle)*3.7,Math.sin(angle)*1.6,-.9);compass.add(dot);}assembly.add(compass);
  let motion=initialMotion,visible=false,frame=0,time=0,previous=0,transition=1,pointerX=0,pointerY=0,hoverX=0,hoverY=0,mode='web';
  const request=()=>{if(!frame&&visible&&!document.hidden)frame=requestAnimationFrame(draw);};
  let sizeKey='';
  function resize(){const w=world.clientWidth,h=world.clientHeight;if(!w||!h)return;quality=sceneQuality();const key=`${w}:${h}:${quality.pixelRatio}`;if(key===sizeKey)return;sizeKey=key;renderer.setPixelRatio(quality.pixelRatio);renderer.setSize(w,h,false);world.dataset.quality=quality.compact?'compact':'full';camera.aspect=w/h;camera.position.z=Math.max(8.9,4.1/(Math.tan(MathUtils.degToRad(camera.fov/2))*camera.aspect));camera.updateProjectionMatrix();request();}
  function select(next){if(!stacks[next])return;const changed=mode!==next;mode=next;nodes.forEach(({face,index})=>{face.material.map=label(...stacks[next][index],index);face.material.needsUpdate=true;});transition=motion?0:1;world.dataset.mode=next;canvas.setAttribute('aria-label',`Illustrative 3D architecture: ${stacks[next].map(x=>x[0]).join(' connected to ')}.`);if(changed)animateSurface(canvas,motion);request();}
  function draw(timestamp){
    frame=0;if(!visible||document.hidden)return;
    if(motion&&previous&&timestamp-previous<quality.interval-1){request();return;}
    const delta=Math.min(previous?(timestamp-previous)/1000:1/60,.08);previous=timestamp;if(motion)time+=delta;
    transition=motion?damp(transition,1,7,delta):1;hoverX=damp(hoverX,pointerX,5,delta);hoverY=damp(hoverY,pointerY,5,delta);
    assembly.rotation.set(-.02+(motion?hoverY*.035:0),-.10+(motion?hoverX*.08+Math.sin(time*.13)*.025:0),-.015);
    nodes.forEach(({node,base,index})=>{node.position.y=base.y+(motion?Math.sin(time*.65+index*1.2)*.065:0)-(1-transition)*.24;node.rotation.x=-.14+(motion?Math.sin(time*.35+index)*.035:0);});
    flows.forEach(({dot,curve,offset})=>dot.position.copy(curve.getPoint((time*.13+offset)%1)));
    compass.rotation.z=motion?Math.sin(time*.1)*.05:0;renderer.render(scene,camera);canvas.dataset.rendered='true';world.dataset.sceneState=motion?'playing':'still';
    if(motion||transition<.999)request();
  }
  const controller=new AbortController(),{signal}=controller;
  world.addEventListener('pointermove',event=>{if(!motion||event.pointerType!=='mouse')return;const rect=world.getBoundingClientRect();pointerX=(event.clientX-rect.left)/rect.width-.5;pointerY=(event.clientY-rect.top)/rect.height-.5;request();},{signal});
  world.addEventListener('pointerleave',()=>{pointerX=pointerY=0;request();},{signal});
  world.addEventListener('portfolio:system',event=>select(event.detail.mode),{signal});
  document.addEventListener('portfolio:motion',event=>{motion=event.detail.enabled;previous=0;canvas.getAnimations().forEach(a=>a.cancel());request();},{signal});
  document.addEventListener('visibilitychange',()=>{if(document.hidden&&frame){cancelAnimationFrame(frame);frame=0;}else{previous=0;request();}},{signal});
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible){previous=0;request();}else{if(frame)cancelAnimationFrame(frame);frame=0;world.dataset.sceneState='offscreen';}},{threshold:0});observer.observe(world);
  const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(world);
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();if(frame)cancelAnimationFrame(frame);controller.abort();observer.disconnect();resizeObserver.disconnect();renderer.dispose();canvas.hidden=true;world.classList.remove('is-ready');world.dataset.renderMode='poster';},{once:true});
  select(world.dataset.mode||mode);resize();canvas.hidden=false;world.classList.add('is-ready');world.dataset.renderMode='webgl';
  return {mode};
}
