# Povkh.Dev Russian Full-Site Redesign Implementation Plan

**Packet:** P-022-russian-full-site-build
**Owner:** website-build
**Design authority:** P-021-russian-ux-ui
**Scope:** all existing Russian routes in the current Astro site

## Non-negotiable contract

- Preserve every existing public text, case, claim, CTA, link, route, and case asset.
- Implement the approved premium black-and-hot-pink system without adding dependencies.
- Keep graphics away from readable text.
- Use the approved circular mark: central core, ring, and three asymmetric strokes on the right.
- Build the homepage glyph field with Canvas 2D, pointer drag, soft angular snap, reduced-motion support, and no dots, glow, HUD labels, or decorative telemetry copy.
- Do not push, merge, deploy, or touch live infrastructure.

## Task 1 — Lock the content contract

- Inventory current Russian routes and public strings from source.
- Add a failing content-contract test that protects routes, links, cases, claims, and assets.
- Run the focused test and confirm RED before implementation.

## Task 2 — Build the shared visual foundation

- Implement design tokens, typography, grid, spacing, focus states, header, footer, buttons, cards, and responsive rules.
- Replace the current mark and favicon with the approved three-stroke sign.
- Keep existing content and navigation semantics unchanged.

## Task 3 — Implement the homepage composition

- Recompose the current homepage using the approved editorial hierarchy.
- Add the isolated interactive glyph field without placing it behind copy.
- Preserve every existing homepage string and destination.

## Task 4 — Apply the system to every Russian inner page

- Recompose services, about, contacts, policy, and all existing case routes.
- Preserve case evidence and media; change presentation only.
- Give each page a deliberate page-specific hierarchy while retaining the shared system.

## Task 5 — Verify behavior and rendering

- Run the content contract, Astro check, and production build.
- Run desktop and mobile browser checks across all Russian routes.
- Verify keyboard access, reduced motion, pointer interaction, overflow, console errors, and local asset loading.

## Task 6 — Full review and handoff

- Run a full Ponytail implementation review and correct findings.
- Produce local review evidence in `artifacts/website-build/`.
- Update non-authority packet status files to `ready_for_review` only after all required checks pass.
- Stop before commit, push, merge, or deployment pending separate user approval.
