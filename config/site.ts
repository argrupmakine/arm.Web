import { SectorItem, Language } from '@/types';

export const siteConfig = {
  name: 'Ar Grup Makine',
  contact: {
    address: '1.O.S.B. Avrupa Hun Cad. No: 10 Sincan / Ankara / Türkiye',
    phone: '+90 312 267 51 00 (pbx)',
    phoneRaw: '+903122675100',
    fax: '+90 312 267 51 05',
    email: 'info@argrupmakine.com.tr',
    mapsUrl: 'https://maps.google.com/maps?q=39.9765238,32.5447328&hl=tr&z=16&output=embed',
    directMapsUrl: 'https://maps.app.goo.gl/iFHFuLJrSYxzSWpz5',
    coordinates: {
      lat: 39.9765238,
      lng: 32.5447328,
    },
  },
  socials: {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
  },
};

export const homeSectors: SectorItem[] = [
  {
    slug: 'is-makinalari',
    href: '/sektorler/is-makinalari',
    img: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/cats1_icerik_g55_1326x494_WYPlG5IM.png',
  },
  {
    slug: 'savunma-sanayi',
    href: '/sektorler/savunma-sanayi',
    img: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/savunma-90_icerik_g150_1326x494_gRtXaqs9.png',
  },
  {
    slug: 'otomotiv',
    href: '/sektorler/otomotiv',
    img: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/cats3_icerik_g55_1326x494_aEXMFjLh.png',
  },
  {
    slug: 'ozel-uygulamalar',
    href: '/sektorler/ozel-uygulamalar',
    img: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/cats4_icerik_g156_1326x494_gJ1UJV8G.png',
  },
  {
    slug: 'tarim-makinalari',
    href: '/sektorler/tarim-makinalari',
    img: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/cats5_icerik_g159_1326x494_Mj3hJoCc.png',
  },
  {
    slug: 'medikal',
    href: '/sektorler/medikal',
    img: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/cats6_icerik_g162_1326x494_ihCql9IL.png',
  },
];

export const partnerLogos: string[] = [
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/taf_sayfa_g16_250x200_AHbC4q1D.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/10_sayfa_g16_250x200_xfhVIbWa.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/11_sayfa_g16_250x200_hJtHOaUH.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/9_sayfa_g16_250x200_bdtyeEYM.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/8_sayfa_g16_250x200_zNTzstFh.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/7_sayfa_g16_250x200_5JGj4Jk1.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/6_sayfa_g16_250x200_roDW7sMa.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/5_sayfa_g16_250x200_xdRRFvMm.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/4_sayfa_g16_250x200_42SRce5r.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/3_sayfa_g16_250x200_ncJrxt56.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/2_sayfa_g16_250x200_fAurnqlN.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/1_sayfa_g16_250x200_jpXQxBkX.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/hm_sayfa_g16_250x200_ilTjqNNh.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/hestal-de_sayfa_g16_250x200_Bbi3UJa2.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/etn_sayfa_g16_250x200_VNdJnZLI.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/basak_sayfa_g16_250x200_1PvriDvu.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/aselsan_sayfa_g16_250x200_cTfov1Jl.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/tt_sayfa_g16_250x200_3mpOtVJt.png',
  '/Webkontrol/SayfaYonetimi/GaleriResim/BuyukResim/bpwcomtr_sayfa_g16_250x200_ynixbN2b.png',
];

export const newsMeta: Record<string, { date: Record<Language, string>; image: string }> = {
  'argrup-makine-01': {
    date: {
      tr: '06 Mayıs 2026',
      en: 'May 6, 2026',
      de: '6. Mai 2026',
      fr: '6 Mai 2026',
    },
    image: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/news1_icerik_g165_1004x539_aMgEIMTs.jpg',
  },
  'argrup-makine-02': {
    date: {
      tr: '06 Mayıs 2026',
      en: 'May 6, 2026',
      de: '6. Mai 2026',
      fr: '6 Mai 2026',
    },
    image: '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/news2_icerik_g180_1004x539_iPEcgh3N.jpg',
  },
};
