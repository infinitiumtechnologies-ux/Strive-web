import * as React from 'react';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedVehicles } from '../components/FeaturedVehicles';
import { CarFleet } from '../components/CarFleet';
import { CallToAction } from '../components/CallToAction';
import { Testimonials } from '../components/Testimonials';
import { BlogSection } from '../components/BlogSection';

export const HomePage: React.FC = () => {
  return (
    <div className="-mx-4 sm:-mx-6 lg:-mx-8 -my-8 space-y-0" data-testid="home-page">
      <Hero />
      <WhyChooseUs />
      <FeaturedVehicles />
      <CarFleet />
      <CallToAction />
      <Testimonials />
      <BlogSection />
    </div>
  );
};
export default HomePage;
