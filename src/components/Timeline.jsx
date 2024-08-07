import Image from "next/image";
import Logo from "@/assets/EnchantedRoseLogo.svg";
import Link from "next/link";

const events = [
  {
    dates: "April 2024 - Current",
    title: "Sr. Computer Specialist",
    employer: "University of Washington",
    details:
      "Build, Maintain, and Administer the on-premise Atlassian DataCenter Suite of products. Including developing and maintaining custom integration and authentication plugins. Revamping existing documentation for Atlassian products, including User / Admin Guides, How Tos and Best Practices. Managing & Supporting the Enterprise GitHub Account.",
    skills: [
      "Java 8",
      "PostgreSQL",
      "Linux Admin",
      "Confluence & Jira",
      "Technical Documentation",
      "Git & GitHub",
      "SAML",
      "Certificate Management"
    ],
    link: "https://uw.edu",
  },
  {
    dates: "May 2017 - Current",
    title: "Founder / Lead Developer",
    employer: "Enchanted Rose Innovations",
    details:
      "I started ERI when a close friend approached me with a need for a custom website and a platform to deliver recorded lessons for a class they taught. In the time since that platform has evolved into Acolyte, and this is the business name in which I develop and license Acolyte under.",
    skills: [
      "React",
      "TypeScript",
      "Python",
      "TailwindCSS",
      "Laravel Framework",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "SMPT",
      "API Integrations",
    ],
    link: "",
  },
  {
    dates: "June 2022 - April 2024",
    title: "Sr. Support Engineer",
    employer: "Carbon Robotics",
    details:
      'Developed an MVP of a Support Account Management tool in collaboration with Product and Engineering. Authored the original troubleshooting guidelines and scenarios. In doing so reviewed existing sourcecode to gather troubleshooting commands for the product. Served as the "Support Program Manager" and the Atlassian Architect & Administrator for the implemention of Jira Software and Confluence. Authored the original training and onboarding resources for new support hires. Worked closely with the Director of Support to build and guide the team to success. Starting from a 5x10 schedule to a 7x24 schedule. Assisted the Director with the implementation of Tableau as the primary data analysis tool, desiging and implementing initial data flows. With that I helped automate the weekly customer reports taking the manual creation time of over 8+ hours a week to just under 1 hour for review.',
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
];

export default function Timeline() {
  return (
    <div className="flex flex-col p-5">
      {events.map((event, index) => (
        <div key={index} className="flex flex-row mt-4 transition md:hover:scale-105">
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
              {event.title} | {" "}
              {event.link !== "" ? (
                <Link href={event.link} target="_blank" className="text-cyan-400 ml-1">
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
