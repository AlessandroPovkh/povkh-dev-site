# P-021 Russian UX/UI direction

## 1. Карточка пакета

- Класс согласования: `choice`.
- Standing: `per-packet`.
- Статус: `proposed`.
- Тип пакета: `ux-ui-design`.
- Executor ID: `ux-ui-design`.
- Владелец: `refero-design` (`routable-with-review`; human review required).
- Helpers: нет.
- Surface role: `full-site`.
- Surface role: `homepage`.

## 2. Цель

Зафиксировать выбранное пользователем направление всей русской версии Povkh.Dev как реализационно однозначную спецификацию: чёрно-розовая авторская система, новый геометрический знак и интерактивное глифовое поле на главной при полном сохранении существующих текстов, фактов, ссылок, маршрутов и кейсов.

## 3. Scope

### Делаем

- Описываем утверждённый знак: кольцо с центральным ядром и тремя асимметричными сигналами справа.
- Описываем hero главной: существующий текст в защищённой зоне; отдельная интерактивная зона со знаком из плотной микротипографики.
- Фиксируем drag-вращение, мягкую сборку под правильным углом, desktop/mobile и reduced-motion поведение.
- Распределяем дизайн-систему по всем существующим русским поверхностям: home, services, process, studio, contact, work index, КЗМС, ENDOkey, POVKH LAB, blog, legal и 404.
- Фиксируем визуальные tokens, layout, typography, responsive, states, media and accessibility boundaries для будущего build-пакета.
- Обновляем route/decision/scope state только в части явно выбранного пользователем дизайн-маршрута.

### Не делаем

- Не меняем site subject files, публичные тексты, факты, ссылки, маршруты, кейсы или состав их материалов.
- Не создаём псевдотехнические подписи, координаты, статусы, фиктивные метрики или декоративную микрокопию.
- Не используем круглые LED-точки, сильный neon glow или графику под основным текстом.
- Не выполняем production implementation, dependency changes, build, push, PR, merge, deploy или release.
- Не выдаём P-018 inventory, P-019 IA или P-020 content requirements за выполненные; текущая route/content surface используется как сохранённый baseline по явному решению пользователя.

## 4. Inputs

- Approved full-site scope: `P-017-full-site-scope` and `.studio/scope-contract.json`.
- Current Astro route and content baseline at `main@25b6d7fbcd1b121c2f6f37a38f00bd5466b70b29`.
- Existing approved commercial route and public-copy boundaries: D-004–D-013.
- User-selected visual direction from the current design dialogue: strong authorial studio; 55% evidence system / 45% digital punk; black canvas and hot-pink accent.
- User-selected identity direction: Palantir-level elemental clarity without copying its protected composition; approved original node mark with three right-side signals.
- User-selected interaction/material corrections: strict static vector mark; dense microtypographic glyph volume in motion; no dots/glow/fake HUD copy; no overlap with text; full interaction only on homepage.
- Reference lock: current POVKH LAB interface density as a quality reference; Palantir as an elemental-symbol reference; Koto/COLLINS/Locomotive as supporting references. Refero MCP is unavailable, so research provenance uses public primary references and project-local evidence.
- Input readiness: sufficient for a design specification; inventory/IA/content packets remain incomplete and cannot be claimed as their own evidence.

## 5. Outputs

- `docs/superpowers/specs/2026-08-27-povkh-dev-russian-design-system-design.md` — `draft`.
- Packet-local design decision and reference summary — `draft`.
- Updated `.studio/route-map.md`, `.studio/decisions.md`, `.studio/scope-contract.json`, `PROJECT.md` and packet state — `draft`.

## 6. Почему выбран этот владелец

- Выбран `refero-design`: registry status `routable-with-review`; пакет создаёт visual direction, layout system and interaction design.
- Не выбраны `website-build` и `visual-qa`: production code ещё не разрешён, а runnable implementation для сравнения отсутствует.
- Helpers не подключены: типографика, motion and responsive constraints входят в единый дизайн-контракт и не требуют параллельного creative authority.

## 7. Hooks и approval

- Choice gate уже пройден пользователем через последовательный визуальный выбор и corrections; выбранное направление фиксируется без добавления новых вариантов.
- Project-write authorization требуется только для записи спецификации и control-plane state в managed worktree.
- После self-review спецификация показывается пользователю и остаётся `draft` до отдельного review.
- Production implementation запрещён до явного approval письменной спецификации.

## 8. Done check и evidence

- Спецификация не содержит `TBD`, `TODO`, противоречий или непроверяемых требований.
- Все существующие русские routes и четыре case surfaces явно учтены.
- Контентный freeze, no-HUD-copy, no-dot/glow and protected-reading-zone constraints записаны как acceptance requirements.
- Desktop, mobile, pointer, touch, keyboard fallback and reduced-motion behavior определены.
- Reference provenance and non-copying boundary записаны.
- `node --test tests/content/content-contract.test.mjs` проходит без изменения content bytes.
- `validate-project.mjs` проходит для обновлённого control-plane state.
- Пользователю показана ссылка на written spec; пакет не переходит в implementation без его approval.

## 9. Prototype exceptions и learning

- Prototype exceptions: нет.
- Human corrections: убрать дешёвую LED-точечную эстетику, glow, HUD-микрокопию и пересечение графики с основным текстом; использовать плотную глифовую поверхность в отдельной зоне.
- Learning disposition: `project-specific`.
- Candidate rule ref: none.
