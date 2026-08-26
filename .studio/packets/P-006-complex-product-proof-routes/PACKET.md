# P-006 Complex-product proof routes

## 1. Цель

Определить минимальную структуру, в которой главная Povkh.Dev доказывает направление «сложные продукты» через опубликованный каталог КЗМС и действующий сайт ENDOkey, а Messaging получает утверждённые page jobs без необходимости придумывать маршруты.

## 2. Scope

- Делаем: структурную роль `/ru/`, `/ru/work/`, `/ru/work/endokey/`, нового `/ru/work/kzms/` и сохранённого `/ru/work/povkh-lab/`; связи между направлением, proof pair и действием; disposition существующих in-scope routes.
- Не делаем: финальный copy, SEO titles/H1, дизайн, реализацию, redirects, EN version или полную перестройку sitemap/navigation.

## 3. Inputs

- Approved commercial strategy: P-005 / D-005.
- Explicit proof choice: D-006.
- Current route inventory: `src/content/site/ru.json` and existing case content.
- Published KZMS catalogue surface: SRC-011; HTTP 200 at the approved URL.
- Live ENDOkey site: SRC-012.
- Claim/privacy boundaries from P-005.

## 4. Outputs

Declared output root: `.studio/ia/P-006-complex-product-proof-routes/`.

- `SITEMAP.json`, `SITEMAP.md`, `NAVIGATION.md`, `PAGE-TYPES.md`
- one `pages/<route>/BRIEF.md` per in-scope route
- `route-mapping.json`, `validation.json`

## 5. Owner and helpers

- Owner: `information-architecture`.
- Readiness: candidate, human-selected-only; human review required.
- Helpers: none. Messaging is downstream; Refero/design is not needed for this structural question.

## 6. Done check

- Every in-scope route/item has exactly one disposition.
- Every route has page type, job, audience, entry context, next action, owner and evidence.
- KZMS is a new Povkh.Dev case route, while the external redesigned catalogue remains result evidence, not a route replacement.
- Homepage uses the pair as social proof; Work index remains the complete case directory.
- No product source changes; validator, JSON parsing and `git diff --check` pass.

## 7. Stop and review

- Stop if a new top-level navigation item, removal/redirect, English parity, unapproved case fact or content ownership conflict becomes necessary.
- Human approves the route/page-job handoff before Messaging.
