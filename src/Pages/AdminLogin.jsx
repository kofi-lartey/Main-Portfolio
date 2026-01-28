import React from 'react';
import { Mail, Lock, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
const AdminLogin = () => {

    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0a0f1a] flex flex-col items-center justify-center px-6 relative overflow-hidden">
            {/* Background Decorative Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 blur-[120px] rounded-full" />

            {/* Top Branding Header */}
            <div className="fixed top-0 w-full p-8 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-blue-500 rounded-sm transform rotate-45 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <span className="text-white font-bold tracking-tight">KL Portfolio</span>
                </div>
                <Link to="/" className="text-gray-500 hover:text-white text-sm transition-colors">
                    Return to site
                </Link>
            </div>

            {/* Login Card */}
            <div className="w-full max-w-md bg-white/[0.02] backdrop-blur-xl border border-white/5 rounded-[2rem] p-12 relative z-10 shadow-2xl">
                <div className="flex flex-col items-center mb-10">
                    {/* Profile Circle */}
                    <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6 shadow-inner">
                        <span className="text-blue-400 font-bold text-xl">KL</span>
                    </div>
                    <h1 className="text-white text-3xl font-bold mb-2">Admin Access</h1>
                    <p className="text-gray-500 text-sm tracking-wide">Secure Management Portal</p>
                </div>

                <form className="space-y-6">
                    {/* Email Field */}
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm ml-1">Email Address</label>
                        <div className="relative group">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                            <input
                                type="email"
                                placeholder="admin@kreativ.dev"
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <label className="text-gray-400 text-sm ml-1">Password</label>
                        <div className="relative group">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-blue-500 transition-colors" size={18} />
                            <input
                                type="password"
                                placeholder="••••••••"
                                className="w-full bg-black/40 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-blue-500/50 transition-all"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button type="button" className="text-blue-500 text-xs hover:underline mt-1">Forgot Password?</button>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="button" onClick={() => navigate('/Admin/dashboard')} className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all active:scale-[0.98] mt-4">
                        Authorize Access
                    </button>
                </form>

                {/* Security Footer */}
                <div className="mt-12 flex items-center justify-center gap-2 text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                    <ShieldCheck size={14} />
                    <span>End-to-End Encryption Enabled</span>
                </div>
            </div>

            {/* Footer Branding */}
            <footer className="fixed bottom-8 flex flex-col items-center gap-4">
                <p className="text-[10px] text-gray-600 font-bold tracking-[0.2em]">
                    © 2024 KL KREATIV. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-800" />
                </div>
            </footer>
        </div>
    );
};

export default AdminLogin;