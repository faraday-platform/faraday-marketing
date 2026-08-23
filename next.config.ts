import type { NextConfig } from "next";

/**
 * Baseline security headers. No Content-Security-Policy yet: the hCaptcha and
 * Supabase origins the waitlist needs are not known until #10 merges, and a CSP
 * authored without them would break that route on arrival. Tracked as SEC-02.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
