import * as React from 'react';
import { motion } from 'framer-motion';
import { BookingSearchForm } from './BookingSearchForm';

export const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 overflow-hidden pt-16">
      {/* Background Image with Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=80"
          alt="Modern Transport Fleet"
          className="w-full h-full object-cover opacity-20 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center space-y-12 py-12">
        {/* Title Content */}
        <div className="space-y-4 max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase"
          >
            Fast & Easy Way to Book Shuttles & Rides
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-none"
          >
            Daily Commutes, Instant Rides &{' '}
            <span className="bg-gradient-to-r from-brand-400 to-amber-500 bg-clip-text text-transparent">
              Group Coaches
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto"
          >
            Book instant city rides, corporate employee daily shuttles, or premium group coach buses. Tailored scheduling, GPS-tracked routes, and transparent pricing.
          </motion.p>
        </div>

        {/* Booking Card overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full max-w-7xl"
        >
          <BookingSearchForm />
        </motion.div>
      </div>
    </div>
  );
};
export default Hero;
