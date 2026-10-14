"use client";

import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const PRODUCTS = [
  { value: "any", label: "Any Faraday product" },
  { value: "facp", label: "FACP — Faraday Accounting Control Plane" },
  { value: "pse", label: "PSE — Payroll Synergy Experts" },
  { value: "studio", label: "Studio — Creative Intelligence" },
  { value: "beacon", label: "Beacon — Operational Observation" },
] as const;

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

const STORAGE_KEY = "faraday_attribution";

type Attribution = Partial<Record<(typeof UTM_KEYS)[number], string>> & {
  referrer?: string;
  landing_path?: string;
};

type Status = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-[15px] text-foreground placeholder:text-dim focus:border-accent/50 focus:outline-none transition-colors";

export default function WaitlistForm() {
  const searchParams = useSearchParams();
  const captchaRef = useRef<HCaptcha>(null);

  const [email, setEmail] = useState("");
  const [product, setProduct] = useState<string>("any");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  /**
   * Persist attribution on first load only, so a later visit to /waitlist
   * without query params does not overwrite what brought the visitor here.
   */
  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const attribution: Attribution = {};
    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) attribution[key] = value;
    }
    if (document.referrer) attribution.referrer = document.referrer;
    attribution.landing_path = window.location.pathname + window.location.search;

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  }, [searchParams]);

  function readAttribution(): Attribution {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Attribution) : {};
    } catch {
      return {};
    }
  }

  async function handleSubmit() {
    if (status === "submitting") return;

    if (!email.trim()) {
      setStatus("error");
      setErrorMessage("Enter your email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const captcha = await captchaRef.current?.execute({ async: true });
      const captchaToken = captcha?.response;
      if (!captchaToken) {
        setStatus("error");
        setErrorMessage("Verification failed. Please try again.");
        return;
      }

      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          product,
          ...(company.trim() ? { company: company.trim() } : {}),
          ...readAttribution(),
          captchaToken,
        }),
      });

      if (response.ok) {
        setStatus("success");
        return;
      }

      setStatus("error");
      if (response.status === 429) {
        setErrorMessage("Too many attempts. Please try again in a few minutes.");
      } else if (response.status === 400) {
        setErrorMessage("Check your details and try again.");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      captchaRef.current?.resetCaptcha();
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-card border border-border-hover px-7 py-9">
        <h2 className="text-xl font-semibold text-heading tracking-tight mb-3">
          You&apos;re on the list.
        </h2>
        <p className="text-sm leading-[1.7] text-muted">
          We&apos;ll be in touch as each product opens for real workflows. Check
          your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-card border border-border-hover px-7 py-9">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-[13px] font-medium text-muted">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@company.com"
            className={inputStyles}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="product" className="text-[13px] font-medium text-muted">
            Which product?
          </label>
          <select
            id="product"
            value={product}
            onChange={(event) => setProduct(event.target.value)}
            className={inputStyles}
          >
            {PRODUCTS.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-background"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="company" className="text-[13px] font-medium text-muted">
            Company <span className="text-dim">(optional)</span>
          </label>
          <input
            id="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(event) => setCompany(event.target.value)}
            maxLength={120}
            className={inputStyles}
          />
        </div>

        <HCaptcha
          ref={captchaRef}
          sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY ?? ""}
          size="invisible"
        />

        {status === "error" && errorMessage && (
          <p role="alert" className="text-[13px] text-red-400">
            {errorMessage}
          </p>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg text-[15px] font-semibold bg-gradient-to-br from-accent to-accent-light text-white hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.35)] transition-all disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {status === "submitting" ? "Joining…" : "Join the Waitlist"}
        </button>

        <p className="text-xs leading-[1.6] text-dim">
          Protected by hCaptcha. We use your details only to contact you about
          Faraday product availability.
        </p>
      </div>
    </div>
  );
}
