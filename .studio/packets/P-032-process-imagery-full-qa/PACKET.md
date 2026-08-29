# P-032 Process imagery and full QA

## 1. Карточка пакета

- Класс согласования: `auto-tech` после визуального выбора пользователя 2026-08-29.
- Статус: `approved`.
- Тип пакета: `website-build`.
- Executor ID: `website-build`.
- Владелец: `website-build`.
- Helpers: `imagegen`, `accessibility-performance-technical-qa`.
- Surface role: `process-and-release-qa`.

## 2. Цель

Заменить повторяющиеся декоративные схемы этапов RU process на утверждённую предметную лабораторную фотосистему и довести локальную ревизию до подтверждённого полного тестового состояния.

## 3. Делаем

- Генерируем пять отдельных предметных изображений в утверждённом направлении 1: понять, сформулировать, спроектировать, собрать и соединить, проверить и передать.
- Встраиваем изображения только в существующие карточки этапов `/ru/process/`, сохраняя тонкий pink signal overlay.
- Проверяем desktop/mobile композицию, доступность изображений, отсутствие layout shift и horizontal overflow.
- Запускаем Astro check, content contract, build и весь Playwright suite во всех объявленных browser profiles.
- Исправляем подтверждённые тестами регрессии в существующем локальном сайте, не расширяя продуктовый scope.
- Сохраняем технический QA evidence по artifact contract.

## 4. Не делаем

- Не меняем публичные тексты, CTA, ссылки, маршруты, кейсы и case assets.
- Не меняем EN content или дизайн без доказанной общей технической регрессии.
- Не добавляем зависимости, внешние runtime-запросы, Canvas/WebGL, claims или новые продуктовые функции.
- Не выполняем push, PR, merge или deploy.

## 5. Inputs

- Approved visual target: generated direction 1, «предметная лаборатория».
- Baseline: local `main@785de15` after approved P-031 fast-forward.
- Protected authorities: `src/content/`, existing routes/cases and `public/assets/work/` remain frozen.

## 6. Outputs

- Five optimized local process image assets — `draft` until rendered.
- RU process image integration and responsive treatment — `draft`.
- Full QA artifact set under `artifacts/technical-qa/P-032/` — `draft`.
- Regression fixes with reproducible evidence — `draft`.

## 7. Done check и evidence

- Five stage cards are visually distinct at desktop and mobile widths.
- Existing public strings, cases, links, routes and protected assets are unchanged.
- Astro check, content contract and build pass.
- Full declared Playwright suite completes; every remaining failure is repaired or explicitly classified with reproducible evidence.
- Managed worktree is clean and `project-write verify` returns `boundary-verified`.

## 8. Hooks и learning

- Stop only for a new visual choice, protected-input conflict, external action or failure requiring scope expansion.
- User correction: repeated signal diagrams are insufficient; use meaningful photographic imagery.
- Learning disposition: project-specific.

