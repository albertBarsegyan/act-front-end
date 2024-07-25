import { AboutUsSection } from '@/components/page-parts/main/about-us';
import { GraduationSection } from '@/components/page-parts/main/graduation-section';
import { HeroSection } from '@/components/page-parts/main/hero-section';
import { ReservationSection } from '@/components/page-parts/main/reservation-section';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <GraduationSection />
      <ReservationSection />
      <AboutUsSection />
    </div>
  );
}
