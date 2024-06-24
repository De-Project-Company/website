'use client';

import { getProjectById } from '@/action';
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';

interface ProfileProps {
  id: string;
}

interface AllMemberTemplate {
  id: string;
  fullName: string;
  imageSrc: string | null;
  department: string;
  email?: string;
}

const AllMemberTemplate: React.FC<AllMemberTemplate> = ({
  id,
  fullName,
  imageSrc,
  department,
  email
}) => {
  const defaultAvatar = `https://ui-avatars.com/api/?name=${email}&background=random`;
  return (
    <div key={id} className="space-x-3  flex items-center my-5">
      <Link
        href={`/members/profile/details?id=${id}`}
        className="h-20 w-20 rounded-full overflow-hidden "
      >
        <Image
          src={!imageSrc || imageSrc === 'null' ? defaultAvatar : imageSrc}
          alt={`${fullName}` + 'image'}
          height={100}
          width={100}
          className="h-full w-full object-cover"
        />
      </Link>
      <div className="flex flex-col">
        <Link
          href={`/members/profile/details?id=${id}`}
          className="text-sm font-bold block"
        >
          {fullName}
        </Link>
        <h1 className="text-sm">{department}</h1>
        {/* <h1 className="text-sm">{fullName}</h1> */}
        <Link
          href={`/members/profile/details?id=${id}`}
          className="tex-orange-400 hover:tex-orange-700 block"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

const ProjectDetails: React.FC<ProfileProps> = ({ id }) => {
  const [project, setProject] = useState({} as Project);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      // setIsLoading(true);
      const res = await getProjectById(id);
      const fetchedData = res?.project?.project;
      // console.log(fetchedData);
      setProject(fetchedData);
      setIsLoading(false);
    };

    fetchProject();
  }, []);

  const designers = useMemo(
    () => project?.members?.filter(member => member.department === 'design'),
    [project.members]
  );
  const developers = useMemo(
    () => project?.members?.filter(member => member.department === 'developer'),
    [project.members]
  );

  console.log(developers);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        {' '}
        Calm down ...
      </div>
    );
  }

  return (
    <>
      <div className="px-4 md:w-[80%] mx-auto pb-10">
        <h1 className="my-8"> Projects - {project.name}</h1>
        <section className="project-details grid grid-cols-1 md:grid-cols-3 mt-18 mb-8 gap-4">
          <div className="h-full w-full bg-red-400">
            <Image
              src={project?.image}
              alt={project?.name}
              height={100}
              width={100}
              className="object-cover h-full w-full"
            />
          </div>

          <div className="col-span-2 flex flex-col space-y-4">
            <h1 className="text-xl font-bold ">{project?.name}</h1>
            <p className="text-xs md:text-sm ">{project.description}</p>
            <Link
              href={`${project?.link}`}
              className="w-fit text-blie-600 hover:text-blue-800  underline text-xs md:text-sm"
            >
              {project.link}
            </Link>
          </div>
        </section>

        <h1 className="font-bold "> Team Members</h1>
        {/* Designers */}
        <section className="">
          <h1 className="text-orange-400 font-bold text-2xl my-4">Design </h1>

          <div className="wrap grid grid-cols-2 md:grid-cols-3 gap-3 ">
            {designers &&
              designers?.map(designer => (
                <div key={designer.id}>
                  <AllMemberTemplate
                    id={`${designer.id}`}
                    fullName={`${designer.fullName}`}
                    imageSrc={`${designer.image}`}
                    department={`${designer.department}`}
                  />
                </div>
              ))}
          </div>
        </section>

        {/* Developers */}
        <section className="">
          <h1 className="text-orange-400 font-bold text-2xl my-4">
            Development
          </h1>

          <div className="wrap grid grid-cols-2 md:grid-cols-3 gap-3 ">
            {developers &&
              developers?.map(developer => (
                <div key={developer.id}>
                  <AllMemberTemplate
                    id={`${developer.id}`}
                    fullName={`${developer.fullName}`}
                    imageSrc={`${developer.image}`}
                    department={`${developer.department}`}
                    email={`${developer.email}`}
                  />
                </div>
              ))}
          </div>
        </section>

        {/* xyxyxyxy */}
        <div className="flex flex-col  w-full items-center justify-center space-y-3 relative mt-16  mb-7">
          <h1 className="text-xs md:text-sm font-bold texdt-black ">
            Want to work with Starters House?
          </h1>
          <Link
            href="#"
            className="rounded-md block bg-orange-500 w-1/2 mx-auto py-2 hover:bg-orange-600"
          >
            <span className="font-light text-center block text-white text-xs md:text-sm">
              Contact Team{' '}
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
