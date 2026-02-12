"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

// Use basic GSAP if scroll trigger is not available immediately, but standard usage is fine
gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useGSAP(() => {
        // Initial reveal animation
        gsap.from(navRef.current, {
            y: -100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2
        });

        // Scroll trigger for nav blur/hide
        ScrollTrigger.create({
            start: "top top",
            end: 99999,
            onUpdate: (self) => {
                if (self.direction === 1 && self.progress > 0.05) {
                    // Scrolling down - hide or blur background
                    gsap.to(navRef.current, {
                        backdropFilter: "blur(10px)",
                        backgroundColor: "rgba(10, 10, 10, 0.8)",
                        boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
                        duration: 0.3
                    });
                } else if (self.direction === -1 || self.progress < 0.05) {
                    // Scrolling up or at top
                    gsap.to(navRef.current, {
                        backdropFilter: "blur(0px)",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        duration: 0.3
                    });
                }
            }
        });

        // Stagger links animation
        if (linksRef.current) {
            gsap.from(linksRef.current.children, {
                y: -20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                delay: 0.5
            });
        }

    }, { scope: navRef });

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Pricing", href: "#pricing" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "Contact", href: "#contact" }
    ];

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all bg-transparent text-white/90">
            <Link href="/" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform origin-left font-clash">
                LEADSYNC <span className="text-primary">360</span>
            </Link>

            {/* Desktop Links */}
            <div ref={linksRef} className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="relative group text-sm font-medium overflow-hidden"
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full hover-text">
                            {link.name}
                        </span>
                        <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-primary">
                            {link.name}
                        </span>
                    </Link>
                ))}
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
                    Get Started
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleMenu}
                className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl p-6 flex flex-col gap-6 items-center border-b border-white/10 md:hidden animate-in slide-in-from-top duration-300">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="w-full bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl ffont-bold transition-all transform hover:scale-[1.02]">
                        Get Started Now
                    </button>
                </div>
            )}
        </nav>
    );
}
