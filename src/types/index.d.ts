interface Member {
  id: string;
  preferedName?: string;
  fullName: string;
  bio: string;
  image?: string;
  status: string;
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
  framworks: Frameworks[];
  socials: Socials[];
  project: Project[];
  publication: Publication[];
  languages: Languages[];
  stack: Stack[];
}

interface Project {
  id: string;
  livelink: string;
  image: string;
  description: string;
  opensource: boolean;
  githublink?: string;
  membersId: string;
}

interface Publication {
  id: string;
  type: string;
  membersId: string;
}

interface Stack {
  id: number;
  stack: string;
  membersId: string;
}

interface Languages {
  id: number;
  language: string;
  membersId: string;
}

interface Frameworks {
  id: number;
  framworks: string;
  membersId?: string;
}

interface Socials {
  id: number;
  platform: string;
  url: string;
  membersId: string;
}

export { Socials, Frameworks, Languages, Stack, Publication, Project, Member };
