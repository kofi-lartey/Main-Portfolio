import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    ArrowLeft, Share2, Bookmark, Heart,
    ThumbsUp, ChevronRight, Play
} from 'lucide-react';

const BlogPostView = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#0a0c10] min-h-screen text-gray-300 selection:bg-blue-500/30">
            {/* Cinematic Hero Header */}
            <header className="relative w-full h-[85vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80"
                    className="w-full h-full object-cover"
                    alt="Server Rack Background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0c10] via-[#0a0c10]/20 to-transparent" />

                {/* Left Floating Sidebar Controls */}
                <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-40">
                    <button onClick={() => navigate('/blog')} className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:bg-blue-600 transition-all text-white">
                        <ArrowLeft size={18} />
                    </button>
                    {[Share2, Bookmark, Heart].map((Icon, i) => (
                        <button key={i} className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center hover:text-white transition-all">
                            <Icon size={18} />
                        </button>
                    ))}
                </div>

                {/* Hero Title Content */}
                <div className="absolute bottom-0 w-full max-w-5xl left-1/2 -translate-x-1/2 px-6 pb-20">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-blue-400 mb-8">
                        <span>Tech Deep Dives</span> <ChevronRight size={12} /> <span className="text-gray-500">System Architecture</span>
                    </div>
                    <h1 className="text-white text-5xl md:text-8xl font-extrabold tracking-tighter leading-[0.95] mb-12">
                        The Intersection of <br /> Code and Composition
                    </h1>
                    <div className="flex items-center gap-4">
                        <img src="https://i.pravatar.cc/150?u=kofi" className="w-12 h-12 rounded-full border border-white/20" />
                        <div>
                            <p className="text-white font-bold">Kofi Lartey</p>
                            <p className="text-gray-500 text-xs">Published on Oct 24, 2023 • 12 min read</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Article Body */}
            <article className="max-w-3xl mx-auto px-6 py-24">
                {/* Intro Blockquote */}
                <div className="border-l-2 border-blue-600 pl-8 mb-20">
                    <p className="italic text-xl text-gray-400 leading-relaxed">
                        In this exploration, we bridge the gap between algorithmic structures and musical harmony, finding beauty in the logic of both worlds.
                    </p>
                </div>

                {/* Section 1 */}
                <h2 className="text-white text-3xl font-bold mb-8">The Architecture of Sound</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-12">
                    Programming and music composition share a fundamental DNA. Both require a deep understanding of structure, patterns, and timing. When we write a function, we are creating a score for the machine to follow. When we compose a melody, we are defining an algorithm for human emotion.
                </p>

                {/* Image Figure */}
                <figure className="mb-12">
                    <div className="rounded-2xl overflow-hidden bg-[#161b22] border border-white/5">
                        <img src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80" className="w-full opacity-80" />
                    </div>
                    <figcaption className="text-center text-gray-500 text-xs mt-4 italic">
                        Fig 1.1: Visualizing frequency modulation through recursive functions.
                    </figcaption>
                </figure>

                <p className="text-gray-400 text-lg leading-relaxed mb-16">
                    Consider the concept of <code className="bg-white/5 px-2 py-0.5 rounded text-blue-400 font-mono text-sm">recursive loops</code> in modern jazz. Musicians often return to a theme, slightly mutated, building complexity over time.
                </p>

                {/* Section 2 */}
                <h2 className="text-white text-3xl font-bold mb-8">Scaling the Unscalable</h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                    One of the biggest challenges in both photography and backend engineering is dealing with scale. A high-resolution image requires efficient compression without losing the soul of the shot.
                </p>

                {/* Bullet Points */}
                <ul className="space-y-4 mb-16">
                    {[
                        "Dynamic resource allocation for ambient synth pads.",
                        "Low-latency processing of RAW photography metadata.",
                        "Synchronizing distributed state across multiple studio nodes."
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-4 text-gray-400 text-sm">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Code Editor Style Block */}
                <div className="bg-[#0d1117] rounded-xl border border-white/5 overflow-hidden mb-16">
                    <div className="bg-white/5 px-4 py-2 border-b border-white/5 flex items-center justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                        </div>
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">audio-engine.ts</span>
                    </div>
                    <pre className="p-6 text-blue-300 font-mono text-xs leading-relaxed overflow-x-auto">
                        <code>{`function synthesizeWaveform(frequency, duration) {
  const sampleRate = 44100;
  const numSamples = sampleRate * duration;
  const samples = new Float32Array(numSamples);

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    samples[i] = Math.sin(2 * Math.PI * frequency * t);
  }
  return samples;
}`}</code>
                    </pre>
                </div>

                {/* Article Footer CTA */}
                <div className="mt-32 border-2 border-dashed border-white/5 rounded-[2rem] p-12 text-center">
                    <div className="text-blue-500 mb-6 flex justify-center">
                        <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                            <Play size={24} fill="currentColor" />
                        </div>
                    </div>
                    <h3 className="text-white text-3xl font-bold mb-4">You've reached the end</h3>
                    <p className="text-gray-500 mb-10">Thanks for reading. Stay tuned for more insights into the creative process.</p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white/5 border border-white/10 px-8 py-3 rounded-xl font-bold text-white flex items-center gap-2 hover:bg-white/10 transition-all">
                            <ThumbsUp size={18} /> Appreciate
                        </button>
                        <button className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-xl font-bold text-white transition-all">
                            Share Post
                        </button>
                    </div>
                </div>

                {/* Continue Reading Section */}
                <div className="mt-40">
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 mb-10">Continue Reading</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="group cursor-pointer">
                            <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                                <img src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">Photography</span>
                            <h5 className="text-white font-bold text-xl leading-snug group-hover:text-blue-400 transition-colors">The Leica M: A Study in Minimalist Gear</h5>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="aspect-video rounded-2xl overflow-hidden mb-6 border border-white/5">
                                <img src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-blue-500 mb-2 block">Music Production</span>
                            <h5 className="text-white font-bold text-xl leading-snug group-hover:text-blue-400 transition-colors">Why Analog Synthesis Still Matters in 2024</h5>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default BlogPostView;