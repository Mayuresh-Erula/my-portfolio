import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Landmark, Coins, KeyRound } from 'lucide-react';
import { GithubIcon } from './Icon';

export default function Projects() {
  const projects = [
    {
      title: 'Expense Tracker App',
      description: 'A responsive real-time financial tracking dashboard designed to monitor and visualize income and expenses with local storage replication for data persistence.',
      skills: ['React.js', 'Tailwind CSS', 'Local Storage', 'State Management'],
      github: 'https://github.com/Mayuresh-Erula',
      icon: <Coins className="text-emerald-400" size={26} />,
      themeColor: 'rgba(16, 185, 129, 0.15)',
      accentClass: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5'
    },
    {
      title: 'Random String Generator',
      description: 'A performance-optimized security tool for generating cryptographic strength random strings, utilizing advanced React hooks for render control and native clipboard integration.',
      skills: ['React.js', 'Vite', 'Tailwind CSS', 'Performance Optimization'],
      github: 'https://github.com/Mayuresh-Erula',
      icon: <KeyRound className="text-cyan-400" size={26} />,
      themeColor: 'rgba(34, 211, 238, 0.15)',
      accentClass: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/5'
    },
    {
      title: 'Animated Login Page',
      description: 'A highly fluid, interactive user access interface built using core keyframe stylesheets and vanilla DOM logic to master modern web motion design.',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'DOM Manipulation'],
      github: 'https://github.com/Mayuresh-Erula',
      icon: <Landmark className="text-violet-400" size={26} />,
      themeColor: 'rgba(139, 92, 246, 0.15)',
      accentClass: 'text-violet-400 border-violet-500/20 bg-violet-500/5'
    }
  ];

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Reveal animation sequence for cards entering viewport
    const ctx = gsap.context(() => {
      gsap.fromTo(".interactive-project-card", 
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: grid,
            start: "top bottom-=100px",
            toggleActions: "play none none none"
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Spatial 3D Card Tracking Calculations
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, cardIdx: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Normalize cursor coordinate fields (-0.5 to 0.5)
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    // Target elements within this specific card context
    const iconContainer = card.querySelector(`.layer-icon-${cardIdx}`);
    const textContent = card.querySelector(`.layer-text-${cardIdx}`);
    const spotSheen = card.querySelector(`.sheen-${cardIdx}`) as HTMLDivElement;

    // 1. Core Card Wrapper 3D Rotation Matrix
    gsap.to(card, {
      rotateY: x * 20, // max 10 degrees axis layout tilt
      rotateX: y * -20,
      transformPerspective: 1000,
      ease: "power2.out",
      duration: 0.4
    });

    // 2. Multi-tiered Parallax Offset Speeds
    if (iconContainer) {
      gsap.to(iconContainer, { x: x * -15, y: y * -15, z: 20, ease: "power2.out", duration: 0.4 });
    }
    if (textContent) {
      gsap.to(textContent, { x: x * 10, y: y * 10, ease: "power2.out", duration: 0.4 });
    }

    // 3. Radial Target Tracking Light Spot Sheen
    if (spotSheen) {
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      gsap.to(spotSheen, {
        background: `radial-gradient(circle 140px at ${mouseX}px ${mouseY}px, ${projects[cardIdx].themeColor}, transparent 80%)`,
        duration: 0.1
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, cardIdx: number) => {
    const card = e.currentTarget;
    const iconContainer = card.querySelector(`.layer-icon-${cardIdx}`);
    const textContent = card.querySelector(`.layer-text-${cardIdx}`);
    const spotSheen = card.querySelector(`.sheen-${cardIdx}`);

    // Cleanly transition elements back to zeroed base properties
    gsap.to(card, { rotateX: 0, rotateY: 0, ease: "power3.out", duration: 0.6 });
    if (iconContainer) gsap.to(iconContainer, { x: 0, y: 0, z: 0, ease: "power3.out", duration: 0.6 });
    if (textContent) gsap.to(textContent, { x: 0, y: 0, ease: "power3.out", duration: 0.6 });
    if (spotSheen) {
      gsap.to(spotSheen, {
        background: `radial-gradient(circle 100px at 50% 50%, transparent, transparent)`,
        duration: 0.4
      });
    }
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-neutral-950">
      {/* Structural Abstract Geometric Vectors */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-200 h-200 bg-violet-500/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading Area */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs font-mono tracking-widest uppercase mb-4">
            <span>Production Build Portfolio</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight font-display text-white">
            FEATURED <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 via-blue-400 to-violet-400">ARCHITECTURES</span>
          </h2>
          <p className="text-neutral-400 max-w-xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            A sandbox of engineering metrics: optimized modular components, granular state layers, and secure micro-utilities.
          </p>
        </div>

        {/* Dynamic Project Target Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center perspective-1000"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={(e) => handleMouseLeave(e, index)}
              className="interactive-project-card opacity-0 group relative rounded-2xl bg-neutral-900/40 border border-neutral-900 shadow-2xl overflow-hidden flex flex-col justify-between preserve-3d backdrop-blur-md cursor-pointer transition-colors duration-500 hover:bg-neutral-900/70 hover:border-neutral-800"
              style={{ minHeight: '410px' }}
            >
              {/* Dynamic Tracker Spotlight Layer */}
              <div className={`sheen-${index} absolute inset-0 pointer-events-none z-0 transition-opacity duration-300 opacity-100 mix-blend-screen`} />

              {/* Internal Framing Space */}
              <div className="p-8 relative z-10 preserve-3d">
                
                {/* Parallax Icon Element Node */}
                <div className={`layer-icon-${index} w-12 h-12 rounded-xl flex items-center justify-center mb-6 border border-neutral-800 bg-neutral-950 shadow-2xl preserve-3d transform`}>
                  <div className="absolute inset-0 rounded-xl bg-white/2 blur-[1px]" />
                  {project.icon}
                </div>

                {/* Parallax Core Content Node */}
                <div className={`layer-text-${index} transform`}>
                  <h3 className="font-display font-black text-xl text-white tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-neutral-400 text-sm mt-4 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Immutable Baseline Base: Badges & Links */}
              <div className="p-8 pt-0 mt-auto relative z-20">
                
                {/* Skill Badges Deck */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase border border-neutral-800/80 bg-neutral-950/80 text-neutral-400 group-hover:border-neutral-700/60 transition-colors`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* External Routing Pipes */}
                <div className="flex items-center justify-between border-t border-neutral-800/80 pt-5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    <GithubIcon size={14} />
                    <span>Fetch Source</span>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-neutral-950 border border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600 transition-all duration-300 shadow-md"
                    aria-label="Launch Deployment"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}