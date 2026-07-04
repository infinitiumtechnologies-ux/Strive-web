import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { cn } from '../shared/utils/cn';

export const AppLayout: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  React.useEffect(() => {
    const { hash } = location;
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Small delay to allow DOM to finish rendering
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 120);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

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

      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} The Strive Mobility Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
