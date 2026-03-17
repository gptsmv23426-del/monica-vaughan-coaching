'use client'

import { useEffect, useRef, RefObject } from 'react'

/**
 * Attaches an IntersectionObserver to a container div ref and toggles the
 * `.visible` class on every child that carries the `.reveal` class.
 * Once visible, the class is never removed — elements animate in once.
 *
 * Usage: attach the returned ref to a wrapping <div> inside your section.
 */
export function useReveal(): RefObject<HTMLDivElement> {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const targets = Array.from(container.querySelectorAll<HTMLElement>('.reveal'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    targets.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return ref
}
