'use client';
import React, { ReactNode } from 'react';
import { cn } from '@/utils';

type JumbotronProps = {
  className: string | undefined;
  children?: ReactNode | undefined;
};

const Jumbotron = ({ className, children }: JumbotronProps) => {
  return (
    <div className={cn('bg-no-repeat h-[343px] relative', className)}>
      {children}
    </div>
  );
};

export default Jumbotron;
