import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: [] },
    sitemap: 'https://enpower-ks.com/sitemap.xml',
    host: 'https://enpower-ks.com',
  }
}
