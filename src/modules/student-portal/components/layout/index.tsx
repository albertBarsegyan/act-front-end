import classNames from 'classnames';

import { StudentPortalLoginForm } from '@/modules/student-portal/components/form/login';
import { StudentPortalIntro } from '@/modules/student-portal/components/introduction';

import styles from './styles.module.css';

export function StudentPortalLayout() {
  return (
    <div className={styles.layoutWrapper}>
      <div className={classNames(styles.layoutPart, styles.formWrapper)}>
        <StudentPortalLoginForm />
      </div>
      <div className={styles.layoutPart}>
        <StudentPortalIntro />
      </div>
    </div>
  );
}
