'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Member } from '@/types';
import useInView from '@/hooks/useInView';
import { cn, encryptString, shrinkString } from '@/utils';
import { handleMouseEnter } from '@/utils/text-effect';
import { motion } from 'framer-motion';
import { ArrowRight2 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { InfiniteMovingCards } from './scrolllingimagess';
import { useState, useEffect } from 'react';
import { getallmembers } from '@/action';

const HeroSection = () => {
  return (
    <section className="">
      <div className="flex overflow-hidden relative flex-col justify-center text-4xl font-medium">
        <div className="flex overflow-hidden relative z-10 flex-col items-start max-md:px-5 max-md:max-w-full">
          <Image
            loading="lazy"
            src="/homeimage.png"
            className="object-cover absolute inset-0 size-full"
            alt="hero image"
            layout="fill"
          />
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="my-[50px] container relative h-full min-h-[500px] justify-center flex flex-col"
          >
            <div className="tracking-tighter text-white text-[156px] font-rama">
              Starters House
            </div>
            <div className="max-w-[663px] -mt-[30px] w-full flex flex-col font-jaka">
              <span className="text-[48px] font-podkova text-white text-center w-full">
                <br /> Community
              </span>
              <div className=" text-orange-400 leading-[94%] text-center mt-3 font-nunito">
                &quot;Where Tech Enthusiasts Thrive!&quot;
              </div>
              <div className="tracking-wide text-white text-[36px] mt-[40px] max-md:my-10 max-md:max-w-full">
                Discover a place where tech enthusiasts from all walks of life
                come together to share, learn, and grow.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AtGlance = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="flex justify-center items-center py-8 bg-[#FFEAD9] my-[20px] bg-opacity-30"
    >
      <div className="w-full container">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full ">
            <div className="flex flex-col justify-center self-stretch my-auto font-medium text-sky-950 relative">
              <div className="text-base tracking-widest leading-5 text-center text-orange-500 ">
                Starters House Community
              </div>
              <div className="flex gap-2.5 mt-5 text-6xl leading-[57.6px] max-md:text-4xl relative">
                <div className="arrow">
                  <span />
                  <span />
                  <span />
                </div>
                <div
                  onMouseEnter={handleMouseEnter}
                  data-value="At a Glance"
                  className="max-md:text-4xl font-rama text-center w-full"
                >
                  At a Glance
                </div>
              </div>
              <div className="mt-5 text-2xl tracking-widest leading-8 text-center">
                Explore Starters House by Numbers
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[65%] max-md:ml-0 max-md:w-full">
            <div className="flex-wrap grow justify-center content-start max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                {glance.map(glance => (
                  <GlanceCard
                    key={glance.text}
                    amount={glance.amount}
                    text={glance.text}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const GlanceCard = ({ amount, text }: { amount: number; text: string }) => (
  <div className="w-[218px] h-[246px] flex flex-col items-center justify-center bg-orange-200 font-nunito rounded-3xl">
    <div className="flex flex-col items-center justify-center">
      <div className="mt-5 text-2xl font-medium text-center text-sky-950">
        over
      </div>
      <div
        className={cn(
          'text-5xl leading-[57.6px] max-md:text-4xl font-semibold',
          amount === 5 ? 'text-sky-950' : 'text-orange-500'
        )}
      >
        {amount}+
      </div>
      <div className="text-[22px] p-4 font-medium text-center text-sky-950">
        {text}
      </div>
    </div>
  </div>
);

const PillarSection = () => {
  return (
    <motion.section
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col justify-center items-center bg-sky-50 my-[20px]"
    >
      <div className="custom:container px-[10px] pb-20">
        <div className="flex flex-col justify-center items-center p-20">
          <div className="flex w-full items-center max-w-[658px] justify-center">
            <div className="arrow">
              <span />
              <span />
              <span />
            </div>
            <div className="mt-7 text-6xl text-center leading-[57.6px] text-sky-950 max-md:max-w-full max-md:text-4xl w-full font-rama">
              Our Pillars of Strenght
            </div>
          </div>
          <div className="custom:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 6 my-12 gap-y-[70px] w-full hidden ">
            {pillars.map(pillar => (
              <PillarCard {...pillar} key={pillar.id} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 6 my-12 gap-y-[70px] w-full custom:hidden">
          {pillars.map(pillar => (
            <PillarCard {...pillar} key={pillar.id} />
          ))}
        </div>
        <div className="mt-[20px] text-2xl font-medium leading-10 text-center text-neutral-950 max-md:mt-10 max-md:max-w-full">
          **Together, Let&apos;s Start Something Amazing!**
        </div>
      </div>
    </motion.section>
  );
};

const pillars = [
  {
    id: 1,
    image: '/pillar1.png',
    title: 'Community',
    text: 'Starters House Community is a place where tech enthusiasts from all walks of life come together to share, learn, and grow.'
  },
  {
    id: 2,
    image: '/pillar2.png',
    title: ' Inclusivity',
    text: 'Unity in Diversity: Celebrating Every Voice in Our Tech Family.'
  },
  {
    id: 3,
    image: '/pillar2.png',
    title: 'Collaboration',
    text: 'Together We Innovate: Fostering Collaborative Projects and Initiatives'
  },
  {
    id: 4,
    image: '/pillar4.png',
    title: ' Excellent Service',
    text: 'Looking for top tech talent or need assistance with your tech project? Connect with Top Tech Talent through Starters'
  },
  {
    id: 5,
    image: '/pillar5.png',
    title: ' Continuous Learning',
    text: 'Elevate Your Tech Journey: Embrace Continuous Learning with Starters'
  },
  {
    id: 6,
    image: '/pillar6.png',
    title: '  Join Us',
    text: 'Embark on a Tech Adventure: Grow, Collaborate, and Discover with Starters'
  }
];

const PillarCard = ({
  image,
  title,
  text
}: {
  image: string;
  title: string;
  text: string;
}) => {
  const CardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: CardRef, once: false });
  return (
    <div
      ref={CardRef}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}
      className="pillar-card min-w-[320px] min-h-[413px] max-w-[320px]"
    >
      <div className="pillar-card2 flex flex-col items-center justify-center min-w-[320px] min-h-[413px]">
        <Image src={image} alt={title} width={112} height={102} />
        <div className="mt-5 text-2xl font-medium text-center text-sky-950 font-worksans">
          {title}
        </div>
        <div className="text-[18px] p-4 font-medium text-center text-black">
          {shrinkString({
            str: text,
            len: 100
          })}
        </div>
        <Link
          href="/"
          className="flex gap-3 mt-6 text-orange-400 leading-[104%]"
        >
          <div className="my-auto">View more</div>
          <ArrowRight2 />
        </Link>
      </div>
    </div>
  );
};
const glance = [
  { amount: 2, text: 'Projects' },
  { amount: 5, text: 'Members' },
  { amount: 10, text: 'Customer satisfaction rate' }
];

const FaqSection = () => {
  return (
    <section className="overflow-hidden my-[20px]">
      <div className="flex justify-center items-center bg-orange-50">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 container py-[50px]">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full"
          >
            <Image
              src="/faqsection.png"
              alt="illustration"
              className="self-stretch my-auto w-full aspect-[0.99] max-md:mt-10 max-md:max-w-full"
              width={616}
              height={622}
            />
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full"
          >
            <div className="flex flex-col grow text-base font-medium text-neutral-900 max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl leading-8 text-center text-orange-500 max-md:max-w-full">
                As a Community
              </div>
              <div className="flex gap-2.5 mt-5 text-6xl leading-[57.6px] text-sky-950 max-md:flex-wrap max-md:text-4xl">
                <div className="arrow">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="max-md:text-4xl font-rama w-full text-center">
                  Starters House
                </div>
              </div>
              <div className="mt-6 text-sm leading-5 text-justify max-md:max-w-full">
                At Starters House, tech enthusiasts unite for connection,
                learning, and growth. Whether you&apos;re a seasoned pro or new
                to the scene, our supportive community offers a welcoming space
                to collaborate and thrive. Join us and make Starters House your
                home in the tech world.
              </div>
              <Accordion
                type="single"
                collapsible
                className="w-full space-y-5 mt-5"
              >
                {faq.map(faq => (
                  <AccordionItem value={faq.question} key={faq.id}>
                    {' '}
                    <AccordionTrigger className="hover:no-underline">
                      <div className="flex items-center justify-center gap-3 text-[16px] font-nunito font-bold">
                        <div className="shrink-0 my-auto w-2 h-2 bg-orange-500 rounded-full" />
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="text-sm font-worksans">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <button className="justify-center items-center px-3 py-3 mt-14 text-lg font-semibold leading-5 text-center text-white bg-orange-400 rounded font-poppins">
                Join Startres House
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const faq = [
  {
    id: 1,
    question: 'Welcoming Tech Haven:',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptas voluptatibus! Consequatur eligendi repudiandae, praesentium sapiente fugiat dolorem? Dignissimos tempore corporis, nemo quia deleniti culpa vero fuga explicabo velit ad!'
  },
  {
    id: 2,
    question: 'Colaborative Spirit:',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptas voluptatibus! Consequatur eligendi repudiandae, praesentium sapiente fugiat dolorem? Dignissimos tempore corporis, nemo quia deleniti culpa vero fuga explicabo velit ad!'
  },
  {
    id: 3,
    question: 'Inclusive Atmosphere:',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptas voluptatibus! Consequatur eligendi repudiandae, praesentium sapiente fugiat dolorem? Dignissimos tempore corporis, nemo quia deleniti culpa vero fuga explicabo velit ad!'
  },
  {
    id: 4,
    question: 'Continuous Learning:',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptas voluptatibus! Consequatur eligendi repudiandae, praesentium sapiente fugiat dolorem? Dignissimos tempore corporis, nemo quia deleniti culpa vero fuga explicabo velit ad!'
  },
  {
    id: 5,
    question: 'Diverse Perspective:',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptas voluptatibus! Consequatur eligendi repudiandae, praesentium sapiente fugiat dolorem? Dignissimos tempore corporis, nemo quia deleniti culpa vero fuga explicabo velit ad!'
  },
  {
    id: 6,
    question: 'Supportive Environment:',
    answer:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, voluptas voluptatibus! Consequatur eligendi repudiandae, praesentium sapiente fugiat dolorem? Dignissimos tempore corporis, nemo quia deleniti culpa vero fuga explicabo velit ad!'
  }
];

const Trends = () => {
  const firstBlog = blogdetails.slice(0, 1)[0];
  const otherBlogs = blogdetails.slice(1);
  return (
    <section className="overflow-hidden my-20">
      <div className="flex flex-col py-14 bg-sky-50 relative">
        <div
          className="self-end mt-72 max-w-full aspect-[0.59] w-[644px] max-md:mt-10 absolute bg-no-repeat bg-cover"
          style={{ backgroundImage: 'url(/arrow.png)' }}
        />
        <div className="container ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col w-[50%] max-md:ml-0"
            >
              <div className="flex flex-col grow justify-center">
                <div className="w-full bg-blue-900 text-base py-2 px-4 text-white">
                  3 mins Read
                </div>
                <div className="flex flex-col justify-center bg-blue-800 max-md:max-w-full">
                  <Image
                    src={`/blog/blog${firstBlog.id}.png`}
                    alt="index"
                    height={516}
                    width={680}
                    className="w-full aspect-[0.93] max-md:max-w-full max-w-[680px] max-h-[516px]"
                  />
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                delay: 0.5,
                duration: 0.75,
                ease: [0.16, 1, 0.3, 1]
              }}
              className="flex flex-col ml-5 w-[50%] max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col items-start mt-2.5 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-2.5 self-stretch text-6xl leading-[57.6px] text-sky-950 max-md:flex-wrap max-md:text-4xl px-[40px]">
                  <div className="arrow">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div
                    onMouseEnter={handleMouseEnter}
                    data-value="Starters Trends"
                    className="max-md:text-4xl font-rama w-full text-center"
                  >
                    Starters Trends
                  </div>
                </div>
                <div className="mt-16 ml-5 max-md:mt-10 max-md:max-w-full space-y-3">
                  {otherBlogs.map(blog => (
                    <BlogCard {...blog} key={blog.id} />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="container relative"
        >
          <div className="flex justify-center items-center py-6 mt-16 max-w-full text-6xl text-center leading-[108.8px] text-neutral-950 w-[788px] max-md:px-5 max-md:mt-10 max-md:text-4xl">
            <div className="flex gap-4  max-md:text-4xl">
              <div className="arrow">
                <span />
                <span />
                <span />
              </div>
              <div
                onMouseEnter={handleMouseEnter}
                data-value="Events & Activities"
                className="max-md:text-4xl text-center font-rama w-full pl-8"
              >
                Events & Activities
              </div>
            </div>
          </div>
          <div className="justify-center px-8 mt-4 w-full max-md:px-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <Image
                  src="/events2.png"
                  alt="event"
                  width={434}
                  height={430}
                  className="w-full aspect-square  max-md:max-w-full rounded-2xl"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <Image
                  src="/events2.png"
                  alt="event"
                  width={434}
                  height={430}
                  className="w-full aspect-square  max-md:max-w-full rounded-2xl"
                />
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <Image
                  src="/events2.png"
                  alt="event"
                  width={434}
                  height={430}
                  className="w-full aspect-square  max-md:max-w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
          <div className="w-full items-center justify-center flex">
            <button className="justify-center capitalize font-nunito items-center self-center px-3 py-1 mt-16 max-w-full text-lg font-semibold leading-5 text-center text-white bg-orange-400 rounded w-[522px] max-md:px-5 max-md:mt-10">
              view all
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const blogdetails = [
  {
    id: 1,
    writer: 'divine favour',
    title: 'Importance of user fedback In UI/UX design',
    date: new Date()
  },
  {
    id: 2,
    writer: 'Ojuolaipe Adekan',
    title: '7 must have skills for a designer',
    date: new Date()
  },
  {
    id: 3,
    writer: 'Ojuolaipe Adekan',
    title: '7 must have skills for a designer',
    date: new Date()
  },
  {
    id: 4,
    writer: 'Ojuolaipe Adekan',
    title: '7 must have skills for a designer',
    date: new Date()
  }
];

const BlogCard = ({
  id,
  writer,
  title
}: {
  writer: string;
  title: string;
  date: Date;
  id: number;
}) => {
  const CardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: CardRef, once: false });
  return (
    <div
      ref={CardRef}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}
      className="w-full max-w-[485px] max-h-[180px]"
    >
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex">
          <div className="flex flex-col">
            <Image
              src={`/blog/blog${id}.png`}
              alt={title}
              width={242}
              height={180}
              className="max-w-[242px] max-h-[180px] rounded-xl self-start w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch px-5 my-auto text-lg font-medium max-md:mt-5">
              <div className="tracking-normal leading-7 text-neutral-950">
                {title}
              </div>
              <div className="mt-4 text-base tracking-normal leading-6 text-sky-950">
                <span className="text-sky-950">By </span>
                <span className=" text-sky-950 font-nunito"> {writer}</span>
              </div>
              <div className="mt36 font-medium text-orange-400 text-base">
                Read More
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MemberSection = () => {
  const [members, setMembers] = useState<Member[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await getallmembers();
      setMembers(res.account);
    };

    fetchData();

    return () => {};
  }, []);
  return (
    <section
      className="flex flex-col pb-20 text-center text-white relative"
      style={{ backgroundImage: 'url(/members.png)' }}
    >
      <div className="container">
        <div className="flex flex-col justify-center items-center p-20">
          <div className="flex flex-col w-full items-center max-w-[658px] justify-center">
            <span className="text-base font-worksans text-[#FEA153]">
              Those that make things happen in starters house{' '}
            </span>
            <div className="flex w-full">
              <div className="arrow">
                <span />
                <span />
                <span />
              </div>
              <div className="mt-7 text-6xl text-center leading-[57.6px] text-sky-950 max-md:max-w-full max-md:text-4xl w-full font-rama">
                Starters Talents
              </div>
            </div>
          </div>
          <Carousel className="w-full my-12">
            <CarouselContent className="">
              {members.map(member => (
                <CarouselItem
                  key={member.id}
                  className=" md:basis-1/2 lg:basis-1/3"
                >
                  <MembersCard {...member} key={member.id} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <InfiniteMovingCards
        items={membersImage}
        direction="right"
        speed="normal"
        pauseOnHover={false}
      />
      {/* <Link href="/members" className=''>view all</Link> */}
      <div className="w-full items-center justify-center flex">
        <button className="justify-center capitalize font-nunito items-center self-center px-3 py-1 mt-16 max-w-full text-lg font-semibold leading-5 text-center text-white bg-orange-400 rounded w-[522px] max-md:px-5 max-md:mt-10">
          view all
        </button>
      </div>
    </section>
  );
};

export const MembersCard = ({
  image,
  fullName,
  bio,
  department,
  email,
  id,
  preferedName
}: Member) => {
  const CardRef = React.useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: CardRef, once: false });
  return (
    <div
      ref={CardRef}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'transform 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}
      className="max-w-sm bg-[#0A58CA] text-white shadow-xl rounded-lg"
    >
      <div className="rounded-t-lg h-32 overflow-hidden">
        <Image
          className="object-cover object-top w-full"
          src="/background.png"
          alt="Mountain"
          width={2600}
          height={1046}
          loading="eager"
        />
      </div>
      <div className="mx-auto w-[186px] h-[186px] relative -mt-10 border border-nav-text-active rounded-full overflow-hidden">
        <Image
          src={
            image
              ? image
              : `https://ui-avatars.com/api/?name=${email}&background=random`
          }
          alt={fullName}
          className="object-cover object-center h-[186px]"
          width={186}
          height={186}
        />
      </div>
      <div className="px-4 text-center">
        <div className="text-center mt-2">
          <h2 className="font-semibold font-worksans text-xl text-nav-text-active capitalize">
            {preferedName ? preferedName : fullName}
          </h2>
          <p className="font-podkova text-nav-text text-sm capitalize">
            {department}
          </p>
        </div>
        <p className="text-base font-nunito">
          {shrinkString({ str: bio, len: 150 })}
        </p>
      </div>
      <div className="p-4 mx-8 mt-2">
        <Link
          href={`/members/profile/details?id=${id}&name=${encryptString(fullName)}`}
          className="w-full text-nav-text-active mx-auto block text-center"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export const membersImage = [
  { id: 1, image: '/member1.png' },
  { id: 2, image: '/member2.png' },
  { id: 3, image: '/member1.png' },
  { id: 4, image: '/member2.png' },
  { id: 5, image: '/member2.png' },
  { id: 6, image: '/member1.png' },
  { id: 7, image: '/member2.png' },
  { id: 8, image: '/member1.png' },
  { id: 9, image: '/member2.png' },
  { id: 10, image: '/member2.png' }
];
export {
  AtGlance,
  FaqSection,
  HeroSection,
  MemberSection,
  PillarSection,
  Trends
};
