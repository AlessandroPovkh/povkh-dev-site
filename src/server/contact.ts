export type ContactLocale = "en" | "ru";
export type ContactCategory = "brand" | "website" | "connected" | "other";

export interface ContactSubmission {
  locale: ContactLocale;
  category: ContactCategory;
  context: string;
  siteUrl: string;
  deliveryWindow: "soon" | "flexible" | "date";
  budget: "discovery" | "small" | "medium" | "custom" | "undecided";
  name: string;
  email: string;
  company: string;
  channel: "email" | "video" | "either";
  consent: true;
  startedAt: number;
  idempotencyKey: string;
}

export interface ContactError {
  field: string;
  code: string;
}

type ValidationResult =
  | { ok: true; value: ContactSubmission }
  | { ok: false; errors: ContactError[] };

type ContactResponse =
  | { category: "accepted"; status: 202 }
  | { category: "validation_error"; status: 400; errors?: ContactError[] }
  | { category: "rate_limited"; status: 429 }
  | { category: "delivery_unavailable"; status: 503 };

const categories = new Set(["brand", "website", "connected", "other"]);
const deliveryWindows = new Set(["soon", "flexible", "date"]);
const budgets = new Set(["discovery", "small", "medium", "custom", "undecided"]);
const channels = new Set(["email", "video", "either"]);
const uuid = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function record(value: unknown): Record<string, unknown> | null {
  return value !== null && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : null;
}

function text(value: unknown, maximum: number): string | null {
  if (typeof value !== "string") return null;
  const normalized = value.trim();
  return normalized.length <= maximum ? normalized : null;
}

function validHttpUrl(value: string): boolean {
  if (!value) return true;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateContactSubmission(raw: unknown, now = Date.now()): ValidationResult {
  const input = record(raw);
  if (!input) return { ok: false, errors: [{ field: "form", code: "invalid" }] };
  const errors: ContactError[] = [];
  const website = text(input.website, 200);
  if (website === null || website !== "") errors.push({ field: "form", code: "invalid" });

  const locale = input.locale === "ru" ? "ru" : input.locale === "en" ? "en" : null;
  if (!locale) errors.push({ field: "locale", code: "required" });
  const category = typeof input.category === "string" && categories.has(input.category)
    ? input.category as ContactCategory
    : null;
  if (!category) errors.push({ field: "category", code: "required" });

  const context = text(input.context, 2_000);
  if (!context || context.length < 20) errors.push({ field: "context", code: "invalid" });
  const siteUrl = text(input.siteUrl, 500);
  if (siteUrl === null || !validHttpUrl(siteUrl)) errors.push({ field: "siteUrl", code: "invalid" });

  const deliveryWindow = typeof input.deliveryWindow === "string" && deliveryWindows.has(input.deliveryWindow)
    ? input.deliveryWindow as ContactSubmission["deliveryWindow"]
    : null;
  if (!deliveryWindow) errors.push({ field: "deliveryWindow", code: "required" });
  const budget = typeof input.budget === "string" && budgets.has(input.budget)
    ? input.budget as ContactSubmission["budget"]
    : null;
  if (!budget) errors.push({ field: "budget", code: "required" });

  const name = text(input.name, 120);
  if (!name || name.length < 2) errors.push({ field: "name", code: "invalid" });
  const contactEmail = text(input.email, 254);
  if (!contactEmail || !email.test(contactEmail)) errors.push({ field: "email", code: "invalid" });
  const company = text(input.company, 160);
  if (company === null) errors.push({ field: "company", code: "invalid" });
  const channel = typeof input.channel === "string" && channels.has(input.channel)
    ? input.channel as ContactSubmission["channel"]
    : null;
  if (!channel) errors.push({ field: "channel", code: "required" });
  if (input.consent !== true) errors.push({ field: "consent", code: "required" });

  const startedAt = typeof input.startedAt === "number" ? input.startedAt : Number.NaN;
  if (!Number.isFinite(startedAt) || now - startedAt < 3_000 || now - startedAt > 86_400_000) {
    errors.push({ field: "form", code: "timing" });
  }
  const idempotencyKey = typeof input.idempotencyKey === "string" ? input.idempotencyKey : "";
  if (!uuid.test(idempotencyKey)) errors.push({ field: "form", code: "token" });

  if (errors.length || !locale || !category || !context || siteUrl === null || !deliveryWindow || !budget || !name || !contactEmail || company === null || !channel) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    value: {
      locale,
      category,
      context,
      siteUrl,
      deliveryWindow,
      budget,
      name,
      email: contactEmail.toLowerCase(),
      company,
      channel,
      consent: true,
      startedAt,
      idempotencyKey,
    },
  };
}

interface GuardOptions {
  now?: () => number;
  rateLimit?: number;
  rateWindowMs?: number;
  idempotencyWindowMs?: number;
}

export class ContactGuard {
  private readonly clock: () => number;
  private readonly rateLimit: number;
  private readonly rateWindowMs: number;
  private readonly idempotencyWindowMs: number;
  private readonly attempts = new Map<string, number[]>();
  private readonly tokens = new Map<string, number>();

  constructor(options: GuardOptions = {}) {
    this.clock = options.now ?? Date.now;
    this.rateLimit = options.rateLimit ?? 5;
    this.rateWindowMs = options.rateWindowMs ?? 15 * 60_000;
    this.idempotencyWindowMs = options.idempotencyWindowMs ?? 30 * 60_000;
  }

  now(): number {
    return this.clock();
  }

  reserve(ip: string, token: string): "ok" | "replay" | "rate_limited" {
    const now = this.clock();
    for (const [key, expires] of this.tokens) if (expires <= now) this.tokens.delete(key);
    if (this.tokens.has(token)) return "replay";

    const recent = (this.attempts.get(ip) ?? []).filter((time) => now - time < this.rateWindowMs);
    if (recent.length >= this.rateLimit) {
      this.attempts.set(ip, recent);
      return "rate_limited";
    }
    recent.push(now);
    this.attempts.set(ip, recent);
    this.tokens.set(token, now + this.idempotencyWindowMs);
    return "ok";
  }

  release(token: string): void {
    this.tokens.delete(token);
  }
}

interface HandleOptions {
  raw: unknown;
  ip: string;
  guard: ContactGuard;
  deliver: (submission: ContactSubmission) => Promise<void>;
}

export async function handleContactSubmission(options: HandleOptions): Promise<ContactResponse> {
  const validation = validateContactSubmission(options.raw, options.guard.now());
  if (!validation.ok) return { category: "validation_error", status: 400, errors: validation.errors };

  const reservation = options.guard.reserve(options.ip, validation.value.idempotencyKey);
  if (reservation === "replay") return { category: "validation_error", status: 400 };
  if (reservation === "rate_limited") return { category: "rate_limited", status: 429 };

  try {
    await options.deliver(validation.value);
    return { category: "accepted", status: 202 };
  } catch {
    options.guard.release(validation.value.idempotencyKey);
    return { category: "delivery_unavailable", status: 503 };
  }
}

// Process-local by design for the first low-volume single-instance release.
// Multi-instance hosting or abuse evidence requires an external rate-control review.
export const contactGuard = new ContactGuard();
