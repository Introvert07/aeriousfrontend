import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, Plane, Navigation, ShieldCheck, Crosshair } from 'lucide-react';

const courses = [
    {
        id: "", // Removed TC-01
        title: "Private Pilot Licence",
        subtitle: "PPL / SINGLE-ENGINE",
        duration: "12 WEEKS",
        description: "A licence that permits a pilot to handle & command an aircraft privately. Mastery of maneuvers and solo flight.",
        icon: <Navigation size={18} />,
        status: "OPEN",
        path: "/courses/private-pilot"
    },
    {
        id: "", // Removed TC-02
        title: "Instrument Rating",
        subtitle: "IR / NAVIGATION",
        duration: "08 WEEKS",
        description: "Intensive training focused on flying solely by reference to aircraft instruments and radio navigation.",
        icon: <ShieldCheck size={18} />,
        status: "TECHNICAL",
        path: "/courses/instrument-rating"
    },
    {
        id: "", // Removed TC-03
        title: "Commercial Pilot Licence",
        subtitle: "CPL / MULTI-ENGINE",
        duration: "45 WEEKS",
        description: "Professional licence allowing the holder to be compensated for their piloting services in airline operations.",
        icon: <Plane size={18} />,
        status: "ACTIVE",
        path: "/courses/commercial-pilot"
    }
];

const PopularCourses = () => {
    return (
        <section className="bg-[#f8fafc] py-12 md:py-24 px-6 md:px-8 min-h-screen flex flex-col justify-center relative overflow-hidden">
            {/* HUD Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(#1d4ed8 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />

            <div className="max-w-7xl mx-auto w-full relative z-10">
                
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 md:mb-16 gap-8">
                    <div className="relative">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: '60px' }}
                            viewport={{ once: true }}
                            className="h-1 bg-red-600 mb-4"
                        />
                        <span className="text-blue-600 font-black tracking-[0.4em] uppercase text-[10px] mb-2 block">
                             {/* Removed Training Syllabus v2.5 */}
                        </span>
                        <h2 className="text-5xl md:text-7xl lg:text-8xl font-[1000] uppercase tracking-tighter text-blue-950 leading-[0.8] transition-all">
                            Popular <br/>
                            <span className="text-transparent" style={{ WebkitTextStroke: '1.5px #dc2626' }}>Courses.</span>
                        </h2>
                    </div>
                    
                    <div className="max-w-xs border-l-2 border-red-600 pl-6">
                        <p className="text-blue-900/70 font-bold uppercase text-[10px] leading-tight mb-4">
                            We offer quality training courses in the field of aviation to transform our students into trained professionals.
                        </p>
                        <Link to="/courses" className="text-red-600 text-[11px] font-black uppercase tracking-widest flex items-center gap-1 hover:gap-3 transition-all duration-300">
                            View All Courses <ChevronRight size={14} />
                        </Link>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {courses.map((course, i) => (
                        <Link key={i} to={course.path}>
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-white border border-blue-50 p-8 h-full cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/10 to-transparent h-20 w-full z-10 opacity-0 group-hover:opacity-100 pointer-events-none"
                                    animate={{ top: ['-20%', '120%'] }}
                                    transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                                />

                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-blue-50 group-hover:border-red-600 transition-colors duration-300" />
                                
                                <div className="relative z-20 flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-8">
                                        <div className="p-3 bg-slate-50 text-blue-900 group-hover:bg-red-600 group-hover:text-white transition-all duration-300 rounded-sm">
                                            {course.icon}
                                        </div>
                                        {/* Removed ID Tag display */}
                                    </div>

                                    <h4 className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">{course.subtitle}</h4>
                                    <h3 className="text-2xl font-[1000] text-blue-950 uppercase leading-tight mb-4 group-hover:text-red-600 transition-colors">
                                        {course.title}
                                    </h3>
                                    
                                    <p className="text-slate-500 text-[13px] font-medium leading-relaxed mb-8 flex-grow">
                                        {course.description}
                                    </p>

                                    <div className="flex items-center gap-4 border-y border-slate-100 py-4 mb-8">
                                        <div className="flex-1">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Duration</p>
                                            <p className="text-[12px] font-black text-blue-950">{course.duration}</p>
                                        </div>
                                        <div className="w-[1px] h-6 bg-slate-200" />
                                        <div className="flex-1">
                                            <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Status</p>
                                            <p className="text-[12px] font-black text-emerald-600">{course.status}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-blue-950 group-hover:text-red-600 transition-all duration-300 font-black text-[11px] uppercase tracking-widest">
                                        Enroll Course <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                                
                                <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-500">
                                    <Crosshair size={120} />
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* Footer Decor Line */}
                <div className="mt-16 flex items-center gap-4 opacity-20">
                    <div className="h-[1px] flex-grow bg-blue-900" />
                    <div className="flex gap-2">
                        {[1, 2, 3, 4].map(i => <div key={i} className="w-2 h-2 bg-blue-900 rotate-45" />)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PopularCourses;