'use client';
import Image from "next/image";
import Headshot from "@/assets/Headshot.jpg";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import Resume from "@/assets/curriculum-vitae.pdf";

export default function Hero() {
  return (
    <section id="hero" className="p-5 mt-10">
      <div className="flex flex-col gap-5">
        <section
          id="profile"
          className="bg-slate-950/50 backdrop-blur shadow-md shadow-cyan-800 rounded-2xl p-4 flex flex-col items-center"
        >
          <Image
            src={Headshot}
            alt="Profile image of Hunter Bailey."
            className="rounded-full ring-4 ring-cyan-400 w-[25dvw] md:w-[20dvw] lg:w-[15dvw] xl:w-[10dvw] -translate-y-12 shadow-xl shadow-cyan-800"
          />
          <h1 className="-translate-y-7 font-bold text-4xl font-heading">Bailey Carroll</h1>
          <h2 className="-translate-y-5 font-semibold text-2xl font-heading">
            Specialized In{" "}
            <span className="text-cyan-400">
              <Typewriter
                words={["Problem Solving", "Innovation", "Creative Ideas"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>
          <section
            id="about"
            className="-translate-y-3 leading-relaxed text-justify px-4"
          >
            Dynamic and results-oriented software developer with over 6 years of experience in application development, technical support, and process optimization. With proven expertise in building custom solutions using Laravel, NodeJS, JavaScript, SaSS, MySQL, Postgres, and more. I have a strong track record of enhancing user experience and project management. 
          </section>
          <button className="bg-slate-950/50 ring-1 ring-cyan-800 px-2 py-1 rounded-lg text-md shadow shadow-cyan-800 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-800 mb-5">
            <Link href={Resume} target="_blank">Download Resume</Link>
          </button>
          <section id="socials">
            <ul className="flex flex-row gap-5 justify-center text-3xl text-cyan-300">
              <li>
              <Link href="https://github.com/baileycarroll" target="_blank"><FaGithub /></Link>
              </li>
              <li>
              <Link href="https://www.linkedin.com/in/baileycarroll/" target="_blank"><FaLinkedin /></Link>
              </li>
              <li>
              <Link href="https://open.spotify.com/user/21fwvqec332fp7apchtqe2z7y" target="_blank"><FaSpotify /></Link>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </section>
  );
}
