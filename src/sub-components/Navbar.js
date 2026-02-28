import { Link } from "react-router-dom";
import { RiHomeSmileLine, CgProfile, GrPhone, SiReaddotcv, FaGithub, FaProjectDiagram } from "../icons";
const dataObject = [
    {
        name: "Home",
        link: "/",
        icon: <RiHomeSmileLine className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#eb2f06]" />
    },
    {
        name: "About",
        link: "about",
        icon: <CgProfile className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#1B1464]" />
    },
    {
        name: "Projects",
        link: "projects",
        icon: <FaProjectDiagram className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#6D214F]" />
    },
    {
        name: "Resume",
        link: "https://drive.google.com/file/d/1s1Jsu3bou6dzK3WqIyYiwGSMzCDGt6nE/view?usp=drive_link",
        icon: <SiReaddotcv className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#d35400]" />
    },
    {
        name: "Contact",
        link: "contact",
        icon: <GrPhone className="w-5 h-auto mr-2 inline-block group-hover:text-[#009432] animate-pingSmall" />
    },
    {
        name: "Fork Project",
        link: "https://github.com/Abhishek123git/abhishek-digital-identity",
        icon: <FaGithub className="w-5 h-auto mr-2 inline-block group-hover:text-black" />
    }
];

export function MenuList() {
    return (
        <div className="h-full flex flex-row items-center gap-1">
            {dataObject.map((item, index) => (
                <Link key={index} className="flex items-center group text-md font-semibold font-openSans rounded-md py-1 px-2 hover:bg-[#d0f0f0] transition-colors duration-300" to={item.link}>
                    {item.icon}
                    <span className="transition-colors duration-300 group-hover:text-purple-400">{item.name}</span>
                </Link>
            ))}
        </div>
    );
}
