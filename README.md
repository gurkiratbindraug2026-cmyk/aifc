# Ashoka Impact Finance Club

Next.js (App Router) + Tailwind CSS 3 site.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

- `app/<route>/page.tsx`: one page per section (`/about_us`, `/rise_capital`, …); URLs match the old static folders.
- `components/`: shared `Navbar`, `Footer`, `PageShell`, scroll-reveal, and the interactive join form and member filters.
- `app/theme.css`: colour tokens as CSS variables. The home page uses the black/white `theme-mono`; other pages use the green/navy palette.
- `public/`: static assets (logos, favicons, hero video).
