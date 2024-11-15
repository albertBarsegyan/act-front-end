'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/input';

import { ErrorText } from '@/components/common/error-text/error-text';
import { ShippingFormData, shippingSchema } from '@/modules/store/components/checkout/shipping-form/schema';
import { normaliseOrderData } from '@/modules/store/components/checkout/shipping-form/utils';
import { localStorageConstants } from '@/modules/store/constants/local-storage';
import { BasketItem } from '@/modules/store/context/basket/type';
import { storeService } from '@/modules/store/services';
import { localStorageUtils } from '@/utils/local-storage';

import styles from './styles.module.css';

interface CheckoutShippingFormProps {
  isDisabled: boolean;
  productPrice: number;
}

export const CheckoutShippingForm = ({ isDisabled, productPrice }: CheckoutShippingFormProps) => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit,
  } = useForm<ShippingFormData>({
    mode: 'onChange',
    resolver: zodResolver(shippingSchema),
  });

  const onSubmit = async (data: ShippingFormData) => {
    const products: BasketItem[] = localStorageUtils.getItem(localStorageConstants.BASKET) ?? [];

    const normalisedData = normaliseOrderData(data, products);

    const res = await storeService.orderProducts(normalisedData);

    const paymentUrl = res?.data?.payment_url;

    if (paymentUrl) window.location.href = paymentUrl;
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <label htmlFor="firstName" className={styles.inputLabel}>
            First Name *
          </label>
          <input
            type="text"
            disabled={isDisabled}
            placeholder="First Name"
            className={styles.inputField}
            {...register('firstName')}
          />
          {errors.firstName && <ErrorText variant="text" errorMessage={errors.firstName.message} />}
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="lastName" className={styles.inputLabel}>
            Last Name *
          </label>
          <input
            type="text"
            placeholder="Last Name"
            disabled={isDisabled}
            className={styles.inputField}
            {...register('lastName')}
          />
          {errors.lastName && <ErrorText variant="text" errorMessage={errors.lastName.message} />}
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="Address" className={styles.inputLabel}>
          Address
        </label>
        <input
          type="text"
          disabled={isDisabled}
          placeholder="Address"
          className={styles.inputField}
          {...register('address')}
        />
        {errors.address && <ErrorText variant="text" errorMessage={errors.address.message} />}
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="City" className={styles.inputLabel}>
          Town / City *
        </label>
        <input
          type="text"
          placeholder="Town / City"
          disabled={isDisabled}
          className={styles.inputField}
          {...register('city')}
        />
        {errors.city && <ErrorText variant="text" errorMessage={errors.city.message} />}
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <label htmlFor="Phone" className={styles.inputLabel}>
            Phone
          </label>
          <PhoneInput
            className={styles.inputField}
            value={getValues('phone')}
            disabled={isDisabled}
            onChange={(value) =>
              setValue('phone', value ?? '', {
                shouldDirty: true,
                shouldValidate: true,
              })
            }
            placeholder={'Phone number'}
          />
          {errors.phone && <ErrorText variant="text" errorMessage={errors.phone.message} />}
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email" className={styles.inputLabel}>
            Email Address *
          </label>
          <input
            type="email"
            disabled={isDisabled}
            placeholder="Email Address"
            className={styles.inputField}
            {...register('email')}
          />
          {errors.email && <ErrorText variant="text" errorMessage={errors.email.message} />}
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="notes" className={styles.inputLabel}>
          Order Notes
        </label>
        <textarea
          disabled={isDisabled}
          placeholder="Order notes (Optional)"
          className={styles.inputField}
          {...register('notes')}
        ></textarea>
      </div>

      <button disabled={isDisabled} type="submit" className={styles.checkoutButton}>
        Checkout | ${productPrice}
      </button>
    </form>
  );
};
