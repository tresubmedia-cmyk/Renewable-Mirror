# Renewable Mirror — React Frontend

A responsive React + TypeScript frontend starter for the Renewable Mirror website.

## Stack
- React 18 + Vite + TypeScript
- Tailwind CSS 3
- Framer Motion
- React Router
- Lucide React
- Optional WordPress REST API integration

## Requirements
- Node.js 20 LTS recommended
- npm

## Run locally
```bash
npm install
cp .env.example .env
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## WordPress integration
The project can optionally read posts from the WordPress REST API.

1. Copy `.env.example` to `.env`.
2. Set `VITE_WORDPRESS_URL=https://www.renewablemirror.com`.
3. Restart the dev server.

The frontend uses `/wp-json/wp/v2/posts`. If the API is unavailable or returns no posts, it displays the included sample content.

For a production migration, verify:
- WordPress REST API access and CORS policy.
- Existing URL/permalink structure.
- Featured images and custom fields.
- SEO metadata, canonical URLs, schema and redirects.
- Search, pagination and category mapping.
- Analytics, consent and newsletter integrations.

Do not shut down the current WordPress website until the new site has been tested and URL redirects have been prepared.

## Project structure
```text
src/
  app/              App shell and route configuration
  components/
    common/         Reusable buttons, section headings and cards
    layout/         Header, navigation and footer
    sections/       Homepage sections
  data/             Sample content for local development
  lib/              WordPress API and utility functions
  pages/            Route-level page components
  styles/           Global styles
  types/            Shared TypeScript types
```

## Notes
This is a complete frontend foundation with sample content and working navigation. It is not a finished content migration: live WordPress content, editorial custom fields, subscriptions, forms and production SEO need to be connected and verified against the current WordPress setup.