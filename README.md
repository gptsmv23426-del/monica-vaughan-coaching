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

## Making Future Changes with Claude Code

All site changes flow through the same pipeline: **Claude edits files → git push → Vercel auto-deploys.**

### What you need open

1. **This project folder** open in VS Code:
   `C:\Claude\Prompts\Website Prompts\monica-vaughan-coaching`
2. **Claude Code** running inside that VS Code window (the sidebar panel)
3. That's it — Claude has access to the files, GitHub (to push), and Vercel (to check deployments)

### How to request a change

Just describe what you want in plain English. Examples:

> "Update Monica's bio in the About section with this text: ..."

> "Change the CTA button text from 'Book a Conversation' to 'Schedule a Free Call'"

> "Add a fourth testimonial from Jane D. who said '...'"

> "The hero headline feels too formal — make it warmer"

> "Replace the Unsplash nature photo in the About section with this image: [paste URL]"

Claude will edit the component, you review the diff, approve it, and then Claude pushes to GitHub. Vercel picks it up automatically — the live site updates in ~60 seconds.

### Previewing before it goes live

If you want to see a change locally before it deploys publicly:

```bash
cd "C:\Claude\Prompts\Website Prompts\monica-vaughan-coaching"
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — this is a live preview that only you can see.

### What Claude can help with

- **Copy changes** — headlines, body text, service descriptions, testimonials
- **Design tweaks** — colors, spacing, font sizes, layout adjustments
- **New sections** — adding a blog, FAQ, pricing, or any new content block
- **Contact form upgrade** — wiring up a real form service like Formspree or Resend
- **Custom domain** — pointing `monicavaughan.com` (or similar) at the Vercel deployment
- **SEO** — meta titles, descriptions, Open Graph images
- **Performance** — image optimization, loading speed improvements

### What Claude needs from you for content changes

For anything involving Monica's real words, you'll need to provide:
- The actual copy (Claude won't invent real biographical details)
- Any new photos (drop them in the `public/` folder and tell Claude the filename)
- Her real LinkedIn URL and email (currently placeholders in the code)

---

*Built for Monica Vaughan · Rio Grande Valley, Texas*
