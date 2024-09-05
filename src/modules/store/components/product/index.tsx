import { BasketIcon } from '@/components/icons/store/basket';
import { ProductType } from '@/modules/store/types';

import styles from './styles.module.css';

interface ProductProps {
  onClick: (product: ProductType) => void;
  data: ProductType;
}

export function Product({ data, onClick }: Readonly<ProductProps>) {
  return (
    <div className={styles.productContainer}>
      <img src={data.image} alt={data.name} className={styles.productImage} />
      <h2 className={styles.productName}>{data.name}</h2>
      <p className={styles.productPrice}>${data.price.toFixed(2)}</p>
      <p className={styles.productDescription}>{data.description}</p>
      <button className={styles.buyButton} onClick={() => onClick(data)}>
        <div className={styles.align}>
          To basket <BasketIcon />
        </div>
      </button>
    </div>
  );
}
