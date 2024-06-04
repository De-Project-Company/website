import React from 'react';
import Jumbotron from '@/components/ui/jumbotron';
import { cn } from '@/utils';

const page = () => {
  return (
    <>
      <Jumbotron
        className={cn("bg-[url('/members/header_image.png')]")}
      ></Jumbotron>

      {/*  Content */}
      <p> Profile page</p>
    </>
  );
};

export default page;
