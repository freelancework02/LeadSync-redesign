"use client";

import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-24 pb-12 border-t border-white/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

                {/* Brand */}
                <div className="md:col-span-2 space-y-6">
                    <Link href="/" className="text-3xl font-bold tracking-tighter font-clash">
                        LEADSYNC <span className="text-primary">360</span>
                    </Link>
                    <p className="max-w-md text-gray-400">
                        The world's most advanced lead generation platform. We help you turn anonymous traffic into loyal customers with AI-driven insights.
                    </p>

                    <div className="flex gap-4">
                        {[<Facebook key="fb" />, <Twitter key="tw" />, <Instagram key="ig" />, <Linkedin key="li" />].map((icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors group"
                            >
                                <div className="group-hover:scale-110 transition-transform">
                                    {icon}
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links */}
                <div>
                    <h4 className="font-bold mb-6 text-lg">Product</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['Features', 'Pricing', 'Integrations', 'Changelog', 'Docs'].map(item => (
                            <li key={item}>
                                <Link href="#" className="hover:text-primary transition-colors hover:translate-x-2 inline-block duration-200">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 text-lg">Company</h4>
                    <ul className="space-y-4 text-gray-400">
                        {['About Us', 'Careers', 'Blog', 'Contact', 'Privacy Policy'].map(item => (
                            <li key={item}>
                                <Link href="#" className="hover:text-primary transition-colors hover:translate-x-2 inline-block duration-200">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="mt-24 pt-8 border-t border-white/5 text-center text-gray-600 text-sm">
                <p>© 2026 LEADSYNC 360. All rights reserved.</p>
                <p className="mt-2">Designed with ❤️ for Awwwards.</p>
            </div>
        </footer>
    );
}
