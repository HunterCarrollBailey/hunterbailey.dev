import { FaArrowDown } from "react-icons/fa";
export default function About() {
  return (
    <section id="About" className="leading-relaxed hover:border-cyan-500 hover:border p-5 rounded-2xl bg-slate-950/70 shadow-md  shadow-cyan-600 hover:shadow-lg hover:shadow-cyan-500 hover:-translate-y-2">
      <h2 id="AboutHeading" className="text-start font-bold text-md">ABOUT</h2>
      <p className="text-justify my-[1%]">
        I started my journey into tech back in 2011, when a family friend
        brought me in to start learning and experimenting with networking,
        scripting, and even some programming. Some of my first projects ever
        were written in <strong>Perl</strong> and <strong>Bash</strong>. While
        the experience served me well, I wanted more, always hungry for new
        knowledge. I started my degree in{" "}
        <strong>Business Administration</strong> in 2017 and while I had to step
        away from academia, I never stopped learning and most of my technical
        skills are self taught. I have resumed working on my degree in{" "}
        <strong>Computer Science</strong> and expect to have it completed early
        2025.
      </p>
      <p className="text-justify my-[1%]">
        In the time since I have worked for a few companies such as{" "}
        <strong>The University of Washington</strong>,{" "}
        <strong>Carbon Robotics</strong>, and <strong>Coupa Software</strong>.
        Further expanding upon my knowledge I undertook new projects and
        continued learning. One of those projects is{" "}
        <strong>Acolyte R.E.A.L.M.S.</strong> which is a Remote Engagement and
        Learning Management System designed, implemented, and programmed
        entirely by myself. It has undergone many iterations, Version 4 is
        currently used by a client (un-Traditional Magick), and Version 5 is in
        active development with a release scheduled for Late 2024. Version 5 has
        the following tech stack: <strong>Laravel</strong>,{" "}
        <strong>PostgreSQL</strong>, <strong>Redis</strong>,{" "}
        <strong>TailwindCSS</strong>, <strong>ReactJS</strong>, and{" "}
        <strong>TypeScript</strong>
      </p>
      <p className="text-justify my-[1%]">
        When not at work, or working on projects I can be found getting lost in
        the forests and parks around Seattle, immersing myself in video game
        worlds such as Tamriel, Hyrule, or Monster Hunter; writing, or working
        on my physical fitness.
      </p>
      <FaArrowDown  className="mx-auto mt-10 text-2xl"/>
    </section>
  );
}
