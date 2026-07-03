import * as React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';
import { Button } from '../shared/ui/Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Corporate Sync', path: '/#corporate-sync' },
    { name: 'Our Services', path: '/#fleet-services' },
    { name: 'Features', path: '/#features' },
    { name: 'About Us', path: '/#aboutus' },
    { name: 'Contact Us', path: '/#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 border-b border-slate-900 shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="flex items-center gap-2 text-xl font-extrabold text-white"
              onClick={handleNavClick}
            >
              <img src={logoImg} alt="Strive Wheels Logo" className="h-9 w-auto rounded-md object-contain" />
              <span className="bg-gradient-to-r from-brand-400 to-amber-500 bg-clip-text text-transparent">Strive Wheels</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2">
              {navLinks.map((link) => {
                if (link.path.startsWith('/#')) {
                  return (
                    <a
                      key={link.path}
                      href={link.path}
                      className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={handleNavClick}
                    className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <a href="/#booking-form">
              <Button
                variant="primary"
                size="sm"
                className="font-bold bg-brand-500 text-slate-950 hover:bg-brand-400 border-none transition-all duration-200"
              >
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-900 bg-slate-950 px-4 pt-2 pb-4 space-y-2 overflow-hidden shadow-xl"
          >
            {navLinks.map((link) => {
              if (link.path.startsWith('/#')) {
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={handleNavClick}
                    className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-300 hover:bg-slate-900/50 hover:text-slate-200 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-300 hover:bg-slate-900/50 hover:text-slate-200 transition-colors"
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-2 border-t border-slate-900 mt-2">
              <a href="/#booking-form" onClick={handleNavClick} className="block">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full font-bold bg-brand-500 text-slate-950 hover:bg-brand-400 border-none"
                >
                  Book Now
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
