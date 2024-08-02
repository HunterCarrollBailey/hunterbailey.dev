import PropTypes from "prop-types";
ProjectItem.propTypes = {
  colStart: PropTypes.string,
  rowStart: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  linkType: PropTypes.string,
  link: PropTypes.link,
};
export default function ProjectItem({
  colStart,
  rowStart,
  title,
  description,
  skills,
  linkType,
  link,
}) {
  return (
    <div
      className={
        `col-span-2 row-span-3 col-start-${colStart}` +
        ` row-start-${rowStart}` +
        " border-cyan-500 border p-5 rounded-2xl bg-slate-950/70 shadow-md  shadow-cyan-600 flex flex-col justify-center"
      }
    >
      <h3 className="font-bold text-3xl">{title}</h3>
      <p className="leading-relaxed my-[3%]">{description}</p>
      <ul className="flex flex-row flex-wrap gap-2 lg:gap-5 my-[1%] text-sm w-full">
        {skills.map((skill, index) => (
          <li
            key={index}
            className="list-item bg-cyan-100/10 bg-blend-darken text-cyan-200 rounded-full px-3 py-1"
          >
            {skill}
          </li>
        ))}
      </ul>
      {linkType === "demo" || linkType === "site" ? (
        <button className="float-end bg-cyan-100/10 px-3 py-1 rounded-full text-cyan-200 shadow shadow-cyan-200 hover:shadow-lg hover:shadow-cyan-500 hover:-translate-y-1 place-self-end mt-auto">
          <a href={link} target="_blank">
            View {linkType.charAt(0).toUpperCase() + linkType.slice(1)}
          </a>
        </button>
      ) : (
        <button className="float-end bg-cyan-100/10 px-3 py-1 rounded-full text-cyan-200 shadow shadow-cyan-200 hover:shadow-lg hover:shadow-cyan-500 hover:-translate-y-1 place-self-end mt-auto">
          <a href={link} target="_blank">
            View Project
          </a>
        </button>
      )}
    </div>
  );
}
