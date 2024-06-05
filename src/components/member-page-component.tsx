'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

import { MembersCard } from '@/app/(home)/modules';
import { memberData } from '@/data/dummy-members-data';

const memberStatus = ['Active', 'Past'];

const MembersPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [memberType, setMemberType] = useState(memberStatus[0]);
  const membersRef = useRef<HTMLDivElement>(null);

  const handleFilter = (status: string) => {
    setCurrentPage(1);
    setMemberType(status);
  };

  const filteredMembers = memberData.filter(
    ({ isActive }) =>
      (memberType === 'Active' && isActive) ||
      (memberType === 'Past' && !isActive)
  );

  const itemsPerPage = 9;
  const totalItems = filteredMembers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  const displayedMembers = filteredMembers.slice(startIndex, endIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    membersRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const changePage = (direction: 'next' | 'prev') => {
    if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
    membersRef?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="pb-40">
      <div className="w-full max-h-[343px] relative mb-8 aspect-video">
        <Image
          loading="lazy"
          src="/member-hero.png"
          className="object-cover object-left-top brightness-[.4] sepia-1"
          alt="hero image"
          fill
        />

        <div
          className="flex items-center gap-3 left-0 right-0 max-w-96 mx-auto bottom-9 font-bold text-[20px] 
               md:text-[24px] text-white absolute"
        >
          <p>Home</p>
          <div className="w-4 h-4 relative">
            <Image
              loading="lazy"
              src="/double-arrow-right.png"
              className="object-cover object-left-top sepia-1"
              alt="hero image"
              fill
            />
          </div>

          <p>Members</p>
          <div className="w-4 h-4 relative">
            <Image
              loading="lazy"
              src="/double-arrow-right.png"
              className="object-cover object-left-top sepia-1"
              alt="hero image"
              fill
            />
          </div>

          <p className=" text-nav-text-active">{memberType}</p>
        </div>
      </div>

      <div className="container">
        <div className="flex gap-4 justify-between w-full max-w-[500px]">
          {memberStatus.map((status, i) => (
            <button
              key={i}
              onClick={() => handleFilter(status)}
              className={`text-[#052759] font-bold text-[20px] md:text-[24px] border-b-[5px]  py-4 ${memberType === status ? 'border-[#0D6EFD]' : ''}`}
            >
              {status} Members
            </button>
          ))}
        </div>

        <div
          className="flex flex-wrap justify-center lg:justify-start pt-10 gap-6"
          ref={membersRef}
        >
          {displayedMembers.map((data, index) => (
            <MembersCard
              key={data.id}
              id={index}
              fullName={data.name}
              image={data.image}
              stack={data.stack}
              bio={
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quibusdam exercitationem accusamus labore modi eum numquam, repellat sapiente, iure impedit quis eos non molestiae enim aliquam possimus quo deleniti unde.'
              }
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex gap-4 my-12 justify-between md:justify-center lg:justify-end">
          <button
            onClick={() => changePage('next')}
            className=" disabled:opacity-30 disabled:cursor-not-allowed "
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon width={34} height={34} fill="#063172" />
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={`font-bold text-[18px] h-10 w-10 aspect-square hidden md:block border-1 transition-colors border-[#B4D2FE] rounded-1/2 ${currentPage === i + 1 && 'bg-[#B4D2FE]'} `}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => changePage('next')}
            disabled={currentPage === totalPages}
            className=" disabled:opacity-30 disabled:cursor-not-allowed "
          >
            <ChevronRightIcon width={34} height={34} fill="#063172" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
