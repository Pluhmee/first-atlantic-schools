import type { MetadataRoute } from 'next';

function getBaseUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.firstatlanticschools.com';
  return url.replace(/\/$/, '');
}

export default function robots(): MetadataRoute.Robots {
  const baseUrl = getBaseUrl();

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
