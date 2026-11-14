export type Language = 'tr' | 'en' | 'fr' | 'de';

export interface GalleryItem {
  href: string;
  img: string;
}

export interface PageItem {
  slug: string;
  title: string;
  bannerImage: string;
  content: string;
  gallery: GalleryItem[];
}

export interface SectorItem {
  slug: string;
  href: string;
  img: string;
}

export interface SectorDescription {
  tr: string;
  en: string;
  de: string;
  fr: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  bannerImage?: string;
  content?: string;
  gallery?: GalleryItem[];
  date?: Record<Language, string>;
  image?: string;
}
