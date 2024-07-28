import classNames from 'classnames';
import React from 'react';

import styles from './styles.module.css';

interface LinkButtonProps {
  readonly children: React.ReactNode;
  readonly isActive: boolean;
  readonly className?: string;
  readonly onClick?: () => void;
}

export function LinkButton({ children, onClick, isActive, className }: LinkButtonProps) {
  const buttonStyles = classNames({
    [styles.linkButton]: true,
    [styles.linkButtonActive]: isActive,
    [className ?? '']: true,
  });

  return (
    <button type="button" onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
