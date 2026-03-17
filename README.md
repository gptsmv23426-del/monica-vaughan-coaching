# Monica Vaughan — Life Coaching Website

Personal brand website for Monica Vaughan, certified life coach based in the Rio Grande Valley, Texas.

Built with **Next.js 14**, **Tailwind CSS**, and deployed via **Vercel**.

---

## Before You Launch — Checklist

Search for `// TODO` across the codebase for every item that needs real content. Key ones:

| File | What to update |
|---|---|
| `app/layout.tsx` | Page title and meta description |
| `components/Hero.tsx` | Tagline / trust note wording |
| `components/About.tsx` | Monica's actual story (3 paragraphs) + credential text |
| `components/Services.tsx` | Real service names, descriptions, and details |
| `components/Testimonials.tsx` | Real client quotes (with permission) |
| `components/Contact.tsx` | Monica's actual email address + LinkedIn URL |
| `components/Footer.tsx` | LinkedIn URL + tagline + Paterson Center mention |
| `public/monica-vaughan.png` | Already placed — crop/optimize if needed |

---

## Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
monica-vaughan-coaching/
├── app/
│   ├── layout.tsx        # Root layout, fonts, metadata
│   ├── page.tsx          # Main page (imports all sections)
│   └── globals.css       # Global styles, scroll animations
├── components/
│   ├── Navbar.tsx        # Sticky nav with mobile menu
│   ├── Hero.tsx          # Full-screen hero with photo
│   ├── About.tsx         # Monica's story + lifestyle image
│   ├── Services.tsx      # 3 coaching offering cards
│   ├── HowItWorks.tsx    # 3-step process section
│   ├── Testimonials.tsx  # Client quotes on dark background
│   ├── Contact.tsx       # Contact form (mailto)
│   └── Footer.tsx        # Footer with links
├── hooks/
│   └── useReveal.ts      # IntersectionObserver scroll animations
├── public/
│   └── monica-vaughan.png  # Monica's headshot
├── tailwind.config.ts    # Custom colors + fonts
└── next.config.ts        # Image domain allowlist (Unsplash)
```

---

## Design Tokens

| Token | Value | Use |
|---|---|---|
| `cream` | `#FAF8F3` | Page background |
| `linen` | `#F0E8DC` | Section backgrounds |
| `sand` | `#DDD0C0` | Borders, dividers |
| `sienna` | `#B0714E` | Accent, CTAs, highlights |
| `bark` | `#2A1C11` | Primary text, dark sections |
| `bark-medium` | `#5C4033` | Body copy |
| `bark-light` | `#8A6E5E` | Captions, metadata |
| `moss` | `#7B8E74` | Subtle green accent |

**Fonts:**
- Headings: [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (Google Fonts)
- Body: [DM Sans](https://fonts.google.com/specimen/DM+Sans) (Google Fonts)

---

## Deploying to Vercel

1. Push this repository to GitHub (create a new private repo)
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repository
4. Vercel auto-detects Next.js — no configuration needed
5. Click **Deploy**

For a custom domain (e.g., `monicavaughan.com`):
- In Vercel project → Settings → Domains → Add domain
- Follow DNS instructions from your domain registrar

---

## Contact Form

The form currently uses a `mailto:` handler — clicking submit opens the user's default email client with a pre-filled message. No backend or API key required.

**To upgrade to a proper form submission service later:**
- [Resend](https://resend.com) — simple email API
- [Formspree](https://formspree.io) — drop-in form backend
- [Loops](https://loops.so) — if you want CRM-style intake

---

*Built for Monica Vaughan · Rio Grande Valley, Texas*
