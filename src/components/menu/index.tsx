import { useTranslations } from 'next-intl';
import React, { PropsWithChildren, useEffect, useState } from 'react';

import { PrimaryButton } from '@/components/common/button/primary';
import { AppMediaBreakpoints } from '@/constants/style.constants';
import { useWindowSize } from '@/hooks/window-size';

export function Menu({ children }: Readonly<PropsWithChildren>) {
  const [menuVisibility, setMenuVisibility] = useState({ animationState: false, componentState: false });
  const t = useTranslations('common');
  const { width } = useWindowSize();

  const toggleMenu = () => setMenuVisibility((prev) => ({ ...prev, animationState: !prev.animationState }));

  const isTabletSize = width <= AppMediaBreakpoints.Tablet;

  const menuButtonText = t(menuVisibility.componentState ? 'menu-button-title-is-open' : 'menu-button-title-is-closed');

  useEffect(() => {
    if (menuVisibility.componentState) {
      document.body.style.overflowY = 'hidden';
    }

    return () => {
      document.body.style.overflowY = 'auto';
    };
  }, [isTabletSize, menuVisibility.componentState, menuVisibility.animationState]);

  return (
    <div>
      {isTabletSize && <PrimaryButton handleClick={toggleMenu}>{menuButtonText}</PrimaryButton>}
      {(!isTabletSize || menuVisibility.componentState) && children}
    </div>
  );
}
