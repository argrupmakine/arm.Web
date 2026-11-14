import { Metadata } from 'next';
import { getTranslation } from '@/lib/server-translate';

const baseUrl = 'https://argrupmakine.com.tr';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = getTranslation(locale, 'seo.arge.title');
  const description = getTranslation(locale, 'seo.arge.description');

  return {
    title,
    description,
    alternates: {
      canonical: `${baseUrl}/${locale}/arge`,
      languages: {
        tr: `${baseUrl}/tr/arge`,
        en: `${baseUrl}/en/arge`,
        de: `${baseUrl}/de/arge`,
        fr: `${baseUrl}/fr/arge`,
        'x-default': `${baseUrl}/tr/arge`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${locale}/arge`,
    },
  };
}

export default function ArgeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
