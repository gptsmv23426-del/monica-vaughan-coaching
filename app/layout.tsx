import type { Metadata, Viewport } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'The Plumb Line | Monica Vaughan · Certified LifePlan Guide · Rio Grande Valley',
  description:
    'Certified LifePlan Guide helping individuals in the Rio Grande Valley find clarity, direction, and purpose. Find your true vertical with Monica Vaughan.',
  keywords: ['LifePlan Guide', 'life coach', 'Rio Grande Valley', 'RGV', 'coaching', 'personal development', 'LifePlan'],
  openGraph: {
    title: 'The Plumb Line | Monica Vaughan',
    description: 'Find your true vertical. Clarity. Direction. Purpose.',
    type: 'website',
    // TODO: Add og:url once domain is confirmed (e.g. 'https://theplumbline.com')
    // TODO: Add og:image — a 1200×630 branded card improves social share previews
  },
}

// Viewport is exported separately per Next.js 14+ recommendation.
// Putting it inside `metadata` triggers a deprecation warning.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FAF8F3',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-bark font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
