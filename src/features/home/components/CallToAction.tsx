import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../shared/ui/Button';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900" data-testid="cta-section">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1542318041-958b16956f76?auto=format&fit=crop&w=1920&q=80"
          alt="Commuter Bus Fleet"
          className="w-full h-full object-cover opacity-20 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-slate-950" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight"
        >
          Streamline Your{' '}
          <span className="text-brand-500">Corporate Commutes</span> & Group Travel
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
        >
          Whether coordinating employee daily shifts or arranging a 54-seater luxury coach bus for long distance travel, we handle the logistics end-to-end.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-4"
        >
          <Button size="lg" className="font-semibold shadow-xl shadow-brand-500/20 px-8">
            Book Your Fleet Ride Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
export default CallToAction;
