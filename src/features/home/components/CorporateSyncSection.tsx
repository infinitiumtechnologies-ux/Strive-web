import * as React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, Clock, Users, ArrowRight, ShieldCheck, 
  MapPin, Compass, Percent, TrendingDown, Leaf, Activity 
} from 'lucide-react';
import { Button } from '../../../shared/ui/Button';

export const CorporateSyncSection: React.FC = () => {
  // Evaluation Calculator State
  const [employeeCount, setEmployeeCount] = React.useState(250);
  const [commuteDistance, setCommuteDistance] = React.useState(20);
  const [activeShift, setActiveShift] = React.useState('General Shift');

  // Calculate dynamic evaluation stats based on slider values
  const averageCarCommuteCostPerDay = 18.50; // fuel + parking + wear
  const dailyCarCommuteTotal = employeeCount * averageCarCommuteCostPerDay;
  const monthlyCarCommuteTotal = dailyCarCommuteTotal * 22; // 22 working days

  // Shuttle capacity average is 15-20 seats. Let's assume a mixture of travellers and coasters
  const shuttlesNeeded = Math.ceil(employeeCount / 16);
  // Cost per shuttle day (driver + fuel + vehicle lease) is around $150
  const dailyShuttleCommuteTotal = shuttlesNeeded * 160;
  const monthlyShuttleCommuteTotal = dailyShuttleCommuteTotal * 22;

  // Savings calculations
  const monthlySavings = Math.max(0, monthlyCarCommuteTotal - monthlyShuttleCommuteTotal);
  const savingsPercent = Math.round((monthlySavings / monthlyCarCommuteTotal) * 100) || 0;

  // Carbon footprint: Average car produces 4.04g of CO2 per km. Shuttle produces more per vehicle but carries 16x more people
  const co2ProducedCarMonthly = (employeeCount * commuteDistance * 2 * 22 * 404) / 1000000; // in metric tons
  const co2ProducedShuttleMonthly = (shuttlesNeeded * commuteDistance * 2 * 22 * 980) / 1000000; // in metric tons
  const co2SavedMonthly = Math.max(0, co2ProducedCarMonthly - co2ProducedShuttleMonthly);
  const co2SavedPercent = Math.round((co2SavedMonthly / co2ProducedCarMonthly) * 100) || 0;

  // Shift Timing timelines data
  const shiftTimelines: Record<string, { start: string; pickStart: string; notification: string; arrival: string }> = {
    'Morning Shift': {
      start: '07:00 AM',
      pickStart: '06:10 AM',
      notification: '05:55 AM',
      arrival: '06:50 AM',
    },
    'General Shift': {
      start: '09:00 AM',
      pickStart: '08:10 AM',
      notification: '07:55 AM',
      arrival: '08:50 AM',
    },
    'Evening Shift': {
      start: '01:00 PM',
      pickStart: '12:10 PM',
      notification: '11:55 AM',
      arrival: '12:50 PM',
    },
    'Night Shift': {
      start: '10:00 PM',
      pickStart: '09:10 PM',
      notification: '08:55 PM',
      arrival: '09:50 PM',
    },
  };

  const currentTimeline = shiftTimelines[activeShift] || shiftTimelines['General Shift'];

  return (
    <section id="corporate-sync" className="py-24 bg-slate-950 text-slate-100 border-t border-slate-900" data-testid="corporate-sync-section">
      
      {/* CSS Animation Keyframes for SVG Route Paths */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash {
          to {
            stroke-dashoffset: -40;
          }
        }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.25; }
          50% { transform: scale(1.3); opacity: 0.55; }
        }
        @keyframes vehicleMove {
          0% { stroke-dashoffset: 200; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-dash-route {
          stroke-dasharray: 8, 4;
          animation: dash 1.5s linear infinite;
        }
        .animate-pulse-ring {
          transform-origin: center;
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
        .shuttle-vehicle-dot {
          animation: vehicleMove 6s linear infinite;
          stroke-dasharray: 10, 190;
        }
      `}} />

      {/* ════════════════════════════════════
          HERO HEADER
      ════════════════════════════════════ */}
      <div className="relative overflow-hidden bg-slate-950 pb-16">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[140px] bg-brand-500/10 pointer-events-none" />
        <div className="absolute -right-48 top-1/3 w-[500px] h-[500px] rounded-full blur-[140px] bg-amber-500/5 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-xs font-semibold text-brand-400 tracking-wider uppercase"
          >
            <Activity className="h-3 w-3" />
            Active Route Optimization
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-black tracking-tight"
          >
            Strive{' '}
            <span className="bg-gradient-to-r from-brand-400 to-amber-500 bg-clip-text text-transparent">
              Corporate Sync
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            A fully integrated corporate employee transportation network designed to streamline daily commutes. Optimize routes, enhance operational efficiency, reduce carbon emissions, and deliver a safe, reliable, and cost-effective mobility solution.
          </motion.p>
        </div>
      </div>

      {/* ════════════════════════════════════
          COMMUTE EVALUATION CALCULATOR
      ════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Sliders Input Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-8 rounded-2xl border border-slate-900 bg-slate-900/30 space-y-8"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">Interactive Calculator</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">Evaluate Your Commute</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Customize your workforce parameters to instantly evaluate optimized fleet planning, route efficiency, and transportation cost estimates.
              </p>
            </div>

            {/* Slider 1: Employee Count */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                <label htmlFor="employeeRange" className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-brand-500" /> Number of Employees
                </label>
                <span className="text-brand-400 font-mono text-lg">{employeeCount}</span>
              </div>
              <input
                id="employeeRange"
                type="range"
                min="20"
                max="1000"
                step="10"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-brand-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                <span>20</span>
                <span>500</span>
                <span>1000</span>
              </div>
            </div>

            {/* Slider 2: Commute Distance */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-200">
                <label htmlFor="distanceRange" className="flex items-center gap-2">
                  <Compass className="h-4 w-4 text-amber-500" /> Avg Commute Distance (One Way)
                </label>
                <span className="text-amber-400 font-mono text-lg">{commuteDistance} km</span>
              </div>
              <input
                id="distanceRange"
                type="range"
                min="5"
                max="60"
                step="1"
                value={commuteDistance}
                onChange={(e) => setCommuteDistance(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-bold uppercase">
                <span>5 km</span>
                <span>30 km</span>
                <span>60 km</span>
              </div>
            </div>

            {/* Shift Select Buttons */}
            <div className="space-y-3 pt-2">
              <label className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-500" /> Select Target Shift Timing
              </label>
              <div className="grid grid-cols-2 gap-2">
                {Object.keys(shiftTimelines).map((shiftName) => {
                  const isActive = activeShift === shiftName;
                  return (
                    <button
                      key={shiftName}
                      onClick={() => setActiveShift(shiftName)}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all duration-200 text-center ${
                        isActive
                          ? 'border-brand-500 bg-brand-500/10 text-brand-400'
                          : 'border-slate-800 bg-slate-950/40 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {shiftName}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Savings & Optimization Dashboard Display */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            
            {/* Stat 1: Shuttles vs Cars */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/30 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-500 w-fit">
                  <Users className="h-5 w-5" />
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Fleet Optimization</h4>
                <p className="text-slate-300 text-xs">
                  Replacing individual vehicle commutes with efficient, coordinated corporate shuttle solutions.
                </p>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">{shuttlesNeeded}</span>
                <span className="text-slate-400 text-xs font-semibold">Shuttles vs</span>
                <span className="text-xl font-bold text-slate-500 line-through">{employeeCount} cars</span>
              </div>
            </div>

            {/* Stat 2: Budget Cost Savings */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/30 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500 w-fit">
                  <Percent className="h-5 w-5" />
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Monthly Budget Saved</h4>
                <p className="text-slate-300 text-xs">
                  Optimized route planning helps reduce transportation costs while improving fleet efficiency and operational performance.
                </p>
              </div>
              <div className="mt-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black text-emerald-400">{savingsPercent}%</span>
                  <span className="text-xs text-slate-500">({Math.round(monthlySavings / 1000)}k Saved)</span>
                </div>
                <div className="w-full bg-slate-950 h-1.5 rounded-full overflow-hidden mt-3">
                  <div className="bg-emerald-500 h-full" style={{ width: `${savingsPercent}%` }} />
                </div>
              </div>
            </div>

            {/* Stat 3: Carbon Savings */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/30 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-teal-500/10 text-teal-500 w-fit">
                  <Leaf className="h-5 w-5" />
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Carbon Savings</h4>
                <p className="text-slate-300 text-xs">
                  Estimated monthly CO₂ emissions reduced through optimized employee shuttle and shared transportation solutions.
                </p>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-teal-400">{co2SavedPercent}%</span>
                <span className="text-slate-400 text-xs font-semibold">({co2SavedMonthly.toFixed(1)} Metric Tons)</span>
              </div>
            </div>

            {/* Stat 4: Cost per Employee */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-900/30 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-500 w-fit">
                  <TrendingDown className="h-5 w-5" />
                </div>
                <h4 className="text-slate-400 text-xs font-bold uppercase tracking-wider">Avg Cost / Head</h4>
                <p className="text-slate-300 text-xs">
                  Average monthly employee transportation cost based on optimized corporate mobility planning.
                </p>
              </div>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-4xl font-black text-white">${Math.round(monthlyShuttleCommuteTotal / employeeCount)}</span>
                <span className="text-slate-400 text-xs font-semibold">vs</span>
                <span className="text-lg font-bold text-slate-500 line-through">${Math.round(monthlyCarCommuteTotal / employeeCount)}</span>
              </div>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ════════════════════════════════════
      {/* ════════════════════════════════════
          INTERACTIVE SHIFT TIMELINE
      ════════════════════════════════════ */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-brand-500 uppercase">
              Chronological Synchronization
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Shift Synchronization Timeline
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Discover how Strive Wheels' intelligent dispatch system coordinates every stage of the employee commute, ensuring timely pickups, optimized routes, and on-time arrivals before every shift.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-900 hidden md:block z-0" />

            {/* Event 1 */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-950 z-10 space-y-3 relative">
              <span className="absolute -top-3 left-6 px-2.5 py-0.5 bg-brand-500 text-slate-950 font-bold text-[9px] uppercase rounded-full">
                Step 01
              </span>
              <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase pt-2">T - 60 Minutes</p>
              <h4 className="text-base font-bold text-white">Route Optimization</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our intelligent dispatch platform analyzes employee pickup locations, intelligently clusters travel routes, and generates the most efficient transportation plans to ensure safe, punctual, and cost-effective employee mobility.
              </p>
              <div className="text-xs font-semibold text-brand-400 bg-brand-500/5 px-2 py-1 rounded w-fit border border-brand-500/10">
                Active at {currentTimeline.notification}
              </div>
            </div>

            {/* Event 2 */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-950 z-10 space-y-3 relative">
              <span className="absolute -top-3 left-6 px-2.5 py-0.5 bg-brand-500 text-slate-950 font-bold text-[9px] uppercase rounded-full">
                Step 02
              </span>
              <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase pt-2">T - 30 Minutes</p>
              <h4 className="text-base font-bold text-white">Smart Trip Notifications</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Employees receive instant notifications with vehicle details, chauffeur contact information, pickup location, and real-time journey updates for a seamless boarding experience.
              </p>
              <div className="text-xs font-semibold text-brand-400 bg-brand-500/5 px-2 py-1 rounded w-fit border border-brand-500/10">
                Pushed at {currentTimeline.notification}
              </div>
            </div>

            {/* Event 3 */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-950 z-10 space-y-3 relative">
              <span className="absolute -top-3 left-6 px-2.5 py-0.5 bg-brand-500 text-slate-950 font-bold text-[9px] uppercase rounded-full">
                Step 03
              </span>
              <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase pt-2">T - 20 Minutes</p>
              <h4 className="text-base font-bold text-white">Journey Execution</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our vehicles arrive at designated pickup locations, digitally verify passenger boarding, and operate along intelligently optimized routes - ensuring safe, punctual, and seamless employee transportation.
              </p>
              <div className="text-xs font-semibold text-brand-400 bg-brand-500/5 px-2 py-1 rounded w-fit border border-brand-500/10">
                Departs at {currentTimeline.pickStart}
              </div>
            </div>

            {/* Event 4 */}
            <div className="p-6 rounded-xl border border-slate-900 bg-slate-950 z-10 space-y-3 relative">
              <span className="absolute -top-3 left-6 px-2.5 py-0.5 bg-brand-500 text-slate-950 font-bold text-[9px] uppercase rounded-full">
                Step 04
              </span>
              <p className="text-[10px] text-slate-500 font-mono tracking-wider uppercase pt-2">T - 0 Minutes</p>
              <h4 className="text-base font-bold text-white">On-Time Shift Arrivals</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our synchronized fleet operations ensure employees arrive safely and punctually before every shift, enabling seamless workforce transitions and uninterrupted business operations.
              </p>
              <div className="text-xs font-semibold text-emerald-400 bg-emerald-500/5 px-2 py-1 rounded w-fit border border-emerald-500/10">
                Arrives at {currentTimeline.arrival}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          CORE CORPORATE FEATURES
      ════════════════════════════════════ */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1 space-y-6">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Advanced Telematics & <br />
              Intelligent Optimization
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Our intelligent mobility platform seamlessly integrates employee schedules with real-time fleet dispatch, enabling optimized route planning, live vehicle tracking, performance analytics, and centralized corporate billing for a smarter, more efficient transportation experience.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">100% Verified Drivers & GPS Telemetry</span>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-brand-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-200">Pre-calculated corporate SLA invoices</span>
              </div>
            </div>
            <a href="/#booking-form" className="inline-block pt-2">
              <Button className="font-bold bg-brand-500 text-slate-950 hover:bg-brand-400 flex items-center gap-2">
                Sync Your Corporate Fleet <ArrowRight className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1: Dynamic AI Routing (Blue) */}
            <div className="p-6 rounded-xl border border-blue-500/10 bg-gradient-to-br from-slate-950 to-blue-950/10 hover:border-blue-500/30 transition-all duration-300 space-y-3">
              <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg w-fit">
                <Compass className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Dynamic AI Routing</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Our proprietary optimization algorithms analyze employee boarding spots and traffic layers daily to construct the shortest, speediest paths.
              </p>
            </div>
            
            {/* Card 2: Multi-Shift Support (Amber) */}
            <div className="p-6 rounded-xl border border-amber-500/10 bg-gradient-to-br from-slate-950 to-amber-950/10 hover:border-amber-500/30 transition-all duration-300 space-y-3">
              <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg w-fit">
                <Clock className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Multi-Shift Support</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whether it&apos;s early morning office commutes, evening shift operations, night-shift transportation, or 24/7 business travel, Strive Wheels ensures every journey is seamlessly synchronized, safe, and on schedule.
              </p>
            </div>

            {/* Card 3: Smart Hub Clustering (Emerald) */}
            <div className="p-6 rounded-xl border border-emerald-500/10 bg-gradient-to-br from-slate-950 to-emerald-950/10 hover:border-emerald-500/30 transition-all duration-300 space-y-3">
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg w-fit">
                <MapPin className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Smart Hub Clustering</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Avoids complex single-pickups by dynamically clustering employees into centralized residential safety pick-up nodes.
              </p>
            </div>

            {/* Card 4: Dedicated Account Manager (Violet) */}
            <div className="p-6 rounded-xl border border-violet-500/10 bg-gradient-to-br from-slate-950 to-violet-950/10 hover:border-violet-500/30 transition-all duration-300 space-y-3">
              <div className="p-2.5 bg-violet-500/10 text-violet-400 rounded-lg w-fit">
                <Building className="h-5 w-5" />
              </div>
              <h4 className="text-base font-bold text-white">Dedicated Account Manager</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Benefit from a dedicated single POC, comprehensive SLA monitoring, 24/7 emergency assistance, and customized reporting dashboards - designed to simplify and enhance your corporate mobility operations.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
