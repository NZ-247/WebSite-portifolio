import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0A0E27] text-[#F8FAFC]">
      <Navbar />
      <main className={`transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
