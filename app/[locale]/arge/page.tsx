'use client';

import React, { useState } from 'react';
import { argePage } from '@/lib/data';
import { notFound } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import PageBanner from '@/components/ui/PageBanner';
import GalleryGrid from '@/components/ui/GalleryGrid';
import Lightbox from '@/components/ui/Lightbox';
import { getPageContent } from '@/content/pages';

export default function ArgePage() {
  const { t, language } = useLanguage();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  if (!argePage) {
    notFound();
  }

  const pageTitle = t('nav.arge');
  const argeDesc = getPageContent('arge', language);

  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: pageTitle },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageBanner
        title={pageTitle}
        imageSrc={argePage.bannerImage}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="bg-white rounded-3xl border border-slate-150 p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            {argeDesc}
          </p>
        </article>

        {argePage.gallery && argePage.gallery.length > 0 && (
          <div className="mt-12">
            <GalleryGrid
              title={t('ui.gallery') || 'Galeri'}
              items={argePage.gallery}
              onImageClick={(src) => setActiveImage(src)}
              altPrefix="AR-GE Görsel"
            />
          </div>
        )}
      </div>

      <Lightbox imageSrc={activeImage} onClose={() => setActiveImage(null)} altText="AR-GE Görsel" />
    </div>
  );
}
