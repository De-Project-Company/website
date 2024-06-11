/* eslint-disable */
'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { cn } from '@/utils';

const SpotlightButton = ({
  title,
  className
}: {
  title: string;
  className?: string;
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { width } = (e.target as HTMLElement)?.getBoundingClientRect();
      const offset = e.offsetX;
      const left = `${(offset / width) * 100}%`;

      spanRef.current!.animate({ left }, { duration: 250, fill: 'forwards' });
    };

    const handleMouseLeave = () => {
      spanRef.current!.animate(
        { left: '50%' },
        { duration: 100, fill: 'forwards' }
      );
    };

    btnRef?.current?.addEventListener('mousemove', handleMouseMove);
    btnRef?.current?.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      btnRef?.current?.removeEventListener('mousemove', handleMouseMove);
      btnRef?.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <motion.button
      whileTap={{ scale: 0.985 }}
      ref={btnRef}
      className={cn(
        'relative w-full  overflow-hidden rounded-lg bg-nav-text-active px-4 py-3 text-lg font-medium text-white',
        className
      )}
    >
      <span className="pointer-events-none relative z-10 mix-blend-difference">
        {title}
      </span>
      <span
        ref={spanRef}
        className="pointer-events-none absolute left-[50%] top-[50%] h-32 w-32 -translate-x-[50%] -translate-y-[50%] rounded-full bg-slate-100"
      />
    </motion.button>
  );
};

export { SpotlightButton };
