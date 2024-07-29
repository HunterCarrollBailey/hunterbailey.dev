import PreviousEmployers from "../components/PreviousEmployers";
import AboutBio from "../components/AboutBio";
import Degree from "../components/Degree";
export default function About() {
  return (
    <main className="flex-grow overflow-scroll no-scrollbar h-96 bg-cover bg-no-repeat">
      <section className="flex flex-col lg:flex-row w-full backdrop-blur bg-slate-200 lg:bg-slate-50/40 h-full">
        <div className="w-full p-10 flex flex-col lg:flex-row">
          <AboutBio />
          <div className="flex flex-col w-full lg:w-[35%]">
            <PreviousEmployers />
            <Degree />
          </div>
        </div>
      </section>
    </main>
  );
}
