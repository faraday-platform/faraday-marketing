import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Outbound calls to third parties are bounded at 3s. True fire-and-forget loses
 * messages when a serverless function freezes after the response; an unbounded
 * await turns a provider hang into a 504 on a row that was already written.
 */
const OUTBOUND_TIMEOUT_MS = 3000;

const PRODUCTS = ["facp", "pse", "studio", "beacon", "any"] as const;

const WaitlistSchema = z.object({
  email: z.email().max(254),
  product: z.enum(PRODUCTS).default("any"),
  company: z.string().max(120).optional(),
  utm_source: z.string().max(200).optional(),
  utm_medium: z.string().max(200).optional(),
  utm_campaign: z.string().max(200).optional(),
  utm_term: z.string().max(200).optional(),
  utm_content: z.string().max(200).optional(),
  referrer: z.string().max(2048).optional(),
  landing_path: z.string().max(2048).optional(),
});

type WaitlistEntry = z.infer<typeof WaitlistSchema>;

/** Throws when unset so the handler fails closed rather than degrading silently. */
function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`missing required env var: ${name}`);
  return value;
}

let cachedRatelimit: Ratelimit | null = null;
function getRatelimit(): Ratelimit {
  if (!cachedRatelimit) {
    cachedRatelimit = new Ratelimit({
      redis: new Redis({
        url: requireEnv("UPSTASH_REDIS_REST_URL"),
        token: requireEnv("UPSTASH_REDIS_REST_TOKEN"),
      }),
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      prefix: "waitlist",
      analytics: false,
    });
  }
  return cachedRatelimit;
}

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return request.headers.get("x-real-ip") ?? "unknown";
}

async function verifyCaptcha(token: string, ip: string): Promise<boolean> {
  const form = new URLSearchParams({
    secret: requireEnv("HCAPTCHA_SECRET"),
    response: token,
  });
  if (ip !== "unknown") form.set("remoteip", ip);

  const response = await fetch("https://api.hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: form,
    signal: AbortSignal.timeout(OUTBOUND_TIMEOUT_MS),
  });
  if (!response.ok) return false;

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}

/**
 * Resend is called over its REST API rather than the `resend` SDK because the
 * SDK exposes no per-call AbortSignal, and the 3s bound above is required.
 */
async function sendConfirmation(entry: WaitlistEntry): Promise<void> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      authorization: `Bearer ${requireEnv("RESEND_API_KEY")}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from: requireEnv("RESEND_FROM_EMAIL"),
      to: [entry.email],
      subject: "You're on the Faraday waitlist",
      text: [
        "Thanks for joining the Faraday waitlist.",
        "",
        "We'll be in touch as each product opens for real workflows.",
        "",
        "— Faraday Capital Systems",
      ].join("\n"),
    }),
    signal: AbortSignal.timeout(OUTBOUND_TIMEOUT_MS),
  });
  if (!response.ok) {
    throw new Error(`resend responded ${response.status}`);
  }
}

async function notifySlack(entry: WaitlistEntry): Promise<void> {
  const fields = [
    `*Email:* ${entry.email}`,
    `*Product:* ${entry.product}`,
    entry.company ? `*Company:* ${entry.company}` : null,
    entry.utm_source ? `*Source:* ${entry.utm_source}` : null,
    entry.utm_campaign ? `*Campaign:* ${entry.utm_campaign}` : null,
  ].filter(Boolean);

  const response = await fetch(requireEnv("SLACK_WAITLIST_WEBHOOK_URL"), {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ text: `New waitlist signup\n${fields.join("\n")}` }),
    signal: AbortSignal.timeout(OUTBOUND_TIMEOUT_MS),
  });
  if (!response.ok) {
    throw new Error(`slack responded ${response.status}`);
  }
}

export async function POST(request: Request) {
  const ip = clientIp(request);

  try {
    // 1. Rate limit before any other work.
    const { success } = await getRatelimit().limit(ip);
    if (!success) {
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        { status: 429 },
      );
    }

    let payload: unknown;
    try {
      payload = await request.json();
    } catch {
      return NextResponse.json(
        { ok: false, error: "invalid_input" },
        { status: 400 },
      );
    }

    // 2. Captcha, read straight off the raw body so it never enters the row.
    const captchaToken =
      typeof payload === "object" && payload !== null
        ? (payload as Record<string, unknown>).captchaToken
        : undefined;

    if (typeof captchaToken !== "string" || captchaToken.length === 0) {
      return NextResponse.json(
        { ok: false, error: "captcha_failed" },
        { status: 400 },
      );
    }
    if (!(await verifyCaptcha(captchaToken, ip))) {
      return NextResponse.json(
        { ok: false, error: "captcha_failed" },
        { status: 400 },
      );
    }

    // 3. Validate.
    const parsed = WaitlistSchema.safeParse(payload);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, error: "invalid_input" },
        { status: 400 },
      );
    }
    const entry = parsed.data;

    // 4. Insert. A duplicate is a success for the caller and stops here.
    const supabase = createClient(
      requireEnv("NEXT_PUBLIC_SUPABASE_URL"),
      requireEnv("SUPABASE_SERVICE_ROLE_KEY"),
      { auth: { persistSession: false, autoRefreshToken: false } },
    );

    const { error } = await supabase.from("waitlist").insert(entry);
    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ ok: true, duplicate: true });
      }
      console.error("[waitlist] insert failed", error);
      return NextResponse.json(
        { ok: false, error: "server_error" },
        { status: 500 },
      );
    }

    // 5. Notify. Neither failure may roll back the row that was just written.
    const results = await Promise.allSettled([
      sendConfirmation(entry),
      notifySlack(entry),
    ]);
    const labels = ["resend confirmation", "slack notification"];
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        console.error(`[waitlist] ${labels[index]} failed`, result.reason);
      }
    });

    // 6.
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[waitlist] unhandled failure", error);
    return NextResponse.json(
      { ok: false, error: "server_error" },
      { status: 500 },
    );
  }
}
