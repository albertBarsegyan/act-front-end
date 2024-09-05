import { useTranslations } from 'next-intl';
import React, { useState } from 'react';

import { PrimaryButton } from '@/components/common/button/primary';
import { AppMediaBreakpoints } from '@/constants/style.constants';
import { useOverflow } from '@/hooks/overflow';
import { useWindowSize } from '@/hooks/window-size';

export function Menu({
  children,
}: Readonly<{
  children: ({ toggleMenu }: { toggleMenu: () => void }) => React.ReactNode;
}>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('common');
  const { width } = useWindowSize();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const isTabletSize = width <= AppMediaBreakpoints.Tablet;

  const menuButtonText = t(isMenuOpen ? 'menu-button-title-is-open' : 'menu-button-title-is-closed');

  useOverflow(isMenuOpen && isTabletSize);

  return (
    <div>
      {isTabletSize && <PrimaryButton onClick={toggleMenu}>{menuButtonText}</PrimaryButton>}
      {(!isTabletSize || isMenuOpen) && children?.({ toggleMenu })}
    </div>
  );
}
