import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Globe, GraduationCap, ArrowRight, Sparkles } from 'lucide-react';

const ServiceHub = () => {
    const hubs = [
        {
            title: 'Photography',
            icon: <Camera />,
            path: '/services/photography',
            color: 'bg-orange-500',
            desc: 'Professional visual storytelling and studio sessions across Ghana.'
        },
        {
            title: 'Web Systems',
            icon: <Globe />,
            path: '/services/web',
            color: 'bg-blue-600',
            desc: 'High-performance digital engineering and E-commerce solutions.'
        },
        {
            title: 'Music Education',
            icon: <GraduationCap />,
            path: '/services/music',
            color: 'bg-purple-500',
            desc: 'Synthesis, Sound Design, and DAW mastery for modern creators.'
        }
    ];

    return (
        <div className="min-h-screen bg-[#060910] text-white p-6 py-24 flex items-center">
            <div className="max-w-6xl mx-auto w-full">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-widest mb-6">
                        <Sparkles size={12} /> Our Departments
                    </div>
                    <h1 className="text-6xl font-black mb-4 tracking-tighter">Choose a <span className="text-gray-500 text-outline">Service.</span></h1>
                    <p className="text-gray-400 text-lg max-w-xl">Select a category below to view detailed packages, pricing in GHS, and project galleries.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {hubs.map((hub) => (
                        <Link key={hub.title} to={hub.path} className="group relative bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] hover:bg-white/[0.04] transition-all hover:-translate-y-2">
                            <div className={`w-16 h-16 ${hub.color} rounded-2xl flex items-center justify-center mb-8 shadow-2xl group-hover:rotate-6 transition-transform`}>
                                {React.cloneElement(hub.icon, { size: 32, className: "text-white" })}
                            </div>
                            <h2 className="text-3xl font-bold mb-3">{hub.title}</h2>
                            <p className="text-gray-500 text-sm leading-relaxed mb-8">{hub.desc}</p>
                            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-blue-500 group-hover:gap-4 transition-all">
                                View Packages <ArrowRight size={16} />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceHub;