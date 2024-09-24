
import Image from "next/image";
import { StaticImageData } from "next/image";

export const ProjectItem: React.FC<{ imgData: StaticImageData, title: string, skills: string[] }> = ({ imgData, title, skills }) => {
  return (
    <li className="relative">
      <Image src={imgData} alt={`${title} preview`} />
      <p className="text-2xl font-bold mt-5">
        {title.toUpperCase()}
      </p>
      <ul className="flex space-x-3.5 mt-1.5 mb-4">
        {skills.map((skill, idx) => <li key={idx}>{skill.toUpperCase()}</li>)}
      </ul>
      <button className="font-bold mr-6 pb-1.5 tracking-widest border-b-2 border-green xl:hidden">
        VIEW PROJECT
      </button>
      <button className="font-bold pb-1.5 tracking-widest border-b-2 border-green xl:hidden">
        VIEW CODE
      </button>
    </li>
  )
}