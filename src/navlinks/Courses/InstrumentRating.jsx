import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Navigation, CheckCircle, Clock, Globe, 
  ChevronDown, ShieldAlert, BookOpen, Compass, Send 
} from 'lucide-react';

// --- ASSET IMPORT ---
import irInsideImg from '../../assets/IR-INSIDE-IMG.jpg';

const InstrumentRating = () => {
  const headerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const faqs = [
    { 
      q: "What is an Instrument Rating (IR)?", 
      a: "An IR allows pilots to fly under instrument flight rules (IFR), enabling them to operate in a wider range of weather conditions." 
    },
    { 
      q: "What are the eligibility requirements for obtaining an IR?", 
      a: "You must hold a Private Pilot LICENCE (PPL) or Commercial Pilot LICENCE (CPL) and have a Class II Medical certificate." 
    },
    { 
      q: "How many flight hours are required for an Instrument Rating?", 
      a: "Generally, a minimum of 40 hours of instrument flight training is required, along with specific cross-country flight time." 
    },
    { 
      q: "What subjects are covered in IR training?", 
      a: "Training includes topics such as navigation, flight planning, instrument procedures, and weather interpretation." 
    },
    { 
      q: "Can I use a simulator for my Instrument Rating training?", 
      a: "Yes, up to 20 hours of instrument training can be conducted in an approved simulator." 
    }
  ];

  return (
    <div className="bg-[#f8f9fa] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- PARALLAX HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${irInsideImg})`, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e6e] via-[#1a2e6e]/80 lg:via-[#1a2e6e]/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-8 md:w-12 bg-[#e21d1d]" />
               <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">Advanced Aviation</span>
            </div>
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black uppercase italic leading-[0.9] md:leading-[0.85]">
              Instrument <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Rating</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN BODY SECTION --- */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: FULL CONTENT */}
          <div className="lg:col-span-8 space-y-10 md:space-y-16">
            
            {/* Intro Block */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-8 tracking-tighter italic">Instrument Rating</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium mb-4 md:mb-6">
                An Instrument Rating (IR) is a qualification obtained through comprehensive training focused on flying using only aircraft instruments. It is one of the most valuable additions to your pilot licence.
              </p>
              
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                This rating is essential for pilots wishing to operate under Instrument Flight Rules (IFR). It enables pilots to legally and safely fly a properly equipped aircraft solely by reference to flight instruments.
              </p>
            </div>

            {/* Why Section */}
            <div className="bg-[#1a2e6e] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden">
               <Compass className="absolute -bottom-10 -right-10 text-white opacity-5" size={200} />
               <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 md:mb-6 italic text-[#e21d1d]">Why get an instrument rating?</h3>
               <p className="leading-relaxed opacity-90 text-sm md:text-lg">
                Instrument flight training deepens understanding of concepts from private pilot training. Furthermore, you are no longer limited to clear weather; you can file IFR flight plans and fly through clouds safely.
               </p>
            </div>

            {/* Flight Proficiency List */}
            <div>
              <h3 className="text-xl md:text-2xl font-black uppercase mb-6 md:mb-8 flex items-center gap-3">
                <Navigation className="text-[#e21d1d] shrink-0" /> Flight Proficiency
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {[
                  "Pre-flight preparation.", "Pre-flight procedures.", "ATC clearances & procedures.",
                  "Flight by reference to instruments.", "Navigation systems.", "Instrument approach procedures.",
                  "Emergency operations.", "Post-flight procedures."
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl border border-gray-100 shadow-sm">
                    <CheckCircle size={16} className="text-[#e21d1d] shrink-0" />
                    <span className="font-bold text-xs md:text-sm text-[#1a2e6e]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Program Overview */}
            <div className="space-y-8 md:space-y-12 pt-4 md:pt-8">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Program Overview</h3>
              
              {/* Stage 1 */}
              <div className="relative pl-6 md:pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#e21d1d]" />
                <h4 className="text-lg md:text-xl font-black text-[#1a2e6e] mb-2 uppercase">Stage 1: Ground Classes (2-3 months)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mt-4">
                  {[
                     "Police Verification", "Class 2 Medical",
                    "Computer Number (Pariksha)", "Profile Creation on EGCA",
                    "Class 1 Medical", "VISA Formalities", "DGCA Written Exams"
                  ].map((task, i) => (
                    <div key={i} className="text-[12px] md:text-sm text-gray-500 flex items-center gap-2">
                       <div className="w-1 h-1 bg-[#e21d1d] rounded-full" /> {task}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stage 2 */}
              <div className="relative pl-6 md:pl-8 border-l-2 border-gray-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#1a2e6e]" />
                <h4 className="text-lg md:text-xl font-black text-[#1a2e6e] mb-2 uppercase">Stage 2: Flying Training (12-15 months)</h4>
                <p className="text-xs md:text-sm text-gray-500">Global training centers in US, Spain, Australia, & more. Includes Foreign CPL and Radio Licence.</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-10 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border-t-8 border-[#e21d1d]">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-6 italic tracking-tighter">Enquire Now</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <textarea placeholder="Message" rows="4" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm"></textarea>
                <button className="w-full bg-[#1a2e6e] text-white font-black py-4 md:py-5 rounded-2xl uppercase tracking-widest hover:bg-[#e21d1d] transition-colors flex items-center justify-center gap-3 text-xs md:text-sm">
                  Submit <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="bg-white py-16 md:py-24 px-4 md:px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-10 md:mb-16 italic tracking-tighter">FAQs</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl md:rounded-2xl overflow-hidden bg-gray-50 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left transition-all"
                >
                  <span className={`font-black uppercase text-xs md:text-sm tracking-tight ${openFaq === i ? 'text-[#e21d1d]' : 'text-[#1a2e6e]'}`}>{faq.q}</span>
                  <ChevronDown size={18} className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-[#e21d1d]' : ''}`} />
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

export default InstrumentRating;