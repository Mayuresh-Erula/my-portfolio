import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, GitBranch } from "lucide-react";
import { FaPython, FaReact, FaJsSquare, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiRedux, SiFramer, SiVite } from 'react-icons/si';
import { MdOutlineArchitecture } from 'react-icons/md';
import { VscSettingsGear } from 'react-icons/vsc';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const skills = [
    { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-[#F7DF1E]" size={14} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" size={14} /> },
    { name: "Python", icon: <FaPython className="text-[#3776AB]" size={14} /> },
    { name: "React.js", icon: <FaReact className="text-[#61DAFB]" size={14} /> },
    { name: "Redux Toolkit", icon: <SiRedux className="text-[#764ABC]" size={14} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#38BDF8]" size={14} /> },
    { name: "Framer Motion", icon: <SiFramer className="text-[#E10098]" size={14} /> },
    { name: "Git", icon: <GitBranch className="text-[#F05032]" size={14} /> },
    { name: "GitHub", icon: <FaGithub className="text-[#FFFFFF]" size={14} /> },
    { name: "Vite / npm", icon: <SiVite className="text-[#646CFF]" size={14} /> },
    { name: "REST APIs", icon: <Globe className="text-[#38BDF8]" size={14} /> },
    { name: "UI/UX Architecture", icon: <MdOutlineArchitecture className="text-[#F43F5E]" size={14} /> },
    { name: "Performance Optimization", icon: <VscSettingsGear className="text-[#10B981]" size={14} /> }
  ];

  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const scrollContainer = scrollRef.current;

    if (!section || !scrollContainer) return;

    // Calculate how far the container needs to slide left
    // Total width of the container minus the visible viewport screen width
    const scrollAmount = scrollContainer.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(scrollContainer, {
        x: -scrollAmount,
        ease: "none", // Keeps the tracking perfectly linked 1:1 to the scrollbar movement
        scrollTrigger: {
          trigger: section,
          pin: true,        // Locks the section vertically in place
          scrub: 1,         // Smoothly links wheel scrolling with timeline progress (1 second lag for buttery smoothness)
          start: "top top", // Starts pinning right when the section hits the top of the viewport
          end: () => `+=${scrollAmount}`, // Duration of the pin matches the horizontal distance precisely
          invalidateOnRefresh: true, // Recalculates dynamically if the user resizes their screen
        }
      });
    });

    return () => ctx.revert(); // Standard GSAP cleanup on component unmount
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="h-screen w-full relative overflow-hidden bg-obsidian-900/30 flex flex-col justify-center"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            My <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-violet-400">Skills</span> & Toolkit
          </h2>
          <div className="h-1.5 w-20 bg-linear-to-r from-cyan-400 to-violet-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            A curated summary of my core technical stack and engineering proficiencies.
          </p>
        </div>

        {/* Scrollable Container Container */}
        <div className="overflow-visible py-4 mask-[linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div 
            ref={scrollRef}
            className="flex gap-4 w-max px-[10vw]" // Optional padding so the first/last items aren't hard cropped at screen borders
          >
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="inline-flex items-center gap-3 shrink-0 px-6 py-3.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium backdrop-blur-md shadow-xl cursor-default hover:text-cyan-400 transform transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
              >
                {/* Icon Glass Container */}
                <div className="p-2 rounded-lg bg-black/40 border border-white/5 backdrop-blur-sm">
                  {skill.icon}
                </div>
                <span className="tracking-wide font-display">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}