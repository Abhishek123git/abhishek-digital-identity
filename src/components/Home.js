import { useState,memo} from "react";
import { QRCode } from "react-qr-code";
import { Helmet } from 'react-helmet-async';
import { QrModal, CvFormatDownloadModal } from "../sub-components/Model";  
import { FaDownload, IoQrCodeOutline } from "../icons";  
import { HeroSection, TechStackSection, ExperienceSection, SkillsSection, CertificatesSection } from "../sub-components/Home";

const RESUME_QR_VALUE =
  "https://drive.google.com/file/d/1s1Jsu3bou6dzK3WqIyYiwGSMzCDGt6nE/view?usp=drive_link";


const Home = ({ title, description, imageUrl }) => {
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [isCvFormatOpen, setIsCvFormatOpen] = useState(false);

  return (
    <>
      <Helmet>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
      </Helmet>

      <HeroSection onCvClick={() => setIsCvFormatOpen(true)} onQrClick={() => setIsQrOpen(true)} />

      <QrModal isOpen={isQrOpen} onClose={() => setIsQrOpen(false)}>
        <IoQrCodeOutline className="w-8 h-auto my-4 text-[#0abde3]" />
        <h1 className="text-lg font-bold font-openSans text-white">Scan QR Code</h1>
        <p className="text-sm font-semibold text-gray-600 mb-3 max-w-80 mx-4 text-center">
          Scan the QR code to open resume in mobile and download it
        </p>
        <div className="p-3 bg-[#dfe6e9] rounded-xl">
          <QRCode size={140} fgColor="#dfe6e9" bgColor="black" level="H" value={RESUME_QR_VALUE} />
        </div>
      </QrModal>

      <CvFormatDownloadModal isOpen={isCvFormatOpen} onClose={() => setIsCvFormatOpen(false)}>
        <FaDownload className="w-6 h-auto my-4 text-[#0abde3]" />
        <h1 className="text-lg font-bold font-openSans text-white">Download CV in Different Formats</h1>
        <p className="text-sm font-semibold text-gray-600 mb-3 max-w-80 mx-4 text-center">
          Choose your preferred format to download the CV
        </p>
      </CvFormatDownloadModal>

      <TechStackSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificatesSection />
    </>
  );
};

export default memo(Home);