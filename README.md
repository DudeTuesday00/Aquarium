# Aquarium Wizard

Aquarium Wizard is an Astro site for home aquarium hobbyists. The current project includes:

- A landing page for the Aquarium Wizard brand
- A five-step aquarium recommendation wizard
- A guides section with a starter beginner setup article
- A shop page for 3D-printed aquarium accessories
- Gallery, About, and Contact pages

## Stack

- Astro 6
- Tailwind CSS 4 via `@tailwindcss/vite`
- Static site output

## Requirements

- Node `22.12.0+` or `24.x`
- npm `11+`

This repo intentionally blocks unsupported Node versions such as Node 25 because the current Astro toolchain can fail there with misleading build errors.

## Getting Started

Install dependencies:

```sh
npm install
```

Start the dev server:

```sh
npm run dev
```

Create a production build:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Project Structure

```text
/
├── public/
├── scripts/
│   └── check-node.mjs
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── wizard.astro
│   │   ├── guides.astro
│   │   ├── guides/
│   │   │   └── beginner-tank-setup.astro
│   │   ├── shop.astro
│   │   ├── gallery.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Notes

- The wizard is currently client-side and returns a recommendation based on five required answers.
- Guides are currently implemented as static `.astro` pages, not Astro content collections.
- Several business details are still placeholders, including product purchase links, gallery media, and some About page content.

## Next Priorities

- Replace placeholder product and affiliate links with real destinations
- Add real gallery assets and richer guide content
- Expand SEO with Open Graph and social metadata
- Verify the site in a supported Node 22 or 24 environment before deployment
