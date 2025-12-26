import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Globe, MapPin, CheckCircle2, Plane, X, Maximize2 } from 'lucide-react';
import heroImg from '../../assets/nz-flight.jpg';

// --- ASSET IMPORTS ---
import nz from '../../assets/nzimg/nz.jpg'; 
import nz2 from '../../assets/nzimg/nz2.jpg';
import nz3 from '../../assets/nzimg/nz3.jpg';

const NZPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: headerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const galleryImages = [nz, nz2, nz3];

  return (
    <div className="bg-[#fcfcfc] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- MODERN LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
            className="fixed inset-0 z-[100] bg-[#1a2e6e]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.button 
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} strokeWidth={1} />
            </motion.button>
            
            <motion.img 
              layoutId={selectedImg}
              src={selectedImg}
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[70vh] md:h-[80vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImg})`, y }}>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a2e6e]/90 via-[#1a2e6e]/40 to-[#fcfcfc]" />
        </motion.div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[2px] w-12 bg-[#e21d1d]" />
              <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.4em]">NZCAA Pilot Training</span>
            </div>
            <h1 className="text-white text-5xl md:text-8xl font-black uppercase italic leading-[0.9] tracking-tighter">
              NEW ZEALAND <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>PACIFIC SKIES</span>
            </h1>
            <div className="mt-8 bg-[#e21d1d] text-white px-8 py-3 inline-block font-black uppercase italic tracking-widest rounded-full shadow-lg">
              Cost: NZD 115,000
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-12 md:py-24 px-4 md:px-6 max-w-7xl mx-auto relative -mt-24 z-20">
        <div className="bg-white p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl border border-gray-100 grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8">
            <header className="mb-10">
                <h2 className="text-3xl md:text-5xl font-black uppercase italic text-[#1a2e6e] leading-tight">
                    Flying Training <br/>
                    <span className="text-[#e21d1d]">In New Zealand (NZCAA)</span>
                </h2>
                <p className="text-[#e21d1d] font-black uppercase tracking-[0.2em] mt-4 flex items-center gap-2 text-sm">
                  <MapPin size={18} /> Oamaru Airport, North Otago
                </p>
            </header>

            <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p className="font-bold text-[#1a2e6e] border-l-4 border-[#e21d1d] pl-6 italic">
                Learn to fly in one of the world’s most stunning and peaceful aviation settings. Oamaru Airport offers quiet airspace and scenic landscapes.
              </p>
              <p>
                CPL students benefit from modern training facilities, small batch learning, and a vibrant aviation culture. New Zealand’s clear skies and inspiring environment make every flight unforgettable.
              </p>
            </div>

            {/* --- DYNAMIC GRID (3 Images) --- */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* First image spans full width in the 2-column grid for visual balance */}
              <motion.div
                layoutId={galleryImages[0]}
                onClick={() => setSelectedImg(galleryImages[0])}
                className="md:col-span-2 group relative h-72 md:h-96 rounded-[2.5rem] overflow-hidden cursor-zoom-in bg-gray-100 shadow-lg"
              >
                <img src={galleryImages[0]} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="NZ Training" />
                <div className="absolute inset-0 bg-[#1a2e6e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                        <Maximize2 className="text-white" size={24} />
                    </div>
                </div>
              </motion.div>

              {/* Remaining two images */}
              {galleryImages.slice(1).map((img, index) => (
                <motion.div
                  key={index}
                  layoutId={img}
                  onClick={() => setSelectedImg(img)}
                  className="group relative h-64 md:h-80 rounded-[2.5rem] overflow-hidden cursor-zoom-in bg-gray-100 shadow-lg"
                >
                  <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="NZ Training" />
                  <div className="absolute inset-0 bg-[#1a2e6e]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md p-4 rounded-full border border-white/30">
                        <Maximize2 className="text-white" size={24} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* --- SIDEBAR CARD --- */}
          <div className="lg:col-span-4">
            <div className="bg-[#1a2e6e] p-10 rounded-[3rem] text-white sticky top-24 shadow-2xl overflow-hidden border border-white/5">
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#e21d1d] rounded-2xl flex items-center justify-center mb-8 rotate-3 shadow-lg">
                    <Globe className="text-white" size={32} />
                </div>
                
                <h3 className="text-2xl font-black uppercase mb-6 tracking-tight italic">NZ Advantage</h3>
                
                <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-white/60">
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#e21d1d]" /> Quiet Airspace</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#e21d1d]" /> Small Batch Sizes</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#e21d1d]" /> Reliable Weather</li>
                  <li className="flex items-center gap-3"><CheckCircle2 size={18} className="text-[#e21d1d]" /> Stunning Scenery</li>
                </ul>

                <button className="group relative w-full mt-10 bg-[#e21d1d] text-white py-5 rounded-2xl font-black uppercase italic overflow-hidden transition-all active:scale-95 shadow-[0_10px_30px_-10px_rgba(226,29,29,0.5)]">
                  <span className="relative z-10">Enquire Now</span>
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="absolute inset-0 z-20 flex items-center justify-center text-[#1a2e6e] translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    Enquire Now
                  </span>
                </button>
              </div>

              <Plane size={280} className="absolute -right-20 -bottom-20 text-white/5 -rotate-12 pointer-events-none" />
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default NZPage;