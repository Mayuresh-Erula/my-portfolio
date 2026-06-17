import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-obsidian-900 bg-obsidian-950/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-linear-to-br from-cyan-glow to-violet-glow flex items-center justify-center text-white font-bold text-sm font-display shadow-md">
            ME
          </div>
          <span className="text-gray-400 font-display text-sm">
            © {new Date().getFullYear()} Mayuresh Erula. All rights reserved.
          </span>
        </div>

        {/* Right Side - Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-obsidian-900 border border-obsidian-800 text-gray-400 hover:text-cyan-glow hover:border-cyan-glow/20 transition-all duration-300 font-display font-semibold text-xs cursor-pointer shadow-sm"
          aria-label="Scroll to top"
        >
          Back to Top
          <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
}
