import React, { useState } from 'react';
import {
  Plus, Search, Pencil, Trash2, LayoutGrid,
  Code, Music, CheckCircle2, Circle, Menu, ArrowLeft, Upload,
  Github, Save, Check, ExternalLink, Eye, X
} from 'lucide-react';
import Sidebar from '../Components/Sidebar';

const AdminProjects = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [view, setView] = useState('list');
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'TECH',
    status: 'Published',
    isFeatured: false,
    github: '',
    live: ''
  });

  const handlePublish = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setView('list');
    }, 2000);
  };

  const filters = ['All Projects', 'Tech', 'Music', 'Photo'];
  const projects = [
    { id: 1, title: 'Attendance System', category: 'TECH', status: 'Published', lastModified: 'Oct 24, 2023', icon: Code, iconBg: 'bg-blue-500/10', iconColor: 'text-blue-500' },
    { id: 2, title: 'LMS Platform', category: 'TECH', status: 'Draft', lastModified: 'Nov 12, 2023', icon: LayoutGrid, iconBg: 'bg-purple-500/10', iconColor: 'text-purple-500' },
    { id: 3, title: 'Beneray', category: 'MUSIC', status: 'Published', lastModified: 'Dec 05, 2023', icon: Music, iconBg: 'bg-orange-500/10', iconColor: 'text-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-[#060910] flex overflow-x-hidden relative">
      {/* Sidebar Component */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Mobile Backdrop (Closes sidebar when clicking outside) */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1 min-w-0 overflow-y-auto">
        <div className="p-4 md:p-10 max-w-7xl mx-auto">

          {/* --- TOP BAR (Mobile Header) --- */}
          <div className="flex items-center justify-between mb-8 lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="p-3 bg-white/5 border border-white/10 rounded-xl text-white"
            >
              <Menu size={20} />
            </button>
            <div className="text-right">
              <span className="text-[10px] font-black tracking-widest text-blue-500 uppercase">Admin Panel</span>
              <p className="text-white text-xs font-bold">Project Manager</p>
            </div>
          </div>

          {view === 'list' ? (
            /* --- PROJECT LIST VIEW --- */
            <>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">Projects</h1>
                  <p className="text-gray-500 mt-1 text-sm">Total {projects.length} active projects in your portfolio.</p>
                </div>
                <button onClick={() => setView('add')} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-600/20">
                  <Plus size={18} /> <span className="text-sm">Add New Project</span>
                </button>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-col lg:flex-row gap-4 mb-8">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                  <input type="text" placeholder="Search projects..." className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-3.5 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-blue-500/30 transition-all" />
                </div>
                <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
                  {filters.map((f) => (
                    <button key={f} onClick={() => setActiveFilter(f)} className={`px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider whitespace-nowrap border transition-all ${activeFilter === f ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20' : 'bg-white/5 border-white/5 text-gray-500'}`}>{f}</button>
                  ))}
                </div>
              </div>

              {/* TABLE / CARD UI */}
              <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left min-w-[700px]">
                    <thead className="bg-white/[0.02] text-[10px] font-black uppercase tracking-[0.25em] text-gray-500 border-b border-white/5">
                      <tr>
                        <th className="px-8 py-6">Project</th>
                        <th className="px-8 py-6">Category</th>
                        <th className="px-8 py-6">Status</th>
                        <th className="px-8 py-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {projects.map((p) => (
                        <tr key={p.id} className="hover:bg-white/[0.01] transition-colors group">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className={`w-11 h-11 rounded-2xl ${p.iconBg} flex items-center justify-center ${p.iconColor}`}><p.icon size={20} /></div>
                              <div>
                                <p className="text-white font-bold group-hover:text-blue-400 transition-colors">{p.title}</p>
                                <p className="text-[10px] text-gray-600 mt-0.5">{p.lastModified}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-8 py-6"><span className="px-3 py-1 rounded-lg text-[9px] font-black tracking-widest bg-white/5 text-gray-500 border border-white/5">{p.category}</span></td>
                          <td className="px-8 py-6">
                            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${p.status === 'Published' ? 'bg-green-500/5 border-green-500/20 text-green-500' : 'bg-white/5 border-white/10 text-gray-500'}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${p.status === 'Published' ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`} />
                              <span className="text-[10px] font-black uppercase tracking-widest">{p.status}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <div className="flex justify-end gap-1">
                              <button className="p-2.5 text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 rounded-xl transition-all"><Pencil size={18} /></button>
                              <button className="p-2.5 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-all"><Trash2 size={18} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            /* --- ADD PROJECT VIEW --- */
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 pb-20">
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
                <button onClick={() => setView('list')} className="flex items-center gap-3 text-gray-500 hover:text-white font-bold transition-all group">
                  <div className="p-2 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                    <ArrowLeft size={20} />
                  </div>
                  <span>Back to Projects</span>
                </button>
                <div className="flex gap-3">
                  <button onClick={() => setView('list')} className="flex-1 sm:flex-none px-6 py-3 rounded-xl bg-white/5 text-gray-400 font-bold text-sm">Cancel</button>
                  <button onClick={handlePublish} className="flex-1 sm:flex-none px-8 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-xl shadow-blue-600/20">Publish</button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Form Inputs */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-6 md:p-8 space-y-8">
                    <h2 className="text-xl font-bold text-white">General Information</h2>
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Project Title</label>
                        <input value={formData.title} onChange={(e) => setFormData({ ...formData, title: e.target.value })} type="text" className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500/30 transition-all" placeholder="Enter title..." />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-gray-500 ml-1">Detailed Summary</label>
                        <textarea rows="6" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} className="w-full bg-white/[0.03] border border-white/5 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-blue-500/30 transition-all resize-none" placeholder="What makes this project special?" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar & Preview */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="bg-blue-600/5 border border-blue-500/10 rounded-[2.5rem] p-6 md:p-8">
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-6 flex items-center gap-2">
                      <Eye size={14} /> Real-time Preview
                    </p>
                    <div className="bg-[#0b0f1a] rounded-3xl overflow-hidden border border-white/5 shadow-2xl">
                      <div className="aspect-video bg-white/5 flex items-center justify-center text-gray-700">
                        <Upload size={32} />
                      </div>
                      <div className="p-6 space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-black text-blue-500 uppercase tracking-[0.2em]">{formData.category}</span>
                          <div className="flex gap-2 text-gray-600"><Github size={14} /><ExternalLink size={14} /></div>
                        </div>
                        <h3 className="text-lg font-bold text-white truncate">{formData.title || 'Untitled Project'}</h3>
                        <p className="text-xs text-gray-500 line-clamp-2">{formData.description || 'Description will appear here...'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminProjects;