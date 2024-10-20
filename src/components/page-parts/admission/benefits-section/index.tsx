import { useTranslations } from 'next-intl';

import { BenefitRenderer } from '@/components/benefit-renderer';
import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

const benefits = [
  {
    id: 'free-transportation',
    img: '/static/img/admission/benefig-img.jpeg',
  },
  {
    id: 'manufacturing-area',
    img: '/static/img/admission/manufactoring.jpeg',
  },
  {
    id: 'extracurricular-learning',
    img: '/static/img/admission/learning.jpeg',
  },
];

export function BenefitsSection() {
  const t = useTranslations('admission');

  return (
    <div className={styles.benefitSectionWrapper}>
      <SectionLayout>
        <HeaderText>{t('benefits-header')}</HeaderText>

        <div className={styles.benefitContent}>
          {benefits.map(({ id, img }) => (
            <BenefitRenderer key={id} data={{ img, title: t(`${id}.title`) }} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
