'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { newsPages } from '@/lib/data';
import { newsMeta } from '@/config/site';
import { Calendar, ArrowRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import PageBanner from '@/components/ui/PageBanner';

import { useLanguage } from '@/context/LanguageContext';

export default function HaberlerPage() {
  const { t, language } = useLanguage();
  const pageTitle = t('ui.news_title');

  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: pageTitle },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <PageBanner title={pageTitle} breadcrumbs={breadcrumbs} />

      {/* Grid List */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsPages.map((item, idx) => {
            const meta = newsMeta[item.slug];
            const date = meta?.date[language] || meta?.date['tr'] || '';
            const img = meta?.image || '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/news1_icerik_g165_1004x539_aMgEIMTs.jpg';
            const title = t('slug.' + item.slug);

            return (
              <motion.article
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-150 overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col h-full group"
              >
                {/* Image */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                    {t('ui.corporate_tag')}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span>{date}</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors leading-tight">
                      {title}
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                      {t('ui.news_desc')}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                    <Link
                      href={`/${language}/haberler/${item.slug}`}
                      className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1.5 transition-colors group-hover:translate-x-1 duration-200"
                    >
                      {t('ui.read_more')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                      <Eye className="h-4 w-4" />
                      <span>{t('ui.read')}</span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
