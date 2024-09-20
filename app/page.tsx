
import FrontendMentorIcon from "@/components/icons/frontendMentorIcon";
import GitHubIcon from "@/components/icons/gitHubIcon";
import LinkedInIcon from "@/components/icons/linkedInIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
import LinkedInSmallIcon from "@/components/icons/linkedInSmallIcon";
import GitHubSmallIcon from "@/components/icons/githubSmallIcon";
import FrontendMentorSmallIcon from "@/components/icons/frontendMentorSmallIcon";
import TwitterSmallIcon from "@/components/icons/twitterSmallIcon";
import profileImgMobile from '../public/assets/images/image-profile-mobile.webp';
import profileImgTablet from '../public/assets/images/image-profile-tablet.webp';
import circlePattern from '../public/assets/images/pattern-circle.svg';
import ringsPattern from '../public/assets/images/pattern-rings.svg';
import Image, { StaticImageData } from "next/image";
import project1thumb from '../public/assets/images/thumbnail-project-1-small.webp';
import project2thumb from '../public/assets/images/thumbnail-project-2-small.webp';
import project3thumb from '../public/assets/images/thumbnail-project-3-small.webp';
import project4thumb from '../public/assets/images/thumbnail-project-4-small.webp';
import project5thumb from '../public/assets/images/thumbnail-project-5-small.webp';
import project6thumb from '../public/assets/images/thumbnail-project-6-small.webp';

const ProjectItem: React.FC<{ imgData: StaticImageData, title: string, skills: string[] }> = ({ imgData, title, skills }) => {
  return (
    <li>
      <Image src={imgData} alt={`${title} preview`} />
      <p className="text-2xl font-bold mt-5">
        {title.toUpperCase()}
      </p>
      <ul className="flex space-x-3.5 mt-1.5 mb-4">
        {skills.map((skill, idx) => <li key={idx}>{skill.toUpperCase()}</li>)}
      </ul>
      <button className="font-bold mr-6 pb-1.5 tracking-widest border-b-2 border-green">
        VIEW PROJECT
      </button>
      <button className="font-bold pb-1.5 tracking-widest border-b-2 border-green">
        VIEW CODE
      </button>
    </li>
  )
}

