import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { StudyOptionRenderer } from '@/components/study-option-renderer';

import styles from './styles.module.css';

const studyPrograms = [
  {
    id: 1,
    header: 'College',
    img: '/static/img/admission/study-program.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper aliquam ut eu elit tellus. Tristique interdum amet sit neque ut gravida auctor.',
  },
  {
    id: 2,
    header: 'Certification Courses',
    img: '/static/img/admission/study-program.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper aliquam ut eu elit tellus. Tristique interdum amet sit neque ut gravida auctor.',
  },
  {
    id: 3,
    header: 'Summer School',
    img: '/static/img/admission/study-program.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper aliquam ut eu elit tellus. Tristique interdum amet sit neque ut gravida auctor.',
  },
  {
    id: 4,
    header: 'Courses',
    img: '/static/img/admission/study-program.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Semper aliquam ut eu elit tellus. Tristique interdum amet sit neque ut gravida auctor.',
  },
];

export function StudyProgramSection() {
  const t = useTranslations('admission');

  return (
    <div className={styles.wrapper}>
      <SectionLayout>
        <HeaderText>{t('study-program-header')}</HeaderText>

        <div className={styles.contentWrapper}>
          {studyPrograms.map(({ id, ...data }) => (
            <StudyOptionRenderer key={id} data={data} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
