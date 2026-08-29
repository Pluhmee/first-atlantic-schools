import type { MetadataRoute } from 'next';

function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.firstatlanticschools.org';
  return url.replace(/\/$/, '');
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const routes = [
    {
      path: '',
      priority: 1,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/about',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/academics',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
    },
    {
      path: '/admission',
      priority: 0.95,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/gallery',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      path: '/contact',
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
