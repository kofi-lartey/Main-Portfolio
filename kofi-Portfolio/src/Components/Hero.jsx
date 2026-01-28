import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    return (
        <section className="relative min-h-screen pt-32 pb-20 px-6 lg:px-12 flex items-center overflow-hidden bg-[#0a0f1a]">
            {/* Background Radial Glow */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                        Multi-Disciplinary Creator
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-[1.1] mb-8">
                        Coding the <span className="text-white">Logic,</span><br />
                        <span className="text-blue-500">Capturing the</span><br />
                        <span className="text-blue-600">Moment,</span><br />
                        <span className="text-white/90">Composing the Soul.</span>
                    </h1>

                    <p className="text-gray-400 text-lg max-w-lg leading-relaxed mb-10">
                        A professional ecosystem where technical precision meets artistic expression.
                        Specialist in Backend Engineering, Music Production, and Narrative Photography.
                    </p>

                    <div className="flex items-center gap-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/projects')}
                            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg shadow-blue-600/25"
                        >
                            View Projects
                        </motion.button>

                        <div className="flex items-center gap-5 text-gray-500">
                            <a href="https://github.com/kofi-lartey" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <Github size={22} />
                            </a>
                            <a href="https://www.linkedin.com/in/alpheaus-gberbie-b6b141326" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <Linkedin size={22} />
                            </a>
                            <a href="https://x.com/GberbieAlpheaus" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                                <X size={22} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Right Content - Profile Image Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Pulsing Glow Background */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
                        <div className="w-80 h-80 bg-blue-500 rounded-full blur-[100px] animate-pulse" />
                    </div>

                    {/* The Image Container */}
                    <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden group border border-white/10 shadow-2xl">
                        {/* Replace the src with your actual image path */}
                        <img
                            src="https://res.cloudinary.com/djjgkezui/image/upload/v1768317248/WhatsApp_Image_2025-12-19_at_11.00.07_PM_l0cdts.jpg"
                            alt="Gberbie Alpheaus Lartey"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Glassmorphism Overlay on bottom */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/60 to-transparent backdrop-blur-[2px]">
                            <div className="w-px h-12 bg-blue-500 mb-4" />
                            <h3 className="text-white font-bold text-xl tracking-tight mb-1">Gberbie Alpheaus Lartey</h3>
                            <p className="text-gray-400 text-xs uppercase tracking-[0.2em] font-medium">Accra, Ghana — 2026</p>
                        </div>

                        {/* Floating Social Sidebar on Image */}
                        <div className="absolute top-6 right-6 flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a href="https://www.instagram.com/kofi_lart/" className="p-3 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-600 transition-all">
                                <Instagram size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl hidden md:block" />
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;