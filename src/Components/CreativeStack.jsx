import React from 'react';
import { Terminal, Camera, Music } from 'lucide-react';

const CreativeStack = () => {
    return (
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
            <h2 className="text-white text-3xl font-bold mb-12">The Creative Stack</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Large Backend Card */}
                <div className="lg:col-span-2 relative group overflow-hidden rounded-2xl bg-[#111827] border border-white/5 h-[500px]">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent" />

                    <div className="absolute bottom-0 left-0 p-10">
                        <div className="w-10 h-10 bg-blue-600/20 flex items-center justify-center rounded-lg mb-6 border border-blue-500/30">
                            <Terminal className="text-blue-400" size={20} />
                        </div>
                        <h3 className="text-white text-3xl font-bold mb-4">Backend Development</h3>
                        <p className="text-gray-400 max-w-md mb-6">Architecting robust, scalable server-side systems. Specialist in Node.js, Go, and distributed cloud infrastructures.</p>
                        <div className="flex gap-3">
                            {['PostgreSQL','MongoDB','Express.js','Node.js'].map(tag => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-bold text-gray-400 uppercase tracking-widest">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column Stack */}
                <div className="flex flex-col gap-6">
                    {/* Music Education */}
                    <div className="relative group overflow-hidden rounded-2xl bg-[#111827] border border-white/5 flex-1 min-h-[238px]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-6 left-6">
                            <Music className="text-orange-400 mb-3" size={18} />
                            <h4 className="text-white font-bold text-xl">Music Education</h4>
                            <p className="text-gray-400 text-sm">Piano theory and contemporary composition.</p>
                        </div>
                    </div>

                    {/* Photography */}
                    <div className="relative group overflow-hidden rounded-2xl bg-[#111827] border border-white/5 flex-1 min-h-[238px]">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-6 left-6">
                            <Camera className="text-white mb-3" size={18} />
                            <h4 className="text-white font-bold text-xl">Photography</h4>
                            <p className="text-gray-400 text-sm">Urban landscapes and emotional portraiture.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CreativeStack;