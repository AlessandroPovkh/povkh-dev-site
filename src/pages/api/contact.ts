import type { APIRoute } from "astro";
import { contactGuard, handleContactSubmission } from "../../server/contact";
import { sendContactMail } from "../../server/mail";

export const prerender = false;

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const started = performance.now();
  const requestId = crypto.randomUUID();
  const contentType = request.headers.get("content-type") ?? "";
  const contentLength = Number(request.headers.get("content-length") ?? "0");
  let result;

  if (!contentType.startsWith("application/json") || contentLength > 32_768) {
    result = { category: "validation_error" as const, status: 400 as const };
  } else {
    let raw: unknown;
    try {
      raw = await request.json();
    } catch {
      raw = null;
    }
    result = await handleContactSubmission({
      raw,
      ip: clientAddress || "unknown",
      guard: contactGuard,
      deliver: (submission) => sendContactMail(submission, requestId),
    });
  }

  console.info(JSON.stringify({
    event: "contact_submission",
    requestId,
    category: result.category,
    status: result.status,
    durationMs: Math.round(performance.now() - started),
  }));

  return new Response(JSON.stringify({
    category: result.category,
    ...(result.category === "validation_error" && "errors" in result ? { errors: result.errors } : {}),
  }), {
    status: result.status,
    headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" },
  });
};

export const ALL: APIRoute = () => new Response(null, {
  status: 405,
  headers: { allow: "POST", "cache-control": "no-store" },
});
