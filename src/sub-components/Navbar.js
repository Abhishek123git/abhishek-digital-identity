import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiHomeSmileLine, CgProfile, GrPhone, SiReaddotcv, FaGithub, FaProjectDiagram, CgMoreVerticalO, GrDocumentPerformance, HiMenu, HiX } from "../icons";

const dataObject = [
    {
        name: "Home",
        link: "/",
        external: false,
        icon: <RiHomeSmileLine className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#eb2f06]" aria-label="Home icon" />
    },
    {
        name: "About",
        link: "about",
        external: false,
        icon: <CgProfile className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#1B1464]" aria-label="About icon" />
    },
    {
        name: "Projects",
        link: "projects",
        external: false,
        icon: <FaProjectDiagram className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#6D214F]" aria-label="Projects icon" />
    },
    {
        name: "Contact",
        link: "contact",
        external: false,
        icon: <GrPhone className="w-5 h-auto mr-2 inline-block group-hover:text-[#009432]" aria-label="Contact icon" />
    },
    {
        name: "More",
        dropdown: [
            { name: "Performance Reports", link: "performance-reports", external: false, icon: <GrDocumentPerformance className="w-5 h-auto mr-2 inline-block transition-colors duration-300 group-hover:text-[#eb2f06]" aria-label="Report icon" /> },
            { name: "Resume", link: "https://drive.google.com/file/d/1s1Jsu3bou6dzK3WqIyYiwGSMzCDGt6nE/view?usp=drive_link", external: false, icon: <SiReaddotcv className="w-5 h-auto mr-2 inline-block transition-colors duration-300 group-hover:text-[#d35400]" aria-label="Read CV icon" /> },
            { name: "Fork Project", link: "https://github.com/Abhishek123git/abhishek-digital-identity", external: true, icon: <FaGithub className="w-5 h-auto mr-2 inline-block group-hover:text-black" aria-label="Fork Project icon" /> }
        ],
        icon: <CgMoreVerticalO className="w-5 h-auto mr-1 inline-block transition-colors duration-300 group-hover:text-[#6D214F]" aria-label="More icon" />
    }
];

// Shared item class for both desktop and mobile
const ITEM_CLASS = "flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer transition-colors duration-300 hover:bg-gray-100 group text-white text-gray-700 bg-black";

function MenuItem({ item, onClick }) {
    const [open, setOpen] = useState(false);

    if (item.dropdown) {
        return (
            <div className="relative group">
                <button className={`${ITEM_CLASS} w-full text-white`} onClick={() => setOpen((prev) => !prev)} >
                    {item.icon}
                    <span>{item.name}</span>
                </button>
                {open && (
                    <div className="absolute -left-24 mt-2 w-auto bg-white rounded-md shadow-lg flex flex-col">
                        {item.dropdown.map((subItem, idx) => (
                            (subItem.name === "Fork Project" || subItem.name === "Resume") ? (
                                <NavLink key={idx} to={subItem.link} onClick={onClick} target="_blank" className="px-3 py-2 hover:bg-gray-100 text-gray-700 text-nowrap flex items-center" >
                                    {subItem.icon}
                                    <span>{subItem.name}</span>
                                </NavLink>
                            ) : (
                                <NavLink key={idx} to={subItem.link} onClick={onClick} className="px-3 py-2 hover:bg-gray-100 text-gray-700 text-nowrap flex items-center" >
                                    {subItem.icon}
                                    <span>{subItem.name}</span>
                                </NavLink>
                            )
                        ))}
                    </div>
                )}
            </div>
        );
    }

    if (item.external) {
        return (
            <a className={`${ITEM_CLASS} bg-black text-white`} href={item.link} target="_blank" rel="noopener noreferrer" onClick={onClick} >{item.icon}<span>{item.name}</span></a>
        );
    }

    return (
        <NavLink to={item.link} onClick={onClick} className={({ isActive }) => `${ITEM_CLASS} text-gray-700 ${isActive ? "bg-black text-purple-600" : ""}`} >
            {item.icon}
            <span>{item.name}</span>
        </NavLink>
    );
}


export function MenuList() {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <div className="relative">
            {/* Mobile toggle button */}
            <button type="button" className="md:hidden flex items-center justify-center p-2 rounded-md hover:bg-[#d0f0f0] transition-colors duration-300" onClick={() => setIsOpen((prev) => !prev)} aria-label={isOpen ? "Close menu" : "Open menu"} aria-expanded={isOpen} >
                {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex h-full flex-row items-center gap-1">
                {dataObject.map((item, index) => (
                    <MenuItem key={index} item={item} />
                ))}
            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full right-0 mt-2 w-56 flex flex-col gap-1 bg-white rounded-lg shadow-lg p-2 z-50">
                    {dataObject.map((item, index) => (
                        <MenuItem key={index} item={item} onClick={closeMenu} />
                    ))}
                </div>
            )}
        </div>
    );
}