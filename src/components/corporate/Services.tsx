"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Code, Smartphone, BarChart3, Bot, LayoutGrid, Globe, Brain, MessagesSquare, Settings, Database, Cloud, Shield, Laptop, Rocket, Search, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const serviceCategories = [
    {
        title: "Web & App Engineering",
        description: "We build scalable, high-performance digital products using modern architectures.",
        services: [
            {
                name: "Web Development",
                detail: "Next.js, React, Node.js applications optimized for speed and SEO.",
                icon: <Globe className="w-6 h-6 text-blue-600" />
            },
            {
                name: "Mobile Apps",
                detail: "Native iOS/Android & Cross-platform solutions with React Native.",
                icon: <Smartphone className="w-6 h-6 text-blue-600" />
            },
            {
                name: "Custom SaaS",
                detail: "Full-cycle SaaS development from MVP to enterprise scale.",
                icon: <Code className="w-6 h-6 text-blue-600" />
            }
        ]
    },
    {
        title: "AI & Automation",
        description: "Leverage cutting-edge Artificial Intelligence to automate workflows and enhance user interaction.",
        services: [
            {
                name: "AI Agents",
                detail: "Autonomous agents that handle complex workflows and decision making.",
                icon: <Brain className="w-6 h-6 text-purple-600" />
            },
            {
                name: "Intelligent Chatbots",
                detail: "24/7 Customer support bots trained on your specific business data.",
                icon: <MessagesSquare className="w-6 h-6 text-purple-600" />
            },
            {
                name: "Process Automation",
                detail: "Zapier/Make.com integrations to eliminate manual data entry.",
                icon: <Settings className="w-6 h-6 text-purple-600" />
            }
        ]
    },
    {
        title: "Enterprise Solutions",
        description: "Robust systems designed to manage complex business operations efficiently.",
        services: [
            {
                name: "ERP Systems",
                detail: "Custom Enterprise Resource Planning to unify your business data.",
                icon: <LayoutGrid className="w-6 h-6 text-emerald-600" />
            },
            {
                name: "CRM Development",
                detail: "Tailored Customer Relationship Management platforms.",
                icon: <Database className="w-6 h-6 text-emerald-600" />
            },
            {
                name: "Cloud Infrastructure",
                detail: "AWS/Azure architecture, DevOps, and secure cloud migration.",
                icon: <Cloud className="w-6 h-6 text-emerald-600" />
            }
        ]
    },
    {
        title: "Digital Growth",
        description: "Data-driven strategies to increase visibility and acquire customers.",
        services: [
            {
                name: "Digital Marketing",
                detail: "Comprehensive SEO, PPC, and Social Media campaigns.",
                icon: <BarChart3 className="w-6 h-6 text-orange-600" />
            },
            {
                name: "Brand Strategy",
                detail: "Identity design and positioning for market leadership.",
                icon: <Shield className="w-6 h-6 text-orange-600" />
            }
        ]
    }
];

const processSteps = [
    {
        title: "Discovery",
        desc: "We dive deep into your business goals and technical requirements.",
        icon: <Search className="w-6 h-6 text-blue-600" />
    },
    {
        title: "Strategy",
        desc: "Architecting a scalable solution and detailed roadmap.",
        icon: <LayoutGrid className="w-6 h-6 text-indigo-600" />
    },
    {
        title: "Development",
        desc: "Agile sprints with regular updates and code reviews.",
        icon: <Laptop className="w-6 h-6 text-purple-600" />
    },
    {
        title: "Launch & Scale",
        desc: "Deployment, monitoring, and continuous optimization.",
        icon: <Rocket className="w-6 h-6 text-pink-600" />
    }
];

const technologies = [
    "Next.js", "React", "Node.js", "TypeScript", "Python", "AWS", "Docker", "OpenAI", "Supabase", "TailwindCSS", "Flutter", "PostgreSQL"
];

