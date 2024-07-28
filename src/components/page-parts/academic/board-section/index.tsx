import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { MemberListRenderer } from '@/components/member-renderer';

import styles from './styles.module.css';

const admissionMembers = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
  {
    id: 2,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
  {
    id: 3,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
  {
    id: 4,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
  {
    id: 14,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
  {
    id: 23,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
  {
    id: 32,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
  {
    id: 41,
    name: 'John Doe',
    position: 'Admission Officer',
    img: '/static/img/admission/profile.jpeg',
    description:
      'Lorem ipsum dolor sit amet consectetur. Magna morbi magna rhoncus lorem. Ut adipiscing diam arcu lectus euismod scelerisque elementum amet sed.',
  },
];

export function AcademicBoardSection() {
  const t = useTranslations('academic');

  return (
    <div className={styles.sectionWrapper}>
      <SectionLayout>
        <HeaderText>{t('board-header')}</HeaderText>

        <MemberListRenderer list={admissionMembers} />
      </SectionLayout>
    </div>
  );
}
