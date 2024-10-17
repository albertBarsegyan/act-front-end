'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
import DateTimePicker from 'react-datetime-picker';
import { Controller, useForm } from 'react-hook-form';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ErrorText } from '@/components/common/error-text/error-text';
import { FormResponseContent } from '@/components/common/form-response-content';
import { Input, InputFieldVariant } from '@/components/common/Input';
import { Loader } from '@/components/common/loader';
import { useModal } from '@/context/modal/Modal.context';
import { contactFormSchema } from '@/forms/contact/schema';
import { admissionsService } from '@/services/form-submissions';
import { ConsultationApplication } from '@/types/services';

import styles from './styles.module.css';

const formDefaultValues: ConsultationApplication = {
  first_name: '',
  last_name: '',
  phone_number: '',
  consultation_date: '',
};

export function ContactForm() {
  const t = useTranslations('contact');
  const commonTranslation = useTranslations('common');
  const { provideModalSettings } = useModal();

  const {
    control,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
  } = useForm<ConsultationApplication>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: formDefaultValues,
    mode: 'onChange',
  });

  const onSubmit = async (data: ConsultationApplication) => {
    const res = await admissionsService.consultation(data);

    const isSuccess = !res?.error;

    const description = commonTranslation(
      isSuccess ? 'contact-form-success-description' : 'contact-form-error-description'
    );

    provideModalSettings({
      content: <FormResponseContent isSuccess={isSuccess} description={description} />,
      isShowing: true,
    });

    if (isSuccess) {
      reset(formDefaultValues);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <p className={styles.formTitle}>{t('contact-form-title')}</p>

      <Controller
        name="first_name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            wrapperClassName={styles.inputWrapper}
            placeholder={String(t('contact-form-fields.name-placeholder'))}
            label={String(t('contact-form-fields.name-label'))}
            errorMessage={errors.first_name?.message}
            type="text"
          />
        )}
      />

      <Controller
        name="last_name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            wrapperClassName={styles.inputWrapper}
            placeholder={String(t('contact-form-fields.last-name-placeholder'))}
            label={String(t('contact-form-fields.last-name-label'))}
            errorMessage={errors.last_name?.message}
            type="text"
          />
        )}
      />

      <div className={styles.inputWrapper}>
        <Controller
          name="phone_number"
          control={control}
          render={({ field }) => (
            <Input
              wrapperClassName={styles.inputWrapper}
              variant={InputFieldVariant.PhoneNumber}
              className={styles.phoneInput}
              placeholder={String(t('contact-form-fields.phone-placeholder'))}
              label={String(t('contact-form-fields.phone-label'))}
              {...field}
            />
          )}
        />

        {errors.phone_number && <ErrorText variant="text" errorMessage={errors.phone_number.message} />}
      </div>

      <div className={styles.inputWrapper}>
        <p className={styles.label}>{t('contact-form-fields.date-label')}</p>

        <Controller
          name="consultation_date"
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
        {errors.consultation_date && <ErrorText variant="text" errorMessage={errors.consultation_date.message} />}
      </div>

      <PrimaryButton variant={ButtonVariant.RegularOutline} className={styles.submit} type="submit">
        {isLoading ? <Loader isLoading={true} /> : t('contact-form-fields.submit-button-text')}
      </PrimaryButton>
    </form>
  );
}
