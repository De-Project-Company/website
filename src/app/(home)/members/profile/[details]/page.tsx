'use client';

import React from 'react';
import Profile from '@/app/(home)/modules/profile';

interface PageProps {
  searchParams: {
    [key: string]: string;
  };
}

const page = ({ searchParams: { id } }: PageProps) => {
  return (
    <div>
      <Profile id={id} />
    </div>
  );
};

export default page;
