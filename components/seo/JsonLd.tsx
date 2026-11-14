import React from 'react';

interface JsonLdProps {
  locale: string;
}

export default function JsonLd({ locale }: JsonLdProps) {
  const baseUrl = 'https://argrupmakine.com.tr';

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'ManufacturingBusiness'],
        '@id': `${baseUrl}/#organization`,
        name: 'Ar Grup Makine Sanayi ve Ticaret A.Ş.',
        alternateName: 'Ar Grup Makine',
        url: baseUrl,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
          caption: 'Ar Grup Makine Logo',
        },
        foundingDate: '1975',
        founder: {
          '@type': 'Person',
          name: 'İrfan Ermiş',
          jobTitle: 'Makine Mühendisi / Kurucu',
        },
        description:
          locale === 'tr'
            ? 'Ar Grup Makine 1975 yılından beri savunma sanayi, otomotiv, iş makineleri ve tarım makineleri sektörlerinde IATF 16949 kalitesiyle onaylı yan sanayi olarak faaliyet göstermektedir.'
            : 'Ar Grup Makine has been operating as an approved sub-industry with IATF 16949 quality in defense, automotive, construction and agricultural machinery sectors since 1975.',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1.O.S.B. Avrupa Hun Cad. No: 10',
          addressLocality: 'Sincan',
          addressRegion: 'Ankara',
          postalCode: '06935',
          addressCountry: 'TR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 39.9765238,
          longitude: 32.5447328,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          url: `${baseUrl}/${locale}/iletisim`,
        },
        areaServed: ['TR', 'DE', 'FR', 'EU', 'Global'],
        knowsAbout: [
          'IATF 16949:2016',
          'ISO 9001:2015',
          'ISO 3834-2',
          'AS9100',
          'CNC Talaşlı İmalat',
          'Robotik Kaynak',
          'Sac Şekillendirme',
          'Kalıp ve Fikstür İmalatı',
          'Savunma Sanayi Parça Üretimi',
        ],
        hasCertification: [
          {
            '@type': 'Certification',
            name: 'IATF 16949:2016',
          },
          {
            '@type': 'Certification',
            name: 'ISO 9001:2015',
          },
          {
            '@type': 'Certification',
            name: 'ISO 3834-2',
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Ar Grup Makine',
        publisher: {
          '@id': `${baseUrl}/#organization`,
        },
        inLanguage: ['tr-TR', 'en-US', 'de-DE', 'fr-FR'],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
