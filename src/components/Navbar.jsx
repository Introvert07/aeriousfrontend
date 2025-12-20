import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Plus, Minus } from 'lucide-react';
import satiLogo from '../assets/LOGO.WEBP';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState(null);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setMobileDropdown(null);
    }, [location]);

    const navItems = [
        { name: 'Home', path: '/', hasDropdown: false },
        { name: 'About Us', path: '/about', hasDropdown: false },
        {
            name: 'Courses',
            path: '#', // Changed to '#' for parent items with dropdowns to prevent immediate navigation
            hasDropdown: true,
            dropdownLinks: [
                { name: 'Flight Instructor', path: '/courses/flight-instructor' },
                { name: 'Commercial Pilot', path: '/courses/commercial-pilot' },
                { name: 'Instrument Rating', path: '/courses/instrument-rating' },
                { name: 'Private Pilot', path: '/courses/private-pilot' },
                { name: 'Night Rating', path: '/courses/night-rating' },
            ]
        },
        { name: 'Flying Training', path: '/flying-training-abroad', hasDropdown: false },
        { name: 'Gallery', path: '/nav-gallery', hasDropdown: false },
        { name: 'Contact Us', path: '/contact', hasDropdown: false },
    ];

    return (
        <div className="w-full relative z-[1000]">
            {/* --- TOP HEADER --- */}
            <header className="bg-white py-4 px-6 md:px-12 flex justify-between items-center relative overflow-hidden border-b border-gray-50">
                <Link to="/" className="flex items-center gap-3 md:gap-4 z-20 bg-white pr-4">
                    <img src={satiLogo} alt="Logo" className="h-12 md:h-20 object-contain" />
                    <div>
                        <h1 className="text-[#203a8c] text-lg md:text-2xl font-['Montserrat',sans-serif] font-black uppercase leading-tight">
                            Aerius Aviators Academy
                        </h1>
                        <p className="hidden sm:block text-[10px] text-gray-400 font-bold tracking-widest uppercase mt-1">
                            Global Center for Aviation Excellence
                        </p>
                    </div>
                </Link>

                <div className="flex items-center gap-4 z-20">
                    <Link to="/contact" className="hidden lg:block">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#e31e24] text-white px-8 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-xl"
                        >
                            Apply Now
                        </motion.button>
                    </Link>
                    
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-[#203a8c] transition-transform active:scale-90"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* --- DESKTOP NAVIGATION (remains same) --- */}
            <nav className="hidden lg:block bg-[#203a8c] text-white sticky top-0 z-50 shadow-md">
                <ul className="flex items-center justify-center text-xs font-bold uppercase tracking-widest">
                    {navItems.map((item) => (
                        <li key={item.name} className="relative group">
                            <Link
                                to={item.path === '#' ? '/courses' : item.path} // Desktop redirect
                                className={`px-6 py-5 transition-colors border-r border-blue-900/50 last:border-0 whitespace-nowrap flex items-center gap-1 hover:bg-[#162a66] ${
                                    location.pathname === item.path ? 'bg-white text-[#203a8c]' : 'text-white'
                                }`}
                            >
                                {item.name}
                                {item.hasDropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />}
                            </Link>
                            {item.hasDropdown && (
                                <div className="absolute top-full left-0 w-64 bg-white text-[#203a8c] shadow-2xl hidden group-hover:block z-50 border-t-2 border-red-500">
                                    {item.dropdownLinks.map((sub) => (
                                        <Link
                                            key={sub.name}
                                            to={sub.path}
                                            className="block px-6 py-3 hover:bg-gray-100 border-b border-gray-50 last:border-0 font-bold text-[11px]"
                                        >
                                            {sub.name}
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

            {/* --- MOBILE NAVIGATION DRAWER --- */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 z-[998] lg:hidden backdrop-blur-sm"
                        />
                        
                        <motion.div 
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-[#203a8c] z-[999] lg:hidden shadow-2xl overflow-hidden flex flex-col"
                        >
                            <div className="p-6 flex flex-col h-full overflow-y-auto">
                                <div className="flex justify-between items-center mb-8">
                                    <span className="text-white/50 text-xs font-bold tracking-widest uppercase">Menu</span>
                                    <X size={32} className="text-white cursor-pointer" onClick={() => setIsOpen(false)} />
                                </div>

                                <ul className="space-y-4">
                                    {navItems.map((item) => (
                                        <li key={item.name} className="border-b border-white/10 pb-4">
                                            <div className="flex justify-between items-center group">
                                                {item.hasDropdown ? (
                                                    // Toggle on click for items with dropdowns
                                                    <button 
                                                        onClick={() => setMobileDropdown(mobileDropdown === item.name ? null : item.name)}
                                                        className={`text-xl font-bold uppercase tracking-wider text-left flex-grow transition-colors ${
                                                            mobileDropdown === item.name ? 'text-red-400' : 'text-white'
                                                        }`}
                                                    >
                                                        {item.name}
                                                    </button>
                                                ) : (
                                                    <Link 
                                                        to={item.path}
                                                        className={`text-xl font-bold uppercase tracking-wider flex-grow ${
                                                            location.pathname === item.path ? 'text-red-400' : 'text-white'
                                                        }`}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                )}

                                                {item.hasDropdown && (
                                                    <button 
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setMobileDropdown(mobileDropdown === item.name ? null : item.name);
                                                        }}
                                                        className="p-3 -mr-3 text-white bg-white/5 rounded-lg"
                                                    >
                                                        {mobileDropdown === item.name ? <Minus size={24} /> : <Plus size={24} />}
                                                    </button>
                                                )}
                                            </div>

                                            <AnimatePresence>
                                                {item.hasDropdown && mobileDropdown === item.name && (
                                                    <motion.div 
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-4 mt-4 space-y-3 border-l-2 border-red-500/50 ml-2">
                                                            {item.dropdownLinks.map((sub) => (
                                                                <Link
                                                                    key={sub.name}
                                                                    to={sub.path}
                                                                    className="block py-1 text-blue-100 text-base font-semibold hover:text-red-400 transition-colors"
                                                                >
                                                                    {sub.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto pt-10">
                                    <Link to="/contact">
                                        <button className="w-full bg-[#e31e24] text-white py-4 rounded-xl font-black uppercase tracking-widest shadow-lg active:scale-95 transition-transform">
                                            Apply Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;