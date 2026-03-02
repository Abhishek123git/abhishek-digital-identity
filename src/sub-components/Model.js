import { useForm } from "react-hook-form";
import { FaDownload } from "../icons";

// Modal component for displaying QR code or CV format selection
function QrModal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col justify-center items-center bg-[#262626] p-4 rounded-lg w-auto h-auto">
                {children}
                <button className="flex justify-center w-full h-auto text-lg font-semibold cursor-pointer my-4 p-2 rounded-full bg-[#0abde3] hover:bg-[#4cd137] uppercase" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

// Modal component for selecting CV format and downloading
function CvFormatDownloadModal({ isOpen, onClose, children }) {

    const { register, handleSubmit, watch } = useForm()
    const selectedFormat = watch("format"); // watches the dropdown value    

    if (!isOpen) return null;

    // This will be called when the form is valid
    const onValid = (data) => {
        // Redirect to selected format
        if (data.format) {
            window.open(data.format, "_blank");
        }
    };


    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col justify-center items-center bg-[#262626] p-4 rounded-lg w-auto h-auto">
                {children}
                <form className="flex flex-col gap-3 w-full py-4" onSubmit={handleSubmit(onValid)}>
                    <label className="text-sm font-semibold text-white">Select format</label>
                    <select {...register("format")} defaultValue="" className="w-full px-3 py-2 px-1 border border-gray-300 rounded-md font-bold text-gray-400 text-sm bg-transparent">
                        <option value="">--Select Format--</option>
                        <option value="https://drive.google.com/file/d/13O53VWABwLmlYGs5XgNN14wB1dN0vOYh/view?usp=drive_link">PDF</option>
                        <option value="https://docs.google.com/document/d/1IdWSet23ZhzXGGRp_7rLeCR8OfTPgz0i/edit?usp=drive_link&ouid=115606234518456980343&rtpof=true&sd=true">Word</option>
                    </select>
                    <button type="submit" className="flex justify-center items-center my-4 py-3 px-8 text-white border-2 rounded-full transition-colors duration-300 hover:text-[#4cd137] hover:bg-[#d0f0f0]" to={selectedFormat} >
                        <FaDownload className="w-6 h-auto mr-2 inline-block" />
                        <span className="text-md font-semibold font-openSans">Download CV</span>
                    </button>
                </form>
                <button className="flex justify-center w-full h-auto text-lg font-semibold cursor-pointer my-4 p-2 rounded-full bg-[#0abde3] hover:bg-[#4cd137] uppercase" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export { QrModal, CvFormatDownloadModal };