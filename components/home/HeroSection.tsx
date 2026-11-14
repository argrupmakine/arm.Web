'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedPath, categoryRoutes } from '@/config/routes';

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-[550px] h-[100dvh] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
      <video
        src="/site/Library/images/video.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-900/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-6">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1.5 bg-blue-600/90 text-white text-[10px] font-bold tracking-widest rounded-full uppercase"
        >
          {t('ui.sub_title')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto uppercase"
        >
          AR GRUP <span className="text-blue-500">{t('home.machine_label')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto font-medium"
        >
          {t('ui.hero_desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-4 flex flex-wrap justify-center gap-4"
        >
          <Link
            href={getLocalizedPath('kurumsal', 'hakkimizda', language)}
            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/20 cursor-pointer"
          >
            {t('nav.kurumsal')}
          </Link>
          <Link
            href={`/${language}/${categoryRoutes['iletisim']?.[language] || 'iletisim'}`}
            className="px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl text-xs font-bold transition-all border border-white/20 cursor-pointer"
          >
            {t('ui.contact_us')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
