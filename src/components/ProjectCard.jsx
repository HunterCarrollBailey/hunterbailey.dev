import PropTypes from "prop-types";
export default function ProjectCard({ name, description, techStack, link }) {
  return (
    <div className="bg-slate-200/75 rounded-2xl p-5 w-full lg:w-[30%] flex flex-col">
      <h2 className="text-center font-bold text-2xl text-slate-700">{name}</h2>
      <hr className="border border-t border-slate-400 my-3 w-[75%] mx-auto" />
      <p className="text-justify mb-[2%]">{description}</p>
      <h3 className="text-xl font-bold text-slate-700">Tech Stack</h3>
      <hr className="border border-t border-slate-400 my-3 w-full" />
      <ul className="list-disc px-8 mb-[3%] flex flex-col flex-wrap gap-1 max-h-[10dvh]">
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      {link && (
        <button className="rounded-full bg-slate-700 text-white p-2 font-bold mt-auto place-self-end hover:bg-emerald-500">
            <a href={link} target="_blank">
                View Project
            </a>
        </button>
      )}
    </div>
  );
}
ProjectCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    techStack: PropTypes.array,
    link: PropTypes.string
}
