import { PlusIcon } from '@/components/header-text/plus-icon';
import { ImageLoader } from '@/components/image-loader';
import { ProductType } from '@/modules/store/types';

import styles from './styles.module.css';

interface ProductProps {
  onClick: (product: ProductType) => void;
  data: ProductType;
}

export function Product({ data, onClick }: Readonly<ProductProps>) {
  return (
    <div className={styles.productContainer}>
      <ImageLoader src={data.image} alt={data.name} className={styles.productImage} />
      <div className={styles.productTextContent}>
        <h2 className={styles.productName}>{data.name}</h2>
        <div className={styles.line}></div>
        <p className={styles.productPrice}>${data.price.toFixed(2)}</p>
      </div>

      <button className={styles.buyButton} onClick={() => onClick(data)}>
        <div className={styles.align}>
          <PlusIcon />
        </div>
      </button>
    </div>
  );
}
