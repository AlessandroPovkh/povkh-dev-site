# P-017 Full-site multilingual scope

## 1. Карточка пакета

- Класс согласования: `auto-draft`.
- Standing: `per-packet`.
- Статус: `approved`.
- Владелец: `studio-control-plane`.
- Helpers: нет.
- Project context: `P-016-project-context@e5789d50558521b35fd8b5ce2285ea1311116e14c79612c75ce9fbbe8eb9421b`.
- Surface role: `full-site`.

## 2. Цель

Зафиксировать проверяемый full-site scope Povkh.Dev: сначала улучшить всю русскую поверхность в визуальной системе новой главной, сохранить обязательные English и Italian поверхности и после утверждения RU синхронизировать с ней EN и IT отдельными пакетами.

## 3. Scope

### Делаем

- Создаём `.studio/scope-contract.json` для всей многостраничной поверхности.
- Сохраняем существующие маршруты и полные реальные кейсы КЗМС, ENDOkey, POVKH LAB и Giulia Povkh.
- Закрепляем обязательства `routes`, `inner-pages`, `build`, `seo`, `responsive`, `local-preview`, а также дизайн-систему, кейсы, интерактивность, motion, visual QA и языковую синхронизацию.
- Назначаем каждому обязательству будущий routed packet, не объявляя его выполненным заранее.

### Не делаем

- Не меняем дизайн, тексты, исходный код, ассеты и тесты сайта.
- Не синхронизируем EN или IT до утверждения RU.
- Не выполняем push, PR, merge, deploy, release или публикацию.

## 4. Inputs

- Утверждённый scope context `P-016-project-context` / `D-020`.
- Утверждённый UX/UI context `P-013-project-context` / `D-018`.
- Утверждённый IA context `P-014-project-context` / `D-019`.
- Канонический independent checkout `projects/povkh-dev/` на `main@1ccbb23`.

## 5. Outputs

- `.studio/scope-contract.json` — `draft`.
- Обновлённый `PROJECT.md` с canonical scope-contract reference — `draft`.
- Обновлённая `.studio/route-map.md` с владельцами всех required deliverables — `draft`.
- Проверяемый diff managed worktree — `draft`.

## 6. Hooks и approval

- Stop при сокращении обязательных языков RU/EN/IT, удалении существующего маршрута или кейса, либо попытке пометить непроверенный deliverable как `covered`.
- Stop при изменении site subject files или внешнем действии.
- После done check результат переходит только в human review; это не approval дизайна или реализации.

## 7. Done check и evidence

- `validate-scope-coverage.mjs` не возвращает diagnostics.
- `validate-project.mjs` проходит для project control-plane state.
- Managed worktree чист, commit bounded, `project-write verify` возвращает `boundary-verified`.
- Пользователю показан читаемый scope diff.

## 8. Prototype exceptions и learning

- Prototype exceptions: нет.
- Human corrections: итоговая поверхность обязана включать English и Italian; работа идёт RU-first, затем EN/IT sync.
- Learning disposition: `project-specific`.
- Candidate rule ref: none.
