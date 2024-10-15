import { CloseIcon } from 'next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon';

import { PrimaryButton } from '@/components/common/button/primary';
import { ErrorIcon } from '@/components/icons/error-icon';
import { SuccessIcon } from '@/components/icons/success-icon';
import { useModal } from '@/context/modal/Modal.context';
import { useOutsideClick } from '@/hooks/use-outside-click';

import styles from './styles.module.css';

interface FormResponseContentProps {
  isSuccess: boolean;
  header: string;
  description: string;
}

export function FormResponseContent({ isSuccess, header, description }: Readonly<FormResponseContentProps>) {
  const { provideModalSettings } = useModal();

  const closeModal = () => provideModalSettings({ isShowing: false });

  const ref = useOutsideClick(closeModal);

  return (
    <div className={styles.wrapper} ref={ref}>
      <div className={styles.closeButton}>
        <PrimaryButton onClick={closeModal}>
          <CloseIcon />
        </PrimaryButton>
      </div>

      {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
      <span className={styles.header}>{header}</span>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
