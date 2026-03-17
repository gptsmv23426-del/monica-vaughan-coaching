'use client'

import { useReveal } from '@/hooks/useReveal'

const steps = [
  {
    number: '01',
    title: 'We Talk',
    description:
      "We start with a free, no-pressure conversation — just you and me getting to know each other. You share what's on your mind, and we see if this is the right fit. No agenda, no hard sell.",
  },
  {
    number: '02',
    title: 'We Build a Plan',
    description:
      "Together we dig into what you actually want — not what you think you should want. Through structured reflection and honest dialogue, we map out a direction that's genuinely yours.",
  },
  {
    number: '03',
    title: 'You Move Forward',
    description:
      "With clarity and a concrete plan in hand, you step forward with intention. I stay alongside you as a thinking partner and accountability anchor as you build the life you've named.",
  },
]

export default function HowItWorks() {
  const ref = useReveal()

  return (
    <section
      id="how-it-works"
      className="bg-cream py-24 md:py-36 relative overflow-hidden"
      aria-label="How the coaching process works"
    >
      {/* Background texture accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 50%, #DDD0C0 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center max-w-xl mx-auto mb-16 md:mb-24">
          <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-5">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] text-bark mb-5">
            Simple, honest,<br /><em className="italic">human.</em>
          </h2>
          <p className="text-bark-medium font-sans font-light text-base leading-relaxed">
            The process is straightforward — because clarity shouldn&apos;t be complicated.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[3.25rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px bg-gradient-to-r from-sand via-sienna/30 to-sand"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} flex flex-col items-center md:items-start text-center md:text-left`}
              >
                {/* Step number bubble */}
                <div className="w-16 h-16 rounded-full border-2 border-sand bg-cream flex items-center justify-center shadow-sm mb-8">
                  <span className="font-serif text-lg text-sienna font-semibold">{step.number}</span>
                </div>

                <h3 className="font-serif text-2xl text-bark mb-3">{step.title}</h3>

                <p className="text-bark-medium font-sans font-light text-sm leading-[1.85]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="reveal mt-16 md:mt-20 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-sienna text-warm-white text-sm font-sans rounded-full hover:bg-sienna-dark transition-all duration-300 shadow-lg shadow-sienna/20 hover:shadow-sienna/30 hover:-translate-y-0.5"
          >
            Start with a Free Conversation
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}
