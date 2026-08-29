# Local run

From the P-029 managed worktree:

```sh
npm run dev -- --host 127.0.0.1 --ignore-lock
```
Open `http://127.0.0.1:4321/ru/`.

Validation commands:

```sh
npm run check
npm run test:content
npm run build
npx playwright test tests/e2e/aurora-backdrop.spec.ts tests/e2e/home-dark-editorial.spec.ts tests/e2e/ru-inner-heroes.spec.ts --project=chromium --workers=4
git diff --check
```
