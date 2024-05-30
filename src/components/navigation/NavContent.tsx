import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col justify-center px-12 pt-5 pb-16 bg-white  max-md:px-5 container rounded-2xl border border-nav-text-active bg-gradient-to-b from-white via-[#fafafd] to-[#cbd2e6]">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
              <div className="text-2xl font-semibold leading-9 text-orange-500 max-md:max-w-full">
                Starters House Community
              </div>
              <div className="flex flex-col justify-center mt-5 max-md:max-w-full">
                <Image
                  src="/aboutimage.png"
                  alt="about image"
                  width={468}
                  height={344}
                  className="w-full aspect-[1.35] max-md:max-w-full md:rounded-3xl rounded-xl"
                />
              </div>
              <div className="mt-8 text-base leading-7 text-sky-950 max-md:max-w-full">
                Starters House Community is a thriving ecosystem for tech
                enthusiasts and professionals. It&apos;s a place where
                innovation, collaboration, and growth are part of everyday life.
              </div>
              <div className="mt-8 text-lg font-medium leading-8 text-orange-500 max-md:max-w-full">
                Vision and Mission
              </div>
              <div className="mt-2.5 text-base leading-7 text-sky-950 max-md:max-w-full">
                Our vision is to create a world where technology brings people
                together to solve challenges. Our mission is to provide a
                platform that fosters learning, innovation, and community
                spirit.
              </div>
              <div className="justify-center items-center px-3 py-1 mt-8 text-base font-medium text-center text-white bg-orange-400 rounded max-md:px-5 max-md:max-w-full">
                Join the Community
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
                    </span>{" "}
                    We are committed to offering resources and events that
                    promote ongoing education and skill development.
                  </li>
                  <li>
                    <span className="text-orange-400">Service Provision:</span>{" "}
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
                    <span className="text-orange-400">Member Profiles:</span>{" "}
                    Personalized profiles that showcase each member’s skills,
                    interests, and contributions to the community
                  </li>
                </ul>
              </div>
              <div className="mt-9 max-md:max-w-full">
                Joining Starters House
              </div>
              <div className="mt-3 text-base leading-7 text-blue-600 max-md:max-w-full">
                Becoming a part of Starters House Community is simple.{" "}
                <span className="text-blue-700">Sign up</span>,{" "}
                <span className="text-blue-600">create your profile</span>, and
                start engaging with a network of tech professionals and
                enthusiasts who are eager to collaborate and grow together.. 🚀
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="flex flex-col px-12 pt-2 pb-9 bg-white  max-md:px-5 container rounded-2xl border border-nav-text-active bg-gradient-to-b from-white via-[#fafafd] to-[#cbd2e6]">
      <div className="max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto text-base font-medium leading-5 text-justify text-orange-500 max-md:mt-10">
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
              <div className="mt-10">Webinar Series</div>
              <div className="mt-2.5 leading-5 text-sky-950">
                Tune in to our webinars featuring expert panels discussing
                various tech-related topics, from AI ethics to cloud computing.
              </div>
              <div className="mt-10">Networking Nights</div>
              <div className="mt-2.5 leading-5 text-sky-950">
                Connect with peers, mentors, and industry professionals in our
                regular networking events, designed to build lasting
                professional relationships.
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center items-center px-0.5 py-7 w-full text-center bg-indigo-50 bg-opacity-10 max-md:mt-8 max-md:max-w-full">
              <div className="text-lg font-semibold leading-6 text-orange-500 w-[331px]">
                Upcoming Events at Starters House Community
              </div>

              <Image
                src="/aboutimage.png"
                alt="about image"
                width={468}
                height={344}
                className="self-stretch mt-4 w-full aspect-[0.91] max-md:max-w-full"
              />

              <div className="mt-4 text-base leading-5 text-sky-950">
                Join us for a series of engaging and enriching events designed
                to foster learning, innovation, and camaraderie within our tech
                community.
                <br />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[29%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-24 text-base font-medium leading-5 text-orange-500 max-md:mt-10">
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
      <div className="self-center mt-6 text-lg font-medium leading-5 text-center text-zinc-800 max-md:max-w-full">
        These events are just a glimpse of what we offer at Starters House
        Community. Let&apos;s innovate and grow together! 🚀
      </div>
    </div>
  );
};

