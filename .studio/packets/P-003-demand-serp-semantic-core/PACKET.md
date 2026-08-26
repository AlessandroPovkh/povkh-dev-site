# P-003 Demand, SERP and semantic discovery

## 1. Цель

Сверить услуги Povkh.Dev с наблюдаемым спросом, собрать ограниченный SERP, выявить боли и покупательские ситуации клиентов, определить защищаемый рыночный кусок и подготовить семантическое ядро для последующей коммерческой стратегии и структуры сайта.

## 2. Scope: делаем / не делаем

- Делаем: повторно используем существующее исследование Studio по услугам агентств и фрилансеров; строим многоформулировочную seed-матрицу по каждой услуге; выполняем bounded Wordstat discovery через бесплатный веб-интерфейс; собираем коммерческие модификаторы, смежные интенты, шум и минус-слова; сохраняем сопоставимый SERP минимум по 10 органическим результатам на основной кластер; размечаем фразы по intent, услуге, сегменту и будущей странице; сравниваем федеральный спрос с ограниченным региональным срезом; отделяем наблюдаемые клиентские боли от гипотез; сравниваем привлекательность покупательских ситуаций с доказуемыми возможностями Povkh.Dev; показываем gaps и исключения.
- Не делаем: не пишем финальный оффер и тексты сайта, не меняем `src/` или `public/`, не обещаем позиции/лиды, не запускаем рекламу и не выдаём частотность за коммерческий результат.

## 3. Входы и готовность

- Approved project context: `P-002-project-context@0f5ffb8782cf13db3c3d8f27a89ee608f23fb07452cd79fb2d242cb714ed5ac6` (`D-001`).
- Project context: `P-004-project-context@ba9e60e1ca0c857b1dd23f7a073f59be49ab4d91cf4ca6e2a03d3fdda96aec8e`
- Existing Studio research: `projects/studio-services/artifacts/market-research/`, `projects/studio-services/artifacts/freelance-market-research/`, `projects/studio-services/artifacts/service-architecture/`.
- Current Povkh.Dev service/content files: `src/content/services/ru.json`, `src/content/site/ru.json`, `src/content/faq/ru.json`, `src/content/process/ru.json`.
- Geography: вся Россия; русскоязычная выдача.
- Regional question: после федерального discovery определить регионы с достаточным спросом и более доступным входом по наблюдаемой насыщенности SERP.
- Blocking: платный Search API недоступен из-за `H-008`, но бесплатный авторизованный веб-Wordstat работает; discovery продолжается вручную с явной фиксацией периода, региона, broad-match природы данных и источника.

## 4. Outputs

- Source register for reused research and fresh demand evidence.
- Discovery seed matrix with `supported`, `verify` and `excluded` states.
- Raw exports and normalized Wordstat discovery table for the reviewed multi-seed matrix; paid Search API is not required while `H-008` is waived.
- SERP evidence table with at least 10 comparable organic results for each retained primary commercial cluster.
- Semantic-core draft: phrase → demand scope → intent → service → audience → cluster/page → evidence → risk/exclusion.
- Regional opportunity comparison that keeps demand, SERP supply density and entry hypothesis as separate fields.
- Customer-pain and buying-situation map with source, confidence, current alternative and decision risk.
- Wedge recommendation that states whom to target first, what bounded outcome to sell, why Povkh.Dev can credibly compete, what not to promise and what evidence is still missing.
- Handoff into the later Commercial Strategy packet; no automatic activation.

## 5. Навык-владелец и помощники

- Владелец: `market-customer-research`
- Readiness: `candidate`; prior ENDOKEY/ROSSET evals failed; `human-selected-only`; every interpretation requires human review.
- Source connector: global `wordstat-pipeline`; it fetches facts only and does not decide commerciality or clustering.
- SEO owner: not activated. Registered `seo` remains `not-routable` because its large candidate and 38 scripts have not passed bounded trust/eval review.

## 6. Почему выбрано / не выбрано

- Market/customer research owns demand language, competitors and buying-decision evidence.
- Wordstat is used only for bounded current demand facts.
- SEO cannot be selected under the current registry; therefore SERP clustering remains a manually reviewed draft, not trusted automatic SEO authority.

## 7. Hooks и approvals

- География и язык подтверждены пользователем: вся Россия, русскоязычная выдача; нужен отдельный regional-potential срез.
- Human review is required for the candidate owner, every cluster decision and the final draft.
- A separate capability gap remains for a trusted bounded SEO/SERP module.

## 8. Done check и evidence

- Initial semantic-core preflight passed for 5 unique seeds; this smoke-check is retained as baseline only and is explicitly insufficient for final clustering.
- First Search API request returned HTTP 403 before producing data. Yandex AI Studio then confirmed the exact cause: suspended billing account with debt. Both local profiles resolve to the same credential; no retry, payment or secret copy was performed.
- Free authorised web-Wordstat returned all five approved all-region seed views for 2026-07-20 through 2026-08-18. See `.studio/research/demand/WORDSTAT-WEB-DISCOVERY.md`; broad counts are vocabulary evidence, not exact commercial-demand estimates.
- Every retained primary service cluster has multiple seed formulations, commercial modifiers, excluded noise, and a reproducible source/date/region record.
- Every retained primary cluster has at least 10 comparable organic SERP results or an explicit evidence-gap record explaining why the threshold was not met.
- Regional conclusions compare like-for-like phrases and do not equate low visible competition with easy entry.
- Every retained phrase has demand evidence, intent, service, audience, cluster/page and risk/exclusion rationale.
- SERP evidence records query, locale, date, result URLs/titles and observed intent without invented rankings.
- Existing Studio research coverage and limitations remain visible.
- Observed pains, inferred pains and unknowns are kept separate; the recommended wedge is checked against current delivery evidence and does not depend on unsupported superiority, price, timeline or outcome claims.
- Initial pain/wedge draft: `.studio/research/demand/CUSTOMER-PAINS-AND-WEDGE.md`; human choice remains open under `H-009` before Commercial Strategy activation.
- Project validator passes; product source files remain unchanged.

## 9. Stop conditions

- Geography remains unresolved; Wordstat secret/API is unavailable; API returns 429/quota; prior research source is unreadable; a query depends on an unsupported service; SERP interpretation requires the blocked SEO owner; or evidence cannot support a proposed cluster.
