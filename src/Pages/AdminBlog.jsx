import React, { useState, useEffect } from 'react';
import {
    Plus, Search, Pencil, Trash2, FileText, Sparkles,
    ArrowLeft, Save, Bold, Italic, List, Quote,
    Image as ImageIcon, Clock, ChevronRight, Wand2,
    CheckCircle2, Loader2, Link as LinkIcon
} from 'lucide-react';
import Sidebar from '../Components/Sidebar';

const AdminBlog = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [view, setView] = useState('list');
    const [editorMode, setEditorMode] = useState('write');
    const [isAiLoading, setIsAiLoading] = useState(false);
    const [readingTime, setReadingTime] = useState(0);

    const [editingPost, setEditingPost] = useState({
        title: '',
        category: 'Design',
        content: '',
        status: 'Draft',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop'
    });

    // Calculate reading time
    useEffect(() => {
        const words = editingPost.content.trim().split(/\s+/).length;
        setReadingTime(Math.ceil(words / 200) || 0);
    }, [editingPost.content]);

    // Simulated AI Logic
    const handleAiAssist = () => {
        setIsAiLoading(true);
        // Simulate AI thinking time
        setTimeout(() => {
            const aiSuggestions = "\n\n[AI SUGGESTION]: To wrap this up, the intersection of minimalist design and high-performance engineering isn't just a trend—it's the new standard for digital excellence in 2026.";
            setEditingPost({
                ...editingPost,
                content: editingPost.content + aiSuggestions
            });
            setIsAiLoading(false);
        }, 1500);
    };

    const posts = [
        { id: 1, title: 'Spatial Computing in 2026', cat: 'Tech', date: 'Jan 15', views: '2.4k', status: 'Live' },
        { id: 2, title: 'The Psychology of Dark Mode', cat: 'Design', date: 'Jan 12', views: '1.1k', status: 'Live' },
    ];

    return (
        <div className="min-h-screen bg-[#02040a] flex text-white font-sans selection:bg-indigo-500/30">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

            <main className="flex-1 min-w-0 h-screen overflow-y-auto">
                {view === 'list' ? (
                    /* --- BENTO LIST VIEW --- */
                    <div className="p-6 md:p-12 max-w-7xl mx-auto space-y-12 animate-in fade-in duration-700">
                        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-[0.3em]">
                                    <Sparkles size={14} /> Editorial Studio
                                </div>
                                <h1 className="text-5xl font-black tracking-tighter">Your Stories.</h1>
                            </div>
                            <button
                                onClick={() => setView('editor')}
                                className="group bg-white text-black px-8 py-4 rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-[0.98] active:scale-95"
                            >
                                <Plus size={20} /> New Entry
                            </button>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {posts.map((post) => (
                                <div key={post.id} className="group bg-[#0b0f1a] border border-white/5 rounded-[2.5rem] p-8 hover:border-indigo-500/40 transition-all duration-500">
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-green-500/10 text-green-500 border border-green-500/20">
                                            {post.status}
                                        </span>
                                        <button className="p-2 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"><Pencil size={16} /></button>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-indigo-400 transition-colors">{post.title}</h3>
                                    <div className="flex items-center gap-4 text-xs text-gray-500 font-medium">
                                        <span className="flex items-center gap-1.5"><Clock size={14} /> {post.date}</span>
                                        <span className="flex items-center gap-1.5"><FileText size={14} /> {post.cat}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    /* --- FOCUS EDITOR WITH AI --- */
                    <div className="h-full flex flex-col">
                        <nav className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-[#02040a]/80 backdrop-blur-2xl z-50 sticky top-0">
                            <div className="flex items-center gap-4">
                                <button onClick={() => setView('list')} className="p-2.5 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                                    <ArrowLeft size={20} />
                                </button>
                                <div className="flex bg-white/5 p-1 rounded-xl border border-white/5">
                                    <button onClick={() => setEditorMode('write')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${editorMode === 'write' ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}>Edit</button>
                                    <button onClick={() => setEditorMode('preview')} className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${editorMode === 'preview' ? 'bg-indigo-600 text-white' : 'text-gray-500'}`}>Preview</button>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleAiAssist}
                                    disabled={isAiLoading}
                                    className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl border border-indigo-500/30 text-indigo-400 font-bold text-xs hover:bg-indigo-500/10 transition-all disabled:opacity-50"
                                >
                                    {isAiLoading ? <Loader2 size={16} className="animate-spin" /> : <Wand2 size={16} />}
                                    {isAiLoading ? 'AI Thinking...' : 'AI Assist'}
                                </button>
                                <button className="bg-indigo-600 hover:bg-indigo-500 px-6 py-2.5 rounded-xl font-bold shadow-xl shadow-indigo-600/20 active:scale-95 transition-all">
                                    Publish
                                </button>
                            </div>
                        </nav>

                        <div className="flex-1 overflow-y-auto">
                            {editorMode === 'write' ? (
                                <div className="max-w-4xl mx-auto px-6 py-12 md:py-20 space-y-12">
                                    <textarea
                                        placeholder="Article Title..."
                                        className="w-full bg-transparent text-5xl md:text-7xl font-black outline-none placeholder:text-white/5 tracking-tighter resize-none overflow-hidden"
                                        rows="1"
                                        value={editingPost.title}
                                        onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                                    />

                                    {/* Floating Formatting Bar */}
                                    <div className="sticky top-4 z-40 w-fit mx-auto bg-[#1a1f2e]/90 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl flex items-center gap-1 shadow-2xl">
                                        {[Bold, Italic, List, Quote, LinkIcon, ImageIcon].map((Icon, i) => (
                                            <button key={i} className="p-3 hover:bg-indigo-500/20 hover:text-indigo-400 rounded-xl transition-all"><Icon size={18} /></button>
                                        ))}
                                        <div className="w-px h-6 bg-white/10 mx-1" />
                                        <button onClick={handleAiAssist} className="p-3 text-indigo-400 hover:bg-indigo-500/20 rounded-xl transition-all">
                                            <Sparkles size={18} />
                                        </button>
                                    </div>

                                    <textarea
                                        placeholder="Tell your story..."
                                        className="w-full bg-transparent min-h-[500px] outline-none text-xl leading-[1.8] text-gray-400 placeholder:text-white/5 resize-none font-serif"
                                        value={editingPost.content}
                                        onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                                    />

                                    {/* Dynamic Status Bar */}
                                    <footer className="pt-10 border-t border-white/5 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-gray-600">
                                        <div className="flex gap-6">
                                            <span className="flex items-center gap-2"><Clock size={12} /> {readingTime} Min Read</span>
                                            <span className="flex items-center gap-2"><CheckCircle2 size={12} /> Auto-saved</span>
                                        </div>
                                        <span>Characters: {editingPost.content.length}</span>
                                    </footer>
                                </div>
                            ) : (
                                /* --- CLEAN PREVIEW MODE --- */
                                <div className="max-w-3xl mx-auto px-6 py-24 space-y-12 animate-in fade-in duration-500">
                                    <div className="space-y-4">
                                        <h1 className="text-6xl font-black tracking-tighter leading-tight">{editingPost.title || "Untitled"}</h1>
                                        <p className="text-indigo-500 font-bold text-sm tracking-widest uppercase">Editorial • Jan 2026</p>
                                    </div>
                                    <div className="prose prose-invert prose-xl max-w-none font-serif text-gray-400 leading-relaxed">
                                        {editingPost.content.split('\n').map((p, i) => <p key={i} className="mb-6">{p}</p>)}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default AdminBlog;