'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { cn, shrinkString } from '@/utils';
import { ArrowRight2 } from 'iconsax-react';
import Link from 'next/link';
import { handleMouseEnter } from '@/utils/text-effect';
import useInView from '@/hooks/useInView';

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
      <div className="container">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-12 gap-y-[70px]">
            {pillars.map(pillar => (
              <PillarCard {...pillar} key={pillar.id} />
            ))}
          </div>
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
      className="pillar-card"
    >
      <div className="pillar-card2 flex flex-col items-center justify-center min-w-[360px] min-h-[413px]">
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

export { HeroSection, AtGlance, PillarSection };
