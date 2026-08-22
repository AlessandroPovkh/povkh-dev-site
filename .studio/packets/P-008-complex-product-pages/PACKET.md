# P-008 Complex-product pages

## 1. Цель

Собрать в существующем Astro-сайте русские страницы главной, списка работ и кейсов КЗМС/ENDOkey так, чтобы специализация Povkh.Dev на сложных продуктах была видна через выполненные проекты.

## 2. Scope

- Делаем: сохраняем готовую funnel-главную; на `/ru/work/kzms/` добавляем проверяемое сравнение действующего каталога `https://rosset-kzms.ru/catalog/` и переработанного `https://rosset-kzms.ru/catalog-preview-v5/`; на `/ru/work/endokey/` улучшаем смысловую и визуальную иерархию доказательства; сохраняем существующую визуальную систему и адаптивность.
- Не делаем: не меняем English surface, формы, CRM/API, зависимости, публичные claims за пределами P-007, deployment, release или GitHub state.
- Write scope: `src/content/site/ru.json`, `src/content/work/ru/*.md`, `src/pages/ru/**`, существующие компоненты/стили только при необходимости переиспользования, `tests/**`, `artifacts/website-build/**` и Studio state этого пакета.

## 3. Inputs and readiness

- Approved P-006 IA and page jobs.
- Approved P-007 public copy, claim register and humanization report.
- Existing runnable Astro stack, content collections, case components and quality scripts.
- KZMS public destination: `https://rosset-kzms.ru/catalog-preview-v5/`; public label remains `Открыть каталог КЗМС` and never exposes internal status language.

Inputs are sufficient. The missing Harness registry record is an infrastructure follow-up and does not expand this product write scope.

## 4. Outputs

- Runnable Russian homepage with the approved complex-product message and KZMS/ENDOkey proof pair.
- Russian work index with KZMS, ENDOkey and POVKH LAB.
- New `/ru/work/kzms/` case and updated `/ru/work/endokey/` case.
- Focused contract/E2E coverage and `artifacts/website-build/` implementation, run, build and screenshot evidence.

## 5. Owner and helpers

- Owner: `website-build` (`.codex/skills/website-build`), registered as `human-selected-only`; explicitly selected by the user through the command to build the approved pages.
- Helpers: `refero-design` for the reference lock, funnel hierarchy and existing-system layout decisions; `site-copy-humanizer` for the final public-language pass. SEO and integration owners remain outside this packet.

## 6. Stop conditions

- Stop if implementation requires a new dependency, English parity, an unapproved claim/asset, form or integration behavior, or a write outside the declared project surface.
- Stop if the live KZMS pages do not support a proposed factual comparison, or if ENDOkey rework would require an unapproved medical/product claim.
- Existing cross-browser baseline H-002 remains separate; a new regression in the changed routes blocks only P-008.

## 7. Done check and evidence

- Focused tests first fail for the absent KZMS route/new Russian message, then pass after implementation.
- `npm run test:content`, `npm run check`, `npm run build` and `npm run verify:build` pass.
- Changed Russian routes render at desktop and mobile widths without horizontal overflow or console errors.
- `artifacts/website-build/` contains implementation map, changed surface, run/build evidence, screenshot manifest, real screenshots and validation result.
- Public scan finds no `preview`, internal package/tool/status language, em dash or `не X, а Y` construction in the changed copy.
- Project state validator and `git diff --check` pass.

## 8. Human gate

After evidence is complete, set `ready_for_review` and stop for human approval before separate Technical QA or Visual QA packets.

## 9. Evidence

- Status: `approved`
- TDD: initial content tests failed on the absent KZMS authority and old hero; the work-index mobile regression failed at `603 > 390`; governance-language tests failed before evidence blocks were removed.
- Final checks: content `14/14`; Astro diagnostics `0 errors / 0 warnings / 0 hints`; build and build verification pass; focused Chromium `42/42` with one worker; `git diff --check` pass.
- Browser capture: four routes × desktop/mobile, eight HTTP 200 responses, zero horizontal-overflow failures and zero console errors.
- Handoff root: `artifacts/website-build/` with implementation map, changed surface, run instructions, build evidence, screenshot manifest, eight PNGs and validation result.
- Known baseline: H-002 remains a separate pre-existing cross-browser/visual QA issue and is not represented as fixed by P-008.

### Rework 2026-08-22

