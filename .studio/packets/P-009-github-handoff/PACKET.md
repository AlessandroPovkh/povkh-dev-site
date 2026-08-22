# P-009 GitHub handoff

## 1. Цель

Зафиксировать все накопленные утверждённые изменения Povkh.Dev, отправить их в GitHub и обновить существующий pull request сайта.

## 2. Scope

- Делаем: коммитим текущие изменения кода, контента, тестов, публичных assets и Studio state; отправляем commit в `djegor315-sketch/povkh-dev-site:chore/studio-harness-attach`; обновляем существующий PR №1 в `AlessandroPovkh/povkh-dev-site:main` и переводим его из draft в ready for review.
- Не делаем: не коммитим локальные browser logs/screenshots из `output/`; не сливаем PR; не выполняем deployment или release; не меняем другие репозитории и ветки.

## 3. Inputs and readiness

- P-002, P-004, P-005, P-006, P-007 и P-008 завершены и отражены в текущем working tree.
- Пользователь явно утвердил P-008 и внешнее GitHub-действие решением D-013.
- Upstream base: `ca3aec6`; существующий PR №1 содержит commits `ae39c5d` и `5450941`; текущая ветка начинается с `5450941`.

## 4. Owner and helpers

- Owner: `no specialist skill`; операция является bounded Git handoff.
- Process helper: `superpowers:finishing-a-development-branch`.
- Verification helper: `superpowers:verification-before-completion`.

## 5. Done check

- Секреты и временные browser outputs отсутствуют в staged tree.
- Content/server/tooling, Astro check, build, build verification и согласованный browser regression проходят с отдельно раскрытым H-002 baseline.
- Commit создан на текущей named branch.
- Тот же commit отправлен в fork branch существующего PR №1.
- PR №1 обновлён, не находится в draft и остаётся unmerged.
- Локальный worktree сохранён.

## 6. Stop conditions

- Stop при появлении upstream commits после preflight, конфликте, отклонённом non-fast-forward push, найденном секрете или неожиданном файле вне объявленного проекта.
- Не использовать force-push.

## 7. Evidence

- Status: `active`.
