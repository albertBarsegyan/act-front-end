import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';

import styles from './styles.module.css';

export function IntroSection() {
  const translation = useTranslations('about');

  return (
    <div className={styles.introSectionWrapper}>
      <div className={styles.imageWrapper}>
        <Image fill src={'/static/img/about-us/about-us.jpeg'} alt={'about us'} />
      </div>
      <div className={styles.info}>
        <HeaderText color="black">{translation('about-us-header')}</HeaderText>
        <p className={styles.description}>{translation('about-us-description-1')}</p>
        <p className={styles.descriptionFull}>{translation('about-us-description-2')}</p>
      </div>
    </div>
  );
}
