import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";

export const ProjectItem: React.FC<{ imgData: StaticImageData, title: string, skills: string[], urls?: { repo?: string, productionSite?: string }, contributions?: string[] }> = ({ imgData, title, skills, urls, contributions }) => {
  return (
    <li>
      <div className="relative">
        {(urls?.productionSite || urls?.repo) &&
          <div id='overlay' className="hidden absolute opacity-0 hover:opacity-100 hover:bg-black/80 w-full h-full hover:cursor-pointer flex items-center justify-center xl:flex">
            <div className="flex flex-col space-y-10 items-center">
              {urls?.productionSite &&
                <Link href={urls.productionSite} target="_blank">
                  <button className="font-bold pb-2 tracking-widest border-b-2 border-green hover:text-green">
                    VIEW PROJECT
                  </button>
                </Link>
              }
              {urls?.repo &&
                <Link href={urls.repo} target='_blank'>
                  <button className="w-fit font-bold pb-2 tracking-widest border-b-2 border-green hover:text-green">
                    VIEW CODE
                  </button>
                </Link>
              }
            </div>
          </div>
        }
        <Image src={imgData} alt={`${title} preview`} />
      </div>
      <p className="text-2xl font-bold mt-5">
        {title.toUpperCase()}
      </p>
      <ul className="flex space-x-3.5 mt-1.5 mb-4">
        {skills.map((skill, idx) => <li key={idx}>{skill.toUpperCase()}</li>)}
      </ul>

      {contributions &&
        <ul className="list-disc flex ml-4 mb-4 space-x-8">
          {contributions?.map((contribution, idx) => <li key={idx}>{contribution}</li>)}
        </ul>
      }

      {urls?.productionSite &&
        <Link href={urls.productionSite} target='_blank'>
          <button className="font-bold mr-6 pb-1.5 tracking-widest border-b-2 border-green xl:hidden hover:text-green">
            VIEW PROJECT
          </button>
        </Link>
      }
      {urls?.repo &&
        <Link href={urls.repo} target='_blank'>
          <button className="font-bold pb-1.5 tracking-widest border-b-2 border-green xl:hidden hover:text-green">
            VIEW CODE
          </button>
        </Link>
      }
    </li>
  )
}