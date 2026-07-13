import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Cpu, Phone } from 'lucide-react';

interface HeaderProps {
  onAIChatOpen: () => void;
}

export default function Header({ onAIChatOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, cubicBezier: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5'
            : 'py-6 bg-transparent'
        }`}
        id="app-header"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-widest font-display text-white group-hover:text-gold-gradient transition-colors">
              MIF<span className="text-[#cc9933]">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 group-hover:text-gray-300 transition-colors font-mono hidden sm:inline-block border border-white/10 px-2 py-0.5 rounded-full">
              Creative Agency
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-mono uppercase tracking-widest text-gray-400 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#cc9933] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onAIChatOpen}
              className="flex items-center gap-2 px-4 py-2 border border-[#cc9933]/30 rounded-full text-xs font-mono tracking-wider text-[#f3e5ab] bg-[#cc9933]/5 hover:bg-[#cc9933]/15 hover:border-[#cc9933] transition-all duration-300 cursor-pointer"
            >
              <Cpu className="w-3.5 h-3.5 animate-pulse text-[#cc9933]" />
              AI Assistant
            </button>
            <a
              href="#contact"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-white text-black text-xs font-mono uppercase tracking-widest font-semibold inline-flex items-center gap-1.5 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1">
                Contact <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
              <span className="absolute inset-0 bg-[#cc9933] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            {/* WhatsApp direct contact icon */}
            <a
              href="https://wa.me/923110528929"
              target="_blank"
              rel="noreferrer"
              className="relative p-2.5 rounded-full border border-green-500/30 text-green-400 bg-green-500/5 hover:bg-green-500/10 hover:border-green-400 hover:text-green-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)] transition-all duration-300 cursor-pointer group"
            >
              <span className="sr-only">Chat on WhatsApp</span>
              <Phone className="w-4 h-4 text-green-400" />
              {/* Tooltip */}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/90 text-white text-[9px] font-mono py-1 px-2 rounded border border-white/10 whitespace-nowrap z-50 pointer-events-none">
                Chat on WhatsApp
              </span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={onAIChatOpen}
              className="flex items-center justify-center p-2 rounded-full border border-[#cc9933]/30 text-[#cc9933] bg-[#cc9933]/5 cursor-pointer"
              title="Open AI Chatbot"
            >
              <Cpu className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[72px] left-0 w-full bg-black/95 backdrop-blur-2xl z-40 border-b border-white/5 lg:hidden"
            id="mobile-nav-panel"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-display text-gray-400 hover:text-white py-1 transition-colors border-b border-white/5 font-medium flex justify-between items-center"
                  >
                    {link.name}
                    <span className="text-xs text-[#cc9933] font-mono">/ {link.name.substring(0, 3)}</span>
                  </a>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onAIChatOpen();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-[#cc9933]/40 bg-[#cc9933]/10 text-sm font-mono text-[#f3e5ab]"
                >
                  <Cpu className="w-4 h-4 text-[#cc9933]" />
                  Talk with Ibrahim AI Clone
                </button>
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 rounded-full bg-white text-black font-semibold text-sm uppercase tracking-wider block"
                >
                  Contact Me
                </a>
                <a
                  href="https://wa.me/923110528929"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-green-500/40 bg-green-500/10 text-sm font-mono text-green-300 hover:bg-green-500/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-green-400" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
