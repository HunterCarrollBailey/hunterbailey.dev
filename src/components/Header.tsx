'use client'

import Link from 'next/link';
import {usePathname} from "next/navigation";
import {Popover, PopoverBackdrop, PopoverButton, PopoverPanel} from "@headlessui/react";
import {ChevronDownIcon, XMarkIcon} from "@heroicons/react/24/solid";
import clsx from "clsx";

// Mobile Navigation
function MobileNavItem({
    href,
    children,
   }: {
    href: string;
    children: React.ReactNode;
}) {
    return (
        <li>
            <PopoverButton as={Link} href={href} className='block py-2'>{children}</PopoverButton>
        </li>
    );
}

function MobileNavigation(
    props: React.ComponentPropsWithoutRef<typeof Popover>,
) {
    return (
        <Popover {...props}>
            <PopoverButton className='group flex items-center rounded-full bg-slate-950/50 px-4 py-2 text-md font-medium text-slate-300 shadow-lg shadow-cyan-800 ring-1 ring-cyan-800/5 backdrop-blur'>
                Menu
                <ChevronDownIcon className='ml-3 h-auto w-2' />
            </PopoverButton>
            <PopoverBackdrop transition className='fixed inset-0 z-50 bg-slate-950/40 backdrop-blur duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in' />
            <PopoverPanel focus transition
                  className='fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-slate-950 p-8 ring-1 ring-cyan-800/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in'>
                <div className="flex flex-row-reverse items-center justify-between">
                    <PopoverButton aria-label="Close Navigation" className='-m-1 p-1'>
                        <XMarkIcon className='h-6 w-6 text-cyan-500' />
                    </PopoverButton>
                    <h2 className="text-sm font-medium">Navigation</h2>
                </div>
                <nav className="mt-6">
                    <ul className="-my2 divide-7 divide-cyan-800 text-base">
                        <MobileNavItem href={"/"}>Home</MobileNavItem>
                        <MobileNavItem href={"/about"}>About</MobileNavItem>
                        <MobileNavItem href={"/projects"}>Projects</MobileNavItem>
                        <MobileNavItem href={"/articles"}>Articles</MobileNavItem>
                        {/*<MobileNavItem href={"/tools"}>Tools</MobileNavItem>*/}
                    </ul>
                </nav>
            </PopoverPanel>
        </Popover>
    )
}

function NavItem({
    href,
    children,
                 }: {
    href: string;
    children: React.ReactNode;
    }) {
        let isActive = usePathname() === href
        return(
            <li>
                <Link href={href} className={clsx('relative block px-3 py-2 transition', isActive ? 'text-cyan-500' : 'hover:text-cyan-500')}>
                    {children}
                    {isActive && (
                        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0"/>
                    )}
                </Link>
            </li>
        )
}

function DesktopNavigation(props: React.ComponentPropsWithoutRef<'nav'>){
    return (
        <nav {...props}>
            <ul className="flex rounded-full bg-slate-950/40 px-3 text-md font-medium shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-800/5 backdrop-blur">
                <NavItem href={"/"}>Home</NavItem>
                <NavItem href={"/about"}>About</NavItem>
                <NavItem href={"/projects"}>Projects</NavItem>
                <NavItem href={"/articles"}>Articles</NavItem>
                {/*<NavItem href={"/tools"}>Tools</NavItem>*/}
            </ul>
        </nav>
    )
}

export function Header() {
    let isHomePage = usePathname() === '/'
    return (
        <>
            <header className='pointer-events-none relative z-50 flex flex-none flex-col bg-transparent'
                    style={{height: 'var(--header-height)', marginBottom: 'var(--header-mb)'}}>
                <div
                    className="top-0 z-10 h-16 pt-6"
                    style={{
                        position:
                            'var(--header-position)' as React.CSSProperties['position'],
                    }}
                >
                    <div
                        className="top-[var(--header-top,theme(spacing.6))] w-full"
                        style={{
                            position:
                                'var(--header-inner-position)' as React.CSSProperties['position'],
                        }}
                    >
                        <div className="relative flex gap-4">
                            <div className="flex flex-1 ml-10 md:ml-0 justify-start md:justify-center">
                                <MobileNavigation className="pointer-events-auto md:hidden"/>
                                <DesktopNavigation className="pointer-events-auto hidden md:block"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}