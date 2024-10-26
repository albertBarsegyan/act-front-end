import { useTranslations } from 'next-intl';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ImageLoader } from '@/components/image-loader';
import { ReadMoreContent } from '@/components/read-more-content';
import { useModal } from '@/context/modal/Modal.context';

import styles from './styles.module.css';

interface BenefitRendererProps {
  data: {
    title: string;
    img: string;
    extraDescription: string;
  };
}

export function BenefitRenderer({ data }: Readonly<BenefitRendererProps>) {
  const { provideModalSettings } = useModal();
  const t = useTranslations('common');
  const { img, title, extraDescription } = data ?? {};

  const onReadMoreClick = () =>
    provideModalSettings({
      content: <ReadMoreContent data={{ image: img, header: title, description: extraDescription }} />,
      isShowing: true,
      delay: 0,
    });

  return (
    <div className={styles.benefitRenderer}>
      <div className={styles.imageWrapper}>
        <ImageLoader src={img} alt={title} />
      </div>
      <div>
        <p className={styles.title}>{title}</p>
      </div>
      <PrimaryButton
        style={{ width: 'fit-content', margin: '0 auto', background: 'black', color: 'white' }}
        onClick={onReadMoreClick}
        variant={ButtonVariant.Regular}
      >
        {t('read-more-button-title')}
      </PrimaryButton>
    </div>
  );
}
