import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalSkills from './components/TechnicalSkills';
import Services from './components/Services';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorParticles from './components/CursorParticles';

function App() {
  const [heroVideoLoaded, setHeroVideoLoaded] = useState(false);

  return (
    <>
      <CursorParticles />
      <Preloader isHeroVideoLoaded={heroVideoLoaded} />
      <Navbar />
      <Hero onVideoLoaded={() => setHeroVideoLoaded(true)} />
      <About />
      <TechnicalSkills />
      <Services />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
