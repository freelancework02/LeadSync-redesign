"use client";
import Link from 'next/link';
import { Smartphone, Brain, BarChart3, Code, Terminal, Zap, ArrowRight, LayoutGrid, Database, Cloud } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        category: "Engineering",
        items: [
            { icon: <Code className='w-5 h-5' />, label: "Web Apps" },
            { icon: <Smartphone className='w-5 h-5' />, label: "Mobile Dev" },
            { icon: <Database className='w-5 h-5' />, label: "CRM/ERP" }
        ],
        mainIcon: <Terminal className="w-8 h-8 text-blue-600" />,
        title: "Custom Development",
        desc: "Scalable software built on modern stacks like Next.js, Python, and Flutter.",
        color: "bg-blue-50 text-blue-600"
    },
    {
        category: "Intelligence",
        items: [
            { icon: <Brain className='w-5 h-5' />, label: "AI Agents" },
            { icon: <Zap className='w-5 h-5' />, label: "Chatbots" },
            { icon: <Cloud className='w-5 h-5' />, label: "Automation" }
        ],
        mainIcon: <Brain className="w-8 h-8 text-purple-600" />,
        title: "AI & Automation",
        desc: "Autonomous agents and workflows that reduce operational costs by 40%.",
        color: "bg-purple-50 text-purple-600"
    },
    {
        category: "Growth",
        items: [
            { icon: <BarChart3 className='w-5 h-5' />, label: "SEO/SEM" },
            { icon: <LayoutGrid className='w-5 h-5' />, label: "Branding" },
            { icon: <Zap className='w-5 h-5' />, label: "Analytics" }
        ],
        mainIcon: <BarChart3 className="w-8 h-8 text-orange-600" />,
        title: "Digital Marketing",
        desc: "Data-driven strategies that turn traffic into high-value enterprise leads.",
        color: "bg-orange-50 text-orange-600"
    }
];

export default function HomeServicesTeaser() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        gsap.from(".service-teaser-card", {
            y: 50, opacity: 0, duration: 0.8, stagger: 0.2,
            scrollTrigger: { trigger: containerRef.current, start: "top center+=100" }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-bold tracking-wider text-sm uppercase mb-2 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-clash text-black leading-tight">
                            Building the Future of <br />
                            <span className="text-slate-500">Your Business</span>
                        </h2>
                    </div>
                    <Link href="/services" className="hidden md:flex items-center gap-2 text-black font-bold hover:text-primary transition-colors border-b-2 border-black hover:border-primary pb-1">
                        View All Services <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <div key={i} className="service-teaser-card group relative bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                                {service.mainIcon}
                            </div>

                            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">
                                {service.desc}
                            </p>

                            <div className="space-y-3 pt-6 border-t border-slate-100">
                                {service.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                                        <div className="text-slate-400 group-hover:text-primary transition-colors">
                                            {item.icon}
                                        </div>
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link href="/services" className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full font-bold shadow-lg">
                        Explore All Solutions
                    </Link>
                </div>
            </div>
        </section>
    );
}
