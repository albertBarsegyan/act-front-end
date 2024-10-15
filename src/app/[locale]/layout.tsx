import '../../styles/globals.css';

import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';

import ErrorBoundary from '@/components/error-boundary';
import { PageLayout } from '@/components/layout/page';
import ModalProvider from '@/context/modal/Modal.context';

const rubik = Rubik({ subsets: ['latin'], weight: ['400', '700'] });

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
        {/*<link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />*/}
        {/*<link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />*/}
        {/*<link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />*/}
        {/*<link rel="manifest" href="/img/favicon/site.webmanifest" />*/}
        {/*<link rel="mask-icon" href="/img/favicon/safari-pinned-tab.svg" color="#8b50ff" />*/}
        {/*<link rel="shortcut icon" href="/img/favicon/favicon.ico" />*/}
        {/*<meta name="msapplication-TileColor" content="#ffffff" />*/}
        {/*<meta name="msapplication-config" content="/static/img/favicon/browserconfig.xml" />*/}
        {/*<meta name="theme-color" content="#ffffff" />*/}

        <title>{String(metadata.title)}</title>
      </head>

      <body className={rubik.className}>
        <ErrorBoundary>
          <NextIntlClientProvider locale={'us'} messages={messages}>
            <ModalProvider>
              <PageLayout>{children}</PageLayout>
            </ModalProvider>
          </NextIntlClientProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
