'use client';
import Image from "next/image";
import Headshot from "@/assets/Headshot.png";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  return (
    <section id="hero" className="p-5">
      <div className="flex flex-col gap-5">
        <section
          id="profile"
          className="bg-slate-950/50 backdrop-blur shadow-md shadow-cyan-800 rounded-2xl p-4 flex flex-col items-center border border-cyan-800"
        >
          <Image
            src={Headshot}
            alt="Profile image of Hunter Bailey."
            className="rounded-full ring-4 ring-cyan-400 h-48 w-48 -translate-y-12 shadow-xl shadow-cyan-800 object-cover object-top"
          />
          <h2 className="-translate-y-5 font-semibold text-xl md:font-2xl font-heading">
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
            I{`'`}m Bailey, a software developer based in Seattle. Working on making my mark on the world, one line of code, at a time. When not immersed in a book or video game I can be found at the gym, walking a beach, in a cozy cafe, or out dancing in the rain.
          </section>
          <section id="socials" className='mt-2'>
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
