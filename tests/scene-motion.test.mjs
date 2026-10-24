import test from 'node:test';
import assert from 'node:assert/strict';
import {damp,sceneQuality} from '../src/scene-motion.js';

test('the same one-second gesture settles equally on different refresh rates',()=>{
  const results=[30,60,120].map(rate=>{
    let rotation=0;
    for(let frame=0;frame<rate;frame++)rotation=damp(rotation,.65,8,1/rate);
    return rotation;
  });
  assert.ok(results.every(value=>Math.abs(value-results[0])<1e-12));
  assert.ok(results[0]>.649 && results[0]<=.65);
});

test('hero keeps phone device density while bounding large render buffers',()=>{
  globalThis.matchMedia=()=>({matches:true});
  const phone=sceneQuality({sharp:true,width:390,height:330,ratio:3});
  assert.equal(phone.pixelRatio,3);
  const large=sceneQuality({sharp:true,width:1600,height:900,ratio:3});
  assert.ok(1600*900*large.pixelRatio**2<=1_500_001);
  assert.equal(phone.interval,1000/60);
  delete globalThis.matchMedia;
});

test('constrained phones conserve frames and texture density without hiding previews',()=>{
  globalThis.matchMedia=()=>({matches:true});
  const limited=sceneQuality({sharp:true,width:390,height:330,ratio:3,memory:2});
  assert.equal(limited.interval,1000/30);
  assert.equal(limited.pixelRatio,2);
  const saving=sceneQuality({sharp:true,width:390,height:330,ratio:3,saveData:true});
  assert.equal(saving.interval,1000/30);
  assert.ok(saving.pixelRatio>=1);
  delete globalThis.matchMedia;
});

test('easing does not overshoot during a slow frame or reverse movement',()=>{
  const forward=damp(0,.65,8,.08),reverse=damp(.65,-.65,8,.08);
  assert.ok(forward>0 && forward<.65);
  assert.ok(reverse<.65 && reverse>-.65);
  assert.equal(damp(.2,.65,8,0),.2);
});
