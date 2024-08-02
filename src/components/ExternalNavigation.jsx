import { FaGithub, FaLinkedin, FaSpotify, FaInstagramSquare, FaBook, FaArrowDown } from "react-icons/fa";
export default function ExternalNavigation() {
  return (
    <section id="Links" className="flex flex-col flex-wrap content-center justify-center">
      <ul className="flex flex-row gap-4 text-3xl">
        <li className="list-item">
          <a href="https://github.com/HunterCarrollBailey" target="_blank"><FaGithub /></a>
        </li>
        <li className="list-item">
          <a href="https://www.linkedin.com/in/huntercbailey/" target="_blank"><FaLinkedin /></a>
        </li>
        <li className="list-item">
          <a href="https://open.spotify.com/user/21fwvqec332fp7apchtqe2z7y" target="_blank"><FaSpotify /></a>
        </li>
        <li className="list-item hidden">
          <a href="#" target="_blank"><FaBook /></a>
        </li>
        <li className="list-item">
          <a href="https://www.instagram.com/hunter.carrollbailey/" target="_blank"><FaInstagramSquare /></a>
        </li>
      </ul>
      <FaArrowDown  className="mx-auto mt-10 text-2xl"/>
    </section>
  );
}
