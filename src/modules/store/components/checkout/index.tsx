'use client';

import { SectionLayout } from '@/components/layout/section/section-layout';
import { ProductItem } from '@/modules/store/components/checkout/product-item';
import { CheckoutPickupForm } from '@/modules/store/components/checkout-pickup-form';
import { CheckoutShippingForm } from '@/modules/store/components/checkout-shipping-form';
import { useStore } from '@/modules/store/context/basket';
import { calculateBasketTotalPrice } from '@/utils/price';

import styles from './styles.module.css';

export const Checkout = () => {
  const { basket } = useStore();

  return (
    <SectionLayout className={styles.sectionStyles}>
      <div className={styles.checkoutContainer}>
        <section className={styles.cartSection}>
          <h2>Your Cart</h2>

          <hr className={styles.line} />

          <div>
            {basket.map(({ product, count }) => {
              return (
                <div style={{ margin: '20px 0' }} key={product.id}>
                  <ProductItem product={product} count={count} />
                </div>
              );
            })}
          </div>

          <div className={styles.subtotal}>
            <p>Subtotal</p>
            <p>${calculateBasketTotalPrice(basket)}</p>
          </div>
        </section>

        <section className={styles.pickupSection}>
          <h3>Pick Up</h3>
          <hr className={styles.line} />
          <CheckoutPickupForm />
        </section>

        <section className={styles.shippingSection}>
          <h3>Shipping</h3>
          <hr className={styles.line} />
          <CheckoutShippingForm />
        </section>
      </div>
    </SectionLayout>
  );
};
