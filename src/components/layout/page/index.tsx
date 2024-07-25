import { PropsWithChildren } from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export function PageLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
