import { Section } from '@/components/navigation/NavContent';
import * as React from 'react';

const ForumPage: React.FC = () => {
  const firstSection = [
    {
      title: 'General Discussion',
      description:
        'For all things tech and community-related. A space to discuss news, trends, and ideas.'
    },
    {
      title: 'Introductions',
      description:
        'New to Starters House? Introduce yourself and meet the community.'
    },
    {
      title: 'Tech Talk',
      description:
        'Deep dives into specific technologies, programming languages, and tools.'
    },
    {
      title: 'Project Showcase',
      description:
        'Share your latest projects, get feedback, and inspire others.'
    }
  ];

  const secondSection = [
    {
      title: 'Learning Resources',
      description:
        'Discuss tutorials, courses, books, and other learning materials.'
    },
    {
      title: 'Career Advice',
      description:
        'Exchange tips on career development, job hunting, and professional growth.'
    },
    {
      title: 'Event Discussions',
      description:
        'Talk about past and upcoming events, arrange meetups, and share experiences.'
    },
    {
      title: 'Off-Topic Lounge',
      description:
        'A place for conversations that don’t fit elsewhere. Relax and enjoy the camaraderie.'
    }
  ];

  return (
    <div className="flex flex-col pt-5 md:pt-12 pb-4 bg-white rounded-none md:shadow-sm mb-[20px]">
      <div className="flex flex-col px-20 w-full text-base leading-5 text-orange-500 max-md:px-5 max-md:max-w-full">
        <header className="self-center">
          <h1 className="text-center text-2xl font-semibold">
            Welcome to the Starters House Forums
          </h1>
          <p className="mt-2.5 text-justify text-sky-950 max-md:max-w-full">
            A place to connect, share, and grow with fellow tech enthusiasts.
          </p>
        </header>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between w-full container mt-[40px]">
        <div className="flex flex-col gap-5">
          {firstSection.map(sec => (
            <Section key={sec.title} {...sec} />
          ))}
        </div>
        <div className="flex flex-col gap-5">
          {secondSection.map(sec => (
            <Section key={sec.title} {...sec} />
          ))}
        </div>
      </div>
      <div className="self-center mt-24 text-lg font-medium leading-5 text-center text-zinc-800 max-md:mt-10 max-md:max-w-full">
        These events are just a glimpse of what we offer at Starters House
        Community. Let&apos;s innovate and grow together! 🚀
      </div>
    </div>
  );
};

export default ForumPage;
