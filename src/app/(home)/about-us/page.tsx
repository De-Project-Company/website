import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SpotlightButton } from '@/components/SpotlightButton';

const page = () => {
  return (
    <div className="flex flex-col pt-5 md:pt-12 pb-4 bg-white rounded-none md:shadow-sm mb-[20px] container">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-9 text-orange-500 max-md:max-w-full font-worksans text-center">
                Starters House Community
              </div>
              <div className="flex flex-col justify-center mt-7 max-md:max-w-full">
                <Image
                  src="/aboutimage.png"
                  alt="about image"
                  width={468}
                  height={344}
                  className="w-full md:rounded-3xl rounded-xl"
                />
              </div>
              <div className="mt-8 text-base leading-7 text-sky-950 max-md:max-w-full">
                Starters House Community is a thriving ecosystem for tech
                enthusiasts and professionals. It&apos;s a place where
                innovation, collaboration, and growth are part of everyday life.
              </div>
              <div className="mt-3 max-md:max-w-full text-orange-500 font-medium text-lg md:text-2xl">
                Vision and Missions
              </div>
              <div className="mt-3 text-base leading-7 text-sky-950 max-md:max-w-full">
                Our vision is to create a world where technology brings people
                together to solve challenges. Our mission is to provide a
                platform that fosters learning, innovation, and community
                spirit.
              </div>
              <Link href="/get-started" className="w-full">
                <SpotlightButton
                  title="Join The Community"
                  className="mt-9 w-full font-poppins"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-10 text-lg font-medium leading-8 text-orange-500 max-md:mt-10 max-md:max-w-full">
              <div className="max-md:max-w-full">Core Values</div>
              <div className="mt-3 text-base text-sky-950 max-md:max-w-full">
                <ul>
                  <li>
                    <span className="text-orange-400">Inclusivity:</span> We
                    welcome members from all backgrounds, celebrating diversity
                    and fostering an environment where everyone feels valued.
                  </li>
                  <li>
                    <span className="text-orange-400">Collaboration</span>: We
                    believe in the power of working together, providing
                    opportunities for members to connect and create.
                  </li>
                  <li>
                    <span className="text-orange-400">
                      Continuous Learning:
                    </span>{' '}
                    We are committed to offering resources and events that
                    promote ongoing education and skill development.
                  </li>
                  <li>
                    <span className="text-orange-400">Service Provision:</span>{' '}
                    We connect businesses with skilled tech professionals,
                    facilitating a marketplace of talent and opportunity.
                  </li>
                </ul>
              </div>
              <div className="mt-9 max-md:max-w-full">Community Features</div>
              <div className="mt-3 text-base leading-7 text-sky-950 max-md:max-w-full">
                <ul>
                  <li>
                    <span className="text-orange-400">Forums:</span> A space for
                    discussion, idea exchange, and problem-solving.
                  </li>
                  <li>
                    <span className="text-orange-400">Events:</span> Regular
                    workshops, webinars, and networking sessions to keep members
                    engaged and informed.
                  </li>
                  <li>
                    <span className="text-orange-400">Resource Library:</span> A
                    comprehensive collection of educational materials to support
                    learning and development.
                  </li>
                  <li>
                    <span className="text-orange-400">Member Profiles:</span>{' '}
                    Personalized profiles that showcase each member’s skills,
                    interests, and contributions to the community
                  </li>
                </ul>
              </div>
              <div className="mt-9 max-md:max-w-full">
                Joining Starters House
              </div>
              <div className="mt-3 text-base leading-7 text-sky-950 max-md:max-w-full">
                Becoming a part of Starters House Community is simple.{' '}
                <span className="text-navbar">
                  Sign up, create your profile,{' '}
                </span>
                and start engaging with a network of tech professionals and
                enthusiasts who are eager to collaborate and grow together.. 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default page;
