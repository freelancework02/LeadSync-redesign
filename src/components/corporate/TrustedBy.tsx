"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const logos = [
    { name: 'Alpha', icon: '⚡' },
    { name: 'Beta', icon: '🚀' },
    { name: 'Gamma', icon: '💠' },
    { name: 'Delta', icon: '🛡️' },
    { name: 'Epsilon', icon: '💎' },
    { name: 'Zeta', icon: '🌀' },
];

export default function TrustedBy() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.95, 1]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: (e.clientX - rect.left - rect.width / 2) / 60,
            y: (e.clientY - rect.top - rect.height / 2) / 60,
        });
    };

    const springX = useSpring(mousePos.x, { stiffness: 100, damping: 30 });
    const springY = useSpring(mousePos.y, { stiffness: 100, damping: 30 });

    return (
        <section
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
            className="py-32 relative overflow-hidden bg-white"
        >
            {/* Soft radial gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />

            <motion.div
                style={{ opacity, scale, x: springX, y: springY }}
                className="container mx-auto px-6 relative z-10"
            >
                <div className="text-center mb-16">
                    <p className="text-slate-400 font-medium tracking-[0.3em] uppercase text-[10px]">
                        Powering growth for modern enterprise teams
                    </p>
                </div>

                {/* Logo Marquee Wrapper */}
                <div className="relative group/marquee">
                    {/* Edge blur mask effect */}
                    <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                    <div className="flex overflow-hidden py-12">
                        <motion.div
                            className="flex gap-24 items-center whitespace-nowrap"
                            animate={{
                                x: [0, -1000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 40,
                                    ease: "linear",
                                },
                            }}
                        >
                            {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 grayscale opacity-30 hover:grayscale-0 hover:opacity-100 transition-all duration-700 cursor-default scale-90 hover:scale-100"
                                >
                                    <span className="text-4xl filter drop-shadow-sm">{logo.icon}</span>
                                    <span className="text-2xl font-clash font-semibold text-slate-900 tracking-tight">
                                        {logo.name}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Subtle Glassmorphism floating element */}
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [100, -100])
                }}
                className="absolute top-1/4 -right-20 w-80 h-80 bg-blue-50/20 backdrop-blur-3xl rounded-full border border-blue-100/10 -z-10"
            />
            <motion.div
                style={{
                    y: useTransform(scrollYProgress, [0, 1], [-100, 100])
                }}
                className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-50/20 backdrop-blur-3xl rounded-full border border-indigo-100/10 -z-10"
            />
        </section>
    );
}
