import classNames from 'classnames';
import { CSSProperties, PropsWithChildren } from 'react';

import styles from './styles.module.css';

export const enum ButtonVariant {
  Regular = 'regular',
  TextPrimary = 'textPrimary',
  TextSecondary = 'textSecondary',
  RegularOutline = 'regularOutline',
}

interface PrimaryButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string | null;
  variant?: ButtonVariant;
  active?: boolean;
  style?: CSSProperties;
}

export function PrimaryButton({
  children,
  onClick,
  className,
  active = true,
  variant = ButtonVariant.Regular,
  type = 'button',
  style,
}: Readonly<PrimaryButtonProps>) {
  const buttonStyles = classNames({
    [styles[`${variant}Button`]]: active,
    [styles[`${variant}ButtonDisabled`]]: !active,
    [className ?? '']: Boolean(className),
  });

  return (
    <button type={type} style={style} onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
