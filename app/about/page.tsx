// Next Imports
import Image from "next/image";
import Link from "next/link";
import React from "react";
// Icons
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin, FaSpotify } from "react-icons/fa";
// Clsx for conditional classes
import clsx from "clsx";
// Custom Components
import Card from "@/app/components/cards/Card";
import Heading from "@/app/components/typography/Headings";
import Headshot from "@/app/assets/Headshot.png";
import { ListNone } from "@/app/components/lists/UnorderedLists";
import Paragraph from "@/app/components/typography/Paragraphs";

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={clsx(className, "flex font-semibold")}>
      <Link
        href={href}
        className="group flex flex-row items-center text-md font-medium transition hover:text-cyan-500"
        target="_blank"
      >
        <Icon className="w-6 h-6 flex-none fill-cyan-500 transition group-hover:fill-cyan-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  return (
    <section id="about" className="p-5 flex flex-col items-center mt-6">
      <Card
        className={
          "grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-2"
        }
      >
        <div className="flex flex-col lg:order-first lg:row-span-2">
          <Heading Level={3}>I{`'`}m Bailey Carroll.</Heading>
          <Heading Level={6} className="my-4">
            Based in Seattle, making my mark on the world one line of code at a
            time.
          </Heading>
          <Paragraph className="my-2">
            I{`'`}ve been tinkering and working in the technical industry for
            over 12 years. I wrote my first {`"`}program{`"`} in Perl at 11
            years old for a family friend in Reno, Nevada (who was the ISP for
            the valley I grew up in) it was a somewhat simple program that
            helped them manage each of the customers networking equipment from
            their local server.
          </Paragraph>
          <Paragraph className="my-2">
            When I was 19 I had corrective surgeries to fix the genetic
            deformities in my legs. During that recovery time a dear friend of
            mine approached me with an idea to deliver video content to a
            community gathering. This started what is my largest and most
            passionate project, Acolyte. Since then I dove further into the idea
            of making products and things that improve not only my life, but the
            lives of those I care about.
          </Paragraph>
          <Paragraph className="my-2">
            While I have many side hobbies, I am a gamer at heart. I really
            enjoy video games with a good amount of lore in them. One of my all
            time favorites being the Elder Scrolls series. (I cannot pick just
            one of them.) Other franchises such as Pokemon, Final Fantasy, The
            Legend of Zelda, and the Soulsborne series are close to my heart as
            well.
          </Paragraph>
          <Paragraph className="my-2">
            Today, I work as a <em>Senior Computer Specialist</em> for the
            University of Washington during the day and like to spend my
            evenings either at home with my house tiger (Leo) programming,
            reading or playing video games. Or out exploring the beautiful city
            I have made my home in.
          </Paragraph>
        </div>
        <div className="lg:pl-20 lg:pt-10">
          <div className="max-w-xs px-2.5 lg:max-w-md mx-auto">
            <Image
              src={Headshot}
              alt="Picture of Bailey leaning against a tree."
              className="aspect-square rotate-3 rounded-2xl object-cover object-top w-80 mx-auto shadow-md shadow-cyan-500"
            />
          </div>
        </div>
        <div className="lg:pl-20 mt-4">
          <ListNone>
            <SocialLink
              href={"https://github.com/baileycarroll"}
              icon={FaGithub}
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={"https://open.spotify.com/user/21fwvqec332fp7apchtqe2z7y"}
              icon={FaSpotify}
              className={"mt-4"}
            >
              Follow on Spotify
            </SocialLink>
            <SocialLink
              href={"https://www.linkedin.com/in/baileycarroll/"}
              icon={FaLinkedin}
              className={"mt-4"}
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:baileyrcarroll@gmail.com"
              icon={EnvelopeIcon}
              className="mt-8 border-t border-cyan-800 pt-8"
            >
              baileyrcarroll@gmail.com
            </SocialLink>
          </ListNone>
        </div>
      </Card>
    </section>
  );
}
