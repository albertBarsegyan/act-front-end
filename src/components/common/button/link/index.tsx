import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface LinkButtonProps {
  readonly children: React.ReactNode;
  readonly isActive: boolean;
  readonly className?: string;
  readonly handleClick?: () => void;
}

export function LinkButton({ children, handleClick, isActive, className }: LinkButtonProps) {
  const buttonStyles = classNames({
    [styles.linkButton]: true,
    [styles.linkButtonActive]: isActive,
    [className ?? '']: true,
  });

  return (
    <button type="button" onClick={handleClick} className={buttonStyles}>
      {children}
    </button>
  );
}
