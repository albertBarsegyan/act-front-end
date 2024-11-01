import { PlusIcon } from '@/components/header-text/plus-icon';
import { ImageLoader } from '@/components/image-loader';
import { ProductType } from '@/modules/store/types';

import styles from './styles.module.css';

interface ProductProps {
  onClick: (product: ProductType) => void;
  data: ProductType;
  productBasketCount: number;
}

export function Product({ data, onClick, productBasketCount }: Readonly<ProductProps>) {
  const { name, price, image, quantity = 0 } = data ?? {};

  const imageSource = image ?? '/static/img/common/empty-image.jpg';

  const isAddButtonDisabled = productBasketCount >= quantity;

  return (
    <div className={styles.productContainer}>
      <ImageLoader src={imageSource} alt={name} className={styles.productImage} />
      <div className={styles.productTextContent}>
        <p className={styles.productName}>{name}</p>
        <p className={styles.line}></p>
        <p className={styles.productPrice}>${price}</p>
      </div>
      <div className={styles.quantityWrapper}>
        <p className={styles.productName}>Quantity</p>
        <p className={styles.line}></p>
        <p className={styles.productPrice}>{quantity} items</p>
      </div>

      <button className={styles.buyButton} onClick={() => onClick(data)} disabled={isAddButtonDisabled}>
        <div className={styles.align}>
          <PlusIcon />
        </div>
      </button>
    </div>
  );
}
