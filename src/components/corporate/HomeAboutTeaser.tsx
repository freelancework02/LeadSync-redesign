"use client";
import Link from 'next/link';
import { Globe, MapPin, Users } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HomeAboutTeaser() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".about-item", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center+=150",
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-white border-t border-slate-100">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 about-item">
                        <div className="relative">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-10" />

                            <h2 className="text-4xl lg:text-5xl font-bold font-clash text-black mb-6 leading-tight">
                                Built in India.<br />
                                Trusted in <span className="text-primary">New Hampshire.</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                LeadSync leverages the technical excellence of India’s top engineering talent combined with the strategic accountability of a US-based partner. We offer 24/7 development cycles, ensuring your business never sleeps.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <MapPin className="w-8 h-8 text-blue-600 mb-2" />
                                    <h4 className="font-bold text-black">Dual HQ</h4>
                                    <p className="text-sm text-slate-500">NH (USA) & Gurgaon (India)</p>
                                </div>
                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                                    <Users className="w-8 h-8 text-indigo-600 mb-2" />
                                    <h4 className="font-bold text-black">Hybrid Team</h4>
                                    <p className="text-sm text-slate-500">Expert Project Managers</p>
                                </div>
                            </div>

                            <Link href="/about" className="text-primary font-bold hover:underline inline-flex items-center group text-lg">
                                Read Our Story
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative bg-slate-50 rounded-2xl border border-slate-200 p-8 shadow-2xl about-item">
                        {/* Concept of a bridge or connection */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none rounded-2xl" />
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-6">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">USA Timezone</p>
                                    <h3 className="text-2xl font-bold text-black">Strategy & Design</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                    <span className="font-bold">AM</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">India Timezone</p>
                                    <h3 className="text-2xl font-bold text-black">Engineering & Dev</h3>
                                </div>
                                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center">
                                    <span className="font-bold">PM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
