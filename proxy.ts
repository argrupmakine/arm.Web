import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { resolveCanonicalSlug } from './config/routes';

const locales = ['tr', 'en', 'fr', 'de'];
const defaultLocale = 'tr';

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // 1. Permanent (301) redirect from www to non-www for Google Search Console canonicalization
  if (host.startsWith('www.')) {
    const nonWwwHost = host.replace(/^www\./, '');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const redirectUrl = new URL(request.url);
    redirectUrl.host = nonWwwHost;
    redirectUrl.protocol = protocol;
    return NextResponse.redirect(redirectUrl, { status: 301 });
  }

  const { pathname } = request.nextUrl;

  // Never intercept internal Next.js endpoints, 404 handler, API, or static files
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/_not-found') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // 1. Check if the pathname has a locale prefix
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale) {
    // Redirect to default locale prefix if no locale prefix is found
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }

  // 2. Localized Route Rewriting
  const segments = pathname.split('/').filter(Boolean);
  const locale = segments[0];
  const category = segments[1];
  const slug = segments[2];

  if (category) {
    const { canonicalCategory, canonicalSlug } = resolveCanonicalSlug(category, slug || '');

    // Check if rewrite is needed (e.g., from 'lignes-de-production' to 'uretim-hatlari')
    const needsCategoryRewrite = canonicalCategory !== category;
    const needsSlugRewrite = slug && canonicalSlug !== slug;

    if (needsCategoryRewrite || needsSlugRewrite) {
      const internalPath = slug
        ? `/${locale}/${canonicalCategory}/${canonicalSlug}`
        : `/${locale}/${canonicalCategory}`;

      const rewriteUrl = request.nextUrl.clone();
      rewriteUrl.pathname = internalPath;
      return NextResponse.rewrite(rewriteUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all request paths except internal Next.js assets, not-found, APIs, and static files
  matcher: [
    '/((?!api|_next|_not-found|favicon.ico|sitemap.xml|robots.txt|.*\\..*).*)',
  ],
};
