import { Link } from "react-router-dom";
import { ReactLight, TailwindCSS, JavaScript, TypeScript, Java, 
  HTML5, Bootstrap, MicrosoftNET, CSharp, MicrosoftSQLServer, MySQLLight, 
  MongoDBLight, VisualStudioCode, VisualStudio, Swagger, Postman, Netlify, VercelLight, 
  AmazonWebServicesLight, Nodejs, Cloudflare, MicrosoftAzure  } from "@ridemountainpig/svgl-react";
import { GiCheckMark, FaDownload, IoQrCodeOutline } from "../icons";  
import GithubContributionCalendar from "../components/GithubContributionCalendar"

/* ------------------------------------------------------------------ */
/* Static data — module scope so it is created once, not per render.   */
/* ------------------------------------------------------------------ */

const ASSET_BASE = process.env.PUBLIC_URL;

const HIGHLIGHT_TEXT =
  "font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent transition-colors ease-in-out duration-300";

const ACTION_BUTTON =
  "flex justify-center items-center my-4 py-3 px-8 text-white border-2 rounded-full transition-colors duration-300 hover:text-[#0abde3] hover:bg-[#d0f0f0]";

const TECH_STACK = [
  {
    title: "Languages",
    items: [
      { Icon: Java, name: "Java" },
      { Icon: JavaScript, name: "JavaScript" },
      { Icon: TypeScript, name: "TypeScript" }
    ],
  },
  {
    title: "Backend",
    items: [
      { Icon: MicrosoftNET, name: ".NET" },
      { Icon: CSharp, name: "C#" },
      { Icon: Nodejs, name: "Node.js" }
    ],
  },
  {
    title: "Frontends",
    items: [
      { Icon: HTML5, name: "HTML5" },
      { Icon: Bootstrap, name: "Bootstrap" },
      { Icon: ReactLight, name: "React" },
      { Icon: TailwindCSS, name: "Tailwind CSS" }
    ],
  },
  {
    title: "Databases",
    items: [
      { Icon: MicrosoftSQLServer, name: "SQL Server" },
      { Icon: MySQLLight, name: "MySQL" },
      { Icon: MongoDBLight, name: "MongoDB" }
    ],
  },
  {
    title: "Hosting",
    items: [
      { Icon: Netlify, name: "Netlify" },
      { Icon: VercelLight, name: "Vercel" },
      { Icon: AmazonWebServicesLight, name: "AWS" },
      { Icon: Cloudflare, name: "Cloudflare" },
      { Icon: MicrosoftAzure, name: "Azure" }
    ],
  },
  {
    title: "Tools",
    items: [
      { Icon: VisualStudioCode, name: "VS Code" },
      { Icon: VisualStudio, name: "Visual Studio" },
      { Icon: Swagger, name: "Swagger" },
      { Icon: Postman, name: "Postman" }
    ],
  },
];

const SKILLS = [
  "JavaScript", "ReactJS", "SQL Server", "MySQL", "C#", "ASP.NET",
  "React Hook Form", "DotNet Core MVC", "DotNet Core Web API", "Bootstrap",
  "Tailwind CSS", "JQuery", "Entity Framework (EF)", "LINQ", "Azure",
];

const CERTIFICATES = [
  { imgSrc: `${ASSET_BASE}/images/csharp.webp`, altText: "HackerRank C# certificate", issuedBy: "HackerRank", earnedOn: "11 Oct 2025", link: "https://www.hackerrank.com/certificates/132cb9f96e1c" },
  { imgSrc: `${ASSET_BASE}/images/udemy_netcore.webp`, altText: "Udemy .NET Core certificate", issuedBy: "Udemy", earnedOn: "19 March 2023", link: "https://www.udemy.com/certificate/UC-91bef800-126f-4506-a0bb-d1f0f027627d/" },
  { imgSrc: `${ASSET_BASE}/images/codingninja_java.webp`, altText: "Coding Ninjas Java certificate", issuedBy: "codingninjas", earnedOn: "15 Feb 2023", link: "#" },
  { imgSrc: `${ASSET_BASE}/images/codechef_javascript.webp`, altText: "CodeChef JavaScript certificate", issuedBy: "CodeChef", earnedOn: "20 May 2025", link: "https://www.codechef.com/certificates/public/4c489d0" },
];

