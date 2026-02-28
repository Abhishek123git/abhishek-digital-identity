import { Link } from "react-router-dom";
import { LuLinkedin, PiMouseMiddleClickDuotone, FaGithub, BiLogoGmail } from "../icons";

const myObject = [
    {
        title: "LinkedIn",
        subtitle: "Connect with me on LinkedIn",
        icon1: <LuLinkedin className="w-6 h-auto" />,
        icon2: <PiMouseMiddleClickDuotone className="clickmouse w-6 h-auto animate-pulse" />,
        src: `${process.env.PUBLIC_URL}/images/linkedin.webp`,
        link: "https://www.linkedin.com/in/abhishek-kumar-coder"
    },
    {
        title: "Gmail",
        subtitle: "Connect you can email me directly",
        icon1: <BiLogoGmail className="w-6 h-auto" />,
        icon2: <PiMouseMiddleClickDuotone className="clickmouse w-6 h-auto animate-pulse" />,
        src: `${process.env.PUBLIC_URL}/images/outlook.webp`,
        link: "mailto:abhishekkumar123@gmail.com"
    },
    {
        title: "Github",
        subtitle: "Free to connect with me on GitHub",
        icon1: <FaGithub className="w-6 h-auto" />,
        icon2: <PiMouseMiddleClickDuotone className="clickmouse w-6 h-auto animate-pulse" />,
        src: `${process.env.PUBLIC_URL}/images/github.webp`,
        link: "https://github.com/Abhishek123git/"
    }
];

// Section header component for displaying title, subtitle, description, and an image
export function SectionHeader({ title, subtitle, description, imgSrc }) {
  return (
    <div className="flex flex-col items-center gap-4">
      <p className="text-2xl md:text-4xl text-purple-500 uppercase">{title}</p>
      <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium">{subtitle}</p>
      <p className="text-white/70 font-semibold text-sm md:text-md font-normal font-openSans text-center">{description}</p>
      <img className="w-[50px] h-[50px] rounded-full" src={imgSrc} alt="gif" />
    </div>
  );
}

export function SocialMediaSection() {
    return (
        <div className="flex justify-center items-center px-2 py-4 text-base gap-2">
            {myObject.map((item, index) => (
                <div key={index} className="flex-1 flex flex-col items-center p-3 rounded-xl border border-gray-600 bg-black">
                    <div className="w-full rounded-xl bg-transparent mx-auto my-2">
                        <div className="flex basis-full flex-col p-4 w-full h-auto ">
                            <h3 className="w-full !pb-2 !m-0 font-bold flex flex-row justify-between">{item.title}
                                {item.icon1}
                            </h3>
                            <div className="flex flex-row gap-2">
                                <span className="text-slate-500 py-2">{item.subtitle}</span>
                                <Link className="flex clickLink justify-center items-center border-2 border-dashed rounded-[50%] p-2" to={item.link} target="_blank" rel="noreferrer">
                                    {item.icon2}
                                </Link>
                            </div>
                            <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
                                <img className="w-full h-auto rounded-lg " alt={item.title} src={item.src} />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}