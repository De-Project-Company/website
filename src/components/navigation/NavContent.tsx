import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/utils';

type SectionProps = {
  title: string;
  description: string;
  className?: string;
};

export const Section: React.FC<SectionProps> = ({
  title,
  description,
  className
}) => (
  <section className={cn('', className)}>
    <h2 className="text-orange-500 font-semibold text-xl">{title}</h2>
    <p className="mt-2.5 leading-5 text-sky-950 w-[350px] text-xlg font-medium">
      {description}
    </p>
  </section>
);

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center px-12 pt-5 pb-8 bg-white  max-md:px-5 container rounded-2xl border border-nav-text-active bg-gradient-to-b from-white via-[#fafafd] to-[#cbd2e6]">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold leading-9 text-orange-500 max-md:max-w-full font-worksans">
                Starters House Community
              </div>
              <div className="flex flex-col justify-center mt-7 max-md:max-w-full">
                <Image
                  src="/aboutimage.png"
                  alt="about image"
                  width={468}
                  height={344}
                  className="w-full  max-md:max-w-full md:rounded-3xl rounded-xl"
                />
              </div>
              <div className="mt-8 text-base leading-7 text-sky-950 max-md:max-w-full">
                Starters House Community is a thriving ecosystem for tech
                enthusiasts and professionals. It&apos;s a place where
                innovation, collaboration, and growth are part of everyday life.
              </div>
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
            </div>
          </div>
        </div>
        <div className="w-full justify-end flex text-nav-text-active font-medium">
          <Link href="/about-us?path=aboutus">Read More</Link>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="flex flex-col px-12 pt-2 pb-9 bg-white  max-md:px-5 container rounded-2xl border border-nav-text-active bg-gradient-to-b from-white via-[#fafafd] to-[#cbd2e6]">
      <div className="">
        <div className="text-4xl font-semibold leading-9 text-orange-500 max-md:max-w-full font-worksans text-center">
          Upcoming Events at Starters House Community
        </div>
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[29%] py-7">
            <div className="flex flex-col  text-base font-medium leading-5 text-justify text-orange-500 max-md:mt-10">
              <div>Monthly Tech Talks</div>
              <div className="mt-2.5 leading-5 text-sky-950">
                Engage with industry leaders and innovators as they share
                insights on the latest tech trends and breakthroughs.
              </div>
              <div className="mt-10">Weekly Workshops.</div>
              <div className="mt-2.5 leading-5 text-sky-950">
                Hands-on workshops covering a range of topics from coding
                bootcamps to design sprints, helping you to upskill in a
                collaborative environment.
              </div>
              <div className="mt-10">Networking Nights</div>
              <div className="mt-2.5 leading-5 text-sky-950">
                Connect with peers, mentors, and industry professionals in our
                regular networking events, designed to build lasting
                professional relationships.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%]">
            <div className="flex flex-col grow justify-center items-center px-0.5 py-7 w-full text-center">
              <Image
                src="/events.png"
                alt="about image"
                width={439}
                height={485}
                className="mt-4 w-full max-md:max-w-full max-h-[450px] object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[29%]">
            <div className="flex flex-col py-7 text-base font-medium leading-5 text-orange-500 max-md:mt-10">
              <div>Community Outreach Programs</div>
              <div className="mt-2.5 leading-5 text-justify text-sky-950">
                Get involved in community service and outreach programs that
                leverage technology for social good.
              </div>
              <div className="mt-10 text-justify">Hackathons</div>
              <div className="mt-2.5 leading-5 text-justify text-sky-950">
                Participate in our exciting hackathons where creativity and
                collaboration come together to solve real-world problems.
              </div>
              <div className="mt-10 text-justify">Annual Tech Conference</div>
              <div className="mt-2.5 leading-5 text-justify text-sky-950">
                Don&apos;t miss our flagship event, the annual tech conference,
                where the brightest minds gather to discuss the future of
                technology.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full justify-end flex text-nav-text-active font-medium">
        <Link href="/events?path=events">Learn More</Link>
      </div>
    </div>
  );
};

const Formus = () => {
  const firstSection = [
    {
      title: 'General Discussion',
      description:
        'For all things tech and community-related. A space to discuss news, trends, and ideas.'
    },
    {
      title: 'Introductions',
      description:
        'New to Starters House? Introduce yourself and meet the community.'
    },
    {
      title: 'Tech Talk',
      description:
        'Deep dives into specific technologies, programming languages, and tools.'
    },
    {
      title: 'Project Showcase',
      description:
        'Share your latest projects, get feedback, and inspire others.'
    }
  ];

  const secondSection = [
    {
      title: 'Learning Resources',
      description:
        'Discuss tutorials, courses, books, and other learning materials.'
    },
    {
      title: 'Career Advice',
      description:
        'Exchange tips on career development, job hunting, and professional growth.'
    },
    {
      title: 'Event Discussions',
      description:
        'Talk about past and upcoming events, arrange meetups, and share experiences.'
    },
    {
      title: 'Off-Topic Lounge',
      description:
        'A place for conversations that don’t fit elsewhere. Relax and enjoy the camaraderie.'
    }
  ];
  return (
    <div className="flex flex-col pt-12 pb-4 bg-white container rounded-2xl border border-nav-text-active bg-gradient-to-b from-white via-[#fafafd] to-[#cbd2e6]">
      <div className="flex flex-col pb-4 rounded-none shadow-sm">
        <div className="flex flex-col px-20 w-full text-base leading-5 text-orange-500 max-md:px-5 max-md:max-w-full">
          <header className="self-center">
            <h1 className="text-center text-2xl font-semibold">
              Welcome to the Starters House Forums
            </h1>
            <p className="mt-2.5 text-justify text-sky-950 max-md:max-w-full">
              A place to connect, share, and grow with fellow tech enthusiasts.
            </p>
          </header>
        </div>
        <div className="flex items-center justify-between w-full mt-[40px]">
          <div className="flex flex-col gap-5">
            {firstSection.map(sec => (
              <Section key={sec.title} {...sec} />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {secondSection.map(sec => (
              <Section key={sec.title} {...sec} />
            ))}
          </div>
        </div>
        <div className="self-center my-[40px] text-lg font-medium leading-5 text-center text-zinc-800 max-md:mt-10 max-md:max-w-full">
          These events are just a glimpse of what we offer at Starters House
          Community. Let’s innovate and grow together! 🚀
        </div>
      </div>
      <div className="w-full justify-end flex text-nav-text-active font-medium">
        <Link href="/formus?path=formus">Learn More</Link>
      </div>
    </div>
  );
};

export { AboutUs, Events, Formus };
