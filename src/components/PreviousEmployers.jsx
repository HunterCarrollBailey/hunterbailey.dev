import { NavLink } from "react-router-dom";
import eri from "/src/assets/EnchantedRoseLogo.svg";
import uw from "/src/assets/uw-logo.jpg";

export default function PreviousEmployers() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl text-slate-700 font-bold">Previous Employers</h2>
      <ul className="*:mt-[3%] *:ring-1 *:ring-inset *:ring-slate-300 *:rounded-full *:shadow-xl *:px-3 *:py-2 *:flex *:items-center *:text-md">
        <li>
          <span>
            <img
              src={uw}
              className="w-12 me-5 rounded-full"
              alt="University of Washington Logo"
            />
          </span>
          University of Washington
        </li>
        <li>
          <span>
            <img
              src={eri}
              className="w-12 me-5 rounded-full"
              alt="Enchanted Rose Innovations Logo"
            />
          </span>
          Enchanted Rose Innovations
        </li>
        <li>
          <span>
            <img
              src="https://img.logo.dev/carbonrobotics.com?token=pk_Xa9ds_h4SCSJh9HvywtIlw"
              alt="Carbon Robotics Logo"
              className="w-12 me-5 rounded-full"
            />
          </span>
          Carbon Robotics
        </li>
        <li>
          <span>
            <img
              src="https://img.logo.dev/coupa.com?token=pk_Xa9ds_h4SCSJh9HvywtIlw"
              alt="Coupa Software Logo"
              className="w-12 me-5 rounded-full"
            />
          </span>
          Coupa Software
        </li>
      </ul>
      <NavLink to="/about">
        <button className="flex items-center justify-center bg-slate-900 text-white font-bold py-2 px-4 rounded-full shadow hover:bg-emerald-500 mt-[3%] ml-auto w-full xl:w-[30%]">
          See My Resume
        </button>
      </NavLink>
    </div>
  );
}
