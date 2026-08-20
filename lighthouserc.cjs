module.exports = {
  ci: {
    collect: {
      startServerCommand: "HOST=127.0.0.1 PORT=4322 node dist/server/entry.mjs",
      startServerReadyPattern: "Server listening",
      url: [
        "http://127.0.0.1:4322/",
        "http://127.0.0.1:4322/work/povkh-lab/",
        "http://127.0.0.1:4322/services/",
        "http://127.0.0.1:4322/contact/",
      ],
      numberOfRuns: 1,
      settings: {
        chromeFlags: "--headless=new --no-sandbox",
        onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
        skipAudits: ["is-crawlable"],
      },
    },
    assert: {
      assertions: {
        "categories:performance": ["error", { minScore: 0.95 }],
        "categories:accessibility": ["error", { minScore: 0.95 }],
        "categories:best-practices": ["error", { minScore: 0.95 }],
        "categories:seo": ["error", { minScore: 0.95 }],
        "largest-contentful-paint": ["error", { maxNumericValue: 2500 }],
        "cumulative-layout-shift": ["error", { maxNumericValue: 0.1 }],
      },
    },
    upload: { target: "filesystem", outputDir: "./artifacts/lighthouse" },
  },
};