- User-confirmed input: the previous catalogue contained 400 cards for non-core goods, including buckets, bolts and screws; the revised catalogue is focused on industrial meshes.
- Change boundary: only the public KZMS result copy and its regression assertion.
- Prohibited: invented SEO, conversion or lead percentages.
- Verified: content `14/14`; Astro `0/0/0`; build and build verification pass; desktop/mobile KZMS route returns HTTP 200 with exact copy, no overflow and no console errors.

### Funnel rework 2026-08-22

- Source rule: `Direct Response лендинг — конспект` in the user's vault. Adapted for a homepage: one dominant next step, concrete problem recognition, proof before the final ask and no heavy purchase commitment.
- Reference lock: preserve the existing Povkh.Dev monochrome/coral/lime system, split hero and case-led proof; change hierarchy and copy, not the brand language.
- Primary route: `/ru/contact/`, framed as a short project/task review rather than an immediate purchase.
- Correction review: public `CTA` jargon removed; a regression test scans rendered public copy; unsupported visual-reference provenance was removed and formal Visual QA now reports `needs_input` until a reference is independently approved.
- Homepage funnel subpass: verified; packet reopened for D-011 evidence-page rework.

### Evidence-page rework 2026-08-22

- User reference: desktop capture of `/ru/work/endokey/` showing an oversized fragmented H1 and a largely empty blue journey panel.
- KZMS references: current public catalogue `/catalog/` and revised public catalogue `/catalog-preview-v5/`.
- Design target: preserve Povkh.Dev tokens and hard-border system; make proof legible through a clear problem/intervention/result sequence and real page evidence.
- KZMS: two local, rights-safe captures show the current mixed catalogue and the revised industry/task catalogue; public copy explains the buyer problem, the 400-card reduction and the new selection path without claiming SEO, lead or conversion uplift.
- ENDOkey: the fragmented generic H1 and empty journey panel are replaced by a shorter audience-specific heading, a real local capture of the published product site and a concrete content path.
- TDD: the three new proof requirements failed before implementation and then passed in Chromium; these three targeted proof assertions pass in Chromium, Firefox, WebKit, mobile Chromium and mobile WebKit.
- Verification: content `14/14`, server `11/11`, tooling `1/1`, Astro diagnostics `0 errors / 0 warnings / 0 hints`, build and `verify:build` pass. Fresh proof assertions pass `15/15` across all five browser profiles; the complete key-route Chromium run passes `44/44`. Combined cross-browser home/routes/work run: `208/220`; the remaining failures reproduce H-002 global WebKit/mobile-width baseline and the existing mobile homepage CTA-count mismatch. The KZMS-specific WebKit width delta was reduced from `413` to the shared `389–390` baseline; Chromium, Firefox and mobile Chromium route checks pass.
- Visual evidence: `output/playwright/p008-proof-rework/endokey-hero-v2.png`, `kzms-comparison-section.png`, desktop and mobile full-page captures. No P0/P1/P2 defect remains in the changed comparison or hero at the reviewed Chromium desktop/mobile viewports.
- Status: `ready_for_review`; H-013 remains open for the user's page review.

### ENDOkey media correction 2026-08-22

- User verdict: the cropped full-page screenshot in the hero is unsuccessful and may not belong there.
- Decision: the hero uses a clean ENDOkey product image; website-interface evidence moves to its own wide, uncropped section below the delivered scope.
- Boundary: ENDOkey media composition only; KZMS, copy authority, integrations and other routes stay unchanged.
- Asset evidence: the product photograph is the published ENDOkey hero background saved locally as `public/assets/work/endokey/product-hero.jpg`; the website capture was refreshed after closing the live cookie banner.
- TDD: the revised hero/site-evidence test failed on the cropped screenshot implementation and passes after the media split.
- Verification: Astro diagnostics `0 errors / 0 warnings / 0 hints`; build and `verify:build` pass; proof and route assertions pass in Chromium, Firefox, WebKit, mobile Chromium and mobile WebKit. The two narrow-width failures in the `18/20` focused run are the unchanged H-002 WebKit measurement baseline.
- Visual QA: desktop and mobile hero/product crops pass; the separate website screenshot is fully visible, readable and free of the cookie overlay. Evidence: `output/playwright/p008-proof-rework/endokey-media-hero-desktop.png`, `endokey-media-hero-mobile.png`, `endokey-site-evidence-final.png`.
- Status: `approved` by D-013.
