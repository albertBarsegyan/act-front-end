'use client';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { Product } from '@/modules/store/components/product';
import { useStore } from '@/modules/store/context/basket';
import { ProductType } from '@/modules/store/types';

import styles from './styles.module.css';

export function StoreContent({ products = [] }: Readonly<{ products: ProductType[] | null }>) {
  const { addToBasket, basket } = useStore();

  const handleClick = (product: ProductType) => addToBasket(product);

  const getProductQuantityInBasket = (id: number) => {
    const { count = 0 } = basket.find(({ product = {} }) => product?.id === id) ?? {};
    return count;
  };

  return (
    <SectionLayout className={styles.contentWrapper}>
      <div className={styles.layout}>
        {products?.map((product) => (
          <Product
            key={product.id}
            onClick={handleClick}
            data={product}
            productBasketCount={getProductQuantityInBasket(product.id)}
          />
        ))}
      </div>
    </SectionLayout>
  );
}
