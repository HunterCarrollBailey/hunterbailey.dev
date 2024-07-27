import { FaStar } from "react-icons/fa";
import PropTypes from "prop-types";
export default function SkillItem({name, experience}) {
    const stars = [];
    for (let i = 0; i < experience; i++) {
        stars.push(<FaStar key={i} className="mx-1 text-emerald-500"/>);
    }
    return (
        <li className="bg-slate-200 px-5 py-2 my-2 rounded-full flex items-center">
           <span className="mr-2"> {name}</span> {stars}
        </li> 
    );
}

SkillItem.propTypes = {
    name: PropTypes.string,
    experience: PropTypes.string
}