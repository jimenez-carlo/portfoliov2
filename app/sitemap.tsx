// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'carlo-jimenez.com', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Add additional pages here if your portfolio has multiple views/routes
  ]
}
