/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import Headshot from "/src/assets/Headshot.jpg";
function AboutHome() {
  return (
    <section className="flex flex-col lg:flex-row gap-3 bg-slate-100 min-h-[45dvh]">
      <div className="w-full p-5 text-slate-700 flex flex-col lg:flex-row gap-5">
        <div className="w-full lg:w-[50%] place-items-center place-content-center p-7">
          <h2 className="text-slate-700 font-bold text-3xl my-5">
            A Little About Me
          </h2>
          <p>
            Hiya! Please call me Bailey, I've been working in the tech industry
            in one form or another for over 10 years. I've served professionally
            on a number of support teams and held leadership roles within most
            of them. On the side I have been working as an independent software
            developer while teaching myself most of what I know. If you would
            like know know more about me and my story head over to my about me
            page.
          </p>
          <button className="bg-slate-900 text-white font-bold py-2 px-4 rounded-full shadow hover:bg-emerald-500 mt-[3%] float-end">
            <NavLink to="/about">Learn More</NavLink>
          </button>
        </div>
        <div className="flex w-full lg:w-[50%] place-items-center place-content-center p-7">
          <img
            src={Headshot}
            alt="A photo depicting the face of Hunter Bailey."
            className="rounded-full w-96 h-96"
          />
        </div>
      </div>
    </section>
  );
}
export default AboutHome;
