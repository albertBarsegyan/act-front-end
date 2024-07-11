import '../styles/globals.css';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import { Intro } from '@/components/intro/intro';
import { Navbar } from '@/components/navbar/navbar';

const courierPrime = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

gsap.registerPlugin(useGSAP);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/img/favicon/site.webmanifest" />
        <link rel="mask-icon" href="/static/img/favicon/safari-pinned-tab.svg" color="#8b50ff" />
        <link rel="shortcut icon" href="/static/img/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/static/img/favicon/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <title>{String(metadata.title)}</title>
      </head>
      <body className={courierPrime.className}>
        <Intro />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
