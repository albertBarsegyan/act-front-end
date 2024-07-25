import createMiddleware from 'next-intl/middleware';

import { localePrefix, locales, pathnames } from '@/config';

const defaultLocale = 'en';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix,
  pathnames,
});

export const config = {
  matcher: ['/', '/(en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
};
