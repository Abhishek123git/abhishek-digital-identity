import { useState } from "react";
import { Link } from "react-router-dom";
import { RxDotFilled } from "../icons";
import { SectionHeader, UIProjectSection, APIProjectSection, MVCProjectSection } from "../sub-components/Projects";
import { HeadElement } from "../sub-components/HeadElement";
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX");

  return (
    <>
    <HeadElement pageurl="projects" pagetitle="Projects" pagedescription="Explore Abhishek Kumar's portfolio projects built with React, Blazor, ASP.NET, and modern UI/UX practices. See real‑world applications that demonstrate his expertise in scalable, accessible, and high‑performance web development." />
      <section className="flex justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto min-h-[42vh] text-white">
        <h2 className="text-2xl md:text-6xl font-bold text-center">Crafting Digital Realities</h2>
        <p className="text-sm font-openSans md:text-2xl mt-6 text-center">Witness the evolution of ideas into impactful creations—one line of code at a time.</p>
      </section>
      <section className="flex justify-center items-center flex-col px-2 mt-[100px] mb-10 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="My Projects" subtitle="Crafting each project like an artisan shaping their masterpiece" description="A showcase of my recent projects and contributions to the tech world." imgSrc={`${process.env.PUBLIC_URL}/gifs/project.webm`} />
        <div className="flex justify-center flex-wrap gap-4 max-w-6xl h-auto p-4">
          <div className="flex flex-row items-center justify-center gap-2 w-full text-white">
            <button className={`px-4 py-2 border border-gray-600 rounded-full ${activeCategory === "UI/UX" ? "bg-gray-700" : ""}`} onClick={() => setActiveCategory("UI/UX")}>
              <span className="block dark:text-white text-xs sm:text-md md:text-lg">UI/UX</span>
            </button>
            <button className={`px-4 py-2 border border-gray-600 rounded-full ${activeCategory === "Web API" ? "bg-gray-700" : ""}`} onClick={() => setActiveCategory("Web API")}>
              <span className="block dark:text-white text-xs sm:text-md md:text-lg">Web API</span>
            </button>
            <button className={`px-4 py-2 border border-gray-600 rounded-full ${activeCategory === "DotNET MVC" ? "bg-gray-700" : ""}`} onClick={() => setActiveCategory("DotNET MVC")}>
              <span className="block dark:text-white text-xs sm:text-md md:text-lg">DotNET MVC</span>
            </button>
          </div>
          {activeCategory === "UI/UX" && ( <UIProjectSection /> )}
          {activeCategory === "Web API" && ( <APIProjectSection /> )}
          {activeCategory === "DotNET MVC" && ( <MVCProjectSection /> )}
        </div>
      </section>

      <section className="flex justify-center items-center flex-col px-2 mb-10 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="STEP INTO MY CODE VAULT" subtitle="Don't forget to meet my enchanters! (click for context)" description="A vault of code, creativity, and contributions and unlock projects that power my digital journey" imgSrc={`${process.env.PUBLIC_URL}/gifs/project.webm`} />
        <div className="flex flex-row justify-center gap-3 p-4 border border-gray-600 rounded-lg my-4">
          <img src={`${process.env.PUBLIC_URL}/images/github-profile.webp`} className="rounded-xl shadow-xl h-[317px]" width="300" height="317" alt="github" />
          <div className="flex flex-col items-start">
            <p className="text-[#6c5ce7] font-semibold font-openSans underline underline-offset-4 decoration-[#6c5ce7] text-2xl text-start uppercase">Highlights</p>
            <ul className="text-gray-400 italic pt-4 text-base text-justify space-y-2">
              <li className="flex items-start gap-2"><RxDotFilled className="inline-block mr-2 size-6 transform transition-all duration-300 ease-out animate-ping text-[#44bd32]" />Builds end-to-end solutions using ASP.NET Core and C#, paired with front-end skills for complete web applications</li>
              <li className="flex items-start gap-2"><RxDotFilled className="inline-block mr-2 size-6 transform transition-all duration-300 ease-out animate-ping text-[#44bd32]" />Hands-on experience with deployment and server management, showing ability to ship projects to production, not just write code</li>
              <li className="flex items-start gap-2"><RxDotFilled className="inline-block mr-2 size-6 transform transiti on-all duration-300 ease-out animate-ping text-[#44bd32]" />Frequent contributions in the last year with a 7-day longest streak, reflecting steady, disciplined coding habits</li>
              <li className="flex items-start gap-2"><RxDotFilled className="inline-block mr-2 size-6 transform transition-all duration-300 ease-out animate-ping text-[#44bd32]" />Comfortable across multiple languages and tools, enabling flexibility on varied project requirements</li>
              <li className="flex items-start gap-2"><RxDotFilled className="inline-block mr-2 size-6 transform transition-all duration-300 ease-out animate-ping text-[#44bd32]" />Active social links on profile signal openness to networking, collaboration, and visibility in the dev community</li>
            </ul>            
            <Link to="https://github.com/Abhishek123git" className="align-start p-4 my-3 bg-[#6c5ce7] text-white font-bold rounded-lg inline-block" target="_blank" rel="noopener noreferrer">
              Check GitHub Profile
            </Link>
          </div>          
        </div>
      </section>
    </>
  );
};

export default Projects;