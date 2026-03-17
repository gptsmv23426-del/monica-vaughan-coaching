export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bark text-white/60 py-12 md:py-16" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">

          {/* Name + tagline */}
          <div className="text-center md:text-left">
            <p className="font-serif text-xl text-warm-white mb-1">Monica Vaughan</p>
            {/* TODO: Replace with Monica's preferred tagline */}
            <p className="text-sm font-sans text-white/40 italic">
              Helping you live with intention.
            </p>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-sans tracking-wide">
              {[
                ['About', '#about'],
                ['Services', '#services'],
                ['How It Works', '#how-it-works'],
                ['Testimonials', '#testimonials'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/50 hover:text-sienna transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            {/* TODO: Replace href with Monica's actual LinkedIn profile URL */}
            <a
              href="https://www.linkedin.com/in/YOUR_LINKEDIN_HANDLE"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Monica Vaughan on LinkedIn (opens in new tab)"
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-sienna hover:text-sienna transition-colors duration-200"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans text-white/30">
          <p>&copy; {year} Monica Vaughan. All rights reserved.</p>
          <p>
            {/* TODO: Remove Paterson Center mention or update wording as Monica prefers */}
            Certified life coach · Trained through the{' '}
            <a
              href="https://patersoncenter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-colors underline underline-offset-2"
            >
              Paterson Center
            </a>{' '}
            methodology
          </p>
        </div>
      </div>
    </footer>
  )
}
