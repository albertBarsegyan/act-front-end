import { ImageLoader } from '@/components/image-loader';
import styles from '@/modules/store/components/checkout/styles.module.css';
import { ProductType } from '@/modules/store/types';
import { calculateTotalItemPrice } from '@/utils/price';

interface ProductItemProps {
  product: ProductType;
  count: number;
}

export function ProductItem({ product, count }: Readonly<ProductItemProps>) {
  return (
    <div className={styles.cartItem}>
      <ImageLoader src={product.image as string} alt={product.name} className={styles.productImage} />
      <div className={styles.productDetails}>
        <p>
          {count}x {product.name}
        </p>

        <div className={styles.rightSide}>
          <div className={styles.quantityControl}>
            <button>-</button>
            <span>{count}</span>
            <button>+</button>

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
