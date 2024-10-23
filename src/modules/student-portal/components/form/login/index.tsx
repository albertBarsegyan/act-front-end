'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { PrimaryButton } from '@/components/common/button/primary';
import { Input, InputFieldVariant } from '@/components/common/Input';

import styles from './styles.module.css';

export function StudentPortalLoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const t = useTranslations('studentPortal.loginForm');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(`Submitting Name: ${userName}, Phone: ${password}`);
  };

  const handleUserNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.formWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div>
          <p className={styles.formHeader}>{t('header')}</p>
          <p className={styles.description}>{t('description')}</p>
          <div className={styles.inputWrapper}>
            <Input
              variant={InputFieldVariant.Outlined}
              placeholder="Username"
              className={styles.input}
              type="text"
              id="userName"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>

          <div className={styles.inputWrapper}>
            <Input
              variant={InputFieldVariant.Outlined}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        </div>
        <PrimaryButton type="submit">{t('submit')}</PrimaryButton>
      </form>
    </div>
  );
}
