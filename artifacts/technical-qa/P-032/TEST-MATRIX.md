# P-032 Technical QA matrix

- Candidate: `feature/p-032-process-imagery-full-qa`
- Base revision: `785de154c377834f8bff988c5b442c1c3a64d7b9`
- Date: 2026-08-29
- Runtime: Node 24.12.0, Astro 7.2.2, Playwright 1.62.1, axe-core 4.13.0

| Area | Coverage | Result |
|---|---|---|
| Content contract | 15 source and claim-boundary tests | Pass |
| Server | 11 validation, replay, rate-limit and delivery tests | Pass |
| Tooling | performance runner environment isolation | Pass |
| Static analysis | 87 Astro files | 0 errors, 0 warnings, 0 hints |
| Build | static build and 22 localized preview routes | Pass |
| Browser E2E | Chromium, Firefox, WebKit, Pixel 7, iPhone 13 | 673 passed, 47 intentional skips, 0 failed |
| Visual regression | 11 Chromium snapshots | Pass after approved-baseline refresh |
| Process imagery | five unique local assets, intrinsic width, lazy loading and mobile overflow | Pass |
| Accessibility | axe route/state checks, keyboard, focus, reduced motion, zoom and reflow | Pass |
| Performance | Lighthouse CI on four representative routes | Pass |

Final browser command: `npm run test:e2e`. Final result: 720/720 completed, 673 passed, 47 skipped by declared project conditions, 0 failed.
