'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { isValidPhoneNumber } from 'libphonenumber-js';
import React from 'react';
import { useForm } from 'react-hook-form';
import PhoneInput from 'react-phone-number-input/input';
import z from 'zod';

import { ErrorText } from '@/components/common/error-text/error-text';
import { ContactDetails } from '@/components/footer';
import { CheckoutPickupFormData } from '@/modules/store/components/checkout/pickup-form/type';
import { normalisePickupFormData } from '@/modules/store/components/checkout/pickup-form/utils';
import { localStorageConstants } from '@/modules/store/constants/local-storage';
import { BasketItem } from '@/modules/store/context/basket/type';
import { storeService } from '@/modules/store/services';
import { localStorageUtils } from '@/utils/local-storage';

import styles from './styles.module.css';

const checkoutPickupSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is required')
    .regex(/^[A-Za-z]+$/, 'First Name must contain only letters'),
  lastName: z
    .string()
    .min(1, 'Last Name is required')
    .regex(/^[A-Za-z]+$/, 'Last Name must contain only letters'),
  phone: z.string().min(1, 'Phone number is required').refine(isValidPhoneNumber, {
    message: 'Phone number must be valid.',
  }),
});

interface CheckoutPickupFormProps {
  isDisabled: boolean;
  productPrice: number;
}

export const CheckoutPickupForm = ({ isDisabled, productPrice }: CheckoutPickupFormProps) => {
  const {
    register,
    formState: { errors },
    getValues,
    setValue,
    handleSubmit,
  } = useForm<CheckoutPickupFormData>({
    mode: 'onChange',
    resolver: zodResolver(checkoutPickupSchema),
  });

  const onSubmit = async (data: CheckoutPickupFormData) => {
    const products: BasketItem[] = localStorageUtils.getItem(localStorageConstants.BASKET) ?? [];

    const normalisedData = normalisePickupFormData(data, products);

    const res = await storeService.orderProducts(normalisedData);

    const paymentUrl = res?.data?.payment_url;

    if (paymentUrl) window.location.href = paymentUrl;
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
      </div>

      <ContactDetails className={styles.contactDetails} showWorkingHours isDark />

      <button disabled={isDisabled} type="submit" className={styles.checkoutButton}>
        Checkout | ${productPrice}
      </button>
    </form>
  );
};
