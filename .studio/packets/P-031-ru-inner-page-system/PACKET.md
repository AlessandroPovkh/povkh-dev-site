# P-031 RU inner-page visual system

## 1. Карточка пакета

- Класс согласования: `auto-tech`.
- Standing: прямое решение пользователя от 2026-08-29 продолжать автоматически после утверждения визуального направления.
- Статус: `approved`.
- Тип пакета: `website-build`.
- Executor ID: `website-build`.
- Владелец: `website-build`.
- Helper: `refero-design` для проверки композиционного качества утверждённой visual system.
- Surface role: `full-site`.

## 2. Цель

Довести все существующие внутренние русские страницы Povkh.Dev до полноценного уровня утверждённой главной: содержательные композиции на протяжении всей страницы, различимые section systems, контролируемый ASCII/signal language и Aurora Silk без визуальной пустоты.

## 3. Делаем

- Полный визуальный проход существующих RU services, process, work index, studio, blog, contact, privacy, cookies и 404 surfaces.
- Проверяем и при необходимости усиливаем body sections существующих RU case routes без изменения кейсов и ассетов.
- Используем утверждённые pink, graphite/plum, ASCII/signal geometry, Aurora Silk, typography и interaction language.
- Добавляем только dependency-free компоненты и CSS/JS в существующем Astro stack.
- Готовим representative desktop/mobile screenshots и regression tests.

## 4. Не делаем

- Не меняем публичные тексты, CTA, ссылки, маршруты, кейсы и case assets.
- Не меняем EN surfaces, package manifests, lockfiles, secrets или production configuration.
- Не добавляем новые визуальные направления, зависимости, Canvas/WebGL или яркие декоративные текстовые вставки.
- Не выполняем push, PR, merge или deploy.

## 5. Inputs

- Approved design/content: P-021 visual system, validated P-025 page compositions and approved P-029 Aurora Silk background.
- Stack/baseline: Astro `main@f4e61a0`.
- Project stack and write scope: existing components, layouts, RU pages, styles, tests and build evidence only.
- Protected content authority: `src/content/`, existing cases/routes and `public/assets/work/` remain frozen.

## 6. Outputs

- Complete RU inner-page compositions — `draft` until visual evidence is reviewed.
- Shared dependency-free section components/styles — `draft`.
- Browser/content/build validation and screenshots — `draft`.

## 7. Done check и evidence

- Every existing RU inner route has designed body sections, not only a composed first screen.
- Representative desktop and 390px pages remain readable and without horizontal overflow.
- Existing public strings, cases, routes and case assets are unchanged.
- Content contract, Astro check, build and focused Playwright regression pass.
- Managed worktree is clean and `project-write verify` returns `boundary-verified` before integration.

## 8. Hooks и learning

- Stop only for a genuinely new visual direction, missing protected input, scope conflict or failed verification requiring a human choice.
- Human corrections: project-specific — preserve all existing site texts and cases; avoid cheap decorative technical labels.
- Learning disposition: project-specific.
- Candidate rule ref: none.

