'use client';

import React from 'react';
import ProjectDetails from '@/app/(home)/modules/Project';

interface PageProp {
  searchParams: {
    [id: string]: string;
  };
}
const page = ({ searchParams: { id } }: PageProp) => {
  return (
    <div>
      <ProjectDetails id={id} />
    </div>
  );
};

export default page;
