'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import React from 'react';
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
  name: '',
  email: '',
  phone_number: '',
  message: '',
};

export function ContactForm() {
  const t = useTranslations('contact');
  const commonTranslation = useTranslations('common');

  const { provideModalSettings } = useModal();

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors, isLoading },
    reset,
  } = useForm<ConsultationApplication>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: formDefaultValues,
    mode: 'onChange',
  });

  const onSubmit = async (data: ConsultationApplication) => {
    const { error } = await admissionsService.contact(data);

    const isSuccess = !error;

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
        name="name"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            wrapperClassName={styles.inputWrapper}
            placeholder={String(t('contact-form-fields.name-placeholder'))}
            label={String(t('contact-form-fields.name-label'))}
            errorMessage={errors.name?.message}
            type="text"
          />
        )}
      />

      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            {...field}
            wrapperClassName={styles.inputWrapper}
            placeholder={String(t('contact-form-fields.email-placeholder'))}
            label={String(t('contact-form-fields.email-label'))}
            errorMessage={errors.email?.message}
            type="text"
          />
        )}
      />

      <div className={styles.inputWrapper}>
        <Input
          wrapperClassName={styles.inputWrapper}
          variant={InputFieldVariant.PhoneNumber}
          className={styles.phoneInput}
          placeholder={String(t('contact-form-fields.phone-placeholder'))}
          label={String(t('contact-form-fields.phone-label'))}
          value={getValues('phone_number')}
          onChange={(value) =>
            setValue('phone_number', value ?? '', {
              shouldDirty: true,
              shouldValidate: true,
            })
          }
        />

        {errors.phone_number && <ErrorText variant="text" errorMessage={errors.phone_number.message} />}
      </div>

      <div className={styles.inputWrapper}>
        <p className={styles.label}>{t('contact-form-fields.message-label')}</p>
        <Controller
          name="message"
          control={control}
          render={({ field }) => (
            <Input variant={InputFieldVariant.TextArea} className={styles.input} {...field} placeholder={'Message'} />
          )}
        />
        {errors.message && <ErrorText variant="text" errorMessage={errors.message.message} />}
      </div>

      <PrimaryButton variant={ButtonVariant.RegularOutline} className={styles.submit} type="submit">
        {isLoading ? <Loader isLoading={true} /> : t('contact-form-fields.submit-button-text')}
      </PrimaryButton>
    </form>
  );
}
