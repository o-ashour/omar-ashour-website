import NavMenu from "./navMenu"
import NavMenuSmall from "./navMenuSmall"
import Image from "next/image"
import profileImgMobile from '../public/assets/images/image-profile-mobile.png';
import ringsPattern from '../public/assets/images/pattern-rings.svg';
import circlePattern from '../public/assets/images/pattern-circle.svg';

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row md:justify-between items-center space-y-5 relative z-50">
      <h1 className='text-2xl md:text-3xl mt-5 font-bold'>omar@shour</h1>
      <NavMenu />
      <div className="relative z-50 md:hidden">
        <NavMenuSmall />
      </div>
      <Image src={profileImgMobile} alt='profile image' width={174} className='absolute top-0 z-40 md:hidden' priority />
      <Image className='absolute right-52 top-36 md:hidden' src={ringsPattern} alt='rings pattern' />
      <Image className='absolute left-72 top-64 md:hidden' src={circlePattern} alt='circle pattern' />
      <div id='spacer' className="h-80 md:hidden"></div>
    </header>
  )
}