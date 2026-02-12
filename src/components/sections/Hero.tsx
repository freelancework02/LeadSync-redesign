"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import useMagnetic from '@/hooks/useMagnetic';
import Image from 'next/image';

// A simple utility to split text for animation
const SplitText = ({ text, className }: { text: string, className?: string }) => {
    return (
        <span className={className}>
            {text.split("").map((char, i) => (
                <span key={i} className="char inline-block" style={{ whiteSpace: 'pre' }}>
                    {char}
                </span>
            ))}
        </span>
    );
};

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctaRef = useRef<HTMLDivElement>(null);
    const ctaBtnRef = useRef<HTMLButtonElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useMagnetic(ctaBtnRef);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial state set by CSS or GSAP set
        gsap.set(".char", { y: 100, opacity: 0 });
        gsap.set(subtitleRef.current, { y: 20, opacity: 0 });
        gsap.set(ctaRef.current, { y: 20, opacity: 0 });
        gsap.set(visualRef.current, { scale: 0.9, opacity: 0, y: 50 });

        // Animate Title Characters
        tl.to(".char", {
            y: 0,
            opacity: 1,
            stagger: 0.03,
            duration: 1,
            delay: 0.2
        })
            // Animate Subtitle
            .to(subtitleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8
            }, "-=0.5")
            // Animate CTA
            .to(ctaRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8
            }, "-=0.6")
            // Animate Visual Entry
            .to(visualRef.current, {
                scale: 1,
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power2.out"
            }, "-=0.8");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-blue-100/50 to-transparent dark:from-blue-900/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-gradient-to-tr from-sky-100/50 to-transparent dark:from-sky-900/20 blur-3xl pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <div className="max-w-2xl relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100/80 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        System Architecture & Workflow
                    </div>

                    <h1 ref={titleRef} className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-clash text-slate-900 dark:text-white">
                        <SplitText text="LeadSync" /> <span className="text-primary"><SplitText text="360" /></span><br />
                        <span className="text-slate-400 font-light relative inline-block text-4xl lg:text-5xl mt-2">
                            Documentation
                        </span>
                    </h1>

                    <p ref={subtitleRef} className="text-xl text-slate-500 dark:text-slate-400 mb-8 max-w-lg leading-relaxed">
                        A complete visual walkthrough of the Lead Management Solution. From secure authentication to multi-channel distribution.
                    </p>

                    <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
                        <button ref={ctaBtnRef} className="group relative bg-primary text-white px-8 py-4 rounded-full font-bold text-lg overflow-hidden transition-all shadow-xl shadow-blue-500/20 hover:shadow-blue-500/40 magnetic-btn">
                            <span className="relative z-10 flex items-center gap-2">
                                Explore Modules <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 backdrop-blur-sm" />
                        </button>

                        <button className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-lg border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors bg-white/50 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                                <Play className="w-4 h-4 ml-1 fill-current" />
                            </div>
                            View Demo
                        </button>
                    </div>

                    <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                            <span>v2.4.0 Release</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-slate-300" />
                            <span>Updated Feb 2026</span>
                        </div>
                    </div>
                </div>

                {/* Right Visual - Browser Mockup */}
                <div ref={visualRef} className="relative w-full perspective-1000">
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-slate-200/50 bg-white dark:bg-slate-800 ring-1 ring-slate-900/5 rotate-y-6 rotate-x-6 hover:rotate-y-0 hover:rotate-x-0 transition-transform duration-700 ease-out-expo group">
                        {/* Browser Header */}
                        <div className="bg-slate-50 dark:bg-slate-900 px-4 py-3 border-b border-slate-200 dark:border-slate-700 flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                            </div>
                            <div className="flex-1 bg-white dark:bg-slate-800 h-6 rounded-md border border-slate-200 dark:border-slate-700 flex items-center px-3 text-[10px] text-slate-400 font-mono">
                                leadsync360.com/dashboard
                            </div>
                        </div>

                        {/* Main Image */}
                        <div className="relative aspect-video bg-slate-100 dark:bg-slate-900 overflow-hidden group-hover:scale-105 transition-transform duration-700 cursor-pointer">
                            {/* Fallback pattern if image fails, or use one of the uploaded images */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
                            {/* We will try to use the dashboard image here */}
                            <img
                                src="/images/composeemail.png"
                                alt="Dashboard Interface"
                                className="object-cover w-full h-full transform transition-transform"
                            />
                        </div>

                        {/* Floating UI Card Overlay */}
                        <div className="absolute -bottom-10 -left-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl p-4 rounded-xl shadow-xl border border-white/20 animate-float">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                    <Star className="w-6 h-6 fill-current" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Conversion</p>
                                    <p className="text-2xl font-bold font-clash text-slate-900 dark:text-white">+ 24.8%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
