import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import { join } from "node:path";

const root = new URL("../dist/client/", import.meta.url);
const mode = process.env.POVKH_SITE_MODE || "preview";
const origin = process.env.POVKH_SITE_ORIGIN || "";
const pairs = [
  ["/", "/ru/"],
  ["/work/", "/ru/work/"],
  ["/work/endokey/", "/ru/work/endokey/"],
  ["/work/povkh-lab/", "/ru/work/povkh-lab/"],
  ["/services/", "/ru/services/"],
  ["/process/", "/ru/process/"],
  ["/studio/", "/ru/studio/"],
  ["/blog/", "/ru/blog/"],
  ["/contact/", "/ru/contact/"],
  ["/privacy/", "/ru/privacy/"],
  ["/cookies/", "/ru/cookies/"],
];

function outputPath(route) {
  return route === "/" ? "index.html" : join(route.slice(1), "index.html");
}

function publicUrl(route) {
  return mode === "production" ? new URL(route, origin).href : route;
}

for (const [en, ru] of pairs) {
  for (const [route, locale, alternate] of [[en, "en", ru], [ru, "ru", en]]) {
    const html = await readFile(new URL(outputPath(route), root), "utf8");
    assert.match(html, new RegExp(`<html[^>]+lang=["']${locale}["']`), `${route} language`);
    assert.ok(html.includes(`rel="canonical" href="${publicUrl(route)}"`), `${route} canonical`);
    assert.ok(html.includes(`hreflang="${locale}" href="${publicUrl(route)}"`), `${route} self hreflang`);
    assert.ok(html.includes(`hreflang="${locale === "en" ? "ru" : "en"}" href="${publicUrl(alternate)}"`), `${route} reciprocal hreflang`);
    assert.ok(html.includes("hreflang=\"x-default\""), `${route} x-default`);
    assert.ok(html.includes("/og/povkh-dev-og.png"), `${route} OG image`);
    assert.ok(html.includes("application/ld+json"), `${route} structured data`);
    assert.doesNotMatch(html, /\/Users\//, `${route} must not expose local filesystem paths`);
    assert.ok(html.includes(mode === "production" ? "index, follow" : "noindex, nofollow"), `${route} robots meta`);
    if (mode === "production") assert.doesNotMatch(html, /(?:localhost|\.example)/i, `${route} production placeholder`);
  }
}

await access(new URL("og/povkh-dev-og.png", root));
const static404 = await readFile(new URL("404.html", root), "utf8");
assert.ok(static404.includes('data-locale-404="en"'), "static 404 English recovery");
assert.ok(static404.includes('data-locale-404="ru"'), "static 404 Russian recovery");
const robots = await readFile(new URL("robots.txt", root), "utf8");
assert.ok(robots.includes(mode === "production" ? "Allow: /" : "Disallow: /"), "robots policy");
if (mode === "production") {
  const sitemap = await readFile(new URL("sitemap-index.xml", root), "utf8");
  assert.ok(sitemap.includes(new URL("/sitemap-0.xml", origin).href), "sitemap index origin");
}

console.log(`Verified ${pairs.length * 2} localized ${mode} routes and discoverability artifacts.`);
