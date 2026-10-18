import test from 'node:test';
import assert from 'node:assert/strict';
import {damp} from '../src/scene-motion.js';

test('the same one-second gesture settles equally on different refresh rates',()=>{
  const results=[30,60,120].map(rate=>{
    let rotation=0;
    for(let frame=0;frame<rate;frame++)rotation=damp(rotation,.65,8,1/rate);
    return rotation;
  });
  assert.ok(results.every(value=>Math.abs(value-results[0])<1e-12));
  assert.ok(results[0]>.649 && results[0]<=.65);
});

test('easing does not overshoot during a slow frame or reverse movement',()=>{
  const forward=damp(0,.65,8,.08),reverse=damp(.65,-.65,8,.08);
  assert.ok(forward>0 && forward<.65);
  assert.ok(reverse<.65 && reverse>-.65);
  assert.equal(damp(.2,.65,8,0),.2);
});
