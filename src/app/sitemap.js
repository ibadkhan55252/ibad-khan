const BASE_URL = process.env.SITE_URL || 'https://ibadkhan.dev';

export default function sitemap() {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
