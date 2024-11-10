import '../../styles/globals.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import ErrorBoundary from '@/components/error-boundary';
import { PageLayout } from '@/components/layout/page';
import ModalProvider from '@/context/modal/Modal.context';
import { StoreProvider } from '@/modules/store/context/basket';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/static/favicon/favicon-48x48.png" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/static/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/static/favicon/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="ACT" />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />

        <title>{String(metadata.title)}</title>
      </head>

      <body className={rubik.className}>
        <ErrorBoundary>
          <NextIntlClientProvider locale={'us'} messages={messages}>
            <ModalProvider>
              <StoreProvider>
                <PageLayout>{children}</PageLayout>
              </StoreProvider>
            </ModalProvider>
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
