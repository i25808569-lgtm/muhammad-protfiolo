import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { ArrowDown, Code2, Paintbrush, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Spring values for mouse parallax movement
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientWidth, clientHeight } = document.documentElement;
      const x = (e.clientX - clientWidth / 2) / (clientWidth / 2);
      const y = (e.clientY - clientHeight / 2) / (clientHeight / 2);
      setMousePosition({ x: e.clientX, y: e.clientY });
      mouseX.set(x * 30); // scale intensity
      mouseY.set(y * 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-transparent py-20 px-6"
    >
      {/* Background radial overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,2,6,0)_0%,rgba(3,2,6,0.5)_95%)] z-10 pointer-events-none" />

      {/* Luxury floating ambient glow balls (animated, moving with mouse parallax) */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="absolute top-1/4 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-900/15 ambient-glow pointer-events-none z-0"
      />
      <motion.div
        style={{ x: useSpring(useMotionValue(mousePosition.x * -0.015)), y: useSpring(useMotionValue(mousePosition.y * -0.015)) }}
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-900/10 ambient-glow pointer-events-none z-0"
      />
      <motion.div
        style={{ x: useSpring(useMotionValue(mousePosition.x * 0.01)), y: useSpring(useMotionValue(mousePosition.y * 0.01)) }}
        className="absolute top-1/3 right-1/3 w-[250px] h-[250px] rounded-full bg-[#cc9933]/5 ambient-glow pointer-events-none z-0"
      />

      {/* Cyber-Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none z-0" 
      />

      {/* Floating 3D Simulated Mesh Node / Interactive Elements */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40">
        <svg className="w-full h-full max-w-5xl max-h-5xl" viewBox="0 0 800 800" fill="none">
          <motion.circle
            cx="400"
            cy="400"
            r="180"
            stroke="url(#goldGradient)"
            strokeWidth="0.5"
            strokeDasharray="4 8"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />
          <motion.circle
            cx="400"
            cy="400"
            r="240"
            stroke="rgba(255, 255, 255, 0.03)"
            strokeWidth="1"
            strokeDasharray="1 10"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
          />
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3e5ab" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#cc9933" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#8b6508" stopOpacity="0.1" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-20 flex flex-col items-center">
        {/* Modern Label Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cc9933] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cc9933]"></span>
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#f3e5ab] font-semibold">
            Creative Portfolio // 2026 Edition
          </span>
        </motion.div>

        {/* Dynamic Title / Subtitle with animations */}
        <div className="mb-4">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg font-mono uppercase tracking-[0.45em] text-gray-500 mb-2"
          >
            My name is
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl font-light font-display tracking-tight text-white mb-6 leading-[1.05]"
          >
            Muhammad Ibrahim <br className="hidden md:inline" />
            <span className="font-serif italic text-gold-gradient drop-shadow-[0_2px_15px_rgba(204,153,51,0.15)] font-normal">
              Fazal
            </span>
          </motion.h1>
        </div>

        {/* Multidisciplinary Role Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-2xl text-base md:text-xl text-gray-400 font-sans tracking-wide leading-relaxed mb-12"
        >
          A <span className="text-white font-semibold">Full Stack Web Developer</span> and{' '}
          <span className="text-white font-semibold">Creative Visual Designer</span>. I build fully responsive interactive applications and shape high-end luxury brand identities, posters, and logos.
        </motion.p>

        {/* Bullet tags highlighting roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="flex flex-wrap items-center justify-center gap-y-3 gap-x-6 text-xs font-mono text-gray-500 mb-12"
        >
          <span className="flex items-center gap-1.5"><Code2 className="w-3.5 h-3.5 text-[#cc9933]" /> Full Stack Development</span>
          <span className="text-gray-700">•</span>
          <span className="flex items-center gap-1.5"><Paintbrush className="w-3.5 h-3.5 text-purple-400" /> UI/UX & Prototyping</span>
          <span className="text-gray-700">•</span>
          <span className="flex items-center gap-1.5"><Paintbrush className="w-3.5 h-3.5 text-cyan-400" /> Poster & Logo Design</span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md"
        >
          <a
            href="#projects"
            className="w-full sm:w-auto relative px-8 py-4 rounded-full bg-white text-black font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 group hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300"
          >
            View My Work <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 text-white font-semibold uppercase tracking-wider text-xs flex items-center justify-center gap-2 backdrop-blur-md hover:border-white/20 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-20 cursor-pointer"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="text-[10px] uppercase tracking-[0.25em] text-gray-500 font-mono">
            Scroll To Explore
          </span>
          <ArrowDown className="w-4 h-4 text-[#cc9933]" />
        </motion.div>
      </div>
    </section>
  );
}
