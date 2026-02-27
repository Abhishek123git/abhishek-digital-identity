import QRCode from "react-qr-code";
import { SectionHeader, SocialMediaSection } from "../sub-components/Contact";
import { GrPhone, CgMail } from "../icons";

const Contact = () => {
  return (
    <>
      <section className="flex items-center justify-center flex-col px-2 md:px-10 py-16 h-[50vh] my-6 text-center text-white page-header">
        <h1 className="text-2xl md:text-6xl font-serif z-10 py-px font-bold text-center glow">Get to Know Me Better</h1>
        <p className="text-sm font-openSans md:text-2xl max-w-xl py-px mt-6 text-center glow">Explore my interests, my journey as a programmer, why I chose this field, everything 101.</p>
      </section>
      <section className="flex justify-center flex-col px-2 md:px-10 py-4 w-full mx-auto max-w-6xl h-auto text-white">
        <div className=" w-full text-center flex justify-center items-center flex-col gap-2 my-8">
          <SectionHeader title="let's contact" subtitle="Let's connect and create something amazing together." description="Connect with me easily through LinkedIn, Gmail, or GitHub—let’s collaborate and create something amazing together." imgSrc={`${process.env.PUBLIC_URL}/gifs/telephone.gif`} />
        </div>
        <div className="w-full h-auto py-4 px-4 my-4 border border-gray-600 rounded-3xl">
          <div className="flex flex-row gap-3">
            <div className="flex flex-col flex-auto">
              <p className="text-2xl font-bold">Contact Details</p>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-py text-purple-500"><GrPhone className="w-6 h-auto mr-2 animate-pulse"/></span>
                <p className="flex flex-col font-semibold">Mobile
                  <span className="font-normal">+91 9876543210</span>
                </p>                
              </div>
              <div className="flex items-center gap-4 mt-4">
                <span className="px-py text-purple-500"><CgMail className="w-6 h-auto mr-2 animate-pulse"/></span>
                <p className="flex flex-col font-semibold">Email
                  <span className="font-normal">abhishek@example.com</span>
                </p>                
              </div>
            </div>            
            <div className="flex justify-end flex-auto">
              <div className="p-3 bg-[#dfe6e9] rounded-xl hover:scale-105 transition-transform duration-300">
                <QRCode size={140}  fgColor="#dfe6e9" bgColor="black" level="H" value="/public/Abhishek.vcf" />
              </div>
            </div>
          </div>          
        </div>
        <div className="w-full h-auto py-4 px-4 my-4 border border-gray-600 rounded-3xl">
          <div className="flex flex-col flex-auto">
            <p className="text-2xl font-bold">Contact Form</p>
            <form className="flex flex-col gap-4 mt-4">
              <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-transparent text-white border border-gray-600" />
              <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-transparent text-white border border-gray-600" />
              <textarea placeholder="Your Message" className="p-3 rounded-lg bg-transparent text-white border border-gray-600 h-32 resize-none"></textarea>
              <input type="file" accept=".pdf" className="p-3 rounded-lg bg-transparent text-white border border-gray-600"></input>
              <div className="upload-meta">
                <span className="upload-hint">Only PDF files up to 1 MB</span>
                <span className="remove-file-btn">Remove PDF</span>
              </div>
              <button type="submit" className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors duration-300"> ↪ Send Message</button>
            </form>
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
