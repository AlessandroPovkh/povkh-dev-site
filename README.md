# Povkh.Dev

Bilingual Astro website for Povkh.Dev. The repository contains the editable site, localized content, ENDOkey and POVKH LAB case studies, and the automated quality suite.

## Local development

Requirements: Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

Astro prints the local preview URL after startup.

## Quality checks

```bash
npm run test:all
```

Focused commands are also available:

```bash
npm run test:content
npm run check
npm run build
npm run test:e2e
```

## Project boundaries

- The default build is a preview: legal copy is draft, the contact form is demo-only, and indexing remains disabled.
- Do not publish claims about leads, sales, rankings, or medical outcomes without verified evidence and owner approval.
- Copy `.env.example` to `.env` only when configuring a private local or deployment environment. Never commit `.env`.

## Main paths

- `src/content/` — localized site, service, process, team, legal, and case-study content.
- `src/components/` — shared Astro components.
- `src/pages/` — English and Russian routes.
- `tests/` — content, browser, accessibility, responsive, and visual regression checks.
