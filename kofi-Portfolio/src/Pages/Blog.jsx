import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Grid, List, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const posts = [
        {
            id: "code-composition",
            category: 'Music x Tech',
            title: 'The Future of Synthesis: AI & Analog Fusion',
            excerpt: 'Exploring how generative models are reshaping the landscape of modular synthesis.',
            date: 'Oct 24, 2023',
            readTime: '12 min read',
            image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80',
            featured: true
        },
        {
            id: "nextjs-mastery",
            category: 'Tech',
            title: 'Mastering Next.js 14: The App Router Guide',
            excerpt: 'A deep dive into server components, streaming, and the future of React.',
            date: 'Oct 24, 2023',
            readTime: '15 min read',
            image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80',
        },
        {
            id: "dolomites-light",
            category: 'Photography',
            title: 'Chasing Light in the Dolomites',
            date: 'Sep 12, 2023',
            image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80',
        }
    ];

    return (
        <div className="bg-[#0a0c10] min-h-screen text-white pt-20 pb-20 px-4 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Header & Filter Bar */}
                <div className="flex flex-col gap-8 mb-12">
                    {/* Logo & Profile Row */}
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                                    {[...Array(4)].map((_, i) => <div key={i} className="bg-white/80 rounded-sm" />)}
                                </div>
                            </div>
                            <span className="text-xl font-bold tracking-tighter uppercase">Creator.OS</span>
                        </div>
                        <img src="https://i.pravatar.cc/150?u=kofi" className="w-10 h-10 rounded-full border border-white/10" alt="profile" />
                    </div>

                    {/* Search & Category Filter */}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Scrollable Categories for Mobile */}
                        <div className="flex bg-[#161b22] border border-white/5 rounded-xl p-1 w-full md:w-auto overflow-x-auto no-scrollbar">
                            {['All', 'Tech', 'Music', 'Photo'].map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setActiveCategory(cat)}
                                    className={`px-6 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500'}`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                        <div className="relative w-full md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            <input
                                type="text"
                                placeholder="Search stories..."
                                className="w-full bg-[#161b22] border border-white/5 rounded-xl py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Featured Hero - Optimized for Mobile */}
                <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-12 md:mb-20 group h-[450px] md:h-[550px]">
                    <img src={posts[0].image} className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-50 transition-transform duration-1000 group-hover:scale-105" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-transparent to-transparent" />

                    <div className="relative h-full flex flex-col justify-end p-6 md:p-16 max-w-4xl">
                        <div className="flex gap-2 mb-4">
                            <span className="bg-blue-600 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">Featured</span>
                            <span className="bg-orange-500 text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full">{posts[0].category}</span>
                        </div>
                        <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 tracking-tight leading-tight">{posts[0].title}</h1>
                        <p className="text-gray-300 text-sm md:text-lg mb-6 line-clamp-2 md:line-clamp-none md:max-w-2xl">{posts[0].excerpt}</p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
                            <Link to={`/blog/${posts[0].id}`} className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto">
                                Read Article <ArrowRight size={18} />
                            </Link>
                            <span className="flex items-center justify-center gap-2 text-gray-400 text-xs md:text-sm"><Clock size={16} /> {posts[0].readTime}</span>
                        </div>
                    </div>
                </div>

                {/* Recent Stories Row */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">Recent Stories</h2>
                    <div className="flex bg-[#161b22] border border-white/5 rounded-lg p-1 scale-90 md:scale-100">
                        <button className="p-2 text-white bg-[#21262d] rounded-md"><Grid size={18} /></button>
                        <button className="p-2 text-gray-500"><List size={18} /></button>
                    </div>
                </div>

                {/* Grid Layout - Stacked on Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Mastering Next.js Card */}
                    <Link to={`/blog/${posts[1].id}`} className="lg:col-span-2 relative rounded-3xl overflow-hidden bg-[#161b22] border border-white/5 group h-[350px] md:h-[450px]">
                        <img src={posts[1].image} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#161b22] to-transparent" />
                        <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
                            <span className="bg-blue-600 w-fit text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md mb-3">Tech</span>
                            <h3 className="text-2xl md:text-3xl font-bold mb-2">{posts[1].title}</h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 max-w-md line-clamp-2">{posts[1].excerpt}</p>
                            <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                                <span>{posts[1].date}</span>
                                <span className="flex items-center gap-2"><Clock size={12} /> 15 min read</span>
                            </div>
                        </div>
                    </Link>

                    {/* Dolomites Card */}
                    <Link to={`/blog/${posts[2].id}`} className="relative rounded-3xl overflow-hidden h-[350px] md:h-[450px] group">
                        <img src={posts[2].image} className="absolute inset-0 w-full h-full object-cover opacity-80" alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        <div className="relative h-full p-6 md:p-8 flex flex-col justify-end">
                            <span className="bg-orange-500 w-fit text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md mb-3">Photography</span>
                            <h3 className="text-xl md:text-2xl font-bold mb-2 leading-tight">{posts[2].title}</h3>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">{posts[2].date}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Blog;