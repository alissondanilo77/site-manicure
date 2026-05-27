import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Aplica em todas as rotas.
    return [
      {
        source: "/:path*",
        headers: [
          // Força HTTPS e reduz downgrade.
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Bloqueia clickjacking (CSP é a forma mais moderna/consistente).
          // Ajuste se você precisar incorporar o site em iframe.
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; " +
              "base-uri 'self'; " +
              "object-src 'none'; " +
              "frame-ancestors 'none'; " +
              "form-action 'self'; " +
              "img-src 'self' data: blob:; " +
              "style-src 'self' 'unsafe-inline'; " +
              "script-src 'self'; " +
              "upgrade-insecure-requests;",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

