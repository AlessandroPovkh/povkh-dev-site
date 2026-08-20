import { readFile } from "node:fs/promises";
import { expect, test } from "@playwright/test";

async function caseEvidence(locale: "en" | "ru") {
  const source = await readFile(
    new URL(`../../src/content/work/${locale}/povkh-lab.md`, import.meta.url),
    "utf8",
  );
  const dateValue = source.match(/^evidenceDate:\s*(.+)$/m)?.[1]?.trim();
  const publicSource = source.match(/^publicSource:\s*(.+)$/m)?.[1]?.trim();
  if (!dateValue || !publicSource) throw new Error(`Missing evidence metadata for ${locale}`);
  return {
    date: new Intl.DateTimeFormat(locale === "ru" ? "ru-RU" : "en-GB", {
      dateStyle: "medium",
      timeZone: "UTC",
    }).format(new Date(dateValue)),
    publicSource,
  };
}

test.describe("localized work cases", () => {
  test("publishes client and founder-led work with case-specific links", async ({ page }) => {
    for (const route of ["/work/", "/ru/work/"]) {
      const locale = route.startsWith("/ru") ? "ru" : "en";
      const expectedEvidence = await caseEvidence(locale);
      await page.goto(route);
      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        route.startsWith("/ru") ? "ru" : "en",
      );
      await expect(page.locator("main").getByRole("heading", { level: 1 })).toContainText(
        route.startsWith("/ru") ? "Сделано" : "Built",
      );
      await expect(page.locator(".case-list-item")).toHaveCount(2);
      await expect(page.getByText(/client work|клиентский проект/i).first()).toBeVisible();
      await expect(page.getByText(/founder-led|основател/i).first()).toBeVisible();
      await expect(page.locator("[data-case-evidence]").last()).toContainText(expectedEvidence.date);
      await expect(page.locator("[data-case-evidence]").last()).toContainText(expectedEvidence.publicSource);
      await expect(page.locator("main")).not.toContainText("/Users/");
      const links = page.locator(".case-preview .button");
      await expect(links).toHaveCount(2);
      await expect(links.nth(0)).toHaveAccessibleName(route.startsWith("/ru") ? "Читать кейс ENDOkey" : "Read the ENDOkey case");
      await expect(links.nth(1)).toHaveAccessibleName(route.startsWith("/ru") ? "Читать кейс POVKH LAB" : "Read the POVKH LAB case");
      await expect(links.nth(0)).toHaveAttribute("href", route.startsWith("/ru") ? "/ru/work/endokey/" : "/work/endokey/");
      await expect(links.nth(1)).toHaveAttribute("href", route.startsWith("/ru") ? "/ru/work/povkh-lab/" : "/work/povkh-lab/");
    }
  });

  test("ENDOkey route states the delivered scope without invented outcomes", async ({ page }) => {
    for (const route of ["/work/endokey/", "/ru/work/endokey/"]) {
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1, name: "ENDOkey" })).toBeVisible();
      await expect(page.getByText(/client work|клиентский проект/i).first()).toBeVisible();
      await expect(page.getByRole("link", { name: /Visit ENDOkey|Открыть ENDOkey/i })).toHaveAttribute("href", "https://endokey.ru/");
      await expect(page.locator("main")).toContainText(/Positioning|Позиционирование/i);
      await expect(page.locator("main")).toContainText(/Identity|Айдентика/i);
      await expect(page.locator("main")).toContainText(/Copy|Тексты/i);
      await expect(page.locator("main")).toContainText(/Website|Сайт/i);
      await expect(page.locator("main")).not.toContainText(/\d+%|guarantee(?:d|s)? (?:leads|sales)|(?:increased|grew|improved) (?:leads|sales|conversion)|рост (?:лидов|продаж|конверсии) (?:на|составил)/i);
      await expect(page.getByTestId("language-switch")).toHaveAttribute("href", route.startsWith("/ru") ? "/work/endokey/" : "/ru/work/endokey/");
    }
  });

  test("ENDOkey case does not overflow a narrow mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto("/ru/work/endokey/");
    const dimensions = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      content: document.documentElement.scrollWidth,
    }));
    expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
  });

  test("case route exposes disclosure, dated evidence, and result boundary", async ({ page }) => {
    for (const route of ["/work/povkh-lab/", "/ru/work/povkh-lab/"]) {
      const locale = route.startsWith("/ru") ? "ru" : "en";
      const expectedEvidence = await caseEvidence(locale);
      await page.goto(route);
      await expect(page.getByRole("heading", { level: 1, name: "POVKH LAB" })).toBeVisible();
      await expect(page.getByRole("link", { name: /Visit POVKH LAB|Открыть сайт POVKH LAB/i })).toHaveAttribute(
        "href",
        "https://alessandropovkh.github.io/POVKH-LAB/",
      );
      await expect(page.getByText(/founder-led|проект основателей/i).first()).toBeVisible();
      await expect(page.getByText(/not an external client engagement|не внешний клиентский контракт/i).first()).toBeVisible();
      await expect(page.locator("[data-case-evidence]").first()).toContainText(expectedEvidence.date);
      await expect(page.locator("[data-case-evidence]").first()).toContainText(expectedEvidence.publicSource);
      await expect(page.locator("main")).not.toContainText("/Users/");
      await expect(page.getByText(/does not claim|не заявляет|не содержит заявлений/i).first()).toBeVisible();
      await expect(page.getByRole("heading", { name: /catalog|каталог/i })).toBeVisible();
      await expect(page.getByRole("heading", { name: /quality|качеств|qa/i })).toBeVisible();
    }
  });

  test("X-ray is operable with two buttons and a static text equivalent", async ({ page }) => {
    await page.goto("/work/povkh-lab/");
    const xray = page.locator("[data-xray]");
    const audienceButton = xray.getByRole("button", { name: "Audience view" });
    const systemButton = xray.getByRole("button", { name: "System view" });
    await expect(audienceButton).toHaveAttribute("aria-pressed", "true");
    await expect(systemButton).toHaveAttribute("aria-pressed", "false");
    await expect(audienceButton).toHaveAttribute("aria-controls", "xray-audience-panel");
    await expect(systemButton).toHaveAttribute("aria-controls", "xray-system-panel");
    await expect(xray.locator('[data-xray-panel="audience"]')).toBeVisible();
    await systemButton.click();
    await expect(systemButton).toHaveAttribute("aria-pressed", "true");
    await expect(audienceButton).toHaveAttribute("aria-pressed", "false");
    await expect(xray.locator('[data-xray-panel="system"]')).toBeVisible();
    await expect(xray.locator("[data-xray-static]")).toBeVisible();
    await expect(xray.locator("[data-xray-static]")).toContainText("Audience view");
    await expect(xray.locator("[data-xray-static]")).toContainText("System view");
  });

  test("case assets are local and load successfully", async ({ page, request }) => {
    await page.goto("/work/povkh-lab/");
    const assets = await page.locator("img[data-case-asset]").evaluateAll((images) =>
      images.map((image) => ({ src: (image as HTMLImageElement).src, alt: image.getAttribute("alt") })),
    );
    expect(assets.length).toBeGreaterThanOrEqual(3);
    for (const asset of assets) {
      expect(new URL(asset.src).pathname).toMatch(/^\/assets\/work\/povkh-lab\//);
      expect(asset.alt).toBeTruthy();
      const response = await request.get(asset.src);
      expect(response.ok()).toBe(true);
    }
  });

  test("case remains readable without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("/work/povkh-lab/");
    await expect(page.getByRole("heading", { level: 1, name: "POVKH LAB" })).toBeVisible();
    await expect(page.locator("[data-xray-static]")).toBeVisible();
    await expect(page.getByText(/founder-led/i).first()).toBeVisible();
    await context.close();
  });

  test("ENDOkey case remains readable without JavaScript", async ({ browser }) => {
    const context = await browser.newContext({ javaScriptEnabled: false });
    const page = await context.newPage();
    await page.goto("/work/endokey/");
    await expect(page.getByRole("heading", { level: 1, name: "ENDOkey" })).toBeVisible();
    await expect(page.getByRole("link", { name: /Visit ENDOkey/i })).toHaveAttribute("href", "https://endokey.ru/");
    await context.close();
  });
});
