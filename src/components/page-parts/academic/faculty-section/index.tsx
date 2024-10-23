'use client';

import { useTranslations } from 'next-intl';

import { FacultyRenderer } from '@/components/faculty-renderer';
import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

const faculties = [
  {
    id: 'digital-art',
    img: '/static/img/academic/digital-art.jpg',
  },
  {
    id: 'computer-science',
    img: '/static/img/academic/computer-science.jpeg',
  },
  {
    id: 'engineering-manufactoring',
    img: '/static/img/academic/engineering.jpeg',
  },
];

export function FacultySection() {
  const t = useTranslations('academic');

  return (
    <div className={styles.facultySectionWrapper}>
      <SectionLayout>
        <HeaderText className={styles.header}>{t('faculties-header')}</HeaderText>

        <div className={styles.facultiesWrapper}>
          {faculties.map(({ id, img }) => (
            <FacultyRenderer
              key={id}
              data={{ img, header: t(`${id}.title`), extraDescription: t(`${id}.read-more`) }}
            />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
