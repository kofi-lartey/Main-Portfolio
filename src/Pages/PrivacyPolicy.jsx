import React from 'react';
import { ShieldCheck, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#060910] text-white py-20 px-6">
            <div className="max-w-3xl mx-auto">
                <button onClick={() => navigate(-1)} className="mb-8 text-gray-500 hover:text-white flex items-center gap-2 font-bold transition-all">
                    <ArrowLeft size={18} /> Back
                </button>

                <div className="flex items-center gap-4 mb-12">
                    <div className="p-4 bg-blue-500/10 rounded-2xl text-blue-500">
                        <ShieldCheck size={32} />
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter">Privacy <span className="text-gray-500">Policy</span></h1>
                </div>

                <div className="prose prose-invert prose-blue max-w-none space-y-8">
                    <div className="bg-white/[0.02] border border-white/5 p-8 rounded-[2rem]">
                        <h2 className="text-xl font-bold mb-4">What Data We Collect</h2>
                        <ul className="list-disc list-inside text-gray-400 space-y-2">
                            <li>Contact Information (Name, Email, Phone Number)</li>
                            <li>Project Assets (Images, Branding documents)</li>
                            <li>Payment Metadata (Transaction IDs for GHS payments)</li>
                        </ul>
                    </div>

                    <div className="p-8">
                        <h2 className="text-xl font-bold mb-4">How We Use It</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Your data is strictly used for service delivery, invoicing, and project communication. We do not sell your data to third-party advertisers. All MoMo and Card payments are handled through secure, encrypted gateways.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;