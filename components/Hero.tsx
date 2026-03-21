'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    // Brief delay so fonts load before animating
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-linen overflow-hidden flex items-center grain-overlay"
      aria-label="Hero"
    >
      {/* Warm background accent — top right quadrant */}
      <div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #DDD0C0 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      {/* Bottom left warm circle */}
      <div
        className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #B0714E 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 py-28 md:py-0 items-center">
        {/* ─── Text column ─── */}
        <div className={`transition-all duration-[900ms] ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Eyebrow */}
          <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-6">
            Paterson LifePlan Guide · Rio Grande Valley, Texas
          </p>

          {/* Headline */}
          {/* TAGLINE OPTION A — ties directly to the plumb line metaphor */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.1] text-bark mb-6">
            Find your<br />
            <em className="not-italic text-sienna">true vertical.</em>
          </h1>

          {/* Sub-headline */}
          {/* TAGLINE OPTION B — outcome-focused alternative; swap with headline above if preferred */}
          <p className="text-bark-medium text-lg leading-relaxed max-w-md mb-10 font-sans font-light">
            Clarity. Direction. Purpose.<br />
            <span className="text-base">Because your next season deserves a solid foundation.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3.5 bg-sienna text-warm-white text-sm font-sans rounded-full hover:bg-sienna-dark transition-all duration-300 shadow-lg shadow-sienna/20 hover:shadow-sienna/30 hover:-translate-y-0.5"
            >
              Book a Conversation
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center px-7 py-3.5 border border-sand text-bark-medium text-sm font-sans rounded-full hover:border-sienna hover:text-sienna transition-all duration-300"
            >
              Learn More
            </a>
          </div>

          {/* Trust note */}
          <p className="mt-8 text-bark-light text-xs font-sans tracking-wide">
            Paterson LifePlan Guide · No sales pressure
          </p>
        </div>

        {/* ─── Photo column ─── */}
        <div
          className={`flex justify-center md:justify-end transition-all duration-[1100ms] delay-200 ease-out ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Layered frame effect */}
          <div className="relative">
            {/* Background shape offset */}
            <div
              className="absolute -inset-3 rounded-[2rem] bg-sand/50"
              aria-hidden="true"
            />
            {/* Sienna accent line */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-br-[2rem] border-b-2 border-r-2 border-sienna/40"
              aria-hidden="true"
            />

            {/* Photo */}
            <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] md:w-80 md:h-[26rem] rounded-[1.75rem] overflow-hidden shadow-2xl shadow-bark/20">
              <Image
                src="/Mom%20Headshot-Sent%20to%20her.png"
                alt="Monica Vaughan, Paterson LifePlan Guide based in the Rio Grande Valley, Texas"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>

            {/* Floating tag */}
            <div className="absolute -left-6 bottom-12 bg-warm-white rounded-xl px-4 py-3 shadow-lg shadow-bark/10 border border-sand/60">
              <p className="text-xs text-bark-light font-sans uppercase tracking-widest mb-0.5">Based in</p>
              <p className="text-sm font-serif text-bark font-semibold">Rio Grande Valley</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bark-light">
        <span className="text-xs font-sans tracking-[0.14em] uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-bark-light to-transparent" aria-hidden="true" />
      </div>
    </section>
  )
}
