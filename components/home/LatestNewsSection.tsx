'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { newsPages } from '@/lib/data';
import { newsMeta } from '@/config/site';

export default function LatestNewsSection() {
  const { t, language } = useLanguage();

  if (!newsPages || newsPages.length === 0) return null;

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
          <div className="space-y-4">
            <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase">
              {t('home.latest_badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 uppercase">
              {t('home.news_title')}
            </h2>
          </div>

          <Link
            href={`/${language}/haberler`}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
          >
            {t('home.news_more')}
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsPages.slice(0, 2).map((item, idx) => {
            const meta = newsMeta[item.slug];
            const img =
              meta?.image ||
              (idx === 0
                ? '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/news1_icerik_g165_1004x539_aMgEIMTs.jpg'
                : '/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/news2_icerik_g180_1004x539_iPEcgh3N.jpg');

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-150 shadow-sm hover:shadow-xl transition-all flex flex-col sm:flex-row h-full group"
              >
                <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 bg-slate-200">
                  <Image
                    src={img}
                    alt={t('slug.' + item.slug)}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-blue-600 uppercase">
                      {t('home.news_tag')}
                    </span>
                    <h3 className="text-base font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {t('slug.' + item.slug)}
                    </h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed line-clamp-2">
                      {t('home.news_excerpt')}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60">
                    <Link
                      href={`/${language}/haberler/${item.slug}`}
                      className="text-[11px] font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
                    >
                      {t('ui.read_more')} <ChevronRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
