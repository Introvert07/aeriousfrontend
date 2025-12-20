import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Award, BookOpen, ShieldCheck, GraduationCap, PlaneTakeoff, CheckCircle2, Star, Target, Compass, Anchor } from 'lucide-react';

// Assets
import founderImg from '../assets/about_img_3.webp'; 
import heroBg from '../assets/courseimg1.jpg'; 

const StatCounter = ({ value, label, icon: Icon }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const target = parseInt(value.replace(/\D/g, ''));

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const duration = 2000;
            const increment = target / (duration / 16);
            const timer = setInterval(() => {
                start += increment;
                if (start >= target) {
                    setCount(target);
                    clearInterval(timer);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(timer);
        }
    }, [isInView, target]);

    return (
        <div ref={ref} className="group p-8 transition-all duration-500 hover:bg-[#203a8c] rounded-[2rem]">
            <div className="text-[#e31e24] group-hover:text-white mb-4 transition-colors">
                <Icon size={32} />
            </div>
            <h3 className="text-5xl font-black text-[#203a8c] group-hover:text-white transition-colors">
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
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    
    const planeX = useTransform(smoothProgress, [0, 1], ["-20%", "120%"]);
    const bgY = useTransform(smoothProgress, [0, 1], ["0%", "25%"]);
    const textOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

    // Animation Variants for Header Text
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <div className="bg-[#fdfeff] min-h-screen font-sans selection:bg-[#e31e24] selection:text-white">
            
            {/* 1. IMMERSIVE HERO */}
            <section className="relative h-[90vh] lg:h-screen flex items-center justify-center overflow-hidden bg-slate-900">
                <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-900/60 to-slate-900 z-10" />
                    <img 
                        src={heroBg} 
                        className="w-full h-full object-cover" 
                        alt="Aviation Background"
                    />
                </motion.div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-20">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 text-white"
                    >
                        <motion.div style={{ opacity: textOpacity }} className="space-y-6">
                            <motion.div variants={itemVariants} className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-[#e31e24]" />
                                <span className="uppercase tracking-[0.5em] text-xs font-bold text-[#e31e24]">Est. Legacy</span>
                            </motion.div>
                            
                            <motion.h1 variants={itemVariants} className="text-6xl md:text-9xl font-black leading-none uppercase italic">
                                Aerius <br /> 
                                <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>Aviators</span>
                            </motion.h1>
                            
                            <motion.p variants={itemVariants} className="text-xl text-blue-100/80 max-w-xl font-light leading-relaxed">
                                Capt. Saurabh Bhatnagar: 25 years of Military flying, a decade of Commercial mastery, and 9,000+ flight hours.
                            </motion.p>
                        </motion.div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
                        className="lg:col-span-5 hidden lg:block"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-[#e31e24] rounded-[4rem] rotate-3 opacity-20 group-hover:rotate-6 transition-transform" />
                            <img src={founderImg} alt="Founder" className="relative z-10 rounded-[3.5rem] shadow-2xl transition-all duration-700" />
                        </div>
                    </motion.div>
                </div>

                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 flex flex-col items-center gap-2"
                >
                    <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                        <span className="text-[10px] uppercase tracking-widest">Scroll to Explore</span>
                        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto mt-2" />
                    </motion.div>
                </motion.div>
            </section>

            {/* 2. DYNAMIC STATS HUB */}
            <div className="relative z-30 -mt-20 max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] rounded-[3rem] p-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
                    <StatCounter value="35+" label="Total Experience" icon={Award} />
                    <StatCounter value="100+" label="Counseling Sessions" icon={BookOpen} />
                    <StatCounter value="9000+" label="Flight Hours" icon={PlaneTakeoff} />
                </div>
            </div>

            {/* 3. THE BIOGRAPHY TIMELINE */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col lg:flex-row gap-20">
                        <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
                            <h2 className="text-sm font-black text-[#e31e24] uppercase tracking-[0.3em] mb-4">The Captain's Log</h2>
                            <h3 className="text-5xl font-black text-[#203a8c] uppercase leading-tight">
                                A Career <br /> In Motion.
                            </h3>
                            <div className="mt-8 p-6 bg-slate-50 rounded-3xl border-l-4 border-[#203a8c]">
                                <p className="text-sm text-slate-500 leading-relaxed italic">
                                    "Renowned for exemplary leadership, piloting proficiency, and unwavering commitment to aviation safety."
                                </p>
                            </div>
                        </div>

                        <div className="lg:w-2/3 space-y-32">
                            <motion.div 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-12 border-l-2 border-slate-100"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#203a8c] ring-8 ring-blue-50" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">1989 — 2014</span>
                                <h4 className="text-3xl font-black text-slate-800 uppercase mt-2 mb-6 flex items-center gap-3">
                                    <Anchor className="text-[#203a8c]" /> Naval Aviation
                                </h4>
                                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                    <p>During his illustrious career, Captain Bhatnagar piloted a wide array of aircraft including <strong>fighters and maritime surveillance planes</strong>, making significant contributions during pivotal moments such as the <strong>Kargil conflict of 1999</strong>.</p>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold uppercase text-[#203a8c] mb-1">Squadron Command</p>
                                            <p className="text-sm">Commanding Officer of the Dornier 228 squadron based in Kochi.</p>
                                        </div>
                                        <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                                            <p className="text-xs font-bold uppercase text-[#203a8c] mb-1">Safety Leadership</p>
                                            <p className="text-sm">Joint Director of Aviation Safety at Naval Headquarters, New Delhi.</p>
                                        </div>
                                    </div>
                                    <p className="text-base flex items-center gap-2 text-[#e31e24] font-bold">
                                        <ShieldCheck size={20} /> Certified Aviation Accident Investigator
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0, y: 50 }} 
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="relative pl-12 border-l-2 border-slate-100"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[#e31e24] ring-8 ring-red-50" />
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">2014 — 2024</span>
                                <h4 className="text-3xl font-black text-slate-800 uppercase mt-2 mb-6 flex items-center gap-3">
                                    <PlaneTakeoff className="text-[#e31e24]" /> Commercial Aviation
                                </h4>
                                <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                    <p>Transitioning to Commercial Aviation in 2014, he joined <strong>“IndiGo”</strong> as an Airbus A-320 pilot until 2019, later moving to <strong>“Air Asia India” (now Air India Express)</strong> as Senior Commander.</p>
                                    <p className="text-sm bg-[#203a8c] text-white p-6 rounded-[2rem] shadow-xl relative overflow-hidden">
                                        Retired from active flying duty on February 29, 2024, with a cumulative flight experience exceeding 9000 hours.
                                        <PlaneTakeoff className="absolute -right-4 -bottom-4 opacity-10 rotate-12" size={120} />
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. TECHNICAL DASHBOARD */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="mb-16">
                        <h2 className="text-5xl font-black uppercase italic tracking-tighter">Technical Credentials</h2>
                        <p className="text-blue-400 mt-2 font-mono uppercase tracking-[0.3em]">ATPL No: 2637 | Since Dec 2002</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "PIC Ratings", desc: "A-320, P-68 C", icon: Compass },
                            { title: "Co-Pilot", desc: "Do-228 Aircraft", icon: Target },
                            { title: "Instrument", desc: "Open Instrument Rating", icon: ShieldCheck },
                            { title: "Flight Hours", desc: "9,000+ Multi-Engine", icon: PlaneTakeoff }
                        ].map((item, idx) => (
                            <motion.div 
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-8 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white/10 transition-all"
                            >
                                <item.icon className="text-[#e31e24] mb-4" size={32} />
                                <h5 className="font-black uppercase text-sm mb-2">{item.title}</h5>
                                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PASSION & CTA */}
            <section className="py-40 bg-white text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-10"
                    >
                        <Star className="mx-auto text-[#e31e24]" size={48} fill="#e31e24" />
                        <h2 className="text-5xl md:text-7xl font-black text-[#203a8c] uppercase italic leading-none">
                            Ready For <br /> Takeoff?
                        </h2>
                        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                            Transform your aviation dreams into a professional reality under the guidance of Captain Saurabh Bhatnagar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-[#e31e24] text-white px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs shadow-2xl"
                            >
                                Start Your Journey
                            </motion.button>
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                className="border-2 border-[#203a8c] text-[#203a8c] px-12 py-6 rounded-full font-black uppercase tracking-[0.2em] text-xs"
                            >
                                View Programs
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.02] pointer-events-none">
                   <h2 className="text-[30vw] font-black text-[#203a8c]">AERIUS</h2>
                </div>
            </section>

            <motion.div 
                style={{ x: planeX }} 
                className="fixed bottom-10 left-0 text-[#203a8c]/5 pointer-events-none z-0"
            >
                <PlaneTakeoff size={300} />
            </motion.div>
        </div>
    );

    
};

export default AboutPage;