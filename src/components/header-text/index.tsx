import classNames from 'classnames';
import { PropsWithChildren } from 'react';

import styles from './styles.module.css';

interface HeaderTextProps extends PropsWithChildren {
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export function HeaderText({ className, children, color, style }: Readonly<HeaderTextProps>) {
  return (
    <p className={classNames(styles.header, className)} style={{ color, ...style }}>
      {children}
    </p>
  );
}
