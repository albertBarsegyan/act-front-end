'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ErrorText } from '@/components/common/error-text/error-text';
import { ShippingFormData, shippingSchema } from '@/modules/store/components/checkout-shipping-form/schema';

import styles from './styles.module.css';

export const CheckoutShippingForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ShippingFormData>({
    mode: 'onChange',
    resolver: zodResolver(shippingSchema),
  });

  const onSubmit = (data: ShippingFormData) => {
    console.log(data);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <label htmlFor="firstName" className={styles.inputLabel}>
            First Name *
          </label>
          <input type="text" placeholder="First Name" className={styles.inputField} {...register('firstName')} />
          {errors.firstName && <ErrorText variant="text" errorMessage={errors.firstName.message} />}
        </div>

        <div className={styles.inputWrapper}>
          <label htmlFor="lastName" className={styles.inputLabel}>
            Last Name *
          </label>
          <input type="text" placeholder="Last Name" className={styles.inputField} {...register('lastName')} />
          {errors.lastName && <ErrorText variant="text" errorMessage={errors.lastName.message} />}
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="Address" className={styles.inputLabel}>
          Address
        </label>
        <input type="text" placeholder="Address" className={styles.inputField} {...register('address')} />
        {errors.address && <ErrorText variant="text" errorMessage={errors.address.message} />}
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="City" className={styles.inputLabel}>
          Town / City *
        </label>
        <input type="text" placeholder="Town / City" className={styles.inputField} {...register('city')} />
        {errors.city && <ErrorText variant="text" errorMessage={errors.city.message} />}
      </div>

      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <label htmlFor="Phone" className={styles.inputLabel}>
            Phone
          </label>
          <input type="text" placeholder="Phone (Optional)" className={styles.inputField} {...register('phone')} />
          {errors.phone && <ErrorText variant="text" errorMessage={errors.phone.message} />}
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor="email" className={styles.inputLabel}>
            Email Address *
          </label>
          <input type="email" placeholder="Email Address" className={styles.inputField} {...register('email')} />
          {errors.email && <ErrorText variant="text" errorMessage={errors.email.message} />}
        </div>
      </div>

      <div className={styles.inputWrapper}>
        <label htmlFor="notes" className={styles.inputLabel}>
          Order Notes
        </label>
        <textarea placeholder="Order notes (Optional)" className={styles.inputField} {...register('notes')}></textarea>
      </div>

      <PrimaryButton
        style={{ width: 'fit-content', margin: '0 auto', background: 'black', color: 'white', marginTop: '16px' }}
        variant={ButtonVariant.Regular}
        type="submit"
      >
        Submit
      </PrimaryButton>
    </form>
  );
};
