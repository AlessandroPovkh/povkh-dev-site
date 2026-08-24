# Hooks

| ID | Тип | Пакет | Статус | Что нужно / почему | Следующий выбор пользователя |
|---|---|---|---|---|---|
| H-001 | verification_failed | P-001-scope | resolved | POSIX-only Playwright/Lighthouse команды заменены; focused Chromium E2E прошёл 7/7, LHCI на Windows проверил 4 URL и завершился успешно. | закрыт пользовательским rework; evidence в P-001 и commit |
| H-002 | verification_failed | P-001-scope | open | После установки объявленных Firefox/WebKit полный Windows suite выполняет все browser-профили и выявляет продуктовый baseline: E2E 354 passed, 35 skipped, 21 failed; failures относятся к overflow/accessibility/visual snapshots, а не к запуску tooling. | отдельным technical/visual QA scope исправить продуктовые cross-browser failures; не смешивать CSS/snapshot rework с repository attachment |

Типы: `missing_input`, `decision_required`, `scope_conflict`, `review_required`, `verification_failed`.

Статусы: `open`, `resolved`, `waived-for-prototype`.
| H-003 | decision_required | P-002-project-context | resolved | project_identity: Что это за проект? — Уточняет границы и предмет проекта. | Ответить: Что это за проект? |
| H-004 | review_required | P-002-project-context | resolved | Проверить собранный контекст и exact summary | approved или rework с замечаниями |
| H-005 | review_required | P-002-project-context | resolved | Проверить собранный контекст и exact summary | approved или rework с замечаниями |
| H-006 | decision_required | P-004-project-context | resolved | success_criteria: По каким признакам признаём результат успешным? — Задаёт проверяемый критерий готовности. | Ответить: По каким признакам признаём результат успешным? |
| H-007 | review_required | P-004-project-context | resolved | Проверить собранный контекст и exact summary | approved или rework с замечаниями |
| H-008 | missing_input | P-003-demand-serp-semantic-core | waived-for-prototype | Точная причина API 403 подтверждена в Yandex AI Studio: платёжный аккаунт заблокирован из-за задолженности, отображаемый баланс отрицательный. Пользователь решил пока не оплачивать. API не повторялся; пять утверждённых seed-срезов получены бесплатно через авторизованный веб-Wordstat. | платный API остаётся выключен до отдельного решения пользователя; discovery и региональные срезы выполнять через веб-Wordstat в ограниченном ручном режиме |
| H-009 | review_required | P-003-demand-serp-semantic-core | resolved | Пользователь принял направление и усилил его формулировкой про сложные продукты; КЗМС и ENDOkey выбраны как proof pair. | решение перенесено в D-004 и P-005 |
| H-010 | review_required | P-005-commercial-meaning-direction | resolved | Пользователь утвердил коммерческую логику направления. | D-005; следующий structural packet P-006 |
| H-011 | review_required | P-006-complex-product-proof-routes | resolved | Пользователь утвердил продолжение с correction: публично КЗМС описывается как переработка каталога; служебные статусы и внутренняя речь запрещены. | D-007; P-007 Messaging |
| H-012 | review_required | P-007-complex-product-copy | resolved | Пользователь утвердил публичные тексты командой собирать страницы. | D-008; P-008 website build |
| H-013 | review_required | P-008-complex-product-pages | resolved | Пользователь утвердил результат командой отправить все изменения в GitHub сайта. | D-013; P-009 GitHub handoff |
| H-014 | decision_required | P-010-project-context | resolved | content_requirements: Какие материалы и форматы обязательны? — Определяет состав и ограничения контента. | Ответить: Какие материалы и форматы обязательны? |
| H-015 | review_required | P-010-project-context | open | Проверить собранный контекст и exact summary | approved или rework с замечаниями |
