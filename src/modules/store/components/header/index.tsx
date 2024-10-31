'use client';
import { useState } from 'react';

import { ButtonVariant, PrimaryButton } from '@/components/common/button/primary';
import { StoreLogo } from '@/components/icons/store/logo';
import { SectionLayout } from '@/components/layout/section/section-layout';
import { BasketBlock } from '@/modules/store/components/basket-block';
import { BasketContent } from '@/modules/store/components/basket-content';
import { useStore } from '@/modules/store/context/basket';

import styles from './styles.module.css';

export function StoreHeader() {
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const { basketItemsCount } = useStore();

  const onIconClick = () => {
    console.log('click');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const onBasketClick = () => setIsBasketOpen((prev) => !prev);

  return (
    <SectionLayout className={styles.sectionWrapper}>
      <div className={styles.basketWrapper}>
        <PrimaryButton type="button" variant={ButtonVariant.TextPrimary} onClick={onIconClick}>
          <StoreLogo />
        </PrimaryButton>

        <PrimaryButton onClick={onBasketClick} className={styles.storeLogoWrapper} variant={ButtonVariant.TextPrimary}>
          <BasketBlock itemsCount={basketItemsCount} />
        </PrimaryButton>

        {isBasketOpen && <BasketContent onClose={onBasketClick} />}
      </div>
    </SectionLayout>
  );
}
