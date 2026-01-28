import React, { useState } from 'react';
import {
    Search, Bell, Download, MousePointer2, BookOpen, Eye, Menu,
    MoreHorizontal, Zap, Filter
} from 'lucide-react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid,
    Tooltip, ResponsiveContainer, PieChart, Pie, Cell
} from 'recharts';
import Sidebar from '../Components/Sidebar';

const trafficData = [
    { name: 'OCT 01', views: 2400 },
    { name: 'OCT 10', views: 4100 },
    { name: 'OCT 20', views: 5200 },
    { name: 'OCT 30', views: 7100 },
];

const categoryData = [
    { name: 'Technology', value: 54, color: '#6366f1' },
    { name: 'Photography', value: 28, color: '#22d3ee' },
    { name: 'Music', value: 18, color: '#4b5563' },
];

const AdminAnalytics = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#060813] flex text-white overflow-x-hidden">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 min-w-0 flex flex-col h-screen overflow-y-auto">
                {/* --- RESPONSIVE HEADER --- */}
                <header className="sticky top-0 z-30 bg-[#060813]/80 backdrop-blur-xl border-b border-white/5 p-4 md:p-8">
                    <div className="max-w-[1600px] mx-auto flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 -ml-2 text-gray-400">
                                    <Menu size={24} />
                                </button>
                                <div>
                                    <h1 className="text-xl md:text-2xl font-bold tracking-tight">Analytics Overview</h1>
                                    <p className="text-xs text-gray-500 hidden md:block">Real-time performance metrics</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 lg:hidden">
                                <button className="p-2 text-gray-400 bg-white/5 rounded-lg"><Search size={20} /></button>
                                <button className="p-2 text-gray-400 bg-white/5 rounded-lg"><Bell size={20} /></button>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="relative hidden lg:block">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                                <input type="text" placeholder="Search data..." className="bg-white/5 border border-white/5 rounded-xl py-2.5 pl-11 pr-4 text-sm w-64 focus:outline-none focus:border-indigo-500/50" />
                            </div>
                            <button className="flex-1 lg:flex-none bg-indigo-600 hover:bg-indigo-500 px-5 py-2.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/20">
                                <Download size={18} /> <span className="text-sm">Export Report</span>
                            </button>
                        </div>
                    </div>
                </header>

                {/* --- MAIN CONTENT AREA --- */}
                <div className="p-4 md:p-8 lg:p-10 space-y-6 md:space-y-10 max-w-[1600px] mx-auto w-full">

                    {/* 1. Quick Stats Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {[
                            { label: 'Total Views', val: '12,480', pct: '+12.5%', icon: Eye, color: 'text-indigo-400' },
                            { label: 'Read Time', val: '4m 32s', pct: '-2.4%', icon: BookOpen, color: 'text-rose-400' },
                            { label: 'Total Clicks', val: '856', pct: '+5.8%', icon: MousePointer2, color: 'text-emerald-400' },
                        ].map((stat, i) => (
                            <div key={i} className="bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-[2rem] group hover:bg-white/[0.04] transition-all">
                                <div className="flex justify-between items-start mb-6">
                                    <div className={`p-3 rounded-2xl bg-white/5 ${stat.color}`}><stat.icon size={20} /></div>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${stat.pct.includes('+') ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'}`}>
                                        {stat.pct}
                                    </span>
                                </div>
                                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                                <h2 className="text-3xl font-bold tracking-tighter">{stat.val}</h2>
                            </div>
                        ))}
                    </div>

                    {/* 2. Charts Row */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Traffic Area Chart */}
                        <div className="lg:col-span-2 bg-[#0f1122] border border-white/5 rounded-[2.5rem] p-6 md:p-8">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                                <h3 className="text-lg font-bold">Traffic Trends</h3>
                                <div className="flex bg-black/20 p-1 rounded-xl border border-white/5 self-start">
                                    {['30D', '90D', '1Y'].map(t => (
                                        <button key={t} className={`px-4 py-1.5 rounded-lg text-[10px] font-black tracking-widest transition-all ${t === '30D' ? 'bg-indigo-600 text-white shadow-lg' : 'text-gray-500'}`}>{t}</button>
                                    ))}
                                </div>
                            </div>
                            <div className="h-[280px] md:h-[350px] w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <AreaChart data={trafficData}>
                                        <defs>
                                            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                                                <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                                <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                            </linearGradient>
                                        </defs>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ffffff05" />
                                        <XAxis dataKey="name" stroke="#4b5563" fontSize={10} tickLine={false} axisLine={false} />
                                        <Tooltip contentStyle={{ backgroundColor: '#11142b', border: 'none', borderRadius: '12px' }} />
                                        <Area type="monotone" dataKey="views" stroke="#6366f1" strokeWidth={3} fill="url(#colorViews)" />
                                    </AreaChart>
                                </ResponsiveContainer>
                            </div>
                        </div>

                        {/* Engagement Doughnut Chart */}
                        <div className="bg-[#0f1122] border border-white/5 rounded-[2.5rem] p-6 md:p-8 flex flex-col">
                            <h3 className="text-lg font-bold mb-6">Top Categories</h3>
                            <div className="flex-1 flex flex-col justify-center items-center">
                                <div className="h-56 w-full relative">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart>
                                            <Pie data={categoryData} innerRadius={60} outerRadius={85} paddingAngle={10} dataKey="value">
                                                {categoryData.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                                ))}
                                            </Pie>
                                        </PieChart>
                                    </ResponsiveContainer>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Growth</span>
                                        <span className="text-3xl font-bold">+18%</span>
                                    </div>
                                </div>
                                <div className="w-full mt-8 space-y-3">
                                    {categoryData.map((cat, i) => (
                                        <div key={i} className="flex items-center justify-between text-sm">
                                            <div className="flex items-center gap-3">
                                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
                                                <span className="text-gray-400">{cat.name}</span>
                                            </div>
                                            <span className="font-bold">{cat.value}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3. Performance Table */}
                    <div className="bg-[#0f1122] border border-white/5 rounded-[2.5rem] overflow-hidden">
                        <div className="p-6 md:p-8 flex items-center justify-between border-b border-white/5">
                            <h3 className="text-lg font-bold">Top Performing Projects</h3>
                            <button className="text-xs font-bold text-indigo-400 flex items-center gap-2">View All <MoreHorizontal size={14} /></button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left min-w-[700px]">
                                <thead className="bg-white/[0.01] text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                                    <tr>
                                        <th className="px-8 py-5">Project</th>
                                        <th className="px-8 py-5">Category</th>
                                        <th className="px-8 py-5">Views</th>
                                        <th className="px-8 py-5 text-right">Conversion</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[
                                        { name: 'Neo-Seoul Interface', cat: 'Tech / UI', views: '4,290', conv: '8.4%' },
                                        { name: 'Abstract Geometry', cat: 'Photography', views: '3,102', conv: '5.2%' },
                                    ].map((row, i) => (
                                        <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                                                        <Zap size={18} />
                                                    </div>
                                                    <span className="font-bold">{row.name}</span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-sm text-gray-500">{row.cat}</td>
                                            <td className="px-8 py-6 text-sm">{row.views}</td>
                                            <td className="px-8 py-6 text-right text-emerald-500 font-bold">{row.conv}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminAnalytics;