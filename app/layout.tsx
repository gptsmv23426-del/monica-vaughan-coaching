import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
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
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-cream text-bark font-sans antialiased">{children}</body>
    </html>
  )
}
