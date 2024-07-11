import classNames from 'classnames';
import { PropsWithChildren } from 'react';

interface ButtonProps extends PropsWithChildren {
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'filled' | 'icon';
  className?: string;
  disabled?: boolean;
}

export function Button({
  disabled = false,
  type = 'button',
  children,
  onClick,
  variant = 'primary',
  className,
}: ButtonProps) {
  const buttonStyles = classNames(className, {
    ['h-12 flex-center px-8 py-2 relative font-bold']: true,
    ['bg-violet-dark border border-blue-dark-1 active:left-3 active:top-2']: variant === 'primary',
    ['bg-white text-blue-dark-1 border border-blue-dark-1 active:left-3 active:top-2']: variant === 'secondary',
    ['bg-white text-secondary border border-blue-dark-1']: variant === 'filled',
    ['bg-transparent p-0']: variant === 'icon',
  });

  const buttonBackground = classNames({
    ['w-full h-12 absolute -z-10 left-3 top-2 border border-blue-dark-1']: true,
    ['bg-white']: variant === 'primary',
    ['bg-violet-dark']: variant === 'secondary',
  });

  return (
    <div className="relative">
      <button className={buttonStyles} onClick={onClick} type={type} disabled={disabled}>
        {children}
      </button>
      {variant !== 'icon' && <div className={buttonBackground} />}
    </div>
  );
}
