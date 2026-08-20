# Decision Log

| Дата | Решение | Кто утвердил | Причина | Затронутые артефакты |
|---|---|---|---|---|
| 2026-08-20 | Использовать `AlessandroPovkh/povkh-dev-site` как канонический отдельный репозиторий Povkh.Dev и связать его с Harness без submodule | пользователь | явная команда в чате; соответствует утверждённой схеме отдельных project repositories | `PROJECT.md`, `.studio/`, Harness registry, PR #4 |
| 2026-08-20 | При `READ`-доступе отправить Studio-слой через fork pull request; не выполнять force-push или изменение site surface | системная граница и пользовательский scope | upstream принадлежит AlessandroPovkh; текущая GitHub identity не имеет write authority | P-001, внешний PR |
| 2026-08-20 | В рамках rework P-001 устранить POSIX-only команды средствами Node/Playwright; после воспроизводимого upstream `chrome-launcher` EPERM использовать штатный LHCI Puppeteer-runner с pinned `puppeteer-core`; принудительно переопределять inherited performance env через Node runner | пользователь | явная команда «сделай»; встроенный launcher трижды завершил готовый Windows-аудит ошибкой очистки профиля; review доказал, что `--env-file` не переопределяет CI env | `package.json`, `package-lock.json`, `playwright.config.ts`, `lighthouserc.cjs`, `scripts/performance-runner.mjs`, `scripts/lighthouse-session.cjs`, `tests/tooling/performance-runner.test.mjs` |
