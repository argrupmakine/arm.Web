'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import ProtectedContact from '@/components/ui/ProtectedContact';
import { useLanguage } from '@/context/LanguageContext';
import { siteConfig, homeSectors } from '@/config/site';
import { getLocalizedPath, categoryRoutes } from '@/config/routes';

export default function Footer() {
  const { t, language } = useLanguage();

  const sectors = homeSectors.map(s => ({
    slug: s.slug,
    href: getLocalizedPath('sektorler', s.slug, language)
  }));

  const quickLinks = [
    { slug: 'hakkimizda', href: getLocalizedPath('kurumsal', 'hakkimizda', language), isSlug: true },
    { slug: 'kurum-kulturumuz', href: getLocalizedPath('kurumsal', 'kurum-kulturumuz', language), isSlug: true },
    { slug: 'kalite-politikamiz', href: getLocalizedPath('kurumsal', 'kalite-politikamiz', language), isSlug: true },
    { name: 'nav.uretim', href: getLocalizedPath('uretim-hatlari', 'giyotin-makas', language) },
    { name: 'nav.arge', href: `/${language}/${categoryRoutes['arge']?.[language] || 'arge'}` },
    { name: 'nav.referanslar', href: `/${language}/${categoryRoutes['referanslar']?.[language] || 'referanslar'}` },
    { name: 'nav.iletisim', href: `/${language}/${categoryRoutes['iletisim']?.[language] || 'iletisim'}` }
  ];

  return (
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-800">
      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <Link href={`/${language}`} className="inline-block">
              <Image
                src="/logo.png"
                alt="Ar Grup Makine Logo"
                width={180}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed">
              {t('ui.hero_desc')}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-blue-950/80 text-blue-400 border border-blue-800/60">
                IATF 16949 & ISO 9001
              </span>
            </div>
          </div>

          {/* Sektörler */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-6 border-l-2 border-blue-500 pl-3">
              {t('ui.categories')}
            </h3>
            <ul className="space-y-2.5">
              {sectors.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-slate-400 hover:text-white text-xs transition-colors block">
                    {t('slug.' + item.slug)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hızlı Erişim */}
          <div>
            <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-6 border-l-2 border-blue-500 pl-3">
              {t('ui.quick_links')}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="text-slate-400 hover:text-white text-xs transition-colors block">
                    {item.isSlug ? t('slug.' + item.slug) : t(item.name || '')}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-xs font-bold tracking-wider uppercase mb-6 border-l-2 border-blue-500 pl-3">
                {t('nav.iletisim')}
              </h3>
              <ul className="space-y-3.5 text-xs text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <ProtectedContact type="phone" className="hover:text-white transition-colors" />
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-blue-500 flex-shrink-0" />
                  <ProtectedContact type="email" className="hover:text-white transition-colors" />
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
              <h4 className="text-white text-xs font-bold tracking-wider uppercase">{t('ui.follow_us')}</h4>
              <div className="flex gap-3">
                <a
                  href={siteConfig.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg text-slate-350 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href={siteConfig.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg text-slate-350 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer / Copyright */}
      <div className="border-t border-slate-800/80 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[11px] text-slate-500">
            Copyright &copy; 2026 Argrup Makina | {t('ui.copyright')}
          </p>
          <p className="text-[11px] text-slate-500">
            {t('ui.design')}:{' '}
            <a
              href="https://emirci.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-500 transition-colors font-medium"
            >
              By Serdar
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
