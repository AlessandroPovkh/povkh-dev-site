import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

const mode = process.env.POVKH_SITE_MODE || "preview";
const origin = process.env.POVKH_SITE_ORIGIN || "";
const analyticsProvider = process.env.POVKH_ANALYTICS_PROVIDER || "";
const analyticsEndpoint = process.env.POVKH_ANALYTICS_ENDPOINT || "";

if (!new Set(["preview", "production"]).has(mode)) {
  throw new Error("POVKH_SITE_MODE must be preview or production");
}

if (mode === "production") {
  let parsed;
  try {
    parsed = new URL(origin);
  } catch {
    throw new Error("Production requires POVKH_SITE_ORIGIN as an absolute HTTPS URL");
  }

  if (parsed.protocol !== "https:" || parsed.hostname.endsWith(".example")) {
    throw new Error("Production requires an approved HTTPS origin outside .example");
  }

  const requiredContactVariables = [
    "POVKH_PUBLIC_CONTACT_EMAIL",
    "POVKH_SMTP_HOST",
    "POVKH_SMTP_PORT",
    "POVKH_SMTP_USER",
    "POVKH_SMTP_PASS",
    "POVKH_SMTP_FROM",
    "POVKH_SMTP_TO",
  ];
  const missingContactVariables = requiredContactVariables.filter((name) => !process.env[name]);
  if (missingContactVariables.length) {
    throw new Error(`Production contact delivery requires: ${missingContactVariables.join(", ")}`);
  }

  if (!analyticsProvider || !analyticsEndpoint) {
    throw new Error("Production requires an owner-approved POVKH_ANALYTICS_PROVIDER and POVKH_ANALYTICS_ENDPOINT");
  }
  let parsedAnalyticsEndpoint;
  try {
    parsedAnalyticsEndpoint = new URL(analyticsEndpoint);
  } catch {
    throw new Error("POVKH_ANALYTICS_ENDPOINT must be an absolute HTTPS URL");
  }
  if (parsedAnalyticsEndpoint.protocol !== "https:") {
    throw new Error("POVKH_ANALYTICS_ENDPOINT must be an absolute HTTPS URL");
  }
}

export default defineConfig({
  site: origin || undefined,
  devToolbar: { enabled: false },
  adapter: node({ mode: "standalone" }),
  integrations: mode === "production" ? [sitemap()] : [],
  vite: {
    define: {
      __POVKH_SITE_MODE__: JSON.stringify(mode),
      __POVKH_ANALYTICS_ENDPOINT__: JSON.stringify(mode === "production" ? analyticsEndpoint : ""),
    },
  },
});
