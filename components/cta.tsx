import Image from "next/image"
import ringsPattern from '../public/assets/images/pattern-rings.svg';

export default function CTA() {
  return (
    <section className="pt-12 relative md:max-w-md md:mx-auto xl:flex xl:max-w-full xl:gap-x-64 xl:pt-20">
      <div className="xl:max-w-md">
        <h3 className="text-4xl mb-4 font-bold text-center md:text-7xl md:mb-6 xl:text-left xl:mb-10">Contact</h3>
        <p className="text-center xl:text-left">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form action="" method="post" className="flex flex-col mt-12 xl:flex-1 xl:mt-0">
        <input className='bg-transparent border-b border-grey-100 mb-7 pl-4 pb-3 xl:pb-4' type="text" placeholder="NAME" />
        <input className='bg-transparent border-b border-grey-100 mb-7 pl-4 pb-4' type="email" name="" id="" placeholder="EMAIL" />
        <textarea className='bg-transparent border-b border-grey-100 pl-4 h-24 xl:h-32' name="" id="" placeholder="MESSAGE" />
        <button type="submit" className="w-fit ml-auto border-b-2 border-green mt-7 pb-2 md:tracking-widest xl:mt-8">
          SEND MESSAGE
        </button>
      </form>
      <Image className='absolute bottom-6 right-60 md:hidden' src={ringsPattern} alt='rings pattern' />
    </section>
  )
}
