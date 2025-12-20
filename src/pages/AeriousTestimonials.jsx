import React, { useState } from 'react';
import { Star, Award, ShieldCheck } from 'lucide-react';

// 1. IMPORT YOUR LOCAL ASSETS
import pilot1 from '../assets/mukharjee.webp';
import pilot2 from '../assets/gaurav.webp';
import pilot3 from '../assets/abbasi.webp';
import pilot4 from '../assets/akshay.webp';
import pilot5 from '../assets/ankit.webp';

const TestimonialsCarousel = () => {
  const [activeId, setActiveId] = useState(null);

  const reports = [
    { id: 1, name: "Captain Sabyasachi Mukherjee", airline: "Etihad Airways", text: "Capt. Saurabh Bhatnagar's exceptional teaching and mentorship played a pivotal role in my CPL journey. His dedication and expertise paved the way for my successful career.", img: pilot1 },
    { id: 2, name: "Captain Gaurav Dua", airline: "TRI IndiGo", text: "I'm grateful for Capt. Saurabh Bhatnagar's expert guidance. His invaluable mentorship and industry insights helped me secure a job and thrive as a commercial pilot.", img: pilot2 },
    { id: 3, name: "Captain Raamish Bin Saeed Abbasi", airline: "Air India Express", text: "Capt. Saurabh Bhatnagar's leadership and unwavering support were instrumental in shaping my CPL training and subsequent career. I'm forever grateful.", img: pilot3 },
    { id: 4, name: "Captain Akshay Sharma", airline: "Indigo", text: "I owe my success as a commercial pilot to Capt. Saurabh Bhatnagar's outstanding instruction. His passion for excellence inspired me to reach new heights.", img: pilot4 },
    { id: 5, name: "Captain Ankit Sinha", airline: "Air India Express", text: "Exceptional instructor, outstanding mentor! Capt. Saurabh Bhatnagar's impact on my aviation career is invaluable.", img: pilot5 }
  ];

  return (
    <div className="bg-white py-10 md:py-20 font-sans overflow-hidden">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 20s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
        @media (min-width: 768px) {
          .animate-marquee {
            animation-duration: 40s;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        }
      `}</style>

      {/* HEADING SECTION */}
      <div className="max-w-4xl mx-auto px-6 mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <ShieldCheck size={14} className="text-red-600 md:w-[18px]" />
          <span className="text-[8px] md:text-[11px] font-black uppercase tracking-[0.3em] text-blue-900/60">Verified Alumni</span>
        </div>
        <h2 className="text-2xl md:text-5xl font-[1000] uppercase tracking-tighter text-blue-950 leading-tight">
          Success <span className="text-red-600">Stories</span>
        </h2>
        <div className="h-1 w-10 md:w-20 bg-red-600 mx-auto mt-3 rounded-full" />
      </div>

      {/* INFINITE CAROUSEL */}
      <div className="relative">
        {/* Fade edges - Thinner on mobile */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className={`animate-marquee flex gap-3 md:gap-8 px-2 ${activeId !== null ? 'paused' : ''}`}>
          {[...reports, ...reports].map((pilot, index) => {
            const isActive = activeId === index;
            return (
              <div 
                key={index} 
                onClick={() => setActiveId(isActive ? null : index)}
                className={`w-[250px] md:w-[420px] flex flex-col p-4 md:p-8 rounded-xl md:rounded-[2rem] border transition-all duration-500 cursor-pointer select-none
                  ${isActive 
                    ? 'bg-white shadow-xl border-red-200 scale-[1.02] z-20' 
                    : 'bg-slate-50/50 border-slate-100 grayscale md:grayscale-0 md:hover:bg-white md:hover:shadow-2xl'
                  }`}
              >
                <div className="flex items-start justify-between mb-3 md:mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} fill="#eab308" className="text-yellow-500 md:w-[14px]" />
                    ))}
                  </div>
                  <Award size={16} className={`${isActive ? 'text-red-600' : 'text-blue-900/10'}`} />
                </div>

                {/* Smaller text on mobile to keep card height manageable */}
                <p className="text-blue-950 text-[11px] md:text-sm font-medium italic leading-relaxed mb-5 md:mb-8 flex-grow">
                  "{pilot.text}"
                </p>
                
                <div className="flex items-center gap-3 md:gap-4 pt-3 md:pt-6 border-t border-slate-200/40">
                  <div className="w-9 h-9 md:w-14 md:h-14 rounded-full overflow-hidden border-2 border-white shadow-sm flex-shrink-0 bg-slate-200">
                    <img 
                      src={pilot.img} 
                      alt={pilot.name} 
                      className={`w-full h-full object-cover transition-all duration-500 
                        ${isActive ? 'grayscale-0 scale-110' : 'grayscale md:grayscale-0'}`} 
                    />
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="text-[9px] md:text-xs font-black uppercase text-blue-950 truncate tracking-tight">
                      {pilot.name}
                    </h3>
                    <p className="text-[7px] md:text-[10px] font-bold text-red-600 uppercase tracking-widest truncate mt-0.5">
                      {pilot.airline}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 text-center px-4">
        <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed">
          {activeId !== null 
            ? "Animation Paused • Tap card again to resume" 
            : "Trusted by pilots across 15+ Global Airlines"}
        </p>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;