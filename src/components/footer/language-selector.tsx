'use client';

import React, { ReactNode } from 'react';

import { Dropdown, DropdownType } from '@/components/common/dropdown';
import { ArmeniaIcon, EnglandIcon, RussiaIcon } from '@/components/icons/flags.icon';

const LanguageItemRenderer = ({ Icon, text }: { Icon: () => ReactNode; text: string }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Icon />
      <span style={{ marginLeft: '8px' }}>{text}</span>
    </div>
  );
};

export const LocaleDropdownList: DropdownType[] = [
  {
    id: 0,
    content: <LanguageItemRenderer Icon={EnglandIcon} text={'Eng'} />,
    nameId: 'en_us',
  },
  {
    id: 1,
    content: <LanguageItemRenderer Icon={RussiaIcon} text={'Ru'} />,
    nameId: 'ru',
  },
  {
    id: 2,
    content: <LanguageItemRenderer Icon={ArmeniaIcon} text={'Arm'} />,
    nameId: 'hy',
  },
];

export function LanguageSelector() {
  // const router = useRouter();

  // const handleChange = () => {
  // const { pathname, asPath, query } = router;
  // router.push({ pathname, query }, asPath, { locale: 'en' });
  // };

  return <Dropdown defaultNameId={'en'} items={LocaleDropdownList} handleChange={() => { }} />;
}