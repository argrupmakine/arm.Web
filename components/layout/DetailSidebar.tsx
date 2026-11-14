'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronRight, ChevronDown, Menu } from 'lucide-react';

export interface SidebarLink {
  title: string;
  href: string;
  active: boolean;
}

interface DetailSidebarProps {
  title: string;
  links: SidebarLink[];
  maxHeight?: string;
}

export default function DetailSidebar({
  title,
  links,
  maxHeight = 'max-h-[500px]',
}: DetailSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeLink = links.find((l) => l.active) || links[0];

  return (
    <aside className="lg:col-span-1 space-y-4">
      {/* Mobile Toggle Bar (< lg) */}
      <div className="lg:hidden bg-white rounded-2xl border border-slate-200 p-3 shadow-sm">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex items-center justify-between w-full px-3 py-2 text-xs font-bold text-slate-800 focus:outline-none"
          aria-expanded={mobileOpen}
        >
          <div className="flex items-center gap-2 truncate">
            <Menu className="h-4 w-4 text-blue-600 flex-shrink-0" />
            <span className="text-slate-400 font-semibold">{title}:</span>
            <span className="text-blue-600 font-bold truncate">{activeLink?.title}</span>
          </div>
          <ChevronDown
            className={`h-4 w-4 text-slate-500 transition-transform duration-200 flex-shrink-0 ml-2 ${
              mobileOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        {mobileOpen && (
          <nav className="mt-2 pt-2 border-t border-slate-100 space-y-1 max-h-[300px] overflow-y-auto custom-scrollbar">
            {links.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between w-full px-3 py-2.5 text-xs font-semibold rounded-xl transition-all bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 data-[active=true]:bg-blue-600 data-[active=true]:text-white"
                data-active={link.active}
              >
                <span>{link.title}</span>
                <ChevronRight
                  className={`h-4 w-4 ${link.active ? 'text-white' : 'text-slate-400'}`}
                />
              </Link>
            ))}
          </nav>
        )}
      </div>

      {/* Desktop Persistent Sidebar (>= lg) */}
      <div className="hidden lg:block bg-white rounded-2xl border border-slate-150 p-4 shadow-sm sticky top-28">
        <h3 className="text-xs font-bold text-slate-400 tracking-wider uppercase px-3 mb-3">
          {title}
        </h3>
        <nav className={`space-y-1 ${maxHeight} overflow-y-auto custom-scrollbar`}>
          {links.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="flex items-center justify-between w-full px-3 py-2.5 text-xs font-semibold rounded-xl transition-all bg-white text-slate-700 hover:bg-slate-100 hover:text-blue-600 data-[active=true]:bg-blue-600 data-[active=true]:text-white data-[active=true]:shadow-md data-[active=true]:shadow-blue-500/10"
              data-active={link.active}
            >
              <span>{link.title}</span>
              <ChevronRight
                className={`h-4 w-4 ${link.active ? 'text-white' : 'text-slate-400'}`}
              />
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
