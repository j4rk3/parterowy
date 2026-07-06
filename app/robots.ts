import type { MetadataRoute } from 'next'

// TODO: potwierdzić docelową domenę produkcyjną (zakładam www.parterowy.com.pl)
const baseUrl = 'https://www.parterowy.com.pl'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/login'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
