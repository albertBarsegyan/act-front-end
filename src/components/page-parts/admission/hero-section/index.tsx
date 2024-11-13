'use client';
import { useTranslations } from 'next-intl';

import { ImageLoader } from '@/components/image-loader';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { useModal } from '@/context/modal/Modal.context';
import { AdmissionForm } from '@/forms/admission';
import globalStyles from '@/styles/common.module.css';

import styles from './styles.module.css';

export function AdmissionHeroSection() {
  const t = useTranslations('admission');
  const { provideModalSettings } = useModal();

  const onOpenAdmissionForm = () => {
    provideModalSettings({
      isShowing: true,
      content: <AdmissionForm />,
      variant: 'drawer',
      delay: 0,
    });
  };

  const email = t('contact-email');

  return (
    <div className={styles.admissionHeroWrapper}>
      <SectionLayout>
        <div className={styles.admissionHeroContentWrapper}>
          <div>
            <h1 className={styles.header}>{t('header')}</h1>
            <p className={styles.description}>{t('description')}</p>
            <span className={styles.subHeader}>{t('sub-header')}</span>
            <p className={styles.subDescription}>{t('sub-description')}</p>
          </div>
          <div>
            <ImageLoader
              className={globalStyles.imageRounded}
              width={540}
              height={520}
              src={'/static/img/admission/school.jpg'}
              alt={'Collage'}
            />
          </div>
        </div>

        <div>
          <span className={styles.subHeader}>{t('process-header')}</span>

          <ul className={styles.listWrapper}>
            <li>
              <strong>Apply Now:</strong> Start by filling out the online{' '}
              <button type="button" onClick={onOpenAdmissionForm} className={styles.linkButton}>
                application form.
              </button>{' '}
              You'll need to provide your name, phone number, and links to your social media accounts.
            </li>

            <li>
              <strong>Interview and Tour:</strong> In the second stage, applicants will be invited for an interview and
              a tour at the ACT campus. During this visit, our admissions committee will assess applicants’ motivation
              and interest in the program.
            </li>
            <li>
              <strong>Entrance Exam:</strong> All applicants will be required to take an entrance exam, which varies
              depending on the chosen field of study.
            </li>
            <li>
              <strong>Final Decision:</strong> After the exam and interview, successful applicants will receive an
              acceptance letter with further details on how to proceed further.
            </li>
          </ul>

          <span className={styles.scholarship}>{t('process-header')}</span>
          <p className={styles.description}>{t('scholarship-description')}</p>

          <p className={styles.description}>
            {t('scholarship-sub-description')}{" "}
            <a href={`mailto:${email}`} style={{ textDecoration: 'underline' }}>
              {t('contact-email')}
            </a>
          </p>
        </div>
      </SectionLayout>
    </div>
  );
}
