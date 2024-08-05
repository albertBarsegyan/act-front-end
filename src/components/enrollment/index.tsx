import { useTranslations } from 'next-intl';

import { PrimaryButton } from '@/components/common/button/primary';
import { ImageLoader } from '@/components/image-loader';
import { useModal } from '@/context/modal/Modal.context';

import contactedImg from '../../../../../../../static/img/common/contacted.jpg';
import enrollmentImg from '../../../../../../../static/img/common/inrollment.png';
import styles from './styles.module.css';

export function EnrollmentModal() {
  const translation = useTranslations('common');
  const { provideModalSettings } = useModal();

  const handleModal = () => {
    provideModalSettings({
      isShowing: false,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <ImageLoader src={enrollmentImg} alt={'Enrolled'} />
      </div>
      <div>
        <p className={styles.enrollHeader}>{translation('enrollment-header')}</p>
      </div>
      <div>
        <p className={styles.description}>{translation('enrollment-description')}</p>
      </div>

      <PrimaryButton handleClick={handleModal}>{translation('enrollment-button-text')}</PrimaryButton>
    </div>
  );
}

export function Contacted() {
  const translation = useTranslations('common');
  const { provideModalSettings } = useModal();

  const handleModal = () => {
    provideModalSettings({
      isShowing: false,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <ImageLoader src={contactedImg} alt={'Enrolled'} />
      </div>
      <div>
        <p className={styles.enrollHeader}>{translation('contacted-header')}</p>
      </div>
      <div>
        <p className={styles.description}>{translation('contacted-description')}</p>
      </div>

      <PrimaryButton handleClick={handleModal}>{translation('contacted-button-text')}</PrimaryButton>
    </div>
  );
}

export function ContractSigned() {
  const translation = useTranslations('contract');

  const handleModal = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <ImageLoader src={contactedImg} alt={'Signed'} />
      </div>
      <div>
        <p className={styles.enrollHeader}>{translation('signed-header')}</p>
      </div>
      <div>
        <p className={styles.description}>{translation('signed-description')}</p>
      </div>

      <PrimaryButton handleClick={handleModal}>{translation('signed-button-text')}</PrimaryButton>
    </div>
  );
}

export function ContractSignedError() {
  const translation = useTranslations('contract');
  const { provideModalSettings } = useModal();

  const handleModal = () => {
    provideModalSettings({
      isShowing: false,
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.imgWrapper}>
        <ImageLoader src={contactedImg} alt={'Not signed'} />
      </div>
      <div>
        <p className={styles.enrollHeader}>{translation('not-signed-header')}</p>
      </div>
      <div>
        <p className={styles.description}>{translation('not-signed-description')}</p>
      </div>

      <PrimaryButton handleClick={handleModal}>{translation('not-signed-button-text')}</PrimaryButton>
    </div>
  );
}
