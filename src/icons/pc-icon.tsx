import * as React from 'react';

import { IconsType } from '@/types/icons-type';

export const PcIcon = ({ size, className }: IconsType) => (
  <svg className={className} width={size} height={size} viewBox="0 -15.5 100 100" xmlns="http://www.w3.org/2000/svg">
    <path fill="#23475F" d="M91 62V5a5 5 0 0 0-5-5H14a5 5 0 0 0-5 5v57H0v3a4 4 0 0 0 4 4h92a4 4 0 0 0 4-4v-3h-9z" />
    <path fill="#8b50ff" d="M14 5h72v51H14V5z" />
    <path fill="#1C394C" d="M9 60h82v2H9v-2z" />
    <path
      fill="#BCC4C8"
      d="M74.5 64a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 74.5 64zm5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 79.5 64zm5 0a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 84.5 64z"
    />
  </svg>
);
