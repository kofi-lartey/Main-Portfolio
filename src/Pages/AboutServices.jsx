import React from 'react';
import { motion } from 'framer-motion';
import {
    Terminal,
    Music,
    Aperture,
    MessageCircle,
    Copy,
    Target,
    Eye,
    TrendingUp,
    Sparkles
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const AboutServices = () => {
    const email = "alpheausgberbie127@gmail.com";
    const phoneNumber = "233557655008";

    const services = [
        {
            title: "Backend Development",
            icon: <Terminal className="text-blue-500" size={24} />,
            description: "Architecting robust server-side systems with a focus on high-performance APIs and secure data management.",
            features: ["Scalable API Design", "Database Optimization", "Cloud Infrastructure"]
        },
        {
            title: "Music Education",
            icon: <Music className="text-purple-500" size={24} />,
            description: "Helping musicians bridge the gap between intuition and intellect through advanced theory and harmony coaching.",
            features: ["Modern Harmony Coaching", "Arrangement Analysis", "Jazz & Contemporary Theory"]
        },
        {
            title: "Photography",
            icon: <Aperture className="text-blue-400" size={24} />,
            description: "Capturing moments that tell a story through deliberate composition, lighting, and cinematic visual design.",
            features: ["Visual Storytelling", "Professional Post-Processing", "Lighting Direction"]
        }
    ];

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(email);
            toast.success('Email copied to clipboard!', {
                duration: 3000,
                style: {
                    background: '#111827',
                    color: '#fff',
                    border: '1px solid rgba(59, 130, 246, 0.5)',
                },
            });
        } catch (err) {
            toast.error('Failed to copy email');
        }
    };

    return (
        <div className="bg-[#0a0f1a] min-h-screen pt-32 pb-20 px-6 lg:px-12 selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <span className="text-blue-600 font-bold text-[10px] uppercase tracking-[0.3em] mb-4 block">
                        Visionary Creator
                    </span>
                    <h1 className="text-white text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        About & Services
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Building at the intersection of logic, rhythm, and light. Exploring the
                        boundaries between engineering and artistic expression.
                    </p>
                </motion.header>

                {/* Highlighted Quote Card + Image Integration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-gradient-to-br from-[#111827] to-[#0a0f1a] border border-white/5 rounded-[2rem] p-10 md:p-20 mb-12 relative overflow-hidden group shadow-2xl"
                >
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full group-hover:bg-blue-600/15 transition-colors duration-700" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        {/* Owner Image Integration */}
                        <div className="shrink-0 relative">
                            <div className="w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-2 border-blue-500/20 shadow-2xl transform group-hover:rotate-3 transition-transform duration-500">
                                <img
                                    src="https://res.cloudinary.com/djjgkezui/image/upload/v1768317248/WhatsApp_Image_2025-12-19_at_11.00.07_PM_l0cdts.jpg"
                                    alt="Alpheaus Gberbie"
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-4 -right-4 bg-blue-600 p-3 rounded-xl">
                                <Sparkles className="text-white" size={20} />
                            </div>
                        </div>

                        <div>
                            <h2 className="text-white text-3xl md:text-5xl font-bold leading-[1.2] max-w-4xl mb-12">
                                "I am a multi-disciplinary creator driven by the pursuit of technical excellence, musical harmony, and visual storytelling."
                            </h2>
                            <div className="flex flex-wrap gap-4">
                                {["Backend Engineer", "Composer & Teacher", "Visual Artist"].map((tag) => (
                                    <span key={tag} className="px-6 py-2.5 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm font-semibold tracking-wide">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mission, Vision & Goals Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">
                    {[
                        { title: "Our Mission", icon: <Target className="text-blue-500" />, text: "To deliver high-performance digital systems and artistic education that empowers creators to bridge the gap between imagination and reality." },
                        { title: "Our Vision", icon: <Eye className="text-purple-500" />, text: "To become a leading voice in the fusion of technology and the arts, setting a new standard for creative engineering in Africa." },
                        { title: "Our Goals", icon: <TrendingUp className="text-blue-400" />, text: "Automating complexity, teaching the language of music with clarity, and capturing the human experience through a cinematic lens." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 bg-white/[0.02] border border-white/5 rounded-3xl">
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Services Grid Section */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-16">
                        <h2 className="text-white text-2xl font-bold tracking-tight shrink-0">What I Do</h2>
                        <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-[#111827]/40 border border-white/5 rounded-2xl p-8 hover:border-blue-500/30 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-500">
                                    {service.icon}
                                </div>
                                <h3 className="text-white text-xl font-bold mb-4">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-10 min-h-[60px]">
                                    {service.description}
                                </p>
                                <ul className="space-y-4">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-gray-300 text-[13px] font-medium">
                                            <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA Section */}
                <motion.section
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-col lg:flex-row items-center justify-between gap-10 py-16 border-t border-white/5"
                >
                    <div className="text-center lg:text-left">
                        <h2 className="text-white text-4xl font-bold mb-3 tracking-tight">Let's build something together.</h2>
                        <p className="text-gray-500 text-lg">Open for collaborative projects and consultations.</p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-5">
                        {/* WhatsApp CTA */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.open(`https://wa.me/${phoneNumber}`, '_blank')}
                            className="flex items-center gap-3 bg-[#22c55e] hover:bg-[#16a34a] text-white px-8 py-4 rounded-xl font-bold transition-colors shadow-lg shadow-green-500/20"
                        >
                            <MessageCircle size={22} />
                            WhatsApp
                        </motion.button>

                        {/* Email Copy Action */}
                        <div
                            onClick={copyToClipboard}
                            className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4 rounded-xl group cursor-pointer hover:bg-white/10 transition-all active:scale-95"
                        >
                            <span className="text-gray-200 font-bold tracking-tight text-sm truncate max-w-[200px] md:max-w-none">
                                {email}
                            </span>
                            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all shrink-0">
                                <Copy size={16} />
                            </div>
                        </div>
                    </div>
                </motion.section>

            </div>
        </div>
    );
};

export default AboutServices;