import { motion } from 'motion/react';
import { TESTIMONIALS_DATA } from '../data';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/3 w-[350px] h-[350px] bg-blue-900/10 rounded-full ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 07. Social Proof
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white">
              Client <span className="font-serif italic text-gold-gradient font-normal">Endorsements</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-light tracking-wide leading-relaxed">
            Collaborating with global brands, tech-focused agencies, and luxury boutiques to bring beautiful concepts to fruition.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 rounded-3xl border border-white/5 flex flex-col justify-between relative group hover:border-[#cc9933]/20 hover:shadow-[0_15px_35px_-15px_rgba(204,153,51,0.05)] transition-all duration-300"
            >
              {/* Quote icon banner background */}
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-[#cc9933]/5 transition-colors duration-300 pointer-events-none">
                <Quote className="w-14 h-14" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#cc9933] text-[#cc9933]" />
                  ))}
                </div>

                {/* Feedback Comment */}
                <p className="text-gray-300 font-sans font-light leading-relaxed text-sm italic mb-8 relative z-10">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
              </div>

              {/* Client Info */}
              <div className="border-t border-white/5 pt-6 flex items-center gap-4">
                {/* Custom Initial Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#cc9933]/20 to-yellow-600/10 border border-[#cc9933]/30 flex items-center justify-center text-xs font-display font-bold text-white uppercase shadow-md">
                  {testimonial.name.substring(0, 2)}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm font-display tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-mono mt-0.5">
                    {testimonial.role}, <span className="text-gray-400">{testimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
