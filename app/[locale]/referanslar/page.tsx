'use client';

import React from 'react';
import Image from 'next/image';
import { referanslarPage } from '@/lib/data';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import PageBanner from '@/components/ui/PageBanner';

export default function ReferanslarPage() {
  const { t, language } = useLanguage();

  if (!referanslarPage) {
    notFound();
  }

  const pageTitle = t('nav.referanslar');

  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: pageTitle },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageBanner
        title={pageTitle}
        imageSrc={referanslarPage.bannerImage}
        breadcrumbs={breadcrumbs}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {referanslarPage.gallery && referanslarPage.gallery.length > 0 && (
          <div className="space-y-6 mt-12">
            <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
              <span className="h-6 w-1 bg-blue-600 rounded-full" />
              {t('ui.partners')}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {referanslarPage.gallery.map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="bg-white rounded-2xl border border-slate-200/80 p-6 flex items-center justify-center h-28 shadow-sm transition-all hover:shadow-md bg-slate-50/20"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={img.img}
                      alt={`Referans Logo ${idx + 1}`}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
