"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';
import { Clock, CheckCircle2, AlertOctagon, ArrowUp, DollarSign } from 'lucide-react';
import useMagnetic from '@/hooks/useMagnetic';

gsap.registerPlugin(ScrollTrigger);

export default function TimeSavings() {
    const containerRef = useRef<HTMLElement>(null);
    const leftSideRef = useRef<HTMLDivElement>(null);
    const rightSideRef = useRef<HTMLDivElement>(null);
    const sliderRef = useRef<HTMLInputElement>(null);
    const [sliderVal, setSliderVal] = useState(50);

    const formatHours = (val: number) => {
        // 0 = Manual (10+ hrs), 100 = Auto (minutes)
        const hours = Math.max(0.5, 10 - (val / 10)); // From 10 to 0.5
        return hours.toFixed(1);
    };

    const formatRevenue = (val: number) => {
        // 0 = Manual (low), 100 = Auto (high)
        const rev = 2000 + (val * 80); // From 2000 to 10000
        return Math.floor(rev).toLocaleString();
    };

    useGSAP(() => {
        // Initial Reveal
        gsap.from(".save-badge", {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "elastic.out(1, 0.5)",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative py-32 bg-slate-50 border-b border-slate-200 overflow-hidden">
            {/* Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-bold uppercase tracking-wider mb-6 border border-orange-200 save-badge">
                        <Clock className="w-4 h-4" /> Save 10+ Hours/Week
                    </div>
                    <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6 text-black">
                        Stop Doing Manual Work. <br />
                        <span className="text-primary">Start Automating.</span>
                    </h2>
                    <p className="text-lg text-slate-600">
                        Drag the slider to see how much time and money you could be saving with LeadSync 360's automation engine.
                    </p>
                </div>

                {/* Comparison Tool */}
                <div className="relative max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">

                    <div className="grid grid-cols-1 md:grid-cols-2 h-[500px]">
                        {/* Left: Manual (Red/Scary) */}
                        <div ref={leftSideRef} className="relative p-10 flex flex-col items-center justify-center border-r border-slate-100 transition-opacity" style={{ opacity: Math.max(0.2, 1 - (sliderVal / 80)) }}>
                            <div className="absolute inset-0 bg-red-50/50" />
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-red-200">
                                    <AlertOctagon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">Manual Chaos</h3>
                                <p className="text-slate-500 text-sm mb-8">Data entry, copy-pasting, missed leads.</p>

                                <div className="space-y-4 w-full max-w-xs text-left">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-100">
                                        <span className="text-slate-500 text-sm">Weekly Time Spent</span>
                                        <span className="font-mono font-bold text-red-600">12.5 hrs</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-red-100">
                                        <span className="text-slate-500 text-sm">Lead Response Time</span>
                                        <span className="font-mono font-bold text-red-600">4 hrs</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Automated (Green/Success) */}
                        <div ref={rightSideRef} className="relative p-10 flex flex-col items-center justify-center bg-blue-50/30 transition-opacity" style={{ opacity: Math.max(0.2, (sliderVal / 100)) }}>
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-emerald-500/5" />
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-200 animate-pulse-slow">
                                    <CheckCircle2 className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-bold text-black mb-2">Automated Zen</h3>
                                <p className="text-slate-500 text-sm mb-8">Instant sync, AI replies, zero effort.</p>

                                <div className="space-y-4 w-full max-w-xs text-left">
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-emerald-100 shadow-sm">
                                        <span className="text-slate-500 text-sm">Weekly Time Spent</span>
                                        <span className="font-mono font-bold text-emerald-600">0.5 hrs</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-emerald-100 shadow-sm">
                                        <span className="text-slate-500 text-sm">Lead Response Time</span>
                                        <span className="font-mono font-bold text-emerald-600">instant</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Slider Control */}
                    <div className="absolute bottom-8 left-8 right-8 md:left-20 md:right-20">
                        <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8">
                            <div className="flex-1 w-full">
                                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                                    <span>Manual</span>
                                    <span>Automated</span>
                                </div>
                                <input
                                    ref={sliderRef}
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={sliderVal}
                                    onChange={(e) => setSliderVal(parseInt(e.target.value))}
                                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary hover:accent-blue-600 transition-colors"
                                />
                            </div>

                            <div className="flex gap-8 divide-x divide-slate-200">
                                <div className="pl-4 text-center">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Hours Saved</p>
                                    <div className="text-3xl font-clash font-bold text-black tabular-nums">
                                        {formatHours(sliderVal)} <span className="text-base font-normal text-slate-400">hrs</span>
                                    </div>
                                </div>
                                <div className="pl-8 text-center">
                                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Potential Rev</p>
                                    <div className="text-3xl font-clash font-bold text-emerald-600 tabular-nums flex items-center gap-1">
                                        <ArrowUp className="w-5 h-5" /> ${formatRevenue(sliderVal)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
