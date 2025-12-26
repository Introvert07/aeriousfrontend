import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, Globe, Award, CheckCircle, Send, 
  ChevronDown, ShieldCheck, Map, Compass, Zap ,GraduationCap // <--- Added this to the import
} from 'lucide-react';

// --- ASSET IMPORT ---
// Replace with your actual ground school related image
import groundSchoolHero from '../../assets/new4.jpeg'; 

const GroundSchoolPage = () => {
  const headerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Parallax Logic
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const authorities = [
    {
      title: "DGCA (India)",
      subtitle: "Mastering the Indian Skies",
      desc: "The gateway to an Indian CPL. Deep-dive coaching into Air Navigation, Aviation Meteorology, Air Regulations, and Technical subjects focusing on the latest DGCA question patterns.",
      tags: ["Air Navigation", "Meteorology", "Regulations"]
    },
    {
      title: "EASA (Europe)",
      subtitle: "The Gold Standard of Theory",
      desc: "Globally recognized for depth and rigor. Structured training for 13 EASA ATPL/CPL subjects, emphasizing safety and technical precision required for European airspace.",
      tags: ["13 ATPL Subjects", "European Standards", "Safety"]
    },
    {
      title: "FAA (USA)",
      subtitle: "The World’s Largest Market",
      desc: "Focus on practical application and American airspaces. Modules cover Federal Aviation Regulations (FARs) to advanced cross-country planning.",
      tags: ["FARs", "Cross-Country", "FAA Written"]
    },
    {
      title: "SACAA (South Africa)",
      subtitle: "African Certification",
      desc: "Specialized ground classes tailored to regulatory requirements and navigational nuances of the South African aviation environment.",
      tags: ["Navigation", "SACAA Rules", "Southern Hemisphere"]
    },
    {
      title: "TCCA (Canada)",
      subtitle: "North American Training",
      desc: "Covers PSTAR, CPL, and INRAT requirements, focusing on high-level meteorological and regulatory knowledge needed for Canadian skies.",
      tags: ["PSTAR", "INRAT", "Canadian Weather"]
    },
    {
      title: "NZCAA (New Zealand)",
      subtitle: "Precision in the Pacific",
      desc: "Unique understanding of island meteorology and performance charts. Targeted classes to handle the Kiwi syllabus with confidence.",
      tags: ["Island Weather", "Performance Charts", "NZCAA"]
    }
  ];

  return (
    <div className="bg-[#f8f9fa] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[70vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${groundSchoolHero})`, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e6e] via-[#1a2e6e]/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-12 bg-[#e21d1d]" />
               <span className="text-white text-xs font-black uppercase tracking-[0.4em]">The Foundation of Flight</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase italic leading-[0.85]">
              Global Ground <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>School</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- INTRO SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-16">
            <div className="relative">
              <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter italic border-b-4 border-[#e21d1d] w-fit pb-2">
                Excellence in Theory
              </h2>
              <p className="text-xl leading-relaxed text-gray-700 font-medium mb-6">
                At Aerius Pilot Academy, we believe the cockpit is an office where knowledge is as critical as skill. 
                Our Ground School is a high-performance training hub designed to bridge the gap between complex 
                aeronautical theory and practical flight deck application.
              </p>
            </div>

            {/* --- AUTHORITIES GRID --- */}
            <div className="grid md:grid-cols-2 gap-8">
              {authorities.map((auth, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-2 h-8 bg-[#e21d1d]" />
                      <h3 className="text-xl font-black uppercase italic tracking-tighter">{auth.title}</h3>
                    </div>
                    <h4 className="text-[#e21d1d] text-xs font-black uppercase tracking-widest mb-4">{auth.subtitle}</h4>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">{auth.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {auth.tags.map(tag => (
                      <span key={tag} className="text-[10px] bg-gray-100 px-3 py-1 rounded-full font-bold text-[#1a2e6e] uppercase">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* --- WHY STUDY HERE? --- */}
            <div className="bg-[#1a2e6e] text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
               <BookOpen className="absolute -bottom-10 -right-10 text-white opacity-5" size={300} />
               <h3 className="text-3xl font-black uppercase mb-8 italic text-[#e21d1d]">Why Aerius Ground School?</h3>
               
               <div className="grid md:grid-cols-2 gap-8 relative z-10">
                 {[
                   { icon: <Globe />, title: "6 Global Authorities", text: "Coaching for India, USA, Europe, Canada, NZ, and SA under one roof." },
                   { icon: <Zap />, title: "Modern Pedagogy", text: "Using visual aids and cockpit simulators to make theory come alive." },
                   { icon: <Compass />, title: "Mock Exam Series", text: "Rigorous testing under real conditions to ensure you are 'Result Ready'." },
                   { icon: <ShieldCheck />, title: "Global Flexibility", text: "Choose your destination without worrying about theory hurdles." }
                 ].map((item, i) => (
                   <div key={i} className="space-y-3">
                     <div className="text-[#e21d1d]">{item.icon}</div>
                     <h4 className="font-black uppercase tracking-tight italic">{item.title}</h4>
                     <p className="text-sm opacity-80 font-medium leading-relaxed">{item.text}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          {/* --- SIDEBAR FORM --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border-t-8 border-[#e21d1d]">
              <div className="text-center mb-8">
                <GraduationCap className="mx-auto text-[#1a2e6e] mb-4" size={48} />
                <h3 className="text-2xl font-black uppercase italic tracking-tighter">Enroll in Theory</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Start Your Academic Journey</p>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm text-gray-500 font-bold">
                  <option>Select Course (e.g. DGCA, EASA)</option>
                  <option>DGCA - India</option>
                  <option>EASA - Europe</option>
                  <option>FAA - USA</option>
                  <option>Other</option>
                </select>
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <textarea placeholder="Any specific requirements?" rows="4" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm"></textarea>
                <button className="w-full bg-[#1a2e6e] text-white font-black py-5 rounded-2xl uppercase tracking-widest hover:bg-[#e21d1d] transition-colors flex items-center justify-center gap-3">
                  Get Syllabus <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- VISUAL DECORATION --- */}
      
    </div>
  );
};

export default GroundSchoolPage;