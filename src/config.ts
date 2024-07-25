import { LocalePrefix, Pathnames } from 'next-intl/routing';

export const defaultLocale = 'en';
export const locales = [
  'en',
  // 'ru',
  // 'hy'
] as string[];

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/pathnames': {
    // hy: '/pathnames',
    // ru: '/pathnames',
    en: '/pathnames',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
