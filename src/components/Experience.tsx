import { useEffect, useRef } from 'react';
import { motion, type Variants } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Calendar, ShieldCheck, Globe, GitBranch } from 'lucide-react';
import { FaPython, FaReact, FaJsSquare, FaGithub } from 'react-icons/fa';
import { MdOutlineArchitecture } from 'react-icons/md';
import { SiTailwindcss } from 'react-icons/si';
import { VscSettingsGear } from 'react-icons/vsc';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const experiences = [
    {
      company: 'Fathom Marine Consultant',
      role: 'Full Stack Trainee',
      period: '04/2026 – Current',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: 'Python', icon: <FaPython className="text-[#3776AB]" /> },
        { name: 'UI/UX Architecture', icon: <MdOutlineArchitecture className="text-[#F43F5E]" /> },
        { name: 'Workflow Optimization', icon: <VscSettingsGear className="text-[#10B981]" /> },
      ],
      bullets: [
        {
          title: 'Full-Stack Application Development',
          text: 'Assisted in developing and optimizing features for internal applications, gaining hands-on exposure to end-to-end full-stack workflows.'
        },
        {
          title: 'UI/UX Component Architecture',
          text: 'Collaborated on mapping out intricate user workflows, successfully converting complex system flowcharts into functional, responsive frontend component architectures.'
        },
        {
          title: 'Technical Documentation & Cross-Functional Collaboration',
          text: 'Worked closely with senior engineering teams and management to document and refine system processes, technical requirements, and feature design.'
        }
      ],
      glowColor: 'rgba(34, 211, 238, 0.15)',
      lineColor: '#22d3ee'
    },
    {
      company: 'CodexIntern',
      role: 'Frontend React Developer Intern',
      period: '07/2025 – 08/2025',
      skills: [
        { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#38BDF8]" /> },
        { name: 'JavaScript', icon: <FaJsSquare className="text-[#F7DF1E]" /> },
        { name: 'REST APIs', icon: <Globe className="text-[#38BDF8]" size={14} /> },
        { name: 'GitHub', icon: <FaGithub className="text-[#FFFFFF]" /> },
        { name: 'Version Control', icon: <GitBranch className="text-[#F05032]" size={14} /> }
      ],
      bullets: [
        {
          title: 'Component Engineering & Enhancements',
          text: 'Collaborated on building, structuring, and enhancing reusable UI components using React.js and Tailwind CSS for responsive web applications.'
        },
        {
          title: 'API Consumption & Core Tasks',
          text: 'Executed real-world frontend development tasks, focusing on clean component structuring, state rendering, and efficient REST API consumption.'
        },
        {
          title: 'Version Control & Agile Collaboration',
          text: 'Managed source code, version control, and team development workflows via GitHub in a fast-paced environment.'
        }
      ],
      glowColor: 'rgba(139, 92, 246, 0.15)',
      lineColor: '#8b5cf6'
    }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerLineRef = useRef<SVGLineElement>(null);

  // GSAP Dynamic SVG Path Tracer
  useEffect(() => {
    const line = triggerLineRef.current;
    if (!line) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(line, 
        { strokeDashoffset: 1000 },
        {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center+=100px",
            end: "bottom center+=100px",
            scrub: 0.5,
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Strict TypeScript Variant Definitions
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  return (
    <section ref={sectionRef} id="experience" className="py-32 relative overflow-hidden bg-neutral-950">
      {/* Structural Atmospheric Canvas Shadows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-225 h-225 bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Node */}
        <div className="text-center mb-28">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-500 text-xs font-mono tracking-widest uppercase mb-4">
            <span>Engineering Track Log</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display text-white">
            TIMELINE <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-400">METRICS</span>
          </h2>
        </div>

        {/* Master Interactive Core Layout wrapper */}
        <div className="relative ml-4 sm:ml-12 pl-10 sm:pl-16">
          
          {/* High-Fidelity SVG Dynamic Path Tracer Pipeline */}
          <div className="absolute left-0 top-3 bottom-0 w-0.5 pointer-events-none">
            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none">
              {/* Baseline background layout vector line */}
              <line x1="0" y1="0" x2="0" y2="100%" stroke="#171717" strokeWidth="2" />
              {/* Active real-time drawing tracer instance */}
              <line 
                ref={triggerLineRef}
                x1="0" y1="0" x2="0" y2="100%" 
                stroke="url(#timeline-gradient)" 
                strokeWidth="2" 
                strokeDasharray="1000" 
                strokeDashoffset="1000"
              />
              <defs>
                <linearGradient id="timeline-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Loop Array Matrix */}
          <div className="space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-120px' }}
                className="relative group/node"
              >
                {/* Micro-Interaction Indicator Pipeline Node */}
                <div className="absolute -left-13.25 sm:-left-19.25 top-1.5 w-7 h-7 rounded-lg bg-neutral-950 border border-neutral-800 flex items-center justify-center z-20 group-hover/node:scale-110 group-hover/node:border-neutral-600 transition-all duration-300">
                  <Briefcase size={12} className="text-neutral-500 group-hover/node:text-white transition-colors" />
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover/node:opacity-100 blur-[6px] transition-opacity duration-300 pointer-events-none" 
                    style={{ backgroundColor: exp.lineColor }}
                  />
                </div>

                {/* Block 1: Role Descriptor Header Info */}
                <motion.div variants={itemVariants} className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-white font-display">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2.5 mt-1.5">
                      <span className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400">
                        {exp.company}
                      </span>
                    </div>
                  </div>
                  
                  {/* Digital Timestamp Badge Row */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-900/50 border border-neutral-800 text-neutral-400 font-mono text-xs self-start md:self-center shadow-inner">
                    <Calendar size={12} style={{ color: exp.lineColor }} />
                    <span>{exp.period}</span>
                  </div>
                </motion.div>

                {/* Block 2: Modular Micro Tech Deck Array with Custom Hover Tooltips */}
                <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
                  {exp.skills.map((skill, sIdx) => (
                    <div 
                      key={sIdx} 
                      className="group/tooltip relative flex items-center justify-center p-2.5 rounded-lg bg-neutral-900/30 border border-neutral-900 text-lg cursor-help transition-all duration-300 hover:bg-neutral-900/80 hover:border-neutral-700"
                    >
                      {skill.icon}
                      
                      {/* Technical Layer Float Description Node */}
                      <div className="absolute bottom-full mb-2 hidden group-hover/tooltip:flex flex-col items-center pointer-events-none z-50">
                        <span className="px-2 py-1 text-[10px] font-mono tracking-wider font-bold text-white whitespace-nowrap bg-neutral-950 shadow-2xl rounded border border-neutral-800">
                          {skill.name}
                        </span>
                        <div className="w-1.5 h-1.5 -mt-1 rotate-45 bg-neutral-950 border-r border-b border-neutral-800" />
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Block 3: Staggered Accomplishment Node Panels */}
                <div className="space-y-4">
                  {exp.bullets.map((bullet, bIdx) => (
                    <motion.div
                      key={bIdx}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative p-5 rounded-xl bg-neutral-900/20 border border-neutral-900/80 shadow-lg flex items-start gap-4 transition-colors duration-400 hover:bg-neutral-900/40 hover:border-neutral-800 group/bullet"
                    >
                      {/* Active Cursor Position Card Glow Highlight */}
                      <div 
                        className="absolute inset-0 rounded-xl opacity-0 group-hover/bullet:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
                        style={{ background: `radial-gradient(circle 120px at top left, ${exp.glowColor}, transparent)` }}
                      />

                      <div className="mt-0.5 p-1.5 rounded-md bg-neutral-950 border border-neutral-800 text-neutral-500 group-hover/bullet:text-white group-hover/bullet:border-neutral-700 transition-colors">
                        <ShieldCheck size={14} />
                      </div>
                      
                      <div className="relative z-10">
                        <h4 className="font-display font-black text-neutral-200 text-sm sm:text-base tracking-wide transition-colors group-hover/bullet:text-white">
                          {bullet.title}
                        </h4>
                        <p className="text-neutral-400 text-xs sm:text-sm mt-1.5 leading-relaxed font-sans">
                          {bullet.text}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}