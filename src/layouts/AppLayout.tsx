import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { cn } from '../shared/utils/cn';

export const AppLayout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className={cn(
            'flex-grow w-full mx-auto px-4 sm:px-6 lg:px-8 py-8',
            isHome ? 'max-w-7xl' : 'max-w-7xl pt-24',
          )}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>

      <footer id="contact" className="border-t border-slate-800 bg-slate-950 py-6 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} RentNow Inc. Premium Car Rentals.</p>
        </div>
      </footer>
    </div>
  );
};
