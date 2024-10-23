'use client';

import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { ProgramOptionRenderer } from '@/components/study-option-renderer';

import styles from './styles.module.css';

const studyPrograms = [
  {
    id: 'mandatory-education',
    img: '/static/img/admission/study-program.jpeg',
  },
  {
    id: 'certification-courses',
    img: '/static/img/admission/study-program.jpeg',
  },
  {
    id: 'summer-school',
    img: '/static/img/admission/study-program.jpeg',
  },
  {
    id: 'courses',
    img: '/static/img/admission/study-program.jpeg',
  },
];

export function StudyProgramSection() {
  const t = useTranslations('admission');

  return (
    <div className={styles.wrapper}>
      <SectionLayout>
        <HeaderText>{t('study-program-header')}</HeaderText>

        <div className={styles.contentWrapper}>
          {studyPrograms.map(({ id, img }) => (
            <ProgramOptionRenderer
              key={id}
              data={{
                img,
                header: t(`${id}.header`),
                description: t(`${id}.description`),
                extraDescription: t(`${id}.read-more`),
              }}
            />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
