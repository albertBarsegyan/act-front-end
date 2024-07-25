'use client';
import { useEffect } from 'react';

export const useOverflow = (visible: boolean) => {
  useEffect(() => {
    if (visible) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [visible]);
};
