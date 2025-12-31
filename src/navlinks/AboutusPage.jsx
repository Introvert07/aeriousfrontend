import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, ShieldCheck, GraduationCap, PlaneTakeoff, CheckCircle2, Star, Target, Compass, Anchor, Layers, Globe, FileCheck, Rocket } from 'lucide-react';

// Assets
import heroBg from '../assets/courseimg1.jpg'; 
import aircraftGif from '../assets/Aircraft.gif'; // Added your GIF

const StatCounter = ({ value, label, icon: Icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const target = useMemo(() => parseInt(value.replace(/\D/g, '')), [value]);

    useEffect(() => {
        if (isInView) {
            let startTimestamp = null;
            const duration = 2000;
            
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                setCount(Math.floor(progress * target));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [isInView, target]);

    return (
        <div ref={ref} className="group p-8 transition-all duration-500 hover:bg-[#203a8c] rounded-[2rem]">
            <div className="text-[#e31e24] group-hover:text-white mb-4 transition-colors">
                <Icon size={32} />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-[#203a8c] group-hover:text-white transition-colors">
                {count.toLocaleString()}{value.includes('+') ? '+' : ''}
            </h3>
            <p className="uppercase text-[10px] font-black tracking-[0.2em] text-slate-400 group-hover:text-blue-200 mt-2 transition-colors">
                {label}
            </p>
        </div>
    );
};

const AboutPage = () => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 50, damping: 25, restDelta: 0.001 });
    
    const planeX = useTransform(smoothProgress, [0, 1], ["-10%", "110%"]);
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);
    const textOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
        }
    };

    return (
        <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
            className="bg-[#fdfeff] min-h-screen font-sans selection:bg-[#e31e24] selection:text-white overflow-x-hidden"
        >
            
            {/* 1. IMMERSIVE HERO */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 py-20 lg:py-0">
                <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 will-change-transform">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 z-10" />
                    <img src={heroBg} className="w-full h-full object-cover" alt="Aviation Background" loading="eager" />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 relative z-20 text-center">
                    <div className="text-white">
                        <motion.div style={{ opacity: textOpacity }} className="space-y-6">
                            <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
                                <div className="h-[2px] w-12 bg-[#e31e24]" />
                                <span className="uppercase tracking-[0.5em] text-xs font-bold text-[#e31e24]">Est. Legacy</span>
                                <div className="h-[2px] w-12 bg-[#e31e24]" />
                            </motion.div>
                            <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black leading-none uppercase italic">
                                Aerius <br /> <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Aviators</span>
                            </motion.h1>
                            <motion.p variants={itemVariants} className="text-lg md:text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                                Capt. Saurabh Bhatnagar: 25 years of Military flying, a decade of Commercial mastery, and 9,000+ flight hours.
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2. DYNAMIC STATS HUB */}
            <motion.div variants={itemVariants} className="relative z-30 -mt-10 md:-mt-20 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-2xl rounded-[2rem] md:rounded-[3rem] p-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <StatCounter value="35+" label="Total Experience" icon={Award} />
                    <StatCounter value="100+" label="Counseling Sessions" icon={BookOpen} />
                    <StatCounter value="9000+" label="Flight Hours" icon={PlaneTakeoff} />
                </div>
            </motion.div>

            {/* 4. ABOUT AERIUS ECOSYSTEM SECTION */}
            <section className="py-20 md:py-32 bg-slate-50 relative overflow-hidden">
                {/* GIF ADDED HERE AS A BACKGROUND DECORATION */}
                <img 
                    src={aircraftGif} 
                    alt="Decor" 
                    className="absolute top-0 right-0 w-1/3 opacity-[0.03] pointer-events-none grayscale"
                />

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                            <h2 className="text-sm font-black text-[#e31e24] uppercase tracking-[0.3em] mb-4">About Aerius Pilot Academy</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-[#203a8c] uppercase leading-tight mb-8">
                                The Complete Ecosystem <br /> <span className="text-red-600">for Aspiring Commercial Pilots</span>
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                At Aerius Pilot Academy (a subsidiary of Aerius Aviators LLP), we don’t just train students; <strong>we mentor future captains</strong>. 
                            </p>
                            <p className="text-slate-500 leading-relaxed italic border-l-4 border-red-600 pl-4">
                                We understand that the journey from an aspiring aviator to a Type-Rated Commercial Pilot is complex and demanding. That is why we have built a seamless, end-to-end training ecosystem designed to handle every hurdle a student faces.
                            </p>
                        </motion.div>
                        
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#203a8c] p-8 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                            <Rocket className="absolute -right-10 -top-10 text-white/10" size={240} />
                            <h4 className="text-2xl font-black uppercase mb-6">Why Choose Aerius Pilot Academy?</h4>
                            <p className="text-blue-100/80 mb-8 leading-relaxed">As India’s Premier CPL & Type Rating Hub, we pride ourselves on transparency, safety, and results.</p>
                            <ul className="space-y-4">
                                {[
                                    "Unified pathway under one roof",
                                    "International flight training exposure",
                                    "Advanced Type Rating (A320/B737)",
                                    "Dedicated Regulatory support"
                                ].map((bullet, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm font-bold uppercase tracking-wide">
                                        <CheckCircle2 className="text-red-500" size={20} /> {bullet}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="text-center mb-16">
                        <h3 className="text-3xl md:text-4xl font-black text-[#203a8c] uppercase italic">Our 360° Training Approach</h3>
                        <div className="h-1 w-24 bg-red-600 mx-auto mt-4" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {[
                            { step: "01", icon: BookOpen, title: "Foundation Excellence", desc: "Intensive Ground Classes in India for DGCA exams with deep conceptual clarity." },
                            { step: "02", icon: Globe, title: "Global Training", desc: "World-class Flying Training abroad for international exposure." },
                            { step: "03", icon: Layers, title: "Seamless Conversion", desc: "Managing Licence Conversion flying in India after your return." },
                            { step: "04", icon: FileCheck, title: "Regulatory Support", desc: "Handling complex DGCA documentation so you focus on flying." },
                            { step: "05", icon: GraduationCap, title: "Advanced Specialization", desc: "Type Rating & Airline Prep to make you airline-ready." }
                        ].map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -10 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                <span className="text-4xl font-black text-slate-100 mb-4">{item.step}</span>
                                <div className="p-4 bg-red-50 rounded-2xl mb-6 text-red-600">
                                    <item.icon size={28} />
                                </div>
                                <h5 className="font-black text-[#203a8c] uppercase text-sm mb-4 leading-tight">{item.title}</h5>
                                <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. CALL TO ACTION */}
            <section className="py-24 md:py-40 bg-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="space-y-8 md:space-y-10">
                        <Star className="mx-auto text-[#e31e24]" size={40} fill="#e31e24" />
                        <h2 className="text-4xl md:text-7xl font-black text-[#203a8c] uppercase italic leading-none">
                            Your Cockpit <br /> Seat is Waiting.
                        </h2>
                        <p className="text-slate-500 text-base md:text-xl font-medium max-w-2xl mx-auto px-4">
                            Let’s get you there. Join the elite ranks of professional pilots under the mentorship of Aerius Pilot Academy.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 px-6">
                            <Link to="/contact" className="w-full sm:w-auto">
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full bg-[#e31e24] text-white px-10 py-5 md:py-6 rounded-full font-black uppercase tracking-[0.2em] text-[10px] md:text-xs shadow-2xl">
                                    Start Your Journey
                                </motion.button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
                {/* ALTERNATE PLACEMENT FOR GIF (SUBTLE OVERLAY) */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
                    <img src={aircraftGif} className="w-full h-full object-cover grayscale" alt="" />
                </div>
            </section>

            {/* FLOATING DECORATION */}
            <motion.div 
                style={{ x: planeX }} 
                className="fixed bottom-10 left-0 text-[#203a8c]/5 pointer-events-none z-0 hidden md:block will-change-transform"
            >
                <PlaneTakeoff size={300} />
            </motion.div>
        </motion.div>
    );
};

export default AboutPage;