import classNames from 'classnames';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { ErrorIcon } from '@/components/icons/error-icon';
import { SuccessIcon } from '@/components/icons/success-icon';
import { useModal } from '@/context/modal/Modal.context';
import { useOutsideClick } from '@/hooks/use-outside-click';

import styles from './styles.module.css';

interface FormResponseContentProps {
  isSuccess: boolean;
  description: string;
}

export function FormResponseContent({ isSuccess, description }: Readonly<FormResponseContentProps>) {
  const { provideModalSettings } = useModal();

  const closeModal = () => provideModalSettings({ isShowing: false });

  const ref = useOutsideClick(closeModal);

  return (
    <div className={styles.wrapper} ref={ref}>
      {isSuccess ? <SuccessIcon /> : <ErrorIcon />}
      <span
        className={classNames({
          [styles.header]: isSuccess,
          [styles.headerError]: !isSuccess,
        })}
      >
        {isSuccess ? 'Success' : 'Error'}
      </span>
      <p className={styles.description}>{description}</p>
      <p className={styles.emailConfirmation}>Shortly you will find a confirmation in your email.</p>

      <PrimaryButton
        onClick={closeModal}
        variant={ButtonVariant.Regular}
        className={classNames({
          [styles.actionButton]: isSuccess,
          [styles.actionButtonError]: !isSuccess,
        })}
      >
        {isSuccess ? 'Continue' : 'Try again'}
      </PrimaryButton>
    </div>
  );
}
