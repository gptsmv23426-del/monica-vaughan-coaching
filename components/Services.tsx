'use client'

import { useReveal } from '@/hooks/useReveal'

// TODO: Replace service titles, descriptions, and icons with Monica's actual offerings
const services = [
  {
    id: 'lifeplan',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'LifePlan Coaching',
    tagline: 'Your life, mapped with intention.',
    description:
      'A structured, in-depth engagement that helps you assess where you are, articulate where you want to go, and build a clear, actionable plan for getting there. Ideal for anyone feeling stuck or in the middle of a major life transition.',
    detail: 'Multi-session engagement · Structured framework · Written plan deliverable',
  },
  {
    id: 'leadership',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Leadership Clarity',
    tagline: 'Lead others by knowing yourself.',
    description:
      'Designed for managers, entrepreneurs, and emerging leaders who want to lead with greater confidence and authenticity. We explore your values, your leadership blind spots, and what it means to show up powerfully — without losing yourself.',
    detail: 'One-on-one sessions · Values alignment · Leadership identity work',
  },
  {
    id: 'discovery',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    title: 'Personal Discovery',
    tagline: 'Reconnect with who you actually are.',
    description:
      "For individuals who sense that something is off but can't quite name it. Through honest conversation and reflective exercises, we uncover the patterns, beliefs, and desires that shape your choices — and build a clearer picture of the life you truly want.",
    detail: 'Flexible pacing · Reflective exercises · Ideal starting point',
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section
      id="services"
      className="bg-linen py-24 md:py-36 overflow-hidden"
      aria-label="Coaching services"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="reveal text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-5">
            What I Offer
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] text-bark mb-5">
            Coaching shaped around<br /><em className="italic">your</em> next chapter.
          </h2>
          <p className="text-bark-medium font-sans font-light text-base leading-relaxed">
            Every engagement is a conversation, not a program to follow. Together we&apos;ll find
            the right approach for where you are right now.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <article
              key={service.id}
              className={`reveal reveal-delay-${i + 1} bg-cream rounded-[1.5rem] p-8 md:p-9 flex flex-col border border-sand/60 hover:border-sienna/30 hover:shadow-lg hover:shadow-sienna/5 transition-all duration-500 group`}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-linen border border-sand flex items-center justify-center text-sienna mb-6 group-hover:bg-sienna group-hover:text-warm-white group-hover:border-sienna transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl text-bark mb-1">{service.title}</h3>
              <p className="text-sienna text-xs font-sans tracking-wide mb-4 italic">{service.tagline}</p>

              {/* Description */}
              <p className="text-bark-medium font-sans font-light text-sm leading-relaxed flex-1 mb-6">
                {service.description}
              </p>

              {/* Detail tag */}
              <p className="text-xs text-bark-light font-sans border-t border-sand pt-5">
                {service.detail}
              </p>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <p className="reveal mt-10 text-center text-sm text-bark-light font-sans">
          {/* TODO: Update if Monica offers packages at specific price points */}
          Not sure which is right for you? Start with a free conversation — no commitment required.
        </p>

      </div>
    </section>
  )
}
