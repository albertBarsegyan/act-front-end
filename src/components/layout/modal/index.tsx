'use client';
import classNames from 'classnames';
import React, { ForwardedRef, forwardRef } from 'react';

import styles from './styles.module.css';

interface ModalLayoutProps {
  children: React.ReactNode;
  variant?: 'modal' | 'drawer';
}

export const ModalLayout = forwardRef(
  ({ children, variant }: Readonly<ModalLayoutProps>, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles.modalLayoutWrapper} ref={ref}>
        <div
          className={classNames({
            [styles.contentWrapper]: variant === 'modal',
            [styles.drawerModal]: variant === 'drawer',
          })}
        >
          {children}
        </div>
      </div>
    );
  }
);

ModalLayout.displayName = 'ModalLayout';
