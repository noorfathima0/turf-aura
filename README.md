# Turf Aura – Landing Page

A modern, responsive landing page for the **Turf Aura** sports turf booking app, built for the Code Aura Tech Solutions practical task.

**Live site:** https://YOUR-SITE.netlify.app

## Features

- Responsive layout for mobile, tablet and desktop
- Sections: Hero, Features, How it works, App screenshots, Download, Footer
- App Store and Google Play download buttons
- Scroll animations using `IntersectionObserver` (no animation library), with `prefers-reduced-motion` support
- SEO basics: title, meta description, Open Graph / Twitter tags, JSON-LD, semantic headings, alt text
- Accessible: skip link, keyboard focus styles, ARIA labels

## Tech stack

- React 19 + Vite
- Plain CSS with design tokens (CSS variables)
- lucide-react for icons

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build in /dist
npm run preview   # preview the production build
```

## Project structure

```
src/
├── assets/          logo and app screenshots
├── components/      one component per page section
├── data/content.js  all copy, links, features, steps
├── hooks/           useReveal (scroll animation)
└── styles/          variables.css, global.css, components.css
```

## Updating content

- **Text, links, features and steps:** edit `src/data/content.js`.
- **App screenshots:** drop images into `src/assets/screens/` named `1.png`, `2.png`, ... They are picked up automatically in order.
- **Colours and fonts:** edit `src/styles/variables.css`.

## Credits

Designed and developed by Noor Fathima.