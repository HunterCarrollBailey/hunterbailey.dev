import Book from "@/components/Book";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center">
        <div className="flex flex-col lg:w-[45dvw] xl:w-[35dvw]">
          <Hero />
          <Skills />
          <Projects />
        </div>
        <div className="flex flex-col lg:w-[55dvw] lg:mt-5">
          <Experience />
          <Book />
        </div>
      </div>
    </div>
  );
}
