'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Carousel from '@/components/carousel';
import { PrimaryButton } from '@/components/common/button/primary';
import { HeaderText } from '@/components/header-text';

import styles from './styles.module.css';

const images = [
  {
    id: 0,
    src: '/static/img/graduation/graduation-1.jpg',
  },
  {
    id: 1,
    src: '/static/img/graduation/graduation-2.jpg',
  },
  {
    id: 2,
    src: '/static/img/graduation/graduation-2.jpg',
  },
];

export function GraduationSection() {
  const t = useTranslations('home');

  return (
    <div className={styles.sectionWrapper}>
      <Carousel>
        {images.map((image) => (
          <div style={{ position: 'relative', height: '100%', width: '100%' }} key={image.id}>
            <Image className={styles.image} fill key={image.id} src={image.src} alt="graduation" />
          </div>
        ))}
      </Carousel>

      <div className={styles.contentWrapper}>
        <HeaderText color="white">{t('graduation-header-1')}</HeaderText>
        <HeaderText color="white">{t('graduation-header-2')}</HeaderText>

        <PrimaryButton className={styles.button}>{t('graduation-button-text')}</PrimaryButton>
      </div>
    </div>
  );
}
