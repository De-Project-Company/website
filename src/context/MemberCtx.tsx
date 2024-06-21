'use client';

import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useLayoutEffect
} from 'react';

interface MemberCreationProps {
  memberregistrationData: MemberCreationsProps;
  setmemberregistrationData: React.Dispatch<
    React.SetStateAction<MemberCreationsProps>
  >;

  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  secondForm: MemberCreationsTwoProps;
  setsecondForm: React.Dispatch<React.SetStateAction<MemberCreationsTwoProps>>;
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

interface MemberCreationsTwoProps {
  image: string;
  stack: string[];
  intrests: string;
  portfolio: string;
  experience: string;
  expetations: string;
  commetmentlevel: number;
  programminglanguage: string[];
  whatdoyoubringtothetable: string;
  mentor: boolean;
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

const defaultMemberData2: MemberCreationsTwoProps = {
  image: '', //
  stack: [''],
  intrests: '', //
  portfolio: '', //
  experience: '', //
  expetations: '', //
  commetmentlevel: 0, //
  programminglanguage: [''],
  whatdoyoubringtothetable: '', //
  mentor: false //
};

export const MemberContext = createContext<MemberCreationProps | undefined>(
  undefined
);

const MemberContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [memberregistrationData, setmemberregistrationData] =
    useState<MemberCreationsProps>(defaultMemberData);
  const [secondForm, setsecondForm] =
    useState<MemberCreationsTwoProps>(defaultMemberData2);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useLayoutEffect(() => {
    const currentPage = window.localStorage.getItem('currentPage');

    if (currentPage) {
      setCurrentPage(Number(currentPage));
    }
  }, []);

  const value = useMemo(
    () => ({
      memberregistrationData,
      setmemberregistrationData,
      currentPage,
      setCurrentPage,
      secondForm,
      setsecondForm
    }),
    [memberregistrationData, currentPage, secondForm]
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
