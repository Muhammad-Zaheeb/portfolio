// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Production URL, e.g. SITE_URL=https://example.com npm run build
// Canonical links, absolute Open Graph URLs and the sitemap are only emitted when it is set.
const site = process.env.SITE_URL || undefined;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
