import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';

const baseUrl = 'https://argrupmakine.com.tr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale, 'seo.referanslar.title');
  const description = getTranslation(locale, 'seo.referanslar.description');

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/referanslar`,
      languages: {
        tr: `${baseUrl}/tr/referanslar`,
        en: `${baseUrl}/en/referanslar`,
        de: `${baseUrl}/de/referanslar`,
        fr: `${baseUrl}/fr/referanslar`,
        'x-default': `${baseUrl}/tr/referanslar`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/referanslar`,
    },
  };
}

export default function ReferanslarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
