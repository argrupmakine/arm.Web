'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import Container from '@/components/ui/Container';
import { partnerLogos } from '@/config/site';

export default function PartnersMarquee() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-slate-900 text-white overflow-hidden border-y border-slate-800">
      <Container className="mb-10 text-center">
        <span className="text-blue-500 font-extrabold text-xs tracking-widest uppercase">
          {t('nav.referanslar')}
        </span>
        <h2 className="text-2xl font-extrabold mt-2">{t('home.partner_title')}</h2>
      </Container>

      {/* Infinite Row Slider */}
      <div className="relative w-full flex items-center justify-center overflow-hidden py-4">
        <div className="flex gap-12 animate-marquee whitespace-nowrap min-w-full">
          {partnerLogos.concat(partnerLogos).map((logo, idx) => (
            <div
              key={idx}
              className="relative w-36 h-12 flex-shrink-0 flex items-center justify-center filter brightness-0 invert opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src={logo}
                alt="Partner Logo"
                fill
                sizes="144px"
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
