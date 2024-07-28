import { useTranslations } from 'next-intl';

import { BenefitRenderer } from '@/components/benefit-renderer';
import { HeaderText } from '@/components/header-text';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

const benefits = [
  {
    id: 0,
    img: '/static/img/admission/benefig-img.jpeg',
    title: 'Transporting Pupils By Bus',
  },
  {
    id: 1,
    img: '/static/img/admission/benefig-img.jpeg',
    title: 'Manufacturing Plant',
  },
  {
    id: 2,
    img: '/static/img/admission/benefig-img.jpeg',
    title: 'Extracurricular Learning',
  },
];

export function BenefitsSection() {
  const t = useTranslations('admission');

  return (
    <div className={styles.benefitSectionWrapper}>
      <SectionLayout>
        <HeaderText>{t('benefits-header')}</HeaderText>

        <div className={styles.benefitContent}>
          {benefits.map(({ id, ...data }) => (
            <BenefitRenderer key={id} data={data} />
          ))}
        </div>
      </SectionLayout>
    </div>
  );
}
