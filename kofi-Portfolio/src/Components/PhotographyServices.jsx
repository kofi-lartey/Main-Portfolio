import React from 'react';
import { Camera, MapPin, ArrowLeft, CheckCircle2, Clock, Image as ImageIcon, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PhotographyServices = () => {
    const navigate = useNavigate();

    // Navigation logic to pass selected package to contact form
    const handleBooking = (title) => {
        navigate('/contact', { 
            state: { 
                service: { 
                    type: 'Photography Booking', 
                    name: title 
                } 
            } 
        });
    };

    const shots = [
        {
            title: 'Studio Portrait',
            price: 'GH₵ 600',
            location: 'Prampram - Accra Studio',
            duration: '2 Hours',
            images: '15 High-Res',
            tags: ['Individual', 'Corporate', 'Modeling'],
            description: 'Professional lighting setup designed to capture your best angles for LinkedIn, portfolios, or personal branding.',
            img: 'https://images-pw.pixieset.com/elementfield/804149441/AdobeStock_362483648-1714f892.jpeg'
        },
        {
            title: 'Commercial Lifestyle',
            price: 'GH₵ 1,800',
            location: 'Prampram - Accra Studio',
            duration: 'Full Day',
            images: '50+ High-Res',
            tags: ['Brands', 'Fashion', 'Travel'],
            description: 'Story-driven photography set in breathtaking Ghanaian landscapes. Perfect for fashion lookbooks and brand campaigns.',
            img: 'https://greenviewsresidential.com/wp-content/uploads/2022/07/guide-to-adapt-ghanaian-lifestyle.jpg'
        },
        {
            title: 'Event Coverage',
            price: 'GH₵ 3,500',
            location: 'Nationwide',
            duration: '6-8 Hours',
            images: 'Unlimited Captures',
            tags: ['Weddings', 'Concerts', 'Corporate'],
            description: 'Documentary-style coverage of your most important moments. We capture the energy, the emotion, and the details.',
            img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
        }
    ];

    return (
        <div className="min-h-screen bg-[#0d0d0b] text-[#e2e2d5] py-20 px-6 font-sans selection:bg-orange-500/30">
            <div className="max-w-6xl mx-auto">
                
                {/* Navigation */}
                <button 
                    onClick={() => navigate('/services')} 
                    className="mb-12 text-zinc-500 hover:text-white flex items-center gap-2 font-bold transition-all group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> 
                    Back to Services Hub
                </button>

                {/* Header */}
                <header className="mb-24 text-center space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-black uppercase tracking-widest">
                        <Sparkles size={12} /> Excellence in every frame
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black text-white italic tracking-tighter">
                        The Visual <span className="text-orange-500">DNA.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-zinc-500 text-lg font-medium leading-relaxed">
                        Beyond just clicking buttons, we engineer visual stories. From the heart of Accra to the peaks of the Volta, we capture your essence.
                    </p>
                </header>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-32">
                    {shots.map((s, i) => (
                        <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}>
                            
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2 group relative">
                                <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl bg-zinc-900">
                                    <img
                                        src={s.img}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
                                        alt={s.title}
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                </div>
                                
                                {/* Tags */}
                                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                                    {s.tags.map(tag => (
                                        <span key={tag} className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-[9px] font-black uppercase tracking-widest text-white shadow-lg">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Details Section */}
                            <div className="w-full lg:w-1/2 space-y-8">
                                <div className="space-y-3">
                                    <h3 className="text-5xl md:text-6xl font-black text-white tracking-tighter leading-none">{s.title}</h3>
                                    <p className="text-orange-500 font-bold italic flex items-center gap-2 text-lg">
                                        <MapPin size={20} /> {s.location}
                                    </p>
                                </div>

                                <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                                    {s.description}
                                </p>

                                {/* Features List */}
                                <div className="grid grid-cols-2 gap-8 border-y border-white/5 py-10">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-orange-500/10 rounded-xl">
                                            <Clock className="text-orange-500" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Duration</p>
                                            <p className="text-md font-bold text-white">{s.duration}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-orange-500/10 rounded-xl">
                                            <ImageIcon className="text-orange-500" size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[10px] text-zinc-600 font-black uppercase tracking-widest">Deliverables</p>
                                            <p className="text-md font-bold text-white">{s.images}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Pricing & CTA */}
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-white/[0.02] p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-colors">
                                    <div>
                                        <p className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1">Starting Investment</p>
                                        <p className="text-4xl font-black text-white tracking-tighter">{s.price}</p>
                                    </div>
                                    <button 
                                        onClick={() => handleBooking(s.title)}
                                        className="w-full sm:w-auto px-10 py-5 bg-orange-500 text-black font-black rounded-2xl hover:bg-white hover:scale-105 transition-all shadow-xl shadow-orange-500/10 active:scale-95 uppercase text-xs tracking-widest"
                                    >
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <footer className="mt-48 bg-zinc-900/40 rounded-[4rem] p-12 md:p-24 text-center space-y-8 border border-white/5 backdrop-blur-sm">
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-tight">
                        Need a Custom <br /><span className="text-orange-500 italic">Production?</span>
                    </h2>
                    <p className="text-zinc-500 max-w-xl mx-auto text-lg font-medium">
                        We handle large scale projects, multi-day shoots, and international travel. Let's discuss your unique vision.
                    </p>
                    <button 
                        onClick={() => navigate('/contact', { state: { service: { type: 'Photography', name: 'Custom Production' } } })}
                        className="px-12 py-5 bg-white text-black font-black rounded-full hover:bg-orange-500 hover:text-black transition-all flex items-center gap-3 mx-auto uppercase text-xs tracking-widest"
                    >
                        Contact My Studio <CheckCircle2 size={20} />
                    </button>
                </footer>
            </div>
        </div>
    );
};

export default PhotographyServices;