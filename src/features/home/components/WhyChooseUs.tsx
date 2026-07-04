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
      description: 'Advanced telematics and intelligent route optimization ensure employees reach their workplace and return home safely, comfortably, and on time.',
      icon: ShieldCheck,
      colorClass: 'bg-blue-500/10 border-blue-500/20 text-blue-500',
      cardClass: 'border-blue-500/20 hover:border-blue-500/40 bg-blue-950/20 hover:bg-blue-950/30 hover:shadow-blue-500/5',
    },
    {
      title: 'Transparent Billing',
      description: 'Enjoy clear, upfront pricing with no hidden charges. Simplified monthly invoicing ensures seamless billing for corporate clients.',
      icon: HeartHandshake,
      colorClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500',
      cardClass: 'border-emerald-500/20 hover:border-emerald-500/40 bg-emerald-950/20 hover:bg-emerald-950/30 hover:shadow-emerald-500/5',
    },
    {
      title: 'Verified Chauffeurs',
      description: 'Travel with confidence, knowing every chauffeur is professionally trained, thoroughly background-verified, and committed to the highest safety standards.',
      icon: Sparkles,
      colorClass: 'bg-amber-500/10 border-amber-500/20 text-amber-500',
      cardClass: 'border-amber-500/20 hover:border-amber-500/40 bg-amber-950/20 hover:bg-amber-950/30 hover:shadow-amber-500/5',
    },
    {
      title: 'Home-to-Office Connectivity',
      description: 'Flexible pick-up and drop-off services tailored to employee locations and optimized commuting routes.',
      icon: Map,
      colorClass: 'bg-violet-500/10 border-violet-500/20 text-violet-500',
      cardClass: 'border-violet-500/20 hover:border-violet-500/40 bg-violet-950/20 hover:bg-violet-950/30 hover:shadow-violet-500/5',
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-900/30 border-t border-slate-900" data-testid="why-choose-us">
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
            We are committed to delivering exceptional vehicle rental experiences through premium service, flexible support, and a meticulously maintained fleet.
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
                className={`flex flex-col items-center text-center p-8 h-64 justify-between ${item.cardClass}`}
              >
                <div className={`p-4 rounded-2xl border mb-2 ${item.colorClass}`}>
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
