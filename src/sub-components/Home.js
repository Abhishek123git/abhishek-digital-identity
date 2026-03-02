import { Link } from "react-router-dom";

const languages = [
  { heading: "Languages", name: "C#", icon: "https://svgl.app/library/csharp.svg" },
  { heading: "Frontends", name: "JavaScript", icon: "https://svgl.app/library/javascript.svg" },
  { heading: "Backends", name: "Java", icon: "https://svgl.app/library/java.svg" },
  { heading: "Databases", name: "TypeScript", icon: "https://svgl.app/library/typescript.svg" },
  { heading: "Tools", name: "Python", icon: "https://svgl.app/library/python.svg" },
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

// CertificateCard component for displaying certificate information with an image, issued by, earned on, more certificates, and a link

export function CertificateCard ({ imgSrc, altText, issuedBy, earnedOn, moreCertificates, link }) {
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
        <span className="font-semibold text-[#e1b12c] mb-2 uppercase">
          more certificates : <span className="font-semibold text-gray-400 text-base normal-case">{moreCertificates}</span>
        </span>
        <Link to={link} className="btn btn-primary"> Go somewhere </Link>
      </div>
    </div>
  );
}

// Technologies component for displaying a technology with its name and icon
export function Technologies({ name, src }) {
  return (
    <li className="relative">
      <div className="group inline-block">
        <img alt={name} width="32" height="32" decoding="async" className="mx-auto rounded-xs group-hover:hidden group-focus:hidden" src={src} loading="lazy" />
        <span className="mx-auto mb-1 hidden w-fit rounded-md bg-transparent p-1 text-center text-sm font-medium break-words whitespace-pre-line text-emerald-300 opacity-100 backdrop-blur-sm group-hover:inline-block group-focus:inline-block">{name}</span>
      </div>
    </li>
  );
};
