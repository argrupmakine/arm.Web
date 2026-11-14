import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';
import { uretimPages } from '@/lib/data';

const baseUrl = 'https://argrupmakine.com.tr';
const locales = ['tr', 'en', 'de', 'fr'];

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    uretimPages.map((page) => ({
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
  const suffix = getTranslation(locale, 'seo.production.suffix');
  const navTitle = getTranslation(locale, 'nav.uretim');
  const title = `${pageTitle} | ${navTitle} | Ar Grup Makine`;
  const description = `${pageTitle} ${suffix}`;

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/uretim-hatlari/${slug}`,
      languages: {
        tr: `${baseUrl}/tr/uretim-hatlari/${slug}`,
        en: `${baseUrl}/en/uretim-hatlari/${slug}`,
        de: `${baseUrl}/de/uretim-hatlari/${slug}`,
        fr: `${baseUrl}/fr/uretim-hatlari/${slug}`,
        'x-default': `${baseUrl}/tr/uretim-hatlari/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/uretim-hatlari/${slug}`,
    },
  };
}

export default function UretimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
