import projects from "../assets/projects.json";
import ProjectItem from "./ProjectItem";
export default function ProjectsList() {
  return (
    <>
      {projects.projects.map((project, index) => (
        <ProjectItem
          id={`project-${index}`}
          key={index}
          colStart={project.colStart}
          rowStart={project.rowStart}
          title={project.title}
          description={project.description}
          skills={project.skills}
          linkType={project.linkType}
          link={project.link}
        />
      ))}
    </>
  );
}
