import React from 'react';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { useOutsideClick } from '@/hooks/use-outside-click';
import { useStore } from '@/modules/store/context/basket';

import styles from './styles.module.css';

export function BasketContent({ onClose }: Readonly<{ onClose: () => void }>) {
  const { basket, addToBasket, removeFromBasket } = useStore();

  const ref = useOutsideClick(onClose);

  if (basket.length === 0) {
    return (
      <div className={styles.contentWrapper} ref={ref}>
        <div className={styles.emptyBasket}>
          <h2>Your basket is empty</h2>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.contentWrapper} ref={ref}>
      {basket?.map(({ product, count }) => (
        <div key={product.id} className={styles.basketItem}>
          <img width={300} height={300} src={product.image} alt={product.name} className={styles.productImage} />
          <div className={styles.productDetails}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>

            <div className={styles.countWrapper}>
              <PrimaryButton
                onClick={() => removeFromBasket(product)}
                variant={ButtonVariant.RegularOutline}
                className={styles.actionButton}
              >
                -
              </PrimaryButton>
              <p>Quantity: {count}</p>
              <PrimaryButton
                onClick={() => addToBasket(product)}
                variant={ButtonVariant.RegularOutline}
                className={styles.actionButton}
              >
                +
              </PrimaryButton>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
