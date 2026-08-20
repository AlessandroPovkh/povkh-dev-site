# Hooks

| ID | Тип | Пакет | Статус | Что нужно / почему | Следующий выбор пользователя |
|---|---|---|---|---|---|
| H-001 | verification_failed | P-001-scope | resolved | POSIX-only Playwright/Lighthouse команды заменены; focused Chromium E2E прошёл 7/7, LHCI на Windows проверил 4 URL и завершился успешно. | закрыт пользовательским rework; evidence в P-001 и commit |
| H-002 | verification_failed | P-001-scope | open | После установки объявленных Firefox/WebKit полный Windows suite выполняет все browser-профили и выявляет продуктовый baseline: E2E 354 passed, 35 skipped, 21 failed; failures относятся к overflow/accessibility/visual snapshots, а не к запуску tooling. | отдельным technical/visual QA scope исправить продуктовые cross-browser failures; не смешивать CSS/snapshot rework с repository attachment |

Типы: `missing_input`, `decision_required`, `scope_conflict`, `review_required`, `verification_failed`.

Статусы: `open`, `resolved`, `waived-for-prototype`.
