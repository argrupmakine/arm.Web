'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ZoomIn } from 'lucide-react';

interface GalleryItem {
  href: string;
  img: string;
}

interface GalleryGridProps {
  title?: string;
  items: GalleryItem[];
  onImageClick: (src: string) => void;
  altPrefix?: string;
}

export default function GalleryGrid({
  title = 'Galeri / Ürünler',
  items,
  onImageClick,
  altPrefix = 'Ürün Görseli',
}: GalleryGridProps) {
  if (!items || items.length === 0) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-extrabold text-slate-900 flex items-center gap-3">
        <span className="h-6 w-1 bg-blue-600 rounded-full" />
        {title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
        {items.map((item, idx) => {
          const fullSrc = item.href && item.href !== '#' ? item.href : item.img;
          return (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-200 shadow-sm cursor-pointer group bg-slate-100"
              onClick={() => onImageClick(fullSrc)}
            >
              <Image
                src={item.img}
                alt={`${altPrefix} ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <ZoomIn className="text-white h-6 w-6" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
