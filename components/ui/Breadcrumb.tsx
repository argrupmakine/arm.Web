import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  variant?: 'banner' | 'light';
}

const baseUrl = 'https://argrupmakine.com.tr';

export default function Breadcrumb({
  items,
  className = '',
  variant = 'banner',
}: BreadcrumbProps) {
  if (!items || items.length === 0) return null;

  // Generate Schema.org BreadcrumbList JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => {
      const fullUrl = item.href
        ? item.href.startsWith('http')
          ? item.href
          : `${baseUrl}${item.href.startsWith('/') ? item.href : `/${item.href}`}`
        : undefined;

      const listItem: {
        '@type': string;
        position: number;
        name: string;
        item?: string;
      } = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };

      if (fullUrl) {
        listItem.item = fullUrl;
      }

      return listItem;
    }),
  };

  const isBanner = variant === 'banner';
  const textColor = isBanner ? 'text-slate-300' : 'text-slate-500';
  const linkHoverColor = isBanner ? 'hover:text-white' : 'hover:text-blue-600';
  const activeColor = isBanner ? 'text-blue-400 font-semibold' : 'text-slate-900 font-semibold';
  const separatorColor = isBanner ? 'text-slate-500' : 'text-slate-400';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className={`flex ${className}`}>
        <ol className="flex items-center flex-wrap gap-1.5 md:gap-2 text-xs">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center gap-1.5 md:gap-2">
                {index > 0 && (
                  <ChevronRight
                    className={`h-3.5 w-3.5 flex-shrink-0 ${separatorColor}`}
                    aria-hidden="true"
                  />
                )}
                {isLast || !item.href ? (
                  <span
                    className={`truncate max-w-[200px] md:max-w-[320px] ${activeColor}`}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1.5 transition-colors ${textColor} ${linkHoverColor}`}
                  >
                    {isFirst && <Home className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
