'use client';

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxProps {
  imageSrc: string | null;
  onClose: () => void;
  altText?: string;
}

export default function Lightbox({ imageSrc, onClose, altText = 'Büyütülmüş Görsel' }: LightboxProps) {
  return (
    <AnimatePresence>
      {imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Kapat"
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors cursor-pointer min-h-[44px] min-w-[44px] flex items-center justify-center z-50"
          >
            <X className="h-6 w-6" />
          </button>
          <div
            className="relative max-w-5xl w-full h-[75vh] md:h-[80vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt={altText}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
