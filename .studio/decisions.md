# Decision Log

| Дата | Решение | Кто утвердил | Причина | Затронутые артефакты |
|---|---|---|---|---|
| 2026-08-20 | Использовать `AlessandroPovkh/povkh-dev-site` как канонический отдельный репозиторий Povkh.Dev и связать его с Harness без submodule | пользователь | явная команда в чате; соответствует утверждённой схеме отдельных project repositories | `PROJECT.md`, `.studio/`, Harness registry, PR #4 |
| 2026-08-20 | При `READ`-доступе отправить Studio-слой через fork pull request; не выполнять force-push или изменение site surface | системная граница и пользовательский scope | upstream принадлежит AlessandroPovkh; текущая GitHub identity не имеет write authority | P-001, внешний PR |
