const NotFound = () => {
    return (
        <div className="flex flex-row items-center justify-center h-screen bg-[#262626] text-white">
            <img src={`${process.env.PUBLIC_URL}/images/notfound.webp`} alt="404 Not Found" loading="lazy" className="mr-8" />
            <div className="flex flex-col items-center justify-center text-white">
                <h1 className="text-4xl font-bold font-openSans animate-bounce">Oh No!</h1>
                <p className="text-lg font-bold font-openSans">Sorry, the page you are looking for doesn't exist</p>
                <p className="font-semibold my-4 font-openSans text-white/70">Maybe bigfoot has broken this page come back to the home page</p>
                <button className="px-6 py-3 bg-purple-500 text-white font-semibold rounded-lg hover:bg-purple-600 transition-colors duration-300" onClick={() => window.location.href = "/"}>Go Back Home</button>
            </div>
        </div>
    );
};

export default NotFound;