import { Link } from "react-router-dom";
import { RiHomeSmileLine, CgProfile, GrPhone, SiReaddotcv, FaGithub, FaProjectDiagram } from "../icons";
const Navbar = () => {
  return (
    <nav className="sticky top-0 navbar flex justify-center items-center w-full h-16 bg-black text-white border-b border-gray-600 absolute z-50">
      <header className="z-40 flex px-6 gap-4 w-full flex-row relative flex-nowrap items-center justify-between">
        <ul className="flex gap-4 h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0" data-justify="start">
          <button className="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 sm:hidden" type="button" aria-label="Open menu" aria-pressed="false"><span className="sr-only">open navigation menu</span><span className="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"></span></button>
          <div className="flex basis-0 flex-row flex-grow flex-nowrap justify-start bg-transparent items-center no-underline text-medium whitespace-nowrap box-border" justify="start">
            <a aria-current="page" href="/">
              <p className="font-semibold text-2xl justEffect font-serif bg-gradient-to-b from-purple-400 via-purple-500 to-black bg-clip-text text-transparent border-0" style={{ "backgroundSize": "100% 100%", "backgroundPosition": "center top" }}>&lt; Abhishek Kumar /&gt;</p>
            </a>
          </div>
        </ul>
        <ul className="h-full flex-row flex-nowrap items-center data-[justify=start]:justify-start data-[justify=start]:flex-grow data-[justify=start]:basis-0 data-[justify=center]:justify-center data-[justify=end]:justify-end data-[justify=end]:flex-grow data-[justify=end]:basis-0 hidden sm:flex gap-4" data-justify="end">
          <li className="group text-md font-semibold font-openSans rounded-md py-1 px-2 hover:bg-[#d0f0f0] duration-300">
            <Link className="flex items-center" to="/">
              <RiHomeSmileLine className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#eb2f06]" />
              <span className="transition-colors duration-300 group-hover:text-purple-400">Home</span>
            </Link>
          </li>
          <li className="group text-md font-semibold font-openSans rounded-md py-1 px-2 hover:bg-[#d0f0f0] duration-300">
            <Link className="flex items-center" to="about">
              <CgProfile className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#1B1464]" />
              <span className="transition-colors duration-300 group-hover:text-purple-400">About</span>
            </Link>
          </li>
          <li className="group text-md font-semibold font-openSans rounded-md py-1 px-2 hover:bg-[#d0f0f0] duration-300">
            <Link className="flex items-center" to="projects">
              <FaProjectDiagram className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#6D214F]" />
              <span className="transition-colors duration-300 group-hover:text-purple-400">Projects</span>
            </Link>
          </li>
          <li className="group text-md font-semibold font-openSans rounded-md py-1 px-2 hover:bg-[#d0f0f0] duration-300">
            <Link className="flex items-center" to="https://drive.google.com/file/d/1s1Jsu3bou6dzK3WqIyYiwGSMzCDGt6nE/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
              <SiReaddotcv className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#d35400]" />
              <span className="transition-colors duration-300 group-hover:text-purple-400">Resume</span>
            </Link>
          </li>
          <li className="group text-md font-semibold font-openSans rounded-md py-1 px-2 hover:bg-[#d0f0f0] duration-300">
            <Link className="flex items-center" to="contact">
              <GrPhone className="w-5 h-auto mr-2 inline-block group-hover:text-[#009432] animate-pingSmall" />
              <span className="transition-colors duration-300 group-hover:text-purple-400">Contact</span>
            </Link>
          </li>
          <li className="group text-md font-semibold font-openSans rounded-md py-1 px-2 hover:bg-[#d0f0f0] duration-300">
            <Link className="flex items-center" to="https://github.com/Abhishek123git/abhishek-digital-identity" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-auto mr-2 inline-block group-hover:text-black" />
              <span className="transition-colors duration-300 group-hover:text-purple-400">Fork Project</span>
            </Link>
          </li>
        </ul>
      </header>
    </nav>
  );
};

export default Navbar;