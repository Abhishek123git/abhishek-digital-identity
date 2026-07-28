import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from "./components/Home";
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import NotFound from "./components/NotFound";

function App() {
  return (
    <ErrorBoundary FallbackComponent={() => <div className="flex items-center justify-center h-screen text-2xl text-red-500">Something went wrong. Please try again later.</div>}>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Navbar />
          <main className="flex-grow flex flex-col bg-[#262626]">
            <Routes>
              <Route path="/" element={<Home title="Abhishek Kumar - Full Stack Developer" description="Welcome to my portfolio! Explore projects and experience in ASP.NET MVC, JavaScript, and SQL Server, with a focus on building scalable, secure, and user-friendly web applications." imageUrl={`${process.env.PUBLIC_URL}/images/og-homeimage.png`} />} />
              <Route path="/abhishek-digital-identity" element={<Home title="Abhishek Kumar - Digital Identity" description="Welcome to my portfolio! Explore projects and experience in ASP.NET MVC, JavaScript, and SQL Server, with a focus on building scalable, secure, and user-friendly web applications." imageUrl={`${process.env.PUBLIC_URL}/images/og-homeimage.png`} />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;
