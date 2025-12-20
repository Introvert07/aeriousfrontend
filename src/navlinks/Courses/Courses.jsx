import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Plane, ShieldCheck, GraduationCap, Navigation, Award, Compass } from 'lucide-react';

// --- IMPORT ASSETS ---
import imgIR from '../../assets/IR-IMG.webp';
import imgCPL from '../../assets/CPL-IMG.webp';
import imgPPL from '../../assets/PPL-IMG.webp';
import imgPrep from '../../assets/AEE-IMG.webp';
import imgInstructor from '../../assets/FIC-IMG.webp';
import imgNight from '../../assets/NR-IMG.webp';
import headerBg from '../../assets/courseimg1.jpg';

const Courses = () => {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });
  
  // Header Animation Maps
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const courseData = [
    {
      title: "Instrument Rating",
      image: imgIR,
      description: "Master the cockpit. Learn to navigate through clouds and low visibility using advanced radio and satellite systems.",
      tag: "Advanced Ops",
      icon: <Navigation className="text-[#e21d1d]" size={24} />,
    },
    {
      title: "Commercial Pilot",
      image: imgCPL,
      description: "The ultimate career milestone. Command multi-engine aircraft and fly for the world's leading airline carriers.",
      tag: "Career Professional",
      icon: <Plane className="text-[#e21d1d]" size={24} />,
    },
    {
      title: "Private Pilot License",
      image: imgPPL,
      description: "The gateway to flight. Perfect for personal travel or as the foundational step for your professional pilot career.",
      tag: "Standard Entry",
      icon: <Compass className="text-[#e21d1d]" size={24} />,
    },
    {
      title: "Airline Entrance Prep",
      image: imgPrep,
      description: "Bridge the gap between CPL and the Cockpit. Intense training for psychometric, technical, and simulator assessments.",
      tag: "Success Oriented",
      icon: <Award className="text-[#e21d1d]" size={24} />,
    },
    {
      title: "Flight Instructor",
      image: imgInstructor,
      description: "Master the art of teaching. Develop the communication and technical skills required to train the next generation.",
      tag: "Elite Trainer",
      icon: <GraduationCap className="text-[#e21d1d]" size={24} />,
    },
    {
      title: "Night Rating",
      image: imgNight,
      description: "Own the night skies. Specialized training for takeoffs, landings, and navigation in nocturnal conditions.",
      tag: "Essential Skill",
      icon: <ShieldCheck className="text-[#e21d1d]" size={24} />,
    }
  ];

  return (
    <div className="bg-[#fcfcfc] font-sans antialiased overflow-x-hidden">
      
      {/* --- MODERNIZED CLASSIC HEADER --- */}
      <section ref={headerRef} className="relative h-[450px] md:h-[550px] flex items-center justify-center overflow-hidden bg-[#203a8c]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: `url(${headerBg})`,
            y,
            scale
          }}
        >
          {/* Multi-layered Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#203a8c]/80 via-[#203a8c]/40 to-[#203a8c]/95" />
          
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 text-center px-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6"
          >
            <div className="h-[1px] md:h-[2px] w-8 md:w-12 bg-[#e21d1d]" />
            <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] md:tracking-[0.4em]">Aerius Aviators</span>
            <div className="h-[1px] md:h-[2px] w-8 md:w-12 bg-[#e21d1d]" />
          </motion.div>

          <h1 className="text-white text-5xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">
            Flight <br />
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.8)' }}>Programs</span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 0.5 }}
            className="text-white mt-6 md:mt-8 max-w-lg mx-auto text-xs md:text-base font-medium leading-relaxed tracking-wide"
          >
            Advance your career with DGCA-certified training modules designed for the next generation of professional aviators.
          </motion.p>
        </motion.div>

        {/* Decorative Compass SVG - Hidden on small mobile to avoid clutter */}
        <div className="absolute -bottom-10 -right-10 md:-bottom-20 md:-right-20 opacity-5 md:opacity-10 text-white rotate-12 pointer-events-none">
            <Compass size={200} className="md:w-[400px] md:h-[400px]" strokeWidth={1} />
        </div>
      </section>

      {/* --- RESPONSIVE GRID SECTION --- */}
      <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {courseData.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                <div className="relative h-56 md:h-64 overflow-hidden shrink-0">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-b from-[#e21d1d]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6">
                    <span className="bg-white/95 backdrop-blur-md text-[#203a8c] text-[9px] md:text-[10px] font-black px-3 py-1.5 md:px-4 md:py-2 rounded-full uppercase tracking-tighter shadow-sm">{course.tag}</span>
                  </div>
                </div>

                <div className="p-6 md:p-8 relative flex-grow flex flex-col">
                  {/* Icon Box responsive sizing */}
                  <div className="absolute -top-6 md:-top-8 right-6 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-[#203a8c] rounded-xl flex items-center justify-center shadow-xl group-hover:-translate-y-2 transition-transform duration-500 border-[3px] md:border-4 border-white">
                    {React.cloneElement(course.icon, { size: 20, className: "md:w-6 md:h-6 text-[#e21d1d]" })}
                  </div>
                  
                  <h3 className="text-[#1a2e6e] text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight mb-3 md:mb-4 group-hover:text-[#e21d1d] transition-colors">{course.title}</h3>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-6 md:mb-8 font-medium italic flex-grow">"{course.description}"</p>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 pt-5 md:pt-6 mt-auto">
                    <div className="flex -space-x-2">
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#203a8c]" />
                        <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white bg-[#e21d1d]" />
                    </div>
                    <button className="flex items-center gap-2 text-[#203a8c] font-black text-[10px] md:text-xs uppercase tracking-widest border-b-2 border-[#e21d1d] pb-1 hover:text-[#e21d1d] transition-colors">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
                {/* Underline animation */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#e21d1d] group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Decorative Text in Background - Hidden on small screens to avoid overflow issues */}
      <div className="hidden lg:block fixed bottom-10 -left-10 text-[10rem] xl:text-[15rem] font-black text-[#203a8c]/[0.02] -z-10 select-none pointer-events-none uppercase italic">Aviation</div>
    </div>
  );
};

export default Courses;