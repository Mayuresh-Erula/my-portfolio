import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen selection:bg-cyan-glow/20 selection:text-cyan-glow">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-linear-to-r from-cyan-glow to-violet-glow transform origin-left z-50"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
