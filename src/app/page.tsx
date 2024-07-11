import { AboutUsSection } from '@/components/about-us-section/about-us-section';
import { ContactUs } from '@/components/contact-us/contact-us';
import { HeroSection } from '@/components/hero-section/hero-section';
import { Path } from '@/constants/path-constants';
import { readStaticData } from '@/utils/file-utils';

export default async function Home() {
  const { heroSection } = await readStaticData(Path.GetStaticPath('home-page-content.json'));

  return (
    <div>
      <HeroSection data={heroSection} />
      <AboutUsSection />
      {/*<ReasonSection />*/}
      {/*<CompaniesSection />*/}
      <ContactUs />
    </div>
  );
}
