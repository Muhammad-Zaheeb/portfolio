import { whileVisible } from './while-visible';

/**
 * The hero's magnifying lens. The render behind it is a plain image; only the small circle is
 * redrawn, then moved with a transform, so the cost stays low on laptops.
 *
 * A mouse or pen steers the lens. Otherwise (and always on touch) it drifts slowly across the light.
 * With reduced motion it holds still and only moves where the pointer puts it.
 */
const ZOOM = 1.7;
/** Matches the CSS `object-position: 50% 40%` of the render. */
const FOCUS_Y = 0.4;

export function startLens(hero: HTMLElement) {
  const img = hero.querySelector<HTMLImageElement>('[data-render]');
  const lens = hero.querySelector<HTMLElement>('[data-lens]');
  const canvas = lens?.querySelector('canvas');
  const ctx = canvas?.getContext('2d');
  const sky = img?.parentElement;
  if (!img || !lens || !canvas || !ctx || !sky) return;

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = window.matchMedia('(pointer: coarse)');

  let W = 0;
  let H = 0;
  let R = 0;
  let x = 0;
  let y = 0;
  let tx = 0;
  let ty = 0;
  let steered = false;
  let visible = false;
  let ready = false;
  // A pre-decoded copy of the render, so drawing it never decodes on the main thread.
  let source: HTMLImageElement | ImageBitmap = img;
  let frame = 0;
  let last = 0;
  let clock = 0;

  const narrow = () => W < 860;
  const drift = (t: number) => {
    const n = narrow();
    tx = W * (n ? 0.5 : 0.62) + Math.cos(t * 0.25) * W * (n ? 0.2 : 0.08);
    ty = H * (n ? 0.34 : 0.36) + Math.sin(t * 0.33) * H * (n ? 0.07 : 0.06);
  };

  const draw = () => {
    if (!ready) return;
    // Where the cover-fitted render sits inside the hero.
    const s = Math.max(W / img.naturalWidth, H / img.naturalHeight);
    const w = img.naturalWidth * s;
    const h = img.naturalHeight * s;
    const left = (W - w) / 2;
    const top = (H - h) * FOCUS_Y;
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 2 * R, 2 * R);
    ctx.drawImage(source, R - (x - left) * ZOOM, R - (y - top) * ZOOM, w * ZOOM, h * ZOOM);
    lens.style.transform = `translate3d(${x - R}px, ${y - R}px, 0)`;
  };

  const tick = (now: number) => {
    frame = requestAnimationFrame(tick);
    // Half rate is plenty for the slow drift, and for phones. A steered lens, or one still
    // travelling back to its drift path, keeps the full rate.
    const idle = !steered && Math.abs(tx - x) + Math.abs(ty - y) < 24;
    if ((idle || coarse.matches) && now - last < 30) return;
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    if (!steered) {
      clock += dt;
      drift(clock);
    }
    // Same easing as 7% per frame at 60 fps, whatever the real frame rate.
    const k = 1 - Math.pow(0.93, dt * 60);
    x += (tx - x) * k;
    y += (ty - y) * k;
    draw();
    // A steered lens that has arrived needs no more frames until the pointer moves again.
    if (steered && Math.abs(tx - x) < 0.1 && Math.abs(ty - y) < 0.1) stop();
  };

  const stop = () => {
    cancelAnimationFrame(frame);
    frame = 0;
  };
  const run = () => {
    if (frame || !visible || !ready || reduce.matches) return;
    last = performance.now();
    frame = requestAnimationFrame(tick);
  };

  const size = () => {
    const box = sky.getBoundingClientRect();
    if (!box.width || !box.height) return;
    W = box.width;
    H = box.height;
    R = Math.round(Math.max(72, Math.min(150, W * 0.14)));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = canvas.height = Math.round(2 * R * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    lens.style.width = lens.style.height = `${2 * R}px`;
    if (!steered) {
      drift(clock);
      x = tx;
      y = ty;
    }
    draw();
    run();
  };

  const release = () => {
    if (!steered) return;
    steered = false;
    run();
  };
  const move = (e: PointerEvent) => {
    if (e.pointerType === 'touch' || !visible) return;
    const box = sky.getBoundingClientRect();
    // The header lies over the render, so the whole window is watched and the hero's box checked.
    if (e.clientY > box.bottom || e.clientY < box.top) return release();
    tx = e.clientX - box.left;
    ty = e.clientY - box.top;
    steered = true;
    if (reduce.matches) {
      x = tx;
      y = ty;
      draw();
    } else run();
  };
  window.addEventListener('pointermove', move, { passive: true });
  document.documentElement.addEventListener('pointerleave', release);

  const begin = async () => {
    try {
      source = await createImageBitmap(img);
    } catch {
      // The image element itself works everywhere, only less smoothly.
    }
    ready = true;
    size();
    lens.classList.add('is-ready');
  };
  // The lens fades in anyway, so it waits for a quiet moment and leaves the name reveal alone.
  const whenIdle = () => {
    if ('requestIdleCallback' in window) requestIdleCallback(begin, { timeout: 1500 });
    else setTimeout(begin, 400);
  };
  img.decode().then(whenIdle, () => {
    if (img.complete && img.naturalWidth) whenIdle();
    else img.addEventListener('load', whenIdle, { once: true });
  });
  new ResizeObserver(() => ready && size()).observe(sky);
  reduce.addEventListener('change', () => {
    if (reduce.matches) stop();
    else run();
  });

  whileVisible(
    hero,
    () => {
      visible = true;
      hero.dataset.motion = 'running';
      run();
    },
    () => {
      visible = false;
      hero.dataset.motion = 'paused';
      stop();
    },
  );
}
