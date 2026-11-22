# Portfolio

Static portfolio site for Muhammad Zaheeb, built with Astro, Tailwind CSS and TypeScript.

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
