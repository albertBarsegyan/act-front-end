'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Power2 } from 'gsap/gsap-core';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

import { Button } from '@/components/common/button/button';
import { RoutePath } from '@/constants/route-contants';
import { useOverflow } from '@/hooks/use-overflow';
import { useWindowSize } from '@/hooks/use-window-size';
import { LogoIcon } from '@/icons/logo.icon';
import { MenuIcon } from '@/icons/menu-icon';
import Timeline = gsap.core.Timeline;

const NavbarRoutes = [
  { id: 0, name: 'About Us', contentId: 'aboutSection' },
  { id: 1, name: 'Open Source', contentId: 'openSource' },
  { id: 2, name: 'Services', contentId: 'services' },
];

// yacko.software@gmail.com
const EmailButton = () => {
  return (
    <Button
      variant="primary"
      // href='mailto:yacko.software@gmail.com?subject=Software development'
    >
      EMAIL US
    </Button>
  );
};

const MobileNavbar = () => {
  const tl = useRef<null | Timeline>(null);
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { contextSafe } = useGSAP(() => {
    tl.current = gsap
      .timeline({ paused: true, defaults: { duration: 0.1 } })
      .to(
        '.menu-icon > path:first-child',
        {
          x: 1,
          attr: { d: 'M8,2 L2,8' },
          color: '#ff6961',
          ease: Power2.easeInOut,
        },
        'start'
      )
      .to(
        '.menu-icon > path:nth-child(2)',
        {
          autoAlpha: 0,
        },
        'start'
      )
      .to(
        '.menu-icon > path:nth-child(3)',
        {
          attr: { d: 'M8,8 L2,2' },
          color: '#ff6961',
          x: 1,
          ease: Power2.easeInOut,
        },
        'start'
      )
      .to('.mobile-menu-open', {
        autoAlpha: 1,
        height: '100%',
      })
      .to('.mobile-menu-links-wrapper > button:first-child', {
        height: 'auto',
        autoAlpha: 1,
      })
      .to('.mobile-menu-links-wrapper > button:nth-child(2)', {
        height: 'auto',
        autoAlpha: 1,
      })
      .to('.mobile-menu-links-wrapper > button:nth-child(3)', {
        height: 'auto',
        autoAlpha: 1,
      })
      .to('.mobile-menu-links-wrapper > button:nth-child(4)', {
        height: 'auto',
        autoAlpha: 1,
      })
      .to('.email-button', {
        autoAlpha: 1,
      })
      .to('.contact-button', {
        autoAlpha: 1,
      });
  });

  const toggleMenu = contextSafe(() => {
    setIsMenuOpen((prev) => !prev);
    !isMenuOpen ? tl.current?.play() : tl.current?.reverse();
  });

  useOverflow(isMenuOpen);

  return (
    <>
      <div className="z-10 flex flex-row justify-between rounded-lg bg-blue-dark-1/80 px-4 py-5 backdrop-blur-md">
        <div className="flex-one-line w-full justify-between gap-x-5 md:px-20">
          <button
            type="button"
            onClick={() => router.push(RoutePath.Home)}
            className="button-reset text-secondary flex-one-line"
          >
            <LogoIcon className="w-12" size={48} />
          </button>

          <Button onClick={toggleMenu} variant="icon">
            <MenuIcon className="menu-icon" size={36} />
          </Button>
        </div>
      </div>

      <div className="mobile-menu-open bg-primary/80 fixed bottom-0 left-0 top-[100px] z-10 h-0 w-full overflow-hidden opacity-0 backdrop-blur-md ">
        <div className="mobile-menu-links-wrapper flex flex-shrink-0 flex-col justify-center gap-5 px-5">
          {NavbarRoutes.map((route) => {
            const handleScroll = () => {
              const element = document.getElementById(route.contentId);
              element?.scrollIntoView({ behavior: 'smooth' });
              toggleMenu();
            };

            return (
              <button className="h-0 overflow-hidden" key={route.id} onClick={handleScroll}>
                {route.name}
              </button>
            );
          })}
          <button
            className="h-0 overflow-hidden"
            onClick={() => {
              router.push(RoutePath.OpenSource);
              toggleMenu();
            }}
          >
            Open Source
          </button>

          <EmailButton />

          <Button
            className="contact-button overflow-hidden opacity-0 duration-75 active:bg-white active:text-black"
            variant="secondary"
          >
            CONTACT US
          </Button>
        </div>
      </div>
    </>
  );
};

const DesktopNavbar = () => {
  return (
    <div className="z-10 flex flex-row justify-between rounded-lg bg-blue-dark-1/80 py-5 backdrop-blur-md lg:px-20">
      <div className="flex-one-line w-1/2 justify-between gap-x-5">
        <button type="button" className="button-reset text-secondary flex-one-line flex gap-1">
          <LogoIcon size={48} color="#8B50FF" />
          <span className="text-2xl">YACKO</span>
        </button>

        <div className="flex-one-line flex-shrink-0 gap-5">
          {NavbarRoutes.map((route) => {
            const handleScroll = () => {
              const element = document.getElementById(route.contentId);
              element?.scrollIntoView({ behavior: 'smooth' });
            };

            return (
              <button key={route.id} onClick={handleScroll}>
                {route.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex-one-line gap-x-5">
        <EmailButton />

        <Button variant="secondary" onClick={() => {}}>
          CONTACT US
        </Button>
      </div>
    </div>
  );
};

export function Navbar() {
  const { width } = useWindowSize();

  const isMobile = width <= 1100;

  return (
    <div className="fixed left-1/2 top-4 z-10 w-full -translate-x-1/2 px-4 md:max-w-[1320px]">
      {isMobile ? <MobileNavbar /> : <DesktopNavbar />}
    </div>
  );
}
