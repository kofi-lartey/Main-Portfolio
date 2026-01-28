import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';

const NavBar = () => {
    const location = useLocation();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Projects', path: '/projects' },
        { name: 'Blog', path: '/comingSoon' },
        { name: 'Contact', path: '/contact' },
        { name: 'Services', path: '/services' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0f1a]/90 backdrop-blur-sm border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">

                {/* Logo Section */}
                <Link to="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        {/* The small 'L' icon from the design */}
                        <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center transform -rotate-12 group-hover:rotate-0 transition-transform">
                            <span className="text-white font-bold text-xs">L</span>
                        </div>
                        {/* Dot indicator */}
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-blue-400 rounded-full border-2 border-[#0a0f1a]"></div>
                    </div>
                    <span className="text-white font-bold text-xl tracking-tight">
                        Kofi Lartey
                    </span>
                </Link>

                {/* Navigation Links - Centered */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-[15px] font-medium transition-all duration-300 hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-gray-400'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-6">
                    {isMobileMenuOpen ? (
                        <button onClick={() => setIsMobileMenuOpen(false)} className="md:hidden text-white p-1">
                            <X size={24} />
                        </button>
                    ) : (
                        <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden text-white p-1">
                            <Menu size={24} />
                        </button>
                    )}
                    <a href='https://docs.google.com/document/d/1ppTLlSx78eFP8GbNAmHQRm09Dtk-97o2/edit' download="Gberbie-Alpheaus-Lartey-CV.pdf">
                        <button className="hidden md:flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm font-semibold cursor-pointer">
                            <Download size={16} strokeWidth={2.5} />
                            <span className="tracking-wide">CV</span>
                        </button>
                    </a>

                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => navigate('/contact')}
                        className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-2.5 rounded-md text-[14px] font-bold transition-colors shadow-lg shadow-blue-500/20 cursor-pointer"
                    >
                        Let's Collaborate
                    </motion.button>
                </div>

            </div>

            {isMobileMenuOpen && (

                <div className="md:hidden fixed top-20 left-0 w-full bg-[#0a0f1a]/95 backdrop-blur-sm border-b border-white/10 z-40">

                    <div className="flex flex-col items-center gap-6 py-6">

                        {navLinks.map((link) => (

                            <Link

                                key={link.name}

                                to={link.path}

                                onClick={() => setIsMobileMenuOpen(false)}

                                className={`text-[15px] font-medium transition-all duration-300 hover:text-white ${location.pathname === link.path ? 'text-white' : 'text-gray-400'}`}

                            >

                                {link.name}

                            </Link>

                        ))}

                    </div>

                </div>

            )}

        </nav>

    );

};

export default NavBar;