export default function Home() {
  return (
    <div className="text-white">
      {/* <Image src={profileImgTablet} alt='profile image' width={322} className='hidden md:block absolute right-0 top-0' /> */}
      <div className="px-4 md:px-6 md:py-2">
        <header className="flex flex-col md:flex-row md:justify-between items-center space-y-5 relative z-50">
          <h1 className='text-2xl md:text-3xl mt-5 font-bold'>adamkeyes</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li>
                <GitHubIcon />
              </li>
              <li>
                <FrontendMentorIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </nav>
          <nav className="md:hidden">
            <ul className="flex space-x-7">
              <li>
                <GitHubSmallIcon />
              </li>
              <li>
                <FrontendMentorSmallIcon />
              </li>
              <li>
                <LinkedInSmallIcon />
              </li>
              <li>
                <TwitterSmallIcon />
              </li>
            </ul>
          </nav>
          <Image src={profileImgMobile} alt='profile image' width={174} className='absolute top-0 z-40 md:hidden' />
          <Image className='absolute right-52 top-36 md:hidden' src={ringsPattern} alt='rings pattern' />
          <Image className='absolute left-72 top-64 md:hidden' src={circlePattern} alt='circle pattern' />
          <div id='spacer' className="h-80 md:hidden"></div>
        </header>
        <Image src={profileImgTablet} alt='profile image' width={322} className='hidden md:block absolute right-0 top-0' />
        <Image className='absolute -left-64 top-20 hidden md:block' src={ringsPattern} alt='rings pattern' />
        <Image className='absolute -right-16 bottom-60 hidden md:block' src={circlePattern} alt='circle pattern' />

        <section className="text-center relative md:mt-16 md:text-left md:max-w-md">
          {/* <Image src={profileImgTablet} alt='profile image' width={322} className='hidden md:block absolute right-0 top-0' /> */}
          {/* <Image src={circlePattern} alt='circle pattern' />
        <Image src={ringsPattern} alt='rings pattern' /> */}
          <blockquote className="text-4xl md:text-7xl font-bold md:leading-[5rem]">
            Nice to meet you! I&apos;m <span className="border-b-4 border-green">Adam Keyes</span>.
          </blockquote>
          <p className="mt-8">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <button className="mt-7 font-bold tracking-widest border-b-2 border-green pb-2">
            CONTACT ME
          </button>
          <hr className="mt-16 md:hidden" />
          <div id='spacer' className="hidden md:block h-16"></div>
        </section>

        <hr className="mt-16 hidden md:block" />


        <section className="relative">
          <ul className="text-center pt-8 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:text-left md:gap-y-10 lg:grid-cols-3">
            <li>
              <p className="text-3xl font-bold mb-0.5 md:mb-2">HTML</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5 md:mb-2">CSS</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5 md:mb-2">Javascript</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5 md:mb-2">Accessibility</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5 md:mb-2">React</p>
              <p>3 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5 md:mb-2">Sass</p>
              <p>3 Years Experience</p>
            </li>
          </ul>
          <Image className='absolute -bottom-8 left-44 md:left-auto md:-right-80 md:-bottom-16' src={ringsPattern} alt='rings pattern' />
          <hr className="mt-8 md:hidden" />
        </section>

        <section className="pt-16">
          <div className="flex justify-between mb-10 md:mb-14">
            <h2 className="text-4xl md:text-7xl font-bold">
              Projects
            </h2>
            <div className="">
              <button className="font-bold tracking-widest border-b-2 border-green pb-1 md:mt-6">
                CONTACT ME
              </button>
            </div>
    
          </div>
          <ul className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-5 md:gap-y-16">
            <ProjectItem imgData={project1thumb} title='design portfolio' skills={['html', 'css']} />
            <ProjectItem imgData={project2thumb} title='e-learning landing page' skills={['html', 'css']} />
            <ProjectItem imgData={project3thumb} title='todo web app' skills={['html', 'css', 'javascript']} />
            <ProjectItem imgData={project4thumb} title='entertainment web app' skills={['html', 'css', 'javascript']} />
            <ProjectItem imgData={project5thumb} title='memory game' skills={['html', 'css', 'javascript']} />
            <ProjectItem imgData={project6thumb} title='art gallery showcase' skills={['html', 'css', 'javascript']} />
          </ul>
        </section>
      </div>
      
      <div className="bg-grey-200 mt-16 px-3 md:relative">
        <section className="pt-12 relative md:max-w-md md:mx-auto">
          <h3 className="text-4xl mb-4 font-bold text-center md:text-7xl md:mb-6">Contact</h3>
          <p className="text-center">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
          <form action="" method="post" className="flex flex-col mt-12">
            <input className='bg-transparent border-b border-grey-100 mb-7 pl-4 pb-3' type="text" placeholder="NAME" />
            <input className='bg-transparent border-b border-grey-100 mb-7 pl-4 pb-4' type="email" name="" id="" placeholder="EMAIL" />
            <textarea className='bg-transparent border-b border-grey-100 pl-4 h-24' name="" id="" placeholder="MESSAGE" />
            <button type="submit" className="w-fit ml-auto border-b-2 border-green mt-7 pb-2 md:tracking-widest">
              SEND MESSAGE
            </button>
          </form>
          <Image className='absolute bottom-6 right-60 md:hidden' src={ringsPattern} alt='rings pattern' />
        </section>
        <Image className='hidden md:block absolute left-0 bottom-44 -left-96' src={ringsPattern} alt='rings pattern' />
        <hr className="mt-20 md:mx-4" />
        <footer className="bg-grey-200 flex flex-col items-center mt-8 pb-14 space-y-4 md:flex-row md:space-y-0 md:justify-between md:mt-6 md:mx-4 md:pb-10">
          <h4 className="text-2xl font-bold md:text-3xl">adamkeyes</h4>
          <nav className="md:hidden">
            <ul className="flex space-x-6">
              <li>
                <GitHubSmallIcon />
              </li>
              <li>
                <FrontendMentorSmallIcon />
              </li>
              <li>
                <LinkedInSmallIcon />
              </li>
              <li>
                <TwitterSmallIcon />
              </li>
            </ul>
          </nav>
          <nav className="hidden md:block">
            <ul className="flex space-x-8 items-center">
              <li>
                <GitHubIcon />
              </li>
              <li>
                <FrontendMentorIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
              <li>
                <TwitterIcon />
              </li>
            </ul>
          </nav>
        </footer>
      </div>
    </div>
  );
}
