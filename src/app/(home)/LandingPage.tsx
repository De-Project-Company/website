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
  ProjectSection,
  MobileHero,
  GlanceMob,
  PillarMob
} from './modules';

export const LandingPage = () => {
  return (
    <>
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
      <main className="lg:hidden">
        <MobileHero />
        <GlanceMob />
        <PillarMob />
        <FaqSection />
      </main>
    </>
  );
};
