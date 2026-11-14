import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ProductionSection from '@/components/home/ProductionSection';
import SectorsSection from '@/components/home/SectorsSection';
import PartnersMarquee from '@/components/home/PartnersMarquee';
import LatestNewsSection from '@/components/home/LatestNewsSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen -mt-24">
      <HeroSection />
      <AboutSection />
      <ProductionSection />
      <SectorsSection />
      <PartnersMarquee />
      <LatestNewsSection />
    </div>
  );
}
