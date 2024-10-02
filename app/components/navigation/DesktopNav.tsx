import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListNoneHorizontal } from "../lists/UnorderedLists";

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive ? "text-cyan-500" : "hover:text-cyan-500",
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-cyan-500/0 via-cyan-500/40 to-cyan-500/0" />
        )}
      </Link>
    </li>
  );
}

export default function DesktopNavigation(
  props: React.ComponentPropsWithoutRef<"nav">,
) {
  return (
    <nav {...props}>
      <ListNoneHorizontal className="flex rounded-full bg-slate-800/80 px-3 text-md font-medium shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-800/5 backdrop-blur">
        <NavItem href={"/"}>Home</NavItem>
        <NavItem href={"/about"}>About</NavItem>
        <NavItem href={"/projects"}>Projects</NavItem>
        <NavItem href={"/articles"}>Articles</NavItem>
        <NavItem href={"/tools"}>Tools</NavItem>
      </ListNoneHorizontal>
    </nav>
  );
}
