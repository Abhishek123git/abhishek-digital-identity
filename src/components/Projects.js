import { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { RxDotFilled } from "../icons";
import { SectionHeader } from "../sub-components/Projects";
import LiveProjects from "./LiveProjects";
import { HeadElement } from "../sub-components/HeadElement";

const UIProjectSection = lazy(() =>
  import("../sub-components/Projects").then((m) => ({ default: m.UIProjectSection }))
);
const APIProjectSection = lazy(() =>
  import("../sub-components/Projects").then((m) => ({ default: m.APIProjectSection }))
);
const MVCProjectSection = lazy(() =>
  import("../sub-components/Projects").then((m) => ({ default: m.MVCProjectSection }))
);

const CATEGORIES = [
  { id: "UI/UX", label: "UI/UX", Component: UIProjectSection },
  { id: "Web API", label: "Web API", Component: APIProjectSection },
  { id: "DotNET MVC", label: "DotNET MVC", Component: MVCProjectSection },
];

const HIGHLIGHTS = [
  "Builds end-to-end solutions using ASP.NET Core and C#, paired with front-end skills for complete web applications",
  "Hands-on experience with deployment and server management, showing ability to ship projects to production, not just write code",
  "Frequent contributions in the last year with a 7-day longest streak, reflecting steady, disciplined coding habits",
  "Comfortable across multiple languages and tools, enabling flexibility on varied project requirements",
  "Active social links on profile signal openness to networking, collaboration, and visibility in the dev community",
];

const mySteps = [
  { label: "Select campaign settings", description: "..." },
  { label: "Create an ad group", description: "..." },
  { label: "Create an ad", description: "...", lastStep: true },
];

function ProjectSectionFallback() {
  return (
    <div className="w-full flex justify-center py-10 text-gray-400 text-sm">
      Loading projects…
    </div>
  );
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("UI/UX");
  const ActiveComponent = CATEGORIES.find((c) => c.id === activeCategory)?.Component;

  return (
    <>
      <HeadElement pageurl="projects" pagetitle="Projects" pagedescription="Explore Abhishek Kumar's portfolio projects built with React, Blazor, ASP.NET, and modern UI/UX practices. See real‑world applications that demonstrate his expertise in scalable, accessible, and high‑performance web development." />

      <section className="flex justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto min-h-[42vh] text-white">
        <h2 className="text-2xl md:text-6xl font-bold text-center">Crafting Digital Realities</h2>
        <p className="text-sm font-openSans md:text-2xl mt-6 text-center px-2">Witness the evolution of ideas into impactful creations—one line of code at a time.</p>
      </section>

      <section className="flex justify-center items-center flex-col px-2s mb-10 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="My Projects" subtitle="Crafting each project like an artisan shaping their masterpiece" description="A showcase of my recent projects and contributions to the tech world." imgSrc={`${process.env.PUBLIC_URL}/gifs/project.webm`} />

        <div className="flex justify-center flex-wrap gap-4 w-full max-w-6xl h-auto p-2 sm:p-4">
          <div role="tablist" aria-label="Project categories" className="flex flex-row flex-wrap items-center justify-center gap-2 w-full text-white" >
            {CATEGORIES.map(({ id, label }) => {
              const active = activeCategory === id;
              return (
                <button key={id} type="button" role="tab" aria-selected={active} onClick={() => setActiveCategory(id)} className={`px-3 sm:px-4 py-2 border border-gray-600 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 ${active ? "bg-gray-700" : "hover:bg-gray-800"}`} >
                  <span className="block dark:text-white text-xs sm:text-md md:text-lg">{label}</span>
                </button>
              );
            })}
          </div>

          <div role="tabpanel" className="w-full">
            {ActiveComponent && (
              <Suspense fallback={<ProjectSectionFallback />}>
                <ActiveComponent />
              </Suspense>
            )}
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center flex-col px-2 mb-10 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="Live Hosted Projects" subtitle="Turning ideas into impactful, production‑ready solutions" description="Dive into live projects that blend creativity with technology. Each one is a proof of concept turned into reality — designed to inspire, engage, and deliver value in the digital space." imgSrc={`${process.env.PUBLIC_URL}/gifs/project.webm`} />
        <LiveProjects steps={mySteps} />
      </section>

      <section className="flex justify-center items-center flex-col px-2 mb-10 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="STEP INTO MY CODE VAULT" subtitle="Don't forget to meet my enchanters! (click for context)" description="A vault of code, creativity, and contributions and unlock projects that power my digital journey" imgSrc={`${process.env.PUBLIC_URL}/gifs/project.webm`} />
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-4 p-4 border border-gray-600 rounded-lg my-4 w-full max-w-2xl md:max-w-none">
          <img src={`${process.env.PUBLIC_URL}/images/github-profile.webp`} className="rounded-xl shadow-xl w-full max-w-[300px] h-auto md:h-[317px] object-cover" width="300" height="317" alt="GitHub profile preview" loading="lazy" decoding="async" />
          <div className="flex flex-col items-start w-full md:w-auto">
            <p className="text-[#6c5ce7] font-semibold font-openSans underline underline-offset-4 decoration-[#6c5ce7] text-xl sm:text-2xl text-start uppercase">Highlights</p>
            <ul className="text-gray-400 italic pt-4 text-sm sm:text-base text-left space-y-2">
              {HIGHLIGHTS.map((text, i) => (
                <li key={i} className="flex items-start gap-2">
                  <RxDotFilled className="shrink-0 inline-block mt-1 size-5 sm:size-6 transform transition-all duration-300 ease-out animate-ping text-[#44bd32]" aria-hidden="true" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
            <Link to="https://github.com/Abhishek123git" className="self-start p-3 sm:p-4 my-3 bg-[#6c5ce7] text-white font-bold rounded-lg inline-block text-sm sm:text-base" target="_blank" rel="noopener noreferrer" >Check GitHub Profile</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;