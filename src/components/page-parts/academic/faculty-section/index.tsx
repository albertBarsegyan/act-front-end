import { useTranslations } from 'next-intl';

import { FacultyRenderer } from '@/components/faculty-renderer';
import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

const faculties = [
  {
    id: 0,
    img: '/static/img/academic/digital-art.jpg',
    header: 'Digital Art',
  },
  {
    id: 1,
    img: '/static/img/academic/computer-science.jpeg',
    header: 'Computer Science',
  },
  {
    id: 2,
    img: '/static/img/academic/engineering.jpeg',
    header: 'Engineering',
  },
];

export function FacultySection() {
  const t = useTranslations('academic');

  return (
    <div className={styles.facultySectionWrapper}>
      <SectionLayout>
        <HeaderText>{t('faculties-header')}</HeaderText>

        <div className={styles.facultiesWrapper}>
          {faculties.map(({ id, ...data }) => (
            <FacultyRenderer key={id} data={data} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
