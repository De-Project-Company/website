import React from 'react';
import {
  HeroSection,
  AtGlance,
  PillarSection,
  FaqSection,
  Trends,
  MemberSection
} from './modules';
// import { MyComponent } from './modules/rough';
import Rough from './modules/rough';

const page = () => {
  return (
    <>
      <HeroSection />
      <AtGlance />
      <PillarSection />
      <FaqSection />
      <Trends />
      <MemberSection />
      {/* <MyComponent /> */}
      <Rough />
    </>
  );
};

export default page;
