import React from 'react';
import {
    Music, Clock, MapPin, Play, ArrowLeft,
    Mic2, Piano, Users, Award,
    CheckCircle, Sparkles
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MusicEducation = () => {
    const navigate = useNavigate();

    // Navigation logic to pass selected course to contact form
    const handleEnrollment = (courseTitle) => {
        navigate('/contact', {
            state: {
                service: {
                    type: 'Music Academy Enrollment',
                    name: courseTitle
                }
            }
        });
    };

    const courses = [
        {
            title: 'Piano Mastery',
            price: 'GH₵ 600',
            period: 'Per Month',
            icon: <Piano className="text-purple-400" size={28} />,
            description: 'From classical theory to contemporary jazz improv. Tailored for both beginners and intermediate players.',
            modules: ['Music Theory 101', 'Scale & Chord Construction', 'Ear Training', 'Performance Techniques'],
            type: '1-on-1 Sessions'
        },
        {
            title: 'Vocal Coaching',
            price: 'GH₵ 800',
            period: '8 Sessions',
            icon: <Mic2 className="text-blue-400" size={28} />,
            description: 'Unlock your true range. We focus on breath control, pitch accuracy, and vocal health for soloists.',
            modules: ['Breath Management', 'Resonance & Tone', 'Diction & Phrasing', 'Stage Presence'],
            type: 'Personalized Coaching'
        },
        {
            title: 'Choir Directing',
            price: 'GH₵ 2,500',
            period: 'Full Program',
            icon: <Users className="text-orange-400" size={28} />,
            description: 'Professional training for conductors. Learn to manage parts, blend voices, and lead rehearsals effectively.',
            modules: ['Part Scoring', 'Vocal Blending', 'Conducting Patterns', 'Repertoire Selection'],
            type: 'Certification Course'
        }
    ];

    return (
        <div className="min-h-screen bg-[#060910] text-white py-20 px-6 font-sans selection:bg-purple-500/30">
            <div className="max-w-6xl mx-auto">
                {/* Header Navigation */}
                <button
                    onClick={() => navigate('/services')}
                    className="mb-12 text-zinc-500 hover:text-white flex items-center gap-2 font-bold transition-all group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back to Services
                </button>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                    <div className="relative">
                        <div className="absolute -inset-10 bg-purple-600/20 blur-[120px] rounded-full"></div>
                        <div className="relative aspect-square rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                            <img
                                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80"
                                className="w-full h-full object-cover opacity-80"
                                alt="Music Education"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#060910] via-transparent to-transparent"></div>
                            <button className="absolute inset-0 m-auto w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group active:scale-95">
                                <Play size={32} fill="white" className="ml-1 group-hover:scale-110 transition-transform" />
                            </button>
                        </div>

                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-[#1a1f2e] p-6 rounded-3xl border border-white/10 shadow-2xl flex items-center gap-4 animate-bounce-slow">
                            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <Award className="text-purple-500" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Accredited</p>
                                <p className="font-bold">Expert Instructors</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-8 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-black uppercase tracking-widest mx-auto lg:mx-0">
                            <Sparkles size={14} /> The Kofi's Academy
                        </div>
                        <h1 className="text-6xl md:text-7xl font-black leading-none tracking-tighter">
                            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Sound.</span> <br />
                            Lead the Art.
                        </h1>
                        <p className="text-zinc-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                            Professional music training in the heart of Accra. Whether you're leading a choir or mastering the keys, we bridge the gap between passion and professional excellence.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">
                            <span className="flex items-center gap-2"><MapPin size={16} className="text-purple-500" /> Prampram Studio</span>
                            <span className="flex items-center gap-2"><Clock size={16} className="text-purple-500" /> Flexible Hours</span>
                        </div>
                    </div>
                </div>

                {/* Course Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
                    {courses.map((course, i) => (
                        <div key={i} className="group bg-white/[0.02] border border-white/5 p-10 rounded-[3rem] hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-500 flex flex-col">
                            <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-purple-500/10 transition-all">
                                {course.icon}
                            </div>
                            <h3 className="text-3xl font-bold mb-3 tracking-tight">{course.title}</h3>
                            <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 flex-1">
                                {course.description}
                            </p>

                            <div className="space-y-3 mb-10">
                                <p className="text-[10px] font-black uppercase tracking-widest text-purple-400">Curriculum Highlights</p>
                                {course.modules.map((m, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-[13px] text-zinc-400 font-medium">
                                        <CheckCircle size={14} className="text-purple-500 flex-shrink-0" /> {m}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-white/5 flex items-center justify-between mt-auto">
                                <div>
                                    <p className="text-2xl font-black tracking-tighter">{course.price}</p>
                                    <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest">{course.period}</p>
                                </div>
                                <button
                                    onClick={() => handleEnrollment(course.title)}
                                    className="px-6 py-3 bg-white text-black font-black rounded-xl text-[10px] uppercase tracking-widest hover:bg-purple-500 hover:text-white transition-all active:scale-95 shadow-lg shadow-purple-500/0 hover:shadow-purple-500/20"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Facilities Section */}
                <div className="bg-white/[0.02] border border-white/5 rounded-[4rem] p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-20 opacity-5 group-hover:opacity-10 transition-opacity duration-1000">
                        <Music size={300} />
                    </div>
                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-10">
                            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">Why Train <br /><span className="text-purple-500 italic">With Us?</span></h2>
                            <div className="space-y-8">
                                {[
                                    { t: 'Professional Gear', d: 'Learn on industry-standard Yamaha keyboards and studio monitors.' },
                                    { t: 'Hybrid Learning', d: 'Mix physical sessions with our online theory portal.' },
                                    { t: 'Live Experience', d: 'Quarterly showcases and live choir recording sessions.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-5">
                                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex-shrink-0 flex items-center justify-center mt-1">
                                            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                                        </div>
                                        <div>
                                            <h4 className="font-black text-white uppercase text-[10px] tracking-widest mb-1">{item.t}</h4>
                                            <p className="text-zinc-500 text-sm font-medium leading-relaxed">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <img src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80" className="rounded-3xl h-64 w-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Studio" />
                                <div className="p-6 bg-purple-600 rounded-3xl text-center">
                                    <p className="text-3xl font-black tracking-tighter">100%</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest">Practical</p>
                                </div>
                            </div>
                            <div className="space-y-4 pt-8">
                                <div className="p-6 bg-zinc-900 border border-white/5 rounded-3xl text-center">
                                    <p className="text-3xl font-black tracking-tighter">Prampram</p>
                                    <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500">Based</p>
                                </div>
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXG_Gu-SmsdOxduESlwfGwMihSldn37SymqQ&s" className="rounded-3xl h-64 w-full object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" alt="Performance" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MusicEducation;