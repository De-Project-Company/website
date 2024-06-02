'use client';

import React, { ReactNode, useEffect, useState } from 'react';
import {
  // FiArrowRight,
  // FiBarChart2,
  FiChevronDown
  // FiHome,
  // FiPieChart
} from 'react-icons/fi';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils';
import useWindowHeight from '@/hooks/useDimension';
import useMediaQuery from '@/hooks/use-media-query';
import Link from 'next/link';
import { AboutUs, Events, Formus } from './NavContent';
import { usePathname, useSearchParams } from 'next/navigation';

const Tab = ({
  children,
  tab,
  handleSetSelected,
  selected
}: {
  children: ReactNode;
  tab: number;
  handleSetSelected: (val: number | null) => void;
  selected: number | null;
}) => {
  const searchParams = useSearchParams().get('path');
  const [isActive, setIsActive] = useState('');
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  const activeTab = TabLlink.find(tab => tab.Component === isActive)?.id;

  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={cn(
        'flex items-center gap-1 px-3 py-1.5 text-sm transition-colors',
        selected === tab || activeTab === tab
          ? 'text-nav-text-active'
          : 'text-nav-text'
      )}
    >
      <span>{children}</span>
      <FiChevronDown
        className={cn(
          'transition-transform',
          selected === tab ? 'rotate-180' : ''
        )}
      />
    </button>
  );
};

const Content = ({
  selected,
  dir
}: {
  selected: number | null;
  dir: null | 'l' | 'r';
}) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8
      }}
      animate={{
        opacity: 1,
        y: 0
      }}
      exit={{
        opacity: 0,
        y: 8
      }}
      className={cn('absolute top-[calc(100%_+_2px)] z-[100]')}
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map(t => {
        return (
          <div className="overflow-hidden" key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === 'l' ? 100 : dir === 'r' ? -100 : 0
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: 'easeInOut' }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }: { selected: number | null }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById('overlay-content');

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: 'polygon(0 0, 100% 0, 50% 50%, 0% 100%)'
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl border border-nav-text-active bg-[#fafafd]"
    />
  );
};

const TABS = [
  {
    title: 'About Us',
    Component: AboutUs
  },
  {
    title: 'Forums',
    Component: Formus
  },
  {
    title: 'Events',
    Component: Events
  }
].map((n, idx) => ({ ...n, id: idx + 1 }));

const NavigationBar = () => {
  const scrollHeight = useWindowHeight();
  const [selected, setSelected] = useState<number | null>(null);
  const [dir, setDir] = useState<null | 'l' | 'r'>(null);

  const handleSetSelected = (val: number | null) => {
    if (typeof selected === 'number' && typeof val === 'number') {
      setDir(selected > val ? 'r' : 'l');
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  const { isDesktop } = useMediaQuery();
  const searchParams = useSearchParams().get('path');
  const [isActive, setIsActive] = useState('');
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <>
      <nav
        onMouseLeave={() => handleSetSelected(null)}
        className={cn(
          'max-[500px]:py-2 px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500 bg-navbar relative',
          scrollHeight > 50
            ? ' fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-navbar/50 py-2 border-b border-navbar shadow-md'
            : 'sm:py-6 py-4',
          {
            'bg-navbar/60 ': scrollHeight > 800 && scrollHeight < 4300
          }
        )}
      >
        <Link
          href="/?path=home"
          className={cn(
            ' max-sm:w-[120px] max-[450px]:w-[100px] font-montserrat max-h-[55px] object-contain',
            scrollHeight > 200 ? 'w-[120px] ' : 'w-fit'
          )}
        >
          <span>Starter House</span>
        </Link>
        <div
          className={cn(
            'flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[60%]',
            !isDesktop && 'hidden'
          )}
        >
          <div className="flex items-center gap-x-5 justify-center">
            {TABS.map(t => {
              return (
                <Tab
                  key={t.id}
                  selected={selected}
                  handleSetSelected={handleSetSelected}
                  tab={t.id}
                >
                  {t.title}
                </Tab>
              );
            })}
          </div>
          <Link
            onMouseEnter={() => handleSetSelected(null)}
            href="/resources?path=resources"
            className={cn(
              'flex items-center gap-1 px-3 py-1.5 text-sm transition-colors',
              isActive === 'resources'
                ? 'text-nav-text-active'
                : 'text-nav-text'
            )}
          >
            Resources
          </Link>
        </div>
        <button className="w-[152px] h-[56px] bg-nav-text-active text-nav-text rounded-md hidden lg:block text-center">
          Get Started
        </button>
        <AnimatePresence>
          {selected && <Content dir={dir} selected={selected} />}
        </AnimatePresence>
      </nav>
    </>
  );
};

export { NavigationBar };

const TabLlink = [
  {
    id: 1,
    title: 'About Us',
    Component: 'aboutus'
  },
  { id: 2, title: 'Forumms', Component: 'formus' },
  { id: 3, title: 'Event', Component: 'events' }
];
