import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Plane, ShieldCheck, Clock, MapPin, Award, CheckCircle2, 
  Euro, Coffee, Bed, School, Users, Zap, ExternalLink, Send
} from 'lucide-react';

// Replace with your actual image paths
import typeRatingHero from '../../assets/typerating1.jpeg'; 

const TypeRatingPage = () => {
  const headerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const trainingModules = [
    { title: "Ground Training", duration: "80 Hours", desc: "Classroom sessions with written exams." },
    { title: "APT/CPT Training", duration: "12-16 Hours", desc: "Airbus Procedure Trainer or B737 Mock-up sessions." },
    { title: "MCC & JOC", duration: "40 Hours", desc: "Multi-Crew Cooperation and Jet Orientation Course." },
    { title: "FFS Training", duration: "32 Hours", desc: "Full Flight Simulator Training on Level 'D' devices." },
    { title: "Skill Test", duration: "08 Hours", desc: "Day & Night checks by Designated Pilot Examiners (DPE)." }
  ];

  return (
    <div className="bg-[#fcfcfc] font-sans text-[#1a2e6e] antialiased">
      
      {/* --- HERO SECTION --- */}
      <section ref={headerRef} className="relative h-[60vh] flex items-center overflow-hidden bg-[#1a2e6e]">
        <motion.div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${typeRatingHero})`, y }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a2e6e] via-[#1a2e6e]/60 to-transparent" />
        </motion.div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-3 mb-4">
               <div className="h-1 w-12 bg-[#e21d1d]" />
               <span className="text-white text-xs font-black uppercase tracking-[0.4em]">Global Training Partner</span>
            </div>
            <h1 className="text-white text-4xl md:text-6xl font-black uppercase italic leading-tight">
              Type Rating <br />
              <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>BAA Vietnam</span>
            </h1>
            <p className="text-white/80 mt-6 max-w-xl font-medium">
              A Gateway to Airline Cockpits. State-of-the-art Level “D” Simulators for A320 & B737 NG/MAX in the heart of Ho Chi Minh City.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- QUICK STATS --- */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Duration", val: "39-41 Days", icon: <Clock /> },
            { label: "Cost (A320)", val: "€ 14,000", icon: <Euro /> },
            { label: "Location", val: "HCMC, Vietnam", icon: <MapPin /> },
            { label: "Standard", val: "EASA / DGCA", icon: <ShieldCheck /> },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="text-[#e21d1d]">{stat.icon}</div>
              <div>
                <p className="text-[10px] uppercase font-black text-gray-400">{stat.label}</p>
                <p className="text-sm font-bold uppercase">{stat.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          
          <div className="lg:col-span-8 space-y-16">
            {/* Overview */}
            <div>
              <h2 className="text-3xl font-black uppercase mb-6 italic border-b-4 border-[#e21d1d] w-fit pb-2">The Program</h2>
              <p className="text-lg leading-relaxed text-gray-600 font-medium italic">
                "BAA Vietnam offers an airline-style training environment tailored for real-world readiness. 
                With a strong track record of DGCA successful ratings, it’s the ideal launchpad for Indian aviators."
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-[#1a2e6e]">
                <School className="mb-4 text-[#e21d1d]" size={32} />
                <h3 className="font-black uppercase mb-3">Facility Excellence</h3>
                <ul className="text-sm space-y-2 text-gray-600 font-medium">
                  <li>• Level “D” New Generation Simulators</li>
                  <li>• 1 APT A320 + 3 Mock-up Devices</li>
                  <li>• 5 Modern Classrooms</li>
                  <li>• 24/7 Security & Compound Access</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl border-l-4 border-[#e21d1d]">
                <Bed className="mb-4 text-[#1a2e6e]" size={32} />
                <h3 className="font-black uppercase mb-3">Accommodation</h3>
                <ul className="text-sm space-y-2 text-gray-600 font-medium">
                  <li>• Twin rooms within 5-min walk</li>
                  <li>• Gym, Pool, and Pantry access</li>
                  <li>• Daily cleaning & towel replacement</li>
                  <li>• Veg & Non-Veg breakfast included</li>
                </ul>
              </div>
            </div>

            {/* Training Timeline */}
            <div>
              <h3 className="text-2xl font-black uppercase italic mb-8">Training Curriculum</h3>
              <div className="space-y-4">
                {trainingModules.map((mod, i) => (
                  <div key={i} className="flex items-center gap-6 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[#1a2e6e] text-white font-black w-12 h-12 flex items-center justify-center rounded-xl shrink-0">
                      {i + 1}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold uppercase text-sm">{mod.title}</h4>
                      <p className="text-xs text-gray-500 font-medium">{mod.desc}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="text-[10px] font-black uppercase bg-gray-100 px-3 py-1 rounded-full">
                        {mod.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions/Exclusions */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-green-100 bg-green-50/30 p-8 rounded-3xl">
                <h4 className="font-black uppercase text-green-700 mb-4 flex items-center gap-2">
                  <CheckCircle2 size={20}/> Inclusions
                </h4>
                <ul className="text-xs space-y-3 font-bold text-gray-600 uppercase">
                  <li>✔ CBT Account & iPad</li>
                  <li>✔ Training Materials</li>
                  <li>✔ Airport Pickup/Sending</li>
                  <li>✔ Daily Snacks (Lounge)</li>
                </ul>
              </div>
              <div className="border border-red-100 bg-red-50/30 p-8 rounded-3xl">
                <h4 className="font-black uppercase text-red-700 mb-4 flex items-center gap-2">
                  <Zap size={20}/> Fee Structure
                </h4>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded-xl border border-red-100">
                    <p className="text-[10px] text-gray-400 uppercase">A320 Initial TR</p>
                    <p className="text-lg font-black italic">€ 14,000</p>
                  </div>
                  <div className="bg-white p-3 rounded-xl border border-red-100">
                    <p className="text-[10px] text-gray-400 uppercase">B737 NG Initial TR</p>
                    <p className="text-lg font-black italic">€ 15,500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- SIDEBAR --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-10 space-y-6">
              {/* Application Form */}
              <div className="bg-white p-8 rounded-[2rem] shadow-2xl border-t-8 border-[#e21d1d]">
                <div className="text-center mb-8">
                  <Users className="mx-auto text-[#1a2e6e] mb-4" size={48} />
                  <h3 className="text-2xl font-black uppercase italic tracking-tighter">Register</h3>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-2">Next Batch Starting Soon</p>
                </div>
                <form className="space-y-4">
                  <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                  <select className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm">
                    <option>Select Type</option>
                    <option>A320 Initial TR</option>
                    <option>B737 NG Initial TR</option>
                    <option>Renewal / IR</option>
                  </select>
                  <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-[#1a2e6e] text-sm" />
                  <button className="w-full bg-[#1a2e6e] text-white font-black py-5 rounded-2xl uppercase tracking-widest hover:bg-[#e21d1d] transition-all flex items-center justify-center gap-3">
                    Enquire Now <Send size={18} />
                  </button>
                </form>
              </div>

              {/* Approvals */}
              <div className="bg-[#1a2e6e] p-8 rounded-[2rem] text-white">
                <h4 className="font-black uppercase text-sm mb-4 italic">Global Approvals</h4>
                <div className="grid grid-cols-2 gap-4 text-[10px] font-bold opacity-80">
                  <div className="border border-white/20 p-2 rounded-lg">DGCA INDIA</div>
                  <div className="border border-white/20 p-2 rounded-lg">CAA VIETNAM</div>
                  <div className="border border-white/20 p-2 rounded-lg">CAA THAILAND</div>
                  <div className="border border-white/20 p-2 rounded-lg">CAA MALAYSIA</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default TypeRatingPage;