import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';

const baseUrl = 'https://argrupmakine.com.tr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale, 'seo.iletisim.title');
  const description = getTranslation(locale, 'seo.iletisim.description');

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/iletisim`,
      languages: {
        tr: `${baseUrl}/tr/iletisim`,
        en: `${baseUrl}/en/iletisim`,
        de: `${baseUrl}/de/iletisim`,
        fr: `${baseUrl}/fr/iletisim`,
        'x-default': `${baseUrl}/tr/iletisim`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/iletisim`,
    },
  };
}

export default function IletisimLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
