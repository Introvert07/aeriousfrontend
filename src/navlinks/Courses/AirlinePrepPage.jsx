import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Award, CheckCircle, Send, ChevronDown, ShieldCheck, 
  Map, Compass, Zap, Plane, Users, BookOpen, Clock, FileCheck,
  Globe 
} from 'lucide-react';

// --- ASSET IMPORT ---
import airlineHero from '../../assets/AEE-IMG.webp'; 

const AirlinePrepPage = () => {
  const headerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const courseFeatures = [
    { title: "JEPPESEN CHARTS", desc: "Jeppesen Charts is a cornerstone of modern aviation navigation." },
    { title: "Aerodynamics", desc: "Principles that enable flight and optimize performance." },
    { title: "Navigation", desc: "Techniques for effective flight planning and modern aids." },
    { title: "Meteorology", desc: "Weather analysis and its impact on flight safety." },
    { title: "JET AIRCRAFT ENGINES", desc: "In-depth knowledge of complex aircraft components." },
    { title: "Human Factors", desc: "Psychological and physiological elements of piloting." }
  ];

  const stages = [
    {
      title: "Stage 1: Ground Classes (2-3 Months)",
      items: [
        
        "Police Verification & Class 2 Medical",
        "Computer Number from Pariksha Portal",
        "Profile Creation on eGCA",
        "Class 1 Medical (IAF/DGCA Hospital)",
        "DGCA Written Exams (Nav, Met, Regs)"
      ]
    },
    {
      title: "Stage 2: Training Abroad (12-15 Months)",
      items: [
        "Flying training in South Africa",
        "Issue of South African CPL",
        "Radio LICENCE & ELP Level 4"
      ]
    },
    {
      title: "Stage 3: Conversion (1-2 Months)",
      items: [
        "Flight Tests in DGCA Approved Institute",
        "Document compilation & Paperwork",
        "Issue of Indian CPL by DGCA"
      ]
    }
  ];

  const faqs = [
    { q: "What is the Airline Entrance Exam?", a: "The Airline Entrance Exam assesses candidates’ knowledge and skills required for a career in aviation, including technical knowledge, problem-solving, and aptitude." },
    { q: "What subjects are covered?", a: "Common subjects include mathematics, physics, aviation regulations, general knowledge, and aptitude tests." },
    { q: "How can I prepare effectively?", a: "Effective preparation includes studying relevant subjects, taking practice tests, enrolling in preparatory courses, and reviewing aviation-related materials." }
  ];

  return (
    <div className="bg-[#fcfcfc] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- HERO SECTION (Updated for Responsiveness) --- */}
      <section ref={headerRef} className="relative h-[50vh] md:h-[65vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center md:bg-right-top no-repeat"
          style={{ 
            backgroundImage: `url(${airlineHero})`, 
            y,
            backgroundSize: 'cover' // Ensures image covers the area
          }}
        >
          {/* Gradient Overlay: Adjusted to be more aggressive on mobile for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2e6e] via-[#1a2e6e]/60 to-[#1a2e6e]/20 md:bg-gradient-to-r md:from-[#1a2e6e] md:via-[#1a2e6e]/40 md:to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-8 md:w-12 bg-[#e21d1d]" />
               <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.4em]">Career Path Excellence</span>
            </div>
            <h1 className="text-white text-4xl md:text-7xl font-black uppercase italic leading-tight">
              Airline Entrance <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Preparation</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-12 md:py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 md:gap-16">
          
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-black uppercase mb-6 italic border-b-4 border-[#e21d1d] w-fit pb-2">Course Overview</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 font-medium">
                Specifically designed for individuals seeking to excel in their Commercial Pilot LICENCE (CPL) exams. 
                This comprehensive course covers all essential aspects of aviation knowledge, providing students with 
                the tools and confidence needed for success in airline selection processes.
              </p>
            </div>

            {/* Prerequisites */}
          

            {/* Key Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {courseFeatures.map((feat, i) => (
                <div key={i} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                  <CheckCircle className="text-[#e21d1d] shrink-0" size={20} />
                  <div>
                    <h4 className="font-black uppercase text-sm italic">{feat.title}</h4>
                    <p className="text-xs text-gray-500 font-medium mt-1">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Program Stages */}
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-black uppercase italic text-[#e21d1d]">Roadmap to Command</h2>
              <div className="space-y-4">
                {stages.map((stage, i) => (
                  <div key={i} className="bg-white border border-gray-100 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2rem] shadow-sm">
                    <h3 className="text-lg md:text-xl font-black uppercase mb-4 flex items-center gap-3">
                      <span className="bg-[#1a2e6e] text-white w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm">{i+1}</span>
                      {stage.title}
                    </h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {stage.items.map((item, j) => (
                        <li key={j} className="text-sm text-gray-600 flex items-center gap-2 font-medium">
                          <div className="w-1.5 h-1.5 bg-[#e21d1d] rounded-full shrink-0" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Section */}
            <div className="pt-10">
              <h3 className="text-2xl font-black uppercase italic mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-gray-200 pb-4 cursor-pointer" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <div className="flex justify-between items-center py-2">
                      <h4 className="font-bold text-xs md:text-sm uppercase tracking-tight">{faq.q}</h4>
                      <ChevronDown className={`transition-transform ${openFaq === i ? 'rotate-180' : ''}`} size={18} />
                    </div>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.p 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-sm text-gray-500 font-medium mt-2 leading-relaxed overflow-hidden"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* --- SIDEBAR FORM (Hidden/Visible Adjustments) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 bg-white p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-t-8 border-[#e21d1d]">
              <div className="text-center mb-6 md:mb-8">
                <FileCheck className="mx-auto text-[#1a2e6e] mb-4" size={40} />
                <h3 className="text-xl md:text-2xl font-black uppercase italic tracking-tighter">Application</h3>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Secure Your Future</p>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-4 bg-gray-50 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="email" placeholder="Email" className="w-full p-4 bg-gray-50 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <textarea placeholder="Message" rows="4" className="w-full p-4 bg-gray-50 rounded-xl md:rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm"></textarea>
                <button type="submit" className="w-full bg-[#1a2e6e] text-white font-black py-4 md:py-5 rounded-xl md:rounded-2xl uppercase tracking-widest hover:bg-[#e21d1d] transition-all flex items-center justify-center gap-3 active:scale-95">
                  Submit <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AirlinePrepPage;