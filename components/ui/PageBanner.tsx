import React from 'react';
import Image from 'next/image';
import Breadcrumb, { BreadcrumbItem } from '@/components/ui/Breadcrumb';

interface PageBannerProps {
  badge?: string;
  title: string;
  imageSrc?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageBanner({
  badge = 'AR GRUP MAKİNE',
  title,
  imageSrc,
  breadcrumbs,
}: PageBannerProps) {
  return (
    <div className="relative h-[250px] md:h-[350px] w-full bg-slate-900 overflow-hidden flex items-center">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="100vw"
          className="object-cover opacity-35"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="max-w-3xl">
          {breadcrumbs && breadcrumbs.length > 0 ? (
            <div className="mb-3">
              <Breadcrumb items={breadcrumbs} variant="banner" />
            </div>
          ) : (
            <span className="text-blue-400 font-bold text-xs uppercase tracking-widest block mb-2">
              {badge}
            </span>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight uppercase">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
}
