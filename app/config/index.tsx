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
  }
}[]

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
  }
] 