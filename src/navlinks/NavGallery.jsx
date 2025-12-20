import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Youtube, Instagram, X, Camera, ArrowUpRight } from 'lucide-react';

// Import the local asset for the thumbnail
import storyThumbnail from '../assets/courseimg1.jpg'; 

const photos = Array.from({ length: 18 }, (_, i) => ({
  id: `img${i + 1}`,
  type: 'photo',
  title: `FLIGHT_LOG_0${i + 1}`,
  src: new URL(`../assets/gallerynavbarimg/img${i + 1}.webp`, import.meta.url).href
}));

const youtubeVideos = [
  { id: 'v1', type: 'video', title: 'How to Become a Commercial Pilot in India', embedId: 'QF36lrijwJQ' },
  { id: 'v2', type: 'video', title: 'Pilot Training in India vs Abroad', embedId: '266y8tRv9fU' },
  { id: 'v3', type: 'video', title: 'Complete Pilot Training Guide', embedId: 'phEVaqc8kFs' },
];

const igReels = [
  { id: 'r1', type: 'reel', reelId: 'DPbKIxMiY0y' },
  { id: 'r2', type: 'reel', reelId: 'DP1GUBBkj3H' },
  { id: 'r3', type: 'reel', reelId: 'DQJrXiZFTjy' },
  { id: 'r4', type: 'reel', reelId: 'DQQ5jGOEsD4' },
];

const AeriusGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedMedia, setSelectedMedia] = useState(null);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % photos.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);

  return (
    <div className="bg-[#f8fafc] min-h-screen py-8 md:py-16 px-4 md:px-12 font-sans selection:bg-[#e21d1d] selection:text-white overflow-x-hidden">
      
      {/* 1. HEADER */}
      <div className="text-center mb-10 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-4">
          <Camera size={12} /> Aerius Media Hub
        </div>
        <h1 className="text-3xl md:text-5xl font-black text-[#1a2e6e] tracking-tight italic uppercase">Glimpses</h1>
        <div className="w-10 md:w-12 h-1 md:h-1.5 bg-[#e21d1d] mx-auto mt-3 md:mt-4 rounded-full"></div>
      </div>

      {/* 2. PHOTO CAROUSEL */}
      <div className="max-w-6xl mx-auto relative mb-16 md:mb-24">
        <div className="bg-slate-900 rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-white relative aspect-[4/5] md:aspect-video flex items-center justify-center">
          <div className="absolute inset-0 opacity-30 blur-2xl scale-110">
            <img src={photos[currentIndex].src} className="w-full h-full object-cover" alt="bg-blur" />
          </div>

          <AnimatePresence mode="wait">
            <motion.img 
              key={currentIndex}
              src={photos[currentIndex].src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 h-full w-full object-contain mx-auto"
              alt={photos[currentIndex].title}
            />
          </AnimatePresence>

          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-3 md:px-6 z-20 pointer-events-none">
            <button onClick={prevSlide} className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-blue-600 backdrop-blur-md transition-all shadow-lg">
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </button>
            <button onClick={nextSlide} className="pointer-events-auto p-3 md:p-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-blue-600 backdrop-blur-md transition-all shadow-lg">
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. IG REELS ROW (UPDATED) */}
      <div className="max-w-6xl mx-auto mb-16 md:mb-24">
        <div className="flex items-center justify-between mb-6 md:mb-10 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg md:rounded-xl text-white shadow-lg shadow-pink-100">
              <Instagram size={18} />
            </div>
            <h2 className="text-lg md:text-xl font-black text-[#1a2e6e] uppercase italic tracking-wider">Pilot Stories</h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {igReels.map((reel) => (
            <motion.div 
              key={reel.id}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedMedia(reel)}
              className="aspect-[9/16] bg-slate-900 rounded-[1.2rem] md:rounded-[2rem] cursor-pointer shadow-xl relative overflow-hidden group border-2 md:border-4 border-white"
            >
              {/* Local Asset Thumbnail */}
              <img 
                src={storyThumbnail} 
                className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" 
                alt="Instagram Story"
              />
              
              {/* Subtle Gradient overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
                  <Play className="text-white fill-white ml-1 w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>

              <div className="absolute top-4 right-4 z-20">
                <Instagram size={16} className="text-white/70" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 4. YOUTUBE ROW */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-20">
        <div className="flex items-center justify-between mb-6 md:mb-10 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600 rounded-lg md:rounded-xl text-white shadow-lg shadow-red-100"><Youtube size={18} /></div>
            <h2 className="text-lg md:text-xl font-black text-[#1a2e6e] uppercase italic tracking-wider">Briefings</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {youtubeVideos.map((vid) => (
            <motion.div 
              key={vid.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedMedia(vid)}
              className="group cursor-pointer"
            >
              <div className="aspect-video bg-white rounded-[1.2rem] md:rounded-[2rem] shadow-md border border-white mb-3 md:mb-5 flex items-center justify-center relative overflow-hidden">
                 <img src={`https://img.youtube.com/vi/${vid.embedId}/maxresdefault.jpg`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={vid.title} />
                 <Play className="absolute text-white group-hover:text-[#e21d1d] group-hover:scale-110 transition-all z-10 w-12 h-12" fill="currentColor" />
              </div>
              <p className="text-[10px] md:text-xs font-black text-[#1a2e6e] uppercase tracking-widest px-2 group-hover:text-[#e21d1d] transition-colors">{vid.title}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 5. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1a2e6e]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
          >
            <button 
              onClick={() => setSelectedMedia(null)} 
              className="absolute top-6 right-6 md:top-10 md:right-10 z-[110] text-white/50 hover:text-white bg-white/10 p-2 md:p-3 rounded-full"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
              className={`w-full overflow-hidden shadow-2xl rounded-[1.5rem] md:rounded-[2.5rem] bg-black border border-white/10 ${selectedMedia.type === 'reel' ? 'max-w-[320px] md:max-w-[380px] aspect-[9/16]' : 'max-w-5xl aspect-video'}`}
            >
               {selectedMedia.type === 'video' ? (
                 <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${selectedMedia.embedId}?autoplay=1`} allow="autoplay; encrypted-media" allowFullScreen title={selectedMedia.title} />
               ) : (
                 <div className="w-full h-full flex flex-col">
                   <iframe 
                     className="w-full h-full flex-grow" 
                     src={`https://www.instagram.com/reel/${selectedMedia.reelId}/embed/`} // Caption removed
                     allowTransparency="true" 
                     frameBorder="0" 
                     scrolling="no"
                   />
                   <a 
                     href={`https://www.instagram.com/reel/${selectedMedia.reelId}/`} 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="bg-white text-[#1a2e6e] text-center py-3 md:py-4 font-black text-[10px] md:text-xs uppercase tracking-widest hover:bg-[#e21d1d] hover:text-white transition-colors flex items-center justify-center gap-2"
                   >
                     Open in Instagram <ArrowUpRight size={14}/>
                   </a>
                 </div>
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AeriusGallery;