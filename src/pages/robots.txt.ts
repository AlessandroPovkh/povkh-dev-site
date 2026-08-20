import type { APIRoute } from "astro";

export const prerender = true;

export const GET: APIRoute = () => {
  const production = __POVKH_SITE_MODE__ === "production";
  const body = production
    ? `User-agent: *\nAllow: /\nSitemap: ${new URL("/sitemap-index.xml", import.meta.env.SITE).href}\n`
    : "User-agent: *\nDisallow: /\n";
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
};
