import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import path from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import sharp from 'sharp';
import { site, projects } from '../../data/site';

// Open Graph cards are rendered at build time: no runtime cost, nothing shipped to the browser.
// JPEG keeps them small enough for chat apps to show a preview.

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFile(require.resolve(`${pkg}/files/${file}`));

const assets = Promise.all([
  font('@fontsource/cormorant-garamond', 'cormorant-garamond-latin-300-normal.woff'),
  font('@fontsource/cormorant-garamond', 'cormorant-garamond-latin-300-italic.woff'),
  font('@fontsource/hanken-grotesk', 'hanken-grotesk-latin-400-normal.woff'),
  // The render behind the home and Event Horizon cards. Builds run from the project root.
  sharp(path.resolve('src/assets/event-horizon.jpg')).resize(1200, 675).jpeg({ quality: 88 }).toBuffer(),
]);

interface Card {
  title: string;
  line: string;
  note: string;
  render: boolean;
}

const cards: Record<string, Card> = {
  home: { title: site.name, line: site.tagline, note: `${site.degree}, ${site.university}`, render: true },
  ...Object.fromEntries(
    projects.map((p) => [
      p.slug,
      {
        title: p.title,
        line: p.summary,
        note: p.notice ?? (p.role ? `${p.role} by ${site.name}` : `A project by ${site.name}`),
        render: p.slug === 'event-horizon',
      },
    ]),
  ),
};

export const getStaticPaths = (() => Object.keys(cards).map((slug) => ({ params: { slug } }))) satisfies GetStaticPaths;

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown, extra: Record<string, unknown> = {}): Node => ({
  type,
  props: { style, children, ...extra },
});

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug as string;
  const card = cards[slug];
  const [display, italic, sans, render] = await assets;
  const home = slug === 'home';

  const layers: Node[] = [];
  if (card.render) {
    layers.push(
      h('img', { position: 'absolute', left: 0, top: -70, width: 1200, height: 675, opacity: 0.8 }, undefined, {
        src: `data:image/jpeg;base64,${render.toString('base64')}`,
        width: 1200,
        height: 675,
      }),
      h('div', {
        position: 'absolute',
        left: 0,
        top: 0,
        width: 1200,
        height: 630,
        backgroundImage: 'linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.78) 62%, rgba(0,0,0,1) 94%)',
      }),
    );
  } else {
    // A thin photon ring leaving the corner, in place of the render.
    layers.push(
      h('div', { position: 'absolute', left: 820, top: -260, width: 640, height: 640, borderRadius: 320, border: '1.5px solid rgba(233,201,143,0.55)' }),
      h('div', { position: 'absolute', left: 770, top: -310, width: 740, height: 740, borderRadius: 370, border: '1px solid rgba(233,201,143,0.18)' }),
    );
  }

  layers.push(
    h('div', { position: 'absolute', left: 72, bottom: 56, width: 1056, display: 'flex', flexDirection: 'column' }, [
      h(
        'div',
        {
          display: 'flex',
          fontFamily: 'Cormorant',
          fontSize: home ? 124 : 132,
          lineHeight: 0.95,
          letterSpacing: -3,
        },
        card.title,
      ),
      h(
        'div',
        {
          display: 'flex',
          marginTop: 28,
          paddingTop: 24,
          borderTop: '1px solid rgba(236,231,223,0.28)',
          fontFamily: 'Cormorant',
          fontStyle: home ? 'italic' : 'normal',
          fontSize: home ? 48 : 36,
          lineHeight: 1.18,
          color: '#ece7df',
        },
        card.line,
      ),
      h('div', { display: 'flex', marginTop: 20, fontSize: 24, color: '#e9c98f' }, card.note),
    ]),
  );

  const tree = h(
    'div',
    { width: 1200, height: 630, display: 'flex', position: 'relative', background: '#000', color: '#ece7df', fontFamily: 'Hanken' },
    layers,
  );

  const svg = await satori(tree as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Cormorant', data: display, weight: 300, style: 'normal' },
      { name: 'Cormorant', data: italic, weight: 300, style: 'italic' },
      { name: 'Hanken', data: sans, weight: 400, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  const jpg = await sharp(png).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  return new Response(new Uint8Array(jpg), { headers: { 'Content-Type': 'image/jpeg' } });
};
