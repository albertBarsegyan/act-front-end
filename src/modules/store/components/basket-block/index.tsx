import { BasketIcon } from '@/components/icons/store/basket';

import styles from './styles.module.css';

export function BasketBlock({ itemsCount }: Readonly<{ itemsCount: number }>) {
  return (
    <div className={styles.basketBlockWrapper}>
      {Boolean(itemsCount) && <div className={styles.basketCounter}>{itemsCount}</div>}
      <BasketIcon />
    </div>
  );
}
