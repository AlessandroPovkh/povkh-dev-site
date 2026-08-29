import { expect, test } from "@playwright/test";

const expectedFields: Record<string, number> = {
  "/ru/services/": 8,
  "/ru/process/": 8,
  "/ru/work/": 4,
  "/ru/studio/": 5,
  "/ru/blog/": 3,
};

for (const [route, minimum] of Object.entries(expectedFields)) {
  test(`${route} carries the signal system through the page body`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("[data-signal-field]")).toHaveCount(minimum);

    await page.setViewportSize({ width: 390, height: 844 });
    await page.reload();
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
  });
}

test("work index gives every case a distinct visual field", async ({ page }) => {
  await page.goto("/ru/work/");
  const variants = await page.locator("[data-case-field]").evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute("data-variant")),
  );
  expect(new Set(variants).size).toBe(4);
});
