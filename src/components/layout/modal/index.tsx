'use client';
import classNames from 'classnames';
import React, { ForwardedRef, forwardRef, useState } from 'react';

import { useOutsideClick } from '@/hooks/use-outside-click';

import styles from './styles.module.css';

interface ModalLayoutProps {
  children: React.ReactNode;
  variant?: 'modal' | 'drawer';
  closeDrawer?: () => void;
}

export const ModalLayout = forwardRef(
  ({ children, variant, closeDrawer }: Readonly<ModalLayoutProps>, ref: ForwardedRef<HTMLDivElement>) => {
    const [isVisible, setIsVisible] = useState(true);

    const hideDrawer = () => {
      setIsVisible(false);
    };

    const onAnimationEnd = () => {
      if (!isVisible) closeDrawer?.();
    };

    const isDrawer = variant === 'drawer';

    const drawerContentRef = useOutsideClick(hideDrawer);

    return (
      <div className={styles.modalLayoutWrapper} ref={ref}>
        <div
          ref={isDrawer ? drawerContentRef : null}
          onAnimationEnd={onAnimationEnd}
          className={classNames({
            [styles.drawerModal]: isDrawer,
            [styles.contentWrapper]: variant === 'modal',
            [styles.modalEnterActive]: isVisible,
            [styles.modalExitActive]: !isVisible,
          })}
        >
          {children}
        </div>
      </div>
    );
  }
);

ModalLayout.displayName = 'ModalLayout';
