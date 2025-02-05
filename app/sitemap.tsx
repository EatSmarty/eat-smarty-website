import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://eatsmarty.vercel.app/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://eatsmarty.vercel.app/category',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://eatsmarty.vercel.app/additives',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: 'https://eatsmarty.vercel.app/scan',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: 'https://eatsmarty.vercel.app/setting',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        },
    ]
}