'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { siteConfig } from '@/config/site';

interface GoogleAnalyticsProps {
  gaId?: string;
}

export default function GoogleAnalytics({ gaId: propGaId }: GoogleAnalyticsProps) {
  const pathname = usePathname();
  const gaId = propGaId || process.env.NEXT_PUBLIC_GA_ID || siteConfig.analytics?.gaId;

  // Track pageviews on client-side route navigation
  useEffect(() => {
    if (!gaId || typeof window === 'undefined') return;

    interface WindowWithGtag extends Window {
      gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    }

    const win = window as WindowWithGtag;
    if (win.gtag) {
      win.gtag('config', gaId, {
        page_path: pathname,
      });
    }
  }, [pathname, gaId]);

  // Don't render scripts if no Measurement ID is set
  if (!gaId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
