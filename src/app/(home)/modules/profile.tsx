'use client';
import React, { useEffect, useState } from 'react';
import { getMemberById } from '@/action';
import Image from 'next/image';
import { SlCalender } from 'react-icons/sl';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/utils';
import Jumbotron from '@/components/ui/jumbotron';
import { Member } from '@/types';

interface ProfileProps {
  id: string;
}

const Profile: React.FC<ProfileProps> = ({ id }) => {
  const [member, setMember] = useState<Member | null>(null);

  // fetch the unique id
  useEffect(() => {
    const fetchById = async () => {
      try {
        const res = await getMemberById(id);
        if (res && res.member) {
          setMember(res.member);
        }
      } catch (error) {
        console.error('Failed to fetch member data:', error);
      }
    };

    fetchById();
  }, []);

  return (
    <>
      {/*jumbotron*/}
      <Jumbotron className="bg-[url('/members/header_image.png')]" />

      {/*content*/}
      <div className="context grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-8 px-10 md:px-0 md:w-[70%] mx-auto pb-10 ">
        {/* overlapping card*/}
        <div className="overlapping-card bg-[#F3F8FF]  w-[70%] md:w-[100%] mx-auto -translate-y-60 rounded-lg shadow-md pt-4 pb-6">
          <div className="wrapper flex flex-col items-center space-y-4">
            <div className=" rounded-full relative border-0 overflow-hidden h-40 w-40">
              <Image
                className="object-cover h-full w-full"
                src={` ${member?.image ? member?.image : 'https://ui-avatars.com/api/?name=${member?.user?.email}&background=random'}`}
                alt={`profile-image`}
                height={100}
                width={100}
              />
            </div>

            <h3 className="font-bold ">{member?.fullName}</h3>
            <h3>{member?.department}</h3>
            <h3>{member?.address ? member?.address : 'Abuja, nigeria'}</h3>

            <button
              type="submit"
              className="bg-[#DBE9FF]/50 px-3 py-2 font-bold hover:bg-[[#DBE9FF] hover:shadow-sm my-4"
            >
              Hire {member?.fullName}
            </button>

            <div className="mt-4">
              <div className="flex items-center space-x-3">
                <SlCalender />
                <span> Full Time / Freelance</span>
              </div>
              <div className="flex items-center space-x-2 my-3">
                <SlCalender />
                <span> Member Since : July 2, 2023</span>
              </div>
              <div className="flex items-center space-x-2">
                <SlCalender />
                <span> status: {member?.status}</span>
              </div>
            </div>

            {/*<h4>{member.}</h4>*/}
          </div>
        </div>

        {/*Tab section*/}
        <Tabs defaultValue="projects" className={cn('relative  md:col-span-2')}>
          <TabsList className={cn('relative')}>
            <TabsTrigger value="projects" className={cn('mr-20')}>
              Projects
            </TabsTrigger>
            <TabsTrigger value="publication">Publications</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">loading ....</TabsContent>
          <TabsContent value="publication">Never loading ....</TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Profile;
