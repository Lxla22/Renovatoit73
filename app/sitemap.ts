import type { MetadataRoute } from 'next'
import { services } from '@/lib/services'
import { cities } from '@/lib/cities'
import { blogPosts } from '@/lib/blog'

const BASE_URL = 'https://www.renovatoit73.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/realisations`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${BASE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.85,
  }))

  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((p) => ({
    url: `${BASE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'yearly',
    priority: 0.7,
  }))

  return [...staticPages, ...servicePages, ...cityPages, ...blogPages]
}
