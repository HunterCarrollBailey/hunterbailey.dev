import PropTypes from "prop-types";
import { FaExternalLinkAlt } from "react-icons/fa";

ExperienceItem.propTypes = {
  timePeriod: PropTypes.string,
  shortID: PropTypes.string,
  link: PropTypes.link,
  title: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  skills: PropTypes.array,
};

export default function ExperienceItem(
  {timePeriod,
  shortID,
  link,
  title,
  name,
  description,
  skills}
) {
  return (
    <li className="flex flex-col md:flex-row align-top items-start justify-start w-full">
      <aside className="text-md w-[45%] my-[1%] lg:my-0 text-slate-400 basis-1/3">{timePeriod}</aside>
      <section id={shortID} className="w-full basis-2/3 hover:border-cyan-500 hover:border p-5 rounded-2xl bg-slate-950/70 shadow-md shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-500 hover:-translate-y-2">
        <p className="font-semibold text-slate-200">
          <a href={link} target="_blank" className="flex flex-row flex-wrap items-center gap-3">
            {title} | {name} <FaExternalLinkAlt className="text-xs"/>
          </a>
        </p>
        <p className="text-justify leading-relaxed text-slate-300">{description}</p>
        <ul className="flex flex-row flex-wrap gap-2 lg:gap-5 my-[1%] text-sm w-full">
          {skills.map((skill, index) => (
            <li key={index} className="list-item bg-cyan-100/10 bg-blend-darken text-cyan-200 rounded-full px-3 py-1">{skill}</li>
          ))}
        </ul>
      </section>
    </li>
  );
}
