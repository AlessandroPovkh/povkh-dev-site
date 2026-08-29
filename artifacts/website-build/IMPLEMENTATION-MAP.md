# P-029 implementation map

## Approved change

The approved Aurora Silk treatment is implemented as one shared, decorative RU-only background. Public copy, CTA labels, links, routes, cases and case assets are unchanged.

## Surfaces

- `src/components/AmbientBackdrop.astro`: fixed plum/graphite base plus two rose/violet motion fields; reduced-motion is static.
- `src/layouts/BaseLayout.astro`: mounts exactly one backdrop for Russian routes and none for English routes.
- `src/styles/editorial-interior.css`: makes shared Russian shells and reading surfaces translucent enough for the field to remain visible without lowering text contrast.
- `src/pages/ru/index.astro`: removes opaque homepage layers that previously hid the shared field.
- `tests/e2e/aurora-backdrop.spec.ts`: verifies locale boundary, route coverage, overflow, two animation layers and reduced-motion.

The worktree also carries the already validated P-025 Russian visual revision that this package uses as its baseline.
