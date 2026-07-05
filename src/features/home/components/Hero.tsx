import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookingSearchForm } from './BookingSearchForm';
import vehicleCar from '../../../assets/vehicle_car.png';
import vehicleTempo from '../../../assets/vehicle_tempo.png';
import vehicleMinibus from '../../../assets/vehicle_minibus.png';
import vehicleHitechBus from '../../../assets/vehicle_hitech_bus.png';
import vehicleTruck from '../../../assets/vehicle_truck.png';

const vehicleSlides = [
  {
    id: 'car',
    image: vehicleCar,
    label: 'Sedan / SUV',
    subLabel: '1–4 Passengers',
    badge: '4-Wheel',
    accent: '#22d3ee',       // cyan
    gradientFrom: 'rgba(6,182,212,0.18)',
    gradientTo: 'rgba(15,23,42,0.82)',
  },
  {
    id: 'tempo',
    image: vehicleTempo,
    label: 'Tempo Van',
    subLabel: '12–15 Passengers',
    badge: 'Tempo',
    accent: '#f59e0b',       // amber
    gradientFrom: 'rgba(245,158,11,0.18)',
    gradientTo: 'rgba(15,23,42,0.82)',
  },
  {
    id: 'minibus',
    image: vehicleMinibus,
    label: 'Mini Bus',
    subLabel: '28 Passengers',
    badge: 'Mini Bus',
    accent: '#a78bfa',       // violet
    gradientFrom: 'rgba(139,92,246,0.18)',
    gradientTo: 'rgba(15,23,42,0.82)',
  },
  {
    id: 'hitechbus',
    image: vehicleHitechBus,
    label: 'Hi-Tech Coach',
    subLabel: '54 Passengers',
    badge: 'Luxury Coach',
    accent: '#34d399',       // emerald
    gradientFrom: 'rgba(52,211,153,0.18)',
    gradientTo: 'rgba(15,23,42,0.82)',
  },
  {
    id: 'truck',
    image: vehicleTruck,
    label: 'Commercial Truck',
    subLabel: 'Heavy-Duty Cargo Transport',
    badge: 'Cargo & Logistics',
    accent: '#f97316',       // orange
    gradientFrom: 'rgba(249,115,22,0.18)',
    gradientTo: 'rgba(15,23,42,0.82)',
  },
];

export const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const intervalRef = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = React.useCallback((idx: number) => {
    setActiveIndex(idx);
  }, []);

  // Auto-advance every 4s
  React.useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % vehicleSlides.length);
    }, 4000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const current = vehicleSlides[activeIndex];

  return (
    <div className="relative min-h-[100vh] flex flex-col items-center justify-center overflow-hidden pt-16">

      {/* ════════════════════════════════════
          BACKGROUND CAROUSEL (full screen)
      ════════════════════════════════════ */}
      <div className="absolute inset-0 z-0">

        {/* Slides */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            {/* Vehicle image — large, centered-right, partially visible */}
            <img
              src={current.image}
              alt={current.label}
              className="absolute bottom-0 right-0 w-[70%] max-w-4xl h-auto object-contain object-bottom opacity-30 select-none pointer-events-none"
              draggable={false}
            />
          </motion.div>
        </AnimatePresence>

        {/* Colour-tinted overlay that transitions with each slide */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current.id + '-overlay'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 70% 70% at 80% 60%, ${current.gradientFrom} 0%, transparent 70%),
                linear-gradient(to bottom, rgba(2,6,23,0.7) 0%, rgba(2,6,23,0.55) 40%, rgba(2,6,23,0.88) 100%)
              `,
            }}
          />
        </AnimatePresence>

        {/* Static dark base so text is always readable */}
        <div className="absolute inset-0 bg-slate-950/50" />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right,#94a3b8 1px,transparent 1px),linear-gradient(to bottom,#94a3b8 1px,transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        {/* Ambient left glow */}
        <div
          className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[130px] pointer-events-none"
          style={{ background: `radial-gradient(circle, ${current.gradientFrom} 0%, transparent 70%)` }}
        />
      </div>

      {/* ════════════════════════════════════
          FOREGROUND CONTENT (overlay)
      ════════════════════════════════════ */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col items-start space-y-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-500" />
          </span>
          <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase"
            style={{ color: current.accent }}>
            Fast &amp; Easy Way to Book Shuttles &amp; Rides
          </p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-white leading-[1.1] max-w-2xl"
        >
          Daily Commutes,
          <br />
          Instant Rides &amp;{' '}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: `linear-gradient(90deg, ${current.accent}, #f8fafc)` }}
          >
            Group Coaches
          </span>
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl"
        >
          Book instant city rides, daily corporate employee shuttles, or premium group coach services.
          Enjoy flexible scheduling, GPS-enabled live tracking, and transparent pricing for a seamless travel experience.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="flex flex-wrap gap-8"
        >
          {[
            { value: '4+', label: 'Vehicle Classes' },
            { value: '98%', label: 'On-Time Rate' },
            { value: '24/7', label: 'Support' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="text-2xl font-black text-white">{stat.value}</span>
              <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Booking Form */}
        <motion.div
          id="booking-form"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="w-full relative z-20"
        >
          <BookingSearchForm />
        </motion.div>

      </div>

      {/* ════════════════════════════════════
          BOTTOM: slide indicators + label
      ════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center gap-4">

        {/* Dots */}
        <div className="flex items-center gap-2">
          {vehicleSlides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goTo(idx)}
                aria-label={slide.label}
                className="relative h-[3px] rounded-full transition-all duration-500 overflow-hidden"
                style={{ width: isActive ? 40 : 16, background: 'rgba(148,163,184,0.3)' }}
              >
                {isActive && (
                  <motion.span
                    key={slide.id + '-bar'}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4, ease: 'linear' }}
                    className="absolute inset-0 origin-left rounded-full"
                    style={{ background: current.accent }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Current vehicle label */}
        <AnimatePresence mode="wait">
          <motion.span
            key={current.id + '-label'}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.35 }}
            className="text-xs font-semibold tracking-wider uppercase"
            style={{ color: current.accent }}
          >
            {current.label} · {current.subLabel}
          </motion.span>
        </AnimatePresence>
      </div>

    </div>
  );
};

export default Hero;
