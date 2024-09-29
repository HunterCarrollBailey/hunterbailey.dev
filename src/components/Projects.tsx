import Link from "next/link";
import { FaDesktop, FaGlobe, FaGithub } from "react-icons/fa";
const ProjectsList = [
  {
    "name": "Acolyte",
    "details": "Designed and developed a custom Remote Engagement and Learning Management System from the ground up, currently developing version 5 with a planned release in mid-2025.",
    "github": "https://github.com/baileycarroll/Acolyte-v4",
    "demo": "",
    "site": ""
  },
  {
    "name": "A Warrior's Journey",
    "details": "Authored and self-published a freestyle poetry book, demonstrating strong communication skills. Applied project management techniques to take the book from initial concept to publication, while showcasing resilience, creativity, and an aptitude for tackling challenging subjects–qualities that complement the essential skill of problem solving.",
    "github": "",
    "demo": "",
    "site": "Authored and self-published a freestyle poetry book, demonstrating strong communication skills. Applied project management techniques to take the book from initial concept to publication, while showcasing resilience, creativity, and an aptitude for tackling challenging subjects–qualities that complement the essential skill of problem solving."
  },
  {
    "name": "Corpus Vitae",
    "details": "Building a comprehensive fitness, meal, and life-tracking app using Flutter for Android/iOS with a MySQL database for cloud storage, starting with SQLite for local storage and expanding to a web service.",
    "github": "https://github.com/baileycarroll/CorpusVitae",
    "demo": "",
    "site": ""
  }
]
export default function Projects() {
  return (
    <section id="projects" className="p-5">
      <div className="rounded-xl backdrop-blur bg-slate-950/50 border border-cyan-800 shadow-md shadow-cyan-800 p-5">
        <h2 className="text-2xl font-semibold mb-1 py-1 text-center font-heading">
          Projects
        </h2>
        <ul className="flex flex-col gap-4">
          {ProjectsList.map((project, index) => (
            <li key={index} className="flex flex-row p-4 border border-cyan-800 shadow-md shadow-cyan-800 bg-slate-950/50 rounded-2xl">
            <div className="flex flex-col basis-5/6 lg:basis-3/4">
              <h3 className="font-bold text-lg text-cyan-400">{project.name}</h3>
              <p>
                {project.details}
              </p>
            </div>
            <div className="flex flex-row flex-wrap gap-4 text-2xl place-content-center mx-auto">
              {project.site !== "" ? <Link href={project.site} target="_blank" className="text-cyan-400"><FaGlobe /></Link> : null}
              {project.demo !== "" ? <Link href={project.demo} target="_blank" className="text-cyan-400"><FaDesktop /></Link> : null}
              {project.github !== "" ? <Link href={project.github} target="_blank" className="text-cyan-400"><FaGithub /></Link> : null}
            </div>
          </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
