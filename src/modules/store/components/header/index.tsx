'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { StoreLogo } from '@/components/icons/store/logo';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { BasketBlock } from '@/modules/store/components/basket-block';
import { useStore } from '@/modules/store/context/basket';
import { routePath } from '@/utils/route';

import styles from './styles.module.css';

export function StoreHeader() {
  const router = useRouter();
  const { basketItemsCount } = useStore();

  const onIconClick = () => {
    router.push(routePath.getStore());

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <SectionLayout className={styles.sectionWrapper}>
      <div className={styles.basketWrapper}>
        <PrimaryButton type="button" variant={ButtonVariant.TextPrimary} onClick={onIconClick}>
          <StoreLogo />
        </PrimaryButton>

        <Link href={routePath.getCheckout()} className={styles.storeLogoWrapper}>
          <BasketBlock itemsCount={basketItemsCount} />
        </Link>
      </div>
    </SectionLayout>
  );
}
