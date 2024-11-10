'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import z from 'zod';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ErrorText } from '@/components/common/error-text/error-text';
import { ContactDetails } from '@/components/footer';
import { CheckoutPickupFormFields } from '@/modules/store/components/checkout/pickup-form/type';

import styles from './styles.module.css';

const checkoutPickupSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  phone: z.string().optional(),
});

interface CheckoutPickupFormProps {
  isDisabled: boolean;
}

export const CheckoutPickupForm = ({ isDisabled }: CheckoutPickupFormProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<CheckoutPickupFormFields>({
    mode: 'onChange',
    resolver: zodResolver(checkoutPickupSchema),
  });

  const onSubmit = (data: CheckoutPickupFormFields) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputGroup}>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="First Name"
            disabled={isDisabled}
            className={styles.inputField}
            {...register('firstName')}
          />
          {errors.firstName && <ErrorText variant="text" errorMessage={errors.firstName.message} />}
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            disabled={isDisabled}
            placeholder="Last Name"
            className={styles.inputField}
            {...register('lastName')}
          />
          {errors.lastName && <ErrorText variant="text" errorMessage={errors.lastName.message} />}
        </div>

        <div className={styles.inputWrapper}>
          <input
            type="text"
            disabled={isDisabled}
            placeholder="Phone (Optional)"
            className={styles.inputField}
            {...register('phone')}
          />
          {errors.phone && <ErrorText variant="text" errorMessage={errors.phone.message} />}
        </div>
      </div>

      <ContactDetails className={styles.contactDetails} showWorkingHours isDark />

      <PrimaryButton className={styles.submitButton} variant={ButtonVariant.Regular} active={!isDisabled} type="submit">
        Submit
      </PrimaryButton>
    </form>
  );
};
