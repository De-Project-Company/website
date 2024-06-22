'use client';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/utils';
import Image from 'next/image';
import Jumbotron from '@/components/ui/jumbotron';
import { useEffect, useState, useTransition } from 'react';
import { getResources } from '@/action';
import Link from 'next/link';

interface Owner {
  fullName: string;
  id: string;
  preferedName: string;
  image: string;
}

interface PubProps {
  id: string;
  title: string;
  description: string;
  owner: Owner;
  image: string;
  link: string;
}

const ResourcesPage = () => {
  const [pubs, setPubs] = useState<PubProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(() => {
      getResources().then(data => {
        // console.log(data);
        const dataA = data?.publication?.publications;
        setPubs(dataA || []);
        setIsLoading(false);
      });
    });
  }, []);

  return (
    <>
      {/* Jumbotron */}
      <Jumbotron className="bg-[url('/resources/resources_page.png')]" />

      {/* Content */}
      <div className="px-4 md:px-0 md:w-[70%] mx-auto mt-8 mb-12">
        {isLoading ? (
          <div className="text-center">Loading...</div>
        ) : (
          pubs.map(data => (
            <Card
              key={data.id}
              className={cn(
                'mb-5 md:mb-3 transition-all delay-50 bg-white hover:bg-gray-100 hover:shadow-xl md:hover:shadow-none py-3 md:py-7 border-0 border-b-2 md:shadow-none rounded-lg md:rounded-none last-of-type:border-b-0'
              )}
            >
              <CardContent
                className={cn('flex md:space-x-4 flex-row md:items-center')}
              >
                {/* Left */}
                <div className="image-wrapper w-full h-[200px] rounded-t-xl md:h-[220px] overflow-hidden md:w-[228px] mr-1">
                  <Image
                    alt={data.title}
                    src={data.image}
                    className="w-full h-full object-contain"
                    height={100}
                    width={100}
                  />
                </div>

                {/* Right */}
                <div className="space-y-2 md:space-y-5">
                  <h2 className="font-bold mt-2 md:mt-0">{data.title}</h2>
                  <h3>{`E-Book`.toUpperCase()}</h3>
                  <div className="flex items-center">
                    <div className="mr-3 image-wrapper h-[15px] w-[15px] md:h-[20px] md:w-[20px] rounded-full overflow-hidden">
                      <Image
                        src={`${data.owner.image? data.owner.image : `https://ui-avatars.com/api/?name=${data?.owner.fullName}&background=random`}`}
                        alt={data.owner.fullName}
                        className="w-full h-full object-cover object-center"
                        height={100}
                        width={100}
                      />
                    </div>
                    <Link className='block' href={`/members/profile/details?id=${data.owner.id}`}>
                      <h2>{data.owner.fullName}</h2>
                    </Link>
                  </div>
                  <Link
                    href={data.link}
                    className="text-[#FD8827] hover:text-[#FD8827] font-medium mt-2 md:mt-0"
                  >
                    Read
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </>
  );
};

export default ResourcesPage;
