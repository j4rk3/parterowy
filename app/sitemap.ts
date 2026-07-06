import type { MetadataRoute } from 'next'
import { projects } from '@/lib/projects'

// TODO: potwierdzić docelową domenę produkcyjną (zakładam www.parterowy.com.pl)
const baseUrl = 'https://www.parterowy.com.pl'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1, lastModified },
    {
      url: `${baseUrl}/parterowy-z-garazem`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified,
    },
    {
      url: `${baseUrl}/parterowy-bez-garazu`,
      changeFrequency: 'weekly',
      priority: 0.9,
      lastModified,
    },
    {
      url: `${baseUrl}/obszar-dzialalnosci`,
      changeFrequency: 'monthly',
      priority: 0.6,
      lastModified,
    },
    {
      url: `${baseUrl}/dom-parterowy-rybnik`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified,
    },
    {
      url: `${baseUrl}/rodo`,
      changeFrequency: 'yearly',
      priority: 0.2,
      lastModified,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/${project.hasGarage ? 'parterowy-z-garazem' : 'parterowy-bez-garazu'}/${project.slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.9,
  }))

  return [...staticRoutes, ...projectRoutes]
}
