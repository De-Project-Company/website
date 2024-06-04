import React from 'react';

interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const page = ({ searchParams: { name, id } }: PageProps) => {
  console.log(name);
  console.log(id);
  return <div>page</div>;
};

export default page;
