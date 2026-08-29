import { expect, test } from "@playwright/test";

const routes = [
  "/ru/services/",
  "/ru/process/",
  "/ru/work/",
  "/ru/studio/",
  "/ru/blog/",
  "/ru/contact/",
  "/ru/privacy/",
  "/ru/cookies/",
  "/ru/404/",
] as const;

for (const route of routes) {
  test(`${route} has a composed route-specific first screen`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(route, { waitUntil: "load" });
    const signal = page.locator("[data-inner-hero-signal]").first();
    await expect(signal).toBeVisible();
    await expect(signal).toHaveAttribute("data-variant", /.+/);
    const bounds = await signal.boundingBox();
    expect(bounds?.height ?? 0).toBeGreaterThan(180);
    expect(bounds?.y ?? 1000).toBeLessThan(650);
  });
}
