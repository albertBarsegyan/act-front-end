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
  readonly handleClick?: () => void;
  readonly type?: 'button' | 'submit';
  readonly className?: string | null;
  readonly variant?: ButtonVariant;
  readonly active?: boolean;
  readonly style?: CSSProperties;
}

export function PrimaryButton({
  children,
  handleClick,
  className,
  active = true,
  variant = ButtonVariant.Regular,
  type = 'button',
  style,
}: PrimaryButtonProps) {
  const buttonStyles = classNames({
    [styles[`${variant}Button`]]: active,
    [styles[`${variant}ButtonDisabled`]]: !active,
    [className ?? '']: Boolean(className),
  });

  return (
    <button type={type} style={style} onClick={handleClick} className={buttonStyles}>
      {children}
    </button>
  );
}
