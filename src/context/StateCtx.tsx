'use client';

import React, { createContext, useContext, useEffect, useMemo } from 'react';

interface StateContextProps {
  showMobileMenu: boolean;
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
  ShowOtp: boolean;
  setShowOtp: React.Dispatch<React.SetStateAction<boolean>>;
  errorModal: boolean;
  setOpenErrorModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StateContext = createContext({} as StateContextProps);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const [ShowOtp, setShowOtp] = React.useState(false);
  const [errorModal, setOpenErrorModal] = React.useState(false);

  const isAnyModalOpen = ShowOtp || errorModal;

  const anyMobileSidebarOpen = showMobileMenu;

  // const isMobileDevice = () => {
  //   return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  //     navigator?.userAgent
  //   );
  // };

  useEffect(() => {
    if (anyMobileSidebarOpen || isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowMobileMenu(false);
        setShowOtp(false);
        setOpenErrorModal(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [anyMobileSidebarOpen, isAnyModalOpen]);

  const value = useMemo(
    () => ({
      showMobileMenu,
      setShowMobileMenu,
      ShowOtp,
      setShowOtp,
      errorModal,
      setOpenErrorModal
    }),
    [showMobileMenu, ShowOtp, errorModal]
  );

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateCtx = () => {
  const ctx = useContext(StateContext);

  if (!ctx) {
    throw new Error('useStateCtx must be used within a StateContextProvider');
  }
  return ctx;
};

export default StateContextProvider;
