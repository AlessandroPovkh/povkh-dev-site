# Wordstat access blocker

Date: 2026-08-21
Packet: `P-003-demand-serp-semantic-core`
Hook: `H-008`

## What was verified

- The discovery plan passes preflight with five unique seeds and an exact five-call budget.
- Scope is all Russia (`225`), all devices, top-query discovery only.
- The expected local secret files exist in both the managed Codex profile and the Windows user profile.
- Both files contain the same credential pair. No credential value is stored or repeated in this project.
- No alternative Yandex Cloud CLI profile or environment credential was found.

## Confirmed failure

The first request returned HTTP 403. A read-only check in the authorised Yandex AI Studio showed the exact underlying state: the billing account is suspended because of debt and the displayed balance is negative. The run stopped immediately, produced no API data and consumed no follow-up regional budget.

This is not a missing-file problem and there is no evidence that changing the duplicated local profile would help. Yandex Cloud services remain suspended until the billing account is restored.

## Required recovery

The user explicitly chose not to pay the debt now. Do not call the paid Search API again. If the billing account is restored later, verify its active status first and then rerun only `semantic-core-discovery.json` without expanding the seed list.

For the current discovery, the authorised public web interface at [Yandex Wordstat](https://wordstat.yandex.ru/) works without restoring Yandex Cloud billing. Five approved seed views were collected there and are recorded in `WORDSTAT-WEB-DISCOVERY.md`.

## Safety boundary

- Never commit `.env`, API keys, folder identifiers or service-account credentials.
- Never infer exact commercial demand or easy-entry regions from broad Wordstat counts or SERP observations.
- Paid API availability is waived for this prototype. Any web-Wordstat collection remains bounded and manually reviewed.
