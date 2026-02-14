"use client";

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    useGSAP(() => {
        gsap.from(".contact-item", {
            y: 30,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.2
        });
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate sending
        setTimeout(() => {
            setStatus('success');
            if (formRef.current) formRef.current.reset();
        }, 1500);
    };

    return (
        <div className="pt-32 pb-24 min-h-screen bg-slate-50">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16 contact-item">
                        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-2 block">Get in Touch</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-clash text-black mb-6">
                            Start Your Digital <br /> Transformation
                        </h1>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Whether you need app development, AI integration, or full-scale digital marketing, our global team is ready to scale your business.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                        {/* Contact Info */}
                        <div className="space-y-8 contact-item">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-1">Global Offices</h3>
                                        <p className="text-slate-600 mb-2">
                                            <strong className="text-black">USA:</strong> 123 Tech Park, Manchester, NH 03101
                                        </p>
                                        <p className="text-slate-600">
                                            <strong className="text-black">India:</strong> Cyber City, Phase 2, Gurgaon, HG 122002
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                                        <Mail className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-1">Email Us</h3>
                                        <p className="text-slate-600 mb-4">
                                            For project inquiries and partnerships.
                                        </p>
                                        <a href="mailto:hello@leadsync.com" className="text-primary font-semibold hover:underline">
                                            hello@leadsync.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                                        <Phone className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-black mb-1">Call Us</h3>
                                        <p className="text-slate-600 mb-4">
                                            Mon-Fri from 9am to 6pm EST.
                                        </p>
                                        <a href="tel:+15551234567" className="text-primary font-semibold hover:underline">
                                            +1 (555) 123-4567
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-200 contact-item">
                            <h3 className="text-2xl font-bold font-clash text-black mb-6">Send a Message</h3>

                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-semibold text-slate-700">First Name</label>
                                        <input type="text" id="firstName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-black" placeholder="John" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-semibold text-slate-700">Last Name</label>
                                        <input type="text" id="lastName" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-black" placeholder="Doe" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email Address</label>
                                    <input type="email" id="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-black" placeholder="john@company.com" />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="service" className="text-sm font-semibold text-slate-700">Service Interest</label>
                                    <select id="service" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-600 bg-white">
                                        <option value="web-dev">Web Development</option>
                                        <option value="app-dev">App Development</option>
                                        <option value="marketing">Digital Marketing</option>
                                        <option value="ai">AI Solutions</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-slate-700">Message</label>
                                    <textarea id="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-black resize-none" placeholder="Tell us about your project..." />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status !== 'idle'}
                                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${status === 'success'
                                            ? 'bg-green-600 hover:bg-green-700 text-white'
                                            : 'bg-primary hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:scale-[1.02] active:scale-95'
                                        }`}
                                >
                                    {status === 'idle' && (
                                        <>Send Message <Send className="w-5 h-5" /></>
                                    )}
                                    {status === 'sending' && (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    )}
                                    {status === 'success' && 'Message Sent!'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
