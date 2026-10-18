// The same response time on a 30, 60 or 120 Hz display.
export const damp = (value, target, speed, delta) => value + (target - value) * (1 - Math.exp(-speed * delta));

export function sceneQuality() {
  const compact = matchMedia('(max-width: 780px), (pointer: coarse)').matches;
  return {compact, pixelRatio: Math.min(devicePixelRatio || 1, compact ? 1.25 : 1.65), interval: 1000 / (compact ? 30 : 60)};
}

export function animateSurface(element, enabled) {
  element.getAnimations().forEach(animation => animation.cancel());
  if (!enabled) return;
  element.animate([
    {opacity: .3, transform: 'translateY(9px) scale(.985)'},
    {opacity: 1, transform: 'none'}
  ], {duration: 440, easing: 'cubic-bezier(.22,1,.36,1)'});
}
