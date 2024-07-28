import { useTranslations } from 'next-intl';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ImageLoader } from '@/components/image-loader';

import styles from './styles.module.css';

interface FacultyRendererProps {
  data: {
    img: string;
    header: string;
  };
}

export function FacultyRenderer({ data }: Readonly<FacultyRendererProps>) {
  const t = useTranslations('common');
  const { img, header } = data;

  return (
    <div className={styles.facultyRendererWrapper}>
      <p className={styles.facultyRendererHeader}>{header}</p>
      <PrimaryButton className={styles.readerMoreButton} variant={ButtonVariant.Regular}>
        {t('read-more-button-title')}
      </PrimaryButton>
      <div className={styles.facultyRendererImage}>
        <ImageLoader width={1320} height={420} className={styles.facultyRendererImage} src={img} alt={header} />
      </div>
    </div>
  );
}
