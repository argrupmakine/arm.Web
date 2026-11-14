'use client';

import React, { useState, useSyncExternalStore } from 'react';

// Base64 encoded contact information to prevent scrapers, harvesting bots, and crawlers
const ENCODED_DATA: Record<string, string> = {
  email: 'aW5mb0BhcmdydXBtYWtpbmUuY29tLnRy', // info@argrupmakine.com.tr
  phone: 'KzkwIDMxMiAyNjcgNTEgMDAgKHBieCk=', // +90 312 267 51 00 (pbx)
  phoneRaw: 'KzkwMzEyMjY3NTEwMA==', // +903122675100
  phoneDept: 'KzkwIDMxMiAyNjcgNTEgMDAgKERobDogMTA0KQ==', // +90 312 267 51 00 (Dhl: 104)
  fax: 'KzkwIDMxMiAyNjcgNTEgMDU=', // +90 312 267 51 05
};

export type ProtectedContactType = 'email' | 'phone' | 'phoneRaw' | 'phoneDept' | 'fax';

interface ProtectedContactProps {
  type: ProtectedContactType;
  className?: string;
  asLink?: boolean;
  prefix?: string;
}

const emptySubscribe = () => () => {};

function getDecodedValue(type: ProtectedContactType): string {
  try {
    const encoded = ENCODED_DATA[type];
    return encoded ? atob(encoded) : '';
  } catch {
    return '';
  }
}

export default function ProtectedContact({
  type,
  className = '',
  asLink = true,
  prefix,
}: ProtectedContactProps) {
  // Official React 19 pattern to detect client hydration without cascading effect renders
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const [href, setHref] = useState<string>('#');

  // Activate mailto: or tel: dynamically on human interaction (hover, focus, touch)
  const handleActivate = () => {
    if (type === 'email') {
      const email = getDecodedValue('email');
      setHref(`mailto:${email}`);
    } else if (type === 'phone' || type === 'phoneRaw' || type === 'phoneDept') {
      const tel = getDecodedValue('phoneRaw');
      setHref(`tel:${tel}`);
    }
  };

  // Safe direct navigation on click
  const handleClick = (e: React.MouseEvent) => {
    if (!asLink) return;
    if (type === 'email') {
      e.preventDefault();
      window.location.href = `mailto:${getDecodedValue('email')}`;
    } else if (type === 'phone' || type === 'phoneRaw' || type === 'phoneDept') {
      e.preventDefault();
      window.location.href = `tel:${getDecodedValue('phoneRaw')}`;
    }
  };

  // SSR phase: rendered to bots/crawlers without raw plain text or mailto/tel attributes
  if (!isMounted) {
    return (
      <span className={`inline-block select-none opacity-40 ${className}`} aria-hidden="true">
        {type === 'email' ? '••••@••••••••••••••' : '•••• ••• •• ••'}
      </span>
    );
  }

  const decoded = getDecodedValue(type);

  if (!asLink || type === 'fax') {
    return (
      <span className={className}>
        {prefix}
        {decoded}
      </span>
    );
  }

  return (
    <a
      href={href}
      onMouseEnter={handleActivate}
      onTouchStart={handleActivate}
      onFocus={handleActivate}
      onClick={handleClick}
      className={className}
      rel="nofollow noopener"
      title={type === 'email' ? 'E-Posta Gönder' : 'Ara'}
    >
      {prefix}
      {decoded}
    </a>
  );
}
