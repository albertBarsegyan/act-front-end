'use client';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { FormResponseContent } from '@/components/common/form-response-content';
import { Input, InputFieldVariant } from '@/components/common/Input';
import { CloseIcon } from '@/components/icons/close-icon';
import { useModal } from '@/context/modal/Modal.context';
import { AdmissionFormValues, admissionSchema } from '@/forms/admission/schema';
import { admissionFormValuesNormaliser } from '@/forms/admission/utils';
import { admissionsService } from '@/services/form-submissions';
import { ApplicantReservation } from '@/types/services';

import styles from './styles.module.css';

const formDefaultValues: AdmissionFormValues = {
  first_name: '',
  last_name: '',
  phone_number: '',
  email: '',
};

export function AdmissionForm() {
  const t = useTranslations('home');
  const { provideModalSettings } = useModal();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isLoading },
    reset,
  } = useForm<AdmissionFormValues>({
    resolver: zodResolver(admissionSchema),
    mode: 'onChange',
    defaultValues: formDefaultValues,
  });

  const tryAgainAction = () => provideModalSettings({ isShowing: true, content: <AdmissionForm />, variant: 'drawer' });

  const onSubmit = async (data: ApplicantReservation) => {
    const res = await admissionsService.applicantAdmission(admissionFormValuesNormaliser(data));

    const isSuccess = !res?.error;

    const description = t(isSuccess ? 'reservation-form-success-description' : 'reservation-form-error-description');

    provideModalSettings({
      content: <FormResponseContent onTryAgain={tryAgainAction} isSuccess={isSuccess} description={description} />,
      isShowing: true,
    });

    if (isSuccess) reset(formDefaultValues);
  };

  const closeModal = () => provideModalSettings({ isShowing: false });

  return (
    <div>
      <PrimaryButton onClick={closeModal} className={styles.closeButton} variant={ButtonVariant.TextPrimary}>
        <CloseIcon />
      </PrimaryButton>
      <form className={styles.formWrapper} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <p className={styles.formHeader}>{t('admission-form-header')}</p>
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
            <input className={styles.input} placeholder="Email" {...register('email')} />
            {errors.email && <p className={styles.error}>{errors.email.message}</p>}
          </div>

          <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder="Facebook URL" {...register('facebook_url')} />
            {errors.facebook_url && <p className={styles.error}>{errors.facebook_url.message}</p>}
          </div>

          <div className={styles.inputWrapper}>
            <input className={styles.input} placeholder="Instagram URL" {...register('instagram_url')} />
            {errors.instagram_url && <p className={styles.error}>{errors.instagram_url.message}</p>}
          </div>
        </div>

        <div className={styles.submitWrapper}>
          <PrimaryButton className={styles.submitButton} variant={ButtonVariant.Regular} type="submit">
            {isLoading ? 'Loading' : t('apply-button-text')}
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
