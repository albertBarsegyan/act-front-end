import { SectionLayout } from '@/components/layout/section/section-layout';
import { ReservationForm } from '@/forms/reservation';

import styles from './styles.module.css';

export function ReservationSection() {
  return (
    <div className={styles.wrapper}>
      <SectionLayout>
        <div className={styles.formWrapper}>
          <ReservationForm />
        </div>
      </SectionLayout>
      <div className={styles.gradientEffect} />/
    </div>
  );
}
