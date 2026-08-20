# Hooks

| ID | Тип | Пакет | Статус | Что нужно / почему | Следующий выбор пользователя |
|---|---|---|---|---|---|
| H-001 | verification_failed | P-001-scope | open | `npm run test:all` проходит content/server/Astro check/build/verify, затем Windows не запускает Playwright webServer command `ASTRO_DEV_BACKGROUND=0 ...`; тот же POSIX env syntax есть в `test:performance`. Studio-validator проходит, site bytes не менялись. | отдельным scope сделать project scripts cross-platform либо повторить полный suite в поддерживаемой POSIX-среде; до этого P-001 не получает ready_for_review |

Типы: `missing_input`, `decision_required`, `scope_conflict`, `review_required`, `verification_failed`.

Статусы: `open`, `resolved`, `waived-for-prototype`.
