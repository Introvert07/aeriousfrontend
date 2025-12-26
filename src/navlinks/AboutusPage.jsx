import React, { useEffect, useState, useRef, useMemo } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, BookOpen, ShieldCheck, GraduationCap, PlaneTakeoff, CheckCircle2, Star, Target, Compass, Anchor, Layers, Globe, FileCheck, Rocket } from 'lucide-react';

// Assets
import founderImg from '../assets/about_img_3.webp'; 
import heroBg from '../assets/courseimg1.jpg'; 

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

            {/* 3. THE BIOGRAPHY TIMELINE */}
            <section className="py-20 md:py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
                        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                            <h2 className="text-sm font-black text-[#e31e24] uppercase tracking-[0.3em] mb-4">The Captain's Log</h2>
                            <h3 className="text-4xl md:text-5xl font-black text-[#203a8c] uppercase leading-tight">A Career <br /> In Motion.</h3>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="mt-10 mb-10 lg:mb-0 relative group"
                            >
                                <div className="absolute -inset-2 bg-[#e31e24] rounded-3xl rotate-2 opacity-10 group-hover:rotate-3 transition-transform" />
                                <img 
                                    src={founderImg} 
                                    alt="Capt. Saurabh Bhatnagar" 
                                    className="relative z-10 rounded-2xl shadow-xl w-full aspect-[4/5] object-cover"
                                />
                            </motion.div>

                            <div className="mt-6 md:mt-8 p-6 bg-slate-50 rounded-3xl border-l-4 border-[#203a8c]">
                                <p className="text-sm text-slate-500 leading-relaxed italic">"Renowned for exemplary leadership, piloting proficiency, and unwavering commitment to aviation safety."</p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 space-y-20 md:space-y-32">
                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative pl-8 md:pl-12 border-l-2 border-slate-100">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#203a8c] ring-8 ring-blue-50" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">1989 — 2014</span>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-800 uppercase mt-2 mb-6 flex items-center gap-3"><Anchor className="text-[#203a8c]" size={24} /> Naval Aviation</h4>
                                <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                                    <p>During his illustrious career, Captain Bhatnagar piloted a wide array of aircraft including <strong>fighters and maritime surveillance planes</strong>.</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold uppercase text-[#203a8c] mb-1">Squadron Command</p>
                                            <p className="text-sm">Commanding Officer of the Dornier 228 squadron based in Kochi.</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold uppercase text-[#203a8c] mb-1">Safety Leadership</p>
                                            <p className="text-sm">Joint Director of Aviation Safety at Naval Headquarters.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} className="relative pl-8 md:pl-12 border-l-2 border-slate-100">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#e31e24] ring-8 ring-red-50" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2014 — 2024</span>
                                <h4 className="text-2xl md:text-3xl font-black text-slate-800 uppercase mt-2 mb-6 flex items-center gap-3"><PlaneTakeoff className="text-[#e31e24]" size={24} /> Commercial Aviation</h4>
                                <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
                                    <p>Transitioned to Commercial Aviation joining <strong>IndiGo</strong> and later <strong>Air India Express</strong> as Senior Commander.</p>
                                    <p className="text-sm bg-[#203a8c] text-white p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
                                        Retired with a cumulative flight experience exceeding 9000 hours.
                                        <PlaneTakeoff className="absolute -right-4 -bottom-4 opacity-10 rotate-12" size={80} />
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ABOUT AERIUS ECOSYSTEM SECTION */}
            <section className="py-20 md:py-32 bg-slate-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <h2 className="text-sm font-black text-[#e31e24] uppercase tracking-[0.3em] mb-4">About Aerius Pilot Academy</h2>
                            <h3 className="text-4xl md:text-6xl font-black text-[#203a8c] uppercase leading-tight mb-8">
                                The Complete Ecosystem <br /> <span className="text-red-600">for Aviators</span>
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                At Aerius Pilot Academy (a subsidiary of Aerius Aviators LLP), we don’t just train students; <strong>we mentor future captains</strong>. 
                            </p>
                            <p className="text-slate-500 leading-relaxed">
                                We understand that the journey from an aspiring aviator to a Type-Rated Commercial Pilot is complex and demanding. That is why we have built a seamless, end-to-end training ecosystem designed to handle every hurdle a student faces.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-[#203a8c] p-8 md:p-12 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
                            <Rocket className="absolute -right-10 -top-10 text-white/10" size={240} />
                            <h4 className="text-2xl font-black uppercase mb-6">Why Choose Us?</h4>
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
                            { step: "01", icon: BookOpen, title: "Foundation Excellence", desc: "Intensive Ground Classes for DGCA exams with deep conceptual clarity." },
                            { step: "02", icon: Globe, title: "Global Training", desc: "World-class Flying Training abroad for international exposure." },
                            { step: "03", icon: Layers, title: "Seamless Conversion", desc: "Managing License Conversion flying in India after your return." },
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

            {/* 5. TECHNICAL CREDENTIALS */}
            <section className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-12 md:mb-16">
                        <h2 className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Technical Credentials</h2>
                        <p className="text-blue-400 mt-2 font-mono uppercase tracking-[0.3em] text-xs md:text-sm">ATPL No: 2637 | Since Dec 2002</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "PIC Ratings", desc: "A-320, P-68 C", icon: Compass },
                            { title: "Co-Pilot", desc: "Do-228 Aircraft", icon: Target },
                            { title: "Instrument", desc: "Open Instrument Rating", icon: ShieldCheck },
                            { title: "Flight Hours", desc: "9,000+ Multi-Engine", icon: PlaneTakeoff }
                        ].map((item, idx) => (
                            <motion.div key={idx} whileHover={{ y: -10 }} className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all">
                                <item.icon className="text-[#e31e24] mb-4" size={32} />
                                <h5 className="font-black uppercase text-sm mb-2">{item.title}</h5>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
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
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
                    <h2 className="text-[25vw] font-black text-[#203a8c]">AERIUS</h2>
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