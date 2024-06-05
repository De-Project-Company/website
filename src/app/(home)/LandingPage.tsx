'use client';

import React from 'react';
import useMediaQuery from '@/hooks/use-media-query';
import {
  HeroSection,
  AtGlance,
  PillarSection,
  FaqSection,
  Trends,
  MemberSection,
  GimecEffect
} from './modules';

export const LandingPage = () => {
  const { isDesktop } = useMediaQuery();

  if (isDesktop) {
    return (
      <main className="hidden lg:block">
        <HeroSection />
        <AtGlance />
        <PillarSection />
        <FaqSection />
        <Trends />
        <GimecEffect />
        <MemberSection />
      </main>
    );
  }
  return <div>LandingPage</div>;
};
