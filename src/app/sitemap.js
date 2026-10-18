import { productsCatalog } from '../data/productsCatalog';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://shree-swami-samarth-agency.onrender.com';
  const now = new Date();

  const productUrls = productsCatalog.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    ...productUrls,
  ];
}
