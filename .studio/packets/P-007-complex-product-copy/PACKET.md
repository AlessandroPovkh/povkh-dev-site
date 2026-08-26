# P-007 Complex-product public copy

## 1. Цель

Подготовить готовые к layout русские тексты для главной, списка работ и кейсов КЗМС/ENDOkey, чтобы специализация Povkh.Dev на сложных продуктах подтверждалась выполненными проектами.

## 2. Scope

- Делаем: message hierarchy, claims register, page copy, CTA/microcopy and content gaps for `/ru/`, `/ru/work/`, `/ru/work/kzms/`, `/ru/work/endokey/`.
- Не делаем: не меняем сайт, IA, дизайн, формы или English copy; не публикуем закрытые данные и внутреннюю кухню проекта.

## 3. Inputs

- Approved P-005 commercial strategy.
- Approved P-006 page jobs after D-007 correction.
- KZMS source/result: `https://rosset-kzms.ru/catalog-preview-v5/`, KZMS evidence artifacts and user-confirmed study of sales correspondence.
- ENDOkey source/result: `https://endokey.ru/` and current case file.
- Customer-language evidence from P-003.

## 4. Public-language rules

- КЗМС: `переработка каталога`, без публичного слова `preview` и без внутренних route/status labels.
- Клиентский результат and subject value first; tools, packets, internal validation and local process never enter copy.
- No `не X, а Y`, false contrast, synthetic slogan triads, inflated agency language, guarantees or unsupported superiority.
- Sales correspondence may be named as an analysed source, but no message, identity, customer, price or private fact is exposed.
- “Продвигаем” must be explained through performed work and cannot imply guaranteed results or undeclared SEO/advertising scope.

## 5. Outputs

Declared output root: `.studio/messaging/P-007-complex-product-copy/`.

- `MESSAGE-HIERARCHY.md`, `CLAIMS.json`, `MICROCOPY.md`, `CONTENT-GAPS.md`, `validation.json`
- `pages/ru/COPY.md`
- `pages/ru/work/COPY.md`
- `pages/ru/work/kzms/COPY.md`
- `pages/ru/work/endokey/COPY.md`
- post-draft `site-copy-humanizer` report

## 6. Owner and helper

- Owner: `no specialist skill`; the registered primary implementation `brand-messaging-and-content` is external and unavailable in this workspace, so the complete Messaging contract is applied directly under human review.
- Helper after draft: `site-copy-humanizer`; it may remove synthetic/service language without changing approved meaning, claims or IA.

## 7. Done check

- Every material claim maps to approved evidence.
- Every P-006 content slot and next action is covered.
- Forbidden public-language patterns are absent.
- Humanizer report and mechanical scan pass.
- Product source remains unchanged; project validator, JSON parse and `git diff --check` pass.

## 8. Human gate

Public language requires approval before a Build packet changes `src/` or `public/`.
