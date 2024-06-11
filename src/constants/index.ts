import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { NavLink, SocialLink } from '@/types';

const members = [
  {
    id: 1,
    fullName: 'phoenix',
    stack: 'Full Stack',
    image: 'profile1',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est, perspiciatis nostrum rerum distinctio recusandae incidunt odit provident qui eligendi ea consequatur sunt vel suscipit, quae itaque facilis at ratione.'
  },
  {
    id: 2,
    fullName: 'omotola',
    stack: 'project manager',
    image: 'profile1',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est, perspiciatis nostrum rerum distinctio recusandae incidunt odit provident qui eligendi ea consequatur sunt vel suscipit, quae itaque facilis at ratione.'
  },
  {
    id: 3,
    fullName: 'jackson',
    stack: 'developer',
    image: 'profile3',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est, perspiciatis nostrum rerum distinctio recusandae incidunt odit provident qui eligendi ea consequatur sunt vel suscipit, quae itaque facilis at ratione.'
  },
  {
    id: 4,
    fullName: 'gift',
    stack: 'designer',
    image: 'profile1',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est, perspiciatis nostrum rerum distinctio recusandae incidunt odit provident qui eligendi ea consequatur sunt vel suscipit, quae itaque facilis at ratione.'
  },
  {
    id: 5,
    fullName: 'omotola',
    stack: 'project manager',
    image: 'profile1',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est, perspiciatis nostrum rerum distinctio recusandae incidunt odit provident qui eligendi ea consequatur sunt vel suscipit, quae itaque facilis at ratione.'
  },
  {
    id: 6,
    fullName: 'jackson',
    stack: 'developer',
    image: 'profile3',
    bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus est, perspiciatis nostrum rerum distinctio recusandae incidunt odit provident qui eligendi ea consequatur sunt vel suscipit, quae itaque facilis at ratione.'
  }
];

const NAV_LINKS: NavLink[] = [
  {
    label: 'about us',
    link: 'about-us'
  },
  {
    label: 'forum',
    link: 'forums'
  },
  {
    label: 'events',
    link: 'events'
  },
  {
    label: 'resources',
    link: 'resources'
  },
  {
    label: 'get started',
    link: 'get-started'
  }
];
const PROJECT_LINK: NavLink[] = [
  {
    label: 'traverse',
    link: ''
  },
  {
    label: 'paygo',
    link: ''
  },
  {
    label: 'edtech',
    link: ''
  }
];

const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Mail',
    link: 'mailto:hello@startershouse.com',
    icon: AiOutlineMail
  },
  {
    name: 'Twitter',
    link: 'https://x.com/StartersHouse',
    icon: FaSquareXTwitter
  },
  {
    name: 'Github',
    link: 'https://github.com/De-Project-Company',
    icon: FaGithub
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com',
    icon: FaLinkedin
  }
];

export { members, NAV_LINKS, SOCIAL_LINKS, PROJECT_LINK };
