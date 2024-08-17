import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

import { locales } from '@/config';

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    return notFound();
  }

  const messages = {
    ...(await import(`../messages/${locale}/common.json`)).default,
    ...(await import(`../messages/${locale}/home.json`)).default,
    ...(await import(`../messages/${locale}/admission.json`)).default,
    ...(await import(`../messages/${locale}/academic.json`)).default,
    ...(await import(`../messages/${locale}/privacy_policy.json`)).default,
    ...(await import(`../messages/${locale}/contact.json`)).default,
    ...(await import(`../messages/${locale}/about.json`)).default,
    ...(await import(`../messages/${locale}/student-portal.json`)).default,
  };

  return {
    messages,
  };
});
