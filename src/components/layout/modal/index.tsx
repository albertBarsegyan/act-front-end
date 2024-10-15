'use client';
import React, { ForwardedRef, forwardRef, PropsWithChildren } from 'react';

import styles from './styles.module.css';

export const ModalLayout = forwardRef(
  ({ children }: Readonly<PropsWithChildren>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles.modalLayoutWrapper} ref={ref}>
        <div className={styles.contentWrapper}>{children}</div>
      </div>
    );
  }
);

ModalLayout.displayName = 'ModalLayout';
