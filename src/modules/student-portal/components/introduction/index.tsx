import { useTranslations } from 'next-intl';

import { ImageLoader } from '@/components/image-loader';

import styles from './styles.module.css';

export function StudentPortalIntro() {
  const translate = useTranslations('studentPortal');

  return (
    <div className={styles.wrapper}>
      <ImageLoader
        className={styles.backgroundImage}
        width={1200}
        height={850}
        fill={false}
        src={'/static/img/student-portal/student-portal.jpeg'}
        alt={translate('description')}
      />
      <div className={styles.textContent}>
        <h1 className={styles.header}>{translate('header')}</h1>
        <p className={styles.description}>{translate('description')}</p>
      </div>
    </div>
  );
}
