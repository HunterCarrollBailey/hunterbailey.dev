import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
export default function Home() {
  return (
      <div className='grid grid-cols-2 mt-5'>
        <div className="col-span-2 md:col-span-1">
          <Hero />
            <Skills />
        </div>
        <div className="col-span-2 md:col-span-1">
          <Projects />
        </div>
        <div className='col-span-2'>
          <Experience />
        </div>
      </div>
  );
}
