import { Language } from '@/types';

export interface RouteMapping {
  tr: string;
  en: string;
  de: string;
  fr: string;
}

// Category mappings (ana rotalar)
export const categoryRoutes: Record<string, RouteMapping> = {
  'kurumsal': {
    tr: 'kurumsal',
    en: 'corporate',
    de: 'unternehmen',
    fr: 'entreprise',
  },
  'uretim-hatlari': {
    tr: 'uretim-hatlari',
    en: 'production-lines',
    de: 'produktionslinien',
    fr: 'lignes-de-production',
  },
  'sektorler': {
    tr: 'sektorler',
    en: 'sectors',
    de: 'branchen',
    fr: 'secteurs',
  },
  'haberler': {
    tr: 'haberler',
    en: 'news',
    de: 'nachrichten',
    fr: 'actualites',
  },
  'arge': {
    tr: 'arge',
    en: 'rd',
    de: 'f-und-e',
    fr: 'r-et-d',
  },
  'referanslar': {
    tr: 'referanslar',
    en: 'references',
    de: 'referenzen',
    fr: 'references',
  },
  'iletisim': {
    tr: 'iletisim',
    en: 'contact',
    de: 'kontakt',
    fr: 'contact',
  },
};

// Page slug mappings (sayfa slug'ları)
export const slugRoutes: Record<string, RouteMapping> = {
  // Kurumsal
  'hakkimizda': {
    tr: 'hakkimizda',
    en: 'about-us',
    de: 'ueber-uns',
    fr: 'a-propos',
  },
  'erp-sistemi': {
    tr: 'erp-sistemi',
    en: 'erp-system',
    de: 'erp-system',
    fr: 'systeme-erp',
  },
  'kalite-kontrol-sistemi': {
    tr: 'kalite-kontrol-sistemi',
    en: 'quality-control-system',
    de: 'qualitaetskontrollsystem',
    fr: 'systeme-de-controle-qualite',
  },
  'kalite-politikamiz': {
    tr: 'kalite-politikamiz',
    en: 'quality-policy',
    de: 'qualitaetspolitik',
    fr: 'politique-qualite',
  },
  'kurum-kulturumuz': {
    tr: 'kurum-kulturumuz',
    en: 'corporate-culture',
    de: 'unternehmenskultur',
    fr: 'culture-d-entreprise',
  },
  'sertifikalar': {
    tr: 'sertifikalar',
    en: 'certifications',
    de: 'zertifikate',
    fr: 'certifications',
  },
  'kvkk-metni': {
    tr: 'kvkk-metni',
    en: 'gdpr-privacy-policy',
    de: 'datenschutzrichtlinie',
    fr: 'politique-de-confidentialite',
  },
  'genel-aydinlatma-metni': {
    tr: 'genel-aydinlatma-metni',
    en: 'privacy-notice',
    de: 'datenschutzhinweis',
    fr: 'avis-de-confidentialite',
  },
  'basvuru-formu': {
    tr: 'basvuru-formu',
    en: 'application-form',
    de: 'bewerbungsformular',
    fr: 'formulaire-de-candidature',
  },

  // Üretim Hatları
  'kalip-bolumu': {
    tr: 'kalip-bolumu',
    en: 'mold-production',
    de: 'formenbau',
    fr: 'production-de-moules',
  },
  'cnc-bolumu': {
    tr: 'cnc-bolumu',
    en: 'cnc-machining',
    de: 'cnc-zerspanung',
    fr: 'usinage-cnc',
  },
  'robot-kaynak-bolumu': {
    tr: 'robot-kaynak-bolumu',
    en: 'robotic-welding',
    de: 'roboterschweissen',
    fr: 'soudage-robotise',
  },
  'pres': {
    tr: 'pres',
    en: 'press-section',
    de: 'pressenbereich',
    fr: 'section-presse',
  },
  'hidrolik-pres-bolumu': {
    tr: 'hidrolik-pres-bolumu',
    en: 'hydraulic-press',
    de: 'hydraulikpressen',
    fr: 'presses-hydrauliques',
  },
  'eksantrik-pres-bolumu': {
    tr: 'eksantrik-pres-bolumu',
    en: 'eccentric-press',
    de: 'exzenterpressen',
    fr: 'presses-excentriques',
  },
  'lazer-bolumu': {
    tr: 'lazer-bolumu',
    en: 'laser-cutting',
    de: 'laserschneiden',
    fr: 'decoupe-laser',
  },
  'abkant-pres': {
    tr: 'abkant-pres',
    en: 'press-brake',
    de: 'abkantpresse',
    fr: 'presse-plieuse',
  },
  'kaynak-bolumu': {
    tr: 'kaynak-bolumu',
    en: 'welding-section',
    de: 'schweissbereich',
    fr: 'section-soudage',
  },
  'elektrostatik-toz-boya': {
    tr: 'elektrostatik-toz-boya',
    en: 'powder-coating',
    de: 'pulverbeschichtung',
    fr: 'peinture-en-poudre',
  },
  'kumlama-boya-bolumu': {
    tr: 'kumlama-boya-bolumu',
    en: 'sandblasting-and-painting',
    de: 'sandstrahlen-und-lackieren',
    fr: 'sablage-et-peinture',
  },
  'giyotin-makas': {
    tr: 'giyotin-makas',
    en: 'guillotine-shears',
    de: 'tafelschere',
    fr: 'cisaille-guillotine',
  },
  'matkap': {
    tr: 'matkap',
    en: 'drilling-tapping',
    de: 'bohren-gewindeschneiden',
    fr: 'percage-taraudage',
  },

  // Sektörler
  'is-makinalari': {
    tr: 'is-makinalari',
    en: 'construction-machinery',
    de: 'baumaschinen',
    fr: 'machines-de-chantier',
  },
  'savunma-sanayi': {
    tr: 'savunma-sanayi',
    en: 'defense-industry',
    de: 'verteidigungsindustrie',
    fr: 'industrie-de-la-defense',
  },
  'otomotiv': {
    tr: 'otomotiv',
    en: 'automotive',
    de: 'automobilindustrie',
    fr: 'industrie-automobile',
  },
  'tarim-makinalari': {
    tr: 'tarim-makinalari',
    en: 'agricultural-machinery',
    de: 'landmaschinen',
    fr: 'machines-agricoles',
  },
  'ozel-uygulamalar': {
    tr: 'ozel-uygulamalar',
    en: 'custom-applications',
    de: 'spezialanwendungen',
    fr: 'applications-speciales',
  },
  'medikal': {
    tr: 'medikal',
    en: 'medical',
    de: 'medizintechnik',
    fr: 'medical',
  },
};

