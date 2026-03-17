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
  // TODO: Replace with Monica's preferred page title and description
  title: 'Monica Vaughan | Life Coach · Rio Grande Valley',
  description:
    'Certified life coach helping individuals in the Rio Grande Valley find clarity, purpose, and direction. Book a conversation with Monica Vaughan today.',
  keywords: ['life coach', 'Rio Grande Valley', 'RGV', 'coaching', 'personal development'],
  openGraph: {
    title: 'Monica Vaughan | Life Coach',
    description: 'Find clarity, purpose, and direction with Monica Vaughan.',
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
