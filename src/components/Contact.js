import { Link } from "react-router-dom";

import { LuLinkedin, PiMouseMiddleClickDuotone, FaGithub, BiLogoGmail } from "../icons";
const Contact = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col px-2 md:px-10 py-16 w-full mx-auto max-w-6xl h-auto text-center text-white">
        <h1 className="text-2xl md:text-6xl font-serif z-10 py-px font-bold text-center">Get to Know Me Better</h1>
        <p className="text-sm font-openSans md:text-2xl max-w-xl py-px mt-6 text-center">Explore my interests, my journey as a programmer, why I chose this field, everything 101.</p>
      </section>
      <section className="flex items-center justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <div className=" w-full text-center flex justify-center items-center flex-col gap-2 my-8">
          <p className="text-2xl md:text-4xl text-purple-500 uppercase">contact me</p>
          <p className="text-sm md:text-lg lg:text-xl text-primary font-ubuntu font-medium ">Let's connect and create something amazing together.</p>
        </div>
        <div className="flex justify-center items-center px-2 py-4 text-base gap-2">
          <div className="flex-1 flex flex-col items-center p-3 rounded-xl border border-gray-600 bg-black">
            <div className="w-full rounded-xl bg-transparent mx-auto my-2">
              <div className="flex basis-full flex-col p-4 w-full h-auto ">
                <h3 className="w-full !pb-2 !m-0 font-bold flex flex-row justify-between">LinkedIn
                  <LuLinkedin className="w-6 h-auto" />
                </h3>
                <div className="flex flex-row gap-2">
                  <span className="text-slate-500 py-2">Connect with me on LinkedIn</span> 
                  <Link className="flex clickLink justify-center items-center border-2 border-dashed rounded-[50%] p-2" to="https://www.linkedin.com/in/abhishek-kumar-coder" target="_blank" rel="noreferrer">
                    <PiMouseMiddleClickDuotone className="clickmouse w-6 h-auto animate-pulse" />
                  </Link>                  
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img className="w-full h-auto rounded-lg " alt="LinkedIn Profile" src="/images/linkedin.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center p-3 rounded-xl border border-gray-600 bg-black">
            <div className="w-full rounded-xl bg-transparent mx-auto">
              <div className="flex basis-full flex-col p-2 w-full h-auto ">
                <h3 className="w-full !pb-2 !m-0 font-bold flex flex-row justify-between">Gmail
                  <BiLogoGmail className="w-6 h-auto" />
                </h3>
                <div className="flex flex-row gap-2 my-3">
                  <span className="text-slate-500 py-2">Connect you can email me directly</span>
                  <Link className="flex clickLink justify-center items-center border-2 border-dashed rounded-[50%] p-2" to="mailto:annd@gmail.com" target="_blank" rel="noreferrer">
                    <PiMouseMiddleClickDuotone className="clickmouse w-6 h-auto animate-pulse" />
                  </Link> 
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img className="w-full h-auto rounded-lg " alt="Gmail" src="./images/outlook.webp" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center p-3 rounded-xl border border-gray-600 bg-black">
            <div className="w-full rounded-xl bg-transparent mx-auto">
              <div className="flex basis-full flex-col p-2 w-full h-auto ">
                <h3 className="w-full !pb-2 !m-0 font-bold flex flex-row justify-between">Github
                  <FaGithub className="w-6 h-auto" />
                </h3>
                <div className="flex flex-row gap-2 my-3">
                  <span className="text-slate-500 py-2">Free to connect with me on GitHub</span>
                  <Link className="flex clickLink justify-center items-center border-2 border-dashed rounded-[50%] p-2" to="https://github.com/Abhishek123git/" target="_blank" rel="noreferrer">
                    <PiMouseMiddleClickDuotone className="clickmouse w-6 h-auto animate-pulse" />
                  </Link> 
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                  <img className="w-full h-auto rounded-lg " alt="Gmail" src="./images/github.webp" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
