'use client';

import classNames from 'classnames';
import { PropsWithChildren, useEffect, useState } from 'react';

import styles from './styles.module.css';

export function PageLoader({ children }: Readonly<PropsWithChildren>) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      className={classNames(styles.pageLayout, {
        [styles.loaded]: loaded,
      })}
    >
      {children}
    </div>
  );
}
