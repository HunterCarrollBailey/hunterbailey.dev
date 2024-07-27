export default function Degree() {
  return (
    <div className="flex flex-col w-full">
      <h2 className="text-3xl text-slate-700 font-bold mb-3 mt-[10%]">
        My Education
      </h2>
      <h3 className="text-xl text-slate-700 font-bold text-center">
        Western Governors University
      </h3>
      <div className="flex my-[2%]">
        <h4 className="font-bold">Bachelors in Computer Science</h4>
        <span className="ml-auto">65/126 Credits</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5 dark:bg-slate-700">
        <div
          className="bg-emerald-500 h-2.5 rounded-full"
          style={{ width: 55 + "%" }}
        ></div>
      </div>
      <div className="flex">
        <span className="mr-auto">Started: September 2023</span>
      </div>
      <h3 className="text-xl text-slate-700 font-bold mb-3 text-center my-[2%]">
        Udemy Courses Completed
      </h3>
      <section className="flex flex-row w-full justify-around">
        <div className="flex flex-col">
          <ul className="list-disc visited:*:text-purple-800 text-cyan-800">
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-88fe2e1e-7e1d-48e3-bd48-e6090a4f03ce/"
                target="_blank"
              >
                Modern JavaScript
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-0ca9ab34-24f1-4d45-9a15-47393048ac8b/"
                target="_blank"
              >
                Docker for DevOps
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-c22d3b0f-c0fc-4601-8838-787ae689a6ef/"
                target="_blank"
              >
                Complete Web Developer
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul className="list-disc visited:*:text-purple-800 text-cyan-800">
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-d6c3be0a-3d93-455b-af5f-168b42211bf2/"
                target="_blank"
              >
                PHP For Beginners
              </a>
            </li>
            <li>
              <a
                href="https://www.udemy.com/certificate/UC-3695578c-a015-4008-9d0f-f252acb5937a/"
                target="_blank"
              >
                Master Laravel
              </a>
            </li>
            <li>
              <a href="https://laracasts.com/" target="_blank">
                Laracasts*
              </a>
            </li>
          </ul>
        </div>
      </section>
      <p className="text-sm mt-5">
        As a small note, I completed these courses over a couple of years, but
        recently got the certificates for them to put here as I will restart
        courses when I need refreshers.
      </p>
      <p className="text-sm mt-1">
        * While not a Udemy Course Laracasts is such a great resource for web
        development I needed to mention them.
      </p>
    </div>
  );
}
