import React, { useState } from 'react';
import {
    Check, Zap, Globe, Layout, ArrowRight, Shield,
    Cpu, Database, Terminal, ShoppingBag, Layers,
    Activity, RefreshCcw
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const WebsiteServices = () => {
    const navigate = useNavigate();
    const [currency, setCurrency] = useState('GHS');

    // Navigation logic to pass selected plan to contact form
    const handleInquiry = (planName) => {
        navigate('/contact', {
            state: {
                service: {
                    type: 'Tech Engineering',
                    name: `${planName} (${currency})`
                }
            }
        });
    };

    const webPlans = [
        {
            name: 'Basic Presence',
            priceGHS: '2,500', priceUSD: '230',
            icon: <Globe className="text-blue-400" size={24} />,
            description: 'Professional single-page or simple multi-page sites to get your brand online.',
            features: ['5 Custom Pages', 'Mobile Responsive', 'Contact Form', 'Basic SEO Setup']
        },
        {
            name: 'Business Pro',
            priceGHS: '4,500', priceUSD: '415',
            icon: <Zap className="text-indigo-400" size={24} />,
            highlight: true,
            description: 'Dynamic sites with a CMS, designed to convert visitors into loyal customers.',
            features: ['Up to 15 Pages', 'Admin Dashboard (CMS)', 'Advanced SEO', 'Speed Optimization']
        },
        {
            name: 'Ecommerce Elite',
            priceGHS: '7,500+', priceUSD: '695+',
            icon: <ShoppingBag className="text-purple-400" size={24} />,
            special: true,
            description: 'A complete digital storefront with secure payments and inventory management.',
            features: ['Full Online Store', 'MoMo & Card Integration', 'Inventory System', 'User Accounts']
        }
    ];

    const backendPlans = [
        {
            name: 'Lite Logic',
            priceGHS: '1,500', priceUSD: '140',
            icon: <Zap className="text-yellow-400" size={24} />,
            description: 'Essential server-side processing for contact forms and automated email triggers.',
            features: ['Serverless Functions', 'Email Integration', 'Form Handling', 'Basic Validation']
        },
        {
            name: 'RESTful API Core',
            priceGHS: '3,500', priceUSD: '325',
            icon: <Terminal className="text-emerald-400" size={24} />,
            description: 'A solid foundation for data-driven apps requiring user login and database storage.',
            features: ['CRUD Operations', 'MongoDB / PostgreSQL', 'JWT Auth', 'Postman Documentation']
        },
        {
            name: 'Scalable Pro',
            priceGHS: '5,500', priceUSD: '510',
            icon: <Layers className="text-blue-400" size={24} />,
            description: 'Enhanced security and file management for platforms handling sensitive user data.',
            features: ['Role-based Access', 'File Uploads (S3)', 'Payment Gateway', 'Rate Limiting']
        },
        {
            name: 'Enterprise',
            priceGHS: '8,500+', priceUSD: '790+',
            icon: <Database className="text-orange-400" size={24} />,
            description: 'High-availability architecture designed to support thousands of concurrent users.',
            features: ['Microservices', 'Redis Caching', 'Dockerization', 'Cloud Deployment']
        }
    ];

    const maintenancePlans = [
        {
            name: 'Core Care',
            priceGHS: '350', priceUSD: '32',
            period: '/mo',
            icon: <Activity className="text-pink-400" size={24} />,
            description: 'Stay safe with consistent security patches and weekly cloud backups.',
            features: ['Weekly Backups', 'Security Patching', 'Uptime Monitoring']
        },
        {
            name: 'Pro Maintenance',
            priceGHS: '850', priceUSD: '78',
            period: '/mo',
            icon: <RefreshCcw className="text-cyan-400" size={24} />,
            description: 'Concierge-level support with daily backups and priority content updates.',
            features: ['Daily Backups', 'Content Updates', '24/7 Priority Support']
        }
    ];

    return (
        <div className="min-h-screen bg-[#060910] text-white py-20 px-6 font-sans selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-8">
                    <div className="space-y-4">
                        <button
                            onClick={() => navigate('/services')}
                            className="text-gray-500 hover:text-white flex items-center gap-2 text-sm font-bold transition-all group"
                        >
                            <ArrowRight size={18} className="rotate-180 group-hover:-translate-x-1 transition-transform" />
                            BACK TO HUB
                        </button>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                            Service <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">Engineering.</span>
                        </h2>
                        <p className="text-gray-400 max-w-xl text-lg">
                            We bridge the gap between complex code and intuitive user experiences. Choose a tier that fits your current stage.
                        </p>
                    </div>

                    <div className="flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-md">
                        {['GHS', 'USD'].map((curr) => (
                            <button
                                key={curr}
                                onClick={() => setCurrency(curr)}
                                className={`px-5 py-1.5 rounded-lg text-[10px] font-black transition-all ${currency === curr ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                            >
                                {curr}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Section: Web Design */}
                <div className="mb-32">
                    <SectionHeading title="Web Design & Ecommerce" icon={<Layout className="text-blue-500" size={22} />} />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {webPlans.map((plan, i) => (
                            <PricingCard key={i} plan={plan} currency={currency} onInquiry={handleInquiry} />
                        ))}
                    </div>
                </div>

                {/* Section: Backend */}
                <div className="mb-32">
                    <SectionHeading title="Backend & API Architecture" icon={<Cpu className="text-emerald-500" size={22} />} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {backendPlans.map((plan, i) => (
                            <PricingCard key={i} plan={plan} currency={currency} onInquiry={handleInquiry} />
                        ))}
                    </div>
                </div>

                {/* Section: Maintenance */}
                <div className="mb-32">
                    <SectionHeading title="System Maintenance" icon={<Shield className="text-pink-500" size={22} />} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {maintenancePlans.map((plan, i) => (
                            <PricingCard key={i} plan={plan} currency={currency} onInquiry={handleInquiry} />
                        ))}
                    </div>
                </div>

                {/* Footer Argument */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20 pb-10">
                    <FooterInfo
                        title="Why Backend?"
                        text="Most sites crash because they lack a brain. Our backend services centralize your logic, making your app faster and more secure."
                    />
                    <FooterInfo
                        title="Performance First"
                        text="We optimize every line. From image compression to Redis caching, we ensure sub-second load times for your users."
                    />
                    <FooterInfo
                        title="Security Mindset"
                        text="Your data is protected with industry-standard JWT encryption and S3 bucket shielding for complete peace of mind."
                    />
                </div>
            </div>
        </div>
    );
};

const SectionHeading = ({ title, icon }) => (
    <div className="flex items-center gap-4 mb-10">
        <div className="p-2.5 bg-white/5 rounded-xl border border-white/5">{icon}</div>
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
    </div>
);

const FooterInfo = ({ title, text }) => (
    <div>
        <h4 className="text-xl font-bold mb-4">{title}</h4>
        <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
    </div>
);

const PricingCard = ({ plan, currency, onInquiry }) => (
    <div className={`relative p-8 rounded-[2.5rem] border transition-all duration-500 flex flex-col group ${plan.highlight ? 'bg-[#0f172a] border-blue-500 shadow-2xl md:scale-105 z-10' :
            plan.special ? 'bg-[#150f2a] border-purple-500/50 hover:border-purple-500' :
                'bg-white/[0.02] border-white/5 hover:border-white/20'
        }`}>
        {plan.highlight && (
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[9px] font-black px-4 py-1 rounded-full uppercase tracking-widest">
                Recommended
            </div>
        )}

        <div className="mb-6 p-3 bg-white/5 w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
            {plan.icon}
        </div>

        <h3 className="text-xl font-bold mb-2 tracking-tight">{plan.name}</h3>
        <p className="text-gray-500 text-xs mb-8 leading-relaxed min-h-[40px]">{plan.description}</p>

        <div className="mb-8 flex items-baseline gap-1">
            <span className="text-[10px] text-gray-500 font-black uppercase mr-1">{currency}</span>
            <span className="text-4xl font-black tracking-tighter">
                {currency === 'GHS' ? plan.priceGHS : plan.priceUSD}
            </span>
            {plan.period && <span className="text-gray-400 text-xs font-bold ml-1">{plan.period}</span>}
        </div>

        <ul className="space-y-4 mb-10 flex-1">
            {plan.features.map(f => (
                <li key={f} className="text-[13px] text-gray-400 flex items-start gap-3">
                    <Check size={14} className={`${plan.special ? 'text-purple-500' : 'text-blue-500'} mt-0.5 flex-shrink-0`} />
                    {f}
                </li>
            ))}
        </ul>

        <button
            onClick={() => onInquiry(plan.name)}
            className={`w-full py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 ${plan.highlight ? 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20' :
                    plan.special ? 'bg-purple-600 hover:bg-purple-500 shadow-lg shadow-purple-600/20' :
                        'bg-white text-black hover:bg-gray-200'
                }`}
        >
            Inquire Now
        </button>
    </div>
);

export default WebsiteServices;