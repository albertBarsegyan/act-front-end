import { useTranslations } from 'next-intl';

import { PrimaryButton } from '@/components/common/button/primary';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

export function HeroSection() {
  const t = useTranslations('home');

  return (
    <div className={styles.wrapper}>
      <SectionLayout>
        <h1 className={styles.heroHeader}>{t('header-title')}</h1>
        <p className={styles.heroDescription}>{t('header-description')}</p>

        <div className={styles.buttonsWrapper}>
          <PrimaryButton>{t('apply-button-text')}</PrimaryButton>
          <PrimaryButton>{t('college-tour-button-text')}</PrimaryButton>
        </div>
      </SectionLayout>
      <div className={styles.gradientEffect} />
    </div>
  );
}
