import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";

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

// Component for displaying a journey timeline with year, header, and description
export function JourneyComponent({ year, headerText, descriptionText }) {

    return (
        <div className="flex justify-start md:gap-10 my-8">
            <p className="flex items-center text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 group"><SlCalender className="w-8 h-auto mr-2 group-hover:animate-calenderColor" />{year}</p>
            <div className="pl-20 pr-4 md:pl-4 w-full border-b-2 border-neutral-500">
                <p className="text-white text-lg md:text-xl font-bold font-inter mb-2">{headerText}</p>
                <p className="text-white/70 font-semibold text-sm md:text-md font-normal font-openSans mb-8 text-justify">{descriptionText}</p>
            </div>
        </div>
    );

}

// Component for displaying coding milestones with an image and a link
export function CodingMilestones({ alt, src, link }) {
  return (
      <Link to={link} target="_blank">
          <div className="flex items-center justify-center flex-1 p-2">
              <img src={src} alt={alt} className="w-auto h-32 object-cover rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/50" loading="lazy" />
          </div>
      </Link>      
  );
}

// Counter component for displaying animated count with a label
export function Counter({ end, duration, label }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 50); // adjust speed
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 50);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
      <div className="px-2 py-4 flex flex-col justify-center items-center">
          <h2 className="text-[32px] font-bold text-[#f1f2f6]">+{count}</h2>
          <span className="block text-gray-400 text-base font-medium leading-5 mt-2 uppercase">{label}</span>
      </div>
  );
}