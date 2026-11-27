/**
 * Calls `start` while the element is on screen in a visible tab, and `stop` as soon as it is not.
 * Every looping animation on the site goes through this, so nothing runs unseen.
 */
export function whileVisible(el: Element, start: () => void, stop: () => void) {
  let onScreen = false;
  let running = false;

  const update = () => {
    const should = onScreen && document.visibilityState === 'visible';
    if (should === running) return;
    running = should;
    if (should) start();
    else stop();
  };

  new IntersectionObserver((entries) => {
    onScreen = entries[entries.length - 1].isIntersecting;
    update();
  }).observe(el);
  document.addEventListener('visibilitychange', update);
}
