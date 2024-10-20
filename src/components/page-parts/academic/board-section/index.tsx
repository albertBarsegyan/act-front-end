import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { MemberListRenderer } from '@/components/member-renderer';

import styles from './styles.module.css';

const admissionMembers = [
  {
    id: 'board-member-0',
    img: '/static/img/academic/board-members/nairi.jpeg',
  },
  {
    id: 'board-member-1',
    img: '/static/img/academic/board-members/aram.jpeg',
  },
  {
    id: 'board-member-2',
    img: '/static/img/academic/board-members/shant.jpeg',
  },
  {
    id: 'board-member-3',
    img: '/static/img/academic/board-members/armen.jpeg',
  },
  {
    id: 'board-member-4',
    img: '/static/img/admission/profile.jpeg',
  },
  {
    id: 'board-member-5',
    img: '/static/img/admission/profile.jpeg',
  },
  {
    id: 'board-member-6',
    img: '/static/img/academic/board-members/armine.jpeg',
  },
];

export function AcademicBoardSection() {
  const t = useTranslations('academic');

  const list = admissionMembers.map(({ id, img }) => ({
    id,
    img,
    name: t(`${id}.name`),
    position: t(`${id}.position`),
    description: t(`${id}.description`),
  }));

  return (
    <div className={styles.sectionWrapper}>
      <SectionLayout>
        <HeaderText className={styles.header}>{t('board-header')}</HeaderText>

        <MemberListRenderer list={list} />
      </SectionLayout>
    </div>
  );
}
