import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, BookOpen, GraduationCap, ChevronDown, 
  CheckCircle2, Send, Clock, Plane, Table, ShieldCheck 
} from 'lucide-react';

// --- ASSET IMPORT ---
import cplHeaderImg from '../../assets/CPL-IMG.webp';

const CommercialPilotLICENCE = () => {
  const headerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  // --- FORM STATE ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const recipient = "director@aeriuspilotacademy.com";
    const subject = encodeURIComponent(`CPL Career Inquiry - ${formData.name}`);
    
    const body = encodeURIComponent(
      `Aerius Admissions Office,\n\n` +
      `I am writing to express my interest in the Commercial Pilot Licence (CPL) program.\n\n` +
      `--- APPLICANT PROFILE ---\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}\n\n` +
      `Please provide more information regarding the enrollment window and fee structure.`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const faqs = [
    { 
      q: "What is a Commercial Pilot LICENCE (CPL)?", 
      a: "A CPL allows you to be compensated for flying and pursue a professional career as a pilot." 
    },
    { 
      q: "What are the eligibility requirements for a CPL?", 
      a: "You must be at least 18 years old, hold a PPL, and have a Class 1 Medical certificate." 
    },
    { 
      q: "How long does it take to complete CPL training?", 
      a: "Training duration varies, but it typically requires 200 hours of flight time, including specific training hours." 
    },
    { 
      q: "What topics are covered in CPL training?", 
      a: "Key subjects include aviation regulations, navigation, meteorology, flight planning, and advanced flight maneuvers." 
    },
    { 
      q: "Can I work as a pilot immediately after obtaining my CPL?", 
      a: "Yes, with a CPL, you can apply for commercial pilot jobs, but additional ratings may be required for specific aircraft." 
    }
  ];

  return (
    <div className="bg-[#f8f9fa] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- PARALLAX HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cplHeaderImg})`, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e6e] via-[#1a2e6e]/80 lg:via-[#1a2e6e]/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-8 md:w-12 bg-[#e21d1d]" />
               <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Professional Career</span>
            </div>
            <h1 className="text-white text-4xl sm:text-6xl md:text-8xl font-black uppercase italic leading-[0.9] md:leading-[0.85]">
              Commercial <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Pilot Licence</span>
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
              <h2 className="text-3xl md:text-4xl font-black uppercase mb-6 md:mb-8 tracking-tighter italic">CPL (Commercial pilot licence)</h2>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-medium border-l-4 border-[#e21d1d] pl-4 md:pl-6">
                A Commercial Pilot LICENCE (CPL) is a professional LICENCE that permits the holder to receive payment for their piloting services. It marks a crucial step for anyone aspiring to a career in aviation.
              </p>
            </div>

            {/* Prerequisites Block */}
            <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm">
                <h3 className="text-xl md:text-2xl font-black uppercase mb-6 md:mb-8 flex items-center gap-3 underline decoration-[#e21d1d] decoration-4 underline-offset-8">
                  <ShieldCheck className="text-[#e21d1d] shrink-0" /> Prerequisites
                </h3>
                <div className="space-y-3 text-xs md:text-sm font-bold text-gray-600 uppercase tracking-tight">
                {[
                  "Applicant must be at least 18 years of age for issuance of Commercial Pilot Licence",
                  "Applicant must hold a Class 1 Medical",
                  "Knowledge— Pass written examination in Air Regulations, Navigation, Meteorology and Signals.",
                  "Should be able to read, write, understand and speak English (ELP-4)",
                  "200 hrs of flight time as pilot within a period of five years.",
                  "Skill— Competency to perform manoeuvres within six months of application."
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 md:gap-4 items-start p-3 bg-gray-50 rounded-xl">
                    <CheckCircle2 size={16} className="text-[#e21d1d] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Details Block */}
            <div className="bg-[#1a2e6e] text-white p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] shadow-xl">
                <h3 className="text-2xl md:text-3xl font-black uppercase mb-6 italic text-[#e21d1d]">Course Details</h3>
                <p className="mb-8 opacity-90 leading-relaxed text-sm md:text-base">
                 The theory phase covers subjects like Air Navigation and Aviation Meteorology. After theory, candidates pass DGCA CPL exams.
                </p>
                
                {/* Responsive Table Wrapper */}
                <div className="overflow-x-auto rounded-2xl border border-white/20 mb-8 bg-white/5 backdrop-blur-md">
                  <table className="w-full text-left text-xs md:text-sm min-w-[300px]">
                    <thead className="bg-[#e21d1d] text-white font-black uppercase">
                      <tr>
                        <th className="p-3 md:p-4">Course Content</th>
                        <th className="p-3 md:p-4">Hours</th>
                      </tr>
                    </thead>
                    <tbody className="font-bold">
                      {[
                        ["Total flying", "200"],
                        ["Pilot in command", "100"],
                        ["Dual Single engine", "85"],
                        ["Multi engine", "15"],
                        ["Simulator", "20"]
                      ].map(([label, hrs], i) => (
                        <tr key={i} className="border-b border-white/10 italic">
                          <td className="p-3 md:p-4">{label}</td>
                          <td className="p-3 md:p-4">{hrs}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="space-y-4 text-xs md:text-sm opacity-80 border-t border-white/10 pt-6 italic">
                  <p>Those planning to undergo flight training abroad are exempt from the Technical exam in India.</p>
                </div>
            </div>

            {/* Program Roadmap */}
            <div className="space-y-8 md:space-y-12">
              <h3 className="text-2xl md:text-3xl font-black uppercase italic tracking-tighter">Program Overview</h3>
              <div className="space-y-10 border-l-2 border-gray-100 ml-2 md:ml-4 pl-6 md:pl-8 relative">
                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#e21d1d] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-lg md:text-xl">Stage 1: Ground Classes (2-3 months)</h4>
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                        {["10th/12th Verification", "Police Verification", "Class 2 Medical", "Computer Number", "Class 1 Medical", "DGCA Written Exams"].map((item, i) => (
                          <div key={i} className="text-[10px] md:text-[12px] font-bold text-gray-500 flex items-center gap-2 uppercase tracking-tight">
                             <div className="w-1 h-1 bg-[#e21d1d] rounded-full" /> {item}
                          </div>
                        ))}
                    </div>
                 </div>

                 <div className="relative">
                    <div className="absolute -left-[33px] md:-left-[41px] top-0 w-4 h-4 md:w-5 md:h-5 bg-[#1a2e6e] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-lg md:text-xl">Stage 2: Flying Abroad (12-15 months)</h4>
                    <p className="text-xs md:text-sm text-gray-500 mt-3 font-medium leading-relaxed">
                      Training in US, Spain, Australia, or South Africa. Issue of Foreign CPL.
                    </p>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="lg:sticky lg:top-10 bg-white p-6 md:p-8 rounded-[2rem] shadow-2xl border-t-8 border-[#e21d1d]">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-6 italic tracking-tighter">Career Inquiry</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Full Name" 
                  className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm font-bold text-[#1a2e6e]" 
                />
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address" 
                  className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm font-bold text-[#1a2e6e]" 
                />
                <input 
                  type="tel" 
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number" 
                  className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm font-bold text-[#1a2e6e]" 
                />
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message" 
                  rows="4" 
                  className="w-full p-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm font-bold text-[#1a2e6e] resize-none"
                ></textarea>
                <button type="submit" className="w-full bg-[#1a2e6e] text-white font-black py-4 md:py-5 rounded-xl uppercase tracking-widest hover:bg-[#e21d1d] transition-colors flex items-center justify-center gap-3 text-xs md:text-sm">
                  Submit <Send size={16} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-16 md:py-24 px-4 md:px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black uppercase text-center mb-10 md:mb-16 italic tracking-tighter">FAQs</h2>
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
                      <div className="p-5 md:p-6 pt-0 text-gray-600 leading-relaxed font-medium text-sm md:text-[15px] border-t border-white">
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

export default CommercialPilotLICENCE;