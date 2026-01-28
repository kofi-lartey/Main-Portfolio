import React from 'react';
import { ArrowUpRight, Github, ExternalLink, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const SelectedProjects = () => {
    const projects = [
        {
            title: "Learning-Management-System",
            description: "Custom high-performance gateway built with Node.js and Express.js for Learning Management.",
            image: "https://media.istockphoto.com/id/1451316016/photo/lms-learning-management-system-for-lesson-and-online-education-course-application-study-e.jpg?s=612x612&w=0&k=20&c=fRH0AanVP3IkjZtYNwJiyALkAvN3plLtrcPd1L2MrJo=",
            links: {
                github: "https://github.com/kofi-lartey/Learning-Management-System",
                // live: "https://prism-gateway.demo"
            },
            tags: ["Backend", "Express.js", "Node.js","PostgreSQL", "Squelize"]
        },
        {
            title: "Attendance System",
            description: "A full-stack attendance tracking application with facial recognition and real-time analytics.-(Team Project)",
            image: "https://res.cloudinary.com/djjgkezui/image/upload/v1769394401/WhatsApp_Image_2026-01-26_at_2.23.08_AM_rswuxt.jpg",
            links: {
                live: "https://attendance-system1-smoky.vercel.app/",
                github: "https://github.com/kofi-lartey/Attendance-API"
            },
            tags: ["Backend", "Express.js", "Node.js","MongoDB"]
        },
        {
            title: "Wedding Website - 'Raymond & Benedicta'",
            description: "A bespoke wedding website crafted with React.js and Tailwind CSS to celebrate Raymond and Benedicta's special day.",
            // isSpecial: true,
            image: "https://res.cloudinary.com/djjgkezui/image/upload/v1769394990/WhatsApp_Image_2026-01-26_at_2.33.28_AM_bigd5s.jpg",
            links: {
                live: "https://beneray.netlify.app/",
                github: "https://github.com/kofi-lartey/Raymonds-Wedding"

            },
            tags: ["React.js", "Tailwind CSS", "Netlify"]
        }
    ];

    return (
        <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-[1px] bg-blue-500"></div>
                        <span className="text-blue-500 text-xs font-black uppercase tracking-widest">Portfolio</span>
                    </div>
                    <h2 className="text-white text-4xl md:text-5xl font-black tracking-tighter mb-4">Selected Projects</h2>
                    <p className="text-gray-500 text-sm max-w-md">A collection of recent technical and creative endeavors across engineering and art.</p>
                </div>
                <Link to='/projects' className="hidden md:flex items-center gap-2 text-gray-400 hover:text-white transition-all text-sm font-bold group border-b border-transparent hover:border-white pb-1">
                    View All Works
                    <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {projects.map((project, index) => (
                    <div key={index} className="group">
                        {/* Project Card Container */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-white/5 bg-[#0a0f1a]">
                            {/* Overlay Links on Hover */}
                            <div className="absolute inset-0 bg-[#060910]/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center gap-6">
                                {project.links?.github && (
                                    <a href={project.links.github} target="_blank" rel="noreferrer" className="p-4 bg-white/5 rounded-full hover:bg-white/10 text-white transition-all hover:scale-110">
                                        <Github size={22} />
                                    </a>
                                )}
                                {project.links?.live && (
                                    <a href={project.links.live} target="_blank" rel="noreferrer" className="p-4 bg-blue-500 rounded-full text-white transition-all hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                                        <ExternalLink size={22} />
                                    </a>
                                )}
                                {!project.links?.github && !project.links?.live && (
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Internal Project</span>
                                )}
                            </div>

                            {/* Image Content */}
                            {project.isSpecial ? (
                                <div className="w-full h-full bg-gradient-to-br from-[#2d3a30] to-[#1a211c] flex flex-col items-center justify-center p-8">
                                    <div className="text-center">
                                        <div className="w-px h-12 bg-[#8da08e]/30 mx-auto mb-6" />
                                        <h3 className="text-[#8da08e] tracking-[0.3em] uppercase text-sm mb-4">Focus Series</h3>
                                        <p className="text-[#8da08e]/60 text-[10px] italic leading-relaxed">Monochrome Architecture<br />Accra, 2026</p>
                                    </div>
                                </div>
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            )}

                            {/* Floating Category Tag */}
                            <div className="absolute bottom-6 left-6 z-10">
                                <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest">
                                    {project.tags?.[0]}
                                </span>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="space-y-3">
                            <div className="flex justify-between items-start">
                                <h3 className="text-white font-bold text-xl">{project.title}</h3>
                                <ArrowUpRight size={16} className="text-gray-700 group-hover:text-blue-500 transition-colors" />
                            </div>
                            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                {project.description}
                            </p>

                            <div className="flex gap-2 pt-2">
                                {project.tags?.map(tag => (
                                    <span key={tag} className="text-[9px] font-bold text-gray-600 uppercase tracking-tighter">#{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View All */}
            <div className="mt-16 md:hidden">
                <Link to='/projects' className="flex items-center justify-center gap-2 w-full py-4 bg-white/5 rounded-2xl text-white font-bold text-sm">
                    All Projects <ArrowUpRight size={18} />
                </Link>
            </div>
        </section>
    );
};

export default SelectedProjects;