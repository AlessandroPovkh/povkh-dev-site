# P-001 Scope

## 1. Цель

Связать существующий проектный репозиторий с Studio Harness как независимый checkout и устранить найденный при обязательной проверке Windows-only blocker в test tooling без изменения продуктового сайта.

## 2. Scope: делаем / не делаем

- Делаем: добавляем `PROJECT.md` и минимальную `.studio/`; открываем contribution PR в `AlessandroPovkh/povkh-dev-site`; регистрируем `projects/povkh-dev` как `independent` в Harness PR #4; заменяем POSIX-only inline env syntax в Playwright/Lighthouse tooling на кроссплатформенные механизмы Node и Playwright; обходим подтверждённый Windows EPERM в upstream `chrome-launcher` через штатный LHCI Puppeteer-runner; доказываем чистую активацию и полный Windows test run.
- Не делаем: не меняем `src/`, `public/`, продуктовые тесты, workflow, публичный preview, формы, аналитику, дизайн или release-состояние; не используем submodule. Единственное dependency-изменение — pinned `puppeteer-core` без загрузки браузера для штатного LHCI runner.

## 3. Входы и готовность

- Пользовательская задача: получена и явно связывает проект с `https://github.com/AlessandroPovkh/povkh-dev-site`.
- Upstream baseline: `main@ca3aec6c2c4855fabc21d86ae449c0fdc4b87f28`.
- Upstream permission: `READ`; изменение отправляется через fork PR без force-push.
- Сайт уже содержит собственный `npm run test:all`; новый inventory в этот пакет не входит.

## 4. Missing inputs

- Blocking: merge внешнего PR обязателен до merge Harness PR #4.
- Useful: write-доступ к upstream сократил бы handoff, но не нужен для подготовки PR.
- Optional: уточнение покупателей, воронки, CRM и бизнес-метрик относится к будущему context-пакету.

## 5. Outputs

- Проверяемый Studio-слой в проектном PR.
- Независимая registry/ignore-связь в Harness PR #4.
- Read-only activation receipt после merge внешнего PR.

## 6. Навык-владелец и помощники

- Владелец: `studio-control-plane`.
- Помощники: нет.

## 7. Почему выбрано / не выбрано

- Это изменение границы репозитория и маршрутизации; предметные, дизайн-, copy- и build-skills не нужны.

## 8. Hooks и approvals

- Пользователь явно выбрал upstream и потребовал связь по схеме отдельных проектных репозиториев.
- Merge внешнего PR выполняет владелец upstream; Harness PR #4 остаётся draft до этого gate.

## 9. Done check и evidence

- `validate-project.mjs` и `npm run test:all` проходят.
- Продуктовая поверхность (`src/`, `public/`) не меняется; tooling diff ограничен настройкой окружения Playwright/Lighthouse.
- Harness не отслеживает `projects/povkh-dev/**`, registry валиден, activation возвращает точный independent root.

## 10. Prototype exceptions

- Нет.

## 11. Stop conditions

- Upstream HEAD изменился, появился конкурирующий Studio-слой, fork PR нельзя создать, project tests падают, activation видит неверный Git root или Harness начинает отслеживать project bytes.

## 12. Verification evidence

- RED: Windows rejected `ASTRO_DEV_BACKGROUND=0 ...` and `POVKH_SITE_ORIGIN=...` before either command could start.
- GREEN: tooling regression proves inherited `HOST`, `PORT` and `POVKH_SITE_ORIGIN` are overridden; focused Chromium E2E passed 7/7; Windows LHCI collected and asserted four URLs successfully.
- Full suite: content 13/13, server 11/11, Astro check/build/verify passed; E2E executed all declared browser profiles with 354 passed, 35 skipped and 21 product failures. H-001 is resolved; H-002 stops product CSS/snapshot work from entering this attachment rework.
