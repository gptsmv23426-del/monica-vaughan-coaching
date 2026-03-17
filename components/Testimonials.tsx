'use client'

import { useReveal } from '@/hooks/useReveal'

// TODO: Replace all placeholder testimonials with real client quotes.
// Get written permission from clients before using their names; use initials if they prefer privacy.
const testimonials = [
  {
    quote:
      "I came to Monica feeling completely stuck — like I was going through the motions of a life I hadn't consciously chosen. Within just a few sessions, I had more clarity about my values and direction than I'd had in years. She has a gift for asking exactly the right question.",
    name: 'Sarah M.',
    detail: 'Career transition, RGV',
  },
  {
    quote:
      "Monica doesn't tell you what to do — she helps you figure out what you actually want, and then holds you accountable to it. That distinction made all the difference for me. I left every session with something concrete to act on.",
    name: 'James R.',
    detail: 'Leadership development',
  },
  {
    quote:
      "I was skeptical about coaching at first. But Monica created such a safe, honest space that I found myself opening up in ways I hadn't expected. The clarity I gained was life-changing — I now have a plan, and more importantly, the confidence to follow it.",
    name: 'Diana L.',
    detail: 'Personal discovery, RGV',
  },
]

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section
      id="testimonials"
      className="bg-bark py-24 md:py-36 relative overflow-hidden"
      aria-label="Client testimonials"
    >
      {/* Warm top accent */}
      <div
        className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sienna/30 to-transparent"
        aria-hidden="true"
      />
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #B0714E 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center max-w-xl mx-auto mb-16 md:mb-20">
          <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-5">
            What Clients Say
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] text-warm-white mb-5">
            Real people.<br /><em className="italic">Real clarity.</em>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className={`reveal reveal-delay-${i + 1} flex flex-col bg-white/5 border border-white/10 rounded-[1.5rem] p-8 hover:bg-white/[0.08] hover:border-sienna/30 transition-all duration-500`}
            >
              {/* Opening quote mark */}
              <span
                className="font-serif text-6xl leading-none text-sienna/40 mb-4 -mt-2 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Quote */}
              <blockquote className="font-sans font-light text-[0.95rem] leading-[1.9] text-white/75 flex-1 mb-8">
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <figcaption className="border-t border-white/10 pt-5">
                <p className="font-serif text-warm-white text-base">{t.name}</p>
                <p className="font-sans text-xs text-white/40 mt-0.5 tracking-wide">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>

      </div>
    </section>
  )
}
