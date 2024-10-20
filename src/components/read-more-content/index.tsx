import Image from 'next/image';

import { PrimaryButton } from '@/components/common/button/primary';
import { CloseIcon } from '@/components/icons/close-icon';
import { useModal } from '@/context/modal/Modal.context';

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

  const closeModal = () => {
    provideModalSettings({ isShowing: false });
  };

  return (
    <div className={styles.wrapper}>
      <PrimaryButton className={styles.closeButton} onClick={closeModal}>
        <CloseIcon />
      </PrimaryButton>
      <div>
        <Image fill src={image} alt={header} />
      </div>
      <div>
        <span className={styles.header}>{header}</span>

        <p>{description}</p>
      </div>
    </div>
  );
}
