import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Clock, Navigation, ArrowUpRight } from 'lucide-react';

const ContactPage = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  // Google Maps Embed URL for Noida Sector 45
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.647367464016!2d77.34863927549781!3d28.550329975709513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5e07663458b%3A0x6a086055018659d4!2sAmrapali%20Sapphire%20Phase%202!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-[#fcfdfe] py-10 md:py-16 px-4 md:px-12 font-sans selection:bg-[#e21d1d] selection:text-white overflow-x-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#1a2e6e 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- 1. HEADER SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-slate-100">
            <Globe size={14} className="animate-pulse" /> Flight Operations Center
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#1a2e6e] tracking-tighter italic uppercase mb-6 leading-tight md:leading-none">
            Get In <span className="text-[#e21d1d]">Touch</span>
          </h1>
          <p className="max-w-xl mx-auto text-slate-500 font-medium text-base md:text-lg leading-relaxed">
            Our dispatch team is ready for your inquiry. Reach out via the terminal below.
          </p>
        </motion.div>

        {/* --- 2. THE BIG MAP --- */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 md:mb-16 relative"
        >
          {/* Decorative Frame */}
          <div className="absolute -inset-2 md:-inset-4 bg-slate-100/50 rounded-[2.5rem] md:rounded-[4rem] -z-10 blur-xl" />
          
          <div className="rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden h-[350px] md:h-[550px] shadow-[0_32px_64px_-16px_rgba(26,46,110,0.15)] border-[6px] md:border-[12px] border-white relative group">
            {/* Map Status Overlay */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20 bg-[#1a2e6e] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl font-black text-[8px] md:text-[10px] uppercase tracking-widest shadow-2xl flex items-center gap-3">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping" />
              Live HQ Signal: Noida, UP
            </div>

            <iframe 
              src={mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Aerius Aviators HQ"
              className="grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-105 group-hover:scale-100"
            ></iframe>
          </div>
        </motion.div>

        {/* --- 3. DUAL COLUMN INFO & FORM --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* LEFT: INFO CARDS */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 grid grid-cols-1 gap-4 md:gap-6"
          >
            {[
              { icon: MapPin, title: "Operations HQ", content: "1701, Tower N, Amrapali Sapphire, Noida Sec-45, 201303", color: "bg-[#1a2e6e]" },
              { icon: Phone, title: "Support Line", content: "+91 9999769084", color: "bg-[#e21d1d]" },
              { icon: Mail, title: "Dispatch Email", content: "info@aeriusaviators.com", color: "bg-blue-500" },
              { icon: Clock, title: "Duty Hours", content: "Mon - Sat: 09:00 - 18:00 IST", color: "bg-slate-800" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white p-6 md:p-7 rounded-[2rem] md:rounded-[2.5rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-50 flex items-center gap-4 md:gap-6 group cursor-default"
              >
                <div className={`${item.color} p-4 md:p-5 rounded-[1.2rem] md:rounded-[1.5rem] text-white shadow-lg transition-transform group-hover:rotate-12 shrink-0`}>
                  <item.icon size={22} className="md:w-[26px] md:h-[26px]" />
                </div>
                <div>
                  <h3 className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{item.title}</h3>
                  <p className="text-[#1a2e6e] font-extrabold text-sm md:text-base leading-tight">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: MODERN CONTACT FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 md:p-14 rounded-[2.5rem] md:rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] border border-white relative"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-50 rounded-full blur-3xl -z-10 hidden md:block" />
            
            <form className="space-y-6 md:space-y-7">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Pilot Name</label>
                  <input type="text" placeholder="Enter Full Name" className="w-full px-6 md:px-8 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50/50 border border-slate-100 focus:border-[#e21d1d] focus:bg-white outline-none transition-all font-bold text-[#1a2e6e] placeholder:text-slate-300" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input type="email" placeholder="name@domain.com" className="w-full px-6 md:px-8 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50/50 border border-slate-100 focus:border-[#e21d1d] focus:bg-white outline-none transition-all font-bold text-[#1a2e6e] placeholder:text-slate-300" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Communication Link</label>
                <input type="tel" placeholder="+91 00000 00000" className="w-full px-6 md:px-8 py-4 md:py-5 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50/50 border border-slate-100 focus:border-[#e21d1d] focus:bg-white outline-none transition-all font-bold text-[#1a2e6e] placeholder:text-slate-300" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Flight Query / Message</label>
                <textarea rows="4" placeholder="How can we assist your training?" className="w-full px-6 md:px-8 py-5 md:py-6 rounded-[1.8rem] md:rounded-[2.5rem] bg-slate-50/50 border border-slate-100 focus:border-[#e21d1d] focus:bg-white outline-none transition-all font-bold text-[#1a2e6e] placeholder:text-slate-300 resize-none"></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02, backgroundColor: "#e21d1d" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1a2e6e] text-white py-5 md:py-6 rounded-[1.5rem] md:rounded-[2rem] font-black uppercase tracking-[0.3em] text-[10px] md:text-xs flex items-center justify-center gap-4 shadow-2xl shadow-blue-900/20 transition-all"
              >
                Execute Transmission <Send size={18} className="rotate-12" />
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* --- 4. FOOTER --- */}
        <div className="mt-16 md:mt-24 pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 pb-8">
           <div className="flex gap-6 md:gap-8">
              {['Instagram', 'LinkedIn', 'YouTube'].map(social => (
                <a key={social} href="#" className="group flex items-center gap-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#1a2e6e] transition-colors">
                  {social} <ArrowUpRight size={12} className="group-hover:-translate-y-1 transition-transform" />
                </a>
              ))}
           </div>
           <p className="text-[9px] md:text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em] text-center">© 2024 Aerius Aviators Academy</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;