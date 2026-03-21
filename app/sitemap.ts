import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // TODO: Replace with the production domain once confirmed
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://theplumbline.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
