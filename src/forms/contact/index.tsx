'use client';
import { useTranslations } from 'next-intl';
import React, { useReducer } from 'react';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { Input, InputFieldVariant } from '@/components/common/Input';
import { Loader } from '@/components/common/loader';
import { FormFieldActionTypes } from '@/forms/contact/types';
import { emailValidator, maxLengthValidator } from '@/utils/validation';

import { ContactFormFieldName, initialFormData, reducer } from './reducer';
import styles from './styles.module.css';

export function ContactForm() {
  const t = useTranslations('contact');

  const [contactFormData, dispatch] = useReducer(reducer, initialFormData);

  const isButtonActive = Object.values(contactFormData).every(
    (fieldData) => fieldData.value && !fieldData.errorMessage
  );

  const isLoading = false;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name: contactFormData.name.value,
      email: contactFormData.email.value,
      message: contactFormData.message.value,
    };

    if (isButtonActive) {
      console.log(data); // request to send the message
    }
  };

  const handleChange = (fieldName: ContactFormFieldName) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    if (fieldName === ContactFormFieldName.Email) {
      dispatch({
        fieldName,
        type: FormFieldActionTypes.Update,
        fieldData: { value, errorMessage: emailValidator(value) ? '' : String(t('contact-form-fields.invalid-email')) },
      });
      return;
    }

    if (fieldName === ContactFormFieldName.Name) {
      dispatch({
        fieldName,
        type: FormFieldActionTypes.Update,
        fieldData: {
          value,
          errorMessage: maxLengthValidator(value, 64) ? '' : String(t('string-max-length').replace('MAX', '64')),
        },
      });
      return;
    }

    dispatch({ type: FormFieldActionTypes.Update, fieldName, fieldData: { value } });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formWrapper}>
      <p className={styles.formTitle}>{t('contact-form-title')}</p>

      <Input
        value={contactFormData.name.value}
        errorMessage={contactFormData.name.errorMessage}
        onChange={handleChange(ContactFormFieldName.Name)}
        placeholder={String(t('contact-form-fields.name-placeholder'))}
        label={String(t('contact-form-fields.name-label'))}
        type="text"
      />

      <Input
        placeholder={String(t('contact-form-fields.email-placeholder'))}
        label={String(t('contact-form-fields.email-label'))}
        value={contactFormData.email.value}
        errorMessage={contactFormData.email.errorMessage}
        onChange={handleChange(ContactFormFieldName.Email)}
        type="text"
      />

      <Input
        variant={InputFieldVariant.TextArea}
        placeholder={String(t('contact-form-fields.message-placeholder'))}
        label={String(t('contact-form-fields.message-label'))}
        value={contactFormData.message.value}
        onChange={handleChange(ContactFormFieldName.Message)}
      />

      <PrimaryButton
        variant={ButtonVariant.RegularOutline}
        className={styles.submit}
        active={isButtonActive}
        type="submit"
      >
        {t('contact-form-fields.submit-button-text')} <Loader isLoading={isLoading} />
      </PrimaryButton>
    </form>
  );
}
