import { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  // Listen to scroll to highlight active link and add background blur
  useEffect(() => {
    const handleScroll = () => {
      // Background blur activation
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section highlighting
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },//removed dependency array from here.[]
  );

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-panel py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0 cursor-pointer flex items-center gap-2 group" onClick={() => handleNavClick('hero')}>
            <div className="w-10 h-10  rounded-xl bg-linear-to-br from-cyan-glow to-violet-glow flex items-center justify-center text-white font-bold text-lg font-display shadow-md group-hover:scale-105 transition-transform duration-300">
              ME
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyan-glow transition-colors duration-300 hidden sm:block">
              Mayuresh Erula
            </span>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-2 text-sm font-medium font-display transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id ? 'text-cyan-glow' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-linear-to-r from-cyan-glow to-violet-glow"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Resume Button */}
            <a
              href="/MAYURESH_ERULA_RESUME.pdf"
              download="MAYURESH_ERULA_RESUME.pdf"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/30 text-cyan-glow hover:border-cyan-glow hover:text-white transition-all duration-300 font-display font-semibold text-sm cursor-pointer shadow-sm hover:shadow-cyan-500/20"
            >
              <FileDown size={16} />
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            {/* Resume Download on Mobile Header */}
            <a
              href="/MAYURESH_ERULA_RESUME.pdf"
              download="MAYURESH_ERULA_RESUME.pdf"
              className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-glow hover:text-white transition-all duration-300"
              aria-label="Download Resume"
            >
              <FileDown size={18} />
            </a>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-obsidian-800 border border-transparent hover:border-obsidian-700 transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden glass-panel border-b border-obsidian-800 absolute top-full left-0 w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-2 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium font-display transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'bg-linear-to-r from-cyan-500/10 to-violet-500/10 text-cyan-glow border-l-2 border-cyan-glow'
                      : 'text-gray-300 hover:bg-obsidian-800/50 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
