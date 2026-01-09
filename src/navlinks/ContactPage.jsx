import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, Clock, Loader2, CheckCircle2 } from 'lucide-react';

const ContactPage = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [startTime, setStartTime] = useState(null);

  // Set a timestamp when the user lands on the page to prevent instant bot submissions
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // --- EMAILJS CONFIGURATION ---


  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    // --- QUOTA PROTECTION (Saves your 200 emails) ---
    // 1. Honeypot check: If the hidden 'bot_field' is filled, it's a bot.
    if (form.current.bot_field.value) {
      return; 
    }

    // 2. Timing check: If submitted in less than 3 seconds, it's likely a bot.
    const timeTaken = (Date.now() - startTime) / 1000;
    if (timeTaken < 3) {
      alert("Transmission too fast. Please review your details.");
      return;
    }

    setIsSending(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
        setIsSuccess(true);
        form.current.reset();
        // Reset success state after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000);
      }, (error) => {
        console.error('EmailJS Error:', error.text);
        alert("Transmission Failed. Please check your connection or try again later.");
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] py-10 md:py-16 px-4 md:px-12 font-sans selection:bg-[#e21d1d] selection:text-white overflow-x-hidden relative">
      {/* Animated Background Pattern */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 2 }}
        className="absolute top-0 left-0 w-full h-full pointer-events-none" 
        style={{ 
          backgroundImage: 'radial-gradient(#1a2e6e 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- HEADER --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div 
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] mb-6 border border-slate-100"
          >
            <Globe size={14} className="animate-spin-slow" /> Flight Operations Center
          </motion.div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black text-[#1a2e6e] tracking-tighter italic uppercase mb-6 leading-tight">
            Get In <motion.span initial={{ color: "#1a2e6e" }} animate={{ color: "#e21d1d" }} transition={{ delay: 1 }} className="text-[#e21d1d]">Touch</motion.span>
          </h1>
        </motion.div>

        {/* --- MAP SECTION --- */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 relative"
        >
          <div className="rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden h-[350px] md:h-[500px] shadow-[0_32px_64px_-16px_rgba(26,46,110,0.1)] border-[6px] md:border-[12px] border-white relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.4258284534723!2d77.34863267528606!3d28.556965075706596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cf9352e82b%3A0xc6c4217117e17088!2sAmrapali%20Sapphire%2C%20Sadarpur%2C%20Sector-45%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1704810000000!5m2!1sen!2sin" 
              width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" className="grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16 items-start">
          
          {/* LEFT: CONTACT INFO */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-5 grid grid-cols-1 gap-4 md:gap-6"
          >
            {[
              { icon: MapPin, title: "Operations HQ", content: "1701, Tower N, Amrapali Sapphire, Noida Sec-45", color: "bg-[#1a2e6e]" },
              { icon: Phone, title: "Support Line", content: "+91 9999769084", color: "bg-[#e21d1d]" },
              { icon: Mail, title: "Dispatch Email", content: "director@aeriuspilotacademy.com", color: "bg-blue-500" },
              { icon: Clock, title: "Duty Hours", content: "Mon - Sat: 09:00 - 18:00 IST", color: "bg-slate-800" }
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp}
                whileHover={{ x: 10, backgroundColor: "#f8fafc" }}
                className="bg-white p-6 md:p-7 rounded-[2rem] shadow-sm border border-slate-50 flex items-center gap-4 md:gap-6 group cursor-default"
              >
                <div className={`${item.color} p-4 rounded-2xl text-white shadow-lg group-hover:rotate-[15deg] transition-transform`}>
                  <item.icon size={22} />
                </div>
                <div>
                  <h3 className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-1">{item.title}</h3>
                  <p className="text-[#1a2e6e] font-extrabold text-sm md:text-base">{item.content}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-white p-6 sm:p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] border border-white"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              
              {/* HONEYPOT FIELD (Hidden from humans, catches bots) */}
              <input type="text" name="bot_field" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                  <input name="name" type="text" required placeholder="Your Name" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#1a2e6e] outline-none font-bold text-[#1a2e6e] transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                  <input name="email" type="email" required placeholder="pilot@aerius.com" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#1a2e6e] outline-none font-bold text-[#1a2e6e] transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Contact Number</label>
                <input name="phone" type="tel" required placeholder="+91 00000 00000" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#1a2e6e] outline-none font-bold text-[#1a2e6e] transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Message</label>
                <textarea name="message" rows="4" required placeholder="Describe your flight inquiry..." className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-[#1a2e6e] outline-none font-bold text-[#1a2e6e] transition-all resize-none"></textarea>
              </div>

              <motion.button 
                disabled={isSending}
                whileHover={{ scale: 1.01, backgroundColor: "#14255a" }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#1a2e6e] text-white py-5 rounded-2xl font-black uppercase tracking-[0.3em] text-[11px] flex items-center justify-center gap-3 shadow-xl disabled:opacity-70 transition-colors"
              >
                <AnimatePresence mode="wait">
                  {isSending ? (
                    <motion.div key="sending" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                      Transmitting <Loader2 className="animate-spin" size={18} />
                    </motion.div>
                  ) : isSuccess ? (
                    <motion.div key="success" initial={{ y: 20 }} animate={{ y: 0 }} className="flex items-center gap-2 text-green-400">
                      Sent Successfully <CheckCircle2 size={18} />
                    </motion.div>
                  ) : (
                    <motion.div key="idle" className="flex items-center gap-2">
                      Execute Transmission <Send size={16} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;