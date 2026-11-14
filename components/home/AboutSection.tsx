'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight, Users, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { getLocalizedPath } from '@/config/routes';

export default function AboutSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-slate-100"
          >
            <Image
              src="/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/argrup_icerik_g9_854x433_BpecMbS7.jpg"
              alt="Ar Grup Fabrika"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <span className="text-blue-600 font-extrabold text-xs tracking-widest uppercase flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-blue-600 rounded-full" />
              {t('slug.hakkimizda')}
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight uppercase">
              ARGRUP <span className="text-blue-600">{t('home.machine_label')}</span>
            </h2>

            <p className="text-slate-600 text-sm leading-relaxed">
              {t('home.about_desc')}
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="space-y-1">
                <h4 className="text-slate-900 font-extrabold text-lg flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  50+ {t('home.years_label')}
                </h4>
                <p className="text-slate-500 text-xs font-medium">{t('home.about_years')}</p>
              </div>

              <div className="space-y-1">
                <h4 className="text-slate-900 font-extrabold text-lg flex items-center gap-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  IATF 16949
                </h4>
                <p className="text-slate-500 text-xs font-medium">{t('home.about_quality')}</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={getLocalizedPath('kurumsal', 'hakkimizda', language)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {t('ui.more_detail')}
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
