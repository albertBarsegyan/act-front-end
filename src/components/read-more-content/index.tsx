import { PrimaryButton } from '@/components/common/button/primary';
import { CloseIcon } from '@/components/icons/close-icon';
import { ImageLoader } from '@/components/image-loader';
import { useModal } from '@/context/modal/Modal.context';
import { useOutsideClick } from '@/hooks/use-outside-click';

import styles from './styles.module.css';

interface ReadMoreContentProps {
  data: {
    image: string;
    header: string;
    description: string;
  };
}

export function ReadMoreContent({ data }: Readonly<ReadMoreContentProps>) {
  const { provideModalSettings } = useModal();
  const { image, header, description } = data;

  const closeModal = () => provideModalSettings({ isShowing: false });

  const ref = useOutsideClick(closeModal);

  return (
    <div className={styles.wrapper} ref={ref}>
      <PrimaryButton className={styles.closeButton} onClick={closeModal}>
        <CloseIcon />
      </PrimaryButton>

      <div className={styles.imageWrapper}>
        <ImageLoader src={image} className={styles.image} alt={header} />
      </div>

      <div className={styles.textContent}>
        <span className={styles.header}>{header}</span>

        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
