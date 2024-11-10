import classNames from 'classnames';
import { FieldError } from 'react-hook-form';

import styles from './styles.module.css';

export function ErrorText({
  errorMessage,
  variant = 'fill',
}: Readonly<{
  errorMessage?: FieldError | string;
  variant?: 'text' | 'fill';
}>) {
  if (!errorMessage) {
    return null;
  }

  return (
    <p
      className={classNames({
        [styles.errorText]: variant === 'text',
        [styles.error]: variant === 'fill',
      })}
    >
      {String(errorMessage)}
    </p>
  );
}
