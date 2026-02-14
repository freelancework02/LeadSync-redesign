"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { Shield, Mail, Database, Upload, Layout, Share2, UserX, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const modules = [
    {
        title: "1. Admin Authentication",
        description: "The secure entry point to the LeadSync 360 ecosystem. Features JWT-based security and a responsive design optimized for all devices.",
        image: "/images/loginpage.png",
        icon: <Shield className="w-6 h-6 text-white" />,
        color: "bg-blue-600",
        tags: ["JWT Security", "Responsive", "Encrypted"]
    },
    {
        title: "2. Campaign Composer",
        description: "The central hub for email marketing. Craft rich, HTML-responsive emails using a drag-and-drop methodology with real-time preview.",
        image: "/images/composeemail.png",
        icon: <Mail className="w-6 h-6 text-white" />,
        color: "bg-indigo-600",
        tags: ["Drag & Drop", "Live Preview", "Asset Manager"]
    },
    {
        title: "3. Lead Database",
        description: "A comprehensive table view of all contacts. Filter, search, and manage leads with granular control and metadata highlighting.",
        image: "/images/Leads.png",
        icon: <Database className="w-6 h-6 text-white" />,
        color: "bg-sky-600",
        tags: ["Granular Filters", "Metadata", "Search"]
    },
    {
        title: "4. Bulk Import",
        description: "Accelerate growth with CSV/Excel imports. Built-in duplicate detection and error handling ensure database integrity.",
        image: "/images/Uploads Leads.png",
        icon: <Upload className="w-6 h-6 text-white" />,
        color: "bg-emerald-600",
        tags: ["CSV Support", "Duplicate Check", "Error Handling"]
    },
    {
        title: "5. Template Gallery",
        description: "A visual browser for all email designs. Quickly preview 'Corporate Blue', 'Newsletter', and specialized templates.",
        image: "/images/Preview Template.png",
        icon: <Layout className="w-6 h-6 text-white" />,
        color: "bg-violet-600",
        tags: ["Visual Browser", "One-Click Use", "Categorized"]
    },
    {
        title: "6. Social Suite",
        description: "Integrated publishing for Facebook and Instagram. Select content types (Reels, Posts) and push directly to your feeds.",
        image: "/images/Social upload.png",
        icon: <Share2 className="w-6 h-6 text-white" />,
        color: "bg-pink-600",
        tags: ["Cross-Platform", "Reels & Posts", "Scheduling"]
    },
    {
        title: "7. Compliance Manager",
        description: "Automated handling of unsubscribed users. Cross-referenced against all outgoing campaigns for rigorous legal compliance.",
        image: "/images/Unsubscribe leads.png",
        icon: <UserX className="w-6 h-6 text-white" />,
        color: "bg-red-600",
        tags: ["Auto-Unsubscribe", "GDPR Ready", "Legal Safe"]
    },
    {
        title: "8. User Administration",
        description: "Role-based access control. Admins can provision new accounts, securing platform access and delegating responsibilities.",
        image: "/images/Add User.png",
        icon: <Users className="w-6 h-6 text-white" />,
        color: "bg-slate-600",
        tags: ["RBAC", "Provisioning", "Audit Logs"]
    }
];

export default function Features() {
    const containerRef = useRef<HTMLElement>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // Get the horizontal length needed
        const totalWidth = slider.scrollWidth - window.innerWidth;

        gsap.to(slider, {
            x: -totalWidth,
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                pin: true,
                scrub: 1,
                end: () => "+=" + totalWidth
            }
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="features" className="relative h-screen bg-white text-black overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full bg-slate-50 opacity-90 -z-10" />
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="absolute top-8 left-8 md:left-20 z-10 pointer-events-none">
                <h2 className="text-3xl md:text-5xl font-clash font-bold leading-tight">
                    System <span className="text-primary">Modules</span>
                </h2>
                <p className="mt-2 text-slate-600 max-w-sm text-sm md:text-base">
                    Explore the core components of the LeadSync 360 architecture.
                </p>
            </div>

            <div className="flex h-full items-center">
                {/* Spacer */}
                <div className="w-[5vw] flex-shrink-0" />

                {/* Horizontal Slider Container */}
                <div ref={sliderRef} className="flex gap-8 pl-4 md:pl-20 pr-20 items-center h-full">
                    {modules.map((module, i) => (
                        <div
                            key={i}
                            className="feature-card relative w-[85vw] md:w-[800px] h-[65vh] md:h-[600px] flex-shrink-0 rounded-[2rem] bg-white backdrop-blur-xl border border-slate-200 overflow-hidden group hover:border-slate-300 transition-colors shadow-xl flex flex-col md:flex-row"
                        >
                            {/* Left/Top Content */}
                            <div className="p-8 md:p-10 flex flex-col justify-between w-full md:w-1/3 bg-slate-50">
                                <div>
                                    <div className={`w-12 h-12 rounded-xl ${module.color} flex items-center justify-center mb-6 shadow-md`}>
                                        {module.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 font-clash text-black leading-tight">{module.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6">{module.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {module.tags.map(tag => (
                                            <span key={tag} className="text-xs font-semibold bg-slate-200 text-slate-700 px-2 py-1 rounded-md border border-slate-300">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-auto pt-6 text-slate-400 font-mono text-sm">
                                    Module 0{i + 1}
                                </div>
                            </div>

                            {/* Right/Bottom Image Area */}
                            <div className="relative w-full md:w-2/3 h-full bg-slate-100 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-100/80 via-transparent to-transparent z-10" />

                                {/* Browser Wrapper for consistent look */}
                                <div className="absolute inset-4 md:inset-8 rounded-lg overflow-hidden shadow-xl ring-1 ring-slate-200 transform group-hover:scale-[1.02] transition-transform duration-700 ease-out bg-white">
                                    <div className="h-6 bg-slate-50 border-b border-slate-200 flex items-center px-3 gap-2">
                                        <div className="w-2 h-2 rounded-full bg-red-400/50" />
                                        <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                                        <div className="w-2 h-2 rounded-full bg-green-400/50" />
                                    </div>
                                    <img
                                        src={module.image}
                                        alt={module.title}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* End Spacer */}
                    <div className="w-[10vw] flex-shrink-0" />
                </div>
            </div>
        </section>
    );
}
