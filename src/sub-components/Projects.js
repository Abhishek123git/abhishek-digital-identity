import { Link } from "react-router-dom";
import { useState } from "react";
import { PiStepsDuotone } from "../icons"
const UIProjectData = [
  {
    id: 1, title: "Login form UI", description: "A beginner‑friendly project featuring a sleek signup and login interface built with React, JavaScript and Tailwind CSS. The design highlights clean email and password fields, password confirmation, and terms validation, with a simple captcha for added security. Its dark theme and intuitive layout showcase practical authentication flow skills while remaining approachable for newcomers to web development.", link: "https://abhishek123git.github.io/signup-login-UI/", level: "Beginner", imgSrc: `${process.env.PUBLIC_URL}/images/logindemo.webp`
  },
  {
    id: 2, title: "Signup form UI", description: "Signup form with email verification using React and JavaScript.A beginner‑friendly project featuring a sleek signup and login interface built with React, JavaScript and Tailwind CSS. The design highlights clean email and password fields, password confirmation, and terms validation, with a simple captcha for added security. Its dark theme and intuitive layout showcase practical authentication flow skills while remaining approachable for newcomers to web development.", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Beginner", imgSrc: `${process.env.PUBLIC_URL}/images/signupdemo.webp`
  },
  {
    id: 3, title: "Dashboard UI", description: "Dashboard UI with responsive design using React and Tailwind CSS", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate", imgSrc: null
  }
];

const APIProjectData = [
  {
    id: 1, title: "Authentication API", description: "RESTful API for user authentication with JWT and role-based access control using ASP.NET Core", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
  },
  {
    id: 2, title: "Payment Gateway API", description: "Secure API integration for handling online payments with Stripe and PayPal using Node.js and Express", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
  },
  {
    id: 3, title: "Inventory Management API", description: "Scalable API for managing product inventory with CRUD operations and SQL Server backend", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
  },
  {
    id: 4, title: "Weather Data API", description: "API for fetching and caching real-time weather data using external services and Redis", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
  }
];

const MVCProjectData = [
  {
    id: 1, title: "Employee Management System", description: "ASP.NET MVC application for managing employees with CRUD operations, role-based access, and SQL Server integration", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
  },
  {
    id: 2, title: "E-Commerce Platform", description: "MVC-based e-commerce site with product catalog, shopping cart, and secure checkout using Razor views and Entity Framework", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Intermediate"
  },
  {
    id: 3, title: "Online Learning Portal", description: "MVC application for course management, student enrollment, and progress tracking with responsive Razor pages", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
  },
  {
    id: 4, title: "Hospital Management System", description: "ASP.NET MVC project for patient records, appointment scheduling, and doctor management with SQL Server backend", link: "https://www.linkedin.com/in/abhishek-kumar-coder", level: "Advanced"
  }
];

// Section header component for displaying title, subtitle, description, and an image
export function SectionHeader({ title, subtitle, description, imgSrc }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl md:text-4xl text-purple-500 uppercase">{title}</p>
      <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium text-center">{subtitle}</p>
      <p className="text-white/70 font-semibold text-sm md:text-md font-openSans text-center">{description}</p>
      <video className="rounded-full" src={imgSrc} autoPlay loop muted playsInline aria-hidden="true"></video>
    </div>
  );
}

