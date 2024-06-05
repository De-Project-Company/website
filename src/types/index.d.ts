interface Member {
  id: string;
  preferedName?: string;
  fullName: string;
  bio: string;
  image?: string;
  status: 'pending' | 'active' | 'past';
  address: string;
  createdAt: Date;
  portfolio?: string;
  email: string;
  mentor?: boolean;
  intrests?: string;
  expetations?: string;
  whatdoyoubringtothetable?: string;
  DOB?: Date;
  whatsappnumber: string;
  commetmentlevel?: number;
  otp?: string;
  otpExpires?: Date;
  verified: boolean;
  department?: string;
  framworks?: Framework[];
  socials?: Social[];
  projects?: Project[];
  publications?: Publication[];
}

interface Framework {
  id: number;
  framworks: string;
}

interface Social {
  id: number;
  platform: string;
  url: string;
}

interface Project {
  id: string;
  livelink: string;
  image: string;
  description: string;
  opensource: boolean;
  githublink?: string;
  members: Member[];
}

interface Publication {
  id: string;
  type: string;
  owner: Member;
}

export { Social, Framework, Publication, Project, Member };
