import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS_DATA } from '../data';
import { Terminal, PenTool, LayoutGrid } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'dev' | 'design'>('all');

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    if (activeTab === 'all') return true;
    return skill.category === activeTab;
  });

  return (
    <section id="skills" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-purple-900/5 ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 02. Expertise
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white">
              Creative Arsenal & <span className="font-serif italic text-gold-gradient font-normal">Mastery</span>
            </h2>
          </div>

          {/* Luxury Tab Switcher */}
          <div className="flex bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveTab('all')}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" /> All
            </button>
            <button
              onClick={() => setActiveTab('dev')}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'dev'
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" /> Development
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`flex items-center gap-1.5 px-6 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'design'
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <PenTool className="w-3.5 h-3.5" /> Design
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={skill.name}
                className="glass-card p-6 rounded-2xl border border-white/5 hover:border-[#cc9933]/30 hover:shadow-[0_10px_25px_-10px_rgba(204,153,51,0.08)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Micro Ambient Glow behind skill card on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#cc9933]/5 rounded-full filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex items-center justify-between mb-4">
                  <span className="font-display font-medium text-base text-white group-hover:text-[#f3e5ab] transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-mono text-[#cc9933] font-semibold bg-[#cc9933]/10 px-2.5 py-1 rounded-md">
                    {skill.level}%
                  </span>
                </div>

                {/* Animated Progress Gauge */}
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full bg-gradient-to-r from-[#cc9933] to-[#f3e5ab] rounded-full relative"
                  />
                </div>

                <div className="flex justify-between items-center mt-3 text-[10px] uppercase tracking-widest text-gray-500 font-mono">
                  <span>
                    {skill.category === 'dev' ? 'Technical Stack' : 'Creative Stack'}
                  </span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#cc9933]">
                    Expert
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
