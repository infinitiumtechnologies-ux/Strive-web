import * as React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FleetServices } from '../components/FleetServices';
import { CorporateSyncSection } from '../components/CorporateSyncSection';
import { AboutUsSection } from '../components/AboutUsSection';
import { CallToAction } from '../components/CallToAction';
import { Testimonials } from '../components/Testimonials';
import { ContactSection } from '../components/ContactSection';

export const HomePage: React.FC = () => {
  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8 -my-8 space-y-0" data-testid="home-page">
      <Hero />
      <CallToAction />
      <WhyChooseUs />
      <FleetServices />
      <CorporateSyncSection />
      <AboutUsSection />
      <Testimonials />
      <ContactSection />
    </div>
  );
};
export default HomePage;
