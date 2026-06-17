import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ArrowRight, Mail, Code2, Cpu, Terminal, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icon';
import profileImg from '../assets/Pro.jpg';

export default function Hero() {
  const roles = [
    'AI-Powered Full Stack Developer',
    'MERN & PERN Stack Architect',
    'React.js Optimization Specialist',
    'Biotech Grad turned Software Engineer',
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const profileContainerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<HTMLSpanElement[]>([]);
  const gridOverlayRef = useRef<HTMLDivElement>(null);

  // Auto-rotate text roles
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  // GSAP Advanced Micro-Interactions & Entry Orchestration
  useEffect(() => {
    const hero = heroRef.current;
    const grid = gridOverlayRef.current;
    if (!hero) return;

    const ctx = gsap.context(() => {
      // 1. Sophisticated Letter-by-Letter Name Reveal
      gsap.fromTo(
        lettersRef.current,
        { y: 100, opacity: 0, rotateX: -60 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          stagger: 0.04,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.2
        }
      );

      // 2. High-Fidelity Cursor Tracker (Grid Distortion & Parallax)
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const rect = hero.getBoundingClientRect();
        
        // Normalize coordinates from -0.5 to 0.5
        const xNorm = (clientX - rect.left) / rect.width - 0.5;
        const yNorm = (clientY - rect.top) / rect.height - 0.5;

        // Subtle interactive coordinate shifts for floating HUD elements
        gsap.to(".parallax-hud-1", { x: xNorm * 35, y: yNorm * 35, duration: 0.6, ease: "power2.out" });
        gsap.to(".parallax-hud-2", { x: xNorm * -45, y: yNorm * -45, duration: 0.7, ease: "power2.out" });
        gsap.to(".parallax-hud-3", { x: xNorm * 20, y: yNorm * -30, duration: 0.8, ease: "power2.out" });
        
        // Immersive 3D Profile Centerpiece Tilt Matrix
        if (profileContainerRef.current) {
          gsap.to(profileContainerRef.current, {
            rotateY: xNorm * 25,
            rotateX: yNorm * -25,
            duration: 0.5,
            ease: "power1.out",
            transformPerspective: 1000
          });
        }

        // Warp background grid pattern toward custom mouse focal points
        if (grid) {
          gsap.to(grid, {
            backgroundPosition: `${50 + xNorm * 4}% ${50 + yNorm * 4}%`,
            duration: 0.5,
            ease: "power1.out"
          });
        }
      };

      // Reset coordinates on Mouse Leave
      const handleMouseLeave = () => {
        gsap.to([".parallax-hud-1", ".parallax-hud-2", ".parallax-hud-3"], { x: 0, y: 0, duration: 1, ease: "elastic.out(1, 0.3)" });
        if (profileContainerRef.current) {
          gsap.to(profileContainerRef.current, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "power2.out" });
        }
      };

      hero.addEventListener('mousemove', handleMouseMove);
      hero.addEventListener('mouseleave', handleMouseLeave);
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = elementRect - bodyRect - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-radial from-neutral-950 via-obsidian-950 to-neutral-950"
    >
      {/* Neo-Grid Overlay */}
      <div 
        ref={gridOverlayRef}
        className="absolute inset-0 bg-[linear-gradient(to_right,#22d3ee05_1px,transparent_1px),linear-gradient(to_bottom,#22d3ee05_1px,transparent_1px)] bg-size-[32px_32px] pointer-events-none transition-all duration-300"
      />

      {/* Cyberpunk Neon Glow Pods */}
      <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-150 h-150 bg-violet-500/5 rounded-full blur-[160px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Structural Text Space (5 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 mb-6 w-fit mx-auto lg:mx-0 backdrop-blur-md text-xs font-mono uppercase tracking-widest"
            >
              <Terminal size={14} className="animate-pulse text-cyan-400" />
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping absolute" />
              <span className="pl-3">SYSTEM: ACTIVE // DEPLOY READY</span>
            </motion.div>

            {/* Core Segmented Moniker String */}
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-none font-display uppercase">
              Mayuresh Erula
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-violet-500 flex flex-wrap justify-center lg:justify-start gap-[0.02em] select-none perspective-3d pt-2">
                {"MAYURESH ERULA".split("").map((letter, idx) => (
                  <span
                    key={idx}
                    ref={(el) => { if (el) lettersRef.current[idx] = el; }}
                    className="inline-block origin-bottom transform preserve-3d"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </span>
            </h1>

            {/* Dynamic Roles Terminal Frame */}
            <div className="h-8 flex items-center justify-center lg:justify-start mt-6 mb-4 font-mono text-sm sm:text-base text-gray-400">
              <Code2 size={16} className="text-violet-400 mr-2.5" />
              <span className="text-neutral-500 mr-1.5">&gt;</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.25 }}
                  className="text-white font-medium border-r-2 border-cyan-400 pr-1 animate-caret"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>

            {/* Main Brief Profile Context Block */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed mb-8 font-sans font-normal"
            >
              Bridging biological frameworks with systemic computer engineering architecture. Armed with an Executive PG from <span className="text-cyan-400">IIIT Bangalore</span>,via <span className='text-orange-400'>upGrad</span> specializing in building high-concurrency client-side applications, optimized state machines, and pixel-perfect interactive layouts.
            </motion.p>

            {/* Trigger Button Matrices */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={() => handleScrollClick('projects')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-white text-black hover:bg-cyan-400 font-semibold text-sm transition-all duration-300 shadow-xl shadow-cyan-950/20 tracking-wide cursor-pointer"
              >
                Execute Project View
                <ArrowRight size={16} />
              </button>
              
              <button
                onClick={() => handleScrollClick('contact')}
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg bg-neutral-900/80 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-600 backdrop-blur-md text-sm font-semibold transition-all duration-300 cursor-pointer"
              >
                Establish Pipeline Contact
              </button>
            </motion.div>

            {/* Connection Node Hooks */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-4 mt-10 text-xs font-mono text-neutral-500"
            >
              <span className="uppercase tracking-widest">EXTERNAL LINKS //</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Mayuresh-Erula"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-neutral-900 border border-neutral-800 hover:border-cyan-400 text-neutral-400 hover:text-cyan-400 transition-colors shadow-inner"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/mayuresh-erula-ab7743220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-md bg-neutral-900 border border-neutral-800 hover:border-cyan-400 text-neutral-400 hover:text-cyan-400 transition-colors shadow-inner"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a
                  href="mailto:mayuresherula@gmail.com"
                  className="p-2.5 rounded-md bg-neutral-900 border border-neutral-800 hover:border-cyan-400 text-neutral-400 hover:text-cyan-400 transition-colors shadow-inner"
                  aria-label="Send Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Futuristic Command Dashboard Hub (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2 perspective-1000 min-h-105">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              
              {/* Complex Vector Target Ring Graphic */}
              <div className="absolute inset-0 border border-neutral-800/60 rounded-full animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 border border-dashed border-cyan-500/10 rounded-full animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute inset-12 border border-neutral-800 rounded-full" />

              {/* Parallax HUD Element 1: Top-Left Analytics Badge */}
              <div className="parallax-hud-1 absolute top-0 -left-6 z-30 bg-neutral-900/90 border border-neutral-800 p-3 rounded-lg backdrop-blur-md shadow-2xl pointer-events-none max-w-37.5 font-mono">
                <div className="flex items-center gap-2 text-cyan-400 text-[10px] uppercase font-bold tracking-wider">
                  <Cpu size={12} />
                  <span>Core Matrix</span>
                </div>
                <div className="text-white text-xs mt-1 font-semibold">React Architecture</div>
                <div className="w-full bg-neutral-800 h-1 mt-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-400 h-full w-[94%] rounded-full" />
                </div>
              </div>

              {/* Parallax HUD Element 2: Bottom-Right Terminal Output Badge */}
              <div className="parallax-hud-2 absolute bottom-2 -right-8 z-30 bg-neutral-900/90 border border-neutral-800 px-3 py-2.5 rounded-lg backdrop-blur-md shadow-2xl pointer-events-none font-mono text-[10px]">
                <div className="text-violet-400 flex items-center gap-1.5 font-bold uppercase tracking-wider">
                  <Sparkles size={11} />
                  <span>Optimization Log</span>
                </div>
                <p className="text-neutral-400 mt-1">FPS: <span className="text-emerald-400 font-bold">60.0 // STABLE</span></p>
                <p className="text-neutral-500">Render Scope: Client</p>
              </div>

              {/* Parallax HUD Element 3: Abstract Floating crosshair pointer */}
              <div className="parallax-hud-3 absolute top-6 right-2 z-0 text-cyan-500/30 font-mono text-xs select-none pointer-events-none">
                <p>[LAT: 19.076][LON: 72.877]</p>
              </div>

              {/* Central Dynamic 3D Framing Node Wrapper */}
              <div 
                ref={profileContainerRef} 
                className="w-56 h-56 sm:w-72 sm:h-72 relative z-10 rounded-2xl p-2 bg-linear-to-br from-neutral-900 to-neutral-950 border border-neutral-800 shadow-2xl overflow-visible preserve-3d"
              >
                {/* Neon backlighting edge profile effect */}
                <div className="absolute inset-0 bg-linear-to-tr from-cyan-500/20 via-transparent to-violet-500/20 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />

                {/* Internal profile frame canvas containing your photo */}
                <div className="w-full h-full rounded-xl overflow-hidden relative border border-neutral-800 bg-neutral-950">
                  <img 
                    src={profileImg} 
                    alt="Mayuresh Erula" 
                    className="w-full h-full object-cover grayscale contrast-115 hover:grayscale-0 transition-all duration-700 ease-out transform hover:scale-105"
                  />
                  {/* Digital overlay gradient slice sheen */}
                  <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-neutral-950/80 pointer-events-none" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}