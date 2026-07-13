import { motion } from 'motion/react';
import { Award, Compass, BookOpen, Target } from 'lucide-react';

export default function About() {
  const cards = [
    {
      icon: Award,
      title: 'Aesthetic Purity',
      desc: 'Developing interfaces where every single pixel serves a logical and aesthetic purpose. I refuse mediocre design structures.',
      color: 'border-yellow-500/20 text-[#cc9933]'
    },
    {
      icon: Compass,
      title: 'Multidisciplinary Vision',
      desc: 'Mastering both code compilation and artistic design curves. Bridging technical performance with high-end poster and logo arts.',
      color: 'border-cyan-500/20 text-cyan-400'
    },
    {
      icon: BookOpen,
      title: 'Strategic Growth',
      desc: 'Obsessively researching performance engineering, headless e-commerce, reactive components, and Swiss modern typography concepts.',
      color: 'border-purple-500/20 text-purple-400'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'The Design Origins',
      desc: 'Discovered an absolute passion for branding, monograms, vector graphics, and posters. Mastered Adobe Illustrator and Photoshop grid designs.'
    },
    {
      year: '2023',
      title: 'The Frontend Expansion',
      desc: 'Bridged physical graphics with web interfaces. Mastered HTML, modern CSS, JavaScript, and React to compile fully interactive layouts.'
    },
    {
      year: '2025',
      title: 'The Full-Stack Synthesis',
      desc: 'Deep dived into Node, Express, database integrations, Framer Motion animations, and API development. Designed sophisticated commerce systems.'
    },
    {
      year: '2026',
      title: 'Multidisciplinary Prime',
      desc: 'Consulting globally for elite agencies and high-end startups, providing complete branding vector assets, high-fidelity UI/UX, and robust web apps.'
    }
  ];

  return (
    <section id="about" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-blue-900/5 ambient-glow -translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 01. The Creator
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white mb-6">
              Bridging the boundary of <br />
              <span className="font-serif italic text-gold-gradient font-normal">Visual Art & Digital Logic</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-sm font-sans tracking-wide leading-relaxed font-light">
            I am Muhammad Ibrahim Fazal, a visionary creator who believes that great code and premium aesthetics are two sides of the exact same coin.
          </p>
        </div>

        {/* Narrative & Info cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-28">
          {/* Detailed Bio */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <p className="text-gray-300 font-sans font-light leading-relaxed text-base">
              My journey began in the visual spectrum. I spent years perfecting the art of branding—understanding color theory, typography hierarchy, vector nodes, and geometric alignment. Designing minimalist logos and posters trained my eye for precision.
            </p>
            <p className="text-gray-300 font-sans font-light leading-relaxed text-base">
              However, design alone wasn&apos;t enough. I wanted to build what I designed. I wanted those curves to move, those grids to respond, and those layouts to compute. I expanded my skill set into Full Stack development, turning static posters into cinematic animated websites.
            </p>
            <div className="h-[1px] w-full bg-white/10 my-4" />
            <div className="flex gap-8 items-center">
              <div>
                <div className="text-3xl font-display font-bold text-white mb-1">50+</div>
                <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Projects Finished</div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="text-3xl font-display font-bold text-white mb-1">99%</div>
                <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Client Satisfaction</div>
              </div>
              <div className="h-8 w-[1px] bg-white/10" />
              <div>
                <div className="text-3xl font-display font-bold text-[#cc9933] mb-1">100%</div>
                <div className="text-xs font-mono uppercase tracking-widest text-gray-500">Creative Focus</div>
              </div>
            </div>
          </div>

          {/* Philosophy Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl border flex flex-col gap-4 text-left"
                >
                  <div className={`p-3 rounded-xl bg-white/5 border border-white/5 w-fit ${card.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-display font-semibold text-white">{card.title}</h3>
                  <p className="text-xs text-gray-400 font-sans font-light leading-relaxed">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Career Timeline */}
        <div className="pt-16 border-t border-white/5">
          <h3 className="text-xs font-mono uppercase tracking-[0.3em] text-gray-500 mb-16 text-center">
            My Creative Chronology
          </h3>
          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Timeline horizontal background bar */}
            <div className="absolute top-0 left-4 md:left-0 md:top-4 w-[2px] md:w-full h-full md:h-[2px] bg-white/5 z-0" />

            {milestones.map((step, idx) => (
              <motion.div
                key={step.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 }}
                className="relative pl-8 md:pl-0 pt-0 md:pt-12 group z-10"
              >
                {/* Timeline node marker */}
                <div className="absolute left-3.5 md:left-0 top-0 md:top-3 w-3 h-3 rounded-full bg-[#cc9933] transform -translate-x-1/2 flex items-center justify-center shadow-[0_0_15px_rgba(204,153,51,0.6)] group-hover:scale-125 transition-transform duration-300">
                  <div className="w-1 h-1 bg-white rounded-full" />
                </div>

                <div className="font-display font-bold text-2xl md:text-3xl text-gold-gradient mb-3">
                  {step.year}
                </div>
                <h4 className="font-display font-semibold text-base text-white mb-2 group-hover:text-[#f3e5ab] transition-colors">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-400 font-sans font-light leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
