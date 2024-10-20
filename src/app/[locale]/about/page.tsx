import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

export default function AboutPage() {
  const translation = useTranslations('about');

  return (
    <SectionLayout className={styles.sectionWrapper}>
      <HeaderText color="black">{translation('about-us-header')}</HeaderText>
      <p className={styles.description}>{translation('about-us-description-1')}</p>
      <div className={styles.imageWrapper}>
        <Image fill src={'/static/img/about-us/about-us.jpeg'} alt={'about us'} />
      </div>
      <p className={styles.descriptionFull}>{translation('about-us-description-2')}</p>
    </SectionLayout>
  );
}
