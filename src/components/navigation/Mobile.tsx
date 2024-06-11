'use client';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useStateCtx } from '@/context/StateCtx';
import { NAV_LINKS, SOCIAL_LINKS } from '@/constants';
import Link from 'next/link';
import { cn } from '@/utils';
import { CloseSquare } from 'iconsax-react';

const MobileNav = () => {
  const { setShowMobileMenu } = useStateCtx();

  return (
    <motion.div
      className={cn(
        'fixed inset-0 w-full h-full md:flex items-center z-[99] overflow-hidden'
      )}
    >
      <div className="area">
        <ul className="circles">
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
      <motion.div
        initial={{ transform: 'translateY(100%)' }}
        animate={{ transform: 'translateY(0%)' }}
        exit={{ transform: 'translateY(100%)' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center gap-8 w-full text-white h-full px-4 md:px-8 py-8 relative"
      >
        <div className="stars">
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
          <div className="star" />
        </div>
        <div className="flex flex-col justify-center items-center gap-8 w-full h-full px-4 md:px-8 py-8 relative">
          <motion.div
            initial={{
              opacity: 1,
              x: 20
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center gap-8 w-full h-full px-4 md:px-8"
          >
            {NAV_LINKS.map(item => (
              <Link
                href={`/${item.link}?path=${item.link}`}
                key={item.label}
                onClick={() => setShowMobileMenu(false)}
                className="w-full uppercase text-3xl md:text-5xl  transition-all p-4  hover:bg-white hover:text-black hover:pl-12 font-cav font-medium"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
          <SocialButton />
          <motion.button
            initial={{
              opacity: 0,
              y: -40
            }}
            exit={{
              opacity: 0,
              y: -40
            }}
            animate={{
              opacity: 1,
              y: 20
            }}
            transition={{ duration: 0.5 }}
            className="absolute top-4 right-4 md:right-12 text-2xl  capitalize cursor-pointer"
            role="button"
            onClick={() => setShowMobileMenu(false)}
          >
            <CloseSquare size="32" />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SocialButton = () => (
  <div className="flex flex-row gap-4">
    {SOCIAL_LINKS.map(link => (
      <Link
        href={link.link}
        key={link.name}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-2xl md:text-3xl hover:scale-105 hover:opacity-75 transition-all"
      >
        <link.icon />
      </Link>
    ))}
  </div>
);

const MOBILENAVBAR = () => {
  const { showMobileMenu } = useStateCtx();
  return <AnimatePresence>{showMobileMenu && <MobileNav />}</AnimatePresence>;
};

export { MobileNav, MOBILENAVBAR };
