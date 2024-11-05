import profileImgTablet from '../public/assets/images/image-profile-tablet.png';
import profileImgDesktop from '../public/assets/images/image-profile-desktop.png';
import ringsPattern from '../public/assets/images/pattern-rings.svg';
import Image from "next/image";
import Header from '@/components/header';
import Hero from '@/components/hero';
import Experience from '@/components/experience';
import Showcase from '@/components/showcase';
import CTA from '@/components/cta';
import Footer from '@/components/footer';
import { ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <div className="text-white overflow-x-hidden">
      <div className="px-4 md:px-6 md:py-2">
        <div className="max-w-6xl xl:relative xl:mx-auto">
          <Header />
          <Image src={profileImgTablet} alt='profile image' width={322} className='hidden md:block lg:hidden absolute right-0 top-0' priority />
          <Image src={profileImgDesktop} alt='profile image' width={445} className='hidden lg:block absolute right-0 top-0' priority />
          <Image className='absolute -left-64 top-20 hidden md:block' src={ringsPattern} alt='rings pattern' />
          <Hero />
          <hr className="mt-16 hidden md:block" />
          <Experience />
          <Showcase />
        </div>
      </div>

      <div className="bg-grey-200 mt-16 px-3 xl:mt-24">
        <div className="max-w-6xl xl:mx-auto relative">
          <CTA />
          <Image className='absolute -left-52 bottom-72 md:bottom-32 md:-left-96 xl:bottom-60' src={ringsPattern} alt='rings pattern' />
          <hr className="mt-20 md:mx-4 lg:mx-0" />
          <Footer />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
