// Footer.js

import { Link } from "react-router-dom";

import { CgMail, IoLocationOutline, PiGithubLogoDuotone, LuLinkedin, FiInstagram, RiHomeSmileLine, CgProfile, GrPhone } from "../icons";

export default function Footer() {
  return (
    <footer className="bg-[#262626] text-gray-300 py-6 h-auto">
      <div className="container mx-auto px-4 flex justify-center items-center gap-4 max-w-6xl">
        <div className="grid grid-cols-4 gap-4 w-full">
          <div className="space-y-4 ">
            <p className="text-white font-semibold font-openSans underline underline-offset-4 decoration-[#6c5ce7] text-base">En. Abhishek Kumar</p>
            <p className="text-gray-400 text-sm text-justify font-openSans pr-12">
              Fueling creativity with logic, design, and just enough caffeine.              
              Blending code, creativity, and caffeine into digital magic.<br /><br />
              Thanks for stopping by!
            </p>
          </div>
          <div className="space-y-4 grid grid-col ">
            <p className="text-white font-semibold font-openSans underline underline-offset-4 decoration-[#6c5ce7] text-base">Quick Links</p>
            <Link to="/" className=" group flex items-center text-gray-400 hover:text-white font-serif"><RiHomeSmileLine className="w-5 h-auto mr-1 inline-block ease-out group-hover:text-[#eb2f06]" />Home</Link>
            <Link to="about" className="group flex items-center text-gray-400 hover:text-white font-serif"><CgProfile className="w-5 h-auto mr-1 inline-block ease-out group-hover:text-[#4a69bd]" />About</Link>
            <Link to="contact" className="group flex items-center text-gray-400 hover:text-white font-serif"><GrPhone className="w-5 h-auto mr-2 inline-block ease-out group-hover:text-[#009432] group-hover:animate-pingSmall" />Contact</Link>
          </div>
          <div className="space-y-4">
            <p className="text-white font-semibold font-openSans underline underline-offset-4 decoration-[#6c5ce7] text-base">Get in Touch</p>
            <Link to="mailto:mp1445747@gmail.com" className="flex items-center text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans flex items-center group">
              <CgMail className="w-6 h-auto transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-[#3742fa] group-hover:animate-pulse" />
              <span className="ml-2 relative">abhi120730@gmail.com<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span></span>
            </Link>
            <p className="text-gray-400 hover:text-white transition-all duration-300 ease-out text-sm font-openSans flex items-center group">
              <IoLocationOutline className="w-6 h-auto transform transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:text-[#FFC312] group-hover:animate-bounce" />
              <span className="ml-2 relative">Varanasi, U.P, India<span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span></span>
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-white font-semibold font-openSans underline underline-offset-4 decoration-[#6c5ce7] text-base">Connect</p>
            <div className="flex space-x-6">
              <Link to="https://github.com/Abhishek123git/" target="_blank" className="group relative">
                <div className="relative">
                  <PiGithubLogoDuotone className="w-6 h-auto group-hover:text-black" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:text-white whitespace-nowrap">GitHub</span>
                </div>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link to="https://www.linkedin.com/in/abhishek-kumar-coder/" target="_blank" className="group relative">
                <div className="relative">
                  <LuLinkedin className="w-6 h-auto group-hover:text-[#4834d4]" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:text-white whitespace-nowrap">LinkedIn</span>
                </div>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
              <Link to="https://www.instagram.com/codeg.ym/" target="_blank" className="group relative">
                <div className="relative">
                  <FiInstagram className="w-6 h-auto group-hover:animate-instaColor" />
                  <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:text-white whitespace-nowrap">Instagram</span>
                </div>
                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 pt-8 px-4 mt-8 text-center md:flex md:justify-between md:text-left">
        <p className="text-gray-400 text-sm">&copy; 2026 Abhishek Kumar | Portfolio. All rights reserved.</p>
        <div className="mt-4 md:mt-0">
          <Link href="#" className="text-gray-400 text-sm mx-3">Privacy Policy </Link>
          <Link href="#" className="text-gray-400 text-sm mx-3">Terms of Service </Link>
        </div>
      </div>
    </footer>
  );
}