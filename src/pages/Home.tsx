import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Education from '../sections/Education';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contact from '../sections/Contact';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;