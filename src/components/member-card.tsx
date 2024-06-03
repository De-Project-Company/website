import Image from 'next/image';
import Link from 'next/link';

interface IMemberCardProps {
  name: string;
  image: string;
  stack: string;
  role: string;
}

const MemberCard = ({ name, image, stack, role }: IMemberCardProps) => {
  return (
    <div className="bg-[#0A58CA] text-white p-8 max-w-96 mt-[120px]  flex flex-col justify-center font-bold capitalize text-center">
      <div className="w-[188px] aspect-square relative mx-auto -mt-[120px] overflow-hidden bg-blue-100 rounded-1/2 ">
        <Image
          src={`/profile/${image}.png`}
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1">
        <p className="text-[20px] md:text-[28px] mt-6">{name}</p>

        <p className="text-[20px] md:text-[28px] my-3 ">{stack}</p>

        <p className=" text-[18px] font-medium capitalize">{role}</p>
      </div>

      <div className="w-full aspect-video relative mt-3">
        <Image
          src="/profile/profile3.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <Link href="#" className="text-[#FD9137] mt-6 w-max mx-auto block">
        View Profile
      </Link>
    </div>
  );
};

export default MemberCard;
