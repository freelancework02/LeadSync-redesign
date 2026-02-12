"use client";

import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
    {
        name: "Starter",
        description: "Perfect for validating your idea.",
        basePrice: 29,
        features: ["Up to 1,000 visitors/mo", "Basic Analytics", "Email Support", "1 Project"],
        missing: ["Advanced Targeting", "Webhook Integrations", "AI Copywriting"]
    },
    {
        name: "Growth",
        description: "Scale your lead gen machine.",
        basePrice: 79,
        popular: true,
        features: ["Up to 10,000 visitors/mo", "Advanced Analytics", "Priority Support", "5 Projects", "Advanced Targeting", "Webhook Integrations"],
        missing: ["AI Copywriting"]
    },
    {
        name: "Enterprise",
        description: "Custom solutions for big teams.",
        basePrice: 199,
        features: ["Unlimited visitors", "Custom Reporting", "24/7 Phone Support", "Unlimited Projects", "All Features", "Dedicated Account Manager"],
        missing: []
    }
];

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(false);
    const [sliderValue, setSliderValue] = useState(1); // multiplier

    // Calculate price based on slider (just a visual effect for the demo)
    const calculatePrice = (base: number) => {
        let price = base * sliderValue;
        if (isAnnual) price = price * 0.8; // 20% off
        return Math.round(price);
    };

    useGSAP(() => {
        gsap.from(".pricing-card", {
            y: 100,
            opacity: 0,
            stagger: 0.1,
            duration: 1,
            scrollTrigger: {
                trigger: "#pricing",
                start: "top center+=100",
            }
        });
    });

    return (
        <section id="pricing" className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-clash font-bold mb-6">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">
                        Choose the plan that fits your growth stage. No hidden fees.
                    </p>

                    {/* Toggle */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <span className={`text-sm font-bold ${!isAnnual ? 'text-primary' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-16 h-8 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors"
                        >
                            <div className={`w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isAnnual ? 'translate-x-8' : ''}`} />
                        </button>
                        <span className={`text-sm font-bold ${isAnnual ? 'text-primary' : 'text-gray-400'}`}>
                            Yearly <span className="text-xs text-green-500 font-normal ml-1">(-20%)</span>
                        </span>
                    </div>

                    {/* Traffic Slider */}
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 max-w-md mx-auto">
                        <label className="text-sm font-medium text-gray-500 mb-2 block">Estimated Traffic: <span className="font-bold text-primary">{sliderValue * 10}k / mo</span></label>
                        <input
                            type="range"
                            min="1"
                            max="10"
                            step="1"
                            value={sliderValue}
                            onChange={(e) => setSliderValue(Number(e.target.value))}
                            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    {plans.map((plan) => (
                        <div
                            key={plan.name}
                            className={`pricing-card relative p-8 rounded-3xl border ${plan.popular ? 'border-primary shadow-2xl shadow-primary/20 scale-105 z-10' : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-black/40'} backdrop-blur-sm transition-all hover:border-primary/50 group`}
                        >
                            {plan.popular && (
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                                    Most Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold font-clash mb-2">{plan.name}</h3>
                            <p className="text-gray-500 text-sm mb-6 max-w-[200px]">{plan.description}</p>

                            <div className="mb-6">
                                <span className="text-5xl font-bold text-gray-900 dark:text-white font-clash">${calculatePrice(plan.basePrice)}</span>
                                <span className="text-gray-400">/mo</span>
                            </div>

                            <button className={`w-full py-4 rounded-xl font-bold mb-8 transition-transform active:scale-95 duration-200 ${plan.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}>
                                Get Started
                            </button>

                            <div className="space-y-4">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm">
                                        <div className="w-5 h-5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center flex-shrink-0">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                                {plan.missing.map((feature) => (
                                    <div key={feature} className="flex items-center gap-3 text-sm text-gray-400">
                                        <div className="w-5 h-5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-400 flex items-center justify-center flex-shrink-0">
                                            <X size={12} strokeWidth={3} />
                                        </div>
                                        <span className="line-through">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
