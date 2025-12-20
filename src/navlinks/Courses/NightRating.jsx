import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Star, ChevronDown, CheckCircle2, Send, Navigation, ShieldCheck 
} from 'lucide-react';

// --- ASSET IMPORT ---
import nightImg from '../../assets/NR-INSIDE.png';

const NightRating = () => {
  const headerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const faqs = [
    { 
      q: "What is a Night Rating?", 
      a: "A Night Rating allows pilots to operate aircraft after sunset, enhancing their flying privileges and skills for night flying." 
    },
    { 
      q: "What are the eligibility requirements for obtaining a Night Rating?", 
      a: "You must hold at least a Private Pilot License (PPL) and meet specific flight time requirements, usually including a minimum number of daytime flight hours." 
    },
    { 
      q: "How many flight hours are required for a Night Rating?", 
      a: "Typically, you need a minimum of 10 hours of night flight training, including a certain number of solo flight hours at night." 
    },
    { 
      q: "What topics are covered in Night Rating training?", 
      a: "Training includes night navigation, meteorology, aircraft lighting systems, and emergency procedures specific to night flying." 
    },
    { 
      q: "Do I need to pass a test to obtain a Night Rating?", 
      a: "Yes, you must complete both a practical flight test and may also be required to pass a written exam." 
    }
  ];

  return (
    <div className="bg-[#f8f9fa] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- PARALLAX HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-[#0a0f1e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${nightImg})`, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1e] via-[#0a0f1e]/80 lg:via-[#0a0f1e]/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-8 md:w-12 bg-[#e21d1d]" />
               <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">Extended Privileges</span>
            </div>
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black uppercase italic leading-[0.9] md:leading-[0.85]">
              Night <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Rating</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-8 space-y-10 md:space-y-16">
            
            {/* Intro Block */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-8 tracking-tighter italic">Night Rating</h2>
              <p className="text-lg md:text-xl leading-relaxed text-[#e21d1d] font-black mb-4 md:mb-6 uppercase italic">
                A Night Rating enables you to fly and carry passengers after dark.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium">
                Some of the most enjoyable and relaxing flying experiences occur once the sun sets. Earning a Night Rating is an excellent way to build on the skills you gained while obtaining your Private License.
              </p>
            </div>

            {/* Prerequisites Block */}
            <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border-2 border-gray-100 shadow-sm relative overflow-hidden">
               <h3 className="text-xl md:text-2xl font-black uppercase mb-6 md:mb-8 flex items-center gap-3">
                 <ShieldCheck className="text-[#e21d1d]" /> Prerequisites
               </h3>
               <div className="space-y-3 md:space-y-4">
                {[
                  "Applicant must be at least 18 years of age",
                  "Applicant must hold a Class 1 Medical",
                  "English proficiency (Read, Write, Speak)"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 md:gap-4 items-center p-3 md:p-4 bg-gray-50 rounded-2xl">
                    <CheckCircle2 size={20} className="text-[#1a2e6e] shrink-0" />
                    <span className="text-xs md:text-sm font-black uppercase tracking-tight text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Details Block */}
            <div className="bg-[#1a2e6e] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden">
               <Star className="absolute top-6 right-6 md:top-10 md:right-10 text-white opacity-10 animate-pulse" size={40} />
               <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 italic text-[#e21d1d]">Course Details</h3>
               <p className="mb-6 md:mb-8 opacity-90 leading-relaxed font-medium text-base md:text-lg italic">
                A Night Rating permits you to serve as pilot-in-command of an aircraft from sunset until sunrise, offering greater flexibility in your scheduling.
               </p>
               
               

               <div className="space-y-4 md:space-y-6 border-t border-white/10 pt-6 md:pt-8">
                 <h4 className="text-lg md:text-xl font-black uppercase tracking-tight flex items-center gap-2">
                   <Navigation size={20} className="text-[#e21d1d]" /> What's included?
                 </h4>
                 
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                      <h5 className="text-[#e21d1d] font-black text-[10px] md:text-xs mb-2 uppercase">Phase 01</h5>
                      <p className="text-[11px] md:text-xs font-bold uppercase leading-tight">Theoretical Knowledge Instruction</p>
                    </div>
                    <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                      <h5 className="text-[#e21d1d] font-black text-[10px] md:text-xs mb-2 uppercase">Phase 02</h5>
                      <p className="text-[11px] md:text-xs font-bold uppercase leading-tight">4 hours of dual flight instruction at night</p>
                    </div>
                    <div className="bg-white/5 p-5 md:p-6 rounded-2xl border border-white/10">
                      <h5 className="text-[#e21d1d] font-black text-[10px] md:text-xs mb-2 uppercase">Phase 03</h5>
                      <p className="text-[11px] md:text-xs font-bold uppercase leading-tight">1 hour PIC with 5 touch-and-goes</p>
                    </div>
                 </div>
               </div>
            </div>

            {/* Program Roadmap */}
            <div className="space-y-8 md:space-y-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Program Overview</h3>
              <div className="space-y-10 border-l-2 border-gray-100 ml-2 md:ml-4 pl-6 md:pl-8 relative">
                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#e21d1d] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-lg md:text-xl leading-tight">Stage 1: Ground Classes (2-3 months)</h4>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {["Board Verification", "Police Verification", "Class 2 Medical", "EGCA Profile", "DGCA Exams"].map((item, i) => (
                          <div key={i} className="text-[10px] md:text-[12px] font-bold text-gray-500 flex items-center gap-2 uppercase">
                             <div className="w-1 h-1 bg-[#e21d1d] rounded-full" /> {item}
                          </div>
                        ))}
                    </div>
                 </div>

                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#1a2e6e] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-lg md:text-xl leading-tight">Stage 2: Flying Training (Abroad)</h4>
                    <p className="text-[11px] md:text-sm text-gray-500 mt-2 font-medium">12-15 months in US, Spain, Australia, or South Africa.</p>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-10 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border-t-8 border-[#e21d1d]">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-6 italic tracking-tighter">Submit Intel</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <textarea placeholder="Your Message" rows="4" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm"></textarea>
                <button className="w-full bg-[#1a2e6e] text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-[#e21d1d] transition-colors flex items-center justify-center gap-3 text-sm">
                  Submit <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-10 md:mb-16 italic tracking-tighter">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden bg-gray-50 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left transition-all"
                >
                  <span className={`font-black uppercase text-xs md:text-sm tracking-tight ${openFaq === i ? 'text-[#e21d1d]' : 'text-[#1a2e6e]'}`}>{faq.q}</span>
                  <ChevronDown size={20} className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-[#e21d1d]' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="p-5 md:p-6 pt-0 text-gray-600 leading-relaxed font-medium text-xs md:text-[15px] border-t border-white">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NightRating;