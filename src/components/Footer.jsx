import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  ChevronRight, 
  Plane 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Mapped to your App.jsx routes
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Gallery", href: "/nav-gallery" },
    { name: "Contact Us", href: "/contact" },
    { name: "Flying Abroad", href: "/flying-training-abroad" },
  ];

  const coursesLinks = [
    { name: "Commercial Pilot", href: "/courses/commercial-pilot" },
    { name: "Private Pilot", href: "/courses/private-pilot" },
    { name: "Instrument Rating", href: "/courses/instrument-rating" },
    { name: "Night Rating", href: "/courses/night-rating" },
    { name: "Flight Instructor", href: "/courses/flight-instructor" },
  ];

  return (
    <footer className="relative bg-blue-950 text-white pt-12 md:pt-16 pb-6 md:pb-8 font-sans overflow-hidden">
      {/* Decorative SVG Plane Background */}
      <div className="absolute top-0 right-0 opacity-10 pointer-events-none hidden md:block">
        <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
          <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.3c.4-.2.6-.6.5-1.1z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 md:mb-16">
          
          {/* Column 1: Profile */}
          <div className="space-y-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Plane className="text-red-600 fill-red-600 rotate-45" size={28} />
              <span className="text-2xl font-black tracking-tighter uppercase">
                Aerius<span className="text-red-600">Aviators</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed font-medium max-w-sm mx-auto md:mx-0">
              <span className="text-white font-bold">Capt Saurabh Bhatnagar</span> is a former Indian Naval pilot with 25 years and 10 years of commercial flying experience, dedicated to shaping the next generation of aviators.
            </p>
            <div className="space-y-3 flex flex-col items-center md:items-start">
              <a href="tel:+919266307570" className="flex items-center gap-3 text-slate-300 hover:text-red-500 transition-colors group">
                <div className="p-2 bg-blue-900/50 rounded-lg group-hover:bg-red-600 transition-colors">
                  <Phone size={16} />
                </div>
                <span className="text-sm font-bold">+91 9266307570</span>
              </a>
              <a href="mailto:info@aeriusaviators.com" className="flex items-center gap-3 text-slate-300 hover:text-red-500 transition-colors group">
                <div className="p-2 bg-blue-900/50 rounded-lg group-hover:bg-red-600 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-bold">info@aeriusaviators.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-[2px] bg-red-600"></span> Links
            </h4>
            <ul className="space-y-3 inline-block md:block">
              {quickLinks.map((link) => (
                <li key={link.name} className="text-left">
                  <Link to={link.href} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold transition-all hover:translate-x-1">
                    <ChevronRight size={14} className="text-red-600" /> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center justify-center md:justify-start gap-2">
              <span className="w-6 h-[2px] bg-red-600"></span> Courses
            </h4>
            <ul className="space-y-3 inline-block md:block">
              {coursesLinks.map((course) => (
                <li key={course.name} className="text-left">
                  <Link to={course.href} className="text-slate-400 hover:text-white flex items-center gap-2 text-sm font-bold transition-all hover:translate-x-1">
                    <ChevronRight size={14} className="text-red-600" /> {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-lg font-black uppercase tracking-widest mb-6 flex items-center gap-2">
              <span className="w-6 h-[2px] bg-red-600"></span> Follow Us
            </h4>
            <div className="flex gap-4 mb-8">
              {[
                { icon: <Facebook size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" },
                { icon: <Linkedin size={20} />, href: "#" },
              ].map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="w-10 h-10 rounded-xl bg-blue-900 flex items-center justify-center hover:bg-red-600 hover:-translate-y-1 transition-all shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="bg-blue-900/30 p-4 rounded-2xl border border-blue-800/50 w-full max-w-xs">
              <p className="text-[10px] uppercase font-black tracking-widest text-slate-400 mb-2 text-center md:text-left">Ready to take off?</p>
              <Link to="/contact">
                <button className="w-full py-3 bg-red-600 hover:bg-white hover:text-blue-950 font-black text-xs uppercase tracking-tighter transition-all rounded-xl shadow-xl">
                  Apply for Admission
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
          <p>© {currentYear} Aerius Aviators. All Rights Reserved.</p>
          <p className="flex items-center gap-2">
            Engineered for <span className="text-slate-300">Aviation Excellence</span>
          </p>
        </div>
      </div>

      {/* Footer Runway Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50"></div>
    </footer>
  );
};

export default Footer;