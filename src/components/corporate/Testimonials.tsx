"use client";
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "CTO, TechFlow NH",
        text: "LeadSync bridged the gap between our vision and reality. Their team effectively acts as an extension of our own.",
        location: "New Hampshire, USA"
    },
    {
        name: "Raj Patel",
        role: "Founder, StartupIndia",
        text: "The best web development service we've used. The turnaround time was incredible given the complexity.",
        location: "Mumbai, India"
    },
    {
        name: "Michael Ross",
        role: "Director, Granite State Marketing",
        text: "We collaborate with LeadSync for all our backend needs. Seamless communication and top-tier code quality.",
        location: "Manchester, NH"
    }
];

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold font-clash text-black mb-4">Client <span className="text-primary">Reviews</span></h2>
                    <p className="text-slate-600">
                        Trusted by companies across continents.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map(s => <Star key={s} size={16} className="fill-yellow-400 text-yellow-400" />)}
                            </div>
                            <p className="text-slate-600 italic mb-6">&quot;{t.text}&quot;</p>
                            <div>
                                <h4 className="font-bold text-black">{t.name}</h4>
                                <p className="text-xs text-primary font-semibold">{t.role}</p>
                                <p className="text-xs text-slate-400 mt-1">{t.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
