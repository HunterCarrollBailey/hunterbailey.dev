import Hero from "../components/Hero";
import AboutHome from "../components/AboutHome";
import ProjectsHome from "../components/ProjectsHome";

export default function Home() {
  return (
      <main className="flex-grow overflow-scroll no-scrollbar">
        <Hero />
        <AboutHome />
        <ProjectsHome />
      </main>
  );
}
