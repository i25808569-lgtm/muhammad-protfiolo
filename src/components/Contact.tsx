import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Send, CheckCircle2, Loader2, ArrowUpRight, AlertCircle } from 'lucide-react';
import { useContact } from '../hooks/useContact';

export default function Contact() {
  const {
    formData,
    loading,
    submitted,
    error,
    handleChange,
    sendEmail,
    setSubmitted,
  } = useContact();

  const infoItems = [
    {
      icon: Mail,
      label: 'Email Address',
      value: 'info.ibrahimfazal@gmail.com',
      href: 'mailto:info.ibrahimfazal@gmail.com',
      color: 'text-purple-400 bg-purple-500/10'
    },
    {
      icon: Phone,
      label: 'WhatsApp Direct',
      value: '+92 311 0528929',
      href: 'https://wa.me/923110528929',
      color: 'text-green-400 bg-green-500/10'
    }
  ];

  const socialLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/923110528929' },
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Figma', url: 'https://figma.com' }
  ];

  return (
    <section id="contact" className="relative py-28 px-6 bg-transparent overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-900/10 ambient-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#cc9933] block mb-4">
              / 08. Project Transmission
            </span>
            <h2 className="text-3xl sm:text-5xl font-light font-display tracking-tight text-white">
              Let&apos;s Build <span className="font-serif italic text-gold-gradient font-normal">Something Rare</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-xs font-sans tracking-wide leading-relaxed font-light">
            Have a project, full-time vacancy, or high-end freelancing contract? Fill out the encrypted transmission portal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Contact Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-display font-bold text-white">
                Contact Coordinates
              </h3>
              <p className="text-gray-400 font-sans font-light text-sm leading-relaxed">
                I operate globally, adapting perfectly to international client schedules and maintaining pristine remote delivery speeds.
              </p>
            </div>

            {/* Direct Info List */}
            <div className="flex flex-col gap-5">
              {infoItems.map((item) => {
                const Icon = item.icon;
                const isWhatsApp = item.label === 'WhatsApp Direct';
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-2xl bg-white/[0.02] border transition-all group relative overflow-hidden ${
                      isWhatsApp 
                        ? 'border-green-500/20 hover:border-green-400/40 hover:bg-green-500/[0.03]' 
                        : 'border-white/5 hover:border-[#cc9933]/20 hover:bg-white/[0.04]'
                    }`}
                  >
                    <div className={`p-3 rounded-xl flex items-center justify-center ${item.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="z-10">
                      <div className="text-[10px] uppercase tracking-widest text-gray-500 font-mono flex items-center gap-1.5">
                        {item.label}
                        {isWhatsApp && (
                          <span className="text-[9px] bg-green-500/10 text-green-400 px-1.5 py-0.2 rounded font-sans uppercase">
                            Instant Chat
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-sans font-medium text-white group-hover:text-[#f3e5ab] transition-colors mt-0.5">
                        {item.value}
                      </div>
                    </div>
                    {isWhatsApp && (
                      <span className="absolute -bottom-8 right-4 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-black/90 text-white text-[9px] font-mono py-1 px-2 rounded border border-white/10 whitespace-nowrap z-50 pointer-events-none">
                        Chat on WhatsApp
                      </span>
                    )}
                  </a>
                );
              })}
            </div>

            {/* Premium Social handle list */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] uppercase tracking-widest font-mono text-gray-500">
                Digital Presence Channels
              </h4>
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-xs font-mono uppercase tracking-widest flex items-center gap-1 group transition-colors ${
                      social.name === 'WhatsApp' 
                        ? 'text-green-400 hover:text-green-300' 
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {social.name}
                    <ArrowUpRight className={`w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all ${
                      social.name === 'WhatsApp' ? 'text-green-400' : 'text-[#cc9933]'
                    }`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 relative">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-6"
                  >
                    {/* Error notifications */}
                    {error && (
                      <div className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                        <AlertCircle className="w-4 h-4" />
                        <span>{error}</span>
                      </div>
                    )}

                    {/* Double inputs row: Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2 relative">
                        <label htmlFor="name" className="text-[10px] uppercase tracking-widest font-mono text-gray-400">
                          Full Name <span className="text-[#cc9933]">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cc9933]/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[10px] uppercase tracking-widest font-mono text-gray-400">
                          Email Address <span className="text-[#cc9933]">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="client@agency.com"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cc9933]/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col gap-2 relative">
                      <label htmlFor="phone" className="text-[10px] uppercase tracking-widest font-mono text-gray-400">
                        Phone Number <span className="text-[#cc9933]">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+92 311 0528929"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cc9933]/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600"
                      />
                    </div>

                    {/* Message Box */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="message" className="text-[10px] uppercase tracking-widest font-mono text-gray-400">
                        Detailed Project Brief <span className="text-[#cc9933]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your creative requirements, budget limits, and timeline..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#cc9933]/50 focus:bg-white/[0.08] transition-all placeholder:text-gray-600 resize-none"
                      />
                    </div>

                    {/* Buttons Row (Submit + Direct WhatsApp Option) */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full sm:flex-1 py-4 rounded-xl bg-white text-black font-semibold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-[#f3e5ab] hover:shadow-[0_0_20px_rgba(255,255,255,0.15)] disabled:opacity-50 disabled:pointer-events-none transition-all cursor-pointer"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-black" />
                            Transmitting secure brief...
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5 text-black" />
                            Send Project Brief
                          </>
                        )}
                      </button>

                      <a
                        href="https://wa.me/923110528929"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full sm:w-auto py-4 px-6 rounded-xl border border-green-500/30 bg-green-500/5 text-green-400 font-mono text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-green-500/10 hover:border-green-400 transition-all duration-300"
                        title="Chat on WhatsApp"
                      >
                        <Phone className="w-4 h-4 text-green-400" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 mb-6 animate-bounce">
                      <CheckCircle2 className="w-12 h-12" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-2">
                      Message sent successfully!
                    </h3>
                    <p className="text-gray-400 text-sm max-w-sm font-sans font-light leading-relaxed mb-6">
                      I will contact you soon.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-xs font-mono uppercase tracking-widest text-white hover:bg-white/5 transition-all cursor-pointer"
                    >
                      Return to Portal
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
