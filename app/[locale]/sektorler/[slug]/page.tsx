'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { sektorPages } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import PageBanner from '@/components/ui/PageBanner';
import DetailSidebar from '@/components/layout/DetailSidebar';
import GalleryGrid from '@/components/ui/GalleryGrid';
import Lightbox from '@/components/ui/Lightbox';
import TechnicalSpecsView from '@/components/ui/TechnicalSpecsView';
import FAQSection from '@/components/ui/FAQSection';
import { getLocalizedPath } from '@/config/routes';
import { getPageContent } from '@/content/pages';

export default function SektorDetayPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;

  const [activeImage, setActiveImage] = useState<string | null>(null);

  const allSectors = [
    ...sektorPages.map((p) => ({ slug: p.slug, title: t('slug.' + p.slug) })),
    { slug: 'medikal', title: t('slug.medikal') },
  ];

  let pageData = sektorPages.find((p) => p.slug === slug);

  if (slug === 'medikal') {
    pageData = {
      slug: 'medikal',
      title: t('slug.medikal'),
      bannerImage: '/Webkontrol/ParametreYonetimi/OzelAlanDosyalari/t8qnN64Ado_s1_kFN.jpg',
      content: getPageContent('medikal', language) || '',
      gallery: [],
    };
  }

  if (!pageData) {
    notFound();
  }

  const sidebarLinks = allSectors.map((s) => ({
    title: s.title,
    href: getLocalizedPath('sektorler', s.slug, language),
    active: s.slug === slug,
  }));

  const pageTitle = t('slug.' + pageData.slug);
  const pageContent = getPageContent(pageData.slug, language) || pageData.content;

  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: t('nav.sektorler'), href: getLocalizedPath('sektorler', allSectors[0]?.slug || 'otomotiv', language) },
    { name: pageTitle },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageBanner
        title={pageTitle}
        imageSrc={pageData.bannerImage}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <DetailSidebar title={t('ui.categories')} links={sidebarLinks} />

          <main className="lg:col-span-3 space-y-12">
            <article className="bg-white rounded-3xl border border-slate-150 p-6 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />
              <div
                className="prose prose-slate max-w-none prose-sm md:prose-base prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: pageContent }}
              />
            </article>

            <TechnicalSpecsView slug={pageData.slug} language={language} />

            <FAQSection slug={pageData.slug} language={language} />

            <GalleryGrid
              title={t('ui.gallery_products')}
              items={pageData.gallery}
              onImageClick={(src) => setActiveImage(src)}
              altPrefix={pageTitle}
            />
          </main>
        </div>
      </div>

      <Lightbox imageSrc={activeImage} onClose={() => setActiveImage(null)} altText={pageTitle} />
    </div>
  );
}
