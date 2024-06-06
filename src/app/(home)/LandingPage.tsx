'use client';

import React from 'react';
import {
  HeroSection,
  AtGlance,
  PillarSection,
  FaqSection,
  Trends,
  MemberSection,
  GimecEffect,
  ProjectSection
} from './modules';

export const LandingPage = () => {
  return (
    <main className="hidden lg:block">
      <HeroSection />
      <AtGlance />
      <PillarSection />
      <FaqSection />
      <Trends />
      <MemberSection />
      <ProjectSection />
      <GimecEffect />
    </main>
  );
};
