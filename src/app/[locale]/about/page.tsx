import { SectionLayout } from '@/components/layout/section/section-layout';
import { DirectorSection } from '@/components/page-parts/about/director-section';
import { HonoraryBoard } from '@/components/page-parts/about/honorary-board';
import { IntroSection } from '@/components/page-parts/about/intro-section';

import styles from './styles.module.css';

export default function AboutPage() {
  return (
    <SectionLayout className={styles.sectionWrapper}>
      <HonoraryBoard />
      <DirectorSection />
      <IntroSection />
    </SectionLayout>
  );
}
