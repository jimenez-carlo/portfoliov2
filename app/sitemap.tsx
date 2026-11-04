// app/sitemap.ts
import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfoliov2-git-master-test-4b9cf4d2.vercel.app/', // Replace with your actual domain
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Add additional pages here if your portfolio has multiple views/routes
  ]
}
