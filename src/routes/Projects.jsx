import projectsData from "../assets/projects.json";
import ProjectCard from "../components/ProjectCard";
export default function Projects() {
  let projects = [];
  for (let i = 0; i < projectsData.projects.length; i++) {
    const { name, description, techStack, link } = projectsData.projects[i];
    projects.push(
      <ProjectCard
        name={name}
        description={description}
        techStack={techStack.map((tech) => tech.name)}
        link={link}
        key={"project" + i}
      />
    );
  }
  return (
    <main className="flex-grow overflow-scroll no-scrollbar h-96 bg-forest2 bg-cover bg-no-repeat">
      <div className="flex flex-col w-full backdrop-blur h-full">
        <h1 className="text-3xl font-bold text-slate-200 text-center mt-[3%]">
          My Projects
        </h1>
        <section className="flex flex-col flex-wrap place-content-center lg:flex-row w-full p-8 gap-3">
          {projects}
        </section>
      </div>
    </main>
  );
}
