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
  };

  return {
    messages,
  };
});
