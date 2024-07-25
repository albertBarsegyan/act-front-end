'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { PrimaryButton } from '@/components/common/button/primary';

import styles from './styles.module.css';

export function ReservationForm() {
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const t = useTranslations('home');

  const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(`Submitting Name: ${firstName}, Phone: ${phoneNumber}`);
  };

  return (
    <form className={styles.formWrapper} onSubmit={handleSubmit}>
      <p className={styles.formHeader}>{t('reservation-form-header')}</p>
      <div className={styles.inputWrapper}>
        <input
          placeholder="Name Surname"
          className={styles.input}
          type="text"
          id="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <PrimaryButton type="submit">{t('apply-button-text')}</PrimaryButton>
    </form>
  );
}
