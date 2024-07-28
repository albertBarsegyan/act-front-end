import { PageLoader } from '@/components/page-loader';
import { BenefitsSection } from '@/components/page-parts/admission/benefits-section';
import { AdmissionHeroSection } from '@/components/page-parts/admission/hero-section';
import { AdmissionMembersSection } from '@/components/page-parts/admission/member-section';
import { StudyProgramSection } from '@/components/page-parts/admission/study-program-section';

export default function Page() {
  return (
    <PageLoader>
      <AdmissionHeroSection />
      <StudyProgramSection />
      <BenefitsSection />
      <AdmissionMembersSection />
    </PageLoader>
  );
}
