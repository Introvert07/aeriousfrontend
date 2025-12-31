import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  UserCheck, Award, ChevronDown, 
  CircleCheck, Send, PlaneTakeoff, Clock, Navigation, Compass
} from 'lucide-react';

// --- ASSET IMPORT ---
import courseImg from '../../assets/PPL-IMG.webp';

const PrivatePilotLICENCE = () => {
  const headerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  // Parallax Logic
  
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const faqs = [
    { 
      q: "What is a Private Pilot LICENCE (PPL)?", 
      a: "A PPL allows you to fly an aircraft for personal, non-commercial use." 
    },
    { 
      q: "What are the eligibility requirements for a PPL?", 
      a: "You must be at least 16 years old, have completed 10th grade, and hold a Class II Medical certificate." 
    },
    { 
      q: "How long does it take to complete PPL training?", 
      a: "Training typically requires 40-50 hours of flight time and varies based on individual progress." 
    },
    { 
      q: "What topics are covered in PPL training?", 
      a: "Topics include flight fundamentals, navigation, emergency procedures, and flight regulations." 
    },
    { 
      q: "Do I need to know English for PPL training?", 
      a: "Yes, proficiency in English is required for understanding instructions and communications." 
    }
  ];

  return (
    <div className="bg-[#f8f9fa] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- PARALLAX HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${courseImg})`, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e6e] via-[#1a2e6e]/80 lg:via-[#1a2e6e]/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-8 md:w-12 bg-[#e21d1d]" />
               <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">Personal Aviation</span>
            </div>
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black uppercase italic leading-[0.9] md:leading-[0.85]">
              Private Pilot <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>LICENCE (PPL)</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          
          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-8 space-y-12 md:space-y-16">
            
            {/* Intro Block */}
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-8 tracking-tighter italic">Private Pilot Licence</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-medium mb-6">
                A Private Pilot LICENCE (PPL) allows individuals to operate an aircraft for personal use, without pay. It provides essential knowledge and skills for future pilot training, enabling flights day and night in visual conditions.
              </p>
            </div>

            {/* Prerequisites Block */}
            <div className="bg-gray-50 p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
               <h3 className="text-xl md:text-2xl font-black uppercase mb-6 md:mb-8 flex items-center gap-3">
                 <UserCheck className="text-[#e21d1d]" /> Prerequisites
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Applicant must be at least 17 years of age",
                  "Applicant must hold a Class 2 Medical",
                  "Experience— Not less than 40 hrs of flight time",
                  "Medical Fitness— Approved practitioner certificate",
                  "Education— 10th or equivalent Examination",
                  "Skill— Examiner competency check within 6 months",
                  "Proficiency in reading/speaking English"
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start p-2">
                    <CircleCheck size={18} className="text-[#1a2e6e] shrink-0 mt-1" />
                    <span className="text-sm font-bold text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Details Block */}
            <div className="bg-[#1a2e6e] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl relative overflow-hidden">
               <Compass className="absolute -bottom-10 -right-10 text-white opacity-5" size={200} />
               <h3 className="text-2xl md:text-3xl font-black uppercase mb-4 italic text-[#e21d1d]">Course Details</h3>
               <p className="mb-8 opacity-90 leading-relaxed font-medium text-sm md:text-base">
                To obtain a PPL Licence, candidates must pass DGCA PPL exams in the following subjects:
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {["Air Regulations", "Aviation Meteorology", "Air Navigation", "Technical General", "Technical Specific"].map((sub, i) => (
                    <div key={i} className="bg-white/10 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
                       <span className="text-[10px] md:text-xs font-black uppercase tracking-widest">{sub}</span>
                    </div>
                  ))}
               </div>
            </div>

            {/* Key Features */}
            <div className="space-y-8">
               <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Key Features</h3>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { title: "Personal Use", desc: "Earn the basic pilot LICENCE certification (FAA/ICAO PPL).", icon: <Award className="text-[#e21d1d]" /> },
                    { title: "Fun & Leisure", desc: "PPL holder can fly solo for fun and leisure.", icon: <PlaneTakeoff className="text-[#e21d1d]" /> },
                    { title: "Short-Term", desc: "Requires 40-50 hours of flying experience.", icon: <Clock className="text-[#e21d1d]" /> },
                    { title: "Advanced Path", desc: "Opportunity to advance to CPL and ATPL programs.", icon: <Navigation className="text-[#e21d1d]" /> }
                  ].map((feature, i) => (
                    <div key={i} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                      <div className="mb-4">{feature.icon}</div>
                      <h4 className="font-black text-sm uppercase mb-2">{feature.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
                    </div>
                  ))}
               </div>
            </div>

            {/* Program Roadmap */}
            <div className="space-y-8 md:space-y-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Program Overview</h3>
              <div className="space-y-10 border-l-2 border-gray-100 ml-2 md:ml-4 pl-6 md:pl-8 relative">
                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#e21d1d] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-lg md:text-xl">Stage 1: Ground Classes (2-3 months)</h4>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                        {["Board Verification", "Police Verification", "Class 2 Medical", "EGCA Profile", "DGCA Written Exams"].map((item, i) => (
                          <div key={i} className="text-[10px] md:text-[12px] font-bold text-gray-500 flex items-center gap-2 uppercase">
                             <div className="w-1 h-1 bg-[#e21d1d] rounded-full" /> {item}
                          </div>
                        ))}
                    </div>
                 </div>

                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#1a2e6e] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-lg md:text-xl">Stage 2: Flying Training</h4>
                    <p className="text-xs md:text-sm text-gray-500 mt-2 font-medium leading-relaxed italic">
                      Training in US, Spain, Australia, Philippines & South Africa.
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-4 mt-10 lg:mt-0">
            <div className="lg:sticky lg:top-10 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border-t-8 border-[#e21d1d]">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-6 italic tracking-tighter">Enquire Now</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <textarea placeholder="Message" rows="4" className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm"></textarea>
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
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-10 md:mb-16 italic tracking-tighter">Questions?</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 md:p-6 text-left"
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

export default PrivatePilotLICENCE;