import React, { createContext, PropsWithChildren, useContext, useRef, useState } from 'react';

import { ModalLayout } from '@/components/layout/modal';
import { useOverflow } from '@/hooks/overflow';

interface ModalStateSettings {
  isShowing: boolean;
  content?: string | React.ReactNode;
}

interface ModalContext {
  settings: ModalStateSettings;
  provideModalSettings: (changedSettings: ModalStateSettings) => void;
}

const ModalContext = createContext<ModalContext>({
  settings: { isShowing: false, content: '' },
  provideModalSettings: () => {},
});

function useModalProvider() {
  const [settings, setSettings] = useState<ModalStateSettings>({ isShowing: false, content: '' });

  function provideModalSettings(changedSettings?: ModalStateSettings) {
    setSettings((prevState) => {
      return {
        ...prevState,
        ...changedSettings,
      };
    });
  }

  useOverflow(settings.isShowing);

  return {
    provideModalSettings,
    settings,
  };
}

export default function ModalProvider({ children }: Readonly<PropsWithChildren>) {
  const modalRef = useRef(null);
  const modal = useModalProvider();

  const isModalVisible = modal.settings.isShowing && modal.settings.content;

  return (
    <ModalContext.Provider value={modal}>
      {isModalVisible && <ModalLayout ref={modalRef}>{modal.settings.content}</ModalLayout>}
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
