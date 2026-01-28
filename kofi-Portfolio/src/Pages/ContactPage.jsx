import { MapPin, Send, Copy, Linkedin, Github, Twitter, MessageSquare, Instagram, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Import this

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ContactPage() {
    const location = useLocation(); // Catch the passed state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [inquiry, setInquiry] = useState('Tech Inquiry');
    const [message, setMessage] = useState('');
    const [time, setTime] = useState('');

    const MY_EMAIL = "alpheausgberbie127@gmail.com";
    const MY_WHATSAPP = "233557655008";

    // Handle incoming service data
    useEffect(() => {
        if (location.state?.service) {
            const { type, name } = location.state.service;
            setInquiry(type); // Set dropdown
            setMessage(`I'm interested in the "${name}" package. Please provide more details on how we can get started.`); // Set message
        }
    }, [location.state]);

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const ghTime = now.toLocaleTimeString('en-GB', {
                timeZone: 'Africa/Accra',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            });
            setTime(ghTime);
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        const subject = encodeURIComponent(`${inquiry} - ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:${MY_EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="min-h-screen bg-[#060910] px-6 py-20 text-white font-sans"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div variants={item} className="mb-14 flex flex-col gap-6">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">
                        Let&apos;s build something{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">together.</span>
                    </h1>
                    <p className="max-w-xl text-gray-400 text-lg">
                        Reach out for tech inquiries, music collaborations, or photography
                        bookings. I usually respond within 24 hours.
                    </p>
                    <div className="w-fit rounded-full bg-blue-500/10 border border-blue-500/20 px-4 py-2 text-xs font-black tracking-widest text-blue-400 uppercase">
                        ● AVAILABLE FOR PROJECTS
                    </div>
                </motion.div>

                <div className="grid gap-6 lg:grid-cols-3">
                    <motion.div variants={item} className="lg:col-span-2 rounded-[2.5rem] bg-white/5 p-8 border border-white/5">
                        <h2 className="mb-8 flex items-center gap-2 text-xl font-bold uppercase tracking-tight">
                            Direct Inquiry <Send size={18} className="text-blue-500" />
                        </h2>

                        <form className="grid gap-5 md:grid-cols-2">
                            <Input label="YOUR NAME" placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-black text-gray-500 ml-2 uppercase tracking-widest">INQUIRY TYPE</label>
                                <Select value={inquiry} onChange={(e) => setInquiry(e.target.value)} />
                            </div>
                            <Input className="md:col-span-2" label="EMAIL ADDRESS" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <div className="md:col-span-2">
                                <label className="text-[10px] font-black text-gray-500 ml-2 uppercase tracking-widest">MESSAGE</label>
                                <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
                            </div>
                        </form>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={handleSubmit}
                            className="mt-8 w-full rounded-2xl bg-blue-600 py-4 font-black text-xs uppercase tracking-widest shadow-lg shadow-blue-600/20"
                        >
                            Send via Email client
                        </motion.button>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        <motion.div variants={item} className="rounded-[2rem] bg-white/5 p-6 border border-white/5">
                            <h3 className="mb-6 text-sm font-black uppercase tracking-widest text-gray-500">Fast Connect</h3>
                            <ConnectItem icon={<MessageSquare size={20} />} label="WhatsApp" desc="Quick Chat" href={`https://wa.me/${MY_WHATSAPP}`} color="text-emerald-400" />
                            <ConnectItem icon={<Linkedin size={20} />} label="LinkedIn" desc="Professional" href="https://www.linkedin.com/in/alpheaus-gberbie-b6b141326" color="text-blue-400" />
                            <ConnectItem icon={<Github size={20} />} label="GitHub" desc="Codebase" href="https://github.com/kofi-lartey" color="text-white" />
                            <ConnectItem icon={<Twitter size={20} />} label="Twitter / X" desc="Updates" href="https://X.com/GberbieAlpheaus" color="text-sky-400" />
                        </motion.div>

                        <motion.div variants={item} className="rounded-[2rem] bg-white/5 p-6 border border-white/5">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">Local Time (GMT)</p>
                            <p className="mt-2 text-4xl font-black tracking-tighter">
                                {time} <span className="text-xs font-bold text-blue-500">ACCRA</span>
                            </p>
                            <div className="mt-4 flex items-center gap-2 text-xs font-bold text-gray-400">
                                <MapPin size={14} className="text-blue-500" /> Prampram, Ghana
                            </div>
                        </motion.div>

                        <motion.div variants={item} className="rounded-[2rem] bg-white/5 p-6 border border-white/5">
                            <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest">E-Mail Address</p>
                            <p className="mt-2 text-sm font-bold truncate">{MY_EMAIL}</p>
                            <motion.button
                                whileHover={{ x: 4 }}
                                onClick={() => {
                                    navigator.clipboard.writeText(MY_EMAIL);
                                    alert("Email copied to clipboard!");
                                }}
                                className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-blue-500 cursor-pointer"
                            >
                                <Copy size={14} /> Copy to Clipboard
                            </motion.button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

/* Helper Components */
function Input({ label, className = "", value, onChange, ...props }) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-500 ml-2 uppercase tracking-widest">{label}</label>
            <input {...props} value={value} onChange={onChange} className={`rounded-xl bg-white/5 px-4 py-4 text-sm outline-none border border-white/10 focus:border-blue-500/50 transition-colors ${className}`} />
        </div>
    );
}

function Textarea({ value, onChange }) {
    return (
        <textarea rows="4" placeholder="Tell me about your project..." value={value} onChange={onChange} className="w-full rounded-xl bg-white/5 px-4 py-4 text-sm outline-none border border-white/10 focus:border-blue-500/50 transition-colors resize-none" />
    );
}

function Select({ value, onChange }) {
    return (
        <div className="relative">
            <select value={value} onChange={onChange} className="w-full appearance-none rounded-xl bg-[#0B1220] px-4 py-4 text-sm outline-none border border-white/10 focus:border-blue-500/50 transition-colors cursor-pointer" >
                <option value="Tech Inquiry">Tech Inquiry</option>
                <option value="Music Collaboration">Music Collaboration</option>
                <option value="Photography Booking">Photography Booking</option>
            </select>
        </div>
    );
}

function ConnectItem({ icon, label, href, desc, color }) {
    return (
        <motion.a href={href} target="_blank" rel="noopener noreferrer" whileHover={{ x: 6, backgroundColor: "rgba(255,255,255,0.05)" }} className="mb-2 flex items-center justify-between rounded-xl px-4 py-3 cursor-pointer transition-colors border border-transparent hover:border-white/5">
            <div className="flex items-center gap-4">
                <div className={color}>{icon}</div>
                <div>
                    <p className="text-sm font-bold">{label}</p>
                    <p className="text-[10px] font-medium text-gray-500 uppercase tracking-tighter">{desc}</p>
                </div>
            </div>
            <ExternalLink size={14} className="text-gray-600" />
        </motion.a>
    );
}