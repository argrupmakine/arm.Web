import { MetadataRoute } from 'next';
import { kurumsalPages, uretimPages, sektorPages, newsPages } from '@/lib/data';
import { getLocalizedPath, categoryRoutes } from '@/config/routes';
import { Language } from '@/types';

const baseUrl = 'https://argrupmakine.com.tr';
const locales: Language[] = ['tr', 'en', 'de', 'fr'];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [];
  const currentDate = new Date().toISOString();

  // 1. Home routes
  for (const locale of locales) {
    const alternates: Record<string, string> = {};
    for (const loc of locales) {
      alternates[loc] = `${baseUrl}/${loc}`;
    }
    alternates['x-default'] = `${baseUrl}/tr`;

    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
      alternates: { languages: alternates },
    });
  }

  // 2. Standalone static categories (arge, referanslar, haberler, iletisim)
  const singleCategories = ['arge', 'referanslar', 'haberler', 'iletisim'];
  for (const cat of singleCategories) {
    for (const locale of locales) {
      const alternates: Record<string, string> = {};
      for (const loc of locales) {
        const catName = categoryRoutes[cat]?.[loc] || cat;
        alternates[loc] = `${baseUrl}/${loc}/${catName}`;
      }
      alternates['x-default'] = `${baseUrl}/tr/${categoryRoutes[cat]?.tr || cat}`;

      const localizedCat = categoryRoutes[cat]?.[locale] || cat;
      routes.push({
        url: `${baseUrl}/${locale}/${localizedCat}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: 0.7,
        alternates: { languages: alternates },
      });
    }
  }

  // 3. Dynamic routes (kurumsal, uretim-hatlari, sektorler)
  const dynamicCollections = [
    { cat: 'kurumsal', slugs: kurumsalPages.map((p) => p.slug) },
    { cat: 'uretim-hatlari', slugs: uretimPages.map((p) => p.slug) },
    { cat: 'sektorler', slugs: [...sektorPages.map((p) => p.slug), 'medikal'] },
    { cat: 'haberler', slugs: newsPages.map((p) => p.slug) },
  ];

  for (const group of dynamicCollections) {
    for (const slug of group.slugs) {
      for (const locale of locales) {
        const alternates: Record<string, string> = {};
        for (const loc of locales) {
          alternates[loc] = `${baseUrl}${getLocalizedPath(group.cat, slug, loc)}`;
        }
        alternates['x-default'] = `${baseUrl}${getLocalizedPath(group.cat, slug, 'tr')}`;

        routes.push({
          url: `${baseUrl}${getLocalizedPath(group.cat, slug, locale)}`,
          lastModified: currentDate,
          changeFrequency: 'monthly',
          priority: group.cat === 'sektorler' || group.cat === 'uretim-hatlari' ? 0.9 : 0.8,
          alternates: { languages: alternates },
        });
      }
    }
  }

  return routes;
}
