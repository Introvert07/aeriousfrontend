import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, Target, Star, Trophy, Clock, Users, Globe, BookOpen, CheckCircle } from 'lucide-react';

// ASSETS
import gifTwo from '../assets/pilot.gif';

const WhyChooseSinglePage = () => {
    const reasons = [
        { title: "100% Transparency", icon: <Target size={20}/> },
        { title: "High First-Time Pass Rate", icon: <Trophy size={20}/> },
        { title: "Accelerated Training Duration", icon: <Clock size={20}/> },
        { title: "Latest Training Methods", icon: <Zap size={20}/> },
        { title: "Elite Experienced Instructors", icon: <Users size={20}/> },
        { title: "Quality Training, Reasonable Cost", icon: <Star size={20}/> },
        { title: "End-to-End Solutions", icon: <Globe size={20}/> },
        { title: "Top-Rated Safety & Efficiency", icon: <Shield size={20}/> },
        { title: "Airline Standard Ground School", icon: <BookOpen size={20}/> },
        { title: "Professional Flight Excellence", icon: <CheckCircle size={20}/> },
    ];

    return (
        <div className="bg-white min-h-screen font-sans text-blue-950 flex items-center overflow-hidden relative">
            
            {/* HUD GRID OVERLAY */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `linear-gradient(#1d4ed8 1px, transparent 1px), linear-gradient(90deg, #1d4ed8 1px, transparent 1px)`, backgroundSize: '80px 80px' }} />

            <div className="max-w-7xl mx-auto px-6 md:px-8 w-full py-12 md:py-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
                    
                    {/* LEFT COLUMN: BRAND CONTENT */}
                    <div className="space-y-8 md:space-y-10 order-2 lg:order-1">
                        <header className="space-y-4 md:space-y-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-3"
                            >
                                <span className="bg-red-600 text-white font-black tracking-[0.3em] uppercase text-[9px] md:text-[10px] px-3 py-1">
                                    Why Aerius
                                </span>
                                <div className="h-[1px] flex-grow bg-blue-100" />
                            </motion.div>
                            
                            <h1 className="text-5xl md:text-8xl font-[1000] uppercase tracking-tighter leading-[0.8] text-blue-950">
                                The Aerius <br/>
                                <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #dc2626' }}>Advantage.</span>
                            </h1>
                            
                            <p className="text-blue-900 font-bold text-base md:text-lg max-w-md leading-relaxed border-l-4 border-red-600 pl-4 md:pl-6 bg-slate-50 py-2">
                                We combine airline-grade precision with the most efficient flight training methods in the industry.
                            </p>
                        </header>

                        {/* LIST GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 md:gap-y-5">
                            {reasons.map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ x: 5, backgroundColor: "rgba(239, 68, 68, 0.05)" }}
                                    className="flex items-center gap-3 group cursor-default border-b border-blue-50 pb-2 md:pb-3 transition-all rounded-r-lg"
                                >
                                    <div className="text-blue-600 group-hover:text-red-600 transition-colors shrink-0">
                                        {item.icon}
                                    </div>
                                    <span className="font-black uppercase text-[10px] md:text-[11px] tracking-tight text-blue-950 group-hover:text-red-600 transition-colors">
                                        {item.title}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: VISUAL ENGINE */}
                    <div className="relative flex justify-center items-center order-1 lg:order-2 py-10 md:py-0">
                        
                        {/* COMPACT RADAR CIRCLES - Responsive Sizing */}
                        <motion.div 
                            animate={{ scale: [1, 1.15, 1], opacity: [0, 0.4, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeOut" }}
                            className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] border border-dotted border-red-500 rounded-full pointer-events-none"
                        />
                        <motion.div 
                            animate={{ scale: [1, 1.3, 1], opacity: [0, 0.3, 0] }}
                            transition={{ repeat: Infinity, duration: 3, delay: 1, ease: "easeOut" }}
                            className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] border border-dotted border-blue-900 rounded-full pointer-events-none"
                        />

                        <div className="relative z-10 p-2 w-full max-w-[320px] md:max-w-[420px]">
                            {/* HUD HORIZONTAL SCAN LINE */}
                            <motion.div 
                                animate={{ top: ['0%', '100%', '0%'] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="absolute left-0 right-0 h-[2px] bg-red-600/30 z-30 pointer-events-none"
                            />

                            <img 
                                src={gifTwo} 
                                alt="Pilot Training" 
                                className="w-full h-auto rounded-lg grayscale-[20%] transition-all duration-500 relative z-20"
                            />
                            
                            {/* BLINKING STATUS: SUCCESS - Responsive position and size */}
                            <motion.div 
                                animate={{ opacity: [1, 0, 1] }}
                                transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 1], ease: "linear" }}
                                className="absolute -top-6 -right-2 md:-top-4 md:-right-4 bg-emerald-500 text-white p-3 md:p-4 border-2 border-white min-w-[110px] md:min-w-[140px] z-40 shadow-xl"
                            >
                                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] mb-1">Mission Status</p>
                                <p className="text-lg md:text-2xl font-black italic tracking-tighter leading-none">98% SUCCESS</p>
                            </motion.div>

                            {/* STATIC BOX: EXPERIENCE - Responsive position and size */}
                            <div className="absolute -bottom-6 -left-2 md:-bottom-4 md:-left-4 bg-blue-900 text-white p-3 md:p-4 border-2 border-white min-w-[110px] md:min-w-[140px] z-40 shadow-xl">
                                <p className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.2em] mb-1 text-blue-300">Experience</p>
                                <p className="text-lg md:text-2xl font-black italic tracking-tighter leading-none text-white">50K+ HRS</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyChooseSinglePage;