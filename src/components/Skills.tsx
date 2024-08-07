"use client";
import Marquee from "react-fast-marquee";
import { FaLaravel, FaReact, FaPhp, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiSass,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

const SkillsList = [
  {
    name: "Laravel",
    icon: <FaLaravel />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "PHP",
    icon: <FaPhp />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS3",
    icon: <FaCss3 />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Sass",
    icon: <SiSass />,
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsLine />,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="p-5">
      <div className="rounded-xl backdrop-blur bg-slate-950/50 border border-cyan-800 shadow-md shadow-cyan-800 p-5">
        <h2 className="text-2xl font-semibold mb-1 py-1 text-center font-heading">
          Skills
        </h2>
        <Marquee speed={50} className="p-2">
          {SkillsList.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center rounded-lg bg-slate-950/50 backdrop-blur border border-cyan-800 shadow-md shadow-cyan-800 p-5 mx-3 w-[30dvw] md:w-[20dvw] lg:w-[15dvw] xl:w-[10dvw] transition hover:scale-105"
            >
              <span className="text-3xl mb-2">{skill.icon}</span>
              {skill.name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
