import { PropsWithChildren } from 'react';

import styles from './styles.module.css';

export function SectionLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.fullWidth}>{children}</div>
    </div>
  );
}
