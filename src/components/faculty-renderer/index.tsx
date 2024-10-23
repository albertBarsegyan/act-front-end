import { useTranslations } from 'next-intl';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ImageLoader } from '@/components/image-loader';
import { ReadMoreContent } from '@/components/read-more-content';
import { useModal } from '@/context/modal/Modal.context';

import styles from './styles.module.css';

interface FacultyRendererProps {
  data: {
    img: string;
    header: string;
    extraDescription: string;
  };
}

export function FacultyRenderer({ data }: Readonly<FacultyRendererProps>) {
  const t = useTranslations('common');
  const { provideModalSettings } = useModal();
  const { img, header, extraDescription } = data;

  const onReadMoreClick = () =>
    provideModalSettings({
      content: <ReadMoreContent data={{ image: img, header, description: extraDescription }} />,
      isShowing: true,
      delay: 0,
    });

  return (
    <div className={styles.facultyRendererWrapper}>
      <p className={styles.facultyRendererHeader}>{header}</p>
      <PrimaryButton className={styles.readerMoreButton} onClick={onReadMoreClick} variant={ButtonVariant.Regular}>
        {t('read-more-button-title')}
      </PrimaryButton>
      <div className={styles.facultyRendererImage}>
        <ImageLoader width={1320} height={420} className={styles.facultyRendererImage} src={img} alt={header} />
      </div>
    </div>
  );
}
