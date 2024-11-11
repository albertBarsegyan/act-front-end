'use client';

import { useState } from 'react';

import Checkbox from '@/components/common/checkbox';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { CardSummary } from '@/modules/store/components/checkout/card';
import { useStore } from '@/modules/store/context/basket';
import { ProductType } from '@/modules/store/types';
import { calculateBasketTotalPrice } from '@/utils/price';

import { CheckoutPickupForm } from '../pickup-form';
import { CheckoutProduct } from '../product';
import { CheckoutShippingForm } from '../shipping-form';
import styles from './styles.module.css';

const paymentMethodVariants = {
  NOT_SELECTED: null,
  SHIPPING: 'shipping',
  PICKUP: 'pickup',
};

export const CheckoutContainer = () => {
  const [paymentMethod] = useState<string | null>(paymentMethodVariants.NOT_SELECTED);
  const { basket, addToBasket, removeFromBasket } = useStore();

  const productTotalPrice = calculateBasketTotalPrice(basket);

  const onCheckoutClick = () => {};

  const onAddProduct = (product: ProductType) => addToBasket(product);

  const onRemoveProduct = (product: ProductType) => removeFromBasket(product);

  return (
    <SectionLayout className={styles.sectionStyles}>
      <section className={styles.checkoutContainer}>
        <div className={styles.cardAndPaymentWrapper}>
          <div className={styles.cartSection}>
            <h2>Your Cart</h2>

            <hr className={styles.line} />

            <div>
              {basket.map(({ product, count }) => {
                return (
                  <div style={{ margin: '20px 0' }} key={product.id}>
                    <CheckoutProduct
                      removeFromBasket={onRemoveProduct}
                      addToBasket={onAddProduct}
                      product={product}
                      count={count}
                    />
                  </div>
                );
              })}
            </div>

            <div className={styles.subtotal}>
              <p>Subtotal</p>
              <p>${productTotalPrice}</p>
            </div>
          </div>

          <CardSummary
            productPrice={productTotalPrice}
            onCheckout={onCheckoutClick}
            isCheckoutDisabled={paymentMethod === paymentMethodVariants.NOT_SELECTED}
          />
        </div>

        <section className={styles.pickupSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Pick Up</h3>
            <Checkbox checked={paymentMethod === paymentMethodVariants.SHIPPING} onChange={() => {}} />
          </div>
          <hr className={styles.line} />
          <CheckoutPickupForm isDisabled={paymentMethod !== paymentMethodVariants.PICKUP} />
        </section>

        <section className={styles.shippingSection}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>Shipping</h3>
            <Checkbox checked={paymentMethod === paymentMethodVariants.SHIPPING} onChange={() => {}} />
          </div>

          <hr className={styles.line} />
          <CheckoutShippingForm isDisabled={paymentMethod !== paymentMethodVariants.SHIPPING} />
        </section>
      </section>
    </SectionLayout>
  );
};
