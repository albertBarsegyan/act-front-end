import { PropsWithChildren } from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';

export function PageLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div style={{ position: 'relative' }}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
