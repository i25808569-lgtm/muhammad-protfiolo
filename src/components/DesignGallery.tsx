import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { ArrowUpRight, Maximize2, X, Download, ZoomIn } from 'lucide-react';

export default function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'design' | 'logo'>('all');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Filter project data for graphic creations (posters & logos)
  const graphicWorks = PROJECTS_DATA.filter((work) => {
    if (activeCategory === 'all') return work.category === 'design' || work.category === 'logo';
    return work.category === activeCategory;
  });

  return (
    <section id="gallery" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-900/10 rounded-full ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 04. Creative Showcase
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white">
              Design <span className="font-serif italic text-gold-gradient font-normal">Gallery</span>
            </h2>
          </div>

          {/* Filtering Tabs */}
          <div className="flex bg-white/5 border border-white/10 p-1 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setActiveCategory('design')}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'design'
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Posters
            </button>
            <button
              onClick={() => setActiveCategory('logo')}
              className={`px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                activeCategory === 'logo'
                  ? 'bg-white text-black font-semibold'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Logos
            </button>
          </div>
        </div>

        {/* Gallery Masonry-style Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {graphicWorks.map((work, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                key={work.id}
                className="group relative rounded-2xl overflow-hidden border border-white/5 bg-zinc-950 aspect-[3/4] cursor-pointer"
                onClick={() => setLightboxImage(work.imageUrl)}
              >
                {/* Image */}
                <img
                  src={work.imageUrl}
                  alt={work.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Elegant overlay shadow panel (glares up on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Magnify lens icon overlay */}
                <div className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom text info */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#cc9933] block mb-1">
                    {work.category === 'design' ? 'Premium Poster Art' : 'Luxury Monogram'}
                  </span>
                  <h3 className="text-lg font-display font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {work.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-sans font-light mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 line-clamp-2">
                    {work.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modern Lightbox Overlay */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
            onClick={() => setLightboxImage(null)}
            id="gallery-lightbox-overlay"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/5 border border-white/15 text-white hover:bg-white hover:text-black transition-colors z-50 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox Inner Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="relative max-w-4xl max-h-[85vh] overflow-hidden rounded-2xl flex items-center justify-center bg-zinc-950 border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Fullscreen Graphic Creation"
                className="max-w-full max-h-[85vh] object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
