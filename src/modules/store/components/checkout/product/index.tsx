import { ImageLoader } from '@/components/image-loader';
import { ProductType } from '@/modules/store/types';
import { calculateTotalItemPrice } from '@/utils/price';

import styles from './styles.module.css';

interface ProductItemProps {
  product: ProductType;
  count: number;
  addToBasket: (product: ProductType) => void;
  removeFromBasket: (product: ProductType) => void;
}

export function CheckoutProduct({ product, count, addToBasket, removeFromBasket }: Readonly<ProductItemProps>) {
  return (
    <div className={styles.cartItem}>
      <ImageLoader src={product.image as string} alt={product.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <p>
          {count}x {product.name}
        </p>

        <div className={styles.rightSide}>
          <div className={styles.quantityControl}>
            <button onClick={() => removeFromBasket(product)}>-</button>
            <span>{count}</span>
            <button onClick={() => addToBasket(product)}>+</button>

            <p>${product.price}</p>
          </div>
          <div className={styles.priceWrapper}>
            <p className={styles.productTotal}>${calculateTotalItemPrice({ product, count })}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
