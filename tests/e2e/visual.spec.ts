import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "chromium", "one deterministic Chromium baseline");
  await page.addInitScript(() => localStorage.setItem("povkh-consent", "denied"));
});

test("EN homepage desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  await expect(page).toHaveScreenshot("home-en-desktop.png", { fullPage: true, animations: "disabled" });
});

test("RU homepage mobile with menu open", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ru/");
  await page.locator("[data-menu-toggle]").click();
  await expect(page).toHaveScreenshot("home-ru-mobile-menu.png", { fullPage: true, animations: "disabled" });
});

test("RU service systems at the desktop-to-tablet boundary", async ({ page }) => {
  await page.setViewportSize({ width: 897, height: 900 });
  await page.goto("/ru/");
  await page.locator(".skip-link").evaluate((element) => { (element as HTMLElement).style.display = "none"; });
  await expect(page.locator('[data-section="services"]')).toHaveScreenshot("home-ru-services-897.png", { animations: "disabled" });
});

test("POVKH LAB X-ray internal state", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/work/povkh-lab/");
  await page.getByRole("button", { name: "System view" }).click();
  await expect(page).toHaveScreenshot("povkh-lab-xray.png", { fullPage: true, animations: "disabled" });
});

test("ENDOkey case desktop", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/ru/work/endokey/");
  await expect(page).toHaveScreenshot("endokey-ru-desktop.png", { fullPage: true, animations: "disabled" });
});

test("ENDOkey case mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ru/work/endokey/");
  await expect(page).toHaveScreenshot("endokey-ru-mobile.png", { fullPage: true, animations: "disabled" });
});

test("contact validation state mobile", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/contact/");
  await page.getByRole("button", { name: "Continue" }).click();
  await expect(page).toHaveScreenshot("contact-validation-mobile.png", { fullPage: true, animations: "disabled" });
});

test("localized RU 404", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/ru/visual-miss/");
  await expect(page).toHaveScreenshot("404-ru-mobile.png", { fullPage: true, animations: "disabled" });
});
