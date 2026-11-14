'use client';

import React, { useState } from 'react';
import { notFound, useParams } from 'next/navigation';
import { kurumsalPages } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import PageBanner from '@/components/ui/PageBanner';
import DetailSidebar from '@/components/layout/DetailSidebar';
import GalleryGrid from '@/components/ui/GalleryGrid';
import Lightbox from '@/components/ui/Lightbox';
import { getLocalizedPath } from '@/config/routes';
import { getPageContent } from '@/content/pages';

export default function KurumsalDetayPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;
  const page = kurumsalPages.find((p) => p.slug === slug);

  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!page) {
    notFound();
  }

  const sidebarLinks = kurumsalPages.map((p) => ({
    title: t('slug.' + p.slug),
    href: getLocalizedPath('kurumsal', p.slug, language),
    active: p.slug === slug,
  }));

  const pageTitle = t('slug.' + page.slug);
  const pageContent = getPageContent(page.slug, language) || page.content;

  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: t('nav.kurumsal'), href: getLocalizedPath('kurumsal', kurumsalPages[0].slug, language) },
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
            title={`${t('nav.kurumsal')} ${t('ui.menu')}`}
            links={sidebarLinks}
          />

          <main className="lg:col-span-3 space-y-12">
            <article className="bg-white rounded-3xl border border-slate-150 p-6 md:p-10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />
              <div
                className="prose prose-slate max-w-none prose-sm md:prose-base prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: pageContent }}
              />
            </article>

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
