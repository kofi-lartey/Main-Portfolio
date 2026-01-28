import React, { useState } from 'react';
import {
  Plus, Bell, Search, Pencil, Trash2, Clock,
  FolderKanban, FileText, Camera,
  Bold, Italic, List, Link as LinkIcon,
  Image as ImageIcon, Code, Undo, Redo, Menu
} from 'lucide-react';
import Sidebar from '../Components/Sidebar';

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { label: 'Live Projects', value: '12', growth: '+2%', icon: FolderKanban, color: 'text-blue-500' },
    { label: 'Blog Posts', value: '48', growth: '+5.4%', icon: FileText, color: 'text-purple-500' },
    { label: 'Photo Views', value: '2.4k', growth: '+12.1%', icon: Camera, color: 'text-orange-500' },
    { label: 'Engagement', value: '892', growth: '-0.4%', icon: Bell, color: 'text-pink-500' },
  ];

  return (
    <div className="min-h-screen bg-[#060910] flex overflow-x-hidden">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="flex-1 min-w-0 overflow-y-auto">
        {/* --- Top Navbar --- */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-4 md:px-8 sticky top-0 bg-[#060910]/80 backdrop-blur-md z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
            >
              <Menu size={24} />
            </button>
            <div className="relative w-48 md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" size={16} />
              <input
                type="text"
                placeholder="Search resources..."
                className="w-full bg-white/5 border border-white/5 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/30 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button className="relative p-2 text-gray-500 hover:text-white transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full border-2 border-[#060910]" />
            </button>
            <div className="flex items-center gap-3 pl-4 md:pl-6 border-l border-white/10 text-white">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold">Alex Rivera</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">Admin</p>
              </div>
              <img src="https://i.pravatar.cc/150?u=alex" className="w-9 h-9 rounded-full border border-white/10" alt="" />
            </div>
          </div>
        </header>

        {/* --- Dashboard Content --- */}
        <div className="p-4 md:p-8 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">System Overview</h1>
              <p className="text-gray-500">Real-time performance and content management.</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all active:scale-95">
              <Plus size={18} /> <span>New Creation</span>
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white/[0.02] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`p-3 rounded-xl bg-white/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <stat.icon size={20} />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-md bg-white/5 ${stat.growth.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {stat.growth}
                  </span>
                </div>
                <p className="text-gray-500 text-xs font-medium mb-1 uppercase tracking-wider">{stat.label}</p>
                <p className="text-3xl font-bold text-white tracking-tight">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Table */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex justify-between items-center px-2">
                <h2 className="text-xl font-bold text-white">Recent Activity</h2>
                <button className="text-blue-500 text-xs font-bold uppercase tracking-widest">View History</button>
              </div>
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[500px]">
                    <thead className="bg-white/5 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
                      <tr>
                        <th className="px-6 py-4 tracking-tighter">Asset Name</th>
                        <th className="px-6 py-4 tracking-tighter">Type</th>
                        <th className="px-6 py-4 tracking-tighter">Status</th>
                        <th className="px-6 py-4 tracking-tighter text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 text-sm">
                      {[
                        { name: 'Headless CMS Logic', cat: 'Software', status: 'Live', time: '2h ago' },
                        { name: 'Icelandic Volcanos', cat: 'Visuals', status: 'Draft', time: '1d ago' },
                        { name: 'Logic Pro Template', cat: 'Audio', status: 'Live', time: '3d ago' }
                      ].map((row) => (
                        <tr key={row.name} className="hover:bg-white/[0.01] transition-colors group">
                          <td className="px-6 py-4">
                            <p className="text-white font-medium group-hover:text-blue-400 transition-colors">{row.name}</p>
                            <p className="text-[10px] text-gray-500 mt-0.5">Modified {row.time}</p>
                          </td>
                          <td className="px-6 py-4 text-gray-400 text-xs">{row.cat}</td>
                          <td className="px-6 py-4">
                            <span className={`px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase tracking-widest ${row.status === 'Live' ? 'bg-green-500/10 text-green-500' : 'bg-orange-500/10 text-orange-500'}`}>
                              {row.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right">
                            <div className="flex justify-end gap-3 text-gray-600">
                              <button className="hover:text-blue-500"><Pencil size={16} /></button>
                              <button className="hover:text-red-500"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="space-y-6">
              <div className="bg-white/[0.02] border border-white/5 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                  <Clock size={16} className="text-blue-500" /> Task Queue
                </h3>
                <div className="space-y-4">
                  {['Release Newsletter', 'Update API Docs'].map((item) => (
                    <div key={item} className="p-3 rounded-xl bg-white/5 border border-white/5 flex gap-4">
                      <div className="w-1.5 h-auto bg-blue-600 rounded-full" />
                      <div>
                        <p className="text-xs font-bold text-white">{item}</p>
                        <p className="text-[10px] text-gray-500 mt-1 uppercase tracking-tighter">Due in 4 hours</p>
                      </div>
                    </div>
                  ))}
                  <button className="w-full py-3 rounded-xl border border-dashed border-white/10 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all">
                    + New Task
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* --- Unified Editor Workspace --- */}
          <div className="mt-12 bg-[#0d1117] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="p-5 border-b border-white/5 flex items-center justify-between bg-black/20">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/10 text-blue-500 p-2 rounded-lg"><Pencil size={16} /></div>
                <h3 className="text-sm font-bold text-white tracking-tight">Workspace Editor</h3>
              </div>
              <div className="flex gap-4">
                <button className="text-gray-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Save Draft</button>
                <button className="bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-6 py-2 rounded-xl shadow-lg shadow-blue-600/20 transition-all">Publish</button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Writer Interface */}
              <div className="p-6 md:p-12 border-r border-white/5 min-h-[400px]">
                <div className="flex flex-wrap gap-4 mb-10 text-gray-500">
                  {[Bold, Italic, List, LinkIcon, ImageIcon, Code].map((Icon, i) => (
                    <Icon key={i} size={18} className="cursor-pointer hover:text-blue-500 transition-colors" />
                  ))}
                  <div className="w-[1px] h-5 bg-white/10 mx-2" />
                  <Undo size={18} className="cursor-pointer hover:text-white" />
                  <Redo size={18} className="cursor-pointer hover:text-white" />
                </div>
                <h2 className="text-4xl font-extrabold text-white/5 mb-8 tracking-tighter select-none">Enter Title...</h2>
                <p className="text-gray-500 text-lg leading-relaxed">
                  Start drafting your next masterpiece. Our system supports Markdown and live asset injection...
                </p>
              </div>

              {/* Preview Interface */}
              <div className="bg-[#080b12] p-6 md:p-12">
                <div className="flex items-center gap-2 text-blue-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" /> Live Preview
                </div>
                <div className="aspect-video bg-gray-900 rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center group">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" alt="" />
                  <Camera size={32} className="text-white relative z-10 opacity-50" />
                </div>
                <h3 className="mt-8 text-2xl font-bold text-white tracking-tight">The Future of Neural Networks</h3>
                <p className="mt-4 text-gray-400 leading-relaxed text-sm">Preview of your content as it will appear on the main site...</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;