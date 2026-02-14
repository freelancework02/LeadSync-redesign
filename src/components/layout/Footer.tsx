"use client";

import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="footer" className="bg-white text-black pt-24 pb-12 border-t border-slate-200 relative overflow-hidden">

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">

                {/* Brand */}
                <div className="md:col-span-2 space-y-6">
                    <Link href="/" className="text-3xl font-bold tracking-tighter font-clash">
                        LEADSYNC
                    </Link>
                    <p className="max-w-md text-gray-600">
                        A global technology partner delivering Web, App, AI, and Digital Marketing solutions. From India to the world.
                    </p>

                    <div className="flex gap-4">
                        {[<Facebook key="fb" />, <Twitter key="tw" />, <Instagram key="ig" />, <Linkedin key="li" />].map((icon, i) => (
                            <a
                                key={i}
                                href="#"
                                className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors group"
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
                    <h4 className="font-bold mb-6 text-lg">Services</h4>
                    <ul className="space-y-4 text-gray-600">
                        {['Web Development', 'App Development', 'AI Solutions', 'Digital Marketing', 'ERP & CRM'].map(item => (
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
                    <ul className="space-y-4 text-gray-600">
                        {['About Us', 'Our Product: LeadSync 360', 'Careers', 'Contact', 'Privacy Policy'].map(item => (
                            <li key={item}>
                                <Link href="#" className="hover:text-primary transition-colors hover:translate-x-2 inline-block duration-200">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            <div className="mt-24 pt-8 border-t border-slate-200 text-center text-gray-500 text-sm">
                <p>© 2026 LeadSync. All rights reserved.</p>
                <p className="mt-2">Designed with ❤️ for Global Innovation.</p>
            </div>
        </footer>
    );
}
