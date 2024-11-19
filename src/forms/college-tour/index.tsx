'use client';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';


import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Controller, useForm } from 'react-hook-form';
import TimePicker from "react-time-picker";

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { FormResponseContent } from '@/components/common/form-response-content';
import { Input, InputFieldVariant } from '@/components/common/Input';
import { CloseIcon } from '@/components/icons/close-icon';
import { useModal } from '@/context/modal/Modal.context';
import { CollegeTourFormValues, collegeTourSchema } from '@/forms/college-tour/schema';
import { admissionsService } from '@/services/form-submissions';

import styles from './styles.module.css';

const formDefaultValues = {
  first_name: '',
  last_name: '',
  phone_number: '',
  tour_date: '',
  tour_time: '',
};

export function CollegeTourForm() {
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
    let date = data.tour_date + "T"
    if (data.tour_time) {
      date += data.tour_time.toString().split('T')[1];
    }


    const res = await admissionsService.collegeTour({
      first_name: data.first_name,
      last_name: data.last_name,
      phone_number: data.phone_number,
      tour_date: date,
    });

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

  const closeModal = () => provideModalSettings({ isShowing: false });

  return (
    <div>
      <PrimaryButton onClick={closeModal} className={styles.closeButton} variant={ButtonVariant.TextPrimary}>
        <CloseIcon />
      </PrimaryButton>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className={styles.formHeader}>{t('college-tour-form-header')}</p>
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
                  format="y-MM-dd"
                  {...field}
                  onChange={(date) => field.onChange(date ? date.toISOString().split('T')[0] : '')}
                />
              )}
            />
            {errors.tour_date && <p className={styles.error}>{errors.tour_date.message}</p>}
          </div>
          <div className={styles.inputWrapper}>

            <Controller
              name="tour_time"
              control={control}
              render={({ field }) => (
                <DateTimePicker
                  className={styles.dateTimePicker}
                  disableClock
                  calendarIcon={false}
                  format="HH:mm"
                  {...field}
                  onChange={(date) => field.onChange(date ? date.toISOString() : '')}
                />
              )}
            />
            {errors.tour_time && <p className={styles.error}>{errors.tour_time.message}</p>}

          </div>

          <div className={styles.submitWrapper}>
            <PrimaryButton className={styles.submitButton} variant={ButtonVariant.Regular} type="submit">
              {isLoading ? 'Loading' : t('apply-button-text')}
            </PrimaryButton>
          </div>
        </div>
      </form>
    </div>
  );
}
