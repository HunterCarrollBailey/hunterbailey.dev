import ProjectsList from "./ProjectsList";
export default function Projects() {
  return (
    <section id="Projects" className="mt-[2%] w-full">
      <div className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-6 gap-4">
        <ProjectsList />
      </div>
    </section>
  );
}
