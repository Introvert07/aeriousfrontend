import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CheckCircle2, Globe, FileCheck, ClipboardList, Plane } from 'lucide-react';

// --- IMAGE IMPORT ---
import stepsImg from '../assets/steps.webp';

const stages = [
    {
        number: "01",
        stepText: "Step 01",
        title: "Ground Classes",
        location: "Base: India",
        duration: "2-3 Months",
        description: "Master aeronautical knowledge and regulatory requirements. This is your theoretical foundation.",
        tasks: [
            "10th & 12th Board Verification", "Police Verification (PCC)",
            "Class 2 Medical (DGCA)", "DGCA Computer Number",
            "EGCA Profile Creation", "Class 1 Medical (IAF/Civil)",
            "VISA Formalities", "DGCA Written Exams"
        ],
        icon: <ClipboardList className="text-red-600" size={20} />,
    },
    {
        number: "02",
        stepText: "Step 02",
        title: "Flying Training",
        location: "Base: Abroad",
        duration: "12-15 Months",
        description: "Gain hands-on flight experience across international hubs and master the cockpit.",
        tasks: [
            "Training: USA, Spain, Australia", "Training: NZ, Philippines, SA",
            "Issue of Foreign CPL", "Radio License Issuance",
            "ELP Certificate Level 4"
        ],
        icon: <Globe className="text-blue-600" size={20} />,
    },
    {
        number: "03",
        stepText: "Step 03",
        title: "License Conversion",
        location: "Base: India",
        duration: "1-2 Months",
        description: "Validate your international experience and secure your Indian Commercial Pilot License.",
        tasks: [
            "Flight Tests (DGCA FTO)", "Document Compilation",
            "Paperwork Submission", "Issue of Indian CPL"
        ],
        icon: <FileCheck className="text-emerald-600" size={20} />,
    }
];

