"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomeCTA() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full blur-[120px] opacity-60 -z-10" />

            <div className="container mx-auto px-6 text-center relative z-10">
                <h2 className="text-5xl md:text-6xl font-bold font-clash text-black mb-6 tracking-tight">
                    Ready to Scale?
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Partner with a team that understands both code and business. Let's build something extraordinary together.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/contact" className="px-10 py-5 bg-black text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center gap-2">
                        Get a Free Consultation <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
                <p className="mt-6 text-sm text-slate-400">
                    No commitment required. 100% Confidential.
                </p>
            </div>
        </section>
    );
}
