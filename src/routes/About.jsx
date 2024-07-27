import PreviousEmployers from "../components/PreviousEmployers";
import AboutBio from "../components/AboutBio";
import Degree from "../components/Degree";
import SkillItem from "../components/SkillItem";
export default function About() {
  return (
    <main className="flex-grow overflow-scroll no-scrollbar">
      <section className="flex flex-col lg:flex-row gap-3 bg-slate-100 min-h-[45dvh] w-full p-8">
        <AboutBio />
        <div className="flex flex-col w-full lg:w-[35%]">
          <PreviousEmployers />
          <Degree />
        </div>
      </section>
      <section className="flex flex-col lg:flex-row bg-skills bg-cover bg-no-repeat min-h-[45dvh] w-full">
        <div className="w-full bg-stone-600/50 p-5 min-h-[45dvh]">
          <h1 className="text-3xl text-slate-200 font-bold text-center mb-[1%]">
            My Skills
          </h1>
          <ul className="w-full">
            <ol className="list-decimal flex flex-row justify-start lg:justify-evenly px-5 lg:px-0 flex-wrap mb-[3%] lg:mb-[1%] text-slate-200 font-semibold text-lg">
              <li>Conversational Understanding</li>
              <li>Light Experience & Exposure</li>
              <li>Practical Experience Professionally</li>
              <li>Advanced Implmenentation & Projects</li>
              <li>Several years experience & very comfortable.</li>
            </ol>
            <div>
            <SkillItem name="HTML / CSS" experience="5" />
            <SkillItem name="SaSS / SCSS" experience="4" />
            <SkillItem name="TailwindCSS" experience="3" />
            <SkillItem name="Bootstrap" experience="4" />
            <SkillItem name="JavaScript" experience="3" />
            </div>
          </ul>
        </div>
      </section>
    </main>
  );
}
