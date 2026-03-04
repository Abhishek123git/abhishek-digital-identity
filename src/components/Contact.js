import { QRCode } from "react-qr-code";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { SectionHeader, SocialMediaSection } from "../sub-components/Contact";
import { GrPhone, CgMail, FaDownload, BsFillSendArrowUpFill, BiSolidErrorAlt } from "../icons";
import { SuccessModal } from "../sub-components/Model";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (data) {
      setIsOpen(true); // open modal
    }
  };


  return (
    <>
      <section className="flex items-center justify-center flex-col px-2 md:px-10 py-16 min-h-[55vh] mb-6 text-center text-white page-header">
        <h2 className="text-2xl md:text-6xl font-serif font-bold text-center">Get to Know Me Better</h2>
        <p className="text-sm font-openSans md:text-2xl py-px mt-6 text-center">Explore my interests, my journey as a programmer, why I chose this field, everything 101.</p>
      </section>
      <section className="flex justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="let's contact" subtitle="Let's connect and create something amazing together" description="Let’s connect, collaborate, and create something extraordinary together" imgSrc={`${process.env.PUBLIC_URL}/gifs/telephone.gif`} />
        <div className="w-full h-auto py-4 px-4 my-4 border border-gray-600 rounded-3xl">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col flex-auto">
              <p className="text-2xl font-bold">Contact Details</p>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-py text-purple-500"><GrPhone className="w-6 h-auto mr-2 animate-pulse" /></span>
                <p className="flex flex-col font-semibold">Mobile
                  <span className="font-normal">+91 9876543210</span>
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-py text-purple-500"><CgMail className="w-6 h-auto mr-2 animate-pulse" /></span>
                <p className="flex flex-col font-semibold">Email
                  <span className="font-normal">abhishek@example.com</span>
                </p>
              </div>
            </div>
            <div className="flex justify-end flex-auto">
              <div className="p-3 bg-[#dfe6e9] rounded-xl hover:scale-105 transition-transform duration-300">
                <QRCode size={140} fgColor="#dfe6e9" bgColor="black" level="H" value="/public/Abhishek.vcf" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto py-4 px-4 my-4 border border-gray-600 rounded-3xl">
          <div className="flex flex-col flex-auto">
            <p className="text-2xl font-bold">Contact Form</p>
            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row gap-3" >
                <div className="flex flex-col w-full">
                  <input type="text" placeholder="Your Name" autoComplete="off" className="p-3 rounded-lg bg-transparent text-white border border-gray-600" {...register("name", { required: true, maxLength: { value: 30, message: "Name must be less than 30 characters" }, validate: (value) => /^[A-Za-z]+(?:\s[A-Za-z]+)?$/.test(value) || "Only letters with at most one space allowed" })} />
                  {errors.name && <span className="text-sm text-[#ff3838] font-semibold my-1 mx-1">{errors.name.message}</span>}
                  {errors.name && <span className="flex items-center inline-flex text-sm text-[#ff3838] font-semibold"><BiSolidErrorAlt className="mr-1" />Name is required</span>}
                </div>
                <div className="flex flex-col w-full">
                  <input type="email" placeholder="Your Email" autoComplete="off" className="w-full p-3 rounded-lg bg-transparent text-white border border-gray-600" {...register("email", { required: true, maxLength: { value: 50, message: "Email must be less than 50 characters" }, validate: (value) => /^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com)$/.test(value) || "Please enter a valid email address (gmail.com or outlook.com only)" })} />
                  {errors.email && <span className="text-sm text-[#ff3838] font-semibold my-1 mx-1">{errors.email.message}</span>}
                  {errors.email && <span className="flex items-center inline-flex text-sm text-[#ff3838] font-semibold"><BiSolidErrorAlt className="inline mr-1" />Email is required</span>}
                </div>
              </div>
              <textarea placeholder="Your Message" className="p-3 rounded-lg bg-transparent text-white border border-gray-600 h-32 resize-none" {...register("message", { required: true, maxLength: 100 })} />
              {errors.message && <span className="flex items-center inline-flex text-sm text-[#ff3838] font-semibold mx-1"><BiSolidErrorAlt className="inline mr-1" />Message is required</span>}
              <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border border-gray-600 rounded-lg cursor-pointer bg-transparent hover:bg-gray-800 transition">
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FaDownload className="w-8 h-auto mb-3 text-[#0abde3] animate-pulse" />
                    <p className="mb-2 text-sm text-gray-400">
                      <span className="font-semibold">Click to upload</span> or drag and drop <span className="font-semibold text-[#0abde3]">(Optional)</span>
                    </p>
                    <p className="text-sm text-gray-500">PDF only (max 10MB)</p>
                  </div>
                  <input id="dropzone-file" type="file" accept=".pdf" className="hidden" />
                </label>
              </div>
              <div className="flex flex-row gap-3 my-3">
                <p className="w-full text-sm font-semibold text-gray-500">This site is protected by reCAPTCHA and the <Link to="https://policies.google.com/privacy" target="_blank" className="text-[#0abde3] hover:underline hover:underline-offset-4 font-normal">Google Privacy Policy</Link> and <Link to="https://policies.google.com/terms" target="_blank" className="text-[#0abde3] hover:underline hover:underline-offset-4 font-normal">Terms of Service</Link> apply.</p>
                <button type="submit" className="flex border border-gray-600 text-white whitespace-nowrap py-2 px-4 rounded-lg font-semibold hover:bg-purple-500 transition-colors duration-300"><BsFillSendArrowUpFill className="w-5 h-auto mr-2 text-[#44bd32]" /> Send Message</button>
              </div>
            </form>
            <SuccessModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <div className=" w-full text-center flex justify-center items-center flex-col gap-2 my-8">
          <SectionHeader title="contact me" subtitle="Let's connect and create something amazing together." description="Connect with me easily through LinkedIn, Gmail, or GitHub—let’s collaborate and create something amazing together." imgSrc={`${process.env.PUBLIC_URL}/gifs/telephone.gif`} />
        </div>
        <SocialMediaSection />
      </section>
    </>
  );
};

export default Contact;