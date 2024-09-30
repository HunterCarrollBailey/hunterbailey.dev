import Link from 'next/link';
import {FaGithub, FaGlobe, FaDesktop} from "react-icons/fa";
import Card from "@/components/Card";
import Image from "next/image";
import Corpus from "@/assets/CV.png"
import Acolyte from "@/assets/Acolyte Logo - Icon.png";
import RoseShield from "@/assets/EnchantedRoseLogo.svg";
import React from "react";

const projects = [
    {
        name: 'A Warrior\'s Journey',
        type: 'Book',
        description: 'Authored and self-published a freestyle poetry book, demonstrating strong communication skills. Applied project management techniques to take the book from initial concept to publication, while showcasing resilience, creativity, and an aptitude for tackling challenging subjects–qualities that complement the essential skill of problem solving.',
        link: { href: 'https://www.barnesandnoble.com/w/a-warriors-journey-hunter-bailey/1146141656%3Bjsessionid=F3C2747E76FFF63C84E6CBB211E48FE3.prodny_store02-atgap08?ean=9798218480882', label: 'Barnes & Nobel Listing'},
        icon: FaGlobe,
        logo: RoseShield
    },
    {
        name: 'Acolyte v4',
        type: 'Website',
        description: 'Version 4 of Acolyte. This version is a basic Content Management System (CMS). And was used by a client to track 40 plus users for over 3 years. This version is no longer in active development, and is kept up only as a showcase of where I was 3 years ago. The system does function, but it\'s not as smooth as I would like. Written in Laravel and MDBoostrap.',
        link: {href: 'https://github.com/baileycarroll/Acolyte-v4', label: 'GitHub Repo'},
        icon: FaGithub,
        link2: { href: 'https://acolyte-v4.baileycarroll.dev', label: 'Acolyte v4 Demo' },
        icon2: FaDesktop,
        logo: Acolyte
    },
    {
        name: 'Acolyte v5',
        type: 'Website',
        description: 'This is the newest version of Acolyte, while I do keep the source code private I am willing to expose some of the design as a demo so you can see the progress and the stark difference in design and experience. I\'ve grown alot in the past three years and this new version of Acolyte will help showcase that beautifully. Written in Laravel, Vue, and TailwindCSS.',
        link: { href: 'https://acolyte-v5.baileycarroll.dev', label: 'Acolyte v5 Demo'},
        icon: FaDesktop,
        logo: Acolyte
    },
    {
        name: 'Corpus Vitae',
        type: 'GitHub Repo',
        description: 'This is a fitness, meal, and overall life tracking app that I\'m developing for Android and iOS using Flutter. I wanted something more for my portfolio, and was tired of paying $30-$40 per month for basic exercise and macro tracking. So I figured I would make one for myself.',
        link: { href: 'https://github.com/baileycarroll/CorpusVitae', label: 'GitHub Repo' },
        icon: FaGithub,
        logo: Corpus
    },
    {
        name: 'My Portfolio / Developer Portal',
        type: 'GitHub Repo',
        description: 'I\'m including this website in this list because it has another function well beyond that of just a portfolio site. It actually houses my developer portal which has project tracking, tooling, and more that makes it easier for me to organize what resources I have, and interact with them.',
        link: { href: 'https://github.com/baileycarroll/baileycarroll.dev', label: 'GitHub Repo' },
        icon: FaGithub,
        logo: RoseShield
    }
]

export default function Projects() {
    return (
        <section id="projects" className={'p-5'}>
            <Card>
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-heading font-bold text-white tracking-light sm:text-5xl">
                        Some of the things I{`'`}ve worked on, trying to improve my life, and others.
                    </h1>
                    <p className="mt-6 text-base">
                        I{`'`}ve had many ideas and most do not see the light of day, as is with many developers/engineers. However the below are the ones that I am the most proud of.
                        I{`'`}ve made some of the repos public and most importantly for two of the projects there is an active Demo version available.
                    </p>
                </div>
                <div className="mt-10 sm:mt-20">
                    <ul role={'list'} className={'grid grid-cols-1 gap-x-12 gap-y-8 lg:gap-y-16 sm:grid-cols-2 lg:grid-cols-3 p-2'}>
                        {projects.map((project) => (
                            <li key={project.name} className={'group relative flex flex-col items-start rounded-2xl p-4 transition ease-in hover:bg-slate-800/60 hover:scale-110 hover:shadow-cyan-600 hover:shadow-md hover:border hover:border-cyan-600'}>
                                <div
                                    className="relative flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 shadow-md shadow-cyan-500/5 ring-1 ring-cyan-500/5">
                                    <Image src={project.logo} alt={project.name + ' Logo'}
                                           className={'h-10 w-10 rounded-full'}/>
                                </div>
                                <h2 className="mt-6 text-base font-semibold ">

                                        <span className="absolute -inset-x-4 -inset-y-6 sm:-inset-x-6 sm:rounded-2xl" />
                                        <span className="relative z-10 text-white">{project.name}</span>

                                </h2>
                                <p className="relative mt-2 text-sm text-slate-100">
                                    {project.description}
                                </p>
                                <p className="relative mt-6 text-sm font-medium text-slate-50 transition flex flex-row space-x-3">
                                    <Link href={project.link.href} className={'flex items-center hover:text-cyan-500'} target={'_blank'}>
                                        <project.icon />
                                        <span className="ml-2">{project.link.label}</span>
                                    </Link>
                                    {project.link2 ? <Link href={project.link2.href} target={'_blank'} className={'flex items-center hover:text-cyan-500'}><project.icon2/><span className={'ml-2'}>{project.link2.label}</span> </Link> : null}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </section>
    )
}