/**
 * Verilen bir dildeki kategori ve slug'ı standart anahtar slug'a (canonical key) dönüştürür.
 */
export function resolveCanonicalSlug(category: string, localizedSlug: string): { canonicalCategory: string; canonicalSlug: string } {
  let canonicalCategory = category;
  for (const [key, mapping] of Object.entries(categoryRoutes)) {
    if (Object.values(mapping).includes(category)) {
      canonicalCategory = key;
      break;
    }
  }

  let canonicalSlug = localizedSlug;
  for (const [key, mapping] of Object.entries(slugRoutes)) {
    if (Object.values(mapping).includes(localizedSlug)) {
      canonicalSlug = key;
      break;
    }
  }

  return { canonicalCategory, canonicalSlug };
}

/**
 * Standart bir kategori ve slug'ı hedef dildeki yerelleştirilmiş URL parçalarına dönüştürür.
 */
export function getLocalizedPath(categoryKey: string, slugKey: string, targetLocale: Language): string {
  const category = categoryRoutes[categoryKey]?.[targetLocale] || categoryKey;
  const slug = slugRoutes[slugKey]?.[targetLocale] || slugKey;
  return `/${targetLocale}/${category}/${slug}`;
}

/**
 * Mevcut URL'i hedef dildeki yerelleştirilmiş URL'e çevirir.
 */
export function translateUrl(pathname: string, targetLocale: Language): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return `/${targetLocale}`;
  if (segments.length === 1) return `/${targetLocale}`;

  const currentCategory = segments[1];
  const currentSlug = segments[2];

  // Resolve canonical keys
  const { canonicalCategory, canonicalSlug } = resolveCanonicalSlug(currentCategory, currentSlug || '');

  // Tekil rotalar (arge, referanslar, iletisim, haberler)
  if (!currentSlug) {
    const localizedCategory = categoryRoutes[canonicalCategory]?.[targetLocale] || canonicalCategory;
    return `/${targetLocale}/${localizedCategory}`;
  }

  // Dinamik rotalar
  const localizedCategory = categoryRoutes[canonicalCategory]?.[targetLocale] || canonicalCategory;
  const localizedSlug = slugRoutes[canonicalSlug]?.[targetLocale] || canonicalSlug;

  return `/${targetLocale}/${localizedCategory}/${localizedSlug}`;
}
