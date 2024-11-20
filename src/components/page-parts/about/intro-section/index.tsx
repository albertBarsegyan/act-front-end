import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';

import styles from './styles.module.css';

export function IntroSection() {
  const translation = useTranslations('about');

  return (
    <div className={styles.introSectionWrapper}>
      <div className={styles.imageWrapper}>
        <img src="/static/img/about-us/before.png" alt="" />
        <img src="/static/img/about-us/after.png" alt="" />
      </div>
      <div className={styles.info}>
        <HeaderText color="black">{translation('about-us-header')}</HeaderText>
        <p className={styles.description}>{translation('about-us-description-1')}</p>
        <p className={styles.descriptionFull}>{translation('about-us-description-2')}</p>
      </div>
    </div>
  );
}
