import { SectionLayout } from '@/components/layout/section/section-layout';
import { CheckoutPickupForm } from '@/modules/store/components/checkout-pickup-form';
import { CheckoutShippingForm } from '@/modules/store/components/checkout-shipping-form';

import styles from './styles.module.css';

export const Checkout = () => {
  return (
    <SectionLayout>
      <div className={styles.checkoutContainer}>
        <section className={styles.cartSection}>
          <h2>Your Cart</h2>
          <div className={styles.cartItem}>
            <img src="product-image-url" alt="Khalifa Kush (AAAA)" className={styles.productImage} />
            <div className={styles.productDetails}>
              <p>1x Khalifa Kush (AAAA)</p>
              <div className={styles.quantityControl}>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <p>$120.00</p>
            </div>
            <p className={styles.productTotal}>$240.00</p>
          </div>
          <div className={styles.subtotal}>
            <p>Subtotal</p>
            <p>$240.00</p>
          </div>
        </section>

        <section className={styles.summarySection}>
          <div className={styles.summaryDetails}>
            <p>Subtotal</p>
            <p>$240.00</p>
          </div>
          <div className={styles.summaryDetails}>
            <p>Discount</p>
            <p>$0.00</p>
          </div>
          <div className={styles.summaryDetails}>
            <p>Shipping Costs</p>
            <p>$0.00</p>
          </div>
          <button className={styles.checkoutButton}>Checkout | $240.00</button>
          <div className={styles.paymentMethods}>
            <p>Secure Payments Provided By</p>
            <img src="mastercard-logo-url" alt="Mastercard" />
            <img src="visa-logo-url" alt="Visa" />
            <img src="act-coin-logo-url" alt="ACT Coin" />
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
