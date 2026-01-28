import React from 'react';
import {
    LayoutDashboard, FolderKanban, FileText,
    Camera, BarChart3, Settings,
    Home, X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    const menuItems = [
        { icon: Home, label: 'Back to Site', path: '/' },
        { icon: LayoutDashboard, label: 'Dashboard', path: '/Admin/dashboard' },
        { icon: FolderKanban, label: 'Projects', path: '/Admin/projects' },
        { icon: FileText, label: 'Blog Posts', path: '/Admin/posts' },
        { icon: Camera, label: 'Photography', path: '/Admin/photography' }
    ];

    const systemItems = [
        { icon: BarChart3, label: 'Analytics', path: '/Admin/analytics' },
        { icon: Settings, label: 'Settings', path: '/Admin/settings' }
    ];

    // Shared Navigation Content
    const NavContent = () => (
        <div className="flex flex-col h-full">
            <div className="flex items-center gap-3 px-2 mb-10">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-blue-600/20">
                    K
                </div>
                <span className="text-white font-bold tracking-tight text-lg">Admin Portal</span>
            </div>

            <nav className="flex-1 space-y-1">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 px-3">Main Menu</p>
                {menuItems.map((item) => {
                    const active = location.pathname === item.path;
                    return (
                        <Link
                            key={item.label}
                            to={item.path}
                            onClick={() => window.innerWidth < 768 && onClose()}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${active
                                    ? 'bg-blue-600/10 text-blue-500 font-medium'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                                }`}
                        >
                            <item.icon size={18} className={active ? 'text-blue-500' : 'group-hover:text-blue-400'} />
                            <span className="text-sm">{item.label}</span>
                        </Link>
                    );
                })}

                <div className="pt-8">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600 mb-4 px-3">System</p>
                    {systemItems.map((item) => {
                        const active = location.pathname === item.path;
                        return (
                            <Link
                                key={item.label}
                                to={item.path}
                                onClick={() => window.innerWidth < 768 && onClose()}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${active
                                        ? 'bg-blue-600/10 text-blue-500'
                                        : 'text-gray-400 hover:bg-white/5 hover:text-gray-200'
                                    }`}
                            >
                                <item.icon size={18} />
                                <span className="text-sm">{item.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </nav>

            {/* Storage Info Widget */}
            <div className="mt-auto p-4 bg-blue-600/5 rounded-2xl border border-blue-500/10">
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden mb-3">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        className="h-full bg-blue-600"
                    />
                </div>
                <div className="flex justify-between text-[10px] text-gray-500 font-bold uppercase tracking-tighter">
                    <span>85% Database</span>
                    <span className="text-blue-500 cursor-pointer">Manage</span>
                </div>
            </div>
        </div>
    );

    return (
        <>
            {/* Desktop Static Sidebar */}
            <aside className="hidden md:flex flex-col w-64 h-screen sticky top-0 bg-[#060910] border-r border-white/5 p-6 shrink-0">
                <NavContent />
            </aside>

            {/* Mobile Animated Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.6 }}
                            exit={{ opacity: 0 }}
                            onClick={onClose}
                            className="fixed inset-0 bg-black backdrop-blur-sm z-[60] md:hidden"
                        />

                        <motion.aside
                            drag="x"
                            dragConstraints={{ left: -260, right: 0 }}
                            onDragEnd={(e, info) => info.offset.x < -100 && onClose()}
                            initial={{ x: -260 }}
                            animate={{ x: 0 }}
                            exit={{ x: -260 }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed inset-y-0 left-0 z-[70] w-64 bg-[#060910] border-r border-white/5 p-6 flex flex-col md:hidden"
                        >
                            <button onClick={onClose} className="self-end mb-6 p-2 text-gray-500 hover:text-white bg-white/5 rounded-lg">
                                <X size={20} />
                            </button>
                            <NavContent />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Sidebar;