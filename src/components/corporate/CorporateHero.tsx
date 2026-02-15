"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { InteractiveGrid } from '../ui/InteractiveGrid';

export default function CorporateHero() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".hero-text", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">

            <InteractiveGrid />
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100 hero-text">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Global Tech Innovators
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold font-clash tracking-tight text-black mb-6 leading-[1.1] hero-text">
                        Bridging Borders with <br />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                            Digital Excellence
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed hero-text">
                        LeadSync is a premier Indian-American startup delivering cutting-edge
                        Web & App Development, AI Solutions, and Digital Marketing to clients
                        worldwide, with a special focus on our partners in New Hampshire.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center hero-text">
                        <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all bg-primary rounded-full hover:bg-blue-700 hover:scale-105 shadow-lg shadow-blue-500/30">
                            Explore Services
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                        <Link href="/product" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-700 transition-all bg-slate-100 rounded-full hover:bg-slate-200 hover:text-black border border-slate-200">
                            View Products
                        </Link>
                    </div>
                </div>
            </div>

        </section>
    );
}
