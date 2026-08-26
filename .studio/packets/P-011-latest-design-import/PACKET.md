# P-011 Latest Russian design import

## 1. Карточка пакета

- Класс: `auto-tech`.
- Standing: `per-packet`.
- Статус: `ready_for_approval`.
- Владелец: no specialist skill.
- Helpers: нет.
- Следующий специализированный пакет: `visual-qa` (human-selected пользователем).

## 2. Цель

Перенести последнюю локально сохранённую реализацию тёмной русской главной в канонический репозиторий Povkh.Dev через управляемый Harness worktree, чтобы последующий визуальный аудит проверял актуальный сайт, а не старую опубликованную поверхность.

## 3. Scope и точный источник

- Source worktree: `/Users/alessandropovkh/.config/superpowers/worktrees/povkh-dev/P-011-russian-homepage-polish`.
- Source branch: `feat/ru-dark-editorial-home`.
- Source committed head: `754a901` (`feat: polish Russian homepage interactions`).
- Source base: `65e6877`.
- Дополнительно сохранить пять незакоммиченных файлов source worktree: `src/pages/ru/index.astro`, `tests/e2e/home-dark-editorial.spec.ts`, `tests/e2e/visual.spec.ts` и два новых problem-card snapshot.
- Сохранить одобренное состояние P-010, созданное штатным `project-context.mjs approve`.
- Не менять English surface, тексты и факты за пределами уже сохранённого кандидата.
- Не выполнять push, PR, merge, deploy или иное внешнее действие.

## 4. Outputs

- Один bounded commit в managed worktree `feature/p-011-latest-design-import`.
- Актуальная русская тёмная главная, Giulia case assets и связанные regression/visual tests находятся в канонической project branch.
- P-010 approved context и D-015 сохранены без ручного переосмысления.
- Чистый managed worktree и `boundary-verified` receipt.

## 5. Hooks и stop conditions

- Stop при расхождении source head с `754a901`, изменении перечисленного незакоммиченного source diff, конфликте применения или появлении файла вне write-contract roots.
- Stop при drift любого authorization-bound baseline.
- `visual-qa` не запускается до успешного boundary verification этого пакета.

## 6. Done check

- Git diff относительно `65e6877` содержит только объявленную реализацию, assets, тесты и Studio state.
- Content contract проходит в managed worktree.
- Commit создан, worktree чист, project-write controller возвращает `boundary-verified`.
- Результат передан на human review; это не означает push или публикацию.
