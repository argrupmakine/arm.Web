'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { uretimPages } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import PageBanner from '@/components/ui/PageBanner';
import DetailSidebar from '@/components/layout/DetailSidebar';
import GalleryGrid from '@/components/ui/GalleryGrid';
import Lightbox from '@/components/ui/Lightbox';
import TechnicalSpecsView from '@/components/ui/TechnicalSpecsView';
import FAQSection from '@/components/ui/FAQSection';
import { getLocalizedPath } from '@/config/routes';
import { getPageContent } from '@/content/pages';

export default function UretimDetayPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;
  const page = uretimPages.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!page) {
    notFound();
  }

  const sidebarLinks = uretimPages.map((p) => ({
    title: t('slug.' + p.slug),
    href: getLocalizedPath('uretim-hatlari', p.slug, language),
    active: p.slug === slug,
  }));

  const pageTitle = t('slug.' + page.slug);
  const pageContent = getPageContent(page.slug, language) || page.content;

  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: t('nav.uretim'), href: getLocalizedPath('uretim-hatlari', uretimPages[0].slug, language) },
    { name: pageTitle },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageBanner
        title={pageTitle}
        imageSrc={page.bannerImage}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <DetailSidebar
            title={t('nav.uretim')}
            links={sidebarLinks}
          />

          <main className="lg:col-span-3 space-y-12">
            <article className="bg-white rounded-3xl border border-slate-150 p-6 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />
              <div
                className="prose prose-slate max-w-none prose-sm md:prose-base prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-table:border prose-table:border-slate-200 prose-th:bg-slate-50 prose-th:px-4 prose-th:py-2.5 prose-td:px-4 prose-td:py-2.5"
                dangerouslySetInnerHTML={{ __html: pageContent }}
              />
            </article>

            <TechnicalSpecsView slug={page.slug} language={language} />

            <FAQSection slug={page.slug} language={language} />

            <GalleryGrid
              title={t('ui.gallery_products')}
              items={page.gallery}
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
