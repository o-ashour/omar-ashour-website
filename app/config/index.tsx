import { StaticImageData } from "next/image"
import microPaymentsBlogThumbnailSmall from '../../public/assets/images/thumbnail-ttj-small.png';
import microPaymentsBlogThumbnailLarge from '../../public/assets/images/thumbnail-ttj-large.png';
import linksharingAppThumbnailSmall from '../../public/assets/images/thumbnail-link-sharing-app-small.jpg';
import linksharingAppThumbnailLarge from '../../public/assets/images/thumbnail-link-sharing-app-large.jpg';
import catWikiThumbnailSmall from '../../public/assets/images/thumbnail-catwiki-small.png';
import catWikiThumbnailLarge from '../../public/assets/images/thumbnail-catwiki-large.png';
import socialAppThumbnailSmall from '../../public/assets/images/thumbnail-social-app-small.png';
import socialAppThumbnailLarge from '../../public/assets/images/thumbnail-social-app-large.png';
import personalBlogThumbnailSmall from '../../public/assets/images/thumbnail-personal-blog-page-small.png';
import personalBlogThumbnailLarge from '../../public/assets/images/thumbnail-personal-blog-page-large.png';
import marketingSiteThumbnailSmall from '../../public/assets/images/thumbnail-marketing-site-small.png';
import marketingSiteThumbnailLarge from '../../public/assets/images/thumbnail-marketing-site-large.png';
import ecommerceSiteThumbnailSmall from '../../public/assets/images/thumbnail-ecommerce-site-small.png';
import ecommerceSiteThumbnailLarge from '../../public/assets/images/thumbnail-ecommerce-site-large.png';
import LinkedInSmallIcon from "@/components/icons/linkedInSmallIcon";
import LinkedInIcon from "@/components/icons/linkedInIcon";
import GitHubIcon from "@/components/icons/gitHubIcon";
import GitHubSmallIcon from "@/components/icons/gitHubSmIcon";

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
    clientRepo?: string,
    serverRepo?: string,
  },
  contributions?: string[],
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
  { id: 0, name: 'TypeScript', experienceInYears: (new Date()).getFullYear() - 2022 },
  { id: 1, name: 'React', experienceInYears: (new Date()).getFullYear() - 2022 },
  { id: 2, name: 'Node.js', experienceInYears: (new Date()).getFullYear() - 2022 },
  { id: 3, name: 'SQL', experienceInYears: (new Date()).getFullYear() - 2024 },
  { id: 4, name: 'Firebase', experienceInYears: (new Date()).getFullYear() - 2022 },
  { id: 5, name: 'Next.js', experienceInYears: (new Date()).getFullYear() - 2022 },
  { id: 6, name: 'CSS', experienceInYears: (new Date()).getFullYear() - 2021 },
]

export const Projects: Projects = [
  {
    id: 0,
    title: 'Tip Top Jar: Micropayments App',
    skills: ['next.js', 'chakraUI', 'typescript', 'firebase'],
    images: {
      small: microPaymentsBlogThumbnailSmall,
      large: microPaymentsBlogThumbnailLarge,
    },
    urls: {
      productionSite: 'https://www.tiptopjar.com',
    },
    contributions: ['admin panel', 'blog', 'backend']
  },
  {
    id: 1,
    title: 'O&A: E-commerce App',
    skills: ['react', 'redux', 'node.js', 'express.js', 'sql'],
    images: {
      small: ecommerceSiteThumbnailSmall,
      large: ecommerceSiteThumbnailLarge,
    },
    urls: {
      clientRepo: 'https://github.com/o-ashour/oa-ecommerce-platform',
      serverRepo: 'https://github.com/o-ashour/oa-ecommerce-platform-server'
    },
    contributions: ['full development']
  },
  {
    id: 2,
    title: 'DevLinks: Link Sharing App',
    skills: ['next.js', 'tailwind', 'typescript', 'postgreSQL'],
    images: {
      small: linksharingAppThumbnailSmall,
      large: linksharingAppThumbnailLarge,
    },
    urls: {
      repo: 'https://github.com/o-ashour/link-sharing-app',
      productionSite: 'https://link-sharing-app-eight-black.vercel.app/',
    },
    contributions: ['full development'],
  },
  {
    id: 3,
    title: 'Cat Wiki',
    skills: ['react', 'express.js', 'mongodb', 'node.js'],
    images: {
      small: catWikiThumbnailSmall,
      large: catWikiThumbnailLarge,
    },
    urls: {
      repo: 'https://github.com/o-ashour/cat-wiki',
    },
    contributions: ['full development'],
  },
  {
    id: 4,
    title: 'Migrant Mingle: Social Network / Hackathon Entry',
    skills: ['next.js', 'tailwind', 'firebase'],
    images: {
      small: socialAppThumbnailSmall,
      large: socialAppThumbnailLarge,
    },
    urls: {
      repo: 'https://github.com/o-ashour/migrant-mingle',
      productionSite: 'https://migrant-mingle.vercel.app/',
    },
    contributions: ['backend'],
  },
  {
    id: 5,
    title: 'Ashraf Ashour Blog',
    skills: ['html', 'php', 'wordpress'],
    images: {
      small: personalBlogThumbnailSmall,
      large: personalBlogThumbnailLarge,
    },
    urls: {
      productionSite: 'https://www.ashrafashour.com/',
    },
    contributions: ['wordpress to static site migration'],
  },
  {
    id: 6,
    title: 'Digital Humani: Marketing Site for Reforestation API',
    skills: ['html', 'css', 'javascript'],
    images: {
      small: marketingSiteThumbnailSmall,
      large: marketingSiteThumbnailLarge,
    },
    urls: {
      productionSite: 'https://www.digitalhumani.com/',
    },
    contributions: ['timed newsletter signup'],
  },
]

export const NavItems = [
  {
    idx: 0,
    name: 'GitHub',
    url: 'https://github.com/o-ashour',
    icons: {
      small: <GitHubSmallIcon />,
      large: <GitHubIcon />
    }
  },
  {
    idx: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/omar-ash',
    icons: {
      small: <LinkedInSmallIcon />,
      large: <LinkedInIcon />
    }
  },
]