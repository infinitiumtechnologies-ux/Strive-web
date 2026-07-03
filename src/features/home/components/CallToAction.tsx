import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../../shared/ui/Button';
import { ShieldCheck, Bus, Clock, Users, ArrowRight } from 'lucide-react';
import vehicleHitechBus from '../../../assets/vehicle_hitech_bus.png';

export const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 bg-slate-950 overflow-hidden border-t border-slate-900" data-testid="cta-section">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-brand-500/10 pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] rounded-full blur-[120px] bg-amber-500/5 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Rich Content & Bullet Points */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest flex items-center gap-2">
                <Bus className="h-4 w-4" /> Coordinated Mass Transit
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Streamline Your <br />
                <span className="bg-gradient-to-r from-brand-400 to-amber-500 bg-clip-text text-transparent">
                  Corporate Commutes
                </span>{' '}
                & Group Travel
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether coordinating employee daily shifts or arranging a 54-seater luxury coach bus for long distance travel, we handle the logistics end-to-end. Let us optimize your routes, consolidate your fleets, and audit travel performance.
              </p>
            </div>

            {/* Bullet List Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Feature 1 */}
              <div className="flex gap-3 items-start">
                <div className="p-1 rounded bg-brand-500/10 text-brand-500 mt-0.5">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">End-to-End SLA Delivery</h4>
                  <p className="text-[11px] text-slate-400">Guaranteed backup vehicles and strict schedule compliance.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-3 items-start">
                <div className="p-1 rounded bg-amber-500/10 text-amber-500 mt-0.5">
                  <Bus className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">54-Seater Luxury Coaches</h4>
                  <p className="text-[11px] text-slate-400">Premium seating, Wi-Fi, air suspension, and charging ports.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-3 items-start">
                <div className="p-1 rounded bg-teal-500/10 text-teal-500 mt-0.5">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Shift Synchronization</h4>
                  <p className="text-[11px] text-slate-400">AI route optimization to reduce employee travel time by 30%.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="flex gap-3 items-start">
                <div className="p-1 rounded bg-brand-500/10 text-brand-500 mt-0.5">
                  <Users className="h-4 w-4" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">Centralized Dashboard</h4>
                  <p className="text-[11px] text-slate-400">Monitor live telemetry, routes, and billing invoices in one hub.</p>
                </div>
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="pt-4">
              <a href="/#booking-form">
                <Button size="lg" className="font-bold shadow-xl shadow-brand-500/20 px-8 flex items-center gap-2">
                  Book Your Fleet Ride Now <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Visual Coach Bus Asset */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glowing background halo */}
            <div className="absolute w-[80%] h-[80%] rounded-full bg-brand-500/10 blur-[60px] pointer-events-none" />

            <div className="relative border border-slate-900 bg-slate-900/10 rounded-2xl p-4 overflow-hidden shadow-2xl flex flex-col items-center">
              <div className="absolute top-3 right-3 bg-brand-500/10 border border-brand-500/20 text-brand-400 text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                54-Seater Premium Coach
              </div>
              <img
                src={vehicleHitechBus}
                alt="Strive Coach Bus"
                className="w-full h-auto object-contain select-none max-h-[220px]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
export default CallToAction;
