# Moshe Rot — Artist Portfolio

A minimal, responsive artist portfolio website built with Astro. Designed for showcasing photographic and artistic works with a clean, gallery-first layout.

## Features

- **Responsive design** — Works on mobile, tablet, and desktop
- **Markdown content** — Add artworks by creating `.md` files in `src/content/artworks/`
- ** seamless image grid** — Full-width gallery with no gutters (inspired by professional portfolio sites)
- **GitHub Pages** — Deploy for free with GitHub Actions

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:4321/mosherothart](http://localhost:4321/mosherothart) (or [http://localhost:4321](http://localhost:4321) if using a custom domain).

## Adding Your Artwork

1. Add images to `public/images/` (e.g., `public/images/my-artwork.jpg`)
2. Create a new markdown file in `src/content/artworks/`:

```markdown
---
title: My Artwork Title
image: /images/my-artwork.jpg
category: portfolio   # portfolio | fine-art | film
year: "2025"
featured: false
---

Optional description or notes.
```

3. Run `npm run build` to regenerate the site.

## Project Structure

```
src/
├── content/
│   ├── config.ts        # Content collection schema
│   └── artworks/        # Markdown files for each artwork
├── components/
│   ├── Header.astro     # Sticky header with nav
│   └── ArtworkGrid.astro
├── layouts/
│   └── BaseLayout.astro
└── pages/
    ├── index.astro      # Home (all artworks)
    ├── portfolios.astro  # Portfolio category
    ├── fine-art.astro
    ├── film.astro
    ├── about.astro
    ├── contact.astro
    ├── press.astro
    ├── links.astro
    └── artwork/[slug].astro
```

## Deploy to GitHub Pages

1. Push your code to a GitHub repository.

2. Update `astro.config.mjs` with your GitHub username and repo name:
   - `site`: `https://YOUR_USERNAME.github.io`
   - `base`: `'/YOUR_REPO_NAME'` (or remove `base` if repo is `username.github.io`)

3. In repo **Settings → Pages**:
   - Source: **GitHub Actions**

4. Push to `main` — the workflow will build and deploy automatically.

Your site will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`.

## Customization

- **Logo/name**: Edit `src/components/Header.astro`
- **Nav links**: Edit the `navLinks` array in `Header.astro`
- **Instagram**: Update the Instagram URL in `Header.astro`
- **Contact email**: Edit `src/pages/contact.astro`
- **About text**: Edit `src/pages/about.astro`
