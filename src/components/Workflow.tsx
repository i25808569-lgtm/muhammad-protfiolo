import { motion } from 'motion/react';
import { WORKFLOW_STEPS } from '../data';

export default function Workflow() {
  return (
    <section id="process" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background glow overlay */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-900/10 rounded-full ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 06. The Methodology
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white">
              My Creative <span className="font-serif italic text-gold-gradient font-normal">Process</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-light tracking-wide leading-relaxed">
            Five disciplined, rigorous stages to take your luxury product from raw spark of inspiration to a flawless production-ready reality.
          </p>
        </div>

        {/* Workflow Stages Stack */}
        <div className="flex flex-col gap-12 relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[30px] md:left-1/2 top-0 bottom-0 w-[1px] bg-white/5 z-0" />

          {WORKFLOW_STEPS.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className={`flex flex-col md:flex-row items-start justify-between w-full relative z-10 gap-8 md:gap-16 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Number circle block */}
                <div className="absolute left-0 md:left-1/2 top-1.5 w-[60px] h-[60px] rounded-full bg-black border border-white/10 flex items-center justify-center transform md:-translate-x-1/2 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                  <span className="text-[#cc9933] font-display font-bold text-lg">
                    {step.number}
                  </span>
                </div>

                {/* Card Content Side */}
                <div className="w-full md:w-[45%] pl-20 md:pl-0">
                  <div className="glass-card p-8 rounded-2xl border border-white/5 hover:border-[#cc9933]/20 hover:shadow-[0_10px_30px_rgba(204,153,51,0.04)] transition-all duration-300">
                    <span className="text-[10px] uppercase tracking-widest font-mono text-[#cc9933] block mb-2">
                      Stage {step.number}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 font-sans font-light text-sm leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="text-gray-500 font-sans font-light text-xs leading-relaxed border-t border-white/5 pt-4">
                      {step.details}
                    </p>
                  </div>
                </div>

                {/* Empty side for balanced grid alignment */}
                <div className="hidden md:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
