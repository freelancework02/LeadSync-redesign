import CorporateHero from '@/components/corporate/CorporateHero';
import HomeAboutTeaser from '@/components/corporate/HomeAboutTeaser';
import HomeServicesTeaser from '@/components/corporate/HomeServicesTeaser';
import HomeProductTeaser from '@/components/corporate/HomeProductTeaser';
import Testimonials from '@/components/corporate/Testimonials';
import HomeCTA from '@/components/corporate/HomeCTA';

export default function Home() {
  return (
    <>
      <CorporateHero />
      <HomeAboutTeaser />
      <HomeServicesTeaser />
      <HomeProductTeaser />
      <Testimonials />
      <HomeCTA />
    </>
  );
}
