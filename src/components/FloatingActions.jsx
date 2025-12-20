import React, { useState, useEffect } from 'react';
import { 
  ChevronUp, 
  MessageCircle, 
  Instagram, 
  Mail, 
  Phone 
} from 'lucide-react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Modern Social Icon Wrapper Component
  const SocialIcon = ({ href, icon: Icon, baseBg, hoverGlow, iconColor }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex items-center justify-center 
        w-10 h-10 mb-2 md:w-12 md:h-12 md:mb-3 
        transition-all duration-300 ${baseBg} backdrop-blur-md 
        border-l-2 border-y border-white/20 rounded-l-lg md:rounded-l-xl shadow-xl 
        md:hover:w-16 active:scale-95 ${hoverGlow}`}
    >
      <Icon 
        size={18} 
        strokeWidth={2.5}
        className={`md:w-[22px] transition-all duration-300 ${iconColor} group-hover:scale-110 group-hover:brightness-125`} 
      />
      {/* Glossy Overlay effect on hover */}
      <div className="absolute inset-0 opacity-0 md:group-hover:opacity-30 bg-gradient-to-tr from-white/40 to-transparent transition-opacity" />
    </a>
  );

  return (
    <>
      {/* --- RIGHT SIDEBAR SOCIALS --- */}
      {/* On mobile, we translate it lower (top-2/3) to stay clear of menus */}
      <div className="fixed right-0 top-[60%] md:top-1/2 -translate-y-1/2 flex flex-col z-[9999] items-end">
        
        {/* Instagram */}
        <SocialIcon 
          href="https://instagram.com" 
          icon={Instagram} 
          baseBg="bg-gradient-to-br from-[#833ab4]/80 via-[#fd1d1d]/80 to-[#fcb045]/80"
          iconColor="text-white"
          hoverGlow="md:hover:shadow-[0_0_15px_rgba(253,29,29,0.5)]"
        />

        {/* Gmail */}
        <SocialIcon 
          href="mailto:info@aeriusaviators.com" 
          icon={Mail} 
          baseBg="bg-[#EA4335]/90"
          iconColor="text-white"
          hoverGlow="md:hover:shadow-[0_0_15px_rgba(234,67,53,0.5)]"
        />

        {/* WhatsApp */}
        <SocialIcon 
          href="https://wa.me/919266307570" 
          icon={MessageCircle} 
          baseBg="bg-[#25D366]/90"
          iconColor="text-white"
          hoverGlow="md:hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]"
        />

        {/* Phone */}
        <SocialIcon 
          href="tel:+919266307570" 
          icon={Phone} 
          baseBg="bg-[#0ea5e9]/90"
          iconColor="text-white"
          hoverGlow="md:hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]"
        />
      </div>

      {/* --- PREMIUM BACK TO TOP --- */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-[9998]">
        <button
          onClick={scrollToTop}
          className={`${
            isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-50 pointer-events-none'
          } group relative transition-all duration-500 ease-out`}
        >
          {/* Radar Pulse Effect */}
          <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-25 md:group-hover:opacity-0 transition-opacity" />
          
          {/* Button Core */}
          <div className="relative z-10 bg-red-600 text-white p-3 md:p-4 rounded-full shadow-lg border-2 border-white/30 flex items-center justify-center md:group-hover:bg-blue-900 md:group-hover:rotate-[360deg] transition-all duration-700 overflow-hidden">
            <ChevronUp size={20} strokeWidth={4} className="md:w-[24px]" />
            
            {/* Reflection sweep animation */}
            <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-1000 md:group-hover:translate-x-full" />
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatingActions;