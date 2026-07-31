import { Link } from "react-router-dom";
import React , {useEffect, useState } from "react";
import { SlCalender } from "react-icons/sl";

const ASSET_BASE = process.env.PUBLIC_URL;

const cards = [
  {
    img: `${ASSET_BASE}/images/data-collection.webp`,
    title: "DATA COLLECTION AND INGESTION",
    description:
      "Key Focus: Acquiring data from diverse sources into a centralized system. Core Activities: Designing and implementing batch and near-real-time data pipelines. Handling structured, semi-structured data formats. Ensuring reliable, low-latency data ingestion using tools like SAS ETL Studio, Datacraft, Apache Kafka, AWS Kinesis into different file formats like Parquet, json in s3 and Amazon standard data products.",
  },
  {
    img: `${ASSET_BASE}/images/data-integration.webp`,
    title: "DATA TRANSFORMATION AND PROCESSING",
    description:
      "Data Prepartion forms the core of any BI and Data Science products. I have been exposed to different phases of prepartion like fetching, integration, transformation, cleansing, quality enhancement & Standardization, Loading & Archiving. The data is integrated from different DB's, Raw files & other applications to get a unified view of the business. Due to inconsistency in data across sources, prep forms an important pillar in the process.",
  },
  {
    img: `${ASSET_BASE}/images/web.webp`,
    title: "SEARCH ENGINE OPTIMIZATION(SEO)",
    description:
      "Implemented SEO strategies to enhance visibility and drive organic traffic, focusing on content optimization, keyword targeting, and performance analytics to improve search rankings and user engagement.",
  },
  {
    img: `${ASSET_BASE}/images/web-management.webp`,
    title: "APPLICATION PROGRAMMING INTERFACE SERVICES",
    description:
      "Designed API services that automate reporting workflows, integrate transactional data pipelines, and deliver insights in multiple formats—reducing manual effort and enabling faster business decisions.",
  },
  {
    img: `${ASSET_BASE}/images/domain.webp`,
    title: "DOMAIN EXPERTISE",
    description:
      "Deep domain knowledge in BFSI, with hands-on experience across Credit Card Portfolio, Campaign Management and Regulatory Risk Reporting. This industry context ensures every data solution I build is grounded in real business needs, not just technical execution.",
  },
  {
    img: `${ASSET_BASE}/images/ai.webp`,
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Explored AI and machine learning techniques to develop predictive models and automate decision-making processes, enhancing the accuracy and efficiency of data-driven solutions.",
  }
];

function SkillCard({ img, title, description }) {
  return (
    <div className="bg-gray-300 p-8 flex flex-col items-center text-center h-full rounded-lg cursor-pointer hover:scale-105 hover:shadow-md hover:shadow-white transition-all ease-in-out">
      <div className="w-16 h-16 flex items-center justify-center mb-6">
        <img src={img} alt={title} className="w-12 h-12" /> 
      </div>
      <p className="text-lg font-extrabold tracking-wide text-black mb-4 leading-snug">
        {title}
      </p>
      <p className="text-sm text-black font-semibold leading-relaxed">{description}</p>
    </div>
  );
}

// Section header component for displaying title, subtitle, description, and an image
export function SectionHeader({ title, subtitle, description, imgSrc }) {
  return (
    <div className="flex flex-col items-center gap-4 h-auto">
      <p className="text-2xl md:text-4xl text-purple-500 uppercase">{title}</p>
      <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium">{subtitle}</p>
      <p className="text-white/70 font-semibold text-sm md:text-md font-openSans text-center">{description}</p>
      {imgSrc && (
        <video className="rounded-full" src={imgSrc} playsInline autoPlay loop muted aria-hidden="true" />
      )}
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
              <p className="text-white/70 font-semibold text-sm md:text-md font-openSans mb-8 text-justify">{descriptionText}</p>
          </div>
      </div>
  );
}

// Component for displaying coding milestones with an image and a link
export function CodingMilestones({ alt, src, link }) {
  return (
      <Link to={link} target="_blank">
          <div className="flex items-center justify-center flex-1 p-2">
              <img src={src} alt={alt} className="h-32 aspect-square object-cover rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/50" loading="lazy" />
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

export function SkillCards() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
      {cards.map((card) => (
        <SkillCard key={card.title} {...card} />
      ))}
    </div>
  );
}