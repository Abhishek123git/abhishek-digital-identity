import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";

export function JourneyComponent({ year, headerText, descriptionText }) {

    return (
        <div className="flex justify-start md:gap-10 my-8">
            <h3 className="flex items-center text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 group"><SlCalender className="w-8 h-auto mr-2 group-hover:animate-calenderColor" />{year}</h3>
            <div className="pl-20 pr-4 md:pl-4 w-full border-b-2 border-neutral-500">
                <h3 className="text-white text-lg md:text-xl font-bold font-inter mb-2">{headerText}</h3>
                <p className="text-white/70 font-semibold text-sm md:text-md font-normal font-openSans mb-8 text-justify">{descriptionText}</p>
            </div>
        </div>
    );

}

export function CodingMilestones({ alt, src, link }) {
  return (
      <Link to={link} target="_blank">
          <div className="flex items-center justify-center flex-1 p-2">
              <img src={src} alt={alt} className="w-auto h-32 object-cover rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/50" />
          </div>
      </Link>      
  );
}

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