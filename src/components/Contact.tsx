import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate submission success
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="text-cyan-glow" size={20} />,
      label: 'Email',
      value: 'mayuresherula@gmail.com',
      href: 'mailto:mayuresherula@gmail.com'
    },
    {
      icon: <Phone className="text-violet-glow" size={20} />,
      label: 'Phone',
      value: '+91 9321074161',
      href: 'tel:9321074161'
    },
    {
      icon: <MapPin className="text-emerald-400" size={20} />,
      label: 'Location',
      value: 'Mumbai, Maharashtra',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-cyan-glow/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Get In <span className="text-gradient-cyan-violet">Touch</span>
          </h2>
          <div className="h-1.5 w-20 bg-linear-to-r from-cyan-glow to-violet-glow mx-auto mt-4 rounded-full" />
          <p className="text-gray-400 max-w-xl mx-auto mt-6 text-sm sm:text-base leading-relaxed">
            Have a project in mind, want to discuss a role, or just say hello? Drop me a message or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            <div className="space-y-6 grow">
              <div className="glass-panel p-8 rounded-2xl border border-obsidian-800 shadow-xl">
                <h3 className="font-display font-bold text-xl text-white mb-6">Contact Info</h3>
                
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-obsidian-900 border border-obsidian-800 flex items-center justify-center shadow-md">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{info.label}</div>
                        {info.href ? (
                          <a href={info.href} className="text-gray-200 hover:text-cyan-glow transition-colors duration-300 font-semibold text-sm sm:text-base">
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-200 font-semibold text-sm sm:text-base">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Grid */}
              <div className="glass-panel p-8 rounded-2xl border border-obsidian-800 shadow-xl">
                <h3 className="font-display font-bold text-lg text-white mb-4">Connect on Socials</h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/in/mayuresh-erula-ab7743220"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow flex items-center justify-center gap-2 py-3 rounded-xl bg-obsidian-900 border border-obsidian-800 text-gray-400 hover:text-cyan-glow hover:border-cyan-glow/30 transition-all duration-300 shadow-sm"
                  >
                    <LinkedinIcon size={18} />
                    <span className="font-display font-semibold text-xs sm:text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="https://github.com/Mayuresh-Erula"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grow flex items-center justify-center gap-2 py-3 rounded-xl bg-obsidian-900 border border-obsidian-800 text-gray-400 hover:text-cyan-glow hover:border-cyan-glow/30 transition-all duration-300 shadow-sm"
                  >
                    <GithubIcon size={18} />
                    <span className="font-display font-semibold text-xs sm:text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border border-obsidian-800 shadow-xl h-full">
              <h3 className="font-display font-bold text-xl text-white mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-obsidian-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 text-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Email</label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-obsidian-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 text-sm"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                  <input
                    required
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Inquiry / Opportunity"
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-obsidian-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Message</label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Mayuresh, we would love to discuss..."
                    className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-obsidian-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-cyan-glow focus:ring-1 focus:ring-cyan-glow transition-all duration-300 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-linear-to-r from-cyan-glow to-violet-glow text-obsidian-950 font-bold font-display shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] transition-all duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold text-center mt-4"
                  >
                    Thank you! Your message has been sent successfully.
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
