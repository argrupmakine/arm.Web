import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';
import { sektorPages } from '@/lib/data';

const baseUrl = 'https://argrupmakine.com.tr';
const locales = ['tr', 'en', 'de', 'fr'];

export const dynamicParams = false;

export function generateStaticParams() {
  const allSectors = [
    ...sektorPages.map((page) => page.slug),
    'medikal',
  ];

  return locales.flatMap((locale) =>
    allSectors.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const pageTitle = getTranslation(locale, 'slug.' + slug);
  const suffix = getTranslation(locale, 'seo.sectors.suffix');
  const navTitle = getTranslation(locale, 'nav.sektorler');
  const title = `${pageTitle} | ${navTitle} | Ar Grup Makine`;
  const description = `${pageTitle} ${suffix}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/sektorler/${slug}`,
      languages: {
        tr: `${baseUrl}/tr/sektorler/${slug}`,
        en: `${baseUrl}/en/sektorler/${slug}`,
        de: `${baseUrl}/de/sektorler/${slug}`,
        fr: `${baseUrl}/fr/sektorler/${slug}`,
        'x-default': `${baseUrl}/tr/sektorler/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/sektorler/${slug}`,
    },
  };
}

export default function SektorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
