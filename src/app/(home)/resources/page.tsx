'use client';
import { Card, CardContent } from '@/components/ui/card';
import { resources } from '@/constants';
import { cn } from '@/utils';
import Image from 'next/image';
import Jumbotron from '@/components/ui/jumbotron';

const ResourcesPage = () => {
  return (
    <>
      {/*jumbotron*/}

      <Jumbotron className="bg-[url('/resources/resources_page.png')]" />
      {/*  content*/}
      <div className="px-4 md:px-0 md:w-[70%] mx-auto mt-8 mb-12">
        {resources.map(data => (
          <Card
            key={data.id}
            className={cn(
              'mb-5 md:mb-3 cursor-pointer transition-all delay-50  bg-white  hover:bg-gray-100 hover:shadow-xl md:hover:shadow-none py-3 md:py-7 border-0 border-b-2 md:shadow-none  rounded-lg md:rounded-none  last-of-type:border-b-0 '
            )}
          >
            <CardContent
              className={cn('flex md:space-x-4 flex-row md:items-center')}
            >
              {/*left*/}
              <div className="image-wrapper w-full h-[200px] rounded-t-xl md:h-[220px] overflow-hidden md:w-[228px] mr-1">
                <Image
                  alt={`${data.image}`}
                  src={`${data.image}`}
                  className="w-full h-full object-contain"
                  height={100}
                  width={100}
                />
              </div>

              {/*  right*/}
              <div className="space-y-2 md:space-y-5">
                <h2 className="font-bold mt-2 md:mt-0">{data.title}</h2>
                <h3>{data.fileType.toUpperCase()}</h3>
                <div className="flex items-center ">
                  <div className="mr-3 image-wrapper h-[15px] w-[15px]  md:h-[20px] md:w-[20px] rounded-full overflow-hidden">
                    <Image
                      src={data.authorProfileImage}
                      alt={data.title}
                      className="w-full h-full object-cover object-center"
                      height={100}
                      width={100}
                    />
                  </div>

                  <h2>{data.authorName}</h2>
                </div>
                <p className="text-[#FD8827] hover:text-[] font-medium mt-2 md:mt-0">
                  {data.hearMedium}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ResourcesPage;
