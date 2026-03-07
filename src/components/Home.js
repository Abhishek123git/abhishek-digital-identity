import { useState } from "react";
import { Link } from "react-router-dom";
import { QRCode} from "react-qr-code";
import { ReactLight, TailwindCSS, JavaScript, TypeScript, Java, HTML5, Bootstrap, MicrosoftNET, MicrosoftSQLServer, MySQLLight, MongoDBLight, VisualStudioCode, VisualStudio, Swagger, Postman } from "@ridemountainpig/svgl-react";
import { QrModal, CvFormatDownloadModal } from "../sub-components/Model";
import { GiCheckMark, FaDownload, IoQrCodeOutline } from "../icons";
import { SectionHeader, CertificateCard } from "../sub-components/Home";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCvFormatOpen, setIsCvFormatOpen] = useState(false);
  return (
    <>
      <section className="w-full max-w-6xl py-8 sm:py-16 mx-auto">
        <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
          <span className="text-white flex items-center">Hi, I am <img className="w-[50px] h-[50px] inline-block ml-4" src={`${process.env.PUBLIC_URL}/gifs/wave.gif`} alt="gif" loading="lazy" /></span>
          <span className="mt-4 block text-emerald-500">Abhishek Kumar</span>
        </h1>
        <div className="grid grid-cols-2 gap-4 mt-6 w-full text-base text-white/75 text-justify items-stretch">
          <div>
            <p><span className="text-4xl text-[#ffc048] mr-1">R</span><span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-[#EA2027] transition-colors ease-in-out duration-300">esults-driven Full Stack Developer</span> with 3 years of experience architecting and delivering robust web
              applications using <span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-pink-500 transition-colors ease-in-out duration-300">ASP.NET MVC, JavaScript, and SQL Server</span>. Adept at building <span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-[#EA2027] transition-colors ease-in-out duration-300">scalable, secure, and
                high-performance solutions</span>, with a strong focus on <span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-[#EA2027] transition-colors ease-in-out duration-300">UI/UX optimization and database efficiency</span>. Proven
              track record of thriving in <span className="font-bold text-[#f1f2f6] underline underline-offset-2 decoration-transparent hover:decoration-sky-500 transition-colors ease-in-out duration-300">Agile environments</span>, collaborating cross-functionally to deliver software that aligns
              with business goals and enhances user satisfaction. Passionate about solving real-world problems through
              clean code, modular design, and continuous improvement.
            </p><br />
            Skilled in leveraging ASP.NET MVC, JavaScript, and SQL Server to build scalable, secure, and high-performance solutions that meet complex business requirements.<br />
            <a className="underline decoration-emerald-500 underline-offset-2 hover:text-emerald-500 hover:no-underline hover:decoration-white" href="/contact">Let's create something great together!</a>
          </div>
          <div className="flex justify-center items-center">
            <img className="rounded-full w-[300px] h-[300px]" src={`${process.env.PUBLIC_URL}/images/Abhishek_pro.webp`} alt="abhishek_pro" loading="lazy" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-5xl mt-16 border rounded-lg border-gray-600 mx-auto p-6 hover:bg-[#303952] hover:border-0 group">
          <div className="flex flex-row items-center justify-center space-x-4">
            <Link className="flex justify-center items-center my-4 py-3 px-8 text-white border-2 rounded-full transition-colors duration-300 hover:text-[#0abde3] hover:bg-[#d0f0f0]" onClick={() => setIsCvFormatOpen(true)}>
              <FaDownload className="w-6 h-auto mr-2 inline-block animate-bounce" />
              <span className="text-md font-semibold font-openSans">Resume / CV</span>
            </Link>
            <Link className="flex justify-center items-center my-4 py-3 px-8 text-white border-2 rounded-full transition-colors duration-300 hover:text-[#0abde3] hover:bg-[#d0f0f0]" onClick={() => setIsOpen(true)}>
              <IoQrCodeOutline className="w-6 h-auto mr-2 inline-block" />
              <span className="text-md font-semibold font-openSans">QR Code</span>
            </Link>
            <QrModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <IoQrCodeOutline className="w-8 h-auto my-4 text-[#0abde3]" />
              <h1 className="text-lg font-bold font-openSans text-white">Scan QR Code</h1>
              <p className="text-sm font-semibold text-gray-600 mb-3 max-w-80 mx-4 text-center">Scan the QR code to open resume in mobile and download it</p>
              <div className="p-3 bg-[#dfe6e9] rounded-xl">
                <QRCode size={140} fgColor="#dfe6e9" bgColor="black" level="H" value="https://drive.google.com/file/d/1s1Jsu3bou6dzK3WqIyYiwGSMzCDGt6nE/view?usp=drive_link" />
              </div>
            </QrModal>
            <CvFormatDownloadModal isOpen={isCvFormatOpen} onClose={() => setIsCvFormatOpen(false)} >
              <FaDownload className="w-6 h-auto my-4 text-[#0abde3]" />
              <h1 className="text-lg font-bold font-openSans text-white">Download CV in Different Formats</h1>
              <p className="text-sm font-semibold text-gray-600 mb-3 max-w-80 mx-4 text-center">Choose your preferred format to download the CV</p>
            </CvFormatDownloadModal>
          </div>
          <span className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium group-hover:text-[#cc8e35] transition-colors duration-300">Same Story, Multiple Formats, One Professional Journey Choose Your Format</span>
        </div>
        <p className="font-serif text-white/75 text-5xl flex flex-wrap justify-center items-center leading-relaxed text-center font-light px-4 sm:px-6 md:px-8 mt-28">
          I am a <span className="text-purple-500 mx-3">full‑stack developer</span> who thrives at the intersection of creativity and technology, transforming challenges into opportunities and ideas into impactful digital experiences.
          With an unwavering passion for innovation, I craft solutions that don’t just solve problems but inspire progress, pushing boundaries to build the future of the web.
        </p>
      </section>

      {/* Technologies section start */}
      <section className="w-full max-w-6xl py-8 mx-auto">
        <SectionHeader title="technologies" subtitle="Here's what I typically work with" description="This section highlights my core technical expertise across programming languages, front‑end frameworks, back‑end platforms, tools, and databases—demonstrating versatility and proficiency in full stack development. This version keeps it sharp and professional, perfect for portfolios where recruiters want to quickly grasp your skill set." imgSrc={`${process.env.PUBLIC_URL}/gifs/settings.gif`} />
        <ul className="mx-auto mt-6 grid gap-[1em] md:grid-cols-2 lg:grid-cols-3">
          {/* Languages */}
          <li className="mb-2 break-inside-avoid rounded-lg bg-[#2f3640] p-5 hover:bg-[#303952]">
            <div className="flex border-b-2 border-red-500">
              <div className="text-lg font-semibold text-white">Languages</div>
            </div>
            <ul className="mx-auto mt-8 flex flex-row flex-wrap gap-9 justify-between text-center ">
              <li><Java width={60} height={60} /></li>
              <li><JavaScript width={60} height={60} /></li>
              <li><TypeScript width={60} height={60} /></li>
            </ul>
          </li>
          {/* Backends */}
          <li className="mb-2 break-inside-avoid rounded-lg bg-[#2f3640] p-5 hover:bg-[#303952]">
            <div className="flex border-b-2 border-red-500">
              <div className="text-lg font-semibold text-white">Backend</div>
            </div>
            <ul className="mx-auto mt-8 flex flex-row flex-wrap justify-between gap-9 text-center ">
              <li><MicrosoftNET width={60} height={60} /></li>
            </ul>
          </li>
          {/* Frontends */}
          <li className="mb-2 break-inside-avoid rounded-lg bg-[#2f3640] p-5 hover:bg-[#303952]">
            <div className="flex border-b-2 border-red-500">
              <div className="text-lg font-semibold text-white">Frontends</div>
            </div>
            <ul className="mx-auto mt-8 flex flex-row flex-wrap justify-between gap-9 text-center ">              
              <li><HTML5 width={60} height={60} /></li>                            
              <li><Bootstrap width={60} height={60} /></li>
              <li><ReactLight width={60} height={60} /></li>
              <li><TailwindCSS width={60} height={60} /></li>
            </ul>
          </li>
          {/* Databases */}
          <li className="mb-2 break-inside-avoid rounded-lg bg-[#2f3640] p-5 hover:bg-[#303952]">
            <div className="flex border-b-2 border-red-500">
              <div className="text-lg font-semibold text-white">Databases</div>
            </div>
            <ul className="mx-auto mt-8 flex flex-row flex-wrap justify-between gap-9 text-center ">
              <li><MicrosoftSQLServer width={60} height={60} /></li>
              <li><MySQLLight width={60} height={60} /></li>
              <li><MongoDBLight width={60} height={60} /></li>
            </ul>
          </li> 
          {/* Tools */}
          <li className="mb-2 break-inside-avoid rounded-lg bg-[#2f3640] p-5 hover:bg-[#303952]">
            <div className="flex border-b-2 border-red-500">
              <div className="text-lg font-semibold text-white">Tools</div>
            </div>
            <ul className="mx-auto mt-8 flex flex-row flex-wrap justify-between gap-9 text-center ">
              <li><VisualStudioCode width={60} height={60} /></li>
              <li><VisualStudio width={60} height={60} /></li>
              <li><Swagger width={60} height={60} /></li>
              <li><Postman width={60} height={60} /></li>
            </ul>
          </li>                   
        </ul>
      </section>
      {/* Technology section end */}

      {/* Experiences section start */}
      <section className="w-full max-w-6xl py-8 mx-auto">
        <SectionHeader title="experiences" subtitle="A curated chronicle of professional engagements" description="Full stack developer with experience in C#, ASP.NET, SQL Server, and Web API (MVC), contributing to VMS projects and optimizing critical functionalities. Developed and maintained flentis.com across backend, frontend, and SEO. Hands-on with ReactJS, React Hook Form, and Zod validation for building responsive, modern applications." imgSrc={`${process.env.PUBLIC_URL}/gifs/multitasking.gif`} />
        <div className="p-10">
          <div className="flex flex-col text-white bg-black/50 rounded-md">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif my-5 lg:px-14">Associate Software Engineer</h1>
            <h1 className="text-lg font-bold text-purple-400 font-serif lg:px-14">Flentis Corporation
              <hr className="border-red-600 my-4" />
            </h1>
            <div className="min-w-[12rem] h-auto text-base md:max-h-full flex flex-col lg:flex-row justify-center relative lg:space-x-10 rounded-md p-6 lg:p-10">
              <div className="relative flex items-start px-4 lg:px-6">
                <div className="max-w-full lg:max-w-2xl">
                  <span className="font-bold text-[#1dd1a1] uppercase">Details :</span>
                  <ul className="mt-4 text-gray-400 text-justify">
                    <li><GiCheckMark className="inline mr-2 text-emerald-400" />Part of multiple projects of organization basically VMS using C#, ASP.net, SQL server, And Web API using MVC structure.</li>
                    <li><GiCheckMark className="inline mr-2 text-emerald-400" />Part of implementation team where learn how to implement critical functionality and code optimization</li>
                    <li><GiCheckMark className="inline mr-2 text-emerald-400" />Full time worked on company website(flentis.com) including backend, frontend and knowledge on SEO related things. (Technical used C#, ASP.net, JavaScript, CSS). </li>
                    <li><GiCheckMark className="inline mr-2 text-emerald-400" />Also having 6-months live project working experience based on ReactJS frameworks, React Hook form, And Zod validation library.</li>
                  </ul>
                </div>
              </div>
              <div className="h-48 sm:h-60 w-full sm:w-80">
                <img src={`${process.env.PUBLIC_URL}/images/flentis.webp`} alt="flentis" loading="lazy" className="w-full h-full object-cover rounded-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experiences section end */}

      {/* Skills section start */}
      <section className="w-full max-w-6xl py-8 mx-auto">
        <SectionHeader title="skills" subtitle="My key expertises and technical proficiencies" description="Skilled in full stack development with strong expertise in C#, ASP.NET, SQL, and modern front-end frameworks like ReactJS, Tailwind, and Bootstrap — delivering scalable, responsive, and cloud-ready solutions." imgSrc={`${process.env.PUBLIC_URL}/gifs/rating.gif`} />
        <div className="flex p-10 max-w-6xl gap-4 flex-wrap justify-center text-white">
          {["JavaScript", "ReactJS", "SQL Server", "MySQL", "C#", "ASP.NET", "React Hook Form", "DotNet Core MVC", "DotNet Core Web API", "Bootstrap", "Tailwind CSS", "JQuery", "Entity Framework (EF)", "LINQ", "Azure",].map((skill) => (
            <div key={skill} className="px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 
               text-white font-semibold shadow-lg animate-pulse">
              {skill}
            </div>
          ))}
        </div>
      </section>
      {/* Skills section end */}

      {/* Certificates & Badges  section start */}
      <section className="w-full max-w-6xl py-8 mx-auto">
        <SectionHeader title="certificates & badges" subtitle="Recognized Skills and Professional Achievements" description="Certified by leading platforms like Coding Ninjas, CodeChef, and HackerRank — showcasing proven skills, problem-solving expertise, and a commitment to continuous learning." imgSrc={`${process.env.PUBLIC_URL}/gifs/certificate.gif`} />
        <div className="overflow-hidden relative sm:my-10 text-base text-gray-400">
          <div className="flex space-x-6 animate-scrollRight items-stretch hover:animate-none">
            <CertificateCard imgSrc={`${process.env.PUBLIC_URL}/images/csharp.webp`} altText="HackerRank" issuedBy="HackerRank" earnedOn="11 Oct 2025" moreCertificates="HackerRank" link="https://www.hackerrank.com/certificates/132cb9f96e1c" />
            <CertificateCard imgSrc={`${process.env.PUBLIC_URL}/images/udemy_netcore.webp`} altText="Udemy" issuedBy="Udemy" earnedOn="19 March 2023" moreCertificates="Udemy" link="https://www.udemy.com/certificate/UC-91bef800-126f-4506-a0bb-d1f0f027627d/" />
            <CertificateCard imgSrc={`${process.env.PUBLIC_URL}/images/codingninja_java.webp`} altText="codingninjas" issuedBy="codingninjas" earnedOn="15 Feb 2023" moreCertificates="codingninjas" link="#" />
            <CertificateCard imgSrc={`${process.env.PUBLIC_URL}/images/codechef_javascript.webp`} altText="codechef" issuedBy="CodeChef" earnedOn="20 May 2025" moreCertificates="CodeChef" link="https://www.codechef.com/certificates/public/4c489d0" />
          </div>
        </div>
      </section>
      {/* Certificates & Badges  section end */}

    </>
  );
};

export default Home;