'use client'

import { useReveal } from '@/hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

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

          {/* Left: CTA copy */}
          <div className="reveal">
            <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-5">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] text-bark mb-6">
              Ready to have that<br />
              <em className="italic">honest conversation?</em>
            </h2>
            <p className="text-bark-medium font-sans font-light text-base leading-relaxed mb-8">
              Reach out directly and I&apos;ll get back to you as soon as I can. The first
              conversation is always free &mdash; no commitment, no pressure, just a chance
              to see if we&apos;re a good fit.
            </p>

            {/* What to expect */}
            <div className="space-y-4">
              {[
                'A response within 48 hours',
                'A free, no-obligation introductory call',
                'Zero pressure &mdash; just honest conversation',
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
              <a
                href="https://www.linkedin.com/in/monica-vaughan-4a24323b7"
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

            {/* Pre Work form link */}
            <div className="mt-8 pt-8 border-t border-sand">
              <p className="text-xs font-sans text-bark-light mb-3 tracking-wide uppercase">Already connected?</p>
              <p className="text-sm font-sans text-bark-medium font-light mb-4">
                Complete the Pre Work form so I can best prepare for our time together.
              </p>
              <a
                href="https://plumb-line-prework.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-moss text-warm-white text-sm font-sans rounded-full hover:opacity-90 transition-all duration-300 shadow-md shadow-moss/20 hover:shadow-moss/30 hover:-translate-y-0.5"
                aria-label="Open Pre Work submission form (opens in new tab)"
              >
                Complete Pre Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Contact info card */}
          <div className="reveal reveal-delay-1">
            <div className="bg-cream rounded-[1.75rem] p-8 md:p-10 border border-sand shadow-lg shadow-bark/5">

              <p className="text-xs font-sans text-bark-light uppercase tracking-widest mb-6">
                Contact Monica Directly
              </p>

              {/* Phone */}
              <a
                href="tel:9565336575"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-linen border border-sand hover:border-sienna/40 hover:bg-sienna/5 transition-all duration-300 mb-4"
                aria-label="Call Monica at 956-533-6575"
              >
                <div className="w-10 h-10 rounded-full bg-sienna/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sienna/20 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0714E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-sans text-bark-light uppercase tracking-widest mb-1">Phone / Text</p>
                  <p className="font-serif text-xl text-bark group-hover:text-sienna transition-colors">956-533-6575</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:monicallifeplan@gmail.com"
                className="group flex items-start gap-4 p-5 rounded-2xl bg-linen border border-sand hover:border-sienna/40 hover:bg-sienna/5 transition-all duration-300 mb-6"
                aria-label="Email Monica at monicallifeplan@gmail.com"
              >
                <div className="w-10 h-10 rounded-full bg-sienna/10 flex items-center justify-center flex-shrink-0 group-hover:bg-sienna/20 transition-colors">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0714E" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-sans text-bark-light uppercase tracking-widest mb-1">Email</p>
                  <p className="font-serif text-lg text-bark group-hover:text-sienna transition-colors break-all">monicallifeplan@gmail.com</p>
                </div>
              </a>

              {/* Quickest response callout */}
              <div className="flex items-start gap-3 bg-moss-light/30 border border-moss-light rounded-2xl px-5 py-4">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4A6344" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
                <p className="text-sm font-sans text-bark-medium leading-relaxed">
                  Monica responds quickest to a{' '}
                  <span className="font-medium text-bark">phone call or text.</span>{' '}
                  Don&apos;t hesitate to reach out!
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