export function UIProjectSection() {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id)
        ? prev.filter((expId) => expId !== id)
        : [...prev, id]
    );
  };

  return (
    <article className="flex flex-wrap max-w-6xl gap-4 h-auto px-4 py-2">
      {UIProjectData.map((project, index) => (
        <div key={index} className="flex-1 min-w-[250px] max-w-[300px] rounded-md">
          <div className="border border-gray-600 rounded-3xl p-4 hover:shadow-lg hover:border-gray-400 transition">
            <img src={project.imgSrc} alt={project.title} className="w-full h-auto rounded-md mb-4" loading="lazy" />
            <p className="text-lg font-bold font-serif text-white mb-4">{project.title}</p>
            <p className="text-sm text-gray-400 font-openSans mb-4 text-justify break-words">
              {project.description
                ? expandedIds.includes(project.id)
                  ? project.description
                  : project.description.split(" ").slice(0, 17).join(" ") + "..."
                : ""}
              <button
                className="text-blue-400 text-sm hover:underline ml-1"
                onClick={() => toggleExpand(project.id)}
              >
                {expandedIds.includes(project.id) ? "Show Less" : "Read More"}
              </button>
            </p>
            <div className="flex justify-between">
              <p className={`text-sm mt-2 font-openSans ${project.level === "Beginner" ? "text-green-500" : project.level === "Intermediate" ? "text-yellow-500" : project.level === "Advanced" ? "text-red-500" : "text-gray-400"}`}><PiStepsDuotone className="w- 8 h-auto text-white inline-block mr-1 animate-pulse" /> : {project.level}</p>
              <Link to={project.link} target="_blank" className="text-sm text-white hover:underline mt-2 block" aria-label={`Check details for ${project.title}`}>
                View Demo
              </Link>
            </div>

          </div>
        </div>
      ))}
    </article>
  );
}

export function APIProjectSection() {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id)
        ? prev.filter((expId) => expId !== id)
        : [...prev, id]
    );
  };

  return (
    <article className="flex flex-wrap max-w-6xl gap-4 h-auto px-4 py-2">
      {APIProjectData.map((project, index) => (
        <Link key={index} to={project.link} target="_blank" className="flex-1 min-w-[250px] max-w-[300px] rounded-md">
          <div className="border border-gray-600 rounded-3xl p-4 hover:shadow-lg hover:border-gray-400 transition">
            <p className="text-lg font-bold font-serif text-white mb-4">{project.title}</p>
            <p className="text-sm text-gray-400 font-openSans mb-4 text-justify break-words">
              {project.description
                ? expandedIds.includes(project.id)
                  ? project.description
                  : project.description.split(" ").slice(0, 17).join(" ") + "..."
                : ""}
              <button
                className="text-blue-400 text-sm hover:underline ml-2"
                onClick={() => toggleExpand(project.id)}
              >
                {expandedIds.includes(project.id) ? "Show Less" : "Read More"}
              </button>
            </p>
            <p className={`text-sm mt-2 font-openSans ${project.level === "Beginner" ? "text-green-500" : project.level === "Intermediate" ? "text-yellow-500" : project.level === "Advanced" ? "text-red-500" : "text-gray-400"}`}><PiStepsDuotone className="w- 8 h-auto text-white inline-block mr-1 animate-pulse" /> : {project.level}</p>
          </div>
        </Link>
      ))}
    </article>
  );
}

export function MVCProjectSection() {
  const [expandedIds, setExpandedIds] = useState([]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id)
        ? prev.filter((expId) => expId !== id)
        : [...prev, id]
    );
  };

  return (
    <article className="flex flex-wrap max-w-6xl gap-4 h-auto px-4 py-2">
      {MVCProjectData.map((project, index) => (
        <Link key={index} to={project.link} target="_blank" className="flex-1 min-w-[250px] max-w-[300px] rounded-md">
          <div className="border border-gray-600 rounded-3xl p-4 hover:shadow-lg hover:border-gray-400 transition">
            <p className="text-lg font-bold font-serif text-white mb-4">{project.title}</p>
            <p className="text-sm text-gray-400 font-openSans mb-4 text-justify break-words">
              {project.description
                ? expandedIds.includes(project.id)
                  ? project.description
                  : project.description.split(" ").slice(0, 17).join(" ") + "..."
                : ""}
              <button
                className="text-blue-400 text-sm hover:underline ml-2"
                onClick={() => toggleExpand(project.id)}
              >
                {expandedIds.includes(project.id) ? "Show Less" : "Read More"}
              </button>
            </p>
            <p className={`text-sm mt-2 font-openSans ${project.level === "Beginner" ? "text-green-500" : project.level === "Intermediate" ? "text-yellow-500" : project.level === "Advanced" ? "text-red-500" : "text-gray-400"}`}><PiStepsDuotone className="w- 8 h-auto text-white inline-block mr-1 animate-pulse" /> : {project.level}</p>
          </div>
        </Link>
      ))}
    </article>
  );
}