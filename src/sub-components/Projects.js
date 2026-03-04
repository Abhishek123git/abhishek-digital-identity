import { Link } from "react-router-dom";

const UIProjectData = [
    {
        title: "Login form", description: "Login form with capture code validation using React and JavaScript", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Signup form", description: "Signup form with email verification using React and JavaScript", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Dashboard UI", description: "Dashboard UI with responsive design using React and Tailwind CSS", link: "https://www.linkedin.com/in/abhishek-kumar-coder"  
    }
];

const APIProjectData = [
    {
        title: "Authentication API", description: "RESTful API for user authentication with JWT and role-based access control using ASP.NET Core",link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Payment Gateway API", description: "Secure API integration for handling online payments with Stripe and PayPal using Node.js and Express", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Inventory Management API", description: "Scalable API for managing product inventory with CRUD operations and SQL Server backend", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Weather Data API", description: "API for fetching and caching real-time weather data using external services and Redis", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    }
];

const MVCProjectData = [
    {
        title: "Employee Management System", description: "ASP.NET MVC application for managing employees with CRUD operations, role-based access, and SQL Server integration", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "E-Commerce Platform", description: "MVC-based e-commerce site with product catalog, shopping cart, and secure checkout using Razor views and Entity Framework", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Online Learning Portal", description: "MVC application for course management, student enrollment, and progress tracking with responsive Razor pages", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Hospital Management System", description: "ASP.NET MVC project for patient records, appointment scheduling, and doctor management with SQL Server backend", link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    }
];

// Section header component for displaying title, subtitle, description, and an image
export function SectionHeader({ title, subtitle, description, imgSrc }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl md:text-4xl text-purple-500 uppercase">{title}</p>
      <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium">{subtitle}</p>
      <p className="text-white/70 font-semibold text-sm md:text-md font-normal font-openSans text-center">{description}</p>
      <img className="w-[50px] h-[50px] rounded-full" src={imgSrc} alt="gif" loading="lazy" />
    </div>
  );
}

export function UIProjectSection() {
  return (
    <article className="flex flex-wrap max-w-6xl gap-4 h-auto px-4 py-2">
      {UIProjectData.map((project, index) => (
      <Link key={index} to={project.link} target="_blank" className="flex-1 min-w-[250px] max-w-[300px] rounded-md">
        <div className="border border-gray-600 rounded-3xl p-4 hover:shadow-lg hover:border-gray-400 transition">
          <h4 className="text-lg font-bold font-serif text-white mb-4">{project.title}</h4>
          <p className="text-sm text-gray-400 font-openSans">{project.description}</p>
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
            <h4 className="text-lg font-bold font-serif text-white mb-4">{project.title}</h4>
            <p className="text-sm text-gray-400 font-openSans">{project.description}</p>
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
          <h4 className="text-lg font-bold font-serif text-white mb-4">{project.title}</h4>
          <p className="text-sm text-gray-400 font-openSans">{project.description}</p>
        </div>
      </Link>
      ))}
    </article>
  );
}