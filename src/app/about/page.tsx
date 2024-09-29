import Image from 'next/image';
import portraitImage from '@/assets/Profile2.jpg';
import Link from "next/link";
import clsx from "clsx";
import {FaGithub, FaLinkedin, FaSpotify} from "react-icons/fa";
import { EnvelopeIcon} from "@heroicons/react/24/solid";
import Card from '@/components/Card';

function SocialLink({
                        className,
                        href,
                        children,
                        icon: Icon,
                    }: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex flex-row items-center text-sm font-medium text-white transition hover:text-cyan-500"
                target={'_blank'}
            >
                <Icon className="h-6 w-6 flex-none fill-cyan-500 transition group-hover:fill-cyan-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

export default function About() {
    return (
        <section id="aboutMe" className='p-5'>
            <Card adlClasses={'grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-2'}>
                <div className="flex flex-col lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold font-heading">I{`'`}m Bailey Carroll, based in Seattle,
                        making
                        my mark on the world one one line of code at a time.</h1>
                    <p className="text-md leading-relaxed mt-2">
                        I{`'`}ve been tinkering and working in the technical industry for over 12 years. I wrote
                        my
                        first {`"`}program{`"`} in Perl at 11 years old for a family friend in Reno, Nevada.
                        From an
                        even younger age my grandparents
                        would often sit me down with a screwdriver and tell me to take apart some piece of
                        technology and put it back together, whether that was an old VCR, record player or some
                        other trinket.
                    </p>
                    <p className="text-md leading-relaxed mt-2">
                        When I wasn{`'`}t engrossed with school, or tinkering with tech, I could be found nose
                        deep
                        in a book or a video game exploring fantastical worlds. The creative arts are my second
                        love
                        in the world, in fact I actually
                        hold the belief that programming is an art form. Code should flow and play like a
                        musical
                        number, and based off of this I can often find hidden bugs or inefficiencies in my code
                        based on how it sounds.
                    </p>
                    <p className="text-md leading-relaxed mt-2">
                        When I was 19 I finally had the corrective surgeries to fix the genetic deformities in
                        my
                        legs that had made it hard for me to get around. During that recovery time a dear friend
                        of
                        mine approached me with an idea about
                        a learning management system and they knew I had done some web development in the past.
                        This
                        started what is my largest and most passionate project, Acolyte. After several
                        iterations
                        and four major versions the friend
                        used the fourth version for a number of years to distribute content to their users.
                    </p>
                    <p className="text-md leading-relaxed mt-2">
                        Today, I work as a <em>Senior Computer Specialist</em> for the University of Washington,
                        managing their Atlassian Infrastructure and a couple of other notable development tools.
                        On
                        the side I am working on the fifth version
                        of Acolyte (which is a full re-write from the ground up), as well as a couple of other
                        projects. I do not yet have my degree, though I am quickly working towards finishing it,
                        and
                        am primarily self taught. I have
                        accomplished quite a lot in my pursuit of knowledge for programming and am excited for
                        any
                        new adventures that may come my way.
                    </p>
                </div>
                <div className="lg:pl-20 lg:pt-10">
                    <div className="max-w-xs px-2.5 lg:max-w-md mx-auto">
                        <Image
                            src={portraitImage}
                            alt=""
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl object-cover object-top"
                        />
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role='list'>
                        <SocialLink href={'https://github.com/baileycarroll'} icon={FaGithub}>Follow on GitHub</SocialLink>
                        <SocialLink href={'https://open.spotify.com/user/21fwvqec332fp7apchtqe2z7y'} icon={FaSpotify} className={'mt-4'}>Follow on Spotify</SocialLink>
                        <SocialLink href={'https://www.linkedin.com/in/baileycarroll/'} icon={FaLinkedin} className={'mt-4'}>Follow on LinkedIn</SocialLink>
                        <SocialLink
                            href="mailto:baileyrcarroll@gmail.com"
                            icon={EnvelopeIcon}
                            className="mt-8 border-t border-cyan-800 pt-8"
                        >
                            baileyrcarroll@gmail.com
                        </SocialLink>
                    </ul>
                </div>
            </Card>
        </section>
    );
}