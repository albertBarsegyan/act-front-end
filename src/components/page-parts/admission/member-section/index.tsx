import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { MemberListRenderer } from '@/components/member-renderer';
import styles from '@/components/page-parts/admission/benefits-section/styles.module.css';

const admissionMembers = [
  {
    id: 'admission-member-0',
    img: '/static/img/admission/staff/edgar.jpeg',
  },
  {
    id: 'admission-member-1',
    img: '/static/img/admission/profile.jpeg',
  },
  {
    id: 'admission-member-2',
    img: '/static/img/admission/staff/levon.jpeg',
  },
];

export function AdmissionMembersSection() {
  const t = useTranslations('admission');

  const list = admissionMembers.map(({ id, img }) => ({
    id,
    img,
    name: t(`${id}.name`),
    position: t(`${id}.position`),
    description: t(`${id}.description`),
  }));

  return (
    <div className={styles.benefitSectionWrapper}>
      <SectionLayout>
        <HeaderText>{t('team-header')}</HeaderText>

        <MemberListRenderer list={list} />
      </SectionLayout>
    </div>
  );
}
