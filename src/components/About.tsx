import { motion } from 'framer-motion';
import { GraduationCap, Landmark, Sparkles, BookOpen } from 'lucide-react';

export default function About() {
  const education = [
    {
      institution: 'IIIT Bangalore',
      degree: 'Executive PG Certification, AI-Powered Full Stack Development',
      period: 'Oct 2024 – Jun 2025',
      description: 'Specialized in modern web frameworks, API design, state management, and t  he integration of AI models into full-stack application workflows.',
      icon: <GraduationCap className="text-cyan-glow" size={20} />
    },
    {
      institution: 'Mithibai College, Mumbai',
      degree: 'Bachelor of Science, Biotechnology',
      period: '2020 – 2024',
      description: 'Gained analytical and research training. Transitioned into software engineering by applying computational analysis to biological data, sparking a passion for web development.',
      icon: <Landmark className="text-violet-glow" size={20} />
    },
    {
      institution: 'Shree Chaitanya Junior Kalasala, Hyderabad',
      degree: 'Higher Secondary School Education (10+2)',
      period: '2017 – 2019',
      description: 'Focused on science, mathematics, and analytical problem-solving foundation.',
      icon: <BookOpen className="text-blue-400" size={20} />
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-violet-glow/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            About Me & <span className="text-gradient-cyan-violet">Education</span>
          </h2>
          <div className="h-1.5 w-20 bg-linear-to-r from-cyan-glow to-violet-glow mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: My Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-2xl border border-obsidian-800 shadow-xl relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-cyan-500/10 to-transparent rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-3 text-cyan-glow mb-4">
                <Sparkles size={20} />
                <h3 className="font-display font-bold text-lg text-white">The Career Transition</h3>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My journey began in the field of <strong>Biotechnology</strong>. Through data analysis and scientific computing, I discovered a profound interest in computer science and the magic of creating software.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                To solidifying this passion, I joined <strong>IIIT Bangalore's Executive PG program</strong> in Full Stack Development. This rigorous program empowered me with structural computer science concepts, advanced JavaScript/TypeScript patterns, and modern framework architectures.
              </p>

              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I enjoy bridging the gap between design and clean code, optimizing components for lightning-fast loads, and converting complex user flows into interactive, intuitive web applications.
              </p>
            </div>
            
            {/* Quick stats grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-panel p-5 rounded-xl border border-obsidian-800 text-center shadow-md">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-cyan-glow">2+</div>
                <div className="text-xs text-gray-400 mt-1 uppercase font-semibold tracking-wider">Internships Completed</div>
              </div>
              <div className="glass-panel p-5 rounded-xl border border-obsidian-800 text-center shadow-md">
                <div className="text-2xl sm:text-3xl font-extrabold font-display text-violet-glow">3+</div>
                <div className="text-xs text-gray-400 mt-1 uppercase font-semibold tracking-wider">Core Web Projects</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 space-y-8">
            <div className="relative border-l-2 border-obsidian-800 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative group"
                >
                  {/* Timeline bullet with logo */}
                  <div className="absolute -left-11.25 sm:-left-13.25 top-0 w-10 h-10 rounded-xl bg-obsidian-900 border-2 border-obsidian-800 flex items-center justify-center group-hover:border-cyan-glow group-hover:scale-110 transition-all duration-300 shadow-md">
                    {edu.icon}
                  </div>

                  {/* Content card */}
                  <div className="glass-panel glass-panel-hover p-6 rounded-2xl border border-obsidian-800 shadow-lg">
                    <span className="inline-block px-3 py-1 rounded-full bg-obsidian-900 border border-obsidian-700 text-cyan-glow text-xs font-semibold mb-3">
                      {edu.period}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-cyan-glow transition-colors duration-300">
                      {edu.institution}
                    </h3>
                    <h4 className="text-sm font-semibold text-gray-400 mt-1 font-display">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
