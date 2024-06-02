import Image from 'next/image';

interface IMemberCardProps {
  name: string;
  image: string;
  stack: string;
  role: string;
}

const MemberCard = ({ name, image, stack, role }: IMemberCardProps) => {
  return (
    <div className="bg-[#0A58CA] text-white p-8 max-w-96 mt-[120px] text-center">
      <div className="w-[188px] aspect-square relative mx-auto -mt-[120px] bg-blue-100 rounded-1/2 ">
        <Image
          src={`/profile/${image}.png`}
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <p className=" text-[28px] mt-6 font-bold capitalize">{name}</p>

      <p className=" text-[28px] my-3 font-bold capitalize">{stack}</p>

      <p className=" text-[18px] font-medium capitalize">{role}</p>

      <div className="w-full aspect-video relative mt-3">
        <Image
          src="/profile/profile3.png"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default MemberCard;
