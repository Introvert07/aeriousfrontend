import React, { useState } from 'react';

// 1. IMPORT LOCAL ASSETS
import gallery1 from '../assets/gallery1.webp';
import gallery2 from '../assets/gallery2.webp';
import gallery3 from '../assets/gallery3.webp';
import gallery4 from '../assets/gallery4.webp';
import gallery5 from '../assets/gallery5.webp';
import gallery6 from '../assets/gallery6.webp';

// NEW JPG ASSETS
import new1 from '../assets/new1.jpeg';
import new2 from '../assets/new2.jpeg';
import new3 from '../assets/new3.jpeg';
import new4 from '../assets/new4.jpeg';
import new5 from '../assets/new5.jpeg';
import new6 from '../assets/new6.jpeg';
import new7 from '../assets/new7.jpeg';
import new8 from '../assets/new8.jpeg';

const AeriousLightMarquee = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  // Updated array with all images
  const academyImages = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    new1, new2, new3, new4, new5, new6, new7, new8
  ];

  return (
    <div className="bg-white flex flex-col gap-1 md:gap-2 overflow-hidden py-8 md:py-12 font-sans relative">
      
      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 1rem)); }
        }

        @media (min-width: 768px) {
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(calc(-100% - 2rem)); }
          }
        }

        .marquee-group {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 1rem;
          min-width: 100%;
          animation: scroll var(--duration, 30s) linear infinite;
        }

        @media (min-width: 768px) {
          .marquee-group {
            gap: 2rem;
            animation-duration: var(--duration, 45s);
          }
        }

        .marquee-reverse .marquee-group {
          animation-direction: reverse;
        }

        .marquee-container {
          display: flex;
          overflow: hidden;
          user-select: none;
          gap: 1rem;
          transform: skewY(-1deg);
          padding: 0.5rem 0;
        }

        @media (min-width: 768px) {
          .marquee-container {
            gap: 2rem;
            transform: skewY(-3deg);
            padding: 1rem 0;
          }
        }

        .gradient-text {
          background: linear-gradient(90deg, #1e3a8a 0%, #3b82f6 50%, #1e3a8a 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .marquee-item {
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          filter: grayscale(20%);
          cursor: zoom-in;
        }

        @media (hover: hover) {
          .marquee-item:hover {
            transform: scale(1.08) rotate(1deg);
            border-color: #ef4444; 
            filter: grayscale(0%);
            z-index: 10;
            box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1);
          }
        }

        .glass-modal {
          background: rgba(15, 23, 42, 0.9);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
        }
      `}</style>

      {/* BACKGROUND DECORATION */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#1e40af_1px,transparent_1px)] [background-size:20px_20px] md:[background-size:30px_30px]" />
      </div>

      {/* OFFICIAL HEADING SECTION */}
      <div className="relative z-10 flex flex-col items-center mb-6 md:mb-10 text-center px-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex items-center gap-3 mb-2">
            <div className="h-[2px] w-4 md:w-8 bg-red-600" />
            <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-blue-900">
                Aerious Flight Academy
            </span>
            <div className="h-[2px] w-4 md:w-8 bg-red-600" />
        </div>
        <h2 className="text-3xl md:text-6xl font-[1000] uppercase tracking-tighter text-blue-950 leading-none">
            Visual <span className="italic text-red-600">Archives</span>
        </h2>
        <p className="mt-2 text-blue-900/60 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] max-w-xs md:max-w-md mx-auto">
            Our training operations and fleet excellence.
        </p>
      </div>

      {/* ROW 1: FORWARD IMAGES */}
      <div className="marquee-container">
        <div className="marquee-group" style={{ '--duration': '40s' }}>
          {academyImages.map((src, i) => (
            <img 
              key={`a-${i}`} 
              src={src} 
              onClick={() => setSelectedImg(src)}
              alt="Academy View" 
              className="marquee-item w-40 md:w-72 aspect-[4/3] object-cover rounded-lg md:rounded-xl border border-blue-100 shadow-sm" 
            />
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true" style={{ '--duration': '40s' }}>
          {academyImages.map((src, i) => (
            <img key={`a-clone-${i}`} src={src} onClick={() => setSelectedImg(src)} alt="" className="marquee-item w-40 md:w-72 aspect-[4/3] object-cover rounded-lg md:rounded-xl border border-blue-100 shadow-sm" />
          ))}
        </div>
      </div>

      {/* ROW 2: TEXT STRIP */}
      <div className="marquee-container border-y border-red-600 bg-red-50/30 py-4 md:py-6 shadow-sm overflow-hidden">
        <div className="marquee-group" style={{ '--duration': '35s' }}>
          <p className="text-2xl md:text-5xl font-black uppercase tracking-tighter gradient-text whitespace-nowrap">
            Academy Excellence <span className="text-red-600 px-2 md:px-4">/</span> Sky Archives <span className="text-red-600 px-2 md:px-4">/</span> Flight Operations <span className="text-red-600 px-2 md:px-4">/</span> Training Fleet <span className="text-red-600 px-2 md:px-4">/</span>
          </p>
        </div>
        <div className="marquee-group" aria-hidden="true" style={{ '--duration': '35s' }}>
          <p className="text-2xl md:text-5xl font-black uppercase tracking-tighter gradient-text whitespace-nowrap">
            Academy Excellence <span className="text-red-600 px-2 md:px-4">/</span> Sky Archives <span className="text-red-600 px-2 md:px-4">/</span> Flight Operations <span className="text-red-600 px-2 md:px-4">/</span> Training Fleet <span className="text-red-600 px-2 md:px-4">/</span>
          </p>
        </div>
      </div>

      {/* ROW 3: REVERSE IMAGES */}
      <div className="marquee-container marquee-reverse">
        <div className="marquee-group" style={{ '--duration': '50s' }}>
          {[...academyImages].reverse().map((src, i) => (
            <img 
              key={`b-${i}`} 
              src={src} 
              onClick={() => setSelectedImg(src)}
              alt="Academy View" 
              className="marquee-item w-40 md:w-72 aspect-[4/3] object-cover rounded-lg md:rounded-xl border border-red-100 shadow-sm" 
            />
          ))}
        </div>
        <div className="marquee-group" aria-hidden="true" style={{ '--duration': '50s' }}>
          {[...academyImages].reverse().map((src, i) => (
            <img key={`b-clone-${i}`} src={src} onClick={() => setSelectedImg(src)} alt="" className="marquee-item w-40 md:w-72 aspect-[4/3] object-cover rounded-lg md:rounded-xl border border-red-100 shadow-sm" />
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] glass-modal flex items-center justify-center p-4 md:p-6 transition-all animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <div className="relative max-w-5xl w-full border-[6px] md:border-[12px] border-white shadow-2xl rounded-lg md:rounded-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
            <img src={selectedImg} className="w-full h-auto max-h-[85vh] object-contain bg-black" alt="Selected" />
            <button 
                onClick={() => setSelectedImg(null)}
                className="absolute top-2 right-2 md:top-4 md:right-4 bg-red-600 text-white p-2 rounded-full hover:bg-blue-900 transition-colors shadow-lg"
                aria-label="Close modal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
      )}

    </div>
  );
};

export default AeriousLightMarquee;