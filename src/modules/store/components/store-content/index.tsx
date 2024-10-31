'use client';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { Product } from '@/modules/store/components/product';
import { useStore } from '@/modules/store/context/basket';
import { ProductType } from '@/modules/store/types';

import styles from './styles.module.css';

const products = [
  {
    id: '1',
    name: 'Product 1',
    price: 19.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 1',
  },
  {
    id: '2',
    name: 'Product 2',
    price: 29.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 2',
  },
  {
    id: '3',
    name: 'Product 3',
    price: 39.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 3',
  },
  {
    id: '4',
    name: 'Product 4',
    price: 49.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 4',
  },
  {
    id: '5',
    name: 'Product 5',
    price: 59.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 5',
  },
  {
    id: '6',
    name: 'Product 6',
    price: 69.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 6',
  },
  {
    id: '7',
    name: 'Product 7',
    price: 79.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 7',
  },
  {
    id: '8',
    name: 'Product 8',
    price: 89.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 8',
  },
  {
    id: '9',
    name: 'Product 9',
    price: 99.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 9',
  },
  {
    id: '10',
    name: 'Product 10',
    price: 109.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 10',
  },
  {
    id: '11',
    name: 'Product 11',
    price: 119.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 11',
  },
  {
    id: '12',
    name: 'Product 12',
    price: 129.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 12',
  },
  {
    id: '13',
    name: 'Product 13',
    price: 139.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 13',
  },
  {
    id: '14',
    name: 'Product 14',
    price: 149.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 14',
  },
  {
    id: '15',
    name: 'Product 15',
    price: 159.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 15',
  },
  {
    id: '16',
    name: 'Product 16',
    price: 169.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 16',
  },
  {
    id: '17',
    name: 'Product 17',
    price: 179.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 17',
  },
  {
    id: '18',
    name: 'Product 18',
    price: 189.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 18',
  },
  {
    id: '19',
    name: 'Product 19',
    price: 199.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 19',
  },
  {
    id: '20',
    name: 'Product 20',
    price: 209.99,
    image: '/static/img/common/product-example.jpg',
    description: 'Description for Product 20',
  },
];

export function StoreContent() {
  const { addToBasket, basket } = useStore();

  console.log('basket', basket);

  const handleClick = (product: ProductType) => addToBasket(product);

  return (
    <SectionLayout className={styles.contentWrapper}>
      <div className={styles.layout}>
        {products.map((product) => (
          <Product key={product.id} onClick={handleClick} data={product} />
        ))}
      </div>
    </SectionLayout>
  );
}
