import { PropsWithChildren } from 'react';

import styles from './styles.module.css';

interface HeaderTextProps extends PropsWithChildren {
  color?: string;
}

export function HeaderText({ children, color }: Readonly<HeaderTextProps>) {
  return (
    <p className={styles.header} style={{ color }}>
      {children}
    </p>
  );
}
