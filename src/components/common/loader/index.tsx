import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface LoaderProps {
  isLoading: boolean;
  children?: React.ReactNode;
  variant?: LoaderVariant;
}

export const enum LoaderVariant {
  Regular = 'Regular',
  FullScreen = 'FullScreen',
}

export function Loader({ children, isLoading, variant = LoaderVariant.Regular }: Readonly<LoaderProps>) {
  const wrapperStyles = classNames({
    [styles.wrapper]: variant === LoaderVariant.Regular,
    [styles.wrapperFullScreen]: variant === LoaderVariant.FullScreen,
  });

  return (
    <div className={styles.loaderWrapper}>
      {isLoading && (
        <div className={wrapperStyles}>
          <div className={styles.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}
