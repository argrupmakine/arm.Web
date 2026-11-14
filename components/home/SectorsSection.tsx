'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { homeSectors } from '@/config/site';
import { getLocalizedPath } from '@/config/routes';

export default function SectorsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <Container>
        <SectionHeading
          badge={t('home.sektor_title')}
          title={t('nav.sektorler')}
          description={t('home.sektor_desc')}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeSectors.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6 }}
              className="group relative h-96 rounded-3xl overflow-hidden border border-slate-100 bg-slate-900 shadow-sm hover:shadow-xl transition-all"
            >
              <Image
                src={item.img}
                alt={t('slug.' + item.slug)}
                fill
                className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 space-y-3">
                <h3 className="text-lg font-extrabold text-white tracking-wide">
                  {t('slug.' + item.slug)}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t('sector_desc.' + item.slug)}
                </p>
                <div className="pt-2">
                  <Link
                    href={getLocalizedPath('sektorler', item.slug, language)}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-xl transition-all cursor-pointer"
                  >
                    {t('ui.detail')} <ChevronRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