const StageSection = ({ stage }) => {
    const { scrollYProgress } = useScroll();
    // Adjusted parallax for mobile vs desktop
    const xMove = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div className="min-h-[80vh] md:min-h-screen flex flex-col justify-center px-4 sm:px-8 lg:px-16 py-12 md:py-20 relative overflow-hidden">
            {/* Animated Watermark Number - Scaled for mobile */}
            <motion.div 
                style={{ x: xMove }}
                className="absolute right-[-20px] top-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] font-black text-slate-900/[0.03] select-none pointer-events-none"
            >
                {stage.number}
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ margin: "-10%" }}
                transition={{ duration: 0.8, ease: "circOut" }}
                className="max-w-2xl lg:max-w-lg relative z-10"
            >
                <div className="flex items-center gap-3 mb-4">
                    <motion.span 
                        initial={{ width: 0 }}
                        whileInView={{ width: "auto" }}
                        className="overflow-hidden whitespace-nowrap text-[9px] md:text-[10px] font-black bg-red-600 text-white px-3 py-1 rounded-full tracking-widest uppercase"
                    >
                        {stage.stepText}
                    </motion.span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stage.location}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tighter mb-6">
                    {stage.title}
                </h2>

                <motion.div 
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white/90 backdrop-blur-2xl border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] relative"
                >
                    <p className="text-slate-500 text-xs md:text-sm font-medium mb-8 leading-relaxed">
                        {stage.description}
                    </p>
                    
                    {/* Grid collapses to 1 col on small mobile, 2 col on tablet/desktop */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                        {stage.tasks.map((task, i) => (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                key={i} 
                                className="flex items-start gap-3 group cursor-default"
                            >
                                <CheckCircle2 className="text-emerald-500 mt-0.5 shrink-0 group-hover:scale-125 transition-transform" size={14} />
                                <span className="text-[10px] md:text-[11px] font-bold text-slate-700 uppercase tracking-tight leading-tight group-hover:text-blue-600 transition-colors">
                                    {task}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-8 md:mt-10 pt-6 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-white transition-colors">{stage.icon}</div>
                        </div>
                        <div className="px-4 py-2 bg-slate-900 rounded-lg w-full sm:w-auto text-center">
                            <p className="text-[10px] md:text-[11px] font-black text-white uppercase italic">{stage.duration}</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

const ProgramOverview = () => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div className="relative bg-[#fcfdfe]">
            {/* Header */}
            <div className="px-6 md:px-8 pt-16 md:pt-24 pb-8 md:pb-12 text-center">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="flex items-center justify-center gap-2 mb-4"
                >
                    <Plane className="text-red-600" size={16} />
                    <span className="text-[10px] md:text-[11px] font-black text-blue-900 tracking-[0.3em] md:tracking-[0.4em] uppercase">The Roadmap</span>
                </motion.div>
                <h1 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter">
                    Pilot <span className="text-red-600">Syllabus</span>
                </h1>
            </div>

            <section className="relative">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative">
                    
                    {/* Sticky Image Container - Visible on LG, hidden on mobile in its current form */}
                    <div className="hidden lg:block w-[45%] h-screen sticky top-0 overflow-hidden">
                        <div className="w-full h-full flex items-center justify-center p-12">
                            <div className="relative w-full aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-2xl bg-slate-200">
                                <motion.img 
                                    style={{ scale: imageScale }}
                                    src={stepsImg} 
                                    className="w-full h-full object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                                
                                <div className="absolute inset-8 border border-white/20 rounded-[2.5rem] pointer-events-none">
                                    <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-red-500" />
                                    <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-red-500" />
                                </div>

                                <div className="absolute bottom-12 left-12 right-12">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-red-500 font-mono text-[10px] tracking-tighter mb-1 font-bold">FLIGHT_DATA_SYNC</p>
                                            <p className="text-white font-black text-xl uppercase tracking-tighter leading-none">Global Standard<br/>Training</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-white/40 font-mono text-[8px] uppercase">Progression</p>
                                            <div className="h-1 w-24 bg-white/10 mt-1 rounded-full overflow-hidden">
                                                <motion.div 
                                                    style={{ width: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                                                    className="h-full bg-red-600"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Image Version - Shown only on small screens before the steps */}
                    <div className="block lg:hidden px-6 mb-8">
                         <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-xl">
                            <img src={stepsImg} className="w-full h-full object-cover" alt="Steps" />
                            <div className="absolute inset-0 bg-slate-900/40" />
                            <div className="absolute bottom-4 left-4">
                                <p className="text-white font-black text-lg uppercase tracking-tight">Global Training Standards</p>
                            </div>
                         </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="w-full lg:w-[55%] flex flex-col relative">
                        {/* Progress Line - Hidden on mobile, sticky on desktop */}
                        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-slate-100 hidden lg:block">
                            <motion.div 
                                style={{ height: useTransform(smoothProgress, [0, 1], ["0%", "100%"]) }}
                                className="w-full bg-red-600 shadow-[0_0_15px_#ef4444]"
                            />
                        </div>

                        {stages.map((stage, i) => (
                            <StageSection key={i} stage={stage} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <div className="py-12 md:py-20 bg-slate-950 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 blur-[100px] rounded-full" />

                <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                    <div className="w-full md:w-auto">
                        <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.3em]">Clear for Takeoff</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-[1000] text-white uppercase tracking-tighter leading-tight md:leading-none">
                            Start Your <span className="text-red-600">Journey</span>
                        </h2>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
                        <div className="text-center sm:text-right hidden sm:block">
                            <p className="text-white font-bold text-xs uppercase tracking-widest">Admissions 2025-26</p>
                            <p className="text-slate-500 text-[10px] uppercase font-medium">Limited Slots Available</p>
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative w-full sm:w-auto px-10 py-4 bg-white hover:bg-red-600 text-slate-950 hover:text-white transition-all duration-300 rounded-xl shadow-2xl overflow-hidden"
                        >
                            <span className="relative z-10 font-black uppercase tracking-widest text-[11px]">Enroll Now</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </motion.button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
        </div>
    );
};

export default ProgramOverview;