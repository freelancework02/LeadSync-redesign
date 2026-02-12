import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import TimeSavings from '@/components/sections/TimeSavings';
import ExclusiveOffer from '@/components/sections/ExclusiveOffer';
import Pricing from '@/components/sections/Pricing';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <TimeSavings />
      <Pricing />
      <ExclusiveOffer />
    </>
  );
}
