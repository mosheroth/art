# Moshe Rot — Watercolour Artist Site

A portfolio-first site for a watercolour painter working from local subjects (Hod HaSharon, the Yarkon, Tel Aviv, the coast). Built with Astro, Hebrew/RTL, deployed to GitHub Pages.

The home page is quiet black-and-white chrome. Four bodies of work — figure, Tel Aviv, landscape, and works for sale — are the way in; buying stays on `/gallery`.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321/art](http://localhost:4321/art) (the `base` is set in `astro.config.mjs`).

## Pages

| Route | What it is |
| --- | --- |
| `/` | Home: a short intro, then four category bands (גוף, תל אביב, נוף, למכירה) |
| `/gallery` | The shop: every artwork with price and availability, plus subject/price/status filters and sorting |
| `/about` | The artist story in full, with a short "how it works" list |
| `/artwork/[slug]` | One painting, shown large, with details, purchase info, a room mock-up and related works |
| `/workshops` | Placeholder for future workshops |
| `/passe-partout` | Client-side tool that adds a white mat to an uploaded image |
| `/250`, `/500`, `/800`, `/donation` | Legacy short links, redirected into `/gallery` with the matching filter |

`/?price=…` style links from the old sales home page are redirected to `/gallery` client-side.

## Editing Content

### Copy and curation

All site text, plus which paintings appear where, live in `src/lib/site.ts`:

- `SITE` — name, discipline, location, Instagram
- `HOME_CATEGORIES` — the four bands on the home page and in the header (label, gallery query, lead line, curated slugs)
- `PORTRAIT_SLUG` — the painting used beside the artist story on `/about`
- `COPY` — Hebrew strings on the home, gallery and about pages

### Adding artwork

1. Add the image to `public/images/`.
2. Create a markdown file in `src/content/artworks/`:

```markdown
---
title: My Artwork Title
titleHe: כותרת בעברית
image: /images/my-artwork.png
category: for-sale
year: "2026"
medium: צבעי מים על נייר
size: 30 × 40 cm
price: "₪200"
sold: false
subjects: [landscape, yarkon]
---

תיאור קצר של העבודה.
```

3. Available subject slugs and their Hebrew labels are in `src/lib/categories.ts`.

Or use the helper, which also prepares an Instagram post — see `docs/PUBLISH-WORKFLOW.md`:

```bash
npm run publish-artwork -- --image ./painting.png --title-he "כותרת" --slug my-painting --price "₪200"
```

English mediums such as `Watercolor on paper` are shown in Hebrew automatically (`src/lib/artworks.ts`). Per-artwork sizes are stored but not displayed.

## Design

The chrome is black on white so colour comes only from the paintings. Tokens live at the top of `src/layouts/BaseLayout.astro`:

- Paper `#ffffff`, ink `#111111`, plus muted ink and hairlines
- Display type: Frank Ruhl Libre; body type: Assistant
- `--page`, `--gutter`, `--section-y` for layout rhythm; `/gallery` widens `--page` locally

Shared helpers:

- `src/lib/paths.ts` — `url()`, `img()`, `artworkUrl()` keep the GitHub Pages `base` prefix correct
- `src/lib/imageSize.ts` — reads intrinsic image dimensions at build time (files in `public/images` are a mix of PNG and JPEG) so images reserve their space and anchors land accurately
- `src/lib/artworks.ts` — collection queries, curation, subject groups, Hebrew mediums

## Deploy

Pushing to `main` builds and deploys through `.github/workflows`. In repo **Settings → Pages**, source must be **GitHub Actions**. The live site is `https://mosheroth.github.io/art/`.
