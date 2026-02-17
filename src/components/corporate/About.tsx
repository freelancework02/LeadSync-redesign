"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const containerRef = useRef<HTMLElement>(null);

    return (
        <section ref={containerRef} id="about" className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Global Presence</span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-clash text-black mb-6">
                            From India to <br /> New Hampshire
                        </h2>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            LeadSync isn&apos;t just a company; it&apos;s a global bridge. Founded in India, we&apos;ve built strong roots in the American market, specifically collaborating with industry leaders in <span className="font-semibold text-black">New Hampshire</span>.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Our unique dual-shore model allows us to offer 24/7 development cycles, combining the technical prowess of Indian engineering with the strategic business insights of the US market.
                        </p>

                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-3xl font-bold text-blue-600 mb-1">50+</h4>
                                <p className="text-slate-500 text-sm">Global Clients</p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-bold text-indigo-600 mb-1">20+</h4>
                                <p className="text-slate-500 text-sm">NH Partners</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        {/* Abstract Map Representation */}
                        <div className="relative aspect-video bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-10" />

                            {/* Connection Line */}
                            <svg className="absolute inset-0 w-full h-full pointer-events-none">
                                <path d="M 60% 45% Q 40% 30% 25% 45%" fill="none" stroke="#2563eb" strokeWidth="2" strokeDasharray="6 4" className="animate-pulse" />
                            </svg>

                            {/* Markers */}
                            <div className="absolute top-[45%] right-[25%] transform translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full animate-ping absolute" />
                                <div className="w-4 h-4 bg-blue-600 rounded-full border-2 border-white shadow-lg relative z-10" />
                                <span className="mt-2 text-xs font-bold bg-white px-2 py-1 rounded shadow text-black">India</span>
                            </div>

                            <div className="absolute top-[45%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                <div className="w-4 h-4 bg-indigo-600 rounded-full animate-ping absolute" />
                                <div className="w-4 h-4 bg-indigo-600 rounded-full border-2 border-white shadow-lg relative z-10" />
                                <span className="mt-2 text-xs font-bold bg-white px-2 py-1 rounded shadow text-black">New Hampshire</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
