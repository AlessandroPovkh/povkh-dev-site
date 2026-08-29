# P-029 Aurora Silk RU backdrop

## 1. Карточка пакета

- Класс согласования: `auto-tech`.
- Standing: `per-packet`.
- Статус: `awaiting_approval`.
- Тип пакета: `website-build`.
- Executor ID: `website-build`.
- Владелец: `website-build`.
- Helper: `refero-design` для проверки соответствия утверждённому Aurora Silk design.

## 2. Цель

Перенести текущую проверенную RU-реализацию P-025 в новый verified managed worktree и реализовать утверждённый единый динамический фон Aurora Silk на всех существующих русских маршрутах.

## 3. Approved design

- Выбор пользователя: вариант 1, Aurora Silk.
- Утверждённая письменная спецификация: `2026-08-28-povkh-aurora-silk-background-design.md`.
- Deep plum/graphite base, rose and violet fields, 18/24-second transform-only motion, static reduced-motion state.

## 4. Делаем

- Добавляем один декоративный `AmbientBackdrop.astro` только для RU locale.
- Интегрируем его через `BaseLayout.astro` для immersive и default RU shells.
- Настраиваем прозрачность существующих RU surfaces так, чтобы фон читался между секциями и не мешал тексту.
- Убираем дублирование старого homepage ambient layer.
- Добавляем component, motion, reduced-motion, overflow и locale-boundary tests.
- Проверяем representative desktop/mobile routes и сохраняем реальные screenshots.

## 5. Не делаем

- Не меняем публичные тексты, CTA, ссылки, маршруты, кейсы и case assets.
- Не меняем EN/IT поверхности.
- Не добавляем Canvas, WebGL, SVG filters, runtime animation JavaScript или зависимости.
- Не меняем package manifests, lockfile, production configuration или secrets.
- Не выполняем commit, push, PR, merge или deploy без отдельного разрешения.

## 6. Write scope

- `.studio/decisions.md`, `.studio/hooks.md`, `.studio/packets/P-029-aurora-silk/`, `.studio/route-map.md`, `.studio/scope-contract.json`, `PROJECT.md`.
- `docs/superpowers/plans/2026-08-28-povkh-dev-russian-redesign.md`.
- `docs/superpowers/specs/2026-08-28-povkh-aurora-silk-background-design.md`.
- `src/components/`, `src/layouts/`, `src/lib/`, `src/pages/`, `src/scripts/`, `src/styles/`.
- `public/favicon.svg`, `tests/`, `artifacts/website-build/`.

Protected: `src/content/`, `public/assets/work/`, package manifests, secrets and production configuration.

## 7. Acceptance

- Every RU route renders one shared Aurora Silk backdrop; EN/IT routes render none.
- The background is visibly plum/graphite rather than black and remains weaker than action pink.
- Standard motion has exactly two slow transform/opacity animation layers; reduced motion has none.
- Homepage, services, work, contact and legal reading surfaces retain readable contrast.
- Representative 390 px and desktop routes have no new horizontal overflow or layout shift.
- Content contract, Astro check, build and focused Playwright tests pass.
