'use client'

import Image from 'next/image'
import { useReveal } from '@/hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section
      id="about"
      className="bg-cream py-24 md:py-36 overflow-hidden"
      aria-label="About Monica"
    >
      <div ref={ref} className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* ─── Image side ─── */}
          <div className="reveal order-2 md:order-1 relative">
            {/* Layered image treatment */}
            <div className="relative aspect-[4/5] max-w-sm mx-auto md:mx-0">
              {/* Background block */}
              <div
                className="absolute -top-4 -left-4 right-8 bottom-8 bg-linen rounded-[1.5rem]"
                aria-hidden="true"
              />
              {/* Photo */}
              <div className="relative rounded-[1.5rem] overflow-hidden w-full h-full shadow-xl shadow-bark/10">
                <Image
                  src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80&auto=format&fit=crop"
                  alt="Peaceful path through nature — a metaphor for the coaching journey"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 420px"
                />
              </div>
              {/* Sienna accent dot cluster */}
              <div className="absolute -bottom-6 -right-6 grid grid-cols-3 gap-1.5" aria-hidden="true">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-sienna/30" />
                ))}
              </div>
            </div>
          </div>

          {/* ─── Text side ─── */}
          <div className="reveal reveal-delay-1 order-1 md:order-2">
            {/* Eyebrow */}
            <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-5">
              About Monica
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl leading-[1.2] text-bark mb-8">
              A guide who has walked<br />
              <em className="italic">her own winding road.</em>
            </h2>

            {/* TODO: Replace the paragraphs below with Monica's actual story */}
            <div className="space-y-5 text-bark-medium font-sans font-light leading-[1.85] text-[1.05rem]">
              <p>
                Monica Vaughan knows what it feels like to stand at a crossroads — uncertain
                of the next step, but knowing that something needs to change. Her own journey
                through personal reinvention sparked a deep passion for helping others navigate
                theirs with intention and courage.
              </p>
              <p>
                Trained and certified through a rigorous coaching program built on proven
                methodology, Monica brings both professional discipline and genuine warmth to
                every coaching relationship. Her approach is grounded in honest conversation,
                practical reflection, and the belief that every person already holds the
                wisdom they need — it just takes the right questions to surface it.
              </p>
              <p>
                A proud resident of the Rio Grande Valley, Monica is committed to serving her
                local community with the same care and intentionality she brings to every
                client relationship. Whether you&apos;re navigating a career transition,
                searching for greater purpose, or simply ready to live more deliberately —
                she&apos;s here to walk alongside you.
              </p>
            </div>

            {/* Why It Works — The Plumb Line */}
            <div className="mt-8 p-6 bg-linen rounded-2xl border border-sand/60">
              <p className="text-sienna text-xs tracking-[0.18em] uppercase font-sans mb-3">Why It Works</p>
              <p className="font-serif text-lg text-bark leading-snug mb-3">
                A plumb line reveals what&apos;s truly vertical — what&apos;s aligned, what&apos;s true.
              </p>
              <p className="text-bark-medium font-sans font-light text-sm leading-relaxed mb-3">
                Your clients come in crooked — not because they&apos;re broken, but because life bent them.
                Empty nest, retirement, a season ending. They&apos;ve lost their vertical. The work is helping
                them find it again.
              </p>
              <p className="text-bark-light font-sans font-light text-sm leading-relaxed italic">
                In Amos 7, God holds a plumb line against Israel — not to condemn, but to measure against
                what&apos;s true. LifePlan does the same: it holds a person&apos;s life up against God&apos;s design
                and says — here&apos;s where you are, and here&apos;s what true looks like.
              </p>
            </div>

            {/* Credential note */}
            <div className="mt-8 pt-8 border-t border-sand flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-linen border border-sand flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B0714E" strokeWidth="1.8" aria-hidden="true">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeLinecap="round"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <div>
                <p className="text-sm font-sans text-bark font-medium">Certified LifePlan Guide</p>
                <p className="text-xs font-sans text-bark-light mt-0.5">
                  Trained through a recognized coaching institution and methodology
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
