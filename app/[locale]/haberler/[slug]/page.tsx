'use client';

import React from 'react';
import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { newsPages } from '@/lib/data';
import { newsMeta } from '@/config/site';
import { Calendar, Heart } from 'lucide-react';
import Breadcrumb from '@/components/ui/Breadcrumb';
import { categoryRoutes } from '@/config/routes';

import { useLanguage } from '@/context/LanguageContext';

export default function HaberDetayPage() {
  const { t, language } = useLanguage();
  const params = useParams();
  const slug = params?.slug as string;
  const page = newsPages.find(p => p.slug === slug);

  if (!page) {
    notFound();
  }

  const meta = newsMeta[page.slug];
  const date = meta?.date[language] || meta?.date['tr'] || '';
  const img = meta?.image || '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/news1_icerik_g165_1004x539_aMgEIMTs.jpg';
  const title = t('slug.' + page.slug);

  const pageContent = page.content || t('news.fallback_content');

  const newsCategoryRoute = categoryRoutes['haberler']?.[language] || 'haberler';
  const breadcrumbs = [
    { name: t('nav.home'), href: `/${language}` },
    { name: t('nav.haberler'), href: `/${language}/${newsCategoryRoute}` },
    { name: title },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Banner */}
      <div className="relative h-[250px] md:h-[350px] w-full bg-slate-900 overflow-hidden flex items-center">
        <Image
          src={img}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="max-w-3xl">
            <div className="mb-4">
              <Breadcrumb items={breadcrumbs} variant="banner" />
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {title}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <article className="bg-white rounded-3xl border border-slate-150 p-6 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600" />
          
          {/* Metadata */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100 mb-8">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-semibold">
              <Calendar className="h-4 w-4 text-blue-500" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold cursor-pointer hover:text-red-500 transition-colors">
              <Heart className="h-4 w-4" />
              <span>{t('ui.like')} (12)</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden mb-8 border border-slate-100 bg-slate-100">
            <Image
              src={img}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-slate max-w-none prose-sm md:prose-base prose-headings:font-extrabold prose-headings:text-slate-900 prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: pageContent }}
          />
        </article>
      </div>
    </div>
  );
}
