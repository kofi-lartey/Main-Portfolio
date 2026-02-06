import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Terminal,
    Play,
    ArrowRight,
    Database,
    Globe,
    Mail,
    Code2,
    X,
    Music,
    Aperture,
    Volume2,
    Github,
    ExternalLink
} from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');
    const [activeMedia, setActiveMedia] = useState(null);

    const projectData = [
        // {
        //     id: 1,
        //     category: 'Music',
        //     tag: 'Creative',
        //     title: 'Beneray Branding',
        //     description: 'Identity and visual language for a high-fidelity boutique audio collective.',
        //     image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?auto=format&fit=crop&q=80',
        //     mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        //     size: 'large'
        // },
        {
            id: 2,
            category: 'Tech',
            title: 'Attendance System',
            description: 'Enterprise-grade tracking system with biometric integration and custom Express API.',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1769394401/WhatsApp_Image_2026-01-26_at_2.23.08_AM_rswuxt.jpg',
            projectUrl: 'https://attendance-system1-smoky.vercel.app/',
            sourceCodeUrl: 'https://github.com/kofi-lartey/Attendance-API',
            status: 'ACTIVE',
            tags: ['NODE.JS', "Express.js", "Node.js", "MongoDB"],
            details: ['MongoDB', 'RESTful'],
            size: 'horizontal'
        },
        {
            id: 3,
            category: 'Tech',
            title: 'Jimambricks',
            subtitle: 'Architectural Photography',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1769574868/WhatsApp_Image_2026-01-28_at_4.34.05_AM_zu0f4g.jpg',
            projectUrl: 'https://jimambricks.com/',
            sourceCodeUrl: 'https://github.com/osaewealth/jimambbc',
            status: 'ACTIVE',
            tags: ['NODE.JS', "Express.js", "Node.js", "MongoDB"],
            details: ['MongoDB', 'RESTful', 'Team Project'],
            size: 'horizontal'
        },
        {
            id: 4,
            category: 'Tech',
            title: 'LMS Backend',
            subtitle: 'Architecture & API Design',
            image: 'https://media.istockphoto.com/id/1451316016/photo/lms-learning-management-system-for-lesson-and-online-education-course-application-study-e.jpg?s=612x612&w=0&k=20&c=fRH0AanVP3IkjZtYNwJiyALkAvN3plLtrcPd1L2MrJo=',
            // projectUrl: '',
            sourceCodeUrl: 'https://github.com/kofi-lartey/Learning-Management-System',
            status: 'ACTIVE',
            tags: ['PostgreSql', 'Express', 'Node.js', 'Squelize'],
            size: 'horizontal'
        },
        // {
        //     id: 5,
        //     category: 'Music',
        //     tag: 'Sound Exploration',
        //     title: 'Acoustic Synthesis',
        //     description: 'Mixing digital textures with organic samples for immersive spatial audio environments.',
        //     image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80',
        //     mediaUrl: 'https://www.w3schools.com/html/horse.mp3',
        //     size: 'wide'
        // },
        {
            id: 6,
            category: 'Tech',
            title: 'Wedding Website',
            subtitle: 'Raymond & Benedicta Wedding Website',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1769394990/WhatsApp_Image_2026-01-26_at_2.33.28_AM_bigd5s.jpg',
            projectUrl: 'https://beneray.netlify.app/',
            sourceCodeUrl: 'https://github.com/kofi-lartey/Raymonds-Wedding',
            status: 'ACTIVE',
            tags: ["React.js", "Tailwind CSS", "Netlify"],
            size: 'large'
        },
        {
            id: 7,
            category: 'Tech',
            title: 'AUDITOR-PORTAL-DB',
            subtitle: 'ORC Auditor Portal Database Management System',
            image: 'https://www.internationalaccountingbulletin.com/wp-content/uploads/sites/9/2022/05/Audit-2.jpg',
            // projectUrl: 'https://beneray.netlify.app/',
            sourceCodeUrl: 'https://github.com/kofi-lartey/ORC-AUDITOR-PORTAL-DB',
            status: 'ACTIVE',
            tags: ['PostgreSql', 'Express', 'Node.js', 'Squelize', 'NeonDB'],
            size: 'wide'
        },
        {
            id: 8,
            category: 'Tech',
            title: 'Simple-Blog-API',
            subtitle: 'Blog API',
            image: 'https://static.wixstatic.com/media/df59d5_b7620913566341d9916271da065c7dec~mv2.png/v1/fill/w_924,h_584,al_c,q_90,enc_avif,quality_auto/df59d5_b7620913566341d9916271da065c7dec~mv2.png',
            // projectUrl: 'https://beneray.netlify.app/',
            sourceCodeUrl: 'https://github.com/kofi-lartey/Simple-Blog-API-',
            status: 'ACTIVE',
            tags: ['MongoDB', 'Express', 'Node.js'],
            size: 'wide'
        },
        {
            id: 9,
            category: 'Tech',
            title: 'Todo-List-API',
            subtitle: 'Todo API',
            image: 'https://img.freepik.com/free-vector/colorful-todo-list-illustration_1308-173328.jpg?semt=ais_hybrid&w=740&q=80',
            // projectUrl: 'https://beneray.netlify.app/',
            sourceCodeUrl: 'https://github.com/kofi-lartey/Todo-List-API',
            status: 'ACTIVE',
            tags: ['MongoDB', 'Express', 'Node.js'],
            size: 'wide'
        },
        {
            id: 10,
            category: 'Tech',
            title: 'InkWell-Hall_API',
            subtitle: 'API for liberary management system',
            image: 'https://cdn.prod.website-files.com/65fabbf8f7f7323a634a308c/6697a8662e63dfe68b424df5_Group%201171275865.png',
            // projectUrl: 'https://beneray.netlify.app/',
            sourceCodeUrl: 'https://github.com/kofi-lartey/InkWell-Hall_API',
            status: 'ACTIVE',
            tags: ['MongoDB', 'Express', 'Node.js'],
            size: 'small'
        },
        {
            id: 11,
            category: 'Music',
            tag: 'After Church Vibes',
            title: 'Keyboard Synthesizer',
            description: 'Exploring lush pads and vibrant leads using modular synthesis techniques.',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1769600207/WhatsApp_Image_2026-01-28_at_11.36.19_AM_mvlh8q.jpg',
            mediaUrl: 'https://res.cloudinary.com/djjgkezui/video/upload/v1769599788/WhatsApp_Video_2026-01-28_at_11.28.29_AM_t8slil.mp4',
            size: 'small'
        },
        {
            id: 12,
            category: 'Tech',
            title: 'Elvento_API',
            subtitle: 'API for an E-commerce management system',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1769608918/WhatsApp_Image_2026-01-28_at_2.00.59_PM_knxlab.jpg',
            projectUrl: 'https://elvento.netlify.app/',
            sourceCodeUrl: 'https://github.com/InkWell-Hall/Elvento_API',
            status: 'ACTIVE',
            tags: ['MongoDB', 'Express', 'Node.js', 'Team Project'],
            size: 'wide'
        },
        {
            id: 13,
            category: 'Tech',
            title: 'Ebe_Farms',
            subtitle: 'API for an Agriculture management system',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1769609318/WhatsApp_Image_2026-01-28_at_2.08.10_PM_cmlacf.jpg',
            projectUrl: 'https://ebe-farms.netlify.app/',
            sourceCodeUrl: 'https://github.com/InkWell-Hall/ebe_farms_Backend',
            status: 'ACTIVE',
            tags: ['MongoDB', 'Express', 'Node.js', 'Team Project'],
            size: 'wide'
        },
        {
            id: 14,
            category: 'Tech',
            title: 'Drag and Drop Game',
            subtitle: 'Game that involves dragging and dropping elements to achieve objectives',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1769610101/WhatsApp_Image_2026-01-28_at_2.21.12_PM_pl6rm2.jpg',
            projectUrl: 'https://emerald-d-d-game.vercel.app/',
            sourceCodeUrl: 'https://github.com/kofi-lartey/Emerald-D-D-Game',
            status: 'ACTIVE',
            tags: ['HTML','css','JavaScript','Team Project'],
            size: 'wide'
        },
        {
            id: 15,
            category: 'Tech',
            title: 'Techtoon Portfolio',
            subtitle: 'A cartoon Like Portfolio Website',
            image: 'https://res.cloudinary.com/djjgkezui/image/upload/v1770404210/Screenshot_2026-02-06_183740_d8plfw.png',
            projectUrl: 'https://spontaneous-quokka-950c3a.netlify.app/testimonials',
            sourceCodeUrl: 'https://github.com/kofi-lartey/Demo-Portfolio-1',
            status: 'ACTIVE',
            tags: ['React','TailwindCss','JavaScript'],
            size: 'wide'
        },
    ];

    const filteredProjects = filter === 'All'
        ? projectData
        : projectData.filter(p => p.category === filter);

    return (
        <div className="bg-[#0a0f1a] min-h-screen pt-32 pb-20 px-6 lg:px-12 selection:bg-blue-500/30">

            {/* --- Media Player Overlay --- */}
            <AnimatePresence>
                {activeMedia && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
                    >
                        <button onClick={() => setActiveMedia(null)} className="absolute top-10 right-10 text-white/40 hover:text-white"><X size={40} /></button>
                        <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="w-full max-w-4xl bg-[#111827] rounded-[2rem] overflow-hidden border border-white/10 p-2">
                            {activeMedia.endsWith('.mp3') ? (
                                <div className="p-20 flex flex-col items-center text-center">
                                    <div className="w-20 h-20 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 animate-pulse"><Volume2 className="text-blue-500" size={32} /></div>
                                    <h3 className="text-white text-xl font-bold mb-8">Audio Preview</h3>
                                    <audio src={activeMedia} controls autoPlay className="w-full custom-audio" />
                                </div>
                            ) : (
                                <video src={activeMedia} controls autoPlay className="w-full aspect-video object-cover" />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="max-w-7xl mx-auto">
                <header className="mb-12">
                    <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-white text-6xl md:text-7xl font-extrabold mb-4 tracking-tight">The Proof</motion.h1>
                    <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">Multidisciplinary work across technology, sound, and visuals.</p>
                </header>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 p-1.5 bg-white/5 border border-white/5 rounded-2xl w-fit mb-16">
                    {['All', 'Tech', 'Music', 'Photo'].map((tab) => (
                        <button key={tab} onClick={() => setFilter(tab)}
                            className={`px-8 py-2.5 rounded-xl text-sm font-bold transition-all ${filter === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-gray-500 hover:text-gray-300'}`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project) => (
                            <motion.div layout key={project.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                className={`relative group overflow-hidden rounded-[2rem] border border-white/5 ${project.size === 'large' ? 'lg:col-span-2 lg:row-span-2 min-h-[500px]' : ''} ${project.size === 'horizontal' || project.size === 'wide' ? 'lg:col-span-2' : ''} ${project.size === 'small' ? 'aspect-square' : ''} bg-[#111827]`}
                            >
                                {/* Background Image for all cards to keep it visual */}
                                <img src={project.image} className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${project.category === 'Tech' ? 'opacity-80 ' : 'opacity-80'}`} alt="" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent z-10" />

                                <div className="relative z-20 p-8 h-full flex flex-col justify-end">
                                    {/* Tech Specific UI */}
                                    {project.category === 'Tech' && (
                                        <div className="h-full flex flex-col">
                                            <div className="flex justify-between items-start mb-auto">
                                                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20"><Terminal className="text-blue-500" size={24} /></div>
                                                <div className="flex gap-2">
                                                    {project.tags?.map(t => <span key={t} className="text-[9px] font-bold bg-blue-500/50 px-2 py-1 rounded border border-white/10 uppercase">{t}</span>)}
                                                </div>
                                            </div>
                                            <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.description || project.subtitle}</p>
                                            <div className="flex gap-3">
                                                <a href={project.sourceCodeUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all">
                                                    View Source <Github size={14} />
                                                </a>
                                                <a href={project.projectUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-blue-600/20 text-blue-400 border border-blue-500/20 px-4 py-2 rounded-lg text-xs font-bold hover:bg-blue-600 hover:text-white transition-all">
                                                    Live <ExternalLink size={14} />
                                                </a>
                                            </div>
                                        </div>
                                    )}

                                    {/* Music Specific UI */}
                                    {project.category === 'Music' && (
                                        <>
                                            <span className="w-fit px-3 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-black uppercase tracking-widest rounded-md mb-4 border border-blue-500/20">{project.tag}</span>
                                            <h3 className="text-white text-3xl font-bold mb-3">{project.title}</h3>
                                            <p className="text-gray-300/70 text-sm mb-6 max-w-xs">{project.description}</p>
                                            <button onClick={() => setActiveMedia(project.mediaUrl)} className="flex items-center gap-3 w-fit bg-white text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-blue-500 hover:text-white transition-all active:scale-95">
                                                {project.mediaUrl?.endsWith('.mp3') ? 'Play Audio' : 'Play Video'} <Play size={14} fill="currentColor" />
                                            </button>
                                        </>
                                    )}

                                    {/* Photo Specific UI */}
                                    {project.category === 'Photo' && (
                                        <div className="text-center items-center flex flex-col w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <Aperture className="text-blue-500 mb-4" size={32} />
                                            <h4 className="text-white font-bold text-xl uppercase tracking-tighter">{project.title}</h4>
                                            <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase mt-1">{project.subtitle}</p>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <footer className="text-center pt-20 border-t border-white/5">
                    <h2 className="text-white text-4xl font-black mb-6">Let's build something.</h2>
                    <div className="flex justify-center gap-4">
                        <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all">Get in Touch</button>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Projects;