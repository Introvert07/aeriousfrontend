import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Youtube, Instagram, X, Camera, Video } from 'lucide-react';

// Import local assets
import storyThumbnail from '../assets/courseimg1.jpg'; 
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import video4 from '../assets/video4.mp4';


// 1. ASSET CONFIGURATION
const existingPhotos = Array.from({ length: 18 }, (_, i) => ({
  id: `img${i + 1}`,
  type: 'photo',
  title: `FLIGHT_LOG_0${i + 1}`,
  src: new URL(`../assets/gallerynavbarimg/img${i + 1}.webp`, import.meta.url).href
}));

const newPhotos = Array.from({ length: 8 }, (_, i) => ({
  id: `new${i + 1}`,
  type: 'photo',
  title: `ACADEMY_ARCHIVE_0${i + 1}`,
  src: new URL(`../assets/gallerynavbarimg/new${i + 1}.jpeg`, import.meta.url).href
}));

const photos = [...newPhotos, ...existingPhotos];

const localVideos = [
  { id: 'lv1', type: 'local_video', src: video1 },
  { id: 'lv2', type: 'local_video', src: video2 },
    { id: 'lv3', type: 'local_video',  src: video3 },
      { id: 'lv4', type: 'local_video',  src: video4 },
];

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
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const prevSlide = (e) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const handleNextManual = (e) => {
    e.stopPropagation();
    setIsAutoPlaying(false);
    nextSlide();
  };

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(nextSlide, 2000); 
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div className="bg-[#f8fafc] min-h-screen py-6 md:py-16 px-4 md:px-12 font-sans selection:bg-[#e21d1d] selection:text-white overflow-x-hidden">
      
      {/* HEADER */}
      <div className="text-center mb-8 md:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-3 md:mb-4">
          <Camera size={12} /> Aerius Media Hub
        </div>
        <h1 className="text-2xl md:text-5xl font-black text-[#1a2e6e] tracking-tight italic uppercase">Glimpses</h1>
        <div className="w-8 md:w-12 h-1 bg-[#e21d1d] mx-auto mt-2 md:mt-4 rounded-full"></div>
      </div>

      {/* 1. AUTO-CAROUSEL */}
      <div className="max-w-6xl mx-auto relative mb-12 md:mb-24 group">
        <div 
          className="bg-slate-900 rounded-[1.2rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden border border-white relative aspect-[4/5] md:aspect-video flex items-center justify-center cursor-zoom-in"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onClick={() => setSelectedMedia(photos[currentIndex])}
        >
          <div className="absolute inset-0 opacity-40 blur-3xl scale-110">
            <img src={photos[currentIndex].src} className="w-full h-full object-cover" alt="" loading="lazy" />
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

          {/* Nav Controls */}
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-2 md:px-6 z-20 md:opacity-0 md:group-hover:opacity-100 transition-opacity pointer-events-none">
            <button onClick={prevSlide} className="pointer-events-auto p-2 md:p-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-blue-600 backdrop-blur-md transition-all shadow-lg">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNextManual} className="pointer-events-auto p-2 md:p-4 rounded-full bg-white/20 hover:bg-white text-white hover:text-blue-600 backdrop-blur-md transition-all shadow-lg">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. LOCAL VIDEOS SECTION */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-24">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
          <div className="p-2 bg-blue-600 rounded-lg text-white shadow-lg"><Video size={18} /></div>
          <h2 className="text-lg md:text-xl font-black text-[#1a2e6e] uppercase italic tracking-wider">In-Flight Footage</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {localVideos.map((vid) => (
            <motion.div 
              key={vid.id}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedMedia(vid)}
              className="group cursor-pointer bg-white rounded-[1.2rem] md:rounded-[2rem] overflow-hidden shadow-md border border-white"
            >
              <div className="aspect-video relative bg-black flex items-center justify-center">
                <video src={vid.src} className="w-full h-full object-cover opacity-60" muted />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="text-white fill-white ml-1" />
                   </div>
                </div>
              </div>
              <div className="p-4 bg-white">
                <p className="text-[10px] md:text-xs font-black text-[#1a2e6e] uppercase tracking-widest">{vid.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 3. IG REELS */}
      {/* 3. IG REELS */}
<div className="max-w-6xl mx-auto mb-12 md:mb-24">
  <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
    <div className="p-2 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg text-white">
      <Instagram size={18} />
    </div>
    <h2 className="text-lg md:text-xl font-black text-[#1a2e6e] uppercase italic tracking-wider">
      Pilot Stories
    </h2>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
    {igReels.map((reel) => (
      <div 
        key={reel.id} 
        onClick={() => setSelectedMedia(reel)} 
        className="aspect-[9/16] bg-slate-900 rounded-[1rem] md:rounded-[2rem] cursor-pointer relative overflow-hidden group border-2 border-white shadow-lg"
      >
        {/* DIRECT EMBED INSTEAD OF THUMBNAIL */}
        <iframe 
          className="w-full h-full pointer-events-none" // pointer-events-none allows the click to bubble up to the parent div
          src={`https://www.instagram.com/reel/${reel.reelId}/embed/`} 
          scrolling="no" 
          frameBorder="0"
          title="Instagram Reel Preview"
        />
        
        {/* Overlay to maintain clickability and show play icon on hover */}
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors flex items-center justify-center">
          <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
            <Play className="text-white fill-white" size={24} />
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

      {/* 4. YOUTUBE ROW */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-24">
        <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
          <div className="p-2 bg-red-600 rounded-lg text-white"><Youtube size={18} /></div>
          <h2 className="text-lg md:text-xl font-black text-[#1a2e6e] uppercase italic tracking-wider">Briefings</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {youtubeVideos.map((vid) => (
            <div key={vid.id} onClick={() => setSelectedMedia(vid)} className="group cursor-pointer">
              <div className="aspect-video bg-black rounded-[1rem] md:rounded-[2rem] shadow-md border border-white mb-3 overflow-hidden relative">
                 <img src={`https://img.youtube.com/vi/${vid.embedId}/maxresdefault.jpg`} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" alt={vid.title} loading="lazy" />
                 <Play className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white" fill="white" />
              </div>
              <p className="text-[9px] md:text-xs font-black text-[#1a2e6e] uppercase tracking-widest px-2">{vid.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* UNIVERSAL RESPONSIVE LIGHTBOX */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1a2e6e]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedMedia(null)}
          >
            {/* Close Button */}
            <button 
              className="absolute top-6 right-6 z-[110] text-white/70 hover:text-white bg-white/10 p-3 rounded-full transition-colors"
              onClick={() => setSelectedMedia(null)}
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
              className={`relative flex items-center justify-center overflow-hidden shadow-2xl rounded-[1rem] md:rounded-[2rem] bg-black 
                ${selectedMedia.type === 'reel' ? 'max-w-[400px] w-full aspect-[9/16]' : 
                  selectedMedia.type === 'photo' ? 'max-w-full max-h-full bg-transparent shadow-none' : 
                  'max-w-5xl w-full aspect-video'}`}
            >
               {selectedMedia.type === 'video' ? (
                 <iframe 
                    className="w-full h-full" 
                    src={`https://www.youtube.com/embed/${selectedMedia.embedId}?autoplay=1`} 
                    allow="autoplay; encrypted-media" 
                    allowFullScreen 
                    title={selectedMedia.title}
                 />
               ) : selectedMedia.type === 'local_video' ? (
                 <video src={selectedMedia.src} className="w-full h-full" controls autoPlay />
               ) : selectedMedia.type === 'reel' ? (
                 <iframe 
                    className="w-full h-full" 
                    src={`https://www.instagram.com/reel/${selectedMedia.reelId}/embed/`} 
                    scrolling="no" 
                    title="Instagram Reel"
                 />
               ) : (
                 <img 
                    src={selectedMedia.src} 
                    className="block w-full h-auto max-h-[85vh] object-contain rounded-lg" 
                    alt={selectedMedia.title} 
                 />
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AeriusGallery;