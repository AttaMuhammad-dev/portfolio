// The same response time on a 30, 60 or 120 Hz display.
export const damp = (value, target, speed, delta) => value + (target - value) * (1 - Math.exp(-speed * delta));

export function sceneQuality({sharp = false, width = 1, height = 1, ratio = devicePixelRatio || 1, saveData = navigator.connection?.saveData, memory = navigator.deviceMemory, cores = navigator.hardwareConcurrency} = {}) {
  const compact = matchMedia('(max-width: 780px), (pointer: coarse)').matches;
  // Screenshot text needs device-density pixels. Bound the total buffer instead
  // of forcing every phone to a low pixel ratio.
  const lowPower = saveData || (memory && memory < 4) || (cores && cores < 4);
  const desired = sharp ? Math.max(1.5, Math.min(ratio, lowPower ? 2 : 3)) : Math.min(ratio, compact ? 1.5 : 1.75);
  const budgetRatio = Math.sqrt(1_500_000 / Math.max(1, width * height));
  return {compact, pixelRatio: sharp ? Math.min(desired, budgetRatio) : desired, interval: 1000 / (lowPower ? 30 : 60)};
}

export function animateSurface(element, enabled) {
  element.getAnimations().forEach(animation => animation.cancel());
  if (!enabled) return;
  element.animate([
    {opacity: .65, transform: 'translateY(6px) scale(.992)'},
    {opacity: 1, transform: 'none'}
  ], {duration: 360, easing: 'cubic-bezier(.22,1,.36,1)'});
}
