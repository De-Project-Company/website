'use client';

import Image from 'next/image';
import { useState } from 'react';
import EventsCard from './events-card';

const eventTypes = ['Upcoming', 'Past'];
const EventsPage = () => {
  const [eventType, setEventType] = useState(eventTypes[0]);

  const handleFilter = (status: string) => {
    setEventType(status);
  };

  return (
    <div className="pb-40">
      <div className="w-full max-h-[343px] relative mb-8 aspect-video">
        <Image
          loading="lazy"
          src="/events-page-hero.png  "
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

          <p>Events</p>
          <div className="w-4 h-4 relative">
            <Image
              loading="lazy"
              src="/double-arrow-right.png"
              className="object-cover object-left-top sepia-1"
              alt="hero image"
              fill
            />
          </div>

          <p className=" text-nav-text-active">{eventType}</p>
        </div>
      </div>

      <div className="container">
        <div className="flex gap-4 justify-between w-full max-w-[500px]">
          {eventTypes.map((status, i) => (
            <button
              key={i}
              onClick={() => handleFilter(status)}
              className={`text-[#052759] font-bold text-[20px] md:text-[24px] border-b-[5px]  py-4 ${eventType === status ? 'border-[#0D6EFD]' : 'border-transparent'}`}
            >
              {status}
            </button>
          ))}
        </div>

        <div>
          {Array.from({ length: 3 }, (_, index) => (
            <EventsCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
