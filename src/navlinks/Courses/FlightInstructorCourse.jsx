import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  GraduationCap, BookOpen, Users, ChevronDown, 
  CheckCircle, Send, Clock, Navigation, Award, ShieldCheck 
} from 'lucide-react';

// --- ASSET IMPORT ---
import instructorHeaderImg from '../../assets/FIC-INSIDE.jpg';

const FlightInstructorCourse = () => {
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
      q: "What is a Flight Instructor Course?", 
      a: "A Flight Instructor Course trains pilots to teach others how to fly, enabling them to become certified Flight Instructors." 
    },
    { 
      q: "What are the prerequisites for enrolling in a Flight Instructor Course?", 
      a: "You must hold a Commercial Pilot License (CPL) and typically have a minimum number of flight hours, often around 250 hours." 
    },
    { 
      q: "How long does the Flight Instructor Course take?", 
      a: "The duration varies by program, but it generally takes a few weeks to a few months to complete." 
    },
    { 
      q: "What subjects are covered in the Flight Instructor Course?", 
      a: "Topics include teaching techniques, lesson planning, aviation regulations, and advanced flight maneuvers." 
    },
    { 
      q: "Do I need a specific medical certification to enroll?", 
      a: "Yes, you must have at least a Class II Medical certificate." 
    }
  ];

  return (
    <div className="bg-[#f8f9fa] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- PARALLAX HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[70vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${instructorHeaderImg})`, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e6e] via-[#1a2e6e]/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-12 bg-[#e21d1d]" />
               <span className="text-white text-xs font-black uppercase tracking-[0.4em]">Leadership in Aviation</span>
            </div>
            <h1 className="text-white text-6xl md:text-8xl font-black uppercase italic leading-[0.85]">
              Flight Instructor <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Course</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT SECTION --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT COLUMN: CONTENT */}
          <div className="lg:col-span-8 space-y-16">
            
            {/* Intro Block */}
            <div className="relative">
              <h2 className="text-4xl font-black uppercase mb-8 tracking-tighter italic border-b-4 border-[#e21d1d] w-fit pb-2">Flight Instructor Course</h2>
              <p className="text-xl leading-relaxed text-gray-700 font-medium mb-6">
                Are you ready to kickstart your career as a Flight Instructor? For many aviation enthusiasts, becoming a Flight Instructor is a dream come true, allowing them to turn their passion for flying into a rewarding career while enjoying the benefits of teaching. Additionally, instructors can accumulate flying hours and earn money as they work towards becoming international Commercial Pilots.
              </p>
            </div>

            {/* Prerequisites Block */}
            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm relative overflow-hidden">
               <h3 className="text-2xl font-black uppercase mb-8 flex items-center gap-3">
                 <ShieldCheck className="text-[#e21d1d]" /> Prerequisites
               </h3>
               <div className="grid md:grid-cols-1 gap-4 text-sm font-bold text-gray-600 uppercase tracking-tight">
                {[
                  "Applicant must be at least 18 years of age for issuance of Flight Instructor Course",
                  "Applicant must hold a Class 1 Medical",
                  "Should be able to read , write , understand and speak English"
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center p-4 bg-gray-50 rounded-2xl">
                    <CheckCircle size={20} className="text-[#1a2e6e] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Details Block */}
            <div className="bg-[#1a2e6e] text-white p-10 rounded-[3rem] shadow-xl relative overflow-hidden">
               <Users className="absolute -bottom-10 -right-10 text-white opacity-5" size={300} />
               <h3 className="text-3xl font-black uppercase mb-6 italic text-[#e21d1d]">Course Details</h3>
               <p className="mb-8 opacity-90 leading-relaxed font-medium">
                During your practical skill test, you will be evaluated on your ability to operate the aircraft from the right-hand seat and perform all maneuvers accurately and within established limits. You must also demonstrate your teaching skills both on the ground and in the air, ensuring safe aircraft operations throughout the student’s learning experience.
               </p>
               
               <div className="bg-white/10 p-6 rounded-2xl border border-white/20 backdrop-blur-sm mb-8">
                 <div className="flex items-center gap-3 mb-4">
                   <Clock className="text-[#e21d1d]" />
                   <h4 className="font-black uppercase tracking-widest text-sm">Practical Training Requirement</h4>
                 </div>
                 <p className="text-sm font-medium">The practical training includes a minimum of 30 hours of flight instruction, divided into two stages.</p>
               </div>

               <h4 className="text-xl font-black uppercase mb-6 flex items-center gap-3 text-[#e21d1d]">
                 Requirements for Flight Instructor Course
               </h4>
               <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    "The pilot must be at least 18 years of age.",
                    "You need to be physically fit for flying and instructing and hold a Class 1 Medical Certific",
                    "The pilot must have at least 200 hours of flight time under IFR",
                    "The pilot must have at least a commercial pilot license"
                  ].map((req, i) => (
                    <li key={i} className="flex gap-2 text-xs font-bold uppercase tracking-tight opacity-80">
                      <Award size={16} className="shrink-0" /> {req}
                    </li>
                  ))}
               </ul>
            </div>

            {/* Program Roadmap */}
            <div className="space-y-12">
              <h3 className="text-3xl font-black uppercase italic tracking-tighter">Program Overview</h3>
              <div className="space-y-10 border-l-2 border-gray-100 ml-4 pl-8 relative">
                 <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#e21d1d] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-xl">Stage 1: Ground Classes in India (2-3 months)</h4>
                    <div className="mt-4 grid md:grid-cols-2 gap-x-8 gap-y-3">
                       {[
                         "10TH And 12TH Board Verification", "Police Verification", "Class 2 Medical from DGCA Approved Medical Examiner",
                         "Computer Number from DGCA Exam Portal \"Pariksha\"", "Profile Creation on Egca (e-Governance of Civil Aviation)",
                         "Class 1 Medical at IAF Medical Centre/ DGCA Approved Civil hospital", "VISA Formalities",
                         "DGCA written Exam in Air Navigation, Meteorology and Air Regulations"
                       ].map((item, i) => (
                         <div key={i} className="text-[12px] font-bold text-gray-500 flex items-center gap-2 uppercase">
                            <div className="w-1 h-1 bg-[#e21d1d] rounded-full" /> {item}
                         </div>
                       ))}
                    </div>
                 </div>

                 <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#1a2e6e] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-xl">Stage 2: Flying Training ABROAD (12-15 months)</h4>
                    <p className="text-sm text-gray-500 mt-3 font-medium leading-relaxed italic">
                      Flying training in US, SPAIN, AUSTRALIA, NEW ZEALAND, PHILIPPINES & SOUTH AFRICA. Issue of FOREIGN CPL, Radio Licence and ELP Certificate level 4.
                    </p>
                 </div>

                 <div className="relative">
                    <div className="absolute -left-[41px] top-0 w-5 h-5 bg-[#e21d1d] rounded-full border-4 border-white shadow-sm" />
                    <h4 className="font-black uppercase text-[#1a2e6e] text-xl">Stage 3: Flying Test and Licence Conversion (1-2 months)</h4>
                    <div className="mt-3 space-y-2 text-sm text-gray-500 font-medium">
                      <p>Flight Tests in India in DGCA Approved Flying Training Institute</p>
                      <p>Compilation of documents, paperwork and submission to DGCA</p>
                      <p className="font-black text-[#1a2e6e] uppercase tracking-widest pt-2 underline decoration-[#e21d1d]">Issue of Indian CPL by DGCA</p>
                    </div>
                 </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 bg-white p-8 rounded-[2.5rem] shadow-2xl border-t-8 border-[#e21d1d]">
              <h3 className="text-2xl font-black uppercase mb-6 italic tracking-tighter text-center">Join Our Faculty</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="email" placeholder="Email Address" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                <textarea placeholder="Tell us about your flight experience..." rows="4" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm"></textarea>
                <button className="w-full bg-[#1a2e6e] text-white font-black py-5 rounded-2xl uppercase tracking-widest hover:bg-[#e21d1d] transition-colors flex items-center justify-center gap-3">
                  Inquire Now <Send size={18} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="py-24 px-6 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase text-center mb-16 italic tracking-tighter underline underline-offset-[12px] decoration-[#e21d1d] decoration-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50 shadow-sm">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left transition-all"
                >
                  <span className={`font-black uppercase text-sm tracking-tight ${openFaq === i ? 'text-[#e21d1d]' : 'text-[#1a2e6e]'}`}>{faq.q}</span>
                  <ChevronDown size={20} className={`transform transition-transform ${openFaq === i ? 'rotate-180 text-[#e21d1d]' : ''}`} />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: 'auto', opacity: 1 }} 
                      exit={{ height: 0, opacity: 0 }}
                    >
                      <div className="p-6 pt-0 text-gray-600 leading-relaxed font-medium text-[15px] border-t border-white">
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

export default FlightInstructorCourse;