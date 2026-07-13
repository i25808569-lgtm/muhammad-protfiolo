import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';
import { ArrowUpRight, Github, ExternalLink, Globe, Calendar, User, Layers, X } from 'lucide-react';

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background radial overlays */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-900/10 rounded-full ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 03. Highlighted Works
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white">
              Featured <span className="font-serif italic text-gold-gradient font-normal">Masterpieces</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs font-light tracking-wide leading-relaxed">
            A selective compilation of full stack web applications, luxury monograms, and architectural typographic posters.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS_DATA.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="group cursor-pointer relative"
              onClick={() => setSelectedProject(project)}
            >
              {/* Image Box */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/5 bg-zinc-950">
                {/* Elegant overlay gradient on hover */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />

                {/* Actual generated high-fidelity project asset */}
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                {/* Tech tag list overlay */}
                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-20">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-black/70 border border-white/10 text-gray-300 backdrop-blur-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-black/70 border border-white/10 text-gray-300 backdrop-blur-md">
                      +{project.techStack.length - 3} More
                    </span>
                  )}
                </div>

                {/* Hover CTA Indicator */}
                <div className="absolute top-6 right-6 z-20 p-3 rounded-full bg-white text-black shadow-lg translate-x-4 -translate-y-4 opacity-0 group-hover:translate-x-0 group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Title & category */}
              <div className="mt-6 flex items-start justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#cc9933] font-mono mb-2 block">
                    {project.category === 'web' ? 'Web Application' : project.category === 'logo' ? 'Logo Branding' : 'Poster Design'}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-[#f3e5ab] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                  className="text-xs font-mono uppercase tracking-widest text-gray-400 group-hover:text-[#cc9933] transition-colors flex items-center gap-1.5"
                >
                  Details <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Brief Description */}
              <p className="mt-3 text-sm text-gray-400 font-light tracking-wide leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modern Detail Lightbox Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
            id="project-lightbox-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ duration: 0.5, cubicBezier: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-[#050505] border border-white/10 rounded-3xl overflow-hidden max-h-[90vh] overflow-y-auto flex flex-col no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Lightbox Banner Hero */}
              <div className="relative aspect-video md:aspect-[21/9] w-full bg-zinc-950">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/30 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/60 border border-white/10 text-white hover:bg-white hover:text-black transition-colors z-30 cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono tracking-widest bg-[#cc9933]/20 border border-[#cc9933]/30 text-[#f3e5ab] backdrop-blur-md uppercase">
                    {selectedProject.category} Project
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold font-display tracking-tight text-white mt-3">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Meta information & details */}
              <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                {/* Context & Description */}
                <div className="md:col-span-8 flex flex-col gap-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-2">
                      Brief Narrative
                    </h3>
                    <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base font-sans">
                      {selectedProject.details}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 mb-3">
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider bg-white/5 border border-white/5 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Metadata list & Actions */}
                <div className="md:col-span-4 flex flex-col gap-6 bg-white/[0.02] border border-white/5 p-6 rounded-2xl">
                  <div className="flex flex-col gap-4 text-xs font-sans">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-500 flex items-center gap-1.5 font-mono"><User className="w-3.5 h-3.5 text-[#cc9933]" /> Client</span>
                      <span className="text-white font-medium">{selectedProject.client}</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <span className="text-gray-500 flex items-center gap-1.5 font-mono"><Layers className="w-3.5 h-3.5 text-purple-400" /> Role</span>
                      <span className="text-white font-medium text-right max-w-[180px] truncate">{selectedProject.role}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 flex items-center gap-1.5 font-mono"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> Year</span>
                      <span className="text-white font-medium">{selectedProject.year}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-white/5">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full px-4 py-3 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-widest text-center flex items-center justify-center gap-2 hover:bg-[#f3e5ab] transition-colors"
                      >
                        <Globe className="w-4 h-4" /> Visit Live Project
                      </a>
                    )}
                    {selectedProject.codeUrl && (
                      <a
                        href={selectedProject.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 font-semibold text-xs font-mono uppercase tracking-widest text-center flex items-center justify-center gap-2 transition-all"
                      >
                        <Github className="w-4 h-4" /> View Repository
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