export default function Services() {
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const sections = gsap.utils.toArray<HTMLElement>('.category-section');

        sections.forEach((section) => {
            gsap.from(section.querySelector('.category-header'), {
                y: 30, opacity: 0, duration: 0.8,
                scrollTrigger: { trigger: section, start: "top bottom-=100", toggleActions: "play none none reverse" }
            });
            gsap.from(section.querySelectorAll('.service-item'), {
                y: 30, opacity: 0, duration: 0.6, stagger: 0.1,
                scrollTrigger: { trigger: section.querySelector('.grid'), start: "top bottom-=50", toggleActions: "play none none reverse" }
            });
        });

        gsap.from(".process-card", {
            y: 40, opacity: 0, duration: 0.8, stagger: 0.2,
            scrollTrigger: { trigger: "#process", start: "top bottom-=100" }
        });

        gsap.from(".tech-tag", {
            scale: 0.8, opacity: 0, duration: 0.5, stagger: 0.05,
            scrollTrigger: { trigger: "#technologies", start: "top bottom-=50" }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="services" className="py-24 bg-slate-50 border-t border-slate-200 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-[150vh] overflow-hidden -z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10" />
            <div className="absolute top-[800px] left-[-200px] w-[600px] h-[600px] bg-indigo-100/40 rounded-full blur-[120px] -z-10" />


            <div className="container mx-auto px-6">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold mb-6 border border-blue-100">
                        End-to-End Solutions
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold font-clash text-black mb-6">
                        From Concept to <span className="text-primary">Scale</span>
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        As a New Hampshire-based technology partner with global delivery capabilities, we don't just write code. We build business assets. Our comprehensive suite of services is designed to handle every stage of your digital evolution.
                    </p>
                </div>

                {/* Tech Stack Marquee (Static Grid for cleanliness) */}
                <div id="technologies" className="mb-24 text-center">
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Powering Innovation With</p>
                    <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                        {technologies.map((tech, i) => (
                            <span key={i} className="tech-tag px-6 py-3 bg-white rounded-full border border-slate-200 text-slate-600 font-medium text-sm shadow-sm hover:border-primary hover:text-primary transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Services List */}
                <div className="space-y-24 mb-32">
                    {serviceCategories.map((category, idx) => (
                        <div key={idx} className="category-section scroll-mt-24">
                            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 category-header">
                                <div className="max-w-xl">
                                    <h3 className="text-2xl md:text-3xl font-bold font-clash text-black mb-3">{category.title}</h3>
                                    <p className="text-slate-600 text-base md:text-lg leading-relaxed">{category.description}</p>
                                </div>
                                <div className="hidden md:block h-px bg-slate-200 flex-grow md:ml-8 self-center" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {category.services.map((service, sIdx) => (
                                    <div key={sIdx} className="service-item h-full flex flex-col group p-6 md:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 group-hover:bg-blue-50/50 duration-500" />

                                        <div className="relative z-10">
                                            <div className="flex items-start justify-between mb-6">
                                                <div className="w-14 h-14 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-white group-hover:border-blue-100 transition-colors shrink-0 shadow-sm">
                                                    {service.icon}
                                                </div>
                                                <Link href="/contact" className="text-slate-300 hover:text-primary transition-colors p-2 -mr-2 -mt-2">
                                                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                                </Link>
                                            </div>
                                            <h4 className="text-lg md:text-xl font-bold text-black mb-3 group-hover:text-primary transition-colors">{service.name}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                                                {service.detail}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Process Section */}
                <div id="process" className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold font-clash text-black mb-4">Our Execution Process</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">A transparent, agile workflow designed to deliver results on time and within budget.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {processSteps.map((step, i) => (
                            <div key={i} className="process-card p-6 rounded-2xl bg-white border border-slate-200 shadow-lg relative">
                                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold text-sm border-4 border-slate-50">
                                    {i + 1}
                                </div>
                                <div className="mb-4 p-3 bg-slate-50 rounded-lg w-fit">
                                    {step.icon}
                                </div>
                                <h4 className="font-bold text-lg mb-2 text-black">{step.title}</h4>
                                <p className="text-sm text-slate-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="p-12 bg-black rounded-3xl text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-50" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-50" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold font-clash text-white mb-6">
                            Ready to modernize your operations?
                        </h3>
                        <p className="text-slate-300 mb-8 text-lg">
                            Whether you need an AI agent to handle customer queries or a full ERP overhaul, our team is ready to deploy.
                        </p>
                        <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all bg-white rounded-full hover:bg-slate-100 hover:scale-105">
                            Start Your Project
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
        </svg>
    )
}
