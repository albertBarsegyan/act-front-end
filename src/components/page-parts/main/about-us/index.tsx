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
          <Image fill src={'/static/img/about-us/about-us.jpeg'} alt={'about us'} />
        </div>
      </SectionLayout>
    </div>
  );
}
