import { Link } from "react-router-dom";
import { PiStepsDuotone } from "../icons"
const UIProjectData = [
    {
        title: "Login form", description: "Login form with capture code validation using React and JavaScript", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Beginner"
    },
    {
        title: "Signup form", description: "Signup form with email verification using React and JavaScript", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Beginner"
    },
    {
        title: "Dashboard UI", description: "Dashboard UI with responsive design using React and Tailwind CSS", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
    }
];

const APIProjectData = [
    {
        title: "Authentication API", description: "RESTful API for user authentication with JWT and role-based access control using ASP.NET Core",link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
    },
    {
        title: "Payment Gateway API", description: "Secure API integration for handling online payments with Stripe and PayPal using Node.js and Express", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
    },
    {
        title: "Inventory Management API", description: "Scalable API for managing product inventory with CRUD operations and SQL Server backend", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
    },
    {
        title: "Weather Data API", description: "API for fetching and caching real-time weather data using external services and Redis", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
    }
];

const MVCProjectData = [
    {
        title: "Employee Management System", description: "ASP.NET MVC application for managing employees with CRUD operations, role-based access, and SQL Server integration", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
    },
    {
        title: "E-Commerce Platform", description: "MVC-based e-commerce site with product catalog, shopping cart, and secure checkout using Razor views and Entity Framework", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
    },
    {
        title: "Online Learning Portal", description: "MVC application for course management, student enrollment, and progress tracking with responsive Razor pages", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
    },
    {
        title: "Hospital Management System", description: "ASP.NET MVC project for patient records, appointment scheduling, and doctor management with SQL Server backend", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
    }
];

// Section header component for displaying title, subtitle, description, and an image
export function SectionHeader({ title, subtitle, description, imgSrc }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl md:text-4xl text-purple-500 uppercase">{title}</p>
      <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium">{subtitle}</p>
      <p className="text-white/70 font-semibold text-sm md:text-md font-normal font-openSans text-center">{description}</p>
      <video className="rounded-full" src={imgSrc} autoPlay loop muted playsInline></video>
    </div>
  );
}

export function UIProjectSection() {
  return (
    <article className="flex flex-wrap max-w-6xl gap-4 h-auto px-4 py-2">
      {UIProjectData.map((project, index) => (
      <Link key={index} to={project.link} target="_blank" className="flex-1 min-w-[250px] max-w-[300px] rounded-md">
        <div className="border border-gray-600 rounded-3xl p-4 hover:shadow-lg hover:border-gray-400 transition">
          <p className="text-lg font-bold font-serif text-white mb-4">{project.title}</p>
          <p className="text-sm text-gray-400 font-openSans">{project.description}</p>
          <p className={`text-sm mt-2 font-openSans ${project.level === "Beginner" ? "text-green-500" : project.level === "Intermediate" ? "text-yellow-500" : project.level === "Advanced" ? "text-red-500" : "text-gray-400"}`}><PiStepsDuotone className="w- 8 h-auto text-white inline-block mr-1 animate-pulse" /> : {project.level}</p>
        </div>
      </Link>
      ))}
    </article>
  );
}

export function APIProjectSection() {
  return (
    <article className="flex flex-wrap max-w-6xl gap-4 h-auto px-4 py-2">
      {APIProjectData.map((project, index) => (
        <Link key={index} to={project.link} target="_blank" className="flex-1 min-w-[250px] max-w-[300px] rounded-md">
          <div className="border border-gray-600 rounded-3xl p-4 hover:shadow-lg hover:border-gray-400 transition">
            <p className="text-lg font-bold font-serif text-white mb-4">{project.title}</p>
            <p className="text-sm text-gray-400 font-openSans">{project.description}</p>
            <p className={`text-sm mt-2 font-openSans ${project.level === "Beginner" ? "text-green-500" : project.level === "Intermediate" ? "text-yellow-500" : project.level === "Advanced" ? "text-red-500" : "text-gray-400"}`}><PiStepsDuotone className="w- 8 h-auto text-white inline-block mr-1 animate-pulse" /> : {project.level}</p>
          </div>
        </Link>
      ))}
    </article>
  );
}

export function MVCProjectSection() {
  return (
    <article className="flex flex-wrap max-w-6xl gap-4 h-auto px-4 py-2">
      {MVCProjectData.map((project, index) => (
      <Link key={index} to={project.link} target="_blank" className="flex-1 min-w-[250px] max-w-[300px] rounded-md">
        <div className="border border-gray-600 rounded-3xl p-4 hover:shadow-lg hover:border-gray-400 transition">
          <p className="text-lg font-bold font-serif text-white mb-4">{project.title}</p>
          <p className="text-sm text-gray-400 font-openSans">{project.description}</p>
          <p className={`text-sm mt-2 font-openSans ${project.level === "Beginner" ? "text-green-500" : project.level === "Intermediate" ? "text-yellow-500" : project.level === "Advanced" ? "text-red-500" : "text-gray-400"}`}><PiStepsDuotone className="w- 8 h-auto text-white inline-block mr-1 animate-pulse" /> : {project.level}</p>
        </div>
      </Link>
      ))}
    </article>
  );
}