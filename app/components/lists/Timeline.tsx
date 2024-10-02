import Image from "next/image";
import Logo from "@/app/assets/EnchantedRoseLogo.svg";
import Link from "next/link";

const events = [
  {
    dates: "April 2024 - Current",
    title: "Sr. Computer Specialist",
    employer: "University of Washington",
    details:
      "Upgraded Java-based integrations from Java 8 to 11, incorporating X.509 certificate authentication for secure communication. Redesigned application and database server architecture, optimizing access to Confluence Plugins and securing the database. Reduced technical debt by upgrading servers and streamlining infrastructure, cutting server count from 7 to 5. Created an Atlassian product guidebook, improved system indexing by 200% through asset cleanup, and implemented change management procedures to enhance process efficiency and reduce testing errors.",
    skills: [
      "Java 8",
      "PostgreSQL",
      "Linux Admin",
      "Confluence & Jira",
      "Technical Documentation",
      "Git & GitHub",
      "SAML",
      "Certificate Management",
    ],
    link: "https://uw.edu",
  },
  {
    dates: "June 2022 - April 2024",
    title: "Sr. Support Engineer",
    employer: "Carbon Robotics",
    details:
      "Led the company-wide rollout of Jira Software and Confluence, achieving 100% user adoption, and developed comprehensive technical documentation. Built a Python/Flask web application with Redis, improving team efficiency by 10%. Collaborated on an MVP with TypeScript and Go, and automated performance reports, reducing manual effort from 16 to 2 hours weekly. Created onboarding programs, integrating 7 engineers in 4 weeks, and scaled support operations from a 6x16 to a 7x24 schedule, expanding the team from 2 to 10 engineers.",
    skills: [
      "Technical Support",
      "Leadership",
      "Product Documentation",
      "Project Management",
      "TypeScript",
      "Go",
      "gRPC",
      "Code Review",
      "Escalation Handling",
      "Tableau",
      "Data Reporting",
    ],
    link: "https://carbonrobotics.com",
  },
  {
    dates: "March 2020 - June 2022",
    title: "L3 Advanced Support Engineer",
    employer: "Coupa Software",
    details:
      "Overhauled global training processes, leading to a 45% increase in positive feedback, and delivered technical training for Senior Engineers. Conducted root cause analysis and resolved product issues using MySQL and Ruby, supported testing cycles, and enhanced internal knowledge base usability by 15%. Also performed system analysis and monitoring using Kibana, Grafana, and Ruby on Rails.",
    skills: [
      "Rails",
      "Kibana",
      "Grafana",
      "MySQL",
      "Unit/Integration Testing",
      "Technical Training",
    ],
    link: "https://coupa.com",
  },
];

export function TimelineFull() {
  return (
    <div className="flex flex-col p-5">
      {events.map((event, index) => (
        <div
          key={index}
          className="flex flex-row mt-4 transition md:hover:scale-105"
        >
          <div className="flex flex-col justify-center items-center">
            <Image
              src={Logo}
              alt="Rose & Shield Logo"
              className="mb-1 max-w-[5dvw] lg:max-w-[2dvw]"
            />
            <span className="border-2 border-cyan-800 bg-cyan-800 rounded-t-full rounded-b-full w-1 h-full"></span>
          </div>
          <div className="flex flex-col px-4">
            <h3 className="text-slate-400 text-sm">{event.dates}</h3>
            <h4 className="text-slate-300 text-sm lg:text-md font-semibold flex flex-row align-top">
              {event.title} |{" "}
              {event.link !== "" ? (
                <Link
                  href={event.link}
                  target="_blank"
                  className="text-cyan-400 ml-1"
                >
                  {event.employer}
                </Link>
              ) : (
                event.employer
              )}
            </h4>
            <p className="text-slate-400 text-sm">{event.details}</p>
            <ul className="flex flex-row flex-wrap gap-x-4 gap-y-2 mt-2">
              {event.skills.map((skill, index) => (
                <li
                  className="bg-cyan-400/20 text-cyan-200 border border-cyan-800 shadow shadow-cyan-800 px-2 rounded-full"
                  key={index}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
// Smaller more condensed timeline for the home page, better sizing.
export function TimelineHome() {
  return (
    <div className="flex flex-col p-5">
      {events.map((event, index) => (
        <div key={index} className="flex flex-row mt-4">
          <div className="flex flex-col justify-center items-center">
            <Image
              src={Logo}
              alt="Rose & Shield Logo"
              className="mb-1 max-w-12"
            />
          </div>
          <div className="flex flex-col px-4">
            <h3 className="text-slate-400 text-md">{event.dates}</h3>
            <h4 className="text-slate-300 text-md lg:text-md font-semibold flex flex-row align-top">
              {event.title} |{" "}
              {event.link !== "" ? (
                <Link
                  href={event.link}
                  target="_blank"
                  className="text-cyan-400 ml-1"
                >
                  {event.employer}
                </Link>
              ) : (
                event.employer
              )}
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
