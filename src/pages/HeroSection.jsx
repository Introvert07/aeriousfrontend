import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, ChevronLeft, ChevronRight } from 'lucide-react';

import banner1 from '../assets/Website-Banner-1.webp';
import banner2 from '../assets/Website-Banner-2.webp';
import banner3 from '../assets/Website-Banner-3.webp';

const BANNER_IMAGES = [
    { src: banner1, alt: "Aerius Aviators Campus" },
    { src: banner2, alt: "Aviation/Engineering" },
    { src: banner3, alt: "Research Labs" },
];

const HeroSection = () => {
    return (
        <div className="flex flex-col w-full bg-white">
            {/* HERO CONTAINER */}
            <main className="relative w-full aspect-[4/3] md:aspect-auto md:h-[600px] overflow-hidden bg-gray-100">
                <HeroSlider />
                
                {/* DESKTOP NOTIFICATION BAR (Hidden on Mobile) */}
                <div className="hidden md:flex absolute bottom-0 left-0 w-full bg-[#e31e24] text-white items-center h-12 z-30 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
                    {/* Brand Label Box - Added mb-2 to span for alignment */}
                    <div className="bg-[#203a8c] h-full px-8 flex items-center font-black italic skew-x-[-20deg] -ml-4">
                        <span className="skew-x-[20deg] flex items-center gap-2 tracking-tighter whitespace-nowrap text-xs mb-2">
                            <Bell size={16} className="animate-bounce shrink-0"/> 
                            NOTIFICATIONS
                        </span>
                    </div>

                    {/* Marquee Content - Added mb-2 to the marquee tag */}
                    <div className="flex-grow overflow-hidden">
                        <marquee className="font-bold text-sm tracking-wide mb-3 pt-1" scrollamount="6">
                            Welcome to Aerius Pilot Academy • Admissions Open 2025-26 • NBA Accredited • New Flight Simulator Laboratory Launched!
                        </marquee>
                    </div>
                </div>
            </main>

            {/* MOBILE NOTIFICATION BAR (Separate from Banner to avoid overlap) */}
            <div className="flex md:hidden w-full bg-[#e31e24] text-white items-center h-10 z-30 shadow-md">
                <div className="bg-[#203a8c] h-full px-4 flex items-center font-black italic skew-x-[-15deg] -ml-2">
                    <span className="skew-x-[15deg] flex items-center">
                        <Bell size={14} className="animate-bounce shrink-0"/>
                    </span>
                </div>
                <div className="flex-grow overflow-hidden">
                    <marquee className="font-bold text-[11px] tracking-wide pt-1" scrollamount="4">
                        Welcome to Aerius Pilot Academy • Admissions Open 2025-26 • NBA Accredited
                    </marquee>
                </div>
            </div>

            {/* WELCOME SECTION */}
            <section className="py-12 md:py-20 text-center bg-white px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-5xl font-['Montserrat',sans-serif] font-black text-slate-800 uppercase tracking-tight mb-3"
                    >
                        Leading the Skies with <span className="text-[#203a8c]">Excellence</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 text-sm md:text-lg leading-relaxed font-medium italic"
                    >
                        "Your journey to a professional aviation career starts here."
                    </motion.p>
                </div>
            </section>
        </div>
    );
};

const HeroSlider = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const imageIndex = Math.abs(page % BANNER_IMAGES.length);

    const paginate = useCallback((newDirection) => {
        setPage([page + newDirection, newDirection]);
    }, [page]);

    useEffect(() => {
        const timer = setInterval(() => paginate(1), 6000);
        return () => clearInterval(timer);
    }, [paginate]);

    return (
        <div className="relative w-full h-full group">
            <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                    key={page}
                    src={BANNER_IMAGES[imageIndex].src}
                    custom={direction}
                    variants={{
                        enter: (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0 }),
                        center: { x: 0, opacity: 1 },
                        exit: (d) => ({ x: d < 0 ? '100%' : '-100%', opacity: 0 })
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ 
                        x: { type: "spring", stiffness: 120, damping: 25 }, 
                        opacity: { duration: 0.5 } 
                    }}
                    className="absolute inset-0 w-full h-full object-fill md:object-cover bg-gray-100"
                    alt={BANNER_IMAGES[imageIndex].alt}
                />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button 
                onClick={() => paginate(-1)} 
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-40 p-2 text-white bg-black/10 rounded-full hover:bg-black/30"
            >
                <ChevronLeft size={20} className="md:w-8 md:h-8" />
            </button>
            <button 
                onClick={() => paginate(1)} 
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-40 p-2 text-white bg-black/10 rounded-full hover:bg-black/30"
            >
                <ChevronRight size={20} className="md:w-8 md:h-8" />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-6 md:bottom-20 left-1/2 -translate-x-1/2 flex gap-1.5 z-40">
                {BANNER_IMAGES.map((_, idx) => (
                    <div 
                        key={idx}
                        className={`transition-all duration-300 rounded-full shadow-sm ${
                            idx === imageIndex ? 'w-2.5 h-2.5 bg-white' : 'w-2 h-2 bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroSection;