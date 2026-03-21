/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        // Restrict to Unsplash photo paths only — prevents loading arbitrary
        // resources from the same host (e.g., user-uploaded content endpoints)
        pathname: '/photo-**',
      },
    ],
  },

  async headers() {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          // Prevent clickjacking — disallow embedding in iframes
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Prevent MIME-type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Control referrer information sent with requests
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Disable browser features not needed on this site
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          // Enforce HTTPS for 1 year (Vercel sets this, but belt-and-suspenders)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          // Content Security Policy
          // - default-src: only self
          // - script-src: self + Vercel analytics (va.vercel-scripts.com)
          // - style-src: self + unsafe-inline (needed for Tailwind + Next.js)
          // - img-src: self + data URIs + Unsplash + Vercel
          // - font-src: self (next/font serves fonts locally)
          // - connect-src: self + Vercel vitals
          // - frame-ancestors: none (reinforces X-Frame-Options)
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com https://*.vercel-insights.com",
              "font-src 'self'",
              "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
              "media-src 'none'",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self' mailto:",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
