import { expect, test } from "@playwright/test";

const publicRoutes = [
  "/", "/work/", "/work/endokey/", "/work/povkh-lab/", "/services/", "/process/", "/studio/", "/blog/", "/contact/", "/privacy/", "/cookies/", "/missing/",
  "/ru/", "/ru/work/", "/ru/work/endokey/", "/ru/work/povkh-lab/", "/ru/services/", "/ru/process/", "/ru/studio/", "/ru/blog/", "/ru/contact/", "/ru/privacy/", "/ru/cookies/", "/ru/missing/",
];

test("display typography stays inside its layout box across public routes", async ({ page, browserName }) => {
  test.skip(browserName !== "chromium", "One deterministic browser is enough for the geometry matrix.");
  const failures: string[] = [];

  for (const width of [320, 375, 768, 897, 1024, 1280]) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of publicRoutes) {
      await page.goto(route);
      await page.evaluate(() => document.fonts.ready);
      const overflowing = await page.locator("h1, h2, h3, p, li, button, summary, legend, figcaption, dt, dd, .wordmark, .footer-mark").evaluateAll((nodes) =>
        nodes
          .filter((node) => {
            const element = node as HTMLElement;
            return !element.matches(".signature-flow li") && element.getClientRects().length > 0 && element.clientWidth > 0 && element.scrollWidth > element.clientWidth + 1;
          })
          .map((node) => `${node.tagName.toLowerCase()}.${(node as HTMLElement).className}: ${node.textContent?.trim().slice(0, 60)}`),
      );
      failures.push(...overflowing.map((item) => `${route} @ ${width}px — ${item}`));
    }
  }

  expect(failures, failures.join("\n")).toEqual([]);
});

test("public shell loads without browser console errors", async ({ page }) => {
  const errors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  await page.goto("/ru/");
  await page.waitForLoadState("networkidle");
  expect(errors).toEqual([]);
});

test("public shell declares a working favicon", async ({ page, request }) => {
  await page.goto("/");
  const href = await page.locator('link[rel="icon"]').getAttribute("href");
  expect(href).toBeTruthy();
  const response = await request.get(href!);
  expect(response.ok()).toBe(true);
});

test("mobile analytics consent does not cover focused page controls", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/ru/");
  const consent = page.getByTestId("consent-controls");
  await expect(consent).toHaveCSS("position", "static");
  const finalCta = page.getByRole("link", { name: "Обсудить задачу" }).last();
  await finalCta.focus();
  await finalCta.scrollIntoViewIfNeeded();
  const [controlBox, consentBox] = await Promise.all([finalCta.boundingBox(), consent.boundingBox()]);
  expect(controlBox && consentBox).toBeTruthy();
  const overlap = Math.max(0, Math.min(controlBox!.y + controlBox!.height, consentBox!.y + consentBox!.height) - Math.max(controlBox!.y, consentBox!.y));
  expect(overlap).toBe(0);
});

test("long Russian labels reflow without clipping on narrow screens", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  for (const [route, selector] of [
    ["/ru/", "[data-signature-step]"],
    ["/ru/work/", "#case-list-title"],
    ["/ru/privacy/", ".content-shell > article h1"],
  ] as const) {
    await page.goto(route);
    await page.evaluate(() => document.fonts.ready);
    const clipped = await page.locator(selector).evaluateAll((nodes) => nodes.some((node) => {
      const element = node as HTMLElement;
      const rect = element.getBoundingClientRect();
      return element.scrollWidth > element.clientWidth + 1 || rect.left < -1 || rect.right > innerWidth + 1;
    }));
    expect(clipped, `${route} ${selector}`).toBe(false);
  }
});

test("mobile contact choices stay inside the form grid", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/ru/contact/");
  const geometry = await page.locator(".choice-grid").evaluate((grid) => ({ client: grid.clientWidth, scroll: grid.scrollWidth }));
  expect(geometry.scroll).toBeLessThanOrEqual(geometry.client);
});

test("200 percent zoom preserves reading and controls without horizontal overflow", async ({ page }) => {
  // Browser zoom halves the CSS viewport: 640px at 200% reflows as 320 CSS px.
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/ru/services/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  const dimensions = await page.evaluate(() => ({ viewport: document.documentElement.clientWidth, content: document.documentElement.scrollWidth }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});

test("mobile navigation and contact step targets remain at least 44 pixels", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ru/contact/");
  for (const locator of [page.locator("[data-menu-toggle]"), page.getByLabel("Сайт с интеграциями"), page.getByRole("button", { name: "Продолжить" })]) {
    const box = await locator.boundingBox();
    expect(box?.width).toBeGreaterThanOrEqual(44);
    expect(box?.height).toBeGreaterThanOrEqual(44);
  }
});

test("reduced motion removes meaningful transitions", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "reduced");
  const duration = await page.getByRole("button", { name: "Connect" }).evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(duration.split(",").every((value) => Number.parseFloat(value) <= 0.00001)).toBe(true);
});

test("localized 404 remains useful with JavaScript disabled", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  const response = await page.goto("/ru/not-found-without-js/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1, name: "Страница не найдена" })).toBeVisible();
  await expect(page.getByRole("link", { name: "На главную" })).toHaveAttribute("href", "/ru/");
  await context.close();
});
