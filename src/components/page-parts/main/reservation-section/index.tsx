import { ReservationForm } from '@/forms/reservation';

import styles from './styles.module.css';

export function ReservationSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        <div className={styles.reservationForm}>
          <ReservationForm />
        </div>

        <div className={styles.gradientEffect} />
      </div>
    </div>
  );
}
