"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Navbar() {
    const navRef = useRef<HTMLElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Determine if we should clear styles on route change
    useEffect(() => {
        setIsOpen(false);
        // Reset nav style on route change just in case
        if (navRef.current) {
            gsap.set(navRef.current, { clearProps: "all" });
        }
    }, [pathname]);

    useGSAP(() => {
        // Initial setup
        const nav = navRef.current;
        if (!nav) return;

        // Reset any previous GSAP states
        gsap.set(nav, { y: 0, opacity: 1, backgroundColor: "transparent", backdropFilter: "blur(0px)", boxShadow: "none" });

        // Animate in
        gsap.from(nav, {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1
        });

        // Scroll trigger for nav blur/hide
        ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            onUpdate: (self) => {
                // If scrolled down more than 20px
                if (self.progress > 0 && window.scrollY > 20) {
                    gsap.to(nav, {
                        backdropFilter: "blur(12px)",
                        backgroundColor: "rgba(255, 255, 255, 0.9)",
                        boxShadow: "0 4px 20px -2px rgba(0, 0, 0, 0.05)",
                        duration: 0.3,
                        borderBottom: "1px solid rgba(0,0,0,0.05)"
                    });
                } else {
                    // At top
                    gsap.to(nav, {
                        backdropFilter: "blur(0px)",
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        duration: 0.3,
                        borderBottom: "1px solid transparent"
                    });
                }
            }
        });

    }, { scope: navRef, dependencies: [pathname] }); // Re-run on pathname change

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: "Services", href: "/services" },
        { name: "About Us", href: "/about" },
        { name: "Reviews", href: "/#reviews" }, // Reviews is purely an anchor on Home
        { name: "Product", href: "/product" },
        { name: "Contact", href: "/contact" }
    ];

    return (
        <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center transition-all bg-transparent text-black">
            <Link href="/" className="text-2xl font-bold tracking-tighter hover:scale-105 transition-transform origin-left font-clash">
                LEADSYNC
            </Link>

            {/* Desktop Links */}
            <div ref={linksRef} className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={`relative group text-sm font-medium overflow-hidden ${pathname === link.href ? 'text-primary font-bold' : ''}`}
                    >
                        <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                            {link.name}
                        </span>
                        <span className="absolute left-0 top-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-primary">
                            {link.name}
                        </span>
                    </Link>
                ))}
                <Link href="/contact" className="bg-black text-white hover:bg-black/80 backdrop-blur-sm border border-black/10 px-6 py-2 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95">
                    Get Started
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
                onClick={toggleMenu}
                className="md:hidden p-2 hover:bg-slate-100 rounded-full transition-colors z-[60]"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed inset-0 bg-white/98 backdrop-blur-xl z-[55] flex flex-col justify-center items-center gap-8 animate-in fade-in duration-200">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-2xl font-medium hover:text-primary transition-colors font-clash"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="bg-primary hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all transform hover:scale-[1.02] shadow-xl shadow-primary/30"
                    >
                        Get Started Now
                    </Link>
                </div>
            )}
        </nav>
    );
}
