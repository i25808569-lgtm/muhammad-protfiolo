import { ArrowUp, Code, Sparkles, Phone } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#030303] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold font-display tracking-widest text-white">
            MIF<span className="text-[#cc9933]">.</span>
          </span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono border border-white/5 px-2 py-0.5 rounded-full flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5 text-[#cc9933] animate-pulse" /> Ibrahim Fazal AI Portals
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 font-mono text-center md:text-left">
          &copy; {new Date().getFullYear()} Muhammad Ibrahim Fazal. Compiled with absolute visual precision.
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/923110528929"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-xs font-mono text-green-400 hover:text-green-300 transition-all duration-300 group"
            title="Chat on WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-green-400 group-hover:scale-115 transition-transform duration-200" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            onClick={handleScrollTop}
            className="p-3 rounded-full border border-white/10 text-gray-400 hover:text-white hover:border-[#cc9933] transition-colors group cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
