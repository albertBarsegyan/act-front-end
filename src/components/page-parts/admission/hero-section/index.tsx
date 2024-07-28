import { useTranslations } from 'next-intl';

import { HeaderText } from '@/components/header-text';
import { ImageLoader } from '@/components/image-loader';
import { SectionLayout } from '@/components/layout/section/section-layout';

import styles from './styles.module.css';

export function AdmissionHeroSection() {
  const t = useTranslations('admission');

  return (
    <div className={styles.admissionHeroWrapper}>
      <SectionLayout>
        <div className={styles.admissionHeroContentWrapper}>
          <div>
            <HeaderText>{t('header')}</HeaderText>
            <p className={styles.description}>{t('description')}</p>
          </div>
          <div>
            <ImageLoader width={540} height={520} src={'/static/img/admission/school.jpg'} alt={'Collage'} />
          </div>
        </div>
      </SectionLayout>
    </div>
  );
}
