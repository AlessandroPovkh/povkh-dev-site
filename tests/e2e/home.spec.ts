import { expect, test } from "@playwright/test";

const locales = [
  {
    path: "/",
    title: "Your website should lead to an enquiry. Your brand should help people choose you.",
    primary: "Discuss your project",
    contact: "/contact/",
    cases: [["ENDOkey", "/work/endokey/"], ["POVKH LAB", "/work/povkh-lab/"]],
  },
  {
    path: "/ru/",
    title: "Сайт должен вести к заявке. Бренд — помогать выбрать вас.",
    primary: "Обсудить задачу",
    contact: "/ru/contact/",
    cases: [["ENDOkey", "/ru/work/endokey/"], ["POVKH LAB", "/ru/work/povkh-lab/"]],
  },
];

for (const locale of locales) {
  test(`${locale.path} communicates offer, proof and action in order`, async ({ page }) => {
    await page.goto(locale.path);
    await expect(page.getByRole("heading", { level: 1, name: locale.title })).toBeVisible();
    await expect(page.getByRole("link", { name: locale.primary }).first()).toHaveAttribute("href", locale.contact);
    const selectedWork = page.getByTestId("hero-selected-work");
    await expect(selectedWork.getByRole("link")).toHaveCount(2);
    for (const [name, href] of locale.cases) {
      await expect(selectedWork.getByRole("link", { name: new RegExp(name, "i") })).toHaveAttribute("href", href);
    }
    await expect(page.getByTestId("hero-explorer")).toHaveCount(0);
    await expect(page.getByTestId("proof-strip")).toHaveCount(0);
    await expect(page.locator("main")).not.toContainText(/Public founder profiles will appear|Публичные профили появятся/);

    const order = await page.locator("[data-section]").evaluateAll((sections) =>
      sections.map((section) => section.getAttribute("data-section")),
    );
    expect(order).not.toContain("case-proof");
    expect(order).toEqual(expect.arrayContaining(["signature", "process", "studio-summary", "final-cta"]));
  });
}

test("signature options expose keyboard-selectable state and contextual result", async ({ page }) => {
  await page.goto("/");
  const signature = page.getByTestId("signature");
  const launch = signature.getByRole("button", { name: "Launch" });
  const reframe = signature.getByRole("button", { name: "Reframe" });
  const connect = signature.getByRole("button", { name: "Connect" });

  await expect(launch).toHaveAttribute("aria-pressed", "true");
  await connect.click();
  await expect(connect).toHaveAttribute("aria-pressed", "true");
  await expect(launch).toHaveAttribute("aria-pressed", "false");
  await expect(signature.getByTestId("signature-active")).toContainText("Connect selected");
  await expect(signature.getByTestId("signature-result")).toContainText(/website/i);
  await expect(signature.getByTestId("signature-cta")).toHaveAttribute("href", "/contact/?goal=connect");

  await reframe.focus();
  await page.keyboard.press("Space");
  await expect(reframe).toHaveAttribute("aria-pressed", "true");
  await expect(signature.getByTestId("signature-active")).toContainText("Reframe selected");
});

test("homepage remains complete without JavaScript", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  const selectedWork = page.getByTestId("hero-selected-work");
  await expect(selectedWork.getByRole("link", { name: /ENDOkey/i })).toHaveAttribute("href", "/work/endokey/");
  await expect(selectedWork.getByRole("link", { name: /POVKH LAB/i })).toHaveAttribute("href", "/work/povkh-lab/");
  for (const name of ["Brand", "Web", "Connect"]) {
    await expect(page.getByRole("heading", { name, exact: true })).toBeVisible();
  }
  await expect(page.getByTestId("process-list")).toContainText("Verify & Handover");
  await expect(page.getByTestId("studio-summary")).toContainText("two-person studio");
  await expect(page.getByRole("link", { name: "Discuss your project" }).first()).toHaveAttribute("href", "/contact/");
  await context.close();
});

test("mobile homepage is linear and does not overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 720 });
  await page.goto("/ru/");
  await expect(page.getByTestId("signature")).toBeVisible();
  const dimensions = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  expect(dimensions.content).toBeLessThanOrEqual(dimensions.viewport);
});

test("hero uses one action and selected work instead of a service accordion", async ({ page }) => {
  await page.goto("/ru/");
  const hero = page.locator(".dual-hero");
  await expect(hero.getByRole("link", { name: "Обсудить задачу" })).toHaveCount(1);
  await expect(hero.getByRole("link")).toHaveCount(3);
  await expect(hero.locator("details, summary")).toHaveCount(0);
});

test("signature shows a concrete project path and updates it by goal", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/ru/");
  await expect(page.locator("html")).toHaveAttribute("data-motion", "reduced");
  await expect(page.getByTestId("signature-result")).not.toBeEmpty();
  const flow = page.getByTestId("signature-flow");
  await expect(flow.locator("li")).toHaveCount(4);
  await expect(flow).toContainText("Позиционирование");
  await page.getByRole("button", { name: /Соединить/ }).click();
  await expect(flow).toContainText("CRM");
  await expect(flow).toContainText("Аналитика");
  await expect(page.locator("[data-join-line], .signature-machine")).toHaveCount(0);
});
