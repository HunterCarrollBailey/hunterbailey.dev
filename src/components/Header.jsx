import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";

function Header() {
  // State to manage the visibility of the collapsible menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-900 shadow sticky top-0 left-0 z-20">
      <nav className="container mx-auto flex flex-col lg:flex-row justify-between items-center p-4 text-slate-50">
        <div className="flex flex-row lg:justify-around justify-start w-full lg:w-auto">
          {/* Toggle Button */}
          <button className="lg:hidden text-2xl" onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
        {/* Collapsible Menu */}
        <div
          className={`flex flex-col relative lg:hidden w-full space-y-4 overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <NavLink className="lg:mt-0 mt-[2%]" to="#home">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/tech">Tech Stacks</NavLink>
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink
            to="https://github.com/HunterCarrollBailey"
            target="_blank"
            className="text-2xl"
          >
            <FaGithub />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/huntercbailey/"
            target="_blank"
            className="text-2xl"
          >
            <FaLinkedin />
          </NavLink>
        </div>
        {/* Non-collapsible Menu for larger screens */}
        <div className="lg:flex flex-row justify-center items-center relative hidden w-full *:px-4 hover:*:text-emerald-500">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/tech">Tech Stacks</NavLink>
          {/* <NavLink to="#blog">Blog</NavLink> */}
          <NavLink to="/resume">Resume</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          {/* <NavLink to="#testimonials">Testimonials</NavLink> */}
          <NavLink
            to="https://github.com/HunterCarrollBailey"
            target="_blank"
            className="text-2xl"
          >
            <FaGithub />
          </NavLink>{" "}
          {/* GitHub link */}
          <NavLink
            to="https://www.linkedin.com/in/huntercbailey/"
            target="_blank"
            className="text-2xl"
          >
            <FaLinkedin />
          </NavLink>{" "}
          {/* LinkedIn link */}
        </div>
      </nav>
    </header>
  );
}

export default Header;
