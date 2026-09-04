import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { RiReactjsFill, RiTailwindCssFill, SiMui, RiServiceFill } from "../icons";
import DeploymentCard from "../sub-components/DeploymentCard";

const STEPS = [
    {
        label: "Portfolio Site",
        StepContentData: [
            {
                repoName: "AbhisheK Kumar portfolio site",
                visibility: "public",
                siteUrl: "www.abhishekportfolio.com",
                deploySource: "Netlify",
                publishedOn: "1 Sep, 2026",
                chipData: [
                    { label: "ReactJS", icon: <RiReactjsFill aria-hidden="true" className="!text-[#087EA4]" />, variant: "filled" },
                    { label: "TailwindCSS", icon: <RiTailwindCssFill aria-hidden="true" className="!text-[#00BCFF]" />, variant: "outlined" },
                    { label: "Material UI", icon: <SiMui aria-hidden="true" className="!text-[#0079F5]" />, variant: "outlined" },
                    { label: "API Services", icon: <RiServiceFill aria-hidden="true" className="!text-black" />, variant: "outlined" }
                ]
            }
        ]
    },
    {
        label: "Free Cloud Shrinkr",
        StepContentData: [
            {
                repoName: "Free Cloud Shrinkr",
                visibility: "public",
                siteUrl: "www.freecloudshrinkr.com",
                deploySource: "Vercel",
                publishedOn: "12 June, 2026",
                chipData: [
                    { label: "ReactJS", icon: <RiReactjsFill aria-hidden="true" className="!text-[#087EA4]" />, variant: "filled" },
                    { label: "TailwindCSS", icon: <RiTailwindCssFill aria-hidden="true" className="!text-[#00BCFF]" />, variant: "outlined" },
                    { label: "Material UI", icon: <SiMui aria-hidden="true" className="!text-[#0079F5]" />, variant: "outlined" },
                    { label: "API Services", icon: <RiServiceFill aria-hidden="true" className="!text-black" />, variant: "outlined" }
                ]
            }
        ]
    }
];

export default function LiveProjects() {
    const activeStep = 0;
    const [expandedStep, setExpandedStep] = useState(0);

    const toggleExpanded = (index) => {
        setExpandedStep((prev) => (prev === index ? -1 : index));
    };

    return (
        <div className="p-6 w-full flex justify-center">
            <div className="w-full">
                <Stepper activeStep={activeStep} orientation="vertical" >
                    {STEPS.map((step, index) => {
                        const isCompleted = index < activeStep;
                        const isExpanded = index === expandedStep;
                        return (
                            <Step key={step.label} active={isExpanded} completed={isCompleted}>
                                <StepLabel onClick={() => toggleExpanded(index)} className="!cursor-pointer[&_.MuiStepIcon-root]:text-white/15 [&_.MuiStepIcon-root.Mui-active]:text-purple-500">
                                    <span className={`text-lg font-semibold ${isExpanded ? "text-violet-100" : "text-white/45"}`} >
                                        {step.label}
                                    </span>
                                </StepLabel>

                                <StepContent transitionprops={{ unmountOnExit: false }} className="!border-l-2 !border-white/15 !ml-[13px] !pl-[22px]" >
                                    {step.StepContentData.map((data, index) => (
                                        <DeploymentCard key={index} repoName={data.repoName} visibility={data.visibility} siteUrl={data.siteUrl} deploySource={data.deploySource} publishedOn={data.publishedOn} chipData={data.chipData} />
                                    ))}
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
            </div>
        </div>
    );
}