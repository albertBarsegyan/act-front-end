'use client';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Controller, useForm } from 'react-hook-form';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { FormResponseContent } from '@/components/common/form-response-content';
import { Input, InputFieldVariant } from '@/components/common/Input';
import { useModal } from '@/context/modal/Modal.context';
import { CollegeTourFormValues, collegeTourSchema } from '@/forms/college-tour/schema';
import { admissionsService } from '@/services/form-submissions';

import styles from './styles.module.css';

const formDefaultValues = {
  first_name: '',
  last_name: '',
  phone_number: '',
  tour_date: '',
};

export function ReservationForm() {
  const t = useTranslations('home');
  const { provideModalSettings } = useModal();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading },
    reset,
  } = useForm<CollegeTourFormValues>({
    resolver: zodResolver(collegeTourSchema),
    mode: 'onChange',
    defaultValues: formDefaultValues,
  });

  const onSubmit = async (data: CollegeTourFormValues) => {
    const res = await admissionsService.collegeTour(data);

    const isSuccess = !res?.error;

    const description = t(isSuccess ? 'reservation-form-success-description' : 'reservation-form-error-description');

    provideModalSettings({
      content: <FormResponseContent isSuccess={isSuccess} description={description} />,
      isShowing: true,
    });

    if (isSuccess) {
      reset(formDefaultValues);
    }
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <p className={styles.formHeader}>{t('reservation-form-header')}</p>
        <div className={styles.inputWrapper}>
          <input placeholder="First Name" className={styles.input} type="text" {...register('first_name')} />
          {errors.first_name && <p className={styles.error}>{errors.first_name.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Last Name" {...register('last_name')} />
          {errors.last_name && <p className={styles.error}>{errors.last_name.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <Controller
            name="phone_number"
            control={control}
            render={({ field }) => (
              <Input
                variant={InputFieldVariant.PhoneNumber}
                className={styles.input}
                {...field}
                placeholder={'Phone number'}
              />
            )}
          />
          {errors.phone_number && <p className={styles.error}>{errors.phone_number.message}</p>}
        </div>

        <div className={styles.inputWrapper}>
          <Controller
            name="tour_date"
            control={control}
            render={({ field }) => (
              <DateTimePicker
                className={styles.dateTimePicker}
                disableClock
                {...field}
                onChange={(date) => field.onChange(date ? date.toISOString() : '')}
              />
            )}
          />
          {errors.tour_date && <p className={styles.error}>{errors.tour_date.message}</p>}
        </div>
      </div>

      <PrimaryButton style={{ marginTop: '16px' }} variant={ButtonVariant.Regular} type="submit">
        {isLoading ? 'Loading' : t('apply-button-text')}
      </PrimaryButton>
    </form>
  );
}