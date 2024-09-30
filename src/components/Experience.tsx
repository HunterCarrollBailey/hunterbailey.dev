import Timeline from "@/components/Timeline";
import Link from 'next/link';
const Resume = 'https://drive.google.com/file/d/1JHdcZUil-WpfKiG0dedAUAr1fenhkP3Z/view?usp=sharing';


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

            <Link href={Resume} target="_blank" className={'ml-auto'}>
                <button className="
                bg-slate-950/50 ring-1 ring-cyan-800 px-2 py-1 rounded-lg text-md shadow shadow-cyan-800
                hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-800 mt-5">
                    Download Resume
                </button>
            </Link>
    </section>
</section>
)
    ;
}
