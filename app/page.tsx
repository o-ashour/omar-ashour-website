
import FrontendMentorIcon from "@/components/icons/frontendMentorIcon";
import GitHubIcon from "@/components/icons/gitHubIcon";
import LinkedInIcon from "@/components/icons/linkedInIcon";
import TwitterIcon from "@/components/icons/twitterIcon";
import LinkedInSmallIcon from "@/components/icons/linkedInSmallIcon";
import GitHubSmallIcon from "@/components/icons/githubSmallIcon";
import FrontendMentorSmallIcon from "@/components/icons/frontendMentorSmallIcon";
import TwitterSmallIcon from "@/components/icons/twitterSmallIcon";
import profileImgMobile from '../public/assets/images/image-profile-mobile.webp';
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
      <div className="px-4">
        <header className="flex flex-col items-center space-y-5 relative z-50">
          <h1 className='text-2xl mt-5 font-bold'>adamkeyes</h1>
          <nav className="hidden md:block">
            <ul className="">
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
          <Image src={profileImgMobile} alt='profile image' width={174} className='absolute top-0 z-40' />
          <Image className='absolute right-52 top-36' src={ringsPattern} alt='rings pattern' />
          <Image className='absolute left-72 top-64' src={circlePattern} alt='circle pattern' />
          <div id='spacer' className="h-80"></div>
        </header>

        <section className="text-center">
          {/* <Image src={profileImgMobile} alt='profile image' width={174} className='absolute top-0' /> */}
          {/* <Image src={circlePattern} alt='circle pattern' />
        <Image src={ringsPattern} alt='rings pattern' /> */}
          <blockquote className="text-4xl font-bold">
            Nice to meet you! I&apos;m <span className="border-b-4 border-green">Adam Keyes</span>.
          </blockquote>
          <p className="mt-8">
            Based in the UK, I&apos;m a front-end developer passionate about
            building accessible web apps that users love.
          </p>
          <button className="mt-7 font-bold tracking-widest border-b-2 border-green pb-2">
            CONTACT ME
          </button>
          <hr className="mt-16" />
        </section>

        <section className="relative">
          <ul className="text-center pt-8 space-y-6">
            <li>
              <p className="text-3xl font-bold mb-0.5">HTML</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5">CSS</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5">Javascript</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5">Accessibility</p>
              <p>4 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5">React</p>
              <p>3 Years Experience</p>
            </li>
            <li>
              <p className="text-3xl font-bold mb-0.5">Sass</p>
              <p>3 Years Experience</p>
            </li>
          </ul>
          <Image className='absolute -bottom-8 left-44' src={ringsPattern} alt='rings pattern' />
          <hr className="mt-8" />
        </section>

        <section className="pt-16">
          <div className="flex justify-between mb-10">
            <h2 className="text-4xl font-bold">
              Projects
            </h2>
            <button className="font-bold tracking-widest border-b-2 border-green pb-1">
              CONTACT ME
            </button>
          </div>
          <ul className="space-y-6">
            <ProjectItem imgData={project1thumb} title='design portfolio' skills={['html', 'css']} />
            <ProjectItem imgData={project2thumb} title='e-learning landing page' skills={['html', 'css']} />
            <ProjectItem imgData={project3thumb} title='todo web app' skills={['html', 'css', 'javascript']} />
            <ProjectItem imgData={project4thumb} title='entertainment web app' skills={['html', 'css', 'javascript']} />
            <ProjectItem imgData={project5thumb} title='memory game' skills={['html', 'css', 'javascript']} />
            <ProjectItem imgData={project6thumb} title='art gallery showcase' skills={['html', 'css', 'javascript']} />
          </ul>
        </section>
      </div>
      
      <div className="bg-grey-200 mt-16 px-3">
        <section className="pt-12 relative">
          <h3 className="text-4xl mb-4 font-bold text-center">Contact</h3>
          <p className="text-center">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I&apos;ll get back to you as soon as possible.
          </p>
          <form action="" method="post" className="flex flex-col mt-12">
            <input className='bg-transparent border-b border-grey-100 mb-7 pl-4 pb-3' type="text" placeholder="NAME" />
            <input className='bg-transparent border-b border-grey-100 mb-7 pl-4 pb-4' type="email" name="" id="" placeholder="EMAIL" />
            <textarea className='bg-transparent border-b border-grey-100 pl-4 h-24' name="" id="" placeholder="MESSAGE" />
            <button type="submit" className="w-fit ml-auto border-b-2 border-green mt-7 pb-2">
              SEND MESSAGE
            </button>
          </form>
          <Image className='absolute bottom-6 right-60' src={ringsPattern} alt='rings pattern' />
        </section>
        <hr className="mt-20" />
        <footer className="bg-grey-200 flex flex-col items-center mt-8 pb-14 space-y-4">
          <h4 className="text-2xl font-bold">adamkeyes</h4>
          <nav>
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
        </footer>
      </div>
      
      
    </div>
  );
}
