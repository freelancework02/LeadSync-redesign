"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import ScratchCard from '@/components/ui/ScratchCard';

gsap.registerPlugin(ScrollTrigger);

export default function ExclusiveOffer() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".offer-content", {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center+=200",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden bg-slate-100 dark:bg-slate-900/50">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-16 shadow-2xl border border-slate-200 dark:border-slate-700 offer-content relative overflow-hidden group">

                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                    {/* Text Content */}
                    <div className="max-w-xl relative z-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider mb-4 border border-yellow-200">
                            Secret Developer Offer
                        </span>
                        <h2 className="text-4xl md:text-5xl font-clash font-bold text-slate-900 dark:text-white mb-6">
                            Feeling Lucky? <br />
                            <span className="text-indigo-600">Scratch to Reveal</span>
                        </h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            We hid a special discount code for visitors who scroll this far.
                            Scratch the card to unlock your exclusive deal.
                            <span className="block mt-2 text-sm italic text-slate-400">* Valid for next 24 hours only.</span>
                        </p>

                        <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                            <div className="flex -space-x-2">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200" />
                                ))}
                            </div>
                            <p>500+ developers claimed this today</p>
                        </div>
                    </div>

                    {/* Scratch Card Component */}
                    <div className="relative z-10 w-full md:w-auto flex justify-center">
                        <div className="relative group-hover:scale-105 transition-transform duration-500 ease-out">
                            <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                            <ScratchCard />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
