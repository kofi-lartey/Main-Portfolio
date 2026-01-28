import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, ArrowLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComingSoon = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
                if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
                if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
                if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
                return prev;
            });
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const handleNotifyMe = (e) => {
        e.preventDefault();
        navigate('/contact', { state: { prefillEmail: email } });
    };

    // Animation for side-floating social bar
    const floatSideVariant = {
        animate: {
            x: [0, 8, 0],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="min-h-screen bg-[#060910] text-white flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden">

            {/* Background Glows */}
            <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none z-0" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full pointer-events-none z-0" />

            {/* Fixed Return Arrow - Better Mobile Positioning */}
            <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={() => navigate('/')}
                className="fixed top-24 left-6 sm:left-12 flex items-center gap-3 text-gray-400 hover:text-blue-500 transition-all group z-[110] bg-[#060910]/80 backdrop-blur-md p-2 rounded-full border border-white/5 sm:border-none sm:bg-transparent"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span className="text-xs font-bold uppercase tracking-widest hidden sm:inline">Back to Hub</span>
            </motion.button>

            <div className="max-w-4xl w-full text-center z-10 py-20">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mb-8 sm:mb-1"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    System Update
                </motion.div>

                {/* Main Heading - Responsive text size */}
                <motion.h1
                    initial={{ opacity: 0, letterSpacing: "0.5em" }}
                    animate={{ opacity: 1, letterSpacing: "0.1em" }}
                    className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 sm:mb-2 tracking-tighter"
                >
                    COMING <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">SOON.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-gray-500 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto mb-10 sm:mb-16 leading-relaxed px-4"
                >
                    Engineering a new digital experience where high-performance code meets narrative art.
                </motion.p>

                {/* Countdown Grid - 2x2 on mobile, 4x1 on desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 md:gap-8 mb-12 sm:mb-20 max-w-2xl mx-auto px-4">
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Mins', value: timeLeft.minutes },
                        { label: 'Secs', value: timeLeft.seconds }
                    ].map((item, i) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            className="bg-white/[0.03] border border-white/5 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl backdrop-blur-sm"
                        >
                            <div className="text-2xl sm:text-4xl md:text-5xl font-black mb-1 font-mono tracking-tighter">{item.value.toString().padStart(2, '0')}</div>
                            <div className="text-[8px] sm:text-[10px] uppercase tracking-widest text-blue-500 font-bold">{item.label}</div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Form - Stacks on mobile */}
                <motion.form
                    onSubmit={handleNotifyMe}
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center px-4"
                >
                    <div className="relative w-full max-w-sm">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email for early access"
                            className="w-full bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl py-3 sm:py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-white text-black px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-black text-sm hover:bg-blue-600 hover:text-white transition-all w-full sm:w-auto active:scale-95"
                    >
                        Notify Me
                    </button>
                </motion.form>
            </div>

            {/* SIDE FLOATING SOCIAL BAR - Hidden on small mobile, visible on sm and up */}
            <motion.div
                variants={floatSideVariant}
                animate="animate"
                className="hidden sm:flex fixed right-6 lg:right-12 top-1/2 -translate-y-1/2 flex-col items-center gap-10 z-[100]"
            >
                <div className="w-px h-20 bg-gradient-to-b from-transparent to-gray-800 mb-2" />

                <a href="https://github.com/kofi-lartey" target="_blank" rel="noopener noreferrer" className="group relative">
                    <Github className="text-gray-500 group-hover:text-white transition-all group-hover:scale-110" size={22} />
                    <span className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[10px] uppercase tracking-widest text-blue-500 font-bold transition-all whitespace-nowrap">Github</span>
                </a>

                <a href="https://www.linkedin.com/in/alpheaus-gberbie-b6b141326" target="_blank" rel="noopener noreferrer" className="group relative">
                    <Linkedin className="text-gray-500 group-hover:text-white transition-all group-hover:scale-110" size={22} />
                    <span className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[10px] uppercase tracking-widest text-blue-500 font-bold transition-all whitespace-nowrap">LinkedIn</span>
                </a>

                <a href="https://X.com/GberbieAlpheaus" target="_blank" rel="noopener noreferrer" className="group relative">
                    <Twitter className="text-gray-500 group-hover:text-white transition-all group-hover:scale-110" size={22} />
                    <span className="absolute right-10 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-[10px] uppercase tracking-widest text-blue-500 font-bold transition-all whitespace-nowrap">Twitter</span>
                </a>

                <div className="w-px h-20 bg-gradient-to-t from-transparent to-gray-800 mt-2" />
            </motion.div>

            {/* Mobile-only Bottom Socials */}
            <div className="flex sm:hidden items-center gap-8 text-gray-600 pb-10 z-10">
                <a href="https://github.com/kofi-lartey" target="_blank" rel="noreferrer"><Github size={20} /></a>
                <a href="https://linkedin.com/in/..." target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
                <a href="https://twitter.com/..." target="_blank" rel="noreferrer"><Twitter size={20} /></a>
            </div>
        </div>
    );
};

export default ComingSoon;