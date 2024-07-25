import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  // if (!locales.includes(locale)) {
  //   return notFound();
  // }

  const messages = {
    ...(await import(`../messages/${locale}/common.json`)).default,
    ...(await import(`../messages/${locale}/home.json`)).default,
    ...(await import(`../messages/${locale}/privacy_policy.json`)).default,
  };

  return {
    messages,
  };
});
