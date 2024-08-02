import About from "../components/About";
import Experience from "../components/Experience";
import ExternalNavigation from "../components/ExternalNavigation";
import Headshot from "../assets/Headshot.jpg";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow min-h-screen max-h-screen w-screen bg-slate-950 text-slate-300 bg-rose bg-contain bg-no-repeat bg-center font-display">
      <div className="backdrop-blur overflow-scroll p-10">
        <div className="flex flex-col w-full">
          <div className="flex flex-col lg:flex-row flex-wrap w-full  min-h-screen content-center justify-center">
            <div className="flex flex-col text-center leading-relaxed hover:border-cyan-500 hover:border p-5 rounded-2xl bg-slate-950/70 shadow-md  shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-500">
              <Hero />
              <div className="flex flex-row justify-center w-full mt-[2%]">
                <ExternalNavigation />
              </div>
            </div>
          </div>
          <div className=" min-h-[65dvh] flex flex-col md:flex-row flex-wrap place-content-center gap-5 md:gap-0">
            <div className="basis-1/3">
              <img
                src={Headshot}
                alt="Headshot Image of Hunter Bailey."
                className="rounded-full w-[60%] mx-auto shadow-md  shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-500"
              />
            </div>
            <div className="basis-2/3">
              <About />
            </div>
          </div>
        </div>
        <div className="flex flex-col  min-h-[65dvh] mt-[15%] lg:mt-0">
          <Experience />
        </div>
        <div className="flex flex-col min-h-[65dvh] w-full">
          <h2 className="text-2xl p-5 rounded-full text-center bg-slate-950/70 shadow-md  shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-500 my-[5%] w-full md:w-[20dvw] md:my-0 mx-auto">Some of My Projects</h2>
          <Projects />
        </div>
      </div>
    </main>
  );
}
