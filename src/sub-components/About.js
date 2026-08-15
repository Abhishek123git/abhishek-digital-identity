import { Link } from "react-router-dom";
import React , {useEffect, useState, useRef, memo, useMemo } from "react";
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

const SkillCard = memo(function SkillCard({ img, title, description }) {
  return (
    <div className="bg-gray-300 p-6 sm:p-8 flex flex-col items-center text-center h-full rounded-lg cursor-pointer transition-transform duration-300 ease-in-out will-change-transform hover:scale-105 hover:shadow-md hover:shadow-white motion-reduce:transition-none motion-reduce:hover:scale-100" >
      <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center mb-4 sm:mb-6">
        {/* explicit width/height avoid layout shift (CLS); lazy-load offscreen images */}
        <img src={img} alt={title} width={48} height={48} loading="lazy" decoding="async" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
      </div>
      <p className="text-base sm:text-lg font-extrabold tracking-wide text-black mb-3 sm:mb-4 leading-snug">
        {title}
      </p>
      <p className="text-sm text-black font-semibold leading-relaxed">
        {description}
      </p>
    </div>
  );
});

// Section header component for displaying title, subtitle, description, and an image
export const SectionHeader = memo(function SectionHeader({ title, subtitle, description, imgSrc,}) {
  const videoRef = useRef(null);
 
  useEffect(() => {    
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);
 
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 h-auto px-4 text-center">
      <p className="text-2xl md:text-4xl text-purple-500 uppercase">{title}</p>
      <p className="text-sm md:text-lg lg:text-xl text-white font-ubuntu font-medium">{subtitle}</p>
      <p className="text-white/70 font-semibold text-sm md:text-base font-openSans text-center max-w-2xl">
        {description}
      </p>
      {imgSrc && (
        <video ref={videoRef} className="rounded-full" src={imgSrc} playsInline autoPlay loop muted preload="metadata" aria-hidden="true" />
      )}
    </div>
  );
});

// Component for displaying a journey timeline with year, header, and description
export const JourneyComponent = memo(function JourneyComponent({ year, headerText, descriptionText }) {
  return (
    <div className="flex flex-col sm:flex-row justify-start gap-2 sm:gap-6 md:gap-10 my-6 sm:my-8">
      <p className="flex items-center text-lg sm:text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 group shrink-0">
        <SlCalender className="w-6 h-auto sm:w-8 mr-2 group-hover:animate-calenderColor motion-reduce:group-hover:animate-none" />
        {year}
      </p>
      <div className="pl-4 sm:pl-20 md:pl-4 pr-4 w-full border-b-2 border-neutral-500">
        <p className="text-white text-base sm:text-lg md:text-xl font-bold font-inter mb-2">
          {headerText}
        </p>
        <p className="text-white/70 font-semibold text-sm md:text-base font-openSans mb-6 sm:mb-8 text-justify">
          {descriptionText}
        </p>
      </div>
    </div>
  );
});

// Component for displaying coding milestones with an image and a link
export const CodingMilestones = memo(function CodingMilestones({ alt, src, link }) {
  return (
    <Link to={link} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-center flex-1 p-2">
        <img src={src} alt={alt} width={128} height={128} loading="lazy" decoding="async" className="h-24 w-24 sm:h-32 sm:w-32 aspect-square object-cover rounded-md transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/50 motion-reduce:transition-none motion-reduce:hover:scale-100" />
      </div>
    </Link>
  );
});

// Counter component for displaying animated count with a label
export const Counter = memo(function Counter({ end, duration, label }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);
 
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
 
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
 
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
 
          if (prefersReducedMotion) {
            setCount(end);
            return;
          }
 
          const start = performance.now();
          const animate = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.ceil(progress * end));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
 
    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);
 
  return (
    <div ref={ref} className="px-2 py-3 sm:py-4 flex flex-col justify-center items-center" >
      <h2 className="text-2xl sm:text-[32px] font-bold text-[#f1f2f6]">+{count}</h2>
      <span className="block text-gray-400 text-sm sm:text-base font-medium leading-5 mt-2 uppercase text-center">
        {label}
      </span>
    </div>
  );
});

export function SkillCards() {
  const renderedCards = useMemo(() => cards.map((card) => <SkillCard key={card.title} {...card} />),[]);
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 my-6 px-4 sm:px-6 lg:px-0" >
      {renderedCards}
    </div>
  );
}