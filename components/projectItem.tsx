
import Image from "next/image";
import { StaticImageData } from "next/image";

export const ProjectItem: React.FC<{ imgData: StaticImageData, title: string, skills: string[] }> = ({ imgData, title, skills }) => {
  return (
    <li className="relative"> {/* this needs to be relative? */}
      <div className="relative">
        <div id='overlay' className="hidden absolute opacity-0 hover:opacity-100 hover:bg-black/80 w-full h-full hover:cursor-pointer flex items-center justify-center xl:flex">
          <div className="flex flex-col space-y-10 items-center">
            <button className="font-bold pb-2 tracking-widest border-b-2 border-green hover:text-green">
              VIEW PROJECT
            </button>
            <button className="w-fit font-bold pb-2 tracking-widest border-b-2 border-green hover:text-green">
              VIEW CODE
            </button>
          </div>
        </div>
        <Image src={imgData} alt={`${title} preview`} />
      </div>
      <p className="text-2xl font-bold mt-5">
        {title.toUpperCase()}
      </p>
      <ul className="flex space-x-3.5 mt-1.5 mb-4">
        {skills.map((skill, idx) => <li key={idx}>{skill.toUpperCase()}</li>)}
      </ul>
      <button className="font-bold mr-6 pb-1.5 tracking-widest border-b-2 border-green xl:hidden hover:text-green">
        VIEW PROJECT
      </button>
      <button className="font-bold pb-1.5 tracking-widest border-b-2 border-green xl:hidden hover:text-green">
        VIEW CODE
      </button>
    </li>
  )
}