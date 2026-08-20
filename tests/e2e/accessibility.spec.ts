import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

for (const path of ["/", "/ru/", "/work/endokey/", "/work/povkh-lab/", "/services/", "/contact/", "/ru/contact/", "/ru/missing/"]) {
  test(`${path} shell has no automatically detectable accessibility violations`, async ({ page }) => {
    await page.goto(path, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page }).analyze();
    expect(results.violations).toEqual([]);
  });
}

test("focus indicator changes the primary CTA outline", async ({ page }) => {
  await page.goto("/");
  const cta = page.getByRole("link", { name: "Discuss your project" }).first();
  await cta.focus();
  const outline = await cta.evaluate((element) => getComputedStyle(element).outlineStyle);
  expect(outline).not.toBe("none");
});

test("opened menu and signature state remain axe-clean", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator("[data-menu-toggle]").click();
  await page.getByRole("button", { name: "Connect" }).click();
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
