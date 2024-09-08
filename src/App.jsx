import './App.css';
import { useRef } from 'react';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';

function App() {
  const contactRef = useRef(null);
  return (
    <>
      <Hero contactRef={contactRef}/>
      <Projects />
      <Skills />
      <Contact ref={contactRef}/>
      <Footer />
    </>
  );
}

export default App;
