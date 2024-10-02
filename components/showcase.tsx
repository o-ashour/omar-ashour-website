import { Projects } from "@/app/config";
import { ProjectItem } from "./projectItem";

export default function Showcase() {
  return (
    <section className="pt-16 xl:pt-36">
      <div className="flex justify-between mb-10 md:mb-14 xl:mb-20">
        <h2 className="text-4xl md:text-7xl font-bold">
          Projects
        </h2>
        <div>
          <a href='#contact-section'>
            <button className="font-bold tracking-widest border-b-2 border-green pb-1 md:mt-6 hover:text-green">
              CONTACT ME
            </button>
          </a>
        </div>
      </div>
      <ul className="space-y-6 md:grid md:grid-cols-2 md:space-y-0 md:gap-x-5 md:gap-y-16 xl:hidden">
        {Projects.map(project => {
          return (
            <ProjectItem key={project.id} imgData={project.images.small} title={project.title} skills={project.skills} urls={project.urls} />
          )
        })}
      </ul>
      <ul className="hidden xl:grid grid-cols-2 gap-x-8 gap-y-12">
        {Projects.map(project => {
          return (
            <ProjectItem key={project.id} imgData={project.images.large} title={project.title} skills={project.skills} urls={project.urls} />
          )
        })}
      </ul>
    </section>
  )
}
