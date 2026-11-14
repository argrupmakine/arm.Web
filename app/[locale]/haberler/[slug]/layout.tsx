import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';
import { newsPages } from '@/lib/data';

const baseUrl = 'https://argrupmakine.com.tr';
const locales = ['tr', 'en', 'de', 'fr'];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    newsPages.map((page) => ({
      locale,
      slug: page.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const newsItem = newsPages.find((n) => n.slug === slug);
  const pageTitle = newsItem ? newsItem.title : getTranslation(locale, 'nav.haberler');
  const navTitle = getTranslation(locale, 'nav.haberler');
  const title = `${pageTitle} | ${navTitle} | Ar Grup Makine`;
  const description = `${pageTitle} - Ar Grup Makine`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/haberler/${slug}`,
      languages: {
        tr: `${baseUrl}/tr/haberler/${slug}`,
        en: `${baseUrl}/en/haberler/${slug}`,
        de: `${baseUrl}/de/haberler/${slug}`,
        fr: `${baseUrl}/fr/haberler/${slug}`,
        'x-default': `${baseUrl}/tr/haberler/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/haberler/${slug}`,
    },
  };
}

export default function HaberDetayLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
