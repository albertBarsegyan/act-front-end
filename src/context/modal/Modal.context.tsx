'use client';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { ModalLayout } from '@/components/layout/modal';
import { useOverflow } from '@/hooks/overflow';

interface ModalStateSettings {
  isShowing: boolean;
  content?: string | React.ReactNode;
  delay?: number;
  variant?: 'modal' | 'drawer';
}

interface ModalContext {
  settings: ModalStateSettings;
  provideModalSettings: (changedSettings: ModalStateSettings) => void;
}

const ModalContext = createContext<ModalContext>({
  settings: { isShowing: false, content: '', delay: 3000, variant: 'modal' },
  provideModalSettings: () => {},
});

function useModalProvider() {
  const [settings, setSettings] = useState<ModalStateSettings>({
    isShowing: false,
    content: '',
    delay: 3000,
    variant: 'modal',
  });

  function provideModalSettings(changedSettings?: ModalStateSettings) {
    setSettings((prevState) => {
      return {
        ...prevState,
        ...changedSettings,
      };
    });
  }

  useOverflow(settings.isShowing);

  useEffect(() => {
    if (settings.isShowing && settings.delay) {
      const timer = setTimeout(() => {
        provideModalSettings({ isShowing: false });
      }, settings.delay);
      return () => clearTimeout(timer);
    }
  }, [settings.isShowing, settings.delay]);

  return {
    provideModalSettings,
    settings,
  };
}

export default function ModalProvider({ children }: Readonly<PropsWithChildren>) {
  const modal = useModalProvider();

  const closeModal = () => modal.provideModalSettings({ isShowing: false });

  const isModalVisible = modal.settings.isShowing && modal.settings.content;

  return (
    <ModalContext.Provider value={modal}>
      {isModalVisible && (
        <ModalLayout closeDrawer={closeModal} variant={modal.settings.variant}>
          {modal.settings.content}
        </ModalLayout>
      )}
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
}
