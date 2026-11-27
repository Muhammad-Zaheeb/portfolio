// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production URL, e.g. SITE_URL=https://example.com npm run build
// Canonical links, absolute Open Graph URLs and the sitemap are only emitted when it is set.
const site = process.env.SITE_URL || undefined;

// Warn loudly on production builds: without SITE_URL the deployed site has no canonical links,
// no sitemap and relative Open Graph image URLs, which social platforms cannot resolve.
if (!site && process.argv.includes('build')) {
  const bar = '='.repeat(72);
  console.warn(
    `\n${bar}\nWARNING: SITE_URL is not set.\nThis build will have NO sitemap, NO canonical or og:url tags, relative og:image\nURLs, and a robots.txt without a Sitemap line.\nSet it before deploying, e.g. SITE_URL=https://example.com npm run build\n${bar}\n`,
  );
}

// https://astro.build/config
export default defineConfig({
  site,
  // The stylesheets are small, so they go inline and nothing blocks the first paint.
  build: { inlineStylesheets: 'always' },
  // The dev toolbar sits on top of the design during review.
  devToolbar: { enabled: false },
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
