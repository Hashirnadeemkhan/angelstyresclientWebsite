// app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.angelstyres.co.uk'

  return [
    {
      url: `${baseUrl}/`,
      lastModified: '2025-11-05T15:37:15+00:00',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: '2025-11-05T15:37:15+00:00',
      priority: 0.8,
    },
  ]
}
