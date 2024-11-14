'use client';
import { PageLoader } from '@/components/page-loader';
import { AboutUsSection } from '@/components/page-parts/main/about-us';
import { GraduationSection } from '@/components/page-parts/main/graduation-section';
import { HeroSection } from '@/components/page-parts/main/hero-section';
import { ReservationSection } from '@/components/page-parts/main/reservation-section';
import { Partners } from '@/components/partners';
import { usePayment } from '@/hooks/usePayment';

export default function HomePage() {
  usePayment();

  return (
    <PageLoader>
      <HeroSection />
      <GraduationSection />
      <ReservationSection />
      <AboutUsSection />
      <Partners />
    </PageLoader>
  );
}
