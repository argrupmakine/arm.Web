'use client';

import React from 'react';
import { technicalData } from '@/config/technical-data';
import { Language } from '@/context/LanguageContext';
import { Cpu, CheckCircle2, ShieldCheck, Layers, Wrench } from 'lucide-react';

interface TechnicalSpecsViewProps {
  slug: string;
  language: Language;
}

export default function TechnicalSpecsView({ slug, language }: TechnicalSpecsViewProps) {
  const data = technicalData[slug];
  if (!data) return null;

  const specs = data.specs[language] || data.specs['tr'] || [];
  const capabilities = data.capabilities[language] || data.capabilities['tr'] || [];
  const materials = data.materials?.[language] || data.materials?.['tr'];
  const machines = data.machines;

  const sectionTitles: Record<Language, { specs: string; capabilities: string; machines: string; materials: string }> = {
    tr: {
      specs: 'Teknik Kapasite & Parametreler',
      capabilities: 'Öne Çıkan Üretim Kabiliyetleri',
      machines: 'Bölüm Makine Parkuru & Donanım',
      materials: 'İşlenen Başlıca Hammaddeler',
    },
    en: {
      specs: 'Technical Capacity & Parameters',
      capabilities: 'Core Manufacturing Capabilities',
      machines: 'Section Machine Fleet & Equipment',
      materials: 'Key Processed Materials',
    },
    de: {
      specs: 'Technische Kapazität & Kennzahlen',
      capabilities: 'Wichtigste Fertigungskompetenzen',
      machines: 'Maschinenpark & Anlagentechnik',
      materials: 'Verarbeitete Werkstoffe',
    },
    fr: {
      specs: 'Capacités Techniques & Paramètres',
      capabilities: 'Compétences de Fabrication Clés',
      machines: 'Parc Machines & Équipements',
      materials: 'Matières Premières Traitées',
    },
  };

  const titles = sectionTitles[language] || sectionTitles['tr'];

  return (
    <div className="space-y-8 my-8">
      {/* 1. Technical KPI Cards */}
      {specs.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Cpu className="h-4 w-4 text-blue-600" />
            <span>{titles.specs}</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {specs.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:border-blue-400 transition-colors flex flex-col justify-between"
              >
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <div className="text-base sm:text-lg font-extrabold text-blue-600 leading-tight">
                  {item.value}
                </div>
                {item.sub && (
                  <span className="text-[10px] sm:text-[11px] font-medium text-slate-400 mt-2 block pt-2 border-t border-slate-100">
                    {item.sub}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. Core Capabilities */}
      {capabilities.length > 0 && (
        <div className="bg-slate-50/80 rounded-2xl p-5 sm:p-6 border border-slate-200/80 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-600" />
            <span>{titles.capabilities}</span>
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {capabilities.map((cap, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
                <CheckCircle2 className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* 3. Processed Materials */}
      {materials && materials.length > 0 && (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Layers className="h-4 w-4 text-blue-600" />
            <span>{titles.materials}</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {materials.map((mat, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-100"
              >
                {mat}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 4. Machine Park Table (if available) */}
      {machines && machines.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
            <Wrench className="h-4 w-4 text-blue-600" />
            <span>{titles.machines}</span>
          </h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
            <table className="min-w-full divide-y divide-slate-200 text-xs">
              <thead className="bg-slate-50 text-slate-600 font-bold uppercase tracking-wider text-[11px]">
                <tr>
                  <th scope="col" className="px-4 py-3 text-left">
                    Kod
                  </th>
                  <th scope="col" className="px-4 py-3 text-left">
                    Tezgah / Ekipman Adı
                  </th>
                  <th scope="col" className="px-4 py-3 text-left">
                    Teknik Özellik / Kapasite
                  </th>
                  {machines.some((m) => m.power) && (
                    <th scope="col" className="px-4 py-3 text-right">
                      Güç
                    </th>
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700 font-medium">
                {machines.map((m, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                    <td className="px-4 py-3 font-bold text-blue-600 whitespace-nowrap">
                      {m.code}
                    </td>
                    <td className="px-4 py-3 font-semibold text-slate-900 whitespace-nowrap">
                      {m.name}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{m.specs}</td>
                    {machines.some((item) => item.power) && (
                      <td className="px-4 py-3 text-right text-slate-500 font-semibold whitespace-nowrap">
                        {m.power || '-'}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
