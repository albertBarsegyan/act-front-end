'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

import { StorageKey } from '@/constants/storage-constant';
import { useOverflow } from '@/hooks/use-overflow';
import { useLocalStorage } from '@/hooks/use-storage';
import { LogoIcon } from '@/icons/logo.icon';
import Timeline = gsap.core.Timeline;

export function Intro() {
  const [isFirstTime, setIsFirstTime] = useLocalStorage(StorageKey.IsFirstLogin, true);
  const tl = useRef<null | Timeline>(null);

  useGSAP(() => {
    tl.current = gsap
      .timeline({ defaults: { duration: 0.6 } })
      .to('.welcome-text', {
        autoAlpha: 1,
        scale: 3,
        display: 'block',
      })
      .to('.welcome-text', {
        autoAlpha: 0,
        scale: 0,
        delay: 1,
        display: 'none',
      })
      .to('.logo', {
        opacity: 1,
        display: 'block',
        color: '#8b50ff',
        scale: 3,
      })
      .to('.logo', {
        opacity: 0,
        delay: 1,
        display: 'none',
        color: '#8b50ff',
        scale: 0,
        onComplete: () => setIsFirstTime(false),
      });
  });

  useOverflow(isFirstTime);

  if (isFirstTime)
    return (
      <div className="fixed bottom-0 left-0 top-0 z-20 flex h-screen w-full items-center justify-center bg-black">
        <p className="welcome-text hidden text-3xl opacity-0">Welcome</p>

        <div className="logo hidden opacity-0">
          <LogoIcon />
        </div>
      </div>
    );

  return null;
}
