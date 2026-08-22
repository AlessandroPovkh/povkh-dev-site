# P-005 Commercial meaning direction

Activation: `STUDIO_EXECUTOR_COMMERCIAL_STRATEGY_V1`

## 1. Цель

Превратить утверждённый рыночный кусок «сложные продукты» в согласованную коммерческую логику Povkh.Dev, которую Messaging и IA смогут использовать без выдумывания ценности, доказательств или обещаний.

## 2. Scope: делаем / не делаем

- Делаем: фиксируем buying situation, альтернативу, value logic, архитектуру предложения, proof sequence, риски выбора, коммерческий путь, primary/secondary action roles и границы публичной формулировки «продвигаем сложные продукты».
- Делаем: используем КЗМС и ENDOkey как разные доказательства способности разобраться в сложном предмете; описываем только метод и утверждённые результаты, не содержание закрытой переписки и не неподтверждённые коммерческие показатели.
- Не делаем: не пишем финальный page copy, не проектируем IA или визуальный стиль, не меняем сайт, не устанавливаем цены и не обещаем лиды, продажи, позиции, сроки или превосходство.

## 3. Входы и доказательность

- Approved context: P-002 / D-001 and P-004 / D-003.
- Approved wedge and proof choice: D-004.
- Demand and competitor evidence: `.studio/research/demand/` including `CUSTOMER-PAINS-AND-WEDGE.md`.
- ENDOkey public case and public site: `src/content/work/ru/endokey.md`, `https://endokey.ru/`.
- KZMS repo evidence: `projects/rosset-kzms/developer-handoff-review/02-project-context/RESEARCH-PACKET.md`, `04-design-and-research/FACT-BUNDLE.md`, `HOMEPAGE-FINDINGS.md`, `artifacts/commercial-strategy/STRATEGY.md`, `artifacts/cro-funnel/HYPOTHESES.md`.
- KZMS private provenance boundary: vault `Рабочие проекты/КЗМС/КЗМС контекст.md` confirms that industry/site material is assembled from correspondence and customer data; sales-email corpus remains intermediate and incomplete. User separately confirmed that sales-department letters were studied. Public artifacts may describe the method, not expose correspondence, identities or private facts.

## 4. Outputs

- `artifacts/commercial-strategy/STRATEGY.md`
- `artifacts/commercial-strategy/VALUE-MAP.json`
- `artifacts/commercial-strategy/OBJECTIONS-PROOF.md`
- `artifacts/commercial-strategy/COMMERCIAL-JOURNEY.md`
- `artifacts/commercial-strategy/CTA-RULES.md`
- `artifacts/commercial-strategy/validation.json`

## 5. Навык-владелец и помощники

- Владелец: `commercial-strategy` via `studio-executor-cs-v1`.
- Readiness: `candidate`, `human-selected-only`; prior evaluation evidence exists, human review remains mandatory.
- Helpers: none. Messaging/copy is intentionally downstream and is not activated in this packet.

## 6. Verification

- Every value/proof row has a source and confidence/status.
- KZMS and ENDOkey are not described as revenue, lead or ranking proof.
- Private correspondence is neither quoted nor summarised into identifiable public claims.
- The word `продвигаем` is bounded so it cannot silently claim ongoing SEO/advertising or guaranteed performance.
- Buying situation, value, proof, risks and CTA roles agree across all artifacts.
- Product source remains unchanged; project validator and `git diff --check` pass.

## 7. Stop conditions and human gate

- Stop with a narrow hook if the strategy requires a price, guarantee, exact segment size, sales handoff, performance claim or private KZMS detail without authority.
- Human approves or returns the bounded direction before Messaging, IA or site changes.
