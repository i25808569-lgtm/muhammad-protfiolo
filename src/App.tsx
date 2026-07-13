import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cpu } from 'lucide-react';

// Import Custom Modular Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import FeaturedProjects from './components/FeaturedProjects';
import DesignGallery from './components/DesignGallery';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIChatBot from './components/AIChatBot';

export default function App() {
  // AI Twin Chat drawer state
  const [chatOpen, setChatOpen] = useState(false);

  // Cinematic Intro Loading state
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Custom Cursor coordinates state
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [cursorHover, setCursorHover] = useState(false);

  // Simulation of luxury preloading screen
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (loadingProgress < 100) {
      const increment = Math.floor(Math.random() * 8) + 2;
      const speed = Math.floor(Math.random() * 40) + 15;
      timer = setTimeout(() => {
        setLoadingProgress((prev) => Math.min(prev + increment, 100));
      }, speed);
    } else {
      timer = setTimeout(() => {
        setLoading(false);
      }, 700);
    }
    return () => clearTimeout(timer);
  }, [loadingProgress]);

  // Handle custom mouse coordinates
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check if mouse is hovering over interactive elements
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') || 
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer');
      
      setCursorHover(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Dynamic Cursor tracking node (Desktop only) */}
      <div 
        className="hidden md:block cursor-dot"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          width: cursorHover ? '50px' : '10px',
          height: cursorHover ? '50px' : '10px',
          backgroundColor: cursorHover ? 'rgba(204, 153, 51, 0.2)' : 'rgba(255, 255, 255, 0.9)',
          border: cursorHover ? '1.5px solid #cc9933' : 'none',
          transition: 'width 0.15s ease, height 0.15s ease, background-color 0.15s ease, border 0.15s ease',
        }}
      />

      <AnimatePresence mode="wait">
        {loading ? (
          /* Awwwards level Cinematic preloader screen */
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ y: '-100vh', opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
            className="fixed inset-0 bg-[#030303] z-[9999] flex flex-col items-center justify-center p-6 select-none"
            id="app-preloader"
          >
            {/* Elegant logo reveal */}
            <div className="flex flex-col items-center gap-4 max-w-sm w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-2"
              >
                <span className="text-3xl font-bold font-display tracking-widest text-white">
                  MIF<span className="text-[#cc9933]">.</span>
                </span>
              </motion.div>

              {/* Progress Count */}
              <div className="w-full flex items-end justify-between font-mono text-[10px] tracking-[0.25em] text-gray-500 uppercase">
                <span>Compilation Status</span>
                <span className="text-white text-sm font-semibold">{loadingProgress}%</span>
              </div>

              {/* Minimal Luxury Progress Bar */}
              <div className="h-[1px] w-full bg-white/5 overflow-hidden rounded-full mt-2 relative">
                <div 
                  className="h-full bg-gradient-to-r from-[#cc9933] to-[#f3e5ab] transition-all duration-150"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>

              {/* Floating creative details */}
              <div className="flex justify-between w-full mt-2 text-[9px] font-mono text-gray-600">
                <span>UI/UX // FULL STACK</span>
                <span>LAHORE, PK</span>
              </div>
            </div>
          </motion.div>
        ) : (
          /* Main application reveal */
          <motion.div
            key="main-portfolio"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative min-h-screen text-[#e5e5e5] overflow-hidden selection:bg-[#cc9933]/30 selection:text-white"
          >
            {/* Dynamic, Full-Aesthetic & Interactive Master Background */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#030206]">
              {/* Premium Fine-Mesh Tech Grid */}
              <div 
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] pointer-events-none"
                style={{
                  maskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, #000 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(ellipse 65% 65% at 50% 50%, #000 60%, transparent 100%)',
                }}
              />
              
              {/* Soft Luxury Vignette & Radial Contrast Engine */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,2,6,0)_20%,rgba(3,2,6,0.95)_95%)]" />

              {/* Dynamic Interactive Spotlight following cursor */}
              <div 
                className="absolute inset-0 opacity-70 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(750px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(204, 153, 51, 0.04) 0%, rgba(59, 130, 246, 0.02) 40%, transparent 85%)`,
                }}
              />

              {/* Ambient Fluid Giant Blobs slowly drifting (Aesthetic color palette: deep indigo, cosmic teal, royal purple, and gold) */}
              <div className="absolute top-[-15%] left-[-10%] w-[650px] h-[650px] bg-indigo-900/12 rounded-full filter blur-[140px] animate-blob-slow-1 mix-blend-screen" />
              <div className="absolute bottom-[10%] right-[-10%] w-[700px] h-[700px] bg-purple-950/15 rounded-full filter blur-[150px] animate-blob-slow-2 mix-blend-screen" />
              <div className="absolute top-[40%] left-[30%] w-[550px] h-[550px] bg-blue-950/10 rounded-full filter blur-[130px] animate-blob-slow-3 mix-blend-screen" />
              <div className="absolute bottom-[40%] left-[-5%] w-[450px] h-[450px] bg-[#cc9933]/4 rounded-full filter blur-[120px] animate-blob-slow-1 mix-blend-screen" />

              {/* Carbon Texture Micro-detail layer */}
              <div className="absolute inset-0 pointer-events-none opacity-[0.015] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />

              {/* High-Contrast Luxury Floating Pulsing Star Nodes */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-[12%] left-[18%] w-1 h-1 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute top-[35%] left-[82%] w-1.5 h-1.5 bg-[#cc9933]/15 rounded-full" />
                <div className="absolute top-[78%] left-[28%] w-1 h-1 bg-blue-400/20 rounded-full animate-pulse" />
                <div className="absolute top-[62%] left-[8%] w-1.5 h-1.5 bg-white/10 rounded-full" />
                <div className="absolute top-[22%] left-[92%] w-1 h-1 bg-[#cc9933]/25 rounded-full animate-pulse" />
              </div>
            </div>

            {/* Modular Layout */}
            <Header onAIChatOpen={() => setChatOpen(true)} />
            
            <main>
              <Hero />
              <About />
              <Skills />
              <FeaturedProjects />
              <DesignGallery />
              <Services />
              <Workflow />
              <Testimonials />
              <Contact />
            </main>

            <Footer />

            {/* Float Floating AI Double Trigger Widget (glowing gold) */}
            <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setChatOpen(true)}
                className="p-4 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border border-[#cc9933]/40 cursor-pointer relative group hover:shadow-[0_0_25px_rgba(204,153,51,0.3)] transition-all duration-300"
                aria-label="Ask Ibrahim's AI Assistant"
                id="floating-ai-twin-btn"
              >
                {/* Background gold wave ring */}
                <span className="absolute inset-0 rounded-full border border-[#cc9933]/40 animate-ping opacity-50" />
                <Cpu className="w-5 h-5 text-black group-hover:text-[#cc9933] transition-colors" />
              </motion.button>
            </div>

            {/* The Gemini-powered chatbot drawer */}
            <AIChatBot isOpen={chatOpen} onClose={() => setChatOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
