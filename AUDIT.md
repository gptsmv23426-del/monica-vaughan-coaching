# Site Audit — Monica Vaughan Coaching
**Date:** 2026-03-20
**Auditor:** Claude Code
**Branch:** `claude/audit-efficiency-security-GgSRo`
**Stack:** Next.js 14 · TypeScript · Tailwind CSS · Vercel

---

## Summary

| Category | Issues Found | Fixed | Needs Client Input |
|---|---|---|---|
| Security | 5 | 4 | 1 |
| Efficiency / Performance | 6 | 6 | 0 |
| Content TODOs | 7 | 0 | 7 |

---

## Security Audit

### ✅ FIXED — No HTTP Security Headers
**File:** `next.config.mjs`
**Risk:** High — without headers, browsers allow framing, MIME sniffing, and cross-origin data leakage.

**Headers added:**
- `X-Frame-Options: DENY` — prevents clickjacking via iframe embedding
- `X-Content-Type-Options: nosniff` — blocks MIME-type sniffing
- `Referrer-Policy: strict-origin-when-cross-origin` — limits referrer leakage
- `Permissions-Policy` — disables camera, microphone, geolocation, and FLoC/Topics
- `Strict-Transport-Security` — enforces HTTPS for 1 year with preload
- `Content-Security-Policy` — restricts script/style/image/font/connect sources

### ✅ FIXED — Unsplash Remote Image Pattern Too Permissive
**File:** `next.config.mjs`
**Risk:** Medium — without a `pathname` constraint, Next.js Image Optimization would proxy *any* URL from `images.unsplash.com`, including user-uploaded content endpoints.

**Fix:** Added `pathname: '/photo-**'` to restrict to Unsplash photo paths only.

### ✅ FIXED — Contact Form: No Email Validation (`noValidate` mode)
**File:** `components/Contact.tsx`
**Risk:** Medium — the form uses `noValidate`, which disables the browser's built-in validation. Without JS validation, a user could submit a malformed email address (the mailto handler silently accepts it).

