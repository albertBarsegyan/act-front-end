import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

export function AboutUsSection() {
  const t = useTranslations('home');

  return (
    <div className={styles.wrapper}>
      <SectionLayout>
        <HeaderText color="white">{t('about-us-header')}</HeaderText>
        <p className={styles.description}>{t('about-us-description')}</p>
        <div className={styles.imageWrapper}>
          <img src="/static/img/about-us/before.png" alt="" />
          <img src="/static/img/about-us/after.png" alt="" />
        </div>
      </SectionLayout>
    </div>
  );
}
