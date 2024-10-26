import { useTranslations } from 'next-intl';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ImageLoader } from '@/components/image-loader';
import { ReadMoreContent } from '@/components/read-more-content';
import { useModal } from '@/context/modal/Modal.context';

import styles from './styles.module.css';

interface StudyOptionRendererProps {
  data: {
    header: string;
    description: string;
    img: string;
    extraDescription: string;
  };
}

export function ProgramOptionRenderer({ data }: Readonly<StudyOptionRendererProps>) {
  const { header, description, img, extraDescription } = data;
  const t = useTranslations('common');
  const { provideModalSettings } = useModal();

  const onReadMoreClick = () =>
    provideModalSettings({
      content: <ReadMoreContent data={{ image: img, header, description: extraDescription }} />,
      isShowing: true,
      variant: 'modal',
      delay: 0,
    });

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

        <PrimaryButton
          style={{ width: 'fit-content', background: 'black', color: 'white' }}
          onClick={onReadMoreClick}
          variant={ButtonVariant.Regular}
        >
          {t('read-more-button-title')}
        </PrimaryButton>
      </div>
    </div>
  );
}
