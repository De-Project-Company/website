interface Member {
  member: Member | null;
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
  name: string;
  image: string;
  description: string;
  members: Member[];
  link: string;
  createdAt?: string;
  startDate?: string;
  endDate?: string;
}

interface Publication {
  id: string;
  type: string;
  owner: Member;
}

interface NavLink {
  label: string;
  link: string;
}

interface SocialLink {
  name: string;
  link: string;
  icon: Icon;
}

export { Social, Framework, Publication, Project, Member, NavLink, SocialLink };
