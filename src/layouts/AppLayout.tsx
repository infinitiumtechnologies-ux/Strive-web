import * as React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './Navbar';
import { cn } from '../shared/utils/cn';
import infinitiumsLogo from '../assets/infinitiums_logo.png';

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

      {/* Provided By - Centered below the main page content card and above the footer */}
      <div className="w-full flex items-center justify-center gap-2.5 text-xs sm:text-sm text-slate-500 py-6">
        <span>Provided by</span>
        <img src={infinitiumsLogo} alt="Infinitiums Solutions Pvt Ltd" className="h-6 w-6 object-contain rounded-md" />
        <span className="font-semibold text-slate-400">Infinitiums Solutions Pvt Ltd</span>
      </div>

      <footer className="border-t border-slate-900 bg-slate-950 py-6 text-center text-sm text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} The Strive Mobility Solutions Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
