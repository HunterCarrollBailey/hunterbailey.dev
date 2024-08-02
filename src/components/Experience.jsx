import ExperienceList from "../components/ExperienceList.jsx";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <section className="w-full" id="Experience">
      <p className="text-start font-bold text-md mb-2">EXPERIENCE</p>
      <ul className="flex flex-col gap-5 w-full">
        <ExperienceList />
        <li className="text-slate-200 font-semibold">
          <a href="./Hunter-Bailey-Curriculum-Vitae.pdf" rel="noopener noreferrer" target="_blank" className="flex flex-row flex-wrap items-center gap-3 justify-end">
            See Full Curriculum Vitae <FaExternalLinkAlt className="text-xs" />
          </a>
        </li>
      </ul>
    </section>
  );
}
