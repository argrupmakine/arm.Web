import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';
import { kurumsalPages } from '@/lib/data';

const baseUrl = 'https://argrupmakine.com.tr';
const locales = ['tr', 'en', 'de', 'fr'];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    kurumsalPages.map((page) => ({
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
  const pageTitle = getTranslation(locale, 'slug.' + slug);
  const suffix = getTranslation(locale, 'seo.corporate.suffix');
  const title = `${pageTitle} | Ar Grup Makine`;
  const description = `${pageTitle} ${suffix}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/kurumsal/${slug}`,
      languages: {
        tr: `${baseUrl}/tr/kurumsal/${slug}`,
        en: `${baseUrl}/en/kurumsal/${slug}`,
        de: `${baseUrl}/de/kurumsal/${slug}`,
        fr: `${baseUrl}/fr/kurumsal/${slug}`,
        'x-default': `${baseUrl}/tr/kurumsal/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/kurumsal/${slug}`,
    },
  };
}

export default function KurumsalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