**Fix:** Added a `validate()` function with:
- Name: non-empty check
- Email: non-empty + regex format check (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`)
- Message: non-empty check
- Inline error messages with `role="alert"` and `aria-describedby` for accessibility

### ✅ FIXED — LinkedIn URLs Updated
**Files:** `components/Contact.tsx`, `components/Footer.tsx`
Both LinkedIn links updated to `https://www.linkedin.com/in/monica-vaughan-4a24323b7`.

### ✅ ALREADY SECURE — External Link Safety
All `target="_blank"` links correctly include `rel="noopener noreferrer"`. No risk of reverse tabnapping.

### ✅ ALREADY SECURE — No Secrets in Repository
No `.env` files committed. Contact form uses `mailto:` (no server credentials needed). `.gitignore` correctly excludes all environment files.

---

## Efficiency & Performance Audit

### ✅ FIXED — `viewport` Not Exported Separately
**File:** `app/layout.tsx`
**Impact:** Medium — Next.js 14 deprecated putting `viewport` inside the `metadata` export. This triggers build warnings and may cause hydration issues in future versions.

**Fix:** Exported a separate `viewport` constant with `width`, `initialScale`, and `themeColor`.

### ✅ FIXED — No `robots.txt`
**File:** `app/robots.ts` (new)
**Impact:** Medium — without a robots.txt, crawlers may index unintended paths. Also required for Google Search Console submission.

**Fix:** Created a Next.js route handler at `app/robots.ts` that serves:
```
User-agent: *
Allow: /
Sitemap: https://theplumbline.com/sitemap.xml
```
> **TODO:** Update `NEXT_PUBLIC_SITE_URL` in Vercel environment variables to the production domain once confirmed.

### ✅ FIXED — No `sitemap.xml`
**File:** `app/sitemap.ts` (new)
**Impact:** Medium — search engines use sitemaps to discover and prioritize pages. Without one, indexing relies entirely on link crawling.

**Fix:** Created a Next.js route handler at `app/sitemap.ts` with the homepage entry.

### ✅ FIXED — ESLint Not Configured
**Files:** `.eslintrc.json` (new), `package.json`
**Impact:** Medium — `next lint` was defined as an npm script but `eslint` and `eslint-config-next` were missing from `devDependencies`, and no ESLint config file existed. The command would fail in CI.

**Fix:**
- Added `.eslintrc.json` extending `next/core-web-vitals`
- Added `eslint: ^8` and `eslint-config-next: 14.2.29` to devDependencies

### ✅ FIXED — No Analytics or Core Web Vitals Monitoring
**File:** `app/layout.tsx`
**Impact:** Low-Medium — without analytics, there's no visibility into traffic, bounce rate, or performance degradation over time.

**Fix:** Added `@vercel/analytics` and `@vercel/speed-insights` (both free on Vercel's Hobby/Pro plans):
- `<Analytics />` — page view tracking, no cookies, GDPR-friendly
- `<SpeedInsights />` — real-user Core Web Vitals (LCP, CLS, FID)

### ✅ FIXED — Next.js Outdated (14.2.5 → 14.2.29)
**File:** `package.json`
**Impact:** Low-Medium — 14.2.5 has known security advisories patched in later point releases (including a cache-poisoning vulnerability patched in 14.2.25).

**Fix:** Bumped `next` and `eslint-config-next` to `14.2.29` (latest stable 14.x).

> **Action required:** Run `npm install` after pulling this branch to update `package-lock.json`.

---

## Missing Assets

These are not security risks but affect polish and SEO:

| Asset | Location | Impact | Action |
|---|---|---|---|
| Favicon | `app/favicon.ico` or `public/favicon.ico` | Low — browser shows generic icon | Add a 32×32 ICO or SVG favicon |
| Open Graph image | Not set in metadata | Medium — social shares show no image | Add a 1200×630 branded card; set `openGraph.images` in `layout.tsx` |
| Site URL | `NEXT_PUBLIC_SITE_URL` env var | Medium — robots/sitemap use placeholder | Set this in Vercel project settings |

---

## Content TODOs (Needs Client Input)

These are placeholder items that require Monica's actual content before going live. They are **not** code bugs — they are intentional stubs.

| # | File | Line | What's Needed |
|---|---|---|---|
| 1 | `components/About.tsx` | 58 | Replace 3 placeholder paragraphs with Monica's actual biography |
| 2 | `components/Services.tsx` | ~5 | Replace placeholder service names, descriptions |
| 3 | `components/Services.tsx` | ~109 | Add real pricing or package names |
| ~~4~~ | ~~`components/Testimonials.tsx`~~ | — | ~~Testimonials section removed~~ ✅ |
| ~~5~~ | ~~`components/Contact.tsx`~~ | — | ~~Email updated to `monicalifeplan@gmail.com`~~ ✅ |
| ~~6~~ | ~~`components/Contact.tsx`~~ | — | ~~LinkedIn updated~~ ✅ |
| ~~7~~ | ~~`components/Footer.tsx`~~ | — | ~~LinkedIn updated~~ ✅ |

---

## Pre-Launch Checklist

Before going live, complete the following:

- [ ] Run `npm install` to pick up updated dependencies
- [ ] Fill in remaining 3 content TODOs above (bio, services, pricing)
- [ ] Set `NEXT_PUBLIC_SITE_URL` in Vercel environment variables (e.g. `https://theplumbline.com`)
- [ ] Add a favicon (`public/favicon.ico`)
- [ ] Create and set an Open Graph image (`openGraph.images` in `layout.tsx`)
- [ ] Verify domain is connected in Vercel dashboard
- [ ] Run `npm run build` locally to confirm clean build
- [ ] Run `npm run lint` to confirm no ESLint errors
- [ ] Test the contact form end-to-end (does the mailto link open the correct email client?)
- [ ] Confirm Core Web Vitals pass via Vercel Speed Insights dashboard after first deployment
- [ ] Submit sitemap to Google Search Console: `https://yourdomain.com/sitemap.xml`

---

## Tools & Packages Used

| Tool | Purpose | Status |
|---|---|---|
| `next/image` | Optimised image delivery with lazy loading | ✅ Already in use |
| `next/font` | Self-hosted Google Fonts (no external requests at render time) | ✅ Already in use |
| `@vercel/analytics` | Privacy-friendly page view analytics | ✅ Added |
| `@vercel/speed-insights` | Real-user Core Web Vitals monitoring | ✅ Added |
| `eslint-config-next` | Next.js-aware linting rules | ✅ Added |
| `tailwindcss` | Utility-first CSS (no unused styles shipped via purge) | ✅ Already in use |
| HTTP Security Headers | Browser-enforced security policies | ✅ Added via `next.config.mjs` |
