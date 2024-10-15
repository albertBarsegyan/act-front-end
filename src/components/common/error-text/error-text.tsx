import classNames from 'classnames';

import styles from './styles.module.css';

export function ErrorText({
  errorMessage,
  variant = 'fill',
}: Readonly<{
  errorMessage?: string;
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
      {errorMessage}
    </p>
  );
}
