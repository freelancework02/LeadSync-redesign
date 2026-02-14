import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import TimeSavings from '@/components/sections/TimeSavings';
import ExclusiveOffer from '@/components/sections/ExclusiveOffer';
import Pricing from '@/components/sections/Pricing';

export default function Product() {
    return (
        <>
            <div className="bg-slate-50 min-h-screen">
                <Hero />
                <Features />
                <TimeSavings />
                <Pricing />
                <ExclusiveOffer />
            </div>
        </>
    );
}
