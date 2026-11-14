'use client';

import React, { useState } from 'react';
import { faqData, FAQItem } from '@/config/faq-data';
import { Language } from '@/context/LanguageContext';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface FAQSectionProps {
  slug: string;
  language: Language;
}

export default function FAQSection({ slug, language }: FAQSectionProps) {
  const items: FAQItem[] = faqData[slug]?.[language] || faqData[slug]?.['tr'] || [];

  // Default first question open
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  if (!items || items.length === 0) return null;

  const toggleItem = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const titles: Record<Language, { heading: string; badge: string }> = {
    tr: {
      heading: 'Sıkça Sorulan Sorular',
      badge: 'Mühendislik & İmalat Soru-Cevap',
    },
    en: {
      heading: 'Frequently Asked Questions',
      badge: 'Engineering & Manufacturing FAQ',
    },
    de: {
      heading: 'Häufig gestellte Fragen',
      badge: 'Technik & Fertigung FAQ',
    },
    fr: {
      heading: 'Foire aux questions',
      badge: 'Ingénierie & Fabrication FAQ',
    },
  };

  const currentTitles = titles[language] || titles['tr'];

  // Schema.org FAQPage structured data for Google Rich Snippets & AEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-12 space-y-6">
      {/* JSON-LD for Search Engines & AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2.5">
          <HelpCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
          <span>{currentTitles.heading}</span>
        </h3>
        <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200/60 w-fit">
          {currentTitles.badge}
        </span>
      </div>

      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndices.includes(index);
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 bg-white ${
                isOpen
                  ? 'border-blue-300 shadow-sm ring-1 ring-blue-100'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(index)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-slate-100 text-slate-600 text-xs font-bold">
                    {index + 1}
                  </span>
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={`h-5 w-5 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1">
                  <p className="bg-slate-50/70 rounded-xl p-4 border border-slate-100">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
