import { PageLoader } from '@/components/page-loader';
import { AcademicBoardSection } from '@/components/page-parts/academic/board-section';
import { FacultySection } from '@/components/page-parts/academic/faculty-section';

import styles from './styles.module.css';

export default function AcademicPage() {
  return (
    <PageLoader>
      <div className={styles.pageWrapper}>
        <FacultySection />
        <AcademicBoardSection />
      </div>
    </PageLoader>
  );
}
