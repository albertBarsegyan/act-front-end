import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './styles.module.css';

interface SectionLayoutProps extends PropsWithChildren {
  className?: string | null;
}

export function SectionLayout({ children, className }: Readonly<SectionLayoutProps>) {
  return (
    <div className={classNames(styles.wrapper, className ?? '')}>
      <div className={styles.fullWidth}>{children}</div>
    </div>
  );
}
