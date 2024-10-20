'use client';
import { useTranslations } from 'next-intl';

import { PrimaryButton } from '@/components/common/button/primary';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { useModal } from '@/context/modal/Modal.context';
import { AdmissionForm } from '@/forms/admission';
import { CollegeTourForm } from '@/forms/college-tour';

import styles from './styles.module.css';

export function HeroSection() {
  const t = useTranslations('home');
  const { provideModalSettings } = useModal();

  const onClickAction = (actionName: 'tour' | 'admission') => () =>
    provideModalSettings({
      isShowing: true,
      variant: 'drawer',
      content: actionName === 'tour' ? <CollegeTourForm /> : <AdmissionForm />,
      delay: 0,
    });

  return (
    <div className={styles.wrapper}>
      <SectionLayout>
        <h1 className={styles.heroHeader}>{t('header-title')}</h1>
        <span className={styles.founders}>{t('header-founders-name')}</span>
        <p className={styles.heroDescription}>{t('header-description')}</p>

        <div className={styles.buttonsWrapper}>
          <PrimaryButton onClick={onClickAction('admission')}>{t('apply-button-text')}</PrimaryButton>
          <PrimaryButton onClick={onClickAction('tour')}>{t('college-tour-button-text')}</PrimaryButton>
        </div>
      </SectionLayout>

      <div className={styles.gradientEffect} />
    </div>
  );
}
