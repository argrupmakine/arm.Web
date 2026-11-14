'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronRight, ShieldCheck, Cpu, Hammer } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import { getLocalizedPath } from '@/config/routes';

export default function ProductionSection() {
  const { t, language } = useLanguage();

  const productionHighlights = [
    {
      icon: Cpu,
      titleKey: 'home.cnc_title',
      descKey: 'home.cnc_desc',
      href: getLocalizedPath('uretim-hatlari', 'cnc-bolumu', language),
    },
    {
      icon: Hammer,
      titleKey: 'home.pres_title',
      descKey: 'home.pres_desc',
      href: getLocalizedPath('uretim-hatlari', 'pres', language),
    },
    {
      icon: ShieldCheck,
      titleKey: 'home.robot_title',
      descKey: 'home.robot_desc',
      href: getLocalizedPath('uretim-hatlari', 'robot-kaynak-bolumu', language),
    },
  ];

  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <Container>
        <SectionHeading
          badge={t('home.uretim_title')}
          title={t('nav.uretim')}
          description={t('home.uretim_desc')}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {productionHighlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-slate-150 shadow-sm hover:shadow-xl transition-all space-y-4 relative overflow-hidden flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{t(item.titleKey)}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{t(item.descKey)}</p>
                </div>

                <div className="pt-4">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-700"
                  >
                    {t('ui.detail')} <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
