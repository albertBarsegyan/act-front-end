import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

export function AboutUsSection() {
  const t = useTranslations('home');

  return (
    <div className={styles.wrapper}>
      <SectionLayout>
        <span className={styles.header}>{t('about-us-header')}</span>
        <p className={styles.description}>{t('about-us-description')}</p>
        <div className={styles.imageWrapper}>
          <Image fill src={'/static/img/about-us/about-us.jpeg'} alt={'about us'} />
        </div>
      </SectionLayout>
    </div>
  );
}
