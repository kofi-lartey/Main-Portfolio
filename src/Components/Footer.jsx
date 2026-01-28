import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Download, Copy } from 'lucide-react';

const socialLinks = [
    {
        Icon: Github,
        href: "https://github.com/kofi-lartey" // [cite: 3, 22]
    },
    {
        Icon: Linkedin,
        href: "https://www.linkedin.com/in/alpheaus-gberbie-b6b141326" // 
    },
    {
        Icon: Twitter,
        href: "https://X.com/GberbieAlpheaus" // Add your handle here
    }
];

const Footer = () => {
    return (
        <footer className="pt-20 pb-10 px-6 lg:px-12 border-t border-white/5 bg-[#0a0f1a]">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                {/* Brand Info */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-600 rounded-sm transform rotate-45" />
                        <span className="text-white font-bold text-lg">Kofi Lartey</span>
                    </div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[240px]">
                        Engineering digital experiences and capturing human stories through code, sound, and light.
                    </p>
                    <div className="text-gray-500 text-xs flex items-center gap-2">
                        <span className="w-1 h-1 bg-gray-500 rounded-full" /> Accra - Prampram, Ghana
                    </div>
                </div>

                {/* Connect & Socials */}
                <div className="space-y-6">
                    <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Connect & Socials</h4>
                    <div className="flex items-center gap-3">
                        {socialLinks.map(({ Icon, href }, i) => (
                            <a
                                key={i}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-md bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                            >
                                <Icon size={18} className="text-gray-400 hover:text-white transition-colors" />
                            </a>
                        ))}
                        <a href='https://docs.google.com/document/d/1ppTLlSx78eFP8GbNAmHQRm09Dtk-97o2/edit' download="Gberbie-Alpheaus-Lartey-CV.pdf">
                            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/5 px-4 h-10 rounded-md text-xs font-bold text-white transition-colors">
                                <Download size={14} /> Download CV
                            </button>
                        </a>
                    </div>
                    <div className="flex items-center justify-between bg-white/5 border border-white/5 rounded-md px-4 py-3 group cursor-pointer">
                        <span className="text-gray-300 text-sm">alpheausgberbie12@gmail.com</span>
                        <Copy size={14} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                </div>

                {/* Navigation */}
                <div className="space-y-6 lg:pl-12">
                    <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Navigation</h4>
                    <ul className="space-y-3">

                        <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-white text-sm transition-colors">About</Link></li>
                        <li><Link to="/services" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-white text-sm transition-colors">Services</Link></li>
                        <li><Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-white text-sm transition-colors">Project</Link></li>
                        <li><Link to="/comingSoon" onClick={() => window.scrollTo(0, 0)} className="text-gray-500 hover:text-white text-sm transition-colors">Admin</Link></li>
                    </ul>
                </div>

                {/* Legal Section */}
                <div className="space-y-6 lg:pl-12">
                    <h4 className="text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]">Legal</h4>
                    <ul className="space-y-3">
                        {[
                            { name: 'Privacy', path: '/privacy' },
                            { name: 'Terms', path: '/terms' }
                        ].map(item => (
                            <li key={item.name}>
                                <Link
                                    to={item.path}
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2 group"
                                >
                                    {item.name}
                                    <span className="w-0 h-[1px] bg-blue-500 group-hover:w-4 transition-all duration-300"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-600 text-[11px]">© 2026 Kofi Lartey. All rights reserved. Built with precision and passion.</p>
                <p className="text-gray-600 text-[11px] font-medium italic">Designed by Kofi-Lartey</p>
            </div>
        </footer>
    );
};

export default Footer;