import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://2sgestionempresa.cl',
      lastModified: new Date(),
    },
  ]
}