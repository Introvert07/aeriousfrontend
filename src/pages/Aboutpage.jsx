import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, useInView, animate } from 'framer-motion';
import { Target, Award, Shield, Users, Globe, Rocket, Anchor, ChevronRight, Plane } from 'lucide-react';

// ASSETS
import aboutImg from '../assets/about_img.webp'; 
import airplane_bg from '../assets/airplane_bg.jpg'; 
import aboutImg2 from '../assets/about_img_2.webp'; 
import aboutImg3 from '../assets/about_img_3.webp'; 
import worldMap from '../assets/worldmap.jpg'; // <--- LOCAL ASSET IMPORT

const Counter = ({ value, suffix = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration: 2, ease: "easeOut" });
            return controls.stop;
        }
    }, [isInView, count, value]);

    return <span ref={ref}><motion.span>{rounded}</motion.span>{suffix}</span>;
};

const AboutPage = () => {
    const stats = [
        { label: 'Years Excellence', value: 15, suffix: '+', icon: <Award className="w-5 h-5" /> },
        { label: 'Certified Pilots', value: 1200, suffix: '+', icon: <Users className="w-5 h-5" /> },
        { label: 'Global Partners', value: 25, suffix: '+', icon: <Globe className="w-5 h-5" /> },
        { label: 'Flight Hours', value: 50, suffix: 'k+', icon: <Rocket className="w-5 h-5" /> },
    ];

    const cardImages = [aboutImg, aboutImg2, aboutImg3];

    return (
        <div className="bg-white min-h-screen font-sans overflow-x-hidden text-slate-900 selection:bg-red-600 selection:text-white">
            
            {/* 1. HERO SECTION WITH PARALLAX */}
            <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `url(${airplane_bg})`, 
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed', 
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/50 opacity-80" />
                    <div className="absolute inset-0 bg-slate-950/30" /> 
                    <div className="absolute inset-0 opacity-15">
                        <svg width="100%" height="100%"><pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" /></pattern><rect width="100%" height="100%" fill="url(#grid)" /></svg>
                    </div>
                </div>

                <div className="relative z-10 text-center px-4 md:px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <span className="text-red-500 font-black tracking-[0.3em] md:tracking-[0.5em] uppercase text-[9px] md:text-[10px] mb-3 md:mb-4 block drop-shadow-md">Aviation Excellence</span>
                        <h1 className="text-4xl md:text-8xl font-[1000] text-white uppercase tracking-tighter leading-none mb-4 drop-shadow-2xl">
                            Aerius <span className="text-red-600">Aviators</span>
                        </h1>
                        <p className="text-white max-w-2xl mx-auto text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold drop-shadow-md opacity-90">Training the next generation of global pilots</p>
                    </motion.div>
                </div>
            </section>

            {/* 2. ENHANCED LEADERSHIP & STATS SECTION */}
            <section className="py-12 md:py-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
                <div className="grid lg:grid-cols-12 gap-12 items-center mb-12">
                    
                    {/* Left: Modern Editorial Content */}
                    <motion.div 
                        className="lg:col-span-7 order-2 lg:order-1" 
                        initial={{ opacity: 0, x: -30 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-4 md:mb-6">
                            <span className="h-[2px] w-8 md:w-12 bg-red-600"></span>
                            <span className="font-black text-[10px] md:text-[11px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-red-600">Elite Leadership</span>
                        </div>
                        
                        <h3 className="text-4xl md:text-7xl font-[1000] text-slate-900 leading-[0.85] mb-6 md:mb-8 uppercase tracking-tighter">
                            A Legacy of <br/>
                            <span className="relative inline-block text-blue-900 italic mt-2 md:mt-0">
                                Naval Precision
                                <svg className="absolute -bottom-2 md:-bottom-3 left-0 w-full" viewBox="0 0 300 12" fill="none">
                                    <path d="M1 9.5C50 3.5 150 1.5 299 9.5" stroke="#ef4444" strokeWidth="4" strokeLinecap="round"/>
                                </svg>
                            </span>
                        </h3>
                        
                        <p className="text-sm md:text-lg text-slate-500 leading-relaxed mb-6 md:mb-8 max-w-xl font-medium">
                            Spearheaded by an <span className="text-slate-900 font-bold border-b-2 border-red-100">Indian Naval Pilot</span> with <Counter value={25} suffix="+" /> years of defense service. We bridge the gap between military-grade discipline and commercial flight excellence.
                        </p>

                        <div className="group relative inline-flex items-center gap-4 md:gap-6 pl-4 md:pl-6 pr-8 md:pr-10 py-4 bg-slate-900 rounded-2xl overflow-hidden transition-all hover:bg-slate-800 shadow-xl w-full sm:w-auto">
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-600"></div>
                            <p className="text-white italic text-xs md:text-base leading-tight z-10">
                                "Success in the air begins with discipline on the ground. <br/>
                                <span className="text-red-400 font-bold not-italic uppercase tracking-[0.1em] md:tracking-[0.2em] text-[9px] md:text-[10px]">Command the skies with precision.</span>"
                            </p>
                            <Plane className="w-8 h-8 md:w-10 md:h-10 text-white/10 -rotate-45 group-hover:translate-x-3 transition-transform flex-shrink-0" />
                        </div>
                    </motion.div>
                    
                    {/* Right: Card Fan Spread */}
                    <div className="lg:col-span-5 order-1 lg:order-2 relative h-[350px] md:h-[450px] flex items-center justify-center">
                        <div className="relative w-48 h-64 md:w-64 md:h-80">
                            {cardImages.map((img, index) => (
                                <motion.div
                                    key={index}
                                    className="absolute inset-0 bg-white p-1 md:p-2 rounded-[1.5rem] md:rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.1)] md:shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-slate-100 cursor-pointer"
                                    style={{ originX: 0.5, originY: 1 }}
                                    initial={{ rotate: 0, x: 0 }}
                                    whileInView={{ 
                                        rotate: index === 0 ? -18 : index === 2 ? 18 : 0,
                                        x: index === 0 ? -40 : index === 2 ? 40 : 0,
                                        y: index === 1 ? -20 : 0,
                                        zIndex: index === 1 ? 30 : 20
                                    }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative w-full h-full overflow-hidden rounded-[1.2rem] md:rounded-[1.5rem]">
                                        <img src={img} alt="Academy" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    </div>
                                    
                                    {index === 1 && (
                                        <div className="absolute -top-3 -right-3 md:-top-5 md:-right-5 bg-red-600 text-white w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 md:border-4 border-white shadow-2xl rotate-12 z-50">
                                            <span className="font-black text-[10px] md:text-sm tracking-tighter text-center leading-none">ELITE<br/>PILOT</span>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                            
                            <div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 z-[40] bg-white px-6 md:px-8 py-2 md:py-3 rounded-full shadow-2xl border border-slate-100 flex items-center gap-2 md:gap-4 whitespace-nowrap">
                                <div className="w-2 md:w-3 h-2 md:h-3 rounded-full bg-green-500 animate-pulse"></div>
                                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-slate-900">
                                    <span className="text-red-600 text-sm md:text-lg"><Counter value={25} suffix="+" /></span> Years Experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Glassy Stats Strip */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 p-3 md:p-4 bg-slate-50/80 rounded-[1.5rem] md:rounded-[2.5rem] border border-slate-200/50 backdrop-blur-sm shadow-inner">
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            whileHover={{ backgroundColor: "#ffffff", scale: 1.02 }} 
                            className="flex flex-col sm:flex-row items-center gap-3 md:gap-6 p-4 md:p-6 rounded-[1.2rem] md:rounded-[1.8rem] transition-all"
                        >
                            <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 flex items-center justify-center bg-[#203a8c] text-white rounded-xl md:rounded-2xl shadow-lg shadow-blue-900/20">
                                {React.cloneElement(stat.icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
                            </div>
                            <div className="text-center sm:text-left">
                                <h4 className="text-xl md:text-4xl font-[1000] text-slate-900 tracking-tighter leading-none">
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                </h4>
                                <p className="text-slate-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] mt-1 md:mt-2">{stat.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 3. GLOBAL FOOTPRINT (UPDATED SECTION) */}
            <section className="py-12 md:py-16 bg-slate-100 border-y border-slate-200 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-8 h-[2px] bg-red-600"></span>
                                <h2 className="text-red-600 font-black text-[10px] tracking-[0.3em] uppercase">Network Architecture</h2>
                            </div>
                            <h3 className="text-3xl md:text-5xl font-[1000] text-slate-900 uppercase tracking-tighter leading-none">
                                Global Training <span className="text-blue-900 italic font-black">Footprint</span>
                            </h3>
                        </div>
                        
                        <p className="text-slate-500 text-sm md:text-base font-medium max-w-sm md:border-l-2 md:border-slate-300 md:pl-4 mb-1">
                            Strategic presence across prime aviation hubs to ensure world-class training standards.
                        </p>
                    </div>
                </div>

                <div className="w-full px-4 md:px-10 lg:px-20">
                    <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-white rounded-[1.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden border-[6px] md:border-[10px] border-white">
                        <div 
                            className="absolute inset-0 bg-center bg-cover" 
                            style={{ 
                                backgroundImage: `url(${worldMap})`, // <--- USES YOUR LOCAL IMAGE
                                filter: "brightness(1) contrast(1.05)" 
                            }} 
                        />
                        
                        <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 1000 450" preserveAspectRatio="none">
                            <motion.path 
                                d="M 185 155 Q 350 40 485 140 T 545 295 T 820 210 T 880 325 T 950 375" 
                                fill="none" 
                                stroke="#e31e24" 
                                strokeWidth="3" 
                                strokeDasharray="10,10" 
                                initial={{ pathLength: 0 }} 
                                whileInView={{ pathLength: 1 }} 
                                transition={{ duration: 5 }} 
                            />
                        </svg>

                        {[
                            { name: "USA", x: "18.5%", y: "34.5%" }, 
                            { name: "Spain", x: "48.5%", y: "31.5%" }, 
                            { name: "South Africa", x: "54.5%", y: "66%" }, 
                            { name: "Philippines", x: "82.5%", y: "47%" }, 
                            { name: "Australia", x: "88.5%", y: "73%" }, 
                            { name: "New Zealand", x: "94.8%", y: "84%" }
                        ].map((loc, i) => (
                            <div key={i} className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: loc.x, top: loc.y }}>
                                <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} className="flex flex-col items-center">
                                    <div className="w-2.5 md:w-3.5 h-2.5 md:h-3.5 bg-red-600 rounded-full border md:border-2 border-white shadow-xl animate-pulse" />
                                    <div className="mt-1 md:mt-2 px-1.5 md:px-2 py-0.5 bg-slate-900/90 text-white rounded text-[7px] md:text-[9px] font-bold uppercase backdrop-blur-sm whitespace-nowrap">
                                        {loc.name}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;