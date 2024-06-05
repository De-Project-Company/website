import { Calendar, Location } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';

const EventsCard = () => {
  return (
    <div className="flex flex-col md:flex-row py-5 my-2 border-b-1 md:[&>div]:max-w-[280px] items-center border-[#6C757D] gap-5">
      <div className="relative w-full h-[270px] rounded-xl overflow-hidden ">
        <Image
          src={'/dummy-event.png'}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div>
        <p className="font-bold text-[20px] md:text-[24px]">
          Whether you're professional or just
        </p>
        <div className="flex gap-3 py-2 items-center font-medium">
          <Location size="20" />
          <p>Google Meet</p>
        </div>

        <div className="flex gap-3 py-2 items-center font-medium">
          <Calendar size="20" />
          <p>04 May, 2024</p>
        </div>

        <Link
          href="#"
          className=" text-nav-text-active font-semibold text-[16px] md:text-[20px] "
        >
          Learn more
        </Link>
      </div>
    </div>
  );
};

export default EventsCard;
