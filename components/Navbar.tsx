'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-sm shadow-[0_1px_0_0_#DDD0C0]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        {/* Wordmark */}
        <a
          href="#"
          className="flex flex-col leading-tight group"
          aria-label="The Plumb Line — home"
        >
          <span className="font-serif text-xl md:text-2xl tracking-tight text-bark group-hover:text-sienna transition-colors">The Plumb Line</span>
          <span className="text-[0.65rem] tracking-[0.14em] uppercase font-sans text-bark-light group-hover:text-sienna transition-colors">Monica Vaughan</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm tracking-wide text-bark-medium hover:text-sienna transition-colors duration-200 font-sans"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 bg-sienna text-warm-white text-sm rounded-full hover:bg-sienna-dark transition-colors duration-200 font-sans"
            >
              Book a Conversation
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-bark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-current mb-1.5 transition-transform duration-300 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current mb-1.5 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-cream/98 backdrop-blur-sm ${
          menuOpen ? 'max-h-96 border-t border-sand' : 'max-h-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block text-base text-bark-medium hover:text-sienna transition-colors py-1"
              >
                {label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block px-5 py-2.5 bg-sienna text-warm-white text-sm rounded-full hover:bg-sienna-dark transition-colors"
            >
              Book a Conversation
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
