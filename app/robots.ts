import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // TODO: Replace with the production domain once confirmed
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://theplumbline.com'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
