import React from 'react';
import { Scale, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TermsOfService = () => {
    const navigate = useNavigate();

    const sections = [
        {
            title: "1. Service Engagement",
            content: "By booking Photography, Web, or Music services, you agree to provide accurate project requirements. Bookings are confirmed only after the initial deposit is processed."
        },
        {
            title: "2. Photography & Media Rights",
            content: "For photography services, the Photographer retains moral rights to the images. Clients are granted a license for personal or commercial use as specified in the booking contract."
        },
        {
            title: "3. Web Development Milestones",
            content: "Web projects are delivered in phases. Significant changes to the scope after the 'Blueprint' phase may incur additional costs based on GHS hourly rates."
        },
        {
            title: "4. Music Education & Cancellations",
            content: "Music lesson cancellations must be made 24 hours in advance. Failure to do so may result in a forfeited session fee."
        }
    ];

    return (
        <div className="min-h-screen bg-[#060910] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <button onClick={() => navigate(-1)} className="mb-8 text-gray-500 hover:text-white flex items-center gap-2 font-bold transition-all">
                    <ArrowLeft size={18} /> Back
                </button>

                <div className="flex items-center gap-4 mb-12">
                    <div className="p-4 bg-orange-500/10 rounded-2xl text-orange-500">
                        <Scale size={32} />
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter">Terms of <span className="text-gray-500">Service</span></h1>
                </div>

                <div className="space-y-12">
                    {sections.map((section, i) => (
                        <section key={i} className="border-l-2 border-white/5 pl-8 py-2">
                            <h2 className="text-lg font-black uppercase tracking-widest text-orange-500 mb-4">{section.title}</h2>
                            <p className="text-gray-400 leading-relaxed text-lg">{section.content}</p>
                        </section>
                    ))}
                </div>

                <footer className="mt-20 pt-10 border-t border-white/5 text-gray-600 text-sm italic">
                    Last Revised: January 2026. Contact legal@yourbrand.com for inquiries.
                </footer>
            </div>
        </div>
    );
};

export default TermsOfService;