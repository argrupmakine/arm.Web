import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://argrupmakine.com.tr';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/Webkontrol/'],
      },
      // Block known email scrapers and harvesting bots
      {
        userAgent: [
          'EmailCollector',
          'EmailSiphon',
          'EmailWolf',
          'ExtractorPro',
          'CherryPicker',
          'WebBandit',
          'SiteSucker',
          'HTTrack',
          'autoemailspider',
        ],
        disallow: ['/'],
      },
      // Allow AI Search & Answer Engines for AEO
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Google-Extended', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai'],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
