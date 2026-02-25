import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Header/Header.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Menu links
import Home from "./components/Home";
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        <main className="flex-grow flex flex-col bg-[#262626]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/abhishek-digital-identity" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
