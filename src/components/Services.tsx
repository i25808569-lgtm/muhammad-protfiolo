import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data';
import { Code, Figma, Compass, Palette, Check } from 'lucide-react';

export default function Services() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return Code;
      case 'Figma':
        return Figma;
      case 'Compass':
        return Compass;
      case 'Palette':
        return Palette;
      default:
        return Code;
    }
  };

  return (
    <section id="services" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 05. My Offerings
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white">
              Bespoke Digital & <br />
              <span className="font-serif italic text-gold-gradient font-normal">Aesthetic Services</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-xs font-sans tracking-wide leading-relaxed font-light">
            I craft tailored architectures, layouts, brand coordinates, and advertising collateral tailored to make high-end projects stand out.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card glass-card-hover p-8 md:p-10 rounded-3xl border border-white/5 relative flex flex-col justify-between group"
              >
                {/* Micro glow element */}
                <div className="absolute top-0 left-0 w-32 h-32 bg-[#cc9933]/5 rounded-full filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Service Icon */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 w-fit mb-8 group-hover:border-[#cc9933]/40 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-[#cc9933]" />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 font-light font-sans text-sm md:text-base leading-relaxed mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="border-t border-white/5 pt-8 mt-4">
                  <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500 mb-4">
                    Key Deliverables
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-xs text-gray-300 font-sans">
                        <span className="p-1 rounded bg-[#cc9933]/10 border border-[#cc9933]/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-[#cc9933]" />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
