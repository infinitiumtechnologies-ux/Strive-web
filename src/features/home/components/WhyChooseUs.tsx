import * as React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HeartHandshake, Sparkles, Map } from 'lucide-react';
import { Card } from '../../../shared/ui/Card';

export const WhyChooseUs: React.FC = () => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 80, damping: 15 },
    },
  };

  const items = [
    {
      title: 'On-Time Commutes',
      description: 'Advanced telemetry and smart routing guarantee employees arrive at office/home on time.',
      icon: ShieldCheck,
    },
    {
      title: 'Transparent Billing',
      description: 'Pre-calculated contract billing with zero hidden rates. Simple monthly corporate invoicing.',
      icon: HeartHandshake,
    },
    {
      title: 'Verified Chauffeurs',
      description: 'Professional, background-verified drivers with rigorous safety training protocols.',
      icon: Sparkles,
    },
    {
      title: 'Home ⇋ Office Sync',
      description: 'Flexible drop-off points matching individual routes and employee residential hubs.',
      icon: Map,
    },
  ];

  return (
    <section id="about" className="py-20 bg-slate-900/30 border-t border-slate-900" data-testid="why-choose-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Title */}
        <div className="text-center space-y-3">
          <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Our Premium Services
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            We focus on providing first-class rental experiences with flexible support and pristine cars.
          </p>
        </div>

        {/* Staggered Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {items.map((item, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Card
                hoverEffect
                className="flex flex-col items-center text-center p-8 h-64 justify-between border-slate-800/80 bg-slate-950/40"
              >
                <div className="p-4 rounded-2xl bg-brand-500/10 border border-brand-500/20 text-brand-500 mb-2">
                  <item.icon className="h-7 w-7" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
