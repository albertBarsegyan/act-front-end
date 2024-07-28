import { useTranslations } from 'next-intl';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ImageLoader } from '@/components/image-loader';

import styles from './styles.module.css';

interface StudyOptionRendererProps {
  data: {
    header: string;
    description: string;
    img: string;
  };
}

export function StudyOptionRenderer({ data }: Readonly<StudyOptionRendererProps>) {
  const { header, description, img } = data;
  const t = useTranslations('common');

  return (
    <div className={styles.wrapperWithImage}>
      <div className={styles.imageWrapper}>
        <ImageLoader src={img} alt={header} />
      </div>
      <div className={styles.wrapperTextConent}>
        <div>
          <span className={styles.studyOptionHeader}>{header}</span>
          <p className={styles.studyOptionDescription}>{description}</p>
        </div>
        <PrimaryButton style={{ width: '130px' }} variant={ButtonVariant.RegularOutline}>
          {t('read-more-button-title')}
        </PrimaryButton>
      </div>
    </div>
  );
}
