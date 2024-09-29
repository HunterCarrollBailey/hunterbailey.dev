import Timeline from "@/components/Timeline";
import Link from 'next/link';
import Resume from "@/assets/BaileyRCarroll.pdf";


export default function Experience() {
  return (
    <section id="experience" className="p-5">
        <section
            id="experienceList"
            className="bg-slate-950/50 backdrop-blur shadow-md shadow-cyan-800 border border-cyan-800 rounded-2xl p-4 flex flex-col"
        >
            <h2 className="text-2xl font-semibold text-center font-heading">
                Recent Experience
            </h2>
            <Timeline/>
            <button className="bg-slate-950/50 ring-1 ring-cyan-800 px-2 py-1 rounded-lg text-md shadow shadow-cyan-800 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-800 mt-5 ml-auto">
              <Link href={Resume} target="_blank">Download Resume</Link>
            </button>
        </section>
    </section>
  );
}
