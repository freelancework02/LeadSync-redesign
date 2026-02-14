"use client";
import Link from 'next/link';
import { CheckCircle2, Zap } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomeProductTeaser() {
    const containerRef = useRef<HTMLElement>(null);
    useGSAP(() => {
        gsap.from(".product-teaser-content", {
            x: -50, opacity: 0, duration: 0.8,
            scrollTrigger: { trigger: containerRef.current, start: "top center+=100" }
        });
        gsap.from(".product-teaser-image", {
            x: 50, opacity: 0, duration: 0.8,
            scrollTrigger: { trigger: containerRef.current, start: "top center+=100" }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/60 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-100/60 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 relative z-10">
                <div className="lg:w-1/2 product-teaser-content">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-100 mb-6">
                        <Zap className="w-3 h-3" /> Featured Product
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold font-clash text-black mb-6">
                        Meet LeadSync <span className="text-primary">360</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                        Our proprietary AI ecosystem designed to automate your entire lead generation funnel. Capture, nurture, and convert leads while you sleep.
                    </p>
                    <ul className="space-y-4 mb-8">
                        {['AI-Powered Lead Scoring', 'Automated Email Sequences', 'Visual Funnel Builder'].map((f, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                {f}
                            </li>
                        ))}
                    </ul>
                    <Link href="/product" className="px-8 py-4 bg-primary hover:bg-blue-700 text-white rounded-full font-bold transition-all inline-block shadow-lg shadow-blue-500/30 hover:scale-105">
                        Discover LeadSync 360
                    </Link>
                </div>

                <div className="lg:w-1/2 product-teaser-image">
                    <div className="relative bg-white border border-slate-200 rounded-2xl p-2 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                        <div className="bg-slate-50 rounded-xl overflow-hidden aspect-video relative group border border-slate-100">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-indigo-50 opacity-50" />
                            <div className="grid place-items-center h-full relative z-10">
                                <span className="text-slate-400 font-clash text-2xl font-bold">Dashboard Preview</span>
                            </div>
                            {/* Abstract UI Elements */}
                            <div className="absolute top-4 left-4 w-3/4 h-4 bg-white rounded-full shadow-sm" />
                            <div className="absolute top-12 left-4 w-1/2 h-32 bg-white rounded-lg shadow-sm" />
                            <div className="absolute top-12 right-4 w-1/3 h-32 bg-white rounded-lg shadow-sm" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
