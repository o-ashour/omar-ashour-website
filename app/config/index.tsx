import { StaticImageData } from "next/image"
import designPortfolioThumbnailSmall from '../../public/assets/images/thumbnail-project-1-small.webp';
import designPortfolioThumbnailLarge from '../../public/assets/images/thumbnail-project-1-large.webp';
import eLearningLandingThumbnailSmall from '../../public/assets/images/thumbnail-project-2-small.webp';
import eLearningLandingThumbnailLarge from '../../public/assets/images/thumbnail-project-2-large.webp';
import todoAppThumbnailSmall from '../../public/assets/images/thumbnail-project-3-small.webp';
import todoAppThumbnailLarge from '../../public/assets/images/thumbnail-project-3-large.webp';
import entertainmentWebAppThumbnailSmall from '../../public/assets/images/thumbnail-project-4-small.webp';
import entertainmentWebAppThumbnailLarge from '../../public/assets/images/thumbnail-project-4-large.webp';
import memoryGameThumbnailSmall from '../../public/assets/images/thumbnail-project-5-small.webp';
import memoryGameThumbnailLarge from '../../public/assets/images/thumbnail-project-5-large.webp';
import artGalleryShowcaseThumbnailSmall from '../../public/assets/images/thumbnail-project-6-small.webp';
import artGalleryShowcaseThumbnailLarge from '../../public/assets/images/thumbnail-project-6-large.webp';
import TwitterSmallIcon from "@/components/icons/twitterSmallIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
import GitHubIcon from "@/components/icons/gitHubIcon";
import FrontendMentorSmallIcon from "@/components/icons/frontendMentorSmallIcon";
import FrontendMentorIcon from "@/components/icons/frontendMentorIcon";
import LinkedInSmallIcon from "@/components/icons/linkedInSmallIcon";
import LinkedInIcon from "@/components/icons/linkedInIcon";
import GitHubSmallIcon from "@/components/icons/gitHubSmallIcon";

type Skills = {
  id: number,
  name: string,
  experienceInYears: number,
}[]

type Projects = {
  id: number,
  title: string,
  skills: string[],
  images: {
    small: StaticImageData,
    large: StaticImageData,
  },
  urls?: {
    repo?: string,
    productionSite?: string,
  },
}[]

type NavItems = {
  id: number,
  name: string,
  url: string,
  icons: {
    small: JSX.Element,
    large: JSX.Element
  }
}

export const Skills: Skills = [
  { id: 0, name: 'HTML', experienceInYears: 4 },
  { id: 1, name: 'CSS', experienceInYears: 4 },
  { id: 2, name: 'Javascript', experienceInYears: 4 },
  { id: 3, name: 'Accessibility', experienceInYears: 4 },
  { id: 4, name: 'React', experienceInYears: 3 },
  { id: 5, name: 'Sass', experienceInYears: 3 },
]

export const Projects: Projects = [
  { 
    id: 0,
    title: 'Design Portfolio',
    skills: ['html', 'css'],
    images: {
      small: designPortfolioThumbnailSmall,
      large: designPortfolioThumbnailLarge,
    },
    urls: {
      repo: 'https://github.com/o-ashour/single-page-developer-portfolio', // to test
      productionSite: 'https://web.archive.org',
    }
  },
  { 
    id: 1,
    title: 'E-Learning Landing Page',
    skills: ['html', 'css'],
    images: {
      small: eLearningLandingThumbnailSmall,
      large: eLearningLandingThumbnailLarge,
    }
  },
  { 
    id: 2,
    title: 'Todo Web App',
    skills: ['html', 'css', 'javascript'],
    images: {
      small: todoAppThumbnailSmall,
      large: todoAppThumbnailLarge,
    }
  },
  { 
    id: 3,
    title: 'Entertainment Web App',
    skills: ['html', 'css', 'javascript'],
    images: {
      small: entertainmentWebAppThumbnailSmall,
      large: entertainmentWebAppThumbnailLarge,
    }
  },
  { 
    id: 4,
    title: 'Memory Game',
    skills: ['html', 'css', 'javascript'],
    images: {
      small: memoryGameThumbnailSmall,
      large: memoryGameThumbnailLarge,
    }
  },
  { 
    id: 5,
    title: 'Art Gallery Showcase',
    skills: ['html', 'css', 'javascript'],
    images: {
      small: artGalleryShowcaseThumbnailSmall,
      large: artGalleryShowcaseThumbnailLarge,
    }
  },
] 

export const NavItems = [
  {
    idx: 0,
    name: 'GitHub',
    url: 'https://x.com/weirdlilguys',
    icons: {
      small: <GitHubSmallIcon />,
      large: <GitHubIcon />
    }
  },
  {
    idx: 1,
    name: 'Frontend Mentor',
    url: 'https://x.com/weirdlilguys',
    icons: {
      small: <FrontendMentorSmallIcon />,
      large: <FrontendMentorIcon />
    }
  },
  {
    idx: 2,
    name: 'LinkedIn',
    url: 'https://x.com/weirdlilguys',
    icons: {
      small: <LinkedInSmallIcon />,
      large: <LinkedInIcon />
    }
  },
  {
    idx: 3,
    name: 'Twitter',
    url: 'https://x.com/weirdlilguys',
    icons: {
      small: <TwitterSmallIcon />,
      large: <TwitterIcon />
    }
  },
]