const Formus = () => {
  return (
    <div className="flex flex-col pt-12 pb-4 bg-white container rounded-2xl border border-nav-text-active bg-gradient-to-b from-white via-[#fafafd] to-[#cbd2e6]">
      <div className="flex flex-col px-20 w-full text-base leading-5 text-orange-500 max-md:px-5 max-md:max-w-full">
        <div className="self-center text-justify">
          Welcome to the Starters House Forums
        </div>
        <div className="self-center mt-2.5 text-justify text-sky-950 max-md:max-w-full">
          A place to connect, share, and grow with fellow tech enthusiasts.
        </div>
        <div className="self-start mt-20 text-justify max-md:mt-10 max-md:ml-2.5">
          General Discussion
        </div>
        <div className="mt-2.5 leading-5 text-justify text-sky-950 w-[318px] max-md:ml-2.5">
          For all things tech and community-related. A space to discuss news,
          trends, and ideas.
        </div>
        <div className="z-10 self-end mt-0 max-md:mr-2.5">
          Learning Resources
        </div>
        <div className="self-end mt-2.5 leading-5 text-sky-950 w-[318px] max-md:mr-2.5">
          Discuss tutorials, courses, books, and other learning materials.
        </div>
        <div className="self-end mt-20 max-md:mt-10 max-md:mr-2.5">
          Career Advice
        </div>
        <div className="self-end mt-2.5 leading-5 text-sky-950 w-[318px] max-md:mr-2.5">
          Exchange tips on career development, job hunting, and professional
          growth.
        </div>
      </div>
      <div className="flex z-10 flex-col px-20 -mt-12 w-full text-base leading-5 text-orange-500 max-md:px-5 max-md:max-w-full">
        <div className="self-start text-justify max-md:ml-2.5">
          Introductions
        </div>
        <div className="mt-2.5 leading-5 text-justify text-sky-950 w-[318px] max-md:ml-2.5">
          New to Starters House? Introduce yourself and meet the community.
        </div>
        <div className="self-end mt-16 max-md:mt-10 max-md:mr-2.5">
          Event Discussions
        </div>
        <div className="self-end mt-2.5 leading-5 text-sky-950 w-[318px] max-md:mr-2.5">
          Talk about past and upcoming events, arrange meetups, and share
          experiences.
        </div>
      </div>
      <div className="flex z-10 flex-col items-start px-20 -mt-12 w-full max-md:px-5 max-md:max-w-full">
        <div className="text-base leading-5 text-justify text-orange-500 max-md:ml-2.5">
          Tech Talk
        </div>
        <div className="mt-2.5 text-base leading-5 text-justify text-sky-950 w-[318px] max-md:ml-2.5">
          Deep dives into specific technologies, programming languages, and
          tools.
        </div>
        <div className="flex flex-col self-stretch mt-16 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 text-base max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col flex-1 self-start mt-5 text-justify">
              <div className="text-orange-500 leading-[120%]">
                Project Showcase
              </div>
              <div className="mt-2.5 leading-5 text-sky-950">
                Share your latest projects, get feedback, and inspire others.
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <div className="text-orange-500 leading-[120%]">
                Off-Topic Lounge
              </div>
              <div className="mt-2.5 leading-5 text-sky-950">
                A place for conversations that don’t fit elsewhere. Relax and
                enjoy the camaraderie.
              </div>
            </div>
          </div>
          <div className="self-center mt-24 text-lg font-medium leading-5 text-center text-zinc-800 max-md:mt-10 max-md:max-w-full">
            These events are just a glimpse of what we offer at Starters House
            Community. Let’s innovate and grow together! 🚀
          </div>
        </div>
      </div>
    </div>
  );
};

export { AboutUs, Events, Formus };
