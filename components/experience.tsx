import Image from "next/image"
import ringsPattern from '../public/assets/images/pattern-rings.svg';
import { Skills } from "@/app/config";

export default function Experience() {
  return (
    <section className="relative">
      <ul className="text-center pt-8 space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:text-left md:gap-y-10 lg:grid-cols-3 xl:mt-12 xl:ml-1 xl:gap-y-16">
        {Skills.map(skill => {
          return (
            <li key={skill.id}>
              <p className="text-3xl font-bold mb-0.5 md:mb-2 xl:text-5xl xl:mb-4">{skill.name}</p>
              <p>{skill.experienceInYears} Years Experience</p>
            </li>
          )
        })}
      </ul>
      <Image className='absolute -bottom-8 left-44 md:left-auto md:-right-80 md:-bottom-16' src={ringsPattern} alt='rings pattern' />
      <hr className="mt-8 md:hidden" />
    </section>
  )
}