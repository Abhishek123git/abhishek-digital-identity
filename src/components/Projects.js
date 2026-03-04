import { useState } from "react";
import { SectionHeader, UIProjectSection, APIProjectSection, MVCProjectSection } from "../sub-components/Projects";
const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX");

  return (
    <>
      <section className="flex justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto min-h-[42vh] text-white">
        <h2 className="text-2xl md:text-6xl font-serif font-bold text-center">Crafting Digital Realities</h2>
        <p className="text-sm font-openSans md:text-2xl mt-6 text-center">Witness the evolution of ideas into impactful creations—one line of code at a time.</p>
      </section>
      <section className="flex justify-center items-center flex-col px-2 mt-[100px] mb-10 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="My Projects" subtitle="Crafting each project like an artisan shaping their masterpiece" description="A showcase of my recent projects and contributions to the tech world." imgSrc={`${process.env.PUBLIC_URL}/gifs/project.gif`} />
        <div className="flex justify-center flex-wrap gap-4 max-w-6xl h-auto py-4 px-4 my-4">
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
          {activeCategory === "UI/UX" && (            
              <UIProjectSection title="Nike Shoes Online Store UI Clone" description="This responsive front-end clone of Nike's online store highlights dynamic design, intuitive navigation, and my expertise in HTML, CSS, JavaScript, and responsive design." link="/projects/project-one"/>            
          )}
          {activeCategory === "Web API" && (           
              <APIProjectSection title="Weather Forecast API" description="A RESTful API built with Node.js and Express that provides accurate weather forecasts, demonstrating my skills in backend development and API design." link="/projects/project-two"/>            
          )}
          {activeCategory === "DotNET MVC" && (            
              <MVCProjectSection title="E-commerce Platform" description="A full-featured e-commerce platform developed using ASP.NET MVC, showcasing my ability to create scalable web applications with robust functionality." link="/projects/project-three"/>            
          )}
        </div>
      </section>

      <section className="flex flex-col text-center w-full justify-center items-center gap-6 md:gap-10 px-4">
        <div className="max-w-lg text-center flex justify-center items-center flex-col gap-2">
          <p className="text-2xl md:text-4xl font-ysabeau text-purple-500">STEP INTO MY CODE VAULT</p>
          <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium ">Don't forget to meet my enchanters! (click for context)</p>
        </div>
      </section>    
    </>
  );
};

export default Projects;