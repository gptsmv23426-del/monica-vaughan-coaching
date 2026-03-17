'use client'

import { useState, FormEvent } from 'react'
import { useReveal } from '@/hooks/useReveal'

export default function Contact() {
  const ref = useReveal()
  const [status, setStatus] = useState<'idle' | 'sent'>('idle')

  // TODO: Replace with Monica's actual email address
  const EMAIL_ADDRESS = 'hello@monicavaughan.com'

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string

    const subject = encodeURIComponent(`Coaching inquiry from ${name}`)
    const body = encodeURIComponent(
      `Hi Monica,\n\nMy name is ${name} and I'd like to connect.\n\n${message}\n\nBest,\n${name}\n${email}`
    )

    window.location.href = `mailto:${EMAIL_ADDRESS}?subject=${subject}&body=${body}`
    setStatus('sent')
    form.reset()
  }

  return (
    <section
      id="contact"
      className="bg-linen py-24 md:py-36 relative overflow-hidden"
      aria-label="Contact and booking"
    >
      {/* Warm top line */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sand to-transparent"
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-5xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">

          {/* ─── Left: CTA copy ─── */}
          <div className="reveal">
            <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-5">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] text-bark mb-6">
              Ready to have that<br />
              <em className="italic">honest conversation?</em>
            </h2>
            <p className="text-bark-medium font-sans font-light text-base leading-relaxed mb-8">
              Send me a message and I&apos;ll get back to you within 48 hours. The first
              conversation is always free — no commitment, no pressure, just a chance
              to see if we&apos;re a good fit.
            </p>

            {/* What to expect */}
            <div className="space-y-4">
              {[
                'A response within 48 hours',
                'A free, no-obligation introductory call',
                'Zero pressure — just honest conversation',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-moss-light flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#4A6344" strokeWidth="2.5" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <p className="text-sm font-sans text-bark-medium">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-sand">
              <p className="text-xs font-sans text-bark-light mb-3 tracking-wide uppercase">Also find me on</p>
              {/* TODO: Replace href with Monica's actual LinkedIn profile URL */}
              <a
                href="https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-sans text-bark-medium hover:text-sienna transition-colors"
                aria-label="Monica Vaughan on LinkedIn (opens in new tab)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* ─── Right: Form ─── */}
          <div className="reveal reveal-delay-1">
            <form
              onSubmit={handleSubmit}
              className="bg-cream rounded-[1.75rem] p-8 md:p-10 border border-sand shadow-lg shadow-bark/5"
              noValidate
            >
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-sans text-bark-light uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="First and last name"
                    className="w-full bg-linen border border-sand rounded-xl px-4 py-3 text-sm font-sans text-bark placeholder:text-bark-light/50 focus:outline-none focus:border-sienna focus:ring-1 focus:ring-sienna/20 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-sans text-bark-light uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full bg-linen border border-sand rounded-xl px-4 py-3 text-sm font-sans text-bark placeholder:text-bark-light/50 focus:outline-none focus:border-sienna focus:ring-1 focus:ring-sienna/20 transition-colors"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-sans text-bark-light uppercase tracking-widest mb-2">
                    What&apos;s on Your Mind?
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me a little about where you are and what you're hoping to work through..."
                    className="w-full bg-linen border border-sand rounded-xl px-4 py-3 text-sm font-sans text-bark placeholder:text-bark-light/50 focus:outline-none focus:border-sienna focus:ring-1 focus:ring-sienna/20 transition-colors resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-sienna text-warm-white text-sm font-sans rounded-full hover:bg-sienna-dark transition-all duration-300 shadow-md shadow-sienna/20 hover:shadow-sienna/30 hover:-translate-y-0.5"
                >
                  Send Message
                </button>

                {status === 'sent' && (
                  <p className="text-center text-sm font-sans text-moss" role="status">
                    Your mail client should have opened. I look forward to connecting!
                  </p>
                )}
              </div>

              <p className="mt-5 text-center text-xs font-sans text-bark-light leading-relaxed">
                By submitting, you agree that your information will be used solely
                to respond to your inquiry.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}
