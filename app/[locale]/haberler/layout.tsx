import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';

const baseUrl = 'https://argrupmakine.com.tr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale, 'seo.haberler.title');
  const description = getTranslation(locale, 'seo.haberler.description');

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/haberler`,
      languages: {
        tr: `${baseUrl}/tr/haberler`,
        en: `${baseUrl}/en/haberler`,
        de: `${baseUrl}/de/haberler`,
        fr: `${baseUrl}/fr/haberler`,
        'x-default': `${baseUrl}/tr/haberler`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/haberler`,
    },
  };
}

export default function HaberlerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
