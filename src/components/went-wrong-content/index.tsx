import styles from './styles.module.css';

export function WentWrongContent({ message }: Readonly<{ message?: string }>) {
  const errorMessage = message ?? 'Please try again later.';

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.header}>Something Went Wrong</h1>
      <p className={styles.message}>{errorMessage}</p>
    </div>
  );
}
