# Portfolio

Static portfolio site for Muhammad Zaheeb, built with Astro, Tailwind CSS and TypeScript.

## Where things live

| Path                      | What it holds                                                     |
| :------------------------ | :---------------------------------------------------------------- |
| `src/data/site.ts`        | All content: projects, services, FAQ, research and contact details |
| `src/data/schema.ts`      | Structured data (JSON-LD)                                         |
| `src/components/`         | One component per section of the home page                        |
| `src/scripts/`            | The hero lens, and the helper that pauses animations when unseen  |
| `src/pages/work/`         | Case study pages                                                  |
| `src/pages/og/`           | Social preview images, drawn at build time                        |

Motion rules: every looping animation stops when it is off screen or the tab is hidden, and has a
still version for visitors who ask for reduced motion.

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start the dev server at `localhost:4321`    |
| `npm run build`   | Build the production site to `./dist/`      |
| `npm run preview` | Preview the production build locally        |

## Deploying: set `SITE_URL`

Set the `SITE_URL` environment variable to the production origin when you build, for example:

```sh
SITE_URL=https://example.com npm run build
```

It is used for canonical links, `og:url`, absolute Open Graph image URLs, the sitemap, and the
`Sitemap:` line in `robots.txt`. If it is unset the site still builds, but all of those are left out
and the build prints a warning. Set it in your host's project environment settings so production
builds always have it.
