import Image from "next/image"
import errorIcon from '../public/assets/images/error-icon.svg';

export default function CTA() {
  const isError = false; // for styling

  return (
    <section className="pt-12 relative md:max-w-md md:mx-auto xl:flex xl:max-w-full xl:gap-x-64 xl:pt-20 z-50">
      <div className="xl:max-w-md">
        <h3 className="text-4xl mb-4 font-bold text-center md:text-7xl md:mb-6 xl:text-left xl:mb-10">Contact</h3>
        <p className="text-center xl:text-left">
          I would love to hear about your project and how I could help. Please
          fill in the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>
      <form action="" method="post" className="flex flex-col mt-12 xl:flex-1 xl:mt-0">
        <div className="flex flex-col items-end mb-7 space-y-1 relative">
          <input className={`w-full  bg-transparent border-b border-grey-100 pl-4 pb-3 xl:pb-4 focus:outline-none focus:border-green uppercase ${isError && 'border-red'}`} type="text" placeholder="NAME" />
          {isError &&
            <>
              <Image className='absolute -top-1' src={errorIcon} alt='error icon' />
              <small className="text-red">Sorry, invalid format here</small>
            </>
          }
        </div>

        <div className="flex flex-col items-end mb-7 space-y-1 relative">
          <input className={`w-full bg-transparent border-b border-grey-100 pl-4 pb-4 focus:outline-none focus:border-green uppercase ${isError && 'border-red'}`} type="email" name="" id="" placeholder="EMAIL" />
          {isError &&
          <>
            <Image className='absolute -top-1' src={errorIcon} alt='error icon' />
            <small className="text-red">Sorry, invalid format here</small>
          </>
          }
        </div>

        <div className="flex flex-col items-end mb-7 space-y-1 relative">
          <textarea className={`w-full bg-transparent border-b border-grey-100 pl-4 h-24 xl:h-32 focus:outline-none focus:border-green ${isError && 'border-red'}`} name="" id="" placeholder="MESSAGE" />
          {isError &&
            <>
              <Image className='absolute -top-1' src={errorIcon} alt='error icon' />
              <small className="text-red">Sorry, invalid format here</small>
            </>
          }
        </div>

        <button type="submit" className="w-fit ml-auto border-b-2 border-green mt-7 pb-2 md:tracking-widest xl:mt-8 hover:text-green">
          SEND MESSAGE
        </button>
      </form>
    </section>
  )
}
