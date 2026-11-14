'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { kurumsalPages, uretimPages, sektorPages } from '@/lib/data';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedPath, categoryRoutes } from '@/config/routes';

export default function Header() {
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages = [
    { code: 'tr', label: 'TR', name: 'Türkçe' },
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'de', label: 'DE', name: 'Deutsch' },
    { code: 'fr', label: 'FR', name: 'Français' }
  ] as const;

  const activeLang = languages.find(l => l.code === language) || languages[0];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
    setActiveDropdown(null);
  }

  const navItems = [
    {
      label: t('nav.kurumsal'),
      type: 'dropdown',
      items: kurumsalPages.map(page => ({
        label: t('slug.' + page.slug),
        href: getLocalizedPath('kurumsal', page.slug, language),
      }))
    },
    {
      label: t('nav.uretim'),
      type: 'dropdown',
      items: uretimPages.map(page => ({
        label: t('slug.' + page.slug),
        href: getLocalizedPath('uretim-hatlari', page.slug, language),
      }))
    },
    {
      label: t('nav.sektorler'),
      type: 'dropdown',
      items: [
        ...sektorPages.map(page => ({
          label: t('slug.' + page.slug),
          href: getLocalizedPath('sektorler', page.slug, language),
        })),
        { label: t('slug.medikal'), href: getLocalizedPath('sektorler', 'medikal', language) }
      ]
    },
    { label: t('nav.arge'), href: `/${language}/${categoryRoutes['arge']?.[language] || 'arge'}` },
    { label: t('nav.referanslar'), href: `/${language}/${categoryRoutes['referanslar']?.[language] || 'referanslar'}` },
    { label: t('nav.haberler'), href: `/${language}/${categoryRoutes['haberler']?.[language] || 'haberler'}` },
    { label: t('nav.iletisim'), href: `/${language}/${categoryRoutes['iletisim']?.[language] || 'iletisim'}` }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-100 py-3'
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${language}`} className="flex-shrink-0 flex items-center">
            <Image
              src="/logo.png"
              alt="Ar Grup Makine Logo"
              width={180}
              height={50}
              priority
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 xl:space-x-2 items-center">
            {navItems.map((item, idx) => {
              if (item.type === 'dropdown') {
                const isActive = item.items?.some(subItem => pathname === subItem.href);
                return (
                  <div
                    key={idx}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className={`flex items-center px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                        isActive
                          ? 'text-blue-600 bg-blue-50/50'
                          : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50'
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 mt-1 w-64 rounded-xl bg-white shadow-2xl ring-1 ring-black/5 py-2 z-50 overflow-hidden border border-slate-100"
                        >
                          <div className="max-h-[350px] overflow-y-auto custom-scrollbar">
                            {item.items?.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                className={`block px-4 py-2.5 text-xs font-medium transition-colors ${
                                  pathname === subItem.href
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-slate-700 hover:bg-slate-50 hover:text-blue-600'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              } else {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={idx}
                    href={item.href || '/'}
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-blue-600 bg-blue-50/50'
                        : 'text-slate-800 hover:text-blue-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
            })}

            {/* Premium Language Dropdown Selector */}
            <div 
              className="relative ml-4 pl-4 border-l border-slate-200 group"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-600 cursor-pointer select-none font-bold text-xs uppercase py-2"
              >
                <Globe className="h-4 w-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
                <span>{activeLang.label}</span>
                <ChevronDown className="h-3 w-3 text-slate-400 group-hover:text-blue-600 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              
              <div className="absolute right-0 top-full w-32 bg-white/95 backdrop-blur-md border border-slate-100 rounded-xl shadow-xl py-1 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-blue-50 hover:text-blue-600 transition-all flex items-center justify-between cursor-pointer ${
                      language === lang.code ? 'text-blue-600 bg-blue-50/50' : 'text-slate-700'
                    }`}
                  >
                    <span>{lang.name}</span>
                    <span className="text-[9px] text-slate-400 font-bold">{lang.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Mobile language picker */}
            <div className="relative group">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 text-slate-700 hover:text-blue-600 cursor-pointer select-none font-bold text-xs uppercase"
              >
                <Globe className="h-4 w-4 text-slate-400" />
                <span>{activeLang.label}</span>
                <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-slate-100 rounded-xl shadow-xl py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-2 text-xs font-semibold hover:bg-slate-50 flex items-center justify-between cursor-pointer ${
                        language === lang.code ? 'text-blue-600 bg-blue-50/30' : 'text-slate-700'
                      }`}
                    >
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:text-blue-600 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item, idx) => {
                if (item.type === 'dropdown') {
                  const isDropdownActive = activeDropdown === item.label;
                  return (
                    <div key={idx} className="space-y-1">
                      <button
                        onClick={() =>
                          setActiveDropdown(isDropdownActive ? null : item.label)
                        }
                        className="flex items-center justify-between w-full px-3 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-blue-600 rounded-lg"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isDropdownActive ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isDropdownActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 space-y-1 overflow-hidden"
                          >
                            {item.items?.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                href={subItem.href}
                                className={`block px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                                  pathname === subItem.href
                                    ? 'bg-blue-50 text-blue-600 font-semibold'
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'
                                }`}
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                } else {
                  return (
                    <Link
                      key={idx}
                      href={item.href || '/'}
                      className={`block px-3 py-3 text-sm font-bold rounded-lg transition-colors ${
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-600'
                          : 'text-slate-800 hover:bg-slate-50 hover:text-blue-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                }
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
