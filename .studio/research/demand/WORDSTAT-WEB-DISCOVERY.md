# Free web-Wordstat discovery

Collected: 2026-08-21
Source: [Yandex Wordstat](https://wordstat.yandex.ru/) in an authorised browser session
Displayed statistics period: 2026-07-20 through 2026-08-18
Region filter: all regions
Device filter: default all-device view

## Approved seed results

| Seed phrase | Displayed broad count | Observed useful vocabulary | Noise / interpretation risk |
|---|---:|---|---|
| разработка сайтов для бизнеса | 236 | для малого бизнеса — 66; веб-сайтов для бизнеса — 53; создание сайтов для бизнеса — 50; под ключ — 15 | narrow wording; count includes all phrases containing the seed words and is not total website-development demand |
| брендинг компании | 375 | создание брендинга компании — 22; разработка брендинга компании — 17; примеры — 9 | HR-брендинг — 51 and named-company research add non-service intent |
| построение воронки продаж | 135 | no additional rows appeared in the visible top table | wording is narrow and may miss “настроить”, “создать”, “автоворонка”, CRM and lead-generation language |
| seo продвижение сайта | 9,782 | заказать — 916; цена — 599; оптимизация и продвижение — 584; стоимость — 253; услуги — 205 | heavily contaminated by named agencies/tools, informational phrases, jobs and regional phrases; not directly comparable with other seeds |
| настройка контекстной рекламы | 693 | Директ — 217; в Яндекс — 193; в Яндекс Директ — 166; услуги — 44; заказать — 29; ведение — 27 | mixed with training, courses, jobs and specialist-search intent |

## What these numbers mean

These are the interface's “Общее число запросов” values for broad phrase-containing views, not exact-match counts, unique users, leads or sales. They prove current search vocabulary and provide a discovery ordering only. They do not justify statements such as “SEO demand is 41 times higher than funnel demand” because the seeds have different breadth and noise.

## Immediate semantic decisions

- Retain all five service clusters as observed vocabulary.
- For website development, expand later around `создание сайта`, `заказать сайт`, `корпоративный сайт`, `лендинг` and business-type modifiers rather than relying on one narrow seed.
- Separate corporate branding from HR branding, examples and named-company research.
- Expand funnel research into user language around automation, CRM, lead generation, customer journey and conversion; the current seed is too narrow.
- Split SEO commercial modifiers (`заказать`, `цена`, `стоимость`, `услуги`) from branded, educational and job noise.
- Split context-ad setup/management intent from training, vacancy and DIY intent.

## Next bounded free pass

Review commercial modifier seeds first, then use the web interface's `Регионы` view only for the retained shortlist. Do not automate high-volume scraping, bypass captchas or treat the public interface as a replacement for a production API pipeline.
