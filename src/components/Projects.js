import { Link } from "react-router-dom";
import { SectionHeader } from "../sub-components/Projects";
const Projects = () => {
  return (
    <>
      <section className="flex justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto min-h-[42vh] text-white">
        <h2 className="text-2xl md:text-6xl font-serif font-bold text-center">Crafting Digital Realities</h2>
        <p className="text-sm font-openSans md:text-2xl mt-6 text-center">Witness the evolution of ideas into impactful creations—one line of code at a time.</p>
      </section>
      <section className="flex justify-center items-center flex-col px-2 mt-[100px] mb-10 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="My Projects" subtitle="Crafting each project like an artisan shaping their masterpiece" description="A showcase of my recent projects and contributions to the tech world." imgSrc={`${process.env.PUBLIC_URL}/gifs/project.gif`} />
        <div className="flex justify-center flex-wrap gap-4 max-w-6xl h-auto py-4 px-4 my-4">
          <div className="flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full"><button className="relative px-2 py-1 sm:px-4 sm:py-2 rounded-full" style={{transformStyle: "preserve-3d"}}><span className="relative block text-black dark:text-white text-xs sm:text-md md:text-lg">Home</span></button><button className="relative px-2 py-1 sm:px-4 sm:py-2 rounded-full" style={{transformStyle: "preserve-3d"}}><span className="relative block text-black dark:text-white text-xs sm:text-md md:text-lg">About</span></button><button className="relative px-2 py-1 sm:px-4 sm:py-2 rounded-full" style={{transformStyle: "preserve-3d"}}><div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-purple-700 dark:to-indigo-800 text-black dark:text-white shadow-lg rounded-full" style={{transform: "none", transformOrigin: "50% 50% 0px", opacity: 1}}></div><span className="relative block text-black dark:text-white text-xs sm:text-md md:text-lg">Contact</span></button><button className="relative px-2 py-1 sm:px-4 sm:py-2 rounded-full" style={{transformStyle: "preserve-3d"}}><span className="relative block text-black dark:text-white text-xs sm:text-md md:text-lg">Services</span></button><button className="relative px-2 py-1 sm:px-4 sm:py-2 rounded-full" style={{transformStyle: "preserve-3d"}}><span className="relative block text-black dark:text-white text-xs sm:text-md md:text-lg">S/W Development and Exports</span></button></div>
          <Link className="flex-1 min-w-[250px] max-w-[300px] rounded-md" to="/projects/project-one" target="_blank">
            <div className="border border-gray-600 rounded-3xl p-4">
              <h4 className="text-lg font-bold font-serif text-white my-6 mx-2">Nike Shoes Online Store UI Clone</h4>
              <p className="text-sm text-gray-400 font-openSans mx-2">This responsive front-end clone of Nike's online store highlights dynamic design, intuitive navigation, and my expertise in HTML, CSS, JavaScript, and responsive design.</p>
            </div>
          </Link>        
        </div>
      </section>
    </>
  );
};

export default Projects;