export const HeroSection = ({ onCvClick, onQrClick }) => (
  <section className="w-full max-w-6xl py-8 sm:py-16 mx-auto">
    <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
      <span className="text-white flex items-center">
        Hi, I am
        <video
          className="inline-block ml-4"
          src={`${ASSET_BASE}/gifs/wave.webm`}
          playsInline
          autoPlay
          loop
          muted
          aria-hidden="true"
        />
      </span>
      <span className="mt-4 block text-emerald-500">Abhishek Kumar</span>
    </h1>

    <div className="grid grid-cols-2 gap-4 mt-6 w-full text-base text-white/75 text-justify items-stretch">
      <div>
        <p>
          <span className="text-4xl text-[#ffc048] mr-1">R</span>
          <span className={`${HIGHLIGHT_TEXT} hover:decoration-[#EA2027]`}>esults-driven Full Stack Developer</span>{" "}
          with 3 years of experience architecting and delivering robust web applications using{" "}
          <span className={`${HIGHLIGHT_TEXT} hover:decoration-pink-500`}>ASP.NET MVC, JavaScript, and SQL Server</span>.
          Adept at building{" "}
          <span className={`${HIGHLIGHT_TEXT} hover:decoration-[#EA2027]`}>scalable, secure, and high-performance solutions</span>,
          with a strong focus on{" "}
          <span className={`${HIGHLIGHT_TEXT} hover:decoration-[#EA2027]`}>UI/UX optimization and database efficiency</span>.
          Proven track record of thriving in{" "}
          <span className={`${HIGHLIGHT_TEXT} hover:decoration-sky-500`}>Agile environments</span>, collaborating
          cross-functionally to deliver software that aligns with business goals and enhances user satisfaction.
          Passionate about solving real-world problems through clean code, modular design, and continuous improvement.
        </p>
        <br />
        Skilled in leveraging ASP.NET MVC, JavaScript, and SQL Server to build scalable, secure, and high-performance
        solutions that meet complex business requirements.
        <br />
        <a
          className="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-500 hover:no-underline hover:decoration-white"
          href="/contact"
        >
          Let&apos;s create something great together!
        </a>
      </div>
      <div className="flex justify-center items-center">
        <img
          className="rounded-full w-[358px] h-[358px]"
          src={`${ASSET_BASE}/images/Abhishek_pro.webp`}
          alt="Portrait of Abhishek Kumar"
          width={358}
          height={358}
          loading="lazy"
        />
      </div>
    </div>

    <div className="flex flex-col items-center justify-center max-w-5xl mt-16 border rounded-lg border-gray-600 mx-auto p-6 hover:bg-[#576079] hover:border-0 group">
      <div className="flex flex-row items-center justify-center space-x-4">
        <button type="button" className={ACTION_BUTTON} onClick={onCvClick}>
          <FaDownload className="w-6 h-auto mr-2 inline-block animate-bounce" />
          <span className="text-md font-semibold font-openSans">Resume / CV</span>
        </button>
        <button type="button" className={ACTION_BUTTON} onClick={onQrClick}>
          <IoQrCodeOutline className="w-6 h-auto mr-2 inline-block" />
          <span className="text-md font-semibold font-openSans">QR Code</span>
        </button>
      </div>
      <span className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium group-hover:text-[#cc8e35] transition-colors duration-300">
        Same Story, Multiple Formats, One Professional Journey Choose Your Format
      </span>
    </div>
     <GithubContributionCalendar username="Abhishek123git" />;
    <p className="font-serif text-white/75 text-5xl flex flex-wrap justify-center items-center leading-relaxed text-center font-light px-4 sm:px-6 md:px-8">
      I am a <span className="text-purple-500 mx-3">full‑stack developer</span> who thrives at the intersection of
      creativity and technology, transforming challenges into opportunities and ideas into impactful digital
      experiences. With an unwavering passion for innovation, I craft solutions that don&apos;t just solve problems
      but inspire progress, pushing boundaries to build the future of the web.
    </p>
  </section>
);

export const TechStackSection = () => (
  <section className="w-full max-w-6xl py-8 mx-auto">
    <SectionHeader
      title="technologies"
      subtitle="Here's what I typically work with"
      description="This section highlights my core technical expertise across programming languages, front‑end frameworks, back‑end platforms, tools, and databases—demonstrating versatility and proficiency in full stack development."
      imgSrc={`${ASSET_BASE}/gifs/settings.webm`}
    />
    <ul className="mx-auto mt-6 grid gap-[1em] md:grid-cols-2 lg:grid-cols-3">
      {TECH_STACK.map(({ title, items }) => (
        <li key={title} className="mb-2 break-inside-avoid rounded-lg bg-[#2f3640] p-5 hover:bg-[#576079]">
          <div className="flex border-b-2 border-red-500">
            <div className="text-lg font-semibold text-white">{title}</div>
          </div>
          <ul className="mx-auto mt-8 flex flex-row flex-wrap gap-9 justify-between text-center">
            {items.map(({ Icon, name }) => (
              <li key={name} title={name}>
                <Icon width={60} height={60} />
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

export const ExperienceSection = () => (
  <section className="w-full max-w-6xl py-8 mx-auto">
    <SectionHeader
      title="experiences"
      subtitle="A curated chronicle of professional engagements"
      description="Full stack developer with experience in C#, ASP.NET, SQL Server, and Web API (MVC), contributing to VMS projects and optimizing critical functionalities. Developed and maintained flentis.com across backend, frontend, and SEO. Hands-on with ReactJS, React Hook Form, and Zod validation for building responsive, modern applications."
      imgSrc={`${ASSET_BASE}/gifs/multitasking.webm`}
    />
    <div className="p-10">
      <div className="flex flex-col text-white bg-black/50 rounded-md">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif my-5 lg:px-14">
          Associate Software Engineer
        </h1>
        <h1 className="text-lg font-bold text-purple-400 font-serif lg:px-14">
          Flentis Corporation
          <hr className="border-red-600 my-4" />
        </h1>
        <div className="min-w-[12rem] h-auto text-base md:max-h-full flex flex-col lg:flex-row justify-center relative lg:space-x-10 rounded-md p-6 lg:p-10">
          <div className="relative flex items-start px-4 lg:px-6">
            <div className="max-w-full lg:max-w-2xl">
              <span className="font-bold text-[#1dd1a1] uppercase">Details :</span>
              <ul className="mt-4 text-gray-400 text-justify">
                <li><GiCheckMark className="inline mr-2 text-emerald-400" />Part of multiple projects of the organization, primarily VMS, using C#, ASP.NET, SQL Server, and Web API (MVC structure).</li>
                <li><GiCheckMark className="inline mr-2 text-emerald-400" />Part of the implementation team, learning how to implement critical functionality and optimize code.</li>
                <li><GiCheckMark className="inline mr-2 text-emerald-400" />Worked full-time on the company website (flentis.com), covering backend, frontend, and SEO (C#, ASP.NET, JavaScript, CSS).</li>
                <li><GiCheckMark className="inline mr-2 text-emerald-400" />6 months of live-project experience with ReactJS, React Hook Form, and the Zod validation library.</li>
              </ul>
            </div>
          </div>
          <div className="h-48 sm:h-60 w-full sm:w-80">
            <img
              src={`${ASSET_BASE}/images/flentis.webp`}
              alt="Flentis Corporation company website screenshot"
              loading="lazy"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const SkillsSection = () => (
  <section className="w-full max-w-6xl py-8 mx-auto">
    <SectionHeader
      title="skills"
      subtitle="My key expertises and technical proficiencies"
      description="Skilled in full stack development with strong expertise in C#, ASP.NET, SQL, and modern front-end frameworks like ReactJS, Tailwind, and Bootstrap — delivering scalable, responsive, and cloud-ready solutions."
      imgSrc={`${ASSET_BASE}/gifs/rating.webm`}
    />
    <div className="flex p-10 max-w-6xl gap-4 flex-wrap justify-center text-white">
      {SKILLS.map((skill) => (
        <div key={skill} className="px-4 py-2 rounded-full text-white font-semibold border-2 border-gray-600 thunderlight">
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export const CertificatesSection = () => (
  <section className="w-full max-w-6xl py-8 mx-auto">
    <SectionHeader
      title="certificates & badges"
      subtitle="Recognized Skills and Professional Achievements"
      description="Certified by leading platforms like Coding Ninjas, CodeChef, and HackerRank — showcasing proven skills, problem-solving expertise, and a commitment to continuous learning."
      imgSrc={`${ASSET_BASE}/gifs/certificate.webm`}
    />
    <div className="overflow-hidden relative sm:my-10 text-base text-gray-400">
      <div className="flex space-x-6 animate-scrollRight items-stretch hover:animate-none">
        {CERTIFICATES.map((cert) => (
          <CertificateCard key={cert.altText} {...cert} />
        ))}
      </div>
    </div>
  </section>
);



// Section header component for displaying title, subtitle, description, and an image
function SectionHeader({ title, subtitle, description, imgSrc }) {
   return (
     <div className="flex flex-col items-center gap-4">
       <p className="text-2xl md:text-4xl text-purple-500 uppercase">{title}</p>
       <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium">{subtitle}</p>
       <p className="text-white/70 font-semibold text-sm md:text-md font-openSans text-center">{description}</p>
       <video className="rounded-full" src={imgSrc} autoPlay loop muted playsInline aria-hidden="true"></video>
     </div>
   );
   }

// CertificateCard component for displaying certificate information with an image, issued by, earned on, more certificates, and a link

function CertificateCard({ imgSrc, altText, issuedBy, earnedOn, link }) {
  return (
    <div className="flex flex-col items-center rounded-lg flex-1 md:p-2 border border-gray-600">
      <img src={imgSrc} alt={altText} width={600} height={400} className="w-full h-auto object-cover" loading="lazy" />
      <div className="w-full h-auto md:py-4 px-2 flex flex-col items-start gap-2">
        <span className="font-semibold text-[#e1b12c] uppercase">
          issued by : <span className="font-semibold text-gray-400 text-base normal-case">{issuedBy}</span>
        </span>
        <span className="text-sm font-semibold text-[#e1b12c] mb-2 normal-case">
          Earned On : <span className="font-semibold text-gray-400 text-sm normal-case">{earnedOn}</span>
        </span>
        <Link to={link} className="px-6 py-3 bg-purple-500 text-black font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300" target="_blank" rel="noreferrer" aria-label={`Check details for ${altText}`}> Check Details </Link>
      </div>
     </div>
   );
 }
