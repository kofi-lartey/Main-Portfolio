import React, { useState } from 'react';
import {
    User, Shield, Share2, Save, Camera, Menu,
    Lock, Github, Linkedin, Twitter, ExternalLink,
    History, Monitor, MapPin, Clock, AlertCircle
} from 'lucide-react';
import Sidebar from '../Components/Sidebar';

const AdminSettings = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [links, setLinks] = useState([
        { id: 'github', label: 'GitHub', icon: Github, url: 'https://github.com/johndoe', connected: true },
        { id: 'linkedin', label: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/johndoe', connected: true },
        { id: 'twitter', label: 'X (Twitter)', icon: Twitter, url: '', connected: false },
    ]);

    const securityLogs = [
        { id: 1, event: 'Successful Login', device: 'Chrome / macOS', location: 'New York, US', time: '2 mins ago', status: 'success' },
        { id: 2, event: 'Failed Attempt', device: 'Safari / iPhone', location: 'London, UK', time: '4 hours ago', status: 'warning' },
        { id: 3, event: 'Password Changed', device: 'Chrome / macOS', location: 'New York, US', time: '3 days ago', status: 'success' },
    ];

    const updateUrl = (id, newUrl) => {
        setLinks(links.map(link => link.id === id ? { ...link, url: newUrl } : link));
    };

    const toggleConnect = (id) => {
        setLinks(links.map(link => link.id === id ? { ...link, connected: !link.connected } : link));
    };

    return (
        <div className="min-h-screen bg-[#060813] flex text-white overflow-x-hidden">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 min-w-0 h-screen overflow-y-auto">
                <header className="p-6 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6 sticky top-0 bg-[#060813]/80 backdrop-blur-md z-30 border-b border-white/5">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 text-gray-400">
                            <Menu size={24} />
                        </button>
                        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
                    </div>
                    <button className="bg-indigo-600 hover:bg-indigo-500 px-8 py-3 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30 transition-all active:scale-95">
                        <Save size={18} /> Save All Changes
                    </button>
                </header>

                <div className="p-6 md:p-10 space-y-16 max-w-5xl mx-auto pb-20">

                    {/* --- PROFILE SECTION --- */}
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 flex items-center gap-3">
                            <User size={14} /> Profile Settings
                        </h2>
                        <div className="bg-[#0f1122] border border-white/5 rounded-[2.5rem] p-8">
                            <div className="flex flex-col md:flex-row gap-10">
                                <div className="relative group self-start">
                                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/5 bg-gray-900">
                                        <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="Avatar" />
                                    </div>
                                    <button className="absolute bottom-1 right-1 p-2.5 bg-indigo-600 rounded-full border-4 border-[#0f1122] shadow-lg hover:scale-110 transition-transform">
                                        <Camera size={16} />
                                    </button>
                                </div>
                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">First Name</label>
                                        <input type="text" defaultValue="John" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 focus:border-indigo-500/50 outline-none transition-all" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Last Name</label>
                                        <input type="text" defaultValue="Doe" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 focus:border-indigo-500/50 outline-none transition-all" />
                                    </div>
                                    <div className="md:col-span-2 space-y-2">
                                        <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Bio</label>
                                        <textarea rows="3" className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 px-4 focus:border-indigo-500/50 outline-none resize-none transition-all" defaultValue="Multi-disciplinary Designer based in Brooklyn."></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* --- SECURITY LOGS SECTION --- */}
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 flex items-center gap-3">
                            <Shield size={14} /> Security & Access Logs
                        </h2>

                        <div className="bg-[#0f1122] border border-white/5 rounded-[2.5rem] overflow-hidden">
                            <div className="p-8 border-b border-white/5 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-white/5 rounded-2xl text-gray-400"><History size={20} /></div>
                                    <div>
                                        <h3 className="font-bold">Recent Activity</h3>
                                        <p className="text-xs text-gray-500">Monitor login attempts and security events</p>
                                    </div>
                                </div>
                                <button className="text-xs font-bold text-indigo-400 hover:underline">Change Password</button>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead className="bg-white/[0.01] text-[10px] font-bold uppercase tracking-widest text-gray-500">
                                        <tr>
                                            <th className="px-8 py-5">Event</th>
                                            <th className="px-8 py-5">Device</th>
                                            <th className="px-8 py-5">Location</th>
                                            <th className="px-8 py-5 text-right">Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {securityLogs.map((log) => (
                                            <tr key={log.id} className="hover:bg-white/[0.01] transition-colors group">
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-3">
                                                        <div className={`w-1.5 h-1.5 rounded-full ${log.status === 'success' ? 'bg-green-500' : 'bg-amber-500 animate-pulse'}`}></div>
                                                        <span className="text-sm font-medium">{log.event}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                                                        <Monitor size={14} /> {log.device}
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center gap-2 text-gray-400 text-xs">
                                                        <MapPin size={14} /> {log.location}
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5 text-right text-gray-500 text-xs font-medium">
                                                    {log.time}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    {/* --- CONNECTED ACCOUNTS --- */}
                    <section className="space-y-6">
                        <h2 className="text-[10px] font-black uppercase tracking-[0.4em] text-indigo-500 flex items-center gap-3">
                            <Share2 size={14} /> Social Connections
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {links.map((link) => (
                                <div key={link.id} className={`bg-[#0f1122] border rounded-[2rem] p-6 transition-all ${link.connected ? 'border-indigo-500/30' : 'border-white/5 opacity-60'}`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-3 rounded-2xl ${link.connected ? 'bg-indigo-500/10 text-indigo-400' : 'bg-white/5 text-gray-500'}`}>
                                            <link.icon size={20} />
                                        </div>
                                        <button
                                            onClick={() => toggleConnect(link.id)}
                                            className={`text-[10px] font-black uppercase tracking-widest ${link.connected ? 'text-rose-500' : 'text-indigo-400'}`}
                                        >
                                            {link.connected ? 'Disconnect' : 'Connect'}
                                        </button>
                                    </div>
                                    <h3 className="font-bold mb-1">{link.label}</h3>
                                    <input
                                        type="text"
                                        disabled={!link.connected}
                                        value={link.url}
                                        onChange={(e) => updateUrl(link.id, e.target.value)}
                                        className="w-full bg-transparent border-none p-0 text-xs text-gray-500 focus:ring-0 focus:text-indigo-300 disabled:cursor-not-allowed"
                                        placeholder={link.connected ? "Paste profile URL..." : "Account not linked"}
                                    />
                                </div>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
};

export default AdminSettings;