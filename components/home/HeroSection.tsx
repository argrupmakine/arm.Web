'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { getLocalizedPath, categoryRoutes } from '@/config/routes';

export default function HeroSection() {
  const { t, language } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // React autoplay guarantee across Chrome, Safari, iOS, and Android
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const startPlay = () => {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => {
            // Autoplay was prevented by browser policy until interaction
            setIsPlaying(false);
          });
      }
    };

    startPlay();

    video.addEventListener('loadeddata', startPlay);
    return () => {
      video.removeEventListener('loadeddata', startPlay);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section className="relative min-h-[500px] sm:min-h-[550px] h-[92svh] sm:h-[100dvh] w-full bg-slate-950 overflow-hidden flex items-center justify-center">
      {/* Background Production Video - Mobile & Desktop Full Cover */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/Webkontrol/IcerikYonetimi/GaleriResim/BuyukResim/savunma-90_icerik_g150_1326x494_gRtXaqs9.png"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full min-h-full object-cover object-center opacity-85 md:opacity-70 transition-opacity duration-700 pointer-events-none"
        style={{
          width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      >
        <source src="/site/Library/images/video.mp4" type="video/mp4" />
      </video>

      {/* Modern Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-slate-900/40 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 space-y-4 sm:space-y-6 pt-12 sm:pt-0">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-blue-600/90 text-white text-[9px] sm:text-[10px] font-bold tracking-widest rounded-full uppercase shadow-lg shadow-blue-500/20"
        >
          {t('ui.sub_title')}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-5xl mx-auto uppercase drop-shadow-md"
        >
          AR GRUP <span className="text-blue-500">{t('home.machine_label')}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-200 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-medium drop-shadow line-clamp-3 sm:line-clamp-none px-2"
        >
          {t('ui.hero_desc')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="pt-2 sm:pt-4 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          <Link
            href={getLocalizedPath('kurumsal', 'hakkimizda', language)}
            className="px-6 py-3 sm:px-8 sm:py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-blue-500/30 cursor-pointer"
          >
            {t('nav.kurumsal')}
          </Link>
          <Link
            href={`/${language}/${categoryRoutes['iletisim']?.[language] || 'iletisim'}`}
            className="px-6 py-3 sm:px-8 sm:py-3.5 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md rounded-xl text-xs font-bold transition-all border border-white/20 cursor-pointer"
          >
            {t('ui.contact_us')}
          </Link>
        </motion.div>
      </div>

      {/* Video Play/Pause Control Button */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? 'Videoyu Duraklat' : 'Videoyu Oynat'}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-20 p-2 sm:p-2.5 rounded-full bg-slate-900/70 hover:bg-slate-900 text-white/80 hover:text-white backdrop-blur-md border border-white/10 transition-all cursor-pointer shadow-lg"
      >
        {isPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />}
      </button>
    </section>
  );
}
