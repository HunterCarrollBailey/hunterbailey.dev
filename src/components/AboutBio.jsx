/* eslint-disable react/no-unescaped-entities */
export default function AboutBio() {
  return (
    <div className="w-full lg:w-[65%] flex flex-col items-center">
      <div className="flex rounded-full w-72 h-72 bg-headshot bg-contain shadow-2xl"></div>
      <h1 className="text-4xl text-slate-700 font-bold mt-[2%]">
        Hunter Bailey
      </h1>
      <hr className="border border-t border-slate-400 my-3 w-[75%]" />
      <div className="w-full lg:w-[75%] text-justify *:my-[2%]">
        <p>
          Hello, I'm Hunter Bailey, an IT professional based in Seattle, WA,
          with over nine years of experience in software support, technical
          troubleshooting, process optimization, and application development. My
          career has been a journey of continuous learning and innovation.
        </p>

        <p>
          I specialize in PHP, NodeJS, HTML/CSS, JavaScript, SaSS, and the
          Laravel Framework. These skills have enabled me to develop and
          optimize applications that enhance user experience and streamline
          business processes. I take pride in leading cross-functional teams,
          implementing solutions, and driving continuous improvement
          initiatives.
        </p>

        <p>
          I am passionate about sharing knowledge and mentoring others. Through
          my websites, Paradox Innovators, GitHub, and LinkedIn, I actively
          engage with the tech community, sharing insights, code samples, and
          best practices.
        </p>

        <p>
          My journey in IT is marked by a relentless pursuit of excellence and a
          commitment to helping organizations achieve their goals through
          technology. With a strong foundation in software development and
          process optimization, I strive to drive innovation and efficiency in
          every project I undertake.
        </p>
      </div>
    </div>
  );
}
