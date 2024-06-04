'use client';

import React, { createContext, useContext, useMemo, useState } from 'react';

interface MemberCreationProps {
  memberregistrationData: MemberCreationsProps;
  setmemberregistrationData: React.Dispatch<
    React.SetStateAction<MemberCreationsProps>
  >;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

interface MemberCreationsProps {
  fullName: string;
  email: string;
  bio: string;
  address: string;
  whatsappnumber: string;
  image: string;
  preferedName: string;
}

const defaultMemberData: MemberCreationsProps = {
  fullName: '',
  email: '',
  bio: '',
  address: '',
  whatsappnumber: '',
  image: '',
  preferedName: ''
};

export const MemberContext = createContext<MemberCreationProps | undefined>(
  undefined
);

const MemberContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [memberregistrationData, setmemberregistrationData] =
    useState<MemberCreationsProps>(defaultMemberData);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const value = useMemo(
    () => ({
      memberregistrationData,
      setmemberregistrationData,
      currentPage,
      setCurrentPage
    }),
    [memberregistrationData, currentPage]
  );

  return (
    <MemberContext.Provider value={value}>{children}</MemberContext.Provider>
  );
};

export const useMemberCtx = () => {
  const ctx = useContext(MemberContext);

  if (!ctx) {
    throw new Error('useMemberCtx must be used within a MemberContextProvider');
  }
  return ctx;
};

export default MemberContextProvider;
