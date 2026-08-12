import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { GrPhone, CgMail, BsFillSendArrowUpFill, BiSolidErrorAlt, MdOutlineContactMail, GiArchiveRegister } from "../icons";
import { SectionHeader, SocialMediaSection } from "../sub-components/Contact";
import { SuccessModal } from "../sub-components/Model";
import { useContactForm } from "../hooks/useContactForm";
import FileDropzone from "../components/FileDropzone";
import { HeadElement } from "../sub-components/HeadElement";

const EMAIL_PATTERN = /^[A-Za-z0-9._%+-]+@(gmail\.com|outlook\.com)$/;
const NAME_PATTERN = /^[A-Za-z]+(?:\s[A-Za-z]+)?$/;

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onBlur" });

  const { file, fileError, handleFile, removeFile, sendStatus, sendError, isSending, send, resetStatus } =
    useContactForm({ onSuccess: () => setIsOpen(true) });

  const onSubmit = async (data) => {
    const result = await send(data);
    if (result.ok) {
      reset();
    }
  };

  const handleModalClose = () => {
    setIsOpen(false);
    resetStatus();
  };

  return (
    <>
      <HeadElement pageurl="contact" pagetitle="Contact" pagedescription="Get in touch with Abhishek Kumar, a full‑stack developer specializing in React, Blazor, ASP.NET, and modern UI/UX. Reach out for collaborations, project inquiries, or professional opportunities." />
      <section className="flex items-center justify-center flex-col px-2 md:px-10 py-16 min-h-[55vh] mb-6 text-center text-white">
        <p className="text-2xl md:text-6xl font-serif font-bold text-center">Get to Know Me Better</p>
        <p className="text-sm font-openSans md:text-2xl py-px mt-6 text-center">Explore my interests, my journey as a programmer, why I chose this field, everything 101.</p>
      </section>
      <section className="flex justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <SectionHeader title="let's contact" subtitle="Let's connect and create something amazing together" description="Let’s connect, collaborate, and create something extraordinary together" imgSrc={`${process.env.PUBLIC_URL}/gifs/telephone.webm`} />
        <div className="w-full h-auto py-4 px-4 my-4 border border-gray-600 rounded-3xl">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col flex-auto">
              <p className="flex items-center text-2xl font-bold">Contact Details<MdOutlineContactMail className="ml-2 hover:text-purple-500" /></p>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-py text-purple-500"><GrPhone className="w-6 h-auto mr-2 animate-pulse" /></span>
                <p className="flex flex-col font-semibold">Mobile
                  <span className="font-normal">+91 7303777431</span>
                </p>
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-py text-purple-500"><CgMail className="w-6 h-auto mr-2 animate-pulse" /></span>
                <p className="flex flex-col font-semibold">Email
                  <span className="font-normal">abhishek.kumardev@outlook.com</span>
                </p>
              </div>
            </div>
            <div className="flex justify-end flex-auto">
              <div className="p-3 bg-[#dfe6e9] rounded-xl hover:scale-105 transition-transform duration-300">
                <img src={`${process.env.PUBLIC_URL}/images/contact-qr-code.webp`} width={160} height={160} alt="QR" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-auto py-4 px-4 my-4 border border-gray-600 rounded-3xl">
          <div className="flex flex-col flex-auto">
            <p className="flex items-center text-2xl font-bold">Contact Form<GiArchiveRegister className="ml-2 hover:text-purple-500" /></p>
            <form className="flex flex-col gap-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-row gap-3" >
                <div className="flex flex-col w-full">
                  <input type="text" placeholder="Your Name" autoComplete="off" disabled={isSending} className="p-3 rounded-lg bg-transparent text-white border border-gray-600 disabled:opacity-50" {...register("name", { required: true, maxLength: { value: 30, message: "Name must be less than 30 characters" }, validate: (value) => NAME_PATTERN.test(value) || "Only letters with at most one space allowed" })} />
                  {errors.name && <span className="text-sm text-[#ff3838] font-semibold my-1 mx-1">{errors.name.message}</span>}
                  {errors.name && !errors.name.message && <span className="flex items-center text-sm text-[#ff3838] font-semibold"><BiSolidErrorAlt className="mr-1" />Name is required</span>}
                </div>
                <div className="flex flex-col w-full">
                  <input type="email" placeholder="Your Email" autoComplete="off" disabled={isSending} className="w-full p-3 rounded-lg bg-transparent text-white border border-gray-600 disabled:opacity-50" {...register("email", { required: true, maxLength: { value: 50, message: "Email must be less than 50 characters" }, validate: (value) => EMAIL_PATTERN.test(value) || "Please enter a valid email address (gmail.com or outlook.com only)" })} />
                  {errors.email && <span className="text-sm text-[#ff3838] font-semibold my-1 mx-1">{errors.email.message}</span>}
                  {errors.email && !errors.email.message && <span className="flex items-center text-sm text-[#ff3838] font-semibold"><BiSolidErrorAlt className="inline mr-1" />Email is required</span>}
                </div>
              </div>
              <div className="flex flex-col w-full">
                <input type="text" placeholder="Your Subject" autoComplete="off" disabled={isSending} className="w-full p-3 rounded-lg bg-transparent text-white border border-gray-600 disabled:opacity-50" {...register("subject", { required: true, maxLength: { value: 100, message: "Subject must be less than 100 characters" } })} />
                {errors.subject && <span className="text-sm text-[#ff3838] font-semibold my-1 mx-1">{errors.subject.message}</span>}
                {errors.subject && !errors.subject.message && <span className="flex items-center text-sm text-[#ff3838] font-semibold"><BiSolidErrorAlt className="inline mr-1" />Subject is required</span>}
              </div>
              <textarea placeholder="Your Message" disabled={isSending} className="p-3 rounded-lg bg-transparent text-white border border-gray-600 h-32 resize-none disabled:opacity-50" {...register("message", { required: true, maxLength: 500 })} />
              {errors.message && <span className="flex items-center text-sm text-[#ff3838] font-semibold"><BiSolidErrorAlt className="inline mr-1" />Message is required</span>}

              <FileDropzone
                file={file}
                error={fileError}
                onFileSelect={handleFile}
                onRemove={removeFile}
                disabled={isSending}
              />

              {sendStatus === "error" && (
                <div className="flex items-center gap-2 text-sm text-[#ff3838] font-semibold bg-red-500/10 border border-red-500/20 rounded-lg px-3 py-2">
                  <BiSolidErrorAlt />
                  {sendError}
                </div>
              )}

              <div className="flex flex-row gap-3 my-3 items-center">
                <p className="w-full text-sm font-semibold text-gray-400">This site is protected by reCAPTCHA and the <Link to="https://policies.google.com/privacy" target="_blank" className="text-[#0abde3] hover:underline hover:underline-offset-4 font-normal">Google Privacy Policy</Link> and <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-[#0abde3] hover:underline hover:underline-offset-4 font-normal">Terms of Service</a> apply.</p>
                <button
                  type="submit"
                  disabled={isSending}
                  className="flex items-center border border-gray-600 text-white whitespace-nowrap py-2 px-4 rounded-lg font-semibold hover:bg-purple-500 transition-colors duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-5 h-auto mr-2 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <BsFillSendArrowUpFill className="w-5 h-auto mr-2 text-[#44bd32]" /> Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
            <SuccessModal isOpen={isOpen} onClose={handleModalClose} />
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <div className=" w-full text-center flex justify-center items-center flex-col gap-2 my-8">
          <SectionHeader title="contact me" subtitle="Let's connect and create something amazing together." description="Connect with me easily through LinkedIn, Gmail, or GitHub—let’s collaborate and create something amazing together." imgSrc={`${process.env.PUBLIC_URL}/gifs/socialmedia.webm`} />
        </div>
        <SocialMediaSection />
      </section>
    </>
  );
};

export default Contact;