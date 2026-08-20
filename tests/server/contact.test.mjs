import assert from "node:assert/strict";
import test from "node:test";
import {
  ContactGuard,
  handleContactSubmission,
  validateContactSubmission,
} from "../../src/server/contact.ts";
import { deliverContactMail } from "../../src/server/mail.ts";

const now = Date.parse("2026-08-14T12:00:00.000Z");

function valid(overrides = {}) {
  return {
    locale: "en",
    category: "connected",
    context: "We need a bilingual company website connected to our lead workflow.",
    siteUrl: "https://example.org/current",
    deliveryWindow: "flexible",
    budget: "undecided",
    name: "Project owner",
    email: "owner@example.org",
    company: "Example organisation",
    channel: "email",
    consent: true,
    website: "",
    startedAt: now - 12_000,
    idempotencyKey: "6dd9ac42-d63a-47e7-8d5f-094196435db7",
    ...overrides,
  };
}

test("validation normalizes an accepted bounded submission", () => {
  const result = validateContactSubmission(valid(), now);
  assert.equal(result.ok, true);
  assert.equal(result.value.email, "owner@example.org");
  assert.equal(result.value.context.includes("bilingual"), true);
});

for (const [name, overrides, field] of [
  ["missing consent", { consent: false }, "consent"],
  ["invalid email", { email: "not-an-email" }, "email"],
  ["invalid URL protocol", { siteUrl: "javascript:alert(1)" }, "siteUrl"],
  ["oversized context", { context: "x".repeat(2_001) }, "context"],
  ["filled honeypot", { website: "spam" }, "form"],
  ["implausibly fast submit", { startedAt: now - 500 }, "form"],
]) {
  test(`validation rejects ${name}`, () => {
    const result = validateContactSubmission(valid(overrides), now);
    assert.equal(result.ok, false);
    assert.ok(result.errors.some((error) => error.field === field));
  });
}

test("guard rejects replayed idempotency tokens and releases delivery failures for retry", async () => {
  const guard = new ContactGuard({ now: () => now, rateLimit: 5 });
  let deliveries = 0;
  const deliver = async () => { deliveries += 1; };

  const first = await handleContactSubmission({ raw: valid(), ip: "192.0.2.1", guard, deliver });
  const replay = await handleContactSubmission({ raw: valid(), ip: "192.0.2.1", guard, deliver });
  assert.equal(first.category, "accepted");
  assert.equal(replay.category, "validation_error");
  assert.equal(deliveries, 1);

  const retryKey = "729c16e5-b845-4249-9cc8-2cb0c35db838";
  const failed = await handleContactSubmission({
    raw: valid({ idempotencyKey: retryKey }),
    ip: "192.0.2.2",
    guard,
    deliver: async () => { throw new Error("SMTP unavailable: password=must-not-leak"); },
  });
  assert.equal(failed.category, "delivery_unavailable");
  const retried = await handleContactSubmission({
    raw: valid({ idempotencyKey: retryKey }), ip: "192.0.2.2", guard, deliver,
  });
  assert.equal(retried.category, "accepted");
});

test("guard enforces a process-local rate window", async () => {
  let clock = now;
  const guard = new ContactGuard({ now: () => clock, rateLimit: 2, rateWindowMs: 60_000 });
  const deliver = async () => {};
  const attempt = (suffix) => handleContactSubmission({
    raw: valid({ idempotencyKey: `00000000-0000-4000-8000-00000000000${suffix}` }),
    ip: "198.51.100.4",
    guard,
    deliver,
  });
  assert.equal((await attempt(1)).category, "accepted");
  assert.equal((await attempt(2)).category, "accepted");
  assert.equal((await attempt(3)).category, "rate_limited");
  clock += 60_001;
  assert.equal((await attempt(4)).category, "accepted");
});

test("delivery errors return a stable secret-safe response", async () => {
  const guard = new ContactGuard({ now: () => now });
  const result = await handleContactSubmission({
    raw: valid(),
    ip: "203.0.113.9",
    guard,
    deliver: async () => { throw new Error("smtp://secret-user:secret-password@mail.invalid"); },
  });
  assert.deepEqual(result, { category: "delivery_unavailable", status: 503 });
  assert.doesNotMatch(JSON.stringify(result), /secret|smtp/i);
});

test("mail delivery uses an injected transport and keeps the reply address", async () => {
  let message;
  const transport = {
    async sendMail(value) { message = value; return { accepted: ["briefs@example.org"] }; },
  };
  await deliverContactMail(valid(), "request-safe-id", transport, {
    from: "Povkh.Dev <forms@example.org>",
    to: "briefs@example.org",
  });
  assert.equal(message.replyTo, "owner@example.org");
  assert.equal(message.to, "briefs@example.org");
  assert.match(message.text, /request-safe-id/);
  assert.match(message.text, /bilingual company website/);
});
