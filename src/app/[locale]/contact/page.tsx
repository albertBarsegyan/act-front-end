import { useTranslations } from 'next-intl';

import ProjectMap from '@/components/earth-map';
import { ContactDetails } from '@/components/footer';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { ContactForm } from '@/forms/contact';

import styles from './styles.module.css';

export default function ContactPage() {
  const translation = useTranslations('common');

  return (
    <SectionLayout className={styles.sectionLayout}>
      <div className={styles.wrapper}>
        <ProjectMap>
          <div className={styles.contactInfoWrapper} style={{ zIndex: 99 }}>
            <p style={{ marginBottom: '8px' }}>{translation('working-days')}</p>
            <ContactDetails isDark />
          </div>
        </ProjectMap>

        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
}
