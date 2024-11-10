import React from 'react';

import { ActCoin } from '@/components/icons/bank-cards/act-coin';
import { MasterCard } from '@/components/icons/bank-cards/master-card';
import { Visa } from '@/components/icons/bank-cards/visa';

import styles from './styles.module.css';

interface CardSummaryProps {
  productPrice: number;
  isCheckoutDisabled?: boolean;
  onCheckout?: () => void;
}

export const CardSummary = ({ productPrice, isCheckoutDisabled, onCheckout }: CardSummaryProps) => {
  return (
    <div className={styles.paymentSummary}>
      <div className={styles.row}>
        <span className={styles.priceHeader}>Subtotal</span>
        <span>${productPrice}</span>
      </div>
      <div className={styles.row}>
        <span className={styles.priceHeader}>Discount</span>
        <span>$0.0</span>
      </div>
      <div className={styles.row}>
        <span className={styles.priceHeader}>Shipping Costs</span>
        <span>$0.00</span>
      </div>
      <button disabled={isCheckoutDisabled} onClick={onCheckout} className={styles.checkoutButton}>
        Checkout | ${productPrice}
      </button>
      <div className={styles.securePayments}>
        <span>SECURE PAYMENTS PROVIDED BY</span>
        <div className={styles.paymentIcons}>
          <MasterCard />
          <Visa />
          <ActCoin />
        </div>
      </div>
    </div>
  );
};
