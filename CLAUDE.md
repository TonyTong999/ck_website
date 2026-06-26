# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite HMR at localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

## Architecture

This is a single-page React app (React 18 + Vite) with **no router** — navigation is handled entirely by a `page` state string in the root `App` component (`src/App.jsx`). All application code lives in that one file.

### State model

`App` holds two pieces of state passed as props throughout the tree:
- `page` — one of `"home" | "shop" | "mission" | "stories" | "about"`
- `lang` — `"en" | "zh"`

Page transitions happen by calling `setPage(key)`. `useEffect` scrolls to the top on every page change.

### Data

All data is defined as module-level constants at the top of `App.jsx`:

- `T` — bilingual UI string map, keyed by `lang` (`T.en` / `T.zh`). All text shown in the UI comes from here.
- `SERIES_ZH` — maps English series names to Chinese for the shop filter labels.
- `PRODUCTS` — array of product objects. Each has `nameEn`/`nameZh`, `descEn`/`descZh`, `animal`/`animalZh`, and an optional `image` import (falls back to an emoji render).
- `STORIES` — array of story objects with `titleEn`/`titleZh`, `summaryEn`/`summaryZh`, `fullEn`/`fullZh`.
- `C` — design token object (color palette). All inline styles reference `C.*` variables.

### Components

All components are defined in `App.jsx`:

| Component | Purpose |
|---|---|
| `Nav` | Fixed top navbar; language toggle + page links |
| `Footer` | Sitewide footer with link columns |
| `HomePage` | Hero, stats bar, mission preview, product preview, stories preview |
| `ShopPage` | Full product grid with series filter tabs |
| `MissionPage` | Brand story, partner list, fund transparency breakdown |
| `StoriesPage` | Story grid; clicking a card replaces the grid with a full-article view (local `selected` state) |
| `AboutPage` | Values, contact info, newsletter signup |
| `ProductCard` | Reusable product tile used in `HomePage` and `ShopPage` |

### Assets

Product images are imported directly at the top of `App.jsx` as `.webp` files from the repo root (e.g., `import badgeLion from "../BADGE-LION.webp"`). The `ranger_label.webp` logo is used in `Nav` and `Footer`. Products without an `image` property render an emoji placeholder instead.

### Styling

All styling is done with inline `style` objects — no CSS files (except a minimal `src/index.css` for resets/font imports). The `C` constant is the single source of truth for colors.
