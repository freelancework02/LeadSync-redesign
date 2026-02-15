"use client";
import Link from 'next/link';
import { Smartphone, Brain, BarChart3, Code, Terminal, Zap, ArrowRight, LayoutGrid, Database, Cloud } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

import { motion } from 'framer-motion';

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
        color: "bg-blue-50/50 text-blue-600 border-blue-100"
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
        color: "bg-purple-50/50 text-purple-600 border-purple-100"
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
        color: "bg-orange-50/50 text-orange-600 border-orange-100"
    }
];

export default function HomeServicesTeaser() {
    return (
        <section className="py-32 bg-slate-50 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.03),transparent_70%)] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary font-bold tracking-[0.2em] text-[10px] uppercase mb-4 block"
                        >
                            Our Expertise
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-bold font-clash text-slate-900 leading-[1.1]"
                        >
                            Building the Future of <br />
                            <span className="text-slate-400">Digital Commerce</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link href="/services" className="hidden md:flex items-center gap-3 text-slate-900 font-bold hover:text-primary transition-all group">
                            View All Services
                            <span className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <ArrowRight className="w-5 h-5" />
                            </span>
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="group relative bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 border border-slate-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.15)] transition-all duration-500"
                        >
                            <div className={`w-20 h-20 rounded-2xl ${service.color} border flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-sm`}>
                                {service.mainIcon}
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900 mb-5 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-slate-500 mb-10 leading-relaxed text-lg">
                                {service.desc}
                            </p>

                            <div className="space-y-4 pt-8 border-t border-slate-100/50">
                                {service.items.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 text-slate-600 text-sm font-semibold group/item">
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center text-slate-400 group-hover/item:text-primary group-hover/item:bg-blue-50 transition-all duration-300">
                                            {item.icon}
                                        </div>
                                        {item.label}
                                    </div>
                                ))}
                            </div>

                            {/* Accent glow on hover */}
                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <Link href="/services" className="inline-flex items-center justify-center px-10 py-5 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-primary transition-all">
                        Explore All Solutions
                    </Link>
                </div>
            </div>
        </section>
    );
}
