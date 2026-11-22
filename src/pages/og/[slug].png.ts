import type { APIRoute, GetStaticPaths } from 'astro';
import { readFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { site, projects } from '../../data/site';

// Open Graph cards are rendered at build time: no runtime cost, nothing shipped to the browser.

const require = createRequire(import.meta.url);
const font = (pkg: string, file: string) => readFile(require.resolve(`${pkg}/files/${file}`));

const fontsPromise = Promise.all([
  font('@fontsource/newsreader', 'newsreader-latin-400-normal.woff'),
  font('@fontsource/inter', 'inter-latin-400-normal.woff'),
  font('@fontsource/inter', 'inter-latin-600-normal.woff'),
]);

const pages: Record<string, { eyebrow: string; title: string; detail: string }> = {
  home: {
    eyebrow: 'Websites and web apps',
    title: 'I build websites and web apps for small businesses.',
    detail: 'Fixed written quotes. Prices in USD, from $100.',
  },
  ...Object.fromEntries(
    projects.map((p) => [p.slug, { eyebrow: p.fictional ? 'Concept demo' : 'Case study', title: p.title, detail: p.summary }]),
  ),
};

export const getStaticPaths = (() => Object.keys(pages).map((slug) => ({ params: { slug } }))) satisfies GetStaticPaths;

type Node = { type: string; props: Record<string, unknown> };
const h = (type: string, style: Record<string, unknown>, children?: unknown): Node => ({
  type,
  props: { style, children },
});

export const GET: APIRoute = async ({ params }) => {
  const page = pages[params.slug as string];
  const [serif, sans, sansBold] = await fontsPromise;
  const long = page.title.length > 30;

  const tree = h(
    'div',
    {
      // Satori sizes boxes as content-box, so the inset comes from position, not padding.
      position: 'absolute',
      top: 72,
      left: 80,
      width: 1040,
      height: 486,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: '#f6f2ea',
      color: '#1b1a17',
      fontFamily: 'Inter',
    },
    [
      h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: 1040, fontSize: 24, color: '#5c574d' }, [
        h('div', { display: 'flex', fontFamily: 'Newsreader', fontSize: 30, color: '#1b1a17' }, site.name),
        h('div', { display: 'flex', textTransform: 'uppercase', letterSpacing: 3, fontWeight: 600, fontSize: 18 }, page.eyebrow),
      ]),
      h('div', { display: 'flex', flexDirection: 'column', width: 1040 }, [
        h(
          'div',
          {
            display: 'flex',
            fontFamily: 'Newsreader',
            fontSize: long ? 76 : 120,
            lineHeight: 1.05,
            letterSpacing: long ? -1.5 : -3,
            maxWidth: 960,
          },
          page.title,
        ),
        h(
          'div',
          {
            display: 'flex',
            marginTop: 36,
            paddingTop: 28,
            borderTop: '2px solid #d8d0c2',
            fontSize: 28,
            color: '#3f3b34',
            maxWidth: 960,
          },
          page.detail,
        ),
      ]),
    ],
  );

  const card = h('div', { width: 1200, height: 630, display: 'flex', position: 'relative', background: '#f6f2ea' }, [tree]);
  const svg = await satori(card as never, {
    width: 1200,
    height: 630,
    fonts: [
      { name: 'Newsreader', data: serif, weight: 400, style: 'normal' },
      { name: 'Inter', data: sans, weight: 400, style: 'normal' },
      { name: 'Inter', data: sansBold, weight: 600, style: 'normal' },
    ],
  });
  const png = